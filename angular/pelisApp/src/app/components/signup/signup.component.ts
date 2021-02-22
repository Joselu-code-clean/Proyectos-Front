import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/_servicesAuth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario:UsuarioModel;
  constructor(private autentication: AuthService, private activatedRoute: Router) { }

  ngOnInit() {
    this.usuario=new UsuarioModel();
    this.usuario.email;
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
