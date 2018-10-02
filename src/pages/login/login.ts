import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {
    
	loginData = { 	username: localStorage.getItem('USERNAME'), 
					password: localStorage.getItem('PASSWORD'), 
					client_id: '2', 
					client_secret: 'FgLmXa6JzLbSKq5fwSxRoyhi8PK7Kk0rLgxNOOB9', 
					grant_type: 'password' 
					};

	data: any;
	
	constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
	
	}
	nextPage()	{
		
		this.userService.login(this.loginData).then((result) => {
			this.data = result;
			localStorage.setItem('token_type', this.data.token_type);
			localStorage.setItem('expires_in', this.data.expires_in);
			localStorage.setItem('access_token', this.data.access_token);
			localStorage.setItem('refresh_token', this.data.refresh_token);
			//console.log('token_type:'+ this.data.token_type);
			//console.log('expires_in:'+ this.data.expires_in);
			console.log('access_token:'+ this.data.access_token);
			//console.log('refresh_token:'+ this.data.refresh_token);
			localStorage.setItem('USERNAME', this.loginData.username);
			localStorage.setItem('PASSWORD', this.loginData.password);
			this.navCtrl.push(HomePage);
		}, (err) => {
			console.error(err);
			let alert = this.alertCtrl.create({
							title: 'ERROR',
							message: 'Verifique su usuario y contraseña o verifique el estado de su red.',
							buttons: ['Aceptar']
			  });
			  alert.present();
		});		
	}
	
	registroPage()	{
		this.navCtrl.push(RegisterPage );
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
		
	}
	/*presentAlert() {
	let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
	});
	alert.present();
}*/

}
