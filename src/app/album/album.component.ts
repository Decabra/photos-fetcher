import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private albumUrl = 'https://jsonplaceholder.typicode.com/albums';
  jsonAlbumData: object[] = [];
  // userId: number | undefined;
  id: number | undefined;
  // title: string | undefined;

  constructor() {
    // this.channelService.display();
  }

  ngOnInit(): void {
    fetch(this.albumUrl).then( (response) => response.json() )
      .then( (data) => {
          this.jsonAlbumData = data;
          // this.jsonData.map( (obj: object) => {
          //   this.userId = obj.id;
          //   this.userId = obj.userId;
          //   this.userId = obj.title;
          //   console.log(this.jsonData.length);
          // } );
        }
      ).catch(console.log);
  }
  showPhotos(arg: number): void {
    this.id = arg;
    console.log(arg);
  }

}
