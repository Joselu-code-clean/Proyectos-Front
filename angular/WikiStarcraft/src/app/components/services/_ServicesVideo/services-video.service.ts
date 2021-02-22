import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesVideoService {

  private videos : any[] = [
    {src : "../../../assets/videos/gTerrans.mp4"},
    {src : "../../../assets/videos/gZergs.mp4"},
    {src : "../../../assets/videos/gProtoss.mp4"}
  ]

  constructor() { }

  public getListaVideos(){
    return this.videos;
  }



}
