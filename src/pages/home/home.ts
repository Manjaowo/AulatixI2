import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { MateindiPage } from '../mateindi/mateindi';
import { SemestersPage } from '../semesters/semesters';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	mate : any;
	mysub : any;
    value: string;
    newItem: any;
	arrayCosas = [];
	arrayMate = [];
	nada = true;
	time: any;
	mysubid = [];
	subs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
		this.userService.mygroup().then((result) => {
			this.mysub = result;
			//console.log("[]" + this.mysub.groups);
			for (let item in this.mysub.groups) {						
				this.mysubid[item] = this.mysub.groups[item].subject_id;
				//console.log('mysub' + this.mysub.groups[item].subject_id);
				this.nada = false;
			}
			this.userService.subject().then((result) => {
				this.mate = result; 
				//console.log(this.mate);
				for (let item in this.mate) {
					this.subs[item] = [this.mate[item].id, this.mate[item].name_general];
					//console.log('id'+this.mate[item].id+' name:'+this.mate[item].name_general);
				}
				//console.log("---> " + this.subs);
				for(let item in this.mysubid){
					this.time = this.mysubid[item]-1;
					//alert("this.time " + this.time);
					//console.log('id'+this.mate[item].id+' name:'+this.mate[item].name_general);
					this.arrayCosas[item] = [this.mate[this.time].id, this.mate[this.time].name_general];
				}
			}, (err) => {
				console.error(err);
			});	
		}, (err) => {
			console.error(err);
		});			
  }  
  SemesPage(){
	this.navCtrl.push(SemestersPage);
  }
  mateindi(num, name) {
	//console.log('Id:'+num+' name:'+name);
    this.navCtrl.push(MateindiPage, {
		mateid: num,
		matename: name
	});
  }

}
