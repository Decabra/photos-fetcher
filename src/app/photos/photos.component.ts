import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  jsonPhotosData: object[] = [];
  constructor() { }

  ngOnInit(): void {
    fetch(this.photosUrl).then( (response) => response.json() )
      .then( (data) => {
          this.jsonPhotosData = data;
          // this.jsonData.map( (obj: object) => {
          //   this.userId = obj.id;
          //   this.userId = obj.userId;
          //   this.userId = obj.title;
          // console.log(this.jsonPhotosData);
          // } );
        }
      ).catch(console.log);
  }

}
