import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	data: any;
	arrayCosas = [];
	data2: any;
	arrayCosas2 = [];
	data3: any;
	arrayCosas3 = [];
	subsistemaid = "General";
	EdoId = ""; 
	lugar = 0;
	correcto = 1;
	registerdata = {name: "",
					lastname: "",
					email: "",
					birthdate: "",
					state_id: "Estado",
					city_id: "Ciudad",
					subsystem_id: "Subsistema",
					school1_id: "Escuela",
					student_ucode: "",
					password: "",
					password_confirmation: ""
					};									
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
		this.userService.estados().then((result) => {
			this.data = result;
			for(let item in this.data){
				this.arrayCosas[item] = [this.data[item].id,this.data[item].name];
			}
			//console.log("Estados");
			//console.log(this.data);
		}, (err) => {
			console.error(err);
		});	
  }

  edoPage() {
    console.log('estado');
  }
  ciuPage() {
	if(this.registerdata.state_id == "Estado"){
		console.log('Seleccione un estado');
		this.arrayCosas2 = [];
	}
	else{
	this.userService.ciudades(this.registerdata.state_id).then((result) => {
			this.data2 = result;
			for(let item in this.data2){
				this.arrayCosas2[item] = [this.data2[item].id,this.data2[item].name, this.data2[item].state_id];
			}
			console.log("Ciudades");
			console.log(this.data2);
		}, (err) => {
			console.error(err);
		});
	}
  }
  escuelaPage() {
	if(this.registerdata.state_id == "Estado"){
		//console.log('Seleccione un estado');
		this.arrayCosas3 = [];
	}
	else{
		if(this.registerdata.city_id == "Ciudad"){
			//console.log('Seleccione una ciudad');
			this.arrayCosas3 = [];
		}else{
		//console.log('Estado');
		//console.log('EdoID:' + this.registerdata.state_id);
		//console.log('Escuela');
		//console.log('CityID:' + this.registerdata.city_id);
		this.lugar = 0;
		this.userService.escuelas().then((result) => {
				this.data3 = result;
				for(let item in this.data3){
					if(this.data3[item].city_id == this.registerdata.city_id){
						//console.log('Entro!!');
						this.arrayCosas3[this.lugar] = [this.data3[item].id,this.data3[item].name];
						this.lugar = this.lugar+1;
					}
				}
				//console.log("escuelas");
				//console.log(this.data3);
			}, (err) => {
				console.error(err);
			});
			
		}
	}
  }
  subsisPage(){
	  if(this.registerdata.subsystem_id == "Subsistema"){
		//console.log('Seleccione un estado');

	}
	  
  }
  Registrar() {
		this.correcto = 1;
		if(this.registerdata.name == ""){this.correcto = 0;}
		if(this.registerdata.lastname == ""){this.correcto = 0;}
		if(this.registerdata.email == ""){this.correcto = 0;}
		if(this.registerdata.password == ""){this.correcto = 0;}
		if(this.registerdata.password_confirmation == ""){this.correcto = 0;}
		if(this.registerdata.state_id == ""){this.correcto = 0;}
		if(this.registerdata.city_id == ""){this.correcto = 0;}
		if(this.registerdata.subsystem_id == ""){this.correcto = 0;}
		if(this.registerdata.birthdate == ""){this.correcto = 0;}
		if(this.registerdata.student_ucode == ""){this.correcto = 0;}
		if(this.registerdata.school1_id == ""){this.correcto = 0;}	
		if(this.correcto == 1){
		//console.log("name:" + this.registerdata.name);
		//console.log("lastname:" + this.registerdata.lastname);
		//console.log("email:" + this.registerdata.email);
		//console.log("birthdate:" + this.registerdata.birthdate);
		//console.log("state_id:" + this.registerdata.state_id);
		//console.log("city_id:" + this.registerdata.city_id);
		//console.log("subsystem_id:" + this.registerdata.subsystem_id);
		//console.log("school1_id:" + this.registerdata.school1_id);
		//console.log("student_ucode:" + this.registerdata.student_ucode);
		//console.log("password:" + this.registerdata.password);
		//console.log("password_confirmation:" + this.registerdata.password_confirmation);
		this.userService.registro(this.registerdata).then((result) => {
			this.data = result;
			let alert = this.alertCtrl.create({
							title: '¡Felicidades!',
							message: "Registro exitoso",
							buttons: ['Aceptar']
			});
			alert.present();
			localStorage.setItem('USERNAME', this.registerdata.email);
			localStorage.setItem('PASSWORD', this.registerdata.password);
			this.navCtrl.push(LoginPage);
		}, (err) => {
			console.error(err);
			let alert2 = this.alertCtrl.create({
							title: 'ERROR',
							message: err,
							buttons: ['OK']
			  });
			  alert2.present();
		});
		}else{
			let alert3 = this.alertCtrl.create({
								title: 'ERROR',
								message: 'Revise su informació	n',
								buttons: ['OK']
			  });
			  alert3.present();
		}
	}
}
