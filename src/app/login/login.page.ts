import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController,} from '@ionic/angular';
import { NavController,} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm={
    usuario:"pinto",
    password:"1234",
  }
 

  constructor(public loadingCtrl:LoadingController, public NavCtrl:NavController ) {}
  
  
   
 
    
  
 
  ngOnInit() {
  }
  
  async login(Forma:NgForm ) { 
      
    
    
  if (Forma.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles'
      });
      loading.present();
      
  if (this.userForm.usuario === Forma.value.user && this.userForm.password === Forma.value.clave){ 
    
    console.log('verdadero');
    this.NavCtrl.navigateForward('/choose-park');

  }else{
      console.log('falso');

  }
  this.loadingCtrl.dismiss()  }
  }
 
}




  




