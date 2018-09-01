import { Component } from '@angular/core';
//import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContentindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contentindi',
  templateUrl: 'contentindi.html',
})
export class ContentindiPage {
	contentid = "";
	contenturl = "";
	finalurl = "";
	htmlSnippet = "";
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.contentid = navParams.get("contentid");
	  console.log("[] "+ this.contentid);
	  this.contenturl = navParams.get("contenturl");
	  this.finalurl = "https://aulatix.com/uploads/contents/pdf/" + this.contenturl;
	  /*this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url='+YOUR_PDF_URL_GOES_HERE); } } */
	  //this.htmlSnippet = "Template <iframe src="+ this.finaluril + " class='frameSet' frameborder='0' allowfullscreen width='100%' height='100%'></iframe>";
	  
	  //this.htmlSnippet = "Template <iframe src="+this.finalurl+" frameborder='0' width='655' height='550' marginheight='0' marginwidth='0' id='pdf'></iframe>";
	  //this.htmlSnippet = "Template <embed src="+this.finalurl+" frameborder='0' width='655' height='550' marginheight='0' marginwidth='0' type='application/pdf'>";
	/*const options: DocumentViewerOptions = {
		title: 'My PDF'
	}
	
  this.document.canViewDocument(this.finalurl, 'application/pdf', options);*/
  }
  /*pdfURL() {
     let alert = this.alertCtrl.create({
							title: 'pdf',
							message: this.finalurl,
							buttons: ['OK']
		  });
		  alert.present();
		  console.log("[] "+ this.finalurl);
	return this.sanitizer.bypassSecurityTrustUrl(this.finalurl);
  }*/
	
	
}
