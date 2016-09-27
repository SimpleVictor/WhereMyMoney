import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
// import {
//   Push,
//   PushToken
// } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;

  // constructor(public push: Push) {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page

    //
    // this.push.register().then((t: PushToken) => {
    //   return this.push.saveToken(t);
    // }).then((t: PushToken) => {
    //   console.log('Token saved:', t.token);
    // });

    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }
}
