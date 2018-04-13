import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') username;
	@ViewChild('password') password;

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

	}

	signIn() {
		//if (this.username.value == "admin" && this.password.value == "admin") { 
			let loader = this.loadingCtrl.create({
				content: "Loading cards...",
			});
			loader.present();
			this.navCtrl.push(ListPage).then(() => {
				loader.dismiss();
			});
		//}
	}

	register() {
		this.navCtrl.push(RegisterPage);
	}
}
