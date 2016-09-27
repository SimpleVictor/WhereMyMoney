import {Component, NgZone, ElementRef, ViewChild, OnInit, AfterContentChecked} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
declare var firebase:any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit, AfterContentChecked {

  zone;
  switcher;


  constructor(public navCtrl: NavController, private events: Events, private el: ElementRef) {

  }


  ngOnInit(){
    this.zone = new NgZone({enableLongStackTrace: false});
    let valueChanged = firebase.database().ref();
    valueChanged.on('child_changed', (snapshot) => {
      console.log(snapshot.val());

      let obj = snapshot.val();

      this.zone.run(() => {
        this.switcher = obj;
        console.log(this.switcher);

        if (this.switcher === "1st"){
          console.log(window.document.getElementById("first"));
        }else if(this.switcher == "2nd"){
          console.log(window.document.getElementById("second"));
        }else if(this.switcher === "3rd"){

        }else{
          console.log("Slomething went wrong!");
        }

      });

    });
  }

  ngAfterContentChecked(){
    console.log("bruh");
  }

  resetAllClass(){

  }

}
