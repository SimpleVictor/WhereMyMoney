import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public push: Push) {

  }

  pushButton(){
    this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }

}
