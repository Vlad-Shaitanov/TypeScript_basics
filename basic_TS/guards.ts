/*Защитник типа - это некоторое выражение, выполняющее проверку во время
выполнения, гарантирующий тип в некоторой области.*/

//typeof
function streap(x: number | string) {

	if (typeof x === "number") {
		return x.toFixed(2);
	}

	return x.trim();
}


/*Защитники типа instanceof - это способ ограничения типов используя их функцию-конструктор*/
//instanceof - проверяет, является ли объект инстансом какого-то класса
class MyResponse {
	header: "response header";
	result: "response result";
}

class MyError {
	header: "error header";
	message: "error message";
}

function handler(res: MyResponse | MyError) {
	//если аргумент является инстансом определенного класса
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result,
		}
	} else {
		return {
			info: res.header + res.message,
		}
	}
}


//============================
type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
	//...
}

setAlertType("danger");
setAlertType("success");
// setAlertType("default");//Будет ошибка