import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  jsonPhotosData: object[] = [];

  constructor(private channelService: ChannelService, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.channelService.getPhotos().subscribe( (data: any[]) => {
        data.map((pObj) => {
          if (String(pObj.albumId) === params.get('id')){
            this.jsonPhotosData.push(pObj);
          }
        });
      });
    });
  }

}
