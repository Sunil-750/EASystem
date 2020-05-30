import { GetOtpPage } from './../pages/get-otp/get-otp';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = GetOtpPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.`
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  logout(){
    this.nav.push(GetOtpPage);
  }
  getAllInvoice(){
    console.log('All invoice clicked');
  }
  getPendingInvoice(){
    console.log('Pending invoice clicked');
  }
  getApprovedInvoice(){
    console.log('Approved invoice clicked');
  }
}

