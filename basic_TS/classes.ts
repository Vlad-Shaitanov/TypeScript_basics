//Базовая реализация как и в JavaScript ES6, только мы добавляем типы
class TypeScript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info(name: string) {
		return `[${name}]: TypeScript version ${this.version}`;
	}
}

const language = new TypeScript("2.5");
console.log(language.info("Helo"));



/*===== Наследование =====*/
class Beast {
	name: string;
	constructor(theName: string) { this.name = theName; }
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Beast {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 5) {
		//Переопределение метода
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horse extends Beast {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 45) {
		//Переопределение метода
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the Python");
let tom: Beast = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);



/*Хорошей практикой при создании класса считается сначала указание полей, затем
конструктора и уже после идут методы объекта. Такая структура улучшает читаемость*/
class Car {
	//Модификатор readonly указывает, что данные св-ва доступны только для чтения
	readonly model: string;
	readonly numberOfWheels: number = 4;//Использование дефолтного ззначения

	constructor(theModel: string) {
		/*Св-ва с модификатором readonly можно
		перезаписать ТОЛЬКО В КОНСТРУКТОРЕ И НИГДЕ БОЛЬШЕ*/

		this.model = theModel;
	}
}



/*========== Модификаторы доступа(protected, public, private) ==========*/
class Animal {
	/*
		1 - поля и методы с модификатором protected могут использоваться в самом классе, в
			котором они определены, а так же во всех классах, которые наследуются
			от него. Инстанс класса уже не может получить доступ к полю.
		2 - поля и методы с модификатором private доступны только в том классе, в котором
			определены
		3 - поля и методы с модификатором public доступны во всех инстансах
		*/
	protected voice: string = "";

	//Модификатор public используется по умолчанию, если не указан никакой другой модификатор
	public color: string = "black";

	private go() {
		console.log("GO");
	}
}

class Cat extends Animal {
	public setVoice(voice: string) {
		this.voice = voice;
	}
}
const cat = new Cat();



/*========== Абстрактные классы ==========*/
//Нужны для наследования, сами по себе ни во что не компилируются
/*Абстрактные классы — это базовые классы, от которых наследуются другие.
Их экземпляры не могут быть созданы напрямую. В отличие от интерфейса,
абстрактный класс может содержать детали реализации своих членов.
Методы в рамках абстрактного класса, помеченные как абстрактные, не содержат
реализацию и должны быть реализованы в производных классах.*/

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log("Component on render");
	}

	info(): string {
		return `This is info`;
	}
}