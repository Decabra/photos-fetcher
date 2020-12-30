import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  jsonAlbumData: object[] = [];
  id: number | undefined;

  constructor(private channelService: ChannelService ) {
  }

  ngOnInit(): void {
    this.channelService.getAlbums().subscribe( (data: any[]) => {
      this.jsonAlbumData = data;
    } );
  }
  showPhotos(arg: number): void {
    this.id = arg;
    console.log(arg);
  }

}
