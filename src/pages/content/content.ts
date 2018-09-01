import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
//import { ContentindiPage } from '../contentindi/contentindi';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';

import { AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private document: DocumentViewer, public navParams: NavParams,  public userService: UserService, private file: File, private transfer: FileTransfer) {
	    this.mateid = navParams.get("groupid");
		console.log('+++id:'+ this.mateid);		
		//this.matename = navParams.get("matename");	
		this.userService.contents(this.mateid).then((result) => {
			this.mate = result;
			//console.log("[]" + this.mate.contents);
			for (let item in this.mate.contents) {
				console.log(this.mate.contents[item].url_pdf);
				//console.log('name:'+ this.mate.contents[item].name);
				//console.log('unidad:'+ this.mate.contents[item].unity_id);
				this.arrayCosas[item] = [this.mate.contents[item].id, this.mate.contents[item].name, this.mate.contents[item].unity_id, this.mate.contents[item].url_pdf];		
				
			}	
		}, (err) => {
			console.error(err);
		});
  }
  contentindi(id, urli) {
	console.log('Contenido Id:'+id+' url:'+urli);
	
	let path = this.file.dataDirectory;
  
	this.finalurl = "https://aulatix.com/uploads/contents/pdf/" + urli;
	  const options: DocumentViewerOptions = {
	  title: 'My PDF'
	}
    const transfer = this.transfer.create();
    transfer.download(this.finalurl, path + urli).then(entry => {
      let alert = this.alertCtrl.create({
							title: 'pdf',
							message: 'Contenido Id:'+id+' url:'+urli,
							buttons: ['Ok']
			  });
			  alert.present();
	  let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', options);
    });
 
    /*this.navCtrl.push(ContentindiPage, {
		contentid: id,
		contenturl: url
	});*/
  }
}
