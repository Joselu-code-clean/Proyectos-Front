import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/_servicesAuth/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario:UsuarioModel;
  recordarme:Boolean;
  constructor(private autentication: AuthService,private router: Router, private guard : AuthGuard) { }

  ngOnInit() {
    this.autentication.logOut();
    this.usuario=new UsuarioModel();
  }



  public validarFormulario( form: NgForm ) {
    if( form.invalid ) {return;}
    this.autentication.login( this.usuario )
        .subscribe ( resp =>
                      {Swal.fire({
                        icon: 'success',
                        title: 'Login correctamente',
                        text: '¡Has iniciado correctamente!'
                      })},
                      error => {Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.error.error.message
                      })})
  
        setTimeout(()=>{this.router.navigate(['/home', "home"])}, 1000);
  
  }

  public validarEmail(email:string) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  onLoginFacebook() {
      //Llama al método del servicio para iniciar en facebook.
      if(this.autentication.doFacebookLogin()){
        this.IrHome();
      }
  }
  
  public IrHome(){
      this.router.navigate(['/home']);
  }

}

