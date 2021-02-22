import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../services/_ServicesGaleria/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [GaleriaService]
})
export class GaleriaComponent implements OnInit {

  public galeriaTerran: any [];
  public galeriaZergs: any [];
  public galeriaProtoss: any [];


  constructor(private _galeriaService: GaleriaService) { 
    this.galeriaTerran = _galeriaService.getImgTerrans();
    this.galeriaZergs = _galeriaService.getImgZergs();
    this.galeriaProtoss = _galeriaService.getImgProtoss();
  }

  ngOnInit() {
    console.log(this.galeriaTerran);
    console.log(this.galeriaZergs);
    console.log(this.galeriaProtoss);
  }

}
