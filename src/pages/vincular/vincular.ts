import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the VincularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vincular',
  templateUrl: 'vincular.html',
})
export class VincularPage {
	sid = "";
	sname = "";
	sgrupos = "Grupos";
	sprofecodigo = "";
	data: any;
	arrayCosas = [];
	data2: any;
	data3: any;
	mate = "nada";
	profecorrecto = null;
	vinData = { 	teacher_ucode: '', 
					subject_id: '', 
					student_id: '', 
					group_id: '' 
					};
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
	  this.sid = navParams.get("mateid");
	  this.sname = navParams.get("matename");
	  this.userService.profileget().then((result) => {
				this.data2 = result;
				this.vinData.student_id = this.data2.user.id;
				console.log("student_id: " + this.vinData.student_id);	
			}, (err) => {
				console.error(err);
			});
  }
  verificar(){
	  console.log("verificar");
	  this.userService.groupssubject(this.sprofecodigo, this.sid).then((result) => {
			this.data = result;
			this.mate = "nada";
			console.log("/********** Grupos ***********/");
			for(let item in this.data){
				//console.log('ID:' + this.data[item].id);
				//console.log('NAME:' + this.data[item].name);		
				this.arrayCosas[item] = [this.data[item].id,this.data[item].name];
				this.mate = "algo";
				this.profecorrecto = this.sprofecodigo;
			}
			if(this.mate == "nada"){
				let alert = this.alertCtrl.create({
				title: 'ERROR',
				subTitle: 'No se encontraron grupos asociados a este codigo del profesor para esta materia',
				buttons: ['Aceptar']
				});
				alert.present();
			}else{
				let alert = this.alertCtrl.create({
				title: '',
				subTitle: '¡Grupos encontrados!\nSeleccione uno para vincular',
				buttons: ['Aceptar']
				});
				alert.present();
			}
		}, (err) => {
			console.error(err);
			this.arrayCosas = [];
			let alert = this.alertCtrl.create({
				title: 'ERROR',
				subTitle: 'Codigo de profesor no valido',
				buttons: ['Aceptar']
				});
				alert.present();
		});
	}
	vincular(){
		if(this.sgrupos == "Grupos"){
		let alert = this.alertCtrl.create({
				title: 'ERROR',
				subTitle: 'Seleccione un grupo',
				buttons: ['Aceptar']
				});
				alert.present();	
		}else{
			if(this.sprofecodigo == this.profecorrecto){	
			/********************Codigo si todo esta correcto****************************/
			this.vinData.student_id = this.data2.user.id;
			this.vinData.teacher_ucode = this.sprofecodigo;
			console.log("teacher_ucode: " + this.vinData.teacher_ucode);
			this.vinData.group_id = this.sgrupos;
			console.log("group_id: " + this.vinData.group_id);
			
			this.vinData.subject_id = this.sid;
			console.log("subject_id: " + this.vinData.subject_id);
				this.userService.vincularapi(this.vinData).then((result) => {
				this.data3 = result;
				let alert = this.alertCtrl.create({
				title: '',
				subTitle: '¡Vinculacion Exitosa!\Inicie sesión nuevamente',
				buttons: ['Aceptar']
				});
				alert.present();
				localStorage.setItem('token_type', '');
				localStorage.setItem('expires_in', '');
				localStorage.setItem('access_token', '');
				localStorage.setItem('refresh_token', '');
				this.navCtrl.push(LoginPage);
				}, (err) => {
					console.error(err);
					let alert = this.alertCtrl.create({
					title: 'ERROR',
					subTitle: 'Vinculación no exitosa\nIntentelo denuevo',
					buttons: ['Aceptar']
					});
					alert.present();
				});
			/***************************************************/
			}else{
				let alert = this.alertCtrl.create({
				title: 'ERROR',
				subTitle: 'No altere el codigo del profesor despues de elegir el grupo',
				buttons: ['Aceptar']
				});
				alert.present();
				this.sgrupos = "Grupos";
				this.arrayCosas = [];
			}
		}
	}
}
