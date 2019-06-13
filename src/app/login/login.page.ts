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
 

  constructor(public loadingCtrl:LoadingController) {}
  constructor(private NavCtrl: NavController)  {}
  
   
  goToDetaiPage(id:string){
    this.NavCtrl.navigateforward('http://localhost:8100/home/tabs/tab1');
  }
 
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
    
  }else{
      console.log('falso');
  }
  this.loadingCtrl.dismiss()  }
  }
 
}




  




