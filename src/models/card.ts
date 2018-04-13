export class Card {
	constructor(public cardId: string,
		public name: string,
		public cardSet: string,
		public type: string,
		public text: string,
		public playerClass: string,
		public mechanics: Array<string>,
		public faction: string,
		public rarity: string,
		public health: number,
		public collectible: boolean,
		public img: string,
		public imgGold: string) {
		if (this.name == null) {
			this.name = "";
		}
		if (this.cardSet == null) {
			this.cardSet = "";
		}
		if (this.text == null) {
			this.text = "";
		}
		if (this.playerClass == null) {
			this.playerClass = "";
		}
		if (this.faction == null) {
			this.faction = "";
		}
		if (this.rarity == null) {
			this.rarity = "";
		}
	}
}