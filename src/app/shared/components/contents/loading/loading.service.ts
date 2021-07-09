import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private emitLoading = new EventEmitter<boolean>();

  public onLoading = (): void => {
    this.emitLoading.emit(true);
  };
  public offLoading = (): void => {
    setTimeout(() => {
      this.emitLoading.emit(false);
    }, 1000);
  };

  public getLoding = (): EventEmitter<boolean> => {
    return this.emitLoading;
  };
}
