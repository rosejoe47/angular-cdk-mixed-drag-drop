import { ModuleWithProviders, NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {
  MixedCdkDragSizeHelperDirective,
  MixedCdkDragDropDirective,
  MixedCdkDropListDirective
} from './mixed-cdk-drag-drop.directive';
import { MixedDragDropConfig } from './mixed-drag-drop';

@NgModule({
  imports: [
    DragDropModule,
  ],
  declarations: [
    MixedCdkDragDropDirective,
    MixedCdkDropListDirective,
    MixedCdkDragSizeHelperDirective,
  ],
  exports: [
    MixedCdkDragDropDirective,
    MixedCdkDropListDirective,
    MixedCdkDragSizeHelperDirective,
  ],
})
export class MixedCdkDragDropModule {
  static forRoot(config: MixedDragDropConfig): ModuleWithProviders<MixedCdkDragDropModule> {
    return {
      ngModule: MixedCdkDragDropModule,
      providers: [
        {
          provide: MixedDragDropConfig,
          useValue: config,
        }
      ]
    }
  }
}
