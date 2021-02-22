import { Component, OnInit } from '@angular/core';
import { GameplayService } from '../services/_ServicesGameplay/gameplay.service';
import { ServicesVideoService } from '../services/_ServicesVideo/services-video.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {


  public listaImg : any[];
  public titulo : any[];

  private mostrar: boolean = true;

  private pos : number;

  constructor(private _gameplayServices: GameplayService, private _videoService: ServicesVideoService, private _router : Router) {

    this.listaImg = _gameplayServices.getListaImg();
    this.titulo = _gameplayServices.getTitulos();
   }

  ngOnInit() {  }

  /*Metodos*/

  public obtenerPosVideo(index : number){
    this.pos = index
    console.log(this.pos);
    this._router.navigate(['/video',index]);
  }

public mostrarTitulo(numero){
  return this.titulo[numero].titulo;
}

  public getMostrar(){
    return this.mostrar;
  }

  public ocultarVideos(){
      this.mostrar = true;
  }
  public MostrarVideos(){
      this.mostrar = false;
  }

}
