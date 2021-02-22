import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModelModule } from 'src/app/models/usuario-model/usuario-model.module';
import { AutenticacionService } from '../services/_ServiceAuth/autenticacion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-registrarse',
  templateUrl: './login-registrarse.component.html',
  styleUrls: ['./login-registrarse.component.css']
})
export class LoginRegistrarseComponent implements OnInit {

  usuario:UsuarioModelModule;
  constructor(private autentication: AutenticacionService, private activatedRoute: Router) { }

  ngOnInit() {
    this.usuario=new UsuarioModelModule();
    this.usuario.email="Joselu@gmail.com";
  }

  validarFormulario(form:NgForm){
    if(form.invalid){return;}

    this.autentication.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: 'Creado Usuario',
        text: 'Creado correctamente!!',
        footer: 'Creado correctamente en firebase"'
      })
    }, (error) =>{
      Swal.fire({
        icon: 'error',
        title: 'Error al crear Usuario',
        text: 'Este usuario ya esta creado'
      })
  });
}


  goLogin(){
    this.activatedRoute.navigate(['/login']);
  }

   validateEmail(email:string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

}
