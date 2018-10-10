import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/user-service/user-service';
import { PortafoliotareaindiPage } from '../portafoliotareaindi/portafoliotareaindi';
/**
 * Generated class for the PortfoliohomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfoliohomework',
  templateUrl: 'portfoliohomework.html',
})
export class PortfoliohomeworkPage {
mate : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	mateid = 0;
	cid = "";
	cname = "";
	matename = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
	  this.mateid = navParams.get("groupid");
		console.log('+++id:'+ this.mateid);		
		//this.matename = navParams.get("matename");	
		this.userService.homeworks(this.mateid).then((result) => {
			this.mate = result;
			//console.log("[]" + this.mate.activities);
			for (let item in this.mate.homeworks) {
				//console.log('id:'+ this.mate.contents[item].id);
				//console.log('name:'+ this.mate.contents[item].name);
				//console.log('unidad:'+ this.mate.contents[item].unity_id);
				this.arrayCosas[item] = [this.mate.homeworks[item].id, this.mate.homeworks[item].name, this.mate.homeworks[item].unity_id];		
				
			}	
		}, (err) => {
			console.error(err);
		});
  }

   activityindi(id, name) {
	console.log('Actividad Id:'+id+' name:'+name);
    this.navCtrl.push(PortafoliotareaindiPage, {
		portafolioid: id,
		portafolioname: name,
		grupoid: this.mateid
	});
  }

}