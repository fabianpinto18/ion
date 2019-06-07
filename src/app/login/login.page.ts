import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:"pinto",
    password:"1234",
  }

  constructor(loadingCtrl:LoadingController) { }
  
  ngOnInit() {
  }


  login(Forma:NgForm ) {   

  
  if (Forma.valid) 
  {
    const loading = await this.loadingCtrl.create({
      message: 'Validando...',
      spinner: 'bubbles'
    });
    loading.present();
    this.userForm.Correo = forma.value.email;
    this.userForm.Clave = forma.value.clave;
  }
  }
}

