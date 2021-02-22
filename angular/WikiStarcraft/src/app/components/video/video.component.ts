import { Component, OnInit } from '@angular/core';
import { ServicesVideoService } from '../services/_ServicesVideo/services-video.service';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public listaVideos : any[];
  public video : number;

  constructor(private _serviceVideo : ServicesVideoService,private _route: ActivatedRoute) {
  
    this.listaVideos = _serviceVideo.getListaVideos();
    console.log(this.listaVideos);

   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.video = params.pos;
    })
  }

}
