import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CardsProvider } from '../../providers/cards/cards';
import { DetailsPage} from '../../pages/details/details';
import { Card } from '../../models/card';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

	cards: Array<Card>;
	searchTerm: string = '';
	searchControl: FormControl;
	searching: boolean = false;

	loader = this.loadingCtrl.create({
		content: "Loading cards..."
	});

	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public cardsProvider: CardsProvider) {
		this.searchControl = new FormControl();
	}

	ionViewDidLoad() {
		this.getCards();

		this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.setFilteredCards();
            this.searching = false;
        });
	}

	getCards() {
		this.cardsProvider.getCards().then(data => {
			this.cardsProvider.setCards(data);
			this.setCards(data);
			this.loader.dismiss();
		})
		.catch(error => {
			console.log(error);
		});
	}

	itemSelected(item) {
		this.navCtrl.push(DetailsPage, { 'card': item} );
	}

	setCards(cardsList) {
		this.cards = cardsList;
	}

	setFilteredCards() {
		this.cards = this.cardsProvider.filterCards(this.searchTerm);
	}

	onSearchInput() {
		this.searching = true;
	}
}
