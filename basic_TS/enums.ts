/*Перечисления позволяют определить набор именованных числовых констант.
Они определяются используя ключевое слово enum.*/

/*===== Существует 2 вида записи =====*/

//1 тип (без присвоения значений)
enum Membership {
	Default,
	Standart,
	Premium
}

const member1 = Membership.Premium;
const member2 = Membership[2];

console.log(member1);// Получим индекс в enum
console.log(member2);// Получим значение по индексу (строковое значение)

//2 тип (с присвоением)
enum SocialMedia {
	VK = "VK",
	FACEBOOK = "FACEBOOK",
	INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;

console.log(social);// Получим строковое значение