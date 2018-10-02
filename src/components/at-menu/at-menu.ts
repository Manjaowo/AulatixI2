import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { SemestersPage } from '../../pages/semesters/semesters';
import { PerfilpagePage } from '../../pages/perfilpage/perfilpage';

/**
 * Generated class for the AtMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'at-menu',
  templateUrl: 'at-menu.html'
})

export class AtMenuComponent {
  constructor(public navCtrl: NavController) {
		console.log("AT-MENU entro");
	
  }
	SemesPage(){
	this.navCtrl.push(SemestersPage);
  }
  LogoutPage(){
	localStorage.setItem('token_type', '');
	localStorage.setItem('expires_in', '');
	localStorage.setItem('access_token', '');
	localStorage.setItem('refresh_token', '');
	this.navCtrl.push(LoginPage);
  }
  HomePage(){
	this.navCtrl.push(HomePage);
  }
  PerfilPage(){
	this.navCtrl.push(PerfilpagePage);
  }
}
