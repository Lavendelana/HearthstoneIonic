import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ListPage } from '../list/list';

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

	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
	}

	register() {
		let loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		loader.onDidDismiss(() => {
			this.navCtrl.popToRoot();
  			this.navCtrl.push(ListPage);
		});
		loader.present();
	}

}
