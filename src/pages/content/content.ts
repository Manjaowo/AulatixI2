import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
//import { ContentindiPage } from '../contentindi/contentindi';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
	mate : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	mateid = 0;
	cid = "";
	cname = "";
	matename = "";
	finalurl = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,  public userService: UserService, private iab: InAppBrowser) {
	    this.mateid = navParams.get("groupid");
		//console.log('+++id:'+ this.mateid);		
		//this.matename = navParams.get("matename");	
		this.userService.contents(this.mateid).then((result) => {
			this.mate = result;
			//console.log("[]" + this.mate.contents);
			for (let item in this.mate.contents) {
				//console.log(this.mate.contents[item].url_pdf);
				//console.log('name:'+ this.mate.contents[item].name);
				//console.log('unidad:'+ this.mate.contents[item].unity_id);
				this.arrayCosas[item] = [this.mate.contents[item].id, this.mate.contents[item].name, this.mate.contents[item].unity_id, this.mate.contents[item].url_pdf];		
				
			}	
		}, (err) => {
			console.error(err);
		});
  }
  contentindi(id, urli) {
		let finurl =  "https://aulatix.com/uploads/contents/pdf/" + urli;
			const browser = this.iab.create("https://docs.google.com/viewer?url="+finurl);
			//browser.executeScript(...);
			//browser.insertCSS(...);
			browser.on('loadstop').subscribe(event => {
				//console.log("Entro");
				//console.log(event);
			   browser.insertCSS({ code: "body{color: red;" });
			});

			//browser.close();
		
    /*this.navCtrl.push(ContentindiPage, {
		contentid: id,
		contenturl: url
	});*/
  }
}
