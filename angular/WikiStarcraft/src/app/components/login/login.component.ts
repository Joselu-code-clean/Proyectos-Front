import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UsuarioModelModule } from 'src/app/models/usuario-model/usuario-model.module';
import { AutenticacionService } from '../services/_ServiceAuth/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   usuario:UsuarioModelModule;
   recordarme:Boolean;
  constructor(private autentication: AutenticacionService,private router: Router) { }

  ngOnInit() {
    this.autentication.logOut();
    this.usuario=new UsuarioModelModule();
  }

 

public validarFormulario( form: NgForm ) {
  console.log(form);
  if( form.invalid ) {return;}
  this.autentication.login( this.usuario )
      .subscribe ( resp =>
                    {console.log(resp), Swal.fire({
                      icon: 'success',
                      title: 'Login correctamente',
                      text: '¡Has iniciado correctamente!'
                    })},
                    error => {console.log(error), Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: error.error.error.message
                    })})

      setTimeout(()=>{this.router.navigate(['/music', "home"])}, 1000);

}

public validarEmail(email:string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

public IrHome(){
    this.router.navigate(['/home']);
}

}
