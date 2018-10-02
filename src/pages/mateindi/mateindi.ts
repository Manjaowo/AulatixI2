import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { ContentPage } from '../content/content';
import { ActivityPage } from '../activity/activity';
import { PortfolioPage } from '../portfolio/portfolio';
import { HomeworkPage } from '../homework/homework';
import { PortfoliohomeworkPage } from '../portfoliohomework/portfoliohomework';
/**
 * Generated class for the MateindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mateindi',
  templateUrl: 'mateindi.html',
})
export class MateindiPage {
	mate : any;
    value: string;
	group: any;
    newItem: any;
	arrayCosas = [];
	mateid = 0;
	sid = "";
	sidgroup = "";
	sname = "";
	snamegroup = "";
	matename = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,  public userService: UserService) {
	  this.mateid = navParams.get("mateid");
		//console.log('id mate:'+ this.mateid);
		this.userService.subject().then((result) => {
			this.mate = result;
			for (let item in this.mate) {
				if(this.mate[item].id == this.mateid){
					this.sid = this.mate[item].id;
					this.sname = this.mate[item].name_general;
				}		
			}	
		}, (err) => {
			console.error(err);
		});
		this.userService.mygroup().then((result) => {
			this.group = result;
			for (let item in this.group.groups) {
				if(this.mateid == this.group.groups[item].subject_id){
					this.sidgroup = this.group.groups[item].id;
					this.snamegroup = this.group.groups[item].name;
				}				
			}
		}, (err) => {
			console.error(err);
		});
  }
 clickEva(num, name) {
	console.log('Evaluacion Id:'+num+' name:'+name);
    /*this.navCtrl.push(MateindiPage, {
		mateid: num,
		matename: name
	});*/
  }
  clickCont(num, name) {
	console.log('Contenido Id:'+num+' name:'+name);
    this.navCtrl.push(ContentPage, {
		groupid: num,
		groupname: name
	});
  }
  clickAct(num, name) {
	console.log('Actividades Id:'+num+' name:'+name);
    this.navCtrl.push(ActivityPage, {
		groupid: num,
		groupname: name
	});
  }
  clickPort(num, name) {
	console.log('Portafolio Id:'+num+' name:'+name);
    this.navCtrl.push(PortfolioPage, {
		groupid: num,
		groupname: name
	});
  }
  clickHomeWork(num, name) {
	console.log('Tareas Id:'+num+' name:'+name);
    this.navCtrl.push(HomeworkPage, {
		groupid: num,
		groupname: name
	});
  }
  clickHomeWorkPort(num, name) {
	console.log('Portafolio Tareas Id:'+num+' name:'+name);
    this.navCtrl.push(PortfoliohomeworkPage, {
		groupid: num,
		groupname: name
	});
  }
}
