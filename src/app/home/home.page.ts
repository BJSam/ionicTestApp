import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  item ={
    src: '../../../assets/img1.png'
  };
  constructor(public alertController: AlertController) {}
  async Alert(k) {
   const alert = await this.alertController.create({
     header: 'clicked',
     message: k,
     buttons: ['OK']
   });

   await alert.present();
 }
}
