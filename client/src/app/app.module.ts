import { RoutesModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppStoreModule,
    BrowserModule,
    CoreModule,
    SharedModule,

    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
