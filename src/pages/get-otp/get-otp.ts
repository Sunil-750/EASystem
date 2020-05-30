import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VerifyOtpPage } from '../verify-otp/verify-otp';

/**
 * Generated class for the GetOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-get-otp',
  templateUrl: 'get-otp.html',
})
export class GetOtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetOtpPage');
  }

  generateOtp(){
    console.log('generate OTP clicked');
    this.navCtrl.push(VerifyOtpPage);
  }

}
