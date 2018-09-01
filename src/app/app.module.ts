import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SemestersPage } from '../pages/semesters/semesters';
import { RegisterPage } from '../pages/register/register';
import { MateriasPage } from '../pages/materias/materias';
import { SubjectsinglePage } from '../pages/subjectsingle/subjectsingle';
import { ContentPage } from '../pages/content/content';
import { ActivityPage } from '../pages/activity/activity';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { MateindiPage } from '../pages/mateindi/mateindi';
import { UserService } from '../providers/user-service/user-service';
import { AtMenuComponent } from '../components/at-menu/at-menu';
import { SidebarComponent } from '../components/sidebar/sidebar';
import { ContentindiPage } from '../pages/contentindi/contentindi';
import { ActivityindiPage } from '../pages/activityindi/activityindi';
import { PortafolioindiPage } from '../pages/portafolioindi/portafolioindi';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
	HomePage,
	AtMenuComponent,
	SidebarComponent,
	RegisterPage,
	SemestersPage,
	MateriasPage,
	SubjectsinglePage,
	MateindiPage,
	ContentPage,
	ActivityPage,
	PortfolioPage,
	ContentindiPage,
	ActivityindiPage,
	PortafolioindiPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
	HomePage,
	AtMenuComponent,
	SidebarComponent,
	RegisterPage,
	SemestersPage,
	MateriasPage,
    SubjectsinglePage,
	MateindiPage,	
	ContentPage,
	ActivityPage,
	PortfolioPage,
	ContentindiPage,
	ActivityindiPage,
	PortafolioindiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
	File,
	Transfer,
	FilePath,
	Camera, 
    DocumentViewer,
    FileTransfer
  ]
})
export class AppModule {}
