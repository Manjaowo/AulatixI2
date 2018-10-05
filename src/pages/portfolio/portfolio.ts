import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { PortafolioindiPage } from '../portafolioindi/portafolioindi';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {
	mate : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	mateid = 0;
	cid = "";
	cname = "";
	matename = "";
  constructor( public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
	  this.mateid = navParams.get("groupid");
		console.log('+++id:'+ this.mateid);		
		//this.matename = navParams.get("matename");	
		this.userService.activities(this.mateid).then((result) => {
			this.mate = result;
			//console.log("[]" + this.mate.activities);
			for (let item in this.mate.activities) {
				//console.log('id:'+ this.mate.contents[item].id);
				//console.log('name:'+ this.mate.contents[item].name);
				//console.log('unidad:'+ this.mate.contents[item].unity_id);
				this.arrayCosas[item] = [this.mate.activities[item].id, this.mate.activities[item].name, this.mate.activities[item].unity_id, this.mate.activities[item].url_pdf];		
				
			}
			

			

			
		}, (err) => {
			console.error(err);
		});
  }

   activityindi(id, name, url) {
	console.log('Actividad Id:'+id+' name:'+name+' url:'+url);
    this.navCtrl.push(PortafolioindiPage, {
		portafolioid: id,
		portafolioname: name,
		portafoliourl: url,
		grupoid: this.mateid
	});
	
  }

}
