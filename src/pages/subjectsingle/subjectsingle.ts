import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { VincularPage } from '../vincular/vincular';
/**
 * Generated class for the SubjectsinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjectsingle',
  templateUrl: 'subjectsingle.html',
})
export class SubjectsinglePage {
	mate : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	mateid = 0;
	semeid = 0;
	matename = "";
	sid = "";
	sname = "";
	sdes = "";
	sprice = "";
	simage = "";
	constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
		this.mateid = navParams.get("mateid");
		console.log('**********id mate:'+ this.mateid);
		this.semeid = navParams.get("semeid");
		console.log('***************id seme:'+ this.semeid);
		this.userService.materias(this.semeid).then((result) => {
			this.mate = result;
			console.log('***************mate all:');
			console.log(this.mate.semester_subject);
			for (let item in this.mate.semester_subject) {
				console.log("******semes subjt id" + this.mate.semester_subject[item].id);
				console.log("******mate id id" + this.mateid);
				if(this.mate.semester_subject[item].id == this.mateid){
					this.sid = this.mate.semester_subject[item].id;
					this.sname = this.mate.semester_subject[item].name_general;
					this.sdes = this.mate.semester_subject[item].description;
					this.sprice = '$'+this.mate.semester_subject[item].price;
					this.simage = "https://aulatix.com/images/" + this.mate.semester_subject[item].image;
				}		
			}	
		}, (err) => {
			console.error(err);
		});	
	}
	vincular(){
		this.navCtrl.push(VincularPage, {
		  mateid : this.sid,
		  matename : this.sname
		});
	}
}
