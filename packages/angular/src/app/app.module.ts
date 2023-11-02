import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryModule } from './modules/gallery.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GalleryModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
