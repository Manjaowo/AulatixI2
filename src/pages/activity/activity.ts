import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
//import { ActivityindiPage } from '../activityindi/activityindi';
import { File } from '@ionic-native/file';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
import { AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public document: DocumentViewer, public navParams: NavParams, public userService: UserService,  public file: File, public transfer: FileTransfer) {
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

    activityindi(id, urli) {	
	/*let alert = this.alertCtrl.create({
							title: 'PDF',
							message:'url: '+"https://aulatix.com/uploads/activities/pdf/" + urli,
							buttons: ['Demiss']
			  });
			  alert.present();
      console.log('Actividad Id:'+id+' url:https://aulatix.com/uploads/activities/pdf/'+urli);
    let path = this.file.dataDirectory;
  
	const options: DocumentViewerOptions = {
	  title: 'My PDF'
	}
    const transfer = this.transfer.create();
    transfer.download("https://aulatix.com/uploads/activities/pdf/" + urli, path + urli).then(entry => {
	  let url = entry.toURL();
	  let alert = this.alertCtrl.create({
							title: 'PDF',
							message:'url: '+ url,
							buttons: ['Demiss']
	  });
	  alert.present();
      this.document.viewDocument(url, 'application/pdf', options);
    });*/
	/*this.navCtrl.push(ActivityindiPage, {
		activityid: id,
		activityurl: url
	});*/
    let path = null;
	path = this.file.dataDirectory;
    /*if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }*/
	let alert2 = this.alertCtrl.create({
							title: 'PDF',
							message:'hola ',
							buttons: ['Demiss']
	  });
	  alert2.present();
    const transfer = this.transfer.create();
    transfer.download("https://aulatix.com/uploads/activities/pdf/" + urli, path + urli).then(entry => {
      let url = entry.toURL();
	  console.log("let url:" + url);
	  let alert = this.alertCtrl.create({
							title: 'PDF',
							message:'url: '+ url,
							buttons: ['Demiss']
	  });
	  alert.present();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  
  }

}
