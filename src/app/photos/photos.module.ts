import { NgModule } from "@angular/core";

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
  ]
})
export class PhotosModule {}
