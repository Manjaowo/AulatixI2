import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { SubjectsinglePage } from '../subjectsingle/subjectsingle';
/**
 * Generated class for the MateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materias',
  templateUrl: 'materias.html',
})
export class MateriasPage {
	mate : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	semid = 0;
	semname = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
	  this.semid = navParams.get("semid");
	  this.semname = navParams.get("semname");
	  //console.log('id semes:'+ this.semid);
	  //console.log('name semes:'+ this.semname);
	  this.userService.materias(this.semid).then((result) => {
			this.mate = result;
			for (let item in this.mate.semester_subject) {
					this.arrayCosas[item] = [this.mate.semester_subject[item].name_general, "$" + this.mate.semester_subject[item].price];		
			}
			
		}, (err) => {
			console.error(err);
		});	
  }
  clickeando(num) {
    this.navCtrl.push(SubjectsinglePage, {
      mateid : num
    });
  }

}
