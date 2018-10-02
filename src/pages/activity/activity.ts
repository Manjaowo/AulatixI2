import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
//import { ActivityindiPage } from '../activityindi/activityindi';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
	mate : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	mateid = 0;
	cid = "";
	cname = "";
	matename = "";
	finalurl = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, private iab: InAppBrowser) {
	  this.mateid = navParams.get("groupid");
		//console.log('+++id:'+ this.mateid);		
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

	activityindi(id, urli) {
		
		let finurl = "https://aulatix.com/uploads/activities/pdf/" + urli;
			const browser = this.iab.create("https://docs.google.com/viewer?url="+finurl);
			//browser.executeScript(...);
			//browser.insertCSS(...);
			browser.on('loadstop').subscribe(event => {
				console.log("Entro viewer");
				//console.log(event);
			   browser.insertCSS({ code: "body{color: red;" });
			});

			//browser.close();
			
	}
	downloadindi(id, urli) {
		
		let finurl = "https://aulatix.com/uploads/activities/pdf/" + urli;
			const browser = this.iab.create("https://docs.google.com/viewer?export=download&url="+finurl);
			//browser.executeScript(...);
			//browser.insertCSS(...);
			browser.on('loadstop').subscribe(event => {
				console.log("Entro download");
				//console.log(event);
			   browser.insertCSS({ code: "body{color: red;" });
			});

			//browser.close();
			
	}

}
