import { AngularFirestore } from '@angular/fire/firestore';
import { UserLogin } from './../../models/exercise/userLogin';
import { UserData } from '../../models/exercise/userData';
import { FirebaseServiceService } from './../firebase/firebase-service.service';
import { PRINCIPIANTE, INTERMEDIO, AVANZADO } from './../../../assets/db/dataBase';
import { Injectable } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore_service: FirebaseServiceService, private firestore: AngularFirestore, private auth: AuthService) {
    this.getRoutinesCurrentUser();
  }

  // Propiedades de las estadisticas:
  private totalExercise = 0;
  private totalTime = 0;

  public getTotalExercise(){
    return this.totalExercise;
  }

  public getTotalTime(){
    var minutes = this.totalTime / 60;
    this.totalTime = Math.round((minutes + Number.EPSILON) * 100) / 100;
    return this.totalTime;
  }

  public plusTotalExercise(){
    this.totalExercise += 1;
  }

  public plusTotalTime(time){
    // Tengo que buscar la forma que muestre 2 decimales en estadisticas para que parezca que mostramos la hora.
    this.totalTime +=  Math.round( time / 360);
  }


  // *****************Lista de niveles*****************
  levels = [ "principiante", "intermedio", "avanzado"];
  
  public getLevels() {
    return this.levels;
  };

  public addLevel(newLevel){
    this.levels.push(newLevel);
  };

  // *****************Lista de nombre de las categorias*****************
  category = ["cardio","core","full body","tren inferior","tren superior"];

  public getCategory() {
    return this.category;
  };

  public addCategory(newCategory){
    this.category.push(newCategory);
  };

  // *****************Propiedades de navegacion*****************
  private navigateIndexDashboard; // Para mostrar las rutinas de la categoria selecciona del nivel indicado.
  private navigateIndexCategory; // Para mostrar las rutinas de dicha categoria.
  private navigateIndexRoutineChoose; // Para mostrar los ejercicios de la rutina elegida.
  private isFavoriteOrNormal; // Esta propiedad nos servira para saber si navegamos desde my-routines o routine-list.

  public getNavigateIndexDashboard(){
    return this.navigateIndexDashboard;
  }

  public setNavigateIndexDashboard(index){
    this.navigateIndexDashboard = index;
  }
  
  public getNavigateIndexCategory(){
    return this.navigateIndexCategory;
  }

  public setNavigateIndexCategory(index){
    this.navigateIndexCategory = index;
  }

  public getNavigateIndexRoutineChoose(){
    return this.navigateIndexRoutineChoose;
  }

  public setNavigateIndexRoutineChoose(index){
    this.navigateIndexRoutineChoose = index;
  }
  public getIsFavoriteOrNormal(){
    return this.isFavoriteOrNormal;
  }

  public setIsFavoriteOrNormal(name){
    this.isFavoriteOrNormal = name;
  }

  // *****************Propiedades de uso*****************

  private isMyRoutine: boolean;
  private nameRoutine: string;
  private currentExercise : number = 0;
  private dataUser = new UserData();

  public getIsMyRoutine(){
    return this.isMyRoutine;
  }

  public setIsMyRoutine(check: boolean){
    this.isMyRoutine = check;
  }

  public getNameRoutine(){
    return this.nameRoutine;
  }

  public setNameRoutine(routineChoose){
    this.nameRoutine = routineChoose;
  }

  public getCurrentExercise(){
    return this.currentExercise;
  }

  public setCurrentExercise(newExercise: number){
    this.currentExercise = newExercise;
  }

  public getDataUser(){
    return this.dataUser;
  }

  public initializeUser(){
    setTimeout(() => {
      this.getRoutinesCurrentUser();
    }, 250);
  }

  public setRoutineUser(newRoutine){
    this.dataUser = newRoutine;
  }

  // *****************Propiedades privadas*****************

  private dataBase:any = [];
  private nameLevel;
  private nameCategory;

  // *****************Funciones de Logicas*****************

  public getListRoutines(){
    let namesRoutines = [];
    this.dataBase = [];
    this.nameLevel = this.chooseLevel();
    this.nameCategory = this.chooseCategory();

    if(this.nameLevel == "PRINCIPIANTE"){
      this.dataBase = PRINCIPIANTE;
      // Guardamos las keys, que seran los nombres de las rutinas a mostrar.
      for (const rutina of this.dataBase) {
        if(rutina["nameCategory"] == this.nameCategory){
          for (const obj of rutina["routines"]) {
            namesRoutines.push(obj);
          }
        }
      }
        
    }else if(this.nameLevel == "INTERMEDIO"){
      this.dataBase = INTERMEDIO;
      for (const rutina of this.dataBase) {
        if(rutina["nameCategory"] == this.nameCategory){
          for (const obj of rutina["routines"]) {
            namesRoutines.push(obj);
          }
        }
      }
    }else if(this.nameLevel == "AVANZADO"){
      this.dataBase = AVANZADO;
      for (const rutina of this.dataBase) {
        if(rutina["nameCategory"] == this.nameCategory){
          for (const obj of rutina["routines"]) {
            namesRoutines.push(obj);
          }
        }
      }
    }
    // Comparamos si en la lista de rutinas a mostrar tiene el usuario alguna como favorita y marcamos el fav
    namesRoutines = this.loadFavs(namesRoutines);
    return namesRoutines;
  }

  public getListExerciseChoose(){
    let exerciseList: any [] = [];
    if (this.isFavoriteOrNormal == "normal") {
      /**
       * 1º Buscamos la coincidencia del nombre de la rutina elegida con las rutinas existentes.
       * 2º Si coinciden, guardamos cada ejercicio en la lista. 
       */
      for (let key of this.dataBase) {
        if(key["nameCategory"] == this.nameCategory){
          for (const obj of key["routines"]) {
            if (obj["nameRoutine"] == this.nameRoutine) {
              exerciseList = obj["exercises"];
            }
          }
        }
      }
      return exerciseList;
    }else{
      // Si estamos con las rutinas favoritas
      return this.searchRoutineFavorite(exerciseList);
    }
    
    
  }

  public setCurrentExerciseOfRutine(numberExecise){
    /**
     * 1º Buscamos la coincidencia del nombre de la rutina elegida con las rutinas existentes.
     * 2º Modificamos por el ejercicio que vamos en esa rutina. 
     */
    for (let key of this.dataBase) {
      if(key["nameCategory"] == this.nameCategory){
        for (const obj of key["routines"]) {
          if (obj["nameRoutine"] == this.nameRoutine) {
            obj["currentExercise"] = numberExecise;
          }
        }
      }
    }
  }

  public setCurrentExerciseOfRutineFav(numberExecise){
    /**
     * 1º Buscamos la coincidencia del nombre de la rutina elegida con las rutinas existentes.
     * 2º Modificamos por el ejercicio que vamos en esa rutina. 
     */
    for (let key of this.dataBase) {
      if(key["nameCategory"] == this.nameCategory){
        for (const obj of key["routines"]) {
          if (obj["nameRoutine"] == this.nameRoutine) {
            obj["currentExerciseFav"] = numberExecise;
          }
        }
      }
    }
  }


  
  public getCurrentRutine(){
    let currentRutine: any;
    if(this.isFavoriteOrNormal == "normal"){
      for (let key of this.dataBase) {
        if(key["nameCategory"] == this.nameCategory){
          for (const obj of key["routines"]) {
            if(obj.nameRoutine == this.nameRoutine){
              currentRutine = obj;
              return currentRutine;
            }
          }
        }
      }
    }else{
      return this.searchRoutineFavorite(currentRutine);
    }
  }


  public setCurrentRutineCurrentExercise(switchNumber){
    for (let key of this.dataBase) {
      if(key["nameCategory"] == this.nameCategory){
        for (const obj of key["routines"]) {
          if(obj.nameRoutine == this.nameRoutine){
            obj.currentExercise = switchNumber;
          }
        }
      }
    }
  }

  public setCurrentRutineCurrentExerciseFav(switchNumber){
    for (let key of this.dataBase) {
      if(key["nameCategory"] == this.nameCategory){
        for (const obj of key["routines"]) {
          if(obj.nameRoutine == this.nameRoutine){
            obj.currentExerciseFav = switchNumber;
          }
        }
      }
    }
  }

  private searchRoutineFavorite(exerciseList){
    // 1º Buscamos en cada nivel 
    // 2º Compararmos sus rutinas con el nombre seleccionado
    // 3º Si la encuentra, la retornamos.
    this.dataBase = PRINCIPIANTE;
    for (const key of this.dataBase) {
      for (const obj of key["routines"]) {
        if (obj["nameRoutine"] == this.nameRoutine) {
          exerciseList = obj["exercises"];
          return exerciseList;
        }
      }
      
    }

    this.dataBase = INTERMEDIO;
    for (const key of this.dataBase) {
      for (const obj of key["routines"]) {
        if (obj["nameRoutine"] == this.nameRoutine) {
          exerciseList = obj["exercises"];
          return exerciseList;
        }
      }
    }

    this.dataBase = AVANZADO;
    for (const key of this.dataBase) {
      for (const obj of key["routines"]) {
        if (obj["nameRoutine"] == this.nameRoutine) {
          exerciseList = obj["exercises"];
          return exerciseList;
        }
      }
    }

    return exerciseList;
  }



  /*
   * 
   * Esta funcion se encargara de devolver el nombre de la categoria elegida.
   */
  private chooseCategory(){
    let nameCategory;
    switch (this.navigateIndexCategory) {
      case 0:
        nameCategory = "cardio";
        break;
      case 1:
        nameCategory = "core";
        break;
      case 2:
        nameCategory = "fullBody";
        break;
      case 3:
        nameCategory = "trenInferior";
        break;
      case 4:
        nameCategory = "trenSuperior";
        break;
      
      default:
        "nada";
        break;
    }

    return nameCategory

  }


  /**
   * Funcion que se encargara de devolver el nombre del nivel que hemos seleccionado.
   */
  private chooseLevel(){
    let nameLevel;
    switch (this.navigateIndexDashboard) {
      case 0:
        nameLevel = "PRINCIPIANTE";
        break;
      case 1:
        nameLevel = "INTERMEDIO";
        break;
      case 2:
        nameLevel = "AVANZADO";
        break;
      
      default:
        "nada";
        break;
    }

    return nameLevel
  }

  // Devolvera el tiempo de descanso segun el nivel.
  public getTimeRelax(){
    if(this.nameLevel == "PRINCIPIANTE"){
      return 30;
    }else if(this.nameLevel == "INTERMEDIO"){
      return 60;
    }else if(this.nameLevel == "AVANZADO"){
      return 90;
    }
  }

  public isFavFavicon(nameRoutine: string){
    let is: boolean;
    // 1º Obtenemos y guardamos las rutinas del usuario actual
    this.getRoutinesCurrentUser();
    this.dataUser.routines.forEach(obj => {
      // 2º Comparamos los nombres.
      if(obj == nameRoutine){
        is = true;
      }
    })
    return is;
  }

  public isNotFavFavicon(nameRoutine: string){
    let is: boolean;
    // 1º Obtenemos y guardamos las rutinas del usuario actual
    this.getRoutinesCurrentUser();
    this.dataUser.routines.forEach(obj => {
      // 2º Comparamos los nombres.
      if(obj == nameRoutine){
        is = false;
      }
    })
    return is;
  }

  public loadFavs(routine: any){
    this.getRoutinesCurrentUser();
    if(this.dataUser.routines.length == 0){
      for (let index = 0; index < routine.length; index++) {
        routine[index].fav = false;
      }
    }else{
      for (let index = 0; index < routine.length; index++) {
        for (let index2 = 0; index2 < this.dataUser.routines.length; index2++) {
          // 2º Vamos comparando las rutinas que se vayan a mostrar con las del usuario
          if(this.dataUser.routines[index2] == routine[index].nameRoutine){
            // 3º Si coinciden, establecemos la propiedad fav a true de esa rutina.
            routine[index].fav = true;
          }
        }
      }
    }
    return routine;
  }

  public goToExerciseOfMyRoutine(){

  }

  // METODOS FIREBASE:
  private async getRoutinesCurrentUser(){
    //Rellenamos el objeto user al iniciar el servicio.
    await this.firestore_service.getRoutinesOfUser()
              .then((obs:any) => {
                obs.subscribe((item: any) =>{
                  if(item.payload.data() != null){
                    this.dataUser.routines = [];
                    this.dataUser.id = item.payload.id;
                    for (let index = 0; index < item.payload.data().routines.length; index++) {
                      this.dataUser.routines.push(item.payload.data().routines[index]);
                    }
                  }
                })
              });
  }

  
  public createNewUserToDB(){
    let newUser: UserLogin = this.auth.getCurrentUser();
    if(this.dataUser.routines.length ==  0){
      this.firestore.collection('favRoutines').doc(newUser.email).set({
        routines:  []
      });
    }
  }

}