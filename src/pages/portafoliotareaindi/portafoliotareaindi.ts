import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular'; 
import { UserService } from '../../providers/user-service/user-service';
import { AlertController } from 'ionic-angular';

import { File } from '@ionic-native/file';
//import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera ,CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PortafoliotareaindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-portafoliotareaindi',
  templateUrl: 'portafoliotareaindi.html',
})
export class PortafoliotareaindiPage {
	actid = "";
	actname = "";
	acturl = "";
	grupoid = "";
	lastImage: string = null;
	loading: Loading;
	mate : any;
	mate2 : any;
	arrayCosas = [];
	user_id2 = "";
	activity_id2 = "";
	group_id2 = "";
	unity_id2 = "";		
	test = "";
	base64Image = "";
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public userService: UserService, private camera: Camera, /*private transfer: Transfer,*/ private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
		this.actid = navParams.get("portafolioid");
		this.actname = navParams.get("portafolioname");
		this.grupoid = navParams.get("grupoid");
		//console.log("Abrio portafolio individdual");
		this.userService.homeworks(this.grupoid).then((result) => {
			this.mate = result;
			for (let item in this.mate.activities) {
				if(this.actid == this.mate.activities[item].id){
					this.activity_id2 = this.mate.activities[item].id,
					this.group_id2 =  this.mate.activities[item].group_id,
					this.unity_id2 = this.mate.activities[item].unity_id
				}
			}	
		}, (err) => {
			console.error(err);
		});
		this.userService.profileget().then((result) => {
			this.mate2 = result;
			console.log("user_id"+this.mate2.user.id);
			this.user_id2 = this.mate2.user.id;  
		}, (err) => {
			console.error(err);
		});
		
  }
  
  public presentActionSheet() {
	let actionSheet = this.actionSheetCtrl.create({
	  title: 'Selecciona una imagen',
	  buttons: [
		{
		  text: 'Cargar de la memoria',
		  handler: () => {
			this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
		  }
		},
		{
		  text: 'Usar camara',
		  handler: () => {
				const options: CameraOptions = {
					quality: 50,
					destinationType: this.camera.DestinationType.DATA_URL,
					encodingType: this.camera.EncodingType.JPEG,
					mediaType: this.camera.MediaType.PICTURE
				}			

				this.camera.getPicture(options).then((imageData) => {
					// imageData is either a base64 encoded string or a file URI
					// If it's base64 (DATA_URL):
				//	this.base64Image = 'data:image/jpeg;base64,' + imageData;
				this.base64Image = "data:image/jpeg;base64," + imageData;
				 }, (err) => {
					// Handle error
				 });
			//this.takePicture(this.camera.PictureSourceType.CAMERA);
		  }
		},
		{
		  text: 'Cancelar',
		  role: 'cancelar'
		}
	  ]
	});
	actionSheet.present();
	}
	public takePicture(sourceType) {
	  // Create options for the Camera Dialog
	  var options = {
		quality: 50,
		sourceType: sourceType,
		saveToPhotoAlbum: false,
		correctOrientation: true,
		destinationType: this.camera.DestinationType.DATA_URL,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE
	  };
	  // Get the data of an image
	  this.camera.getPicture(options).then((imagePath) => {
		// Special handling for Android library
		if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
			this.base64Image = "data:image/jpeg;base64," + imagePath;
		} else {
		  var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
		  var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
		  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
		}
	  }, (err) => {
		this.presentToast('Error while selecting image.');
	  });
	}

	private createFileName() {
	  var d = new Date(),
	  n = d.getTime(),
	  newFileName =  n + ".jpg";
	  return newFileName;
	}
	 
	// Copy the image to a local folder
	private copyFileToLocalDir(namePath, currentName, newFileName) {
	  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
		this.lastImage = newFileName;
	  }, error => {
		this.presentToast('Error while storing file.');
	  });
	}
	 
	private presentToast(text) {
	  let toast = this.toastCtrl.create({
		message: text,
		duration: 3000,
		position: 'top'
	  });
	  toast.present();
	}
	 
	// Always get the accurate path to your apps folder
	public pathForImage(img) {
	  if (img === null) {
		return '';
	  } else {
		return cordova.file.dataDirectory + img;
	  }
	}
	
	public uploadImage2() {
	var portfolio = { 	
						portfolio_homework_id: this.actid,  
						image: this.base64Image	
					};

					this.userService.porthomeworkupload(portfolio).then((result) => {
						console.log(result);
						let alert = this.alertCtrl.create({
							title: 'Captura Correcta',
							message: "Exito" + result 
							,
							buttons: ['Ok']
					  });
					  alert.present();
					}, (err) => {
						console.error(err);
							let alert = this.alertCtrl.create({
							title: 'ERROR',
							message: err.message 
							,
							buttons: ['Dismiss']
					  });
					  alert.present();

					});	
	}
	public uploadImage() {
  // Destination URL
  var url = "http://yoururl/upload.php";
 
  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);
 
  // File name only
  var filename = this.lastImage;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
 
  //const fileTransfer: TransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  /*fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file.');
  });*/
}


}
