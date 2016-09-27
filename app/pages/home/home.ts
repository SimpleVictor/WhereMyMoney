import {Component, NgZone} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
declare var firebase:any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  zone;
  fbValue;

  constructor(public navCtrl: NavController, private events: Events) {
    this.zone = new NgZone({enableLongStackTrace: false});
    let valueChanged = firebase.database().ref();
    valueChanged.on('value', (snapshot) => {
      console.log(snapshot.val());

      let obj = snapshot.val();

      this.zone.run(() => {
        this.fbValue = obj.show_me;
        console.log(this.fbValue);
      });

    });
  }

}
