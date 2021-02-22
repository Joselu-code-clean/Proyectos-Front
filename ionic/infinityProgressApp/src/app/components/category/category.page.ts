import { NavController } from '@ionic/angular';
import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  // Lista de nombres de categorias
  public categories = [];

  constructor(private data_service: DataService, private navController: NavController) { }

  ngOnInit() {
    this.categories = this.data_service.getCategory();
  }

    /*Funcion de navegacion:*/
    public goToRutine(index){
      /*Guardamos el index seleccionado para mostrar la lista de ejercicios de la rutina */
      this.data_service.setNavigateIndexCategory(index);
      /*Navegamos a las rutinas*/
      this.navController.navigateForward('/routine-list');
    }

}
