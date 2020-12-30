import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service';
import { ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  jsonPhotosData: object[] = [];
  contactForm: FormGroup;
  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  modalTitle: string | undefined;
  statusMessage: string | undefined;
  urlInput = '';
  titleInput = '';
  delStatus: any;


  constructor(private channelService: ChannelService, private route: ActivatedRoute ) {
    this.contactForm  = new FormGroup({
      title: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)])
    });
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

  showModal(selector: string, className: string, modalTitle: string, statusMessage: string, e: any): void{
    this.statusMessage = statusMessage;
    this.modalTitle = modalTitle;
    // @ts-ignore
    document.querySelector('html').classList.add('is-clipped');
    const modal = document.querySelector(selector);
    // @ts-ignore
    modal.classList.add(className);
    switch (modalTitle){
      case 'Add':
        // this.titleInput = '';
        // // @ts-ignore
        // this.urlInput = '';
        break;
      case 'Edit':
        this.jsonPhotosData.map((pObj) => {
          // @ts-ignore
          if (String(pObj.id) === e.id) {
            // @ts-ignore
            this.titleInput = pObj.title;
            // @ts-ignore
            this.urlInput = pObj.url;
          }

    });
  }
  }

  cancelModal(selector: string, className: string): void{
    // @ts-ignore
    document.querySelector(selector).classList.remove(className);
    // @ts-ignore
    document.querySelector('html').classList.remove('is-clipped');
    // @ts-ignore
    // document.querySelector('article.modalMessage').style.display = 'none';
  }

  get title(): any{
    return this.contactForm.get('title');
  }

  get url(): any{
    return this.contactForm.get('url');
  }

  onSubmit(modalTitle: string): any{
    switch (modalTitle){
      case 'Add':
        // @ts-ignore
        this.channelService.postPhotos(this.contactForm.get('url').value, this.contactForm.get('title').value).subscribe( (data: any) => {
          console.log(data);
        } );
        // @ts-ignore
        break;
      case 'Edit':
        // @ts-ignore
        this.channelService.putPhotos(this.contactForm.get('url').value, this.contactForm.get('title').value).subscribe( (data: any) => {
          console.log(data);
        } );
        break;
    }
    // @ts-ignore
    document.querySelector('article.modalMessage').style.display = 'block';
    setTimeout( () => {
      // @ts-ignore
      document.querySelector('article.modalMessage').style.display = 'none';
    }, 5000 );
  }

  delPhoto(e: any): void {
    this.channelService.deletePhotos(e.id).subscribe((data: any) => {
      console.log(data);
      // @ts-ignore
      document.getElementById('art' + e.id).style.display = 'block';
    });
    setTimeout( () => {
      // @ts-ignore
      document.getElementById('art' + e.id).style.display = 'none';
    }, 5000 );
  }
}
