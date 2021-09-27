/*У входящих параметров указываем тип, а так же тип возвращаемых данных
самой функции*/

function sum(a: number, b: number): number {
	return a + b;
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase();
}



/*===== Опциональные параметры и параметры по умолчанию =====*/
function buildName(name: string, surname?: string): string {
	/*В данном примере surname это опциональный параметр
	Все необязательные параметры должны идти после обязательных*/
	if (surname) {
		return `${name} ${surname}`
	} else {
		return `${name}`;
	}
}

function createdName(name: string, surname = "Ivanov"): string {
	//В данном примере surname это параметр со значением по умолчанию
	return `${name} ${surname}`

}



/*===== Остаточные параметры (rest parameters) =====*/
//Остаточные параметры  можно понимать как неограниченное число необязательных параметров
function writeName(firstName: string, ...restOfName: string[]): string {
	return firstName + restOfName.join(" ");
}
let employeeName = writeName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);



/*===== this и стрелочные функции =====*/
let deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function () {
		// ВНИМАНИЕ: строка ниже — стрелочная функция, которая захватывает значение 'this' из этого места
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



/*===== Перегрузка функции(вызов функции с разными параметрами и получение разных значений) =====*/
//Пример перегрузки
interface MyPosition {
	x: number | undefined,
	y: number | undefined,
}

interface MyPositionWithDefault extends MyPosition {
	default: string,
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
	//Если ни один параметр не передан
	if (!a && !b) {
		return { x: undefined, b: undefined }
	}

	//Если не передан параметр b
	if (a && !b) {
		return { x: a, y: undefined, default: a.toString() }
	}

	return { x: a, y: b }
}
console.log("Empty", position());
console.log("1 param", position(42));
console.log("2 params", position(10, 15));
