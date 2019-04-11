/*import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'clkspnr.component.html',
  styleUrls:['app.component.css']
});
export class AppComponent {
  /*public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'LogIn',
      url: '/login',
      icon: 'at'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'contacts'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
     title:'CAP918',
     url:'/cap918',
     icon:'videocam'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
	) 
   {
    this.initializeApp();
	//this.spinnerDialog.show("title", "message", false);
   }
   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 /* constructor(private spinnerDialog: SpinnerDialog) { 
    this.spinnerDialog.show("title", "message", false);
  }*/
  
  /*doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);*/
  /*async function spin() {
  const loadingController = document.querySelector('ion-loading-controller');
  await loadingController.componentOnReady();

  const loadingElement = await loadingController.create({
    message: 'Please wait...',
    spinner: 'crescent',
    duration: 2000
  });
  return await loadingElement.present();
  }
  //}
}*/




//Keyboard
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'keybd.component.html'
})

export class AppComponent {
  constructor(private keyboard: Keyboard,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  //showKBD(){ this.keyboard.show();
  //setTimeout(2000);
  //hideKBD(){ this.keyboard.hide();}
}
