import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*PROPIEDADES*/

  private heroes = [];

  // Guarda el nombre del heroe seleccionado.
  private name;

  // Todas las cartas del juego
  private cards = [];

  constructor() { }

  /*GETTERS*/
  public getHeroes() {
    return this.heroes;
  }

  public getCards() {
    return this.cards;
  }

  public getNameHome() {
    return this.name;
  }

  /*SETTERS*/
  public setNameHome(newName) {
    this.name = newName;
  }

  public setHeroes(array: any) {
    this.heroes = array;
  }

  public setCards(array: any) {
    this.cards = array;
  }

  /*METODOS:*/
  public SwitchNameHeroToClass(nameHero: string) {
    let newName = '' ;
    switch (nameHero) {
      case 'garrosh':
        newName = 'guerrero';
        break;
      case 'anduin':
        newName = 'sacerdote';
        break;
      case 'jaina':
        newName = 'mago';
        break;
      case 'rexxar':
        newName = 'cazador';
        break;
      case 'uther':
        newName = 'paladin';
        break;
      case 'guldan':
        newName = 'brujo';
        break;
      case 'malfurion':
        newName = 'druida';
        break;
      case 'valeera':
        newName = 'picaro';
        break;
      case 'thrall':
        newName = 'chaman';
        break;
      default:
        newName = 'No se ha encontrado nada';
        break;
    }
    return newName;
  }

}
