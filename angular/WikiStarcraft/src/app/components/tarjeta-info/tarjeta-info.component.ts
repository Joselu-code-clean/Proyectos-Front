import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import { ServicesTarjetasService } from '../services/_ServicesTarjetas/-services-tarjetas.service';


@Component({
  selector: 'app-tarjeta-info',
  templateUrl: './tarjeta-info.component.html',
  styleUrls: ['./tarjeta-info.component.css']
})
export class TarjetaInfoComponent implements OnInit {

  public listaTarjetas : any[];
  public ocurrencia;
  public pos;

  constructor(_serviceTarjeta: ServicesTarjetasService,private _route: ActivatedRoute) { 
    this.listaTarjetas = _serviceTarjeta.getlistaInfo();
   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.ocurrencia = params['pos'];
      this.devolverPos();
    })
  }


  public devolverPos(){
    if(this.ocurrencia == "confederacion"){
      this.pos = 0;
    }else if(this.ocurrencia == "enjambre"){
      this.pos = 1;
    }else if(this.ocurrencia == "ejecutores"){
      this.pos = 2;
    }
  }

}
