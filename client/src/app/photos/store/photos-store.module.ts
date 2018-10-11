import { NgModule } from "@angular/core";
import { PhotosReducerModule } from "./photos-reducer.module";

@NgModule({
  imports: [
    PhotosReducerModule
  ],
  providers: []
})
export class PhotosStoreModule { }