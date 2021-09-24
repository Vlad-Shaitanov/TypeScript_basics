//Создаем пример интерфейса
interface Rect {
	readonly id: string, //readonly - параметр только для чтения
	color?: string, // (?) - свойство необязательное(может быть пропущено у объекта с этим типом)
	size: {
		width: number,
		height: number,
	}
}

//Теперь можно создавать классы и объекты, которые будут иметь тип Rect
const rect1: Rect = {
	id: "12345",
	size: {
		width: 20,
		height: 30
	},
	color: "#ccc"
};

const rect2: Rect = {
	id: "54321",
	size: {
		width: 10,
		height: 30
	},
};
rect2.color = "black";//Отдельно добавили свойство к объекту


//Мы можем указывать к какому типу будет относиться объект
const rect3 = {} as Rect;//Объект будет считаться типом Rect
const rect4 = <Rect>{};//Альтернативная (старая) запись


/*=========== Наследование интерфейсов для объектов ==========*/
interface RectWithArea extends Rect {
	/*Интерфейс RectWithArea наследуется от интерфейса Rect (все свойства).
	Конкретно в этом примере интерфейс RectWithArea будет обязывать выполнить
	функцию вычисления площади прямоугольника*/

	getArea: () => number, //после : указываем тип данных(стрел.функция) и тип возвращаемых данных(число)
}

const rect5: RectWithArea = {
	id: "112233",
	size: {
		width: 10,
		height: 20,
	},
	getArea(): number {
		return this.size.width * this.size.height;
	}
};


/*=========== Наследование интерфейсов для классов ==========*/
interface IClock {
	time: Date,

	setTime(date: Date): void,
}
class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}


/*=========== Создание интерфейса для объекта в большим кол-вом динамических ключей ==========*/
interface IStyles {
	[key: string]: string,
};

const css: IStyles = {
	border: "1px solid black",
	marginTop: "10px",
	paddingLeft: "5px",
};