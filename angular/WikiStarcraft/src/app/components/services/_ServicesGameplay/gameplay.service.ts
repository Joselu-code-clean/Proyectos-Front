import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {


  private listaImagenes: any[] = [
    {img:"../../../assets/img/gameplay/terrans.jpg"},
    {img:"../../../assets/img/gameplay/zergs.jpg"},
    {img:"../../../assets/img/gameplay/protoss.jpg"}

  ]

  private titulos: any[] = [
    {titulo:"Terrans"},
    {titulo:"Zergs"},
    {titulo:"Protoss"}
  ]

  constructor() { }

  /*Metotos*/

  public getTitulos(){
    return this.titulos;
  }

  public getListaImg(){
    return this.listaImagenes;
  }

}
