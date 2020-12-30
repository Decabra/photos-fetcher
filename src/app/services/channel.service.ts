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
    return this.http.get(this.photosApiUrl);
  }

  postPhotos(url: string, msg: string): any {
    return this.http.post(url, msg);
  }

  deletePhotos(photoId: any): any {
    return this.http.delete(`${this.photosApiUrl}/${photoId}`);
  }
  putPhotos(url: string, msg: string): any {
    return this.http.put(url, msg);
  }
}
