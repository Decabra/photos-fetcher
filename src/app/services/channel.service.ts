import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private albumApiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosApiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {
  }

  getAlbums(): any {
    return this.http.get(this.albumApiUrl);
  }

  getPhotos(): any {
    // return this.http.get(`${this.photosApiUrl}/${photoId}`);
    return this.http.get(this.photosApiUrl);
  }

  // display(): void {
  //   console.log('channel service');
  // }
}
