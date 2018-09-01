import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activityindi',
  templateUrl: 'activityindi.html',
})
export class ActivityindiPage {
	activityid = "";
	activityurl = "";
	finalurl = "";
	htmlSnippet = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.activityid = navParams.get("activityid");
	  this.activityurl = navParams.get("activityurl");
	  this.finalurl = "https://aulatix.com/uploads/contents/pdf/" + this.activityurl;
	  console.log("[] "+ this.finalurl);
	  //this.htmlSnippet = "Template <iframe src="+this.finalurl+" frameborder='0' width='655' height='550' marginheight='0' marginwidth='0' id='pdf'></iframe>";
	  this.htmlSnippet = "Template <embed src="+this.finalurl+" frameborder='0' width='655' height='550' marginheight='0' marginwidth='0' type='application/pdf'>";

  }
}
