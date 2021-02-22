import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesInfoService {


 private listaInfo: any [] = [
  {
     img:"../../../assets/img/info/terrans.jpg",
     titulo: "La Confederacion Terrans",
     info: " Los Terran representan a una excolonia de humanos de la raza humana en una versión futurista."
  },
  {
     img:"../../../assets/img/info/zergs.jpg",
     titulo: "El Enjambre Zergs",
     info: "Fue creada  por los antiguos Xel'Naga y es originaria del planeta Zerus."
  },
  {
     img:"../../../assets/img/info/protoss.jpg",
     titulo: "Los Ejecutores Protoss",
     info: "Son una raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psiónicos. Fue creada  por los antiguos Xel'Naga y es originaria del planeta Aiur."
  }
 ] 

  constructor() { }

  public getlistaInfo(){
    return this.listaInfo;
  }

}
