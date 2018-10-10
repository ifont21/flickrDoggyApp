import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppReducerModule } from "./app-reducer.module";

@NgModule({
  imports: [
    AppReducerModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: []
})
export class AppStoreModule { }