import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private imagenesTerrans: any[] = [
    {img:"../../../assets/img/galeria/terrans/1.jpg"},
    {img:"../../../assets/img/galeria/terrans/2.jpg"},
    {img:"../../../assets/img/galeria/terrans/3.jpg"},
    {img:"../../../assets/img/galeria/terrans/4.jpg"},
    {img:"../../../assets/img/galeria/terrans/5.jpg"},
    {img:"../../../assets/img/galeria/terrans/6.jpg"},
    {img:"../../../assets/img/galeria/terrans/7.jpg"},
    {img:"../../../assets/img/galeria/terrans/8.jpg"},
    {img:"../../../assets/img/galeria/terrans/9.jpg"},
    {img:"../../../assets/img/galeria/terrans/10.jpg"},
    {img:"../../../assets/img/galeria/terrans/11.jpg"},
    {img:"../../../assets/img/galeria/terrans/12.jpg"},
    {img:"../../../assets/img/galeria/terrans/13.jpg"}
  ]
  private imagenesZergs: any[] = [
    {img:"../../../assets/img/galeria/zergs/1.jpg"},
    {img:"../../../assets/img/galeria/zergs/2.jpg"},
    {img:"../../../assets/img/galeria/zergs/3.jpg"},
    {img:"../../../assets/img/galeria/zergs/4.jpg"},
    {img:"../../../assets/img/galeria/zergs/5.jpg"},
    {img:"../../../assets/img/galeria/zergs/6.jpg"},
    {img:"../../../assets/img/galeria/zergs/7.jpg"},
    {img:"../../../assets/img/galeria/zergs/8.jpg"}
  ]
  private imagenesProtoss: any[] = [
    {img:"../../../assets/img/galeria/protoss/1.jpg"},
    {img:"../../../assets/img/galeria/protoss/2.jpg"},
    {img:"../../../assets/img/galeria/protoss/3.jpg"},
    {img:"../../../assets/img/galeria/protoss/4.jpg"},
    {img:"../../../assets/img/galeria/protoss/5.jpg"},
    {img:"../../../assets/img/galeria/protoss/6.jpg"},
    {img:"../../../assets/img/galeria/protoss/7.jpg"},
    {img:"../../../assets/img/galeria/protoss/8.jpg"}
  ]


  constructor() { }

  /*Metodos*/

  getImgTerrans(){
    return this.imagenesTerrans;
  }

  getImgZergs(){
    return this.imagenesZergs;
  }
  
  getImgProtoss(){
    return this.imagenesProtoss;
  }
}
