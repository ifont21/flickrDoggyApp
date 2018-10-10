import { DoggyDetailsComponent } from './pages/doggy-details/doggy-details.component';
import { Routes, RouterModule } from "@angular/router";
import { DoggiesComponent } from "./pages/doggies/doggies.component";
import { UserPhotosComponent } from "./pages/user-photos/user-photos.component";
import { PhotosComponent } from './pages/photos/photos.component';


export const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'doggies'
      },
      {
        path: 'doggies',
        component: DoggiesComponent,
        children: [
          {
            path: ':doggyId',
            component: DoggyDetailsComponent,
            children: [
              {
                path: 'user-photos',
                component: UserPhotosComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

export const PhotosRoutesModule = RouterModule.forChild(routes);