import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumComponent} from './album/album.component';
import {PhotosComponent} from './photos/photos.component';

const routes: Routes = [
  {path: '', redirectTo: 'album', pathMatch: 'full'},
  {path: 'album', component: AlbumComponent},
  {path: 'photos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
