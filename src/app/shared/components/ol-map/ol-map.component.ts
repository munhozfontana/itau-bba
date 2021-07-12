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
import { fromLonLat } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
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
          source: new OSM({}),
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
