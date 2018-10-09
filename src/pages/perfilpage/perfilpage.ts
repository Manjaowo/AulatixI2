import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the PerfilpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfilpage',
  templateUrl: 'perfilpage.html',
})
export class PerfilpagePage {
	data: any;
	arrayCosas = [];
	data2: any;
	arrayCosas2 = [];
	data3: any;
	arrayCosas3 = [];
	data4: any;
	subsistemaid = "General";
	EdoId = ""; 
	lugar = 0;
	correcto = 1;
	profesoresbis
	//PROFESORESBISteachersbis
	userdata = {activation_token:null,
				birthdate:null,
				city_id:null,
				created_at:null,
				email:null,
				id:null,
				image:null,
				lastname:null,
				name:null,
				school1_id:null,
				school2_id:null,
				state_id:null,
				status:null,
				student_ucode:null,
				subsystem_id:null,
				teacher_ucode:null,
				updated_at:null		
				};	
  constructor(public menu:MenuController , public navCtrl: NavController, public navParams: NavParams,  public userService: UserService) {
	this.menu.enable(true);
	  this.userService.profileget().then((result) => {
			this.data = result;
			console.log("************perfil*******************");
			console.log(this.data);
			this.userdata.activation_token	=	this.data.user.activation_token;
			this.userdata.birthdate 		= 	this.data.user.birthdate;
			//this.userdata.city_id 			=	this.data.user.city_id;
			this.userdata.created_at		=	this.data.user.created_at;
			this.userdata.email				=	this.data.user.email;
			this.userdata.id				=	this.data.user.id;
			this.userdata.image				=	this.data.user.image;
			this.userdata.lastname			=	this.data.user.lastname;
			this.userdata.name				=	this.data.user.name;
			//this.userdata.school1_id		=	this.data.user.school1_id;
			this.userdata.school2_id		=	this.data.user.school2_id;
			//this.userdata.state_id			=	this.data.user.state_id;
			this.userdata.status			=	this.data.user.status;
			this.userdata.student_ucode		=	this.data.user.student_ucode;
			//this.userdata.subsystem_id		=	this.data.user.subsystem_id;
			this.userdata.teacher_ucode		=	this.data.user.teacher_ucode;
			this.userdata.updated_at		=	this.data.user.updated_at;
				/**********************************************************************/
				this.userService.estados().then((result) => {
					this.data2 = result;
					for(let item in this.data2){
						if(this.data.user.state_id == this.data2[item].id){
							this.userdata.state_id	= this.data2[item].name;
						}
					}
				}, (err) => {
					console.error(err);
				});	
				/**********************************************************************/
				this.userService.ciudades(this.data.user.state_id).then((result) => {
					this.data3 = result;
					for(let item in this.data3){
						if(this.data.user.city_id == this.data3[item].id){
							this.userdata.city_id = this.data3[item].name;
						}
					}
					//console.log("Ciudades");
					//console.log(this.data2);
				}, (err) => {
					console.error(err);
				});
				/************************************************************************/
				this.userService.escuelas().then((result) => {
				this.data4 = result;
				for(let item in this.data4){
					if(this.data4[item].id == this.data.user.school1_id){
						//console.log('Entro!!');
						this.userdata.school1_id = this.data4[item].name;
					}
				}
				//console.log("escuelas");
				//console.log(this.data3);
				}, (err) => {
					console.error(err);
				});
				/*************************************************************************/
				if(this.data.user.subsystem_id == "1"){
					this.userdata.subsystem_id = "General";
				}else{
					this.userdata.subsystem_id = "Técnico";
				}
				/*************************************************************************/
		}, (err) => {
			console.error(err);
		});
  }
  
}
