import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
  }

  edoPage() {
   
  }
  ciuPage() {
    console.log('ciudad');
  }
  ionViewDidLoad() {
	 console.log('estado');
	
		this.userService.estados().then((result) => {
			this.data = result;
			console.log(this.data);
		}, (err) => {
			console.error(err);
		});	
  }

}
