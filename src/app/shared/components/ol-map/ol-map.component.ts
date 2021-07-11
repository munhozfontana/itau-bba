import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import { Feature, Map, View } from 'ol';
import { defaults as DefaultControls, ScaleLine } from 'ol/control';
import { Extent } from 'ol/extent';
import { createStyleFunction } from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat, get as GetProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import Projection from 'ol/proj/Projection';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { Icon, Style } from 'ol/style';
import proj4 from 'proj4';
import { CoordinateModel } from '../../models/cordinate_model';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.sass'],
})
export class OlMapComponent implements AfterViewInit {
  @Input() center!: CoordinateModel;
  @Input() zoom!: number;
  @Input() marks: CoordinateModel[] = [];
  view!: View;
  projection!: Projection;
  extent: Extent = [-20026376.39, -20048966.1, 20026376.39, 20048966.1];
  Map!: Map;
  @Output() mapReady = new EventEmitter<Map>();

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    if (!this.Map) {
      this.zone.runOutsideAngular(() => this.initMap());
    }
    setTimeout(() => this.mapReady.emit(this.Map));
  }

  private initMap(): void {
    proj4.defs(
      'EPSG:3857',
      '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'
    );
    register(proj4);
    this.projection = GetProjection('EPSG:3857');
    this.projection.setExtent(this.extent);
    this.view = new View({
      center: fromLonLat([
        parseFloat(this.center.longitude),
        parseFloat(this.center.latitude),
      ]),
      zoom: this.zoom,

      projection: this.projection,
    });

    this.Map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: this.parseMarks(this.marks),
          }),
        }),
      ],
      target: 'map',
      view: this.view,
      controls: DefaultControls().extend([new ScaleLine({})]),
    });
  }

  parseMarks(marks: CoordinateModel[]): Feature[] {
    return marks.map((item, index) => {
      const a = new Feature({});
      a.setGeometry(
        new Point(
          fromLonLat([parseFloat(item.longitude), parseFloat(item.latitude)])
        )
      );
      a.setStyle(
        createStyleFunction(
          new Style({
            image: new Icon({
              scale: 0.12,
              src: 'https://logospng.org/download/itau/logo-itau-256.png',
            }),
          })
        )
      );
      a.setId(index);
      return a;
    });
  }
}
