import { Component, OnInit } from '@angular/core';
import { ServicesInfoService } from '../services/_ServiceInfo/-services-info.service';
import { Router } from '@angular/router';
import { ServicesTarjetasService } from '../services/_ServicesTarjetas/-services-tarjetas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public listaInfo: any[];
  private pos: number;

  constructor(private _serviceInfo : ServicesInfoService,private _router: Router) { 
    this.listaInfo = _serviceInfo.getlistaInfo();
  }

  ngOnInit() {

  }

  /*Metodos*/

  public buscarInfo(cadena : String){

    console.log(cadena);
    if (cadena.toLowerCase() != "enjambre" && cadena.toLowerCase() != "confederacion" && cadena.toLowerCase() != "ejecutores") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No está el dato que buscas!!',
        footer: 'Para buscar informacion Terrans: "confederacion",Zergs :"enjambre", Protoss:"ejecutores"'
      })
    }
    else {
      this._router.navigate(['/tarjeta', cadena]);
    }
  }

  public obtenerPosInfo(index : number){
    this.pos = index
    console.log(this.pos);
    if(this.pos == 0){
      this._router.navigate(['/tarjeta', 'confederacion']);
    }else if(this.pos == 1){
      this._router.navigate(['/tarjeta', 'enjambre']);
    }else{
      this._router.navigate(['/tarjeta', 'ejecutores']);
    }
  }


  handleKeyEnter(event) {
    event.preventDefault();
  }

}
