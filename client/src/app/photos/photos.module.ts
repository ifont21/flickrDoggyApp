import { NgModule } from "@angular/core";
import { DoggiesComponent } from './pages/doggies/doggies.component';
import { DoggyDetailsComponent } from './pages/doggy-details/doggy-details.component';
import { UserPhotosComponent } from './pages/user-photos/user-photos.component';
import { PhotosRoutesModule } from "./photos.routes";
import { PhotosComponent } from './pages/photos/photos.component';

@NgModule({
  declarations: [
    DoggiesComponent,
    DoggyDetailsComponent,
    UserPhotosComponent,
    PhotosComponent
  ],
  imports: [
    PhotosRoutesModule
  ],
  providers: []
})
export class PhotosModule { }