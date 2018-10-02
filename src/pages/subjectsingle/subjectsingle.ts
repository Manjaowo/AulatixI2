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
	matename = "";
	sid = "";
	sname = "";
	sdes = "";
	sprice = "";
	simage = "";
	constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
		this.mateid = navParams.get("mateid");
		console.log('id mate:'+ this.mateid);
		this.userService.subject().then((result) => {
			this.mate = result;
			for (let item in this.mate) {
				if(this.mate[item].id == this.mateid){
					this.sid = this.mate[item].id;
					this.sname = this.mate[item].name_general;
					this.sdes = this.mate[item].description;
					this.sprice = '$'+this.mate[item].price;
					this.simage = "https://aulatix.com/images/" + this.mate[item].image;
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
