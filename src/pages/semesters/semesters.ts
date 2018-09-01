import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { MateriasPage } from '../materias/materias';
/**
 * Generated class for the SemestersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-semesters',
  templateUrl: 'semesters.html',
})
export class SemestersPage {
	semes : any;
    value: string;
    newItem: any;
	arrayCosas = [];
    constructor(public navCtrl: NavController, public navParams: NavParams,  public userService: UserService) {
		this.userService.semestres().then((result) => {
			this.semes = result;
			for (let item in this.semes.semesters) {
					this.arrayCosas[item] = this.semes.semesters[item].name;				
			}
		}, (err) => {
			console.error(err);
		});	
  }
   
  
  ionViewDidLoad() {
    	
  }
  clickeando(num, name) {
    this.navCtrl.push(MateriasPage, {
      semid : num,
	  semname : name
    });
  }

}
