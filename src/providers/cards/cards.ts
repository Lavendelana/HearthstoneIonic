import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import 'rxjs/add/operator/map';

@Injectable()
export class CardsProvider {

	public cards: Array<Card>;

	constructor(public http: HttpClient) {

	}

	getCards() {
		return new Promise((resolve, reject) => {
			this.http.get('assets/raw/cards.json').map(data => {  //assets/raw/cards_23576.json
				let dataList = new Array();
				Object.keys(data).forEach(value => {
					var cardsList = data[value];
					cardsList.forEach(card => {
						if (this.isValidCard(card)) {
							dataList.push(card);
						}
					});
				});
				return dataList.map(item => {
					return new Card(item.cardId, item.name, item.cardSet, item.type, item.text, item.playerClass, item.mechanics, item.faction, item.rarity, item.health, item.collectible, item.img, item.imgGold)
				});
			}).subscribe(data => {
		        resolve(data);
		    }, (err) => {
		        reject(err);
		    });
		});
	}

	isValidCard(card) {
		if (card.img != null && card.collectible == true && card.type != "Hero") {
			return true;
		}
		return false;
	}

	setCards(cardsObject) {
		this.cards = cardsObject;
	}

	filterCards(searchTerm : string) {
		if (searchTerm.length > 0) {
			return this.cards.filter((item) => {
				return 	item.text.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
						item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || 
						item.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || 
						item.playerClass.toLowerCase() == searchTerm.toLowerCase();
			});
		} else {
			return this.cards;
		}
	}

}
