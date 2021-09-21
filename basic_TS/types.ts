/*===== Типы данных =====*/

/*
В TypeScript имеются следующие базовые типы:

	boolean : логическое значение true или false
	number : числовое значение
	string : строки
	Array : массивы
	кортежи
	Enum : перечисления
	Any : произвольный тип
	Symbol
	null и undefined : соответствуют значениям null и undefined в javascript
	Never : также представляет отсутствие значения и используется в качестве
	возвращаемого типа функций, которые генерируют или возвращают ошибку. (Используется
		в 2 случаях: функция возвращает ошибку и никогда не завершает свое выполнение,
		либо постоянно что-либо делает)
*/

//Типы мы указываем через : и перед присвоением

/*===== Boolean =====*/
const isFetching: boolean = true;
const isLoading: boolean = false;


/*===== Number =====*/
const int: number = 45;
const float: number = 4.2;
const num: number = 3e10;


/*===== String =====*/
const message: string = "Hello world!";


/*===== Array =====*/
//Массив чисел 1 вариант записи
const numberArray1: number[] = [0, 1, 1, 2, 3, 5, 8];
//Массив чисел 2 вариант записи. Дженерик тип
const numberArray2: Array<number> = [0, 1, 1, 2, 3, 5, 8];
//Массив из строк
const words: string[] = ["orange", "yellow", "white"];
//Массив из массивов
const someArray4: number[][] = [[1, 2, 3], []];

//Tuple (массив, состоящий из разных типов данных)
//дает возможность объявить массив с известным фиксированным количеством элементов, которые не обязаны быть одного типа
const person: [string, number] = ["Vladislav", 1990];



/*===== Any(описывает данные, тип которых может быть неизвестен на момент написания приложения) =====*/
let variable: any = 42;
let someArray: any[] = [24, "Tom", false];

/*Работа с функциями. Через двоеточие перед {} указываем возвращаемый функцией
тип данных (void ничего не возвращает)*/
function sayMyName(name: string): void {
	console.log(name);
}
sayMyName("Vladislav");


/*===== Never =====*/
function throwError(message: string): never {
	//Тип never будет обработан, если компилятор видит, что будет явно выброшена ошибка
	throw new Error(message);
}

function infinite(): never {
	//Бесконечный цикл
	while (true) { }
}


/*===== конструкция Type позволяет создавать собственные типы =====*/
//Можно использовать примитивные типы и создавать для них алиасы
//Именованные типы удобно использовать в работе, чтобы проще понять что происходит
type Login = string;//Теперь этот тип можно указывать для переменных
const login: Login = "admin";

type ID = number | string;//Алиас будет иметь тип строковый или числовой
const id1: ID = 123;
const id2: ID = "Hero";


/*===== null & undefined =====*/
type SomeType = string | null | undefined;

