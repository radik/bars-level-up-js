/**
 * Задание 1. Реализовать конструктор класса Warrior, который в качестве параметров
 * принимает имя и уровень воина. У созданного при помощи этого конструктора объекта
 * должны имя и уровень должны быть доступны в качестве полей экземпляра.
 * Если задание выполнено правильно, то код:
 * <code>
 *   var warrior = new Warrior("Joda", 100);
 *   warrior.name; // == "Joda"
 *   warrior.level; // == 100
 * </code>
 * выполнится без ошибок.
 */

/**
 * Создает экземпляр воина
 * @param {String} name Имя воина.
 * @param {Number} level Уровень воина.
 */
function Warrior(name, level){
  this.name = name;
  this.level = level;
};

/**
 * Задание 2. Добавить метод attack нашему воину.
 * Метод возвращает уровень воина умноженный на коэффициент 0.1.
 * Подсказка: используйте prototype.
 */

/**
 * Метод атаки воина.
 * @example
 * warrior.attack(); // Воин атакует.
 * @name Warrior.attack
 * @return {Number} Урон, наносимой атакой.
 */
Warrior.prototype.attack = function() {
  return this.level * 0.1;
};

/**
 * Задание 3. Создать наследников класса Warrior: Jedi, Sith.
 * Конструкторы Jedi и Sith так же принимают имя и уровень.
 * Добавить к каждому из классов поле sideOfForce со значениями "light" и "dark", соответственно.
 * Классу Warrior добавить метод getCode, возвращающий кодекс воина.
 * Кодекс джедая: "Нет волнения — есть покой...".
 * Кодекс ситха: "Спокойствие — ложь, есть только страсть..."
 */

/**
 * Создает экземпляр джедая
 * @param {String} name Имя джедая.
 * @param {Number} level Уровень джедая.
 */
function Jedi (name, level) {
  this.name = name;
  this.level = level;
  this.sideOfForce = 'light';
  this.code = 'Нет волнения — есть покой...';
};

Jedi.prototype = new Warrior("qewe", 100); 

/**
 * Создает экземпляр ситха
 * @param {String} name Имя ситха.
 * @param {Number} level Уровень ситха.
 */
function Sith (name, level) {
  this.name = name;
  this.level = level;
  this.sideOfForce = 'dark';
  this.code = 'Спокойствие — ложь, есть только страсть...';
};

Sith.prototype = new Warrior("qewe", 100);

/**
 * Метод произнесения кодекса.
 * @example
 * warrior.getCode(); // Воин произносит кодекс.
 * @name Warrior.getCode
 * @return {String} Кодекс воина.
 */
Warrior.prototype.getCode = function(){
   return this.code;
};


/**
 * Задание 4. Добавить метод toLightSide классу Jedi.
 * Метод в качестве параметра принимает экземпляр класса Sith.
 * Если тип передаваемого аргумента не Sith, то выбрасывается исключение.
 * Если уровень джедая выше чем уровень ситха, то ситх переходит
 * на светлую сторону (значение поля sideOfForce у ситха становится "light"), 
 * иначе джедай переходит на темную.
 */

/**
 * Метод призыва на светлую сторону.
 * @example 
 * joda.toLightSide(darth); // Мастер Йода на светлую сторону силы призывает.
 * @name Jedi.toLightSide
 * @param {Sith} sith Ситх, призываемый на светлую сторону
 * @throws 
 * Если призываемый объект не является ситхом, выкидывается исключение.
 */
Warrior.prototype.toLightSide = function(darth){
  if(darth instanceof Sith)
  {
	if(this.level > darth.level){
		darth.sideOfForce = this.sideOfForce;
		darth.code = this.code;
	}
	else{
		this.sideOfForce = darth.sideOfForce;
		this.code = darth.code;
	}
  }
  else
  {
	throw 'Invalid argument';
  }
};


/**
 * Задание 5. Добавить метод toDarkSide классу Sith.
 * Метод в качестве параметра принимает экземпляр класса Jedi.
 * Если тип передаваемого аргумента не Jedi, то выбрасывается исключение.
 * Если уровень ситха выше чем уровень джедая, то джедай переходит
 * на светлую сторону (значение поля sideOfForce у джедая становится "dark"), 
 * иначе ситх переходит на светлую.
 */

 /**
 * Метод призыва на темную сторону.
 * @example 
 * palpatine.toDarkSide(anakin); // Не поддавайся темной силе ты.
 * @name Sith.toDarkSide
 * @param {Jedi} jedi Джедай, призываемый на темную сторону
 * @throws 
 * Если призываемый объект не является джедаем, выкидывается исключение.
 */
Warrior.prototype.toDarkSide = function(anakin){
  if(anakin instanceof Jedi)
  {
	if(this.level > anakin.level){
		anakin.sideOfForce = this.sideOfForce;
		anakin.code = this.code;
	}
	else{
		this.sideOfForce = anakin.sideOfForce;
		this.code = anakin.code;
	}
  }
  else
  {
	throw 'Invalid argument';
  }
};