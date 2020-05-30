import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetOtpPage } from '../get-otp/get-otp';
import { HomePage } from '../home/home';

/**
 * Generated class for the VerifyOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verify-otp',
  templateUrl: 'verify-otp.html',
})
export class VerifyOtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyOtpPage');
  }
  getOtpPage(){
    this.navCtrl.push(GetOtpPage);
  }
  resendOtp(){
    console.log('resend otp clicked');

  }
  homePage(){
    console.log('verify clicked');
    this.navCtrl.push(HomePage);
  }

}
