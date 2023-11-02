import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './services';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery.module').then(m => m.GalleryModule), 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
