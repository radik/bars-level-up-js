describe("Warrior:", function () {
    it("Конструктор должен быть объявлен", function () {
        expect(Warrior).toBeDefined();
    });

    it("Воин должен иметь имя и уровень", function () {
        var warrior = new Warrior("Joda", 100);
        expect(warrior.name).toBeDefined();
        expect(warrior.level).toBeDefined();
    });

    it("Значения для имени и уровня воина получаем " +
        "в качестве параметров конструктора", function () {
            var warrior = new Warrior("Joda", 100);
            expect(warrior.name).toEqual("Joda");
            expect(warrior.level).toEqual(100);
        });
});

describe("Warrior.prototype:", function () {
    it("Воин должен уметь атаковать", function () {
        var darth = new Warrior("Darth Vader", 99);
        expect(darth.attack).toBeDefined();
        expect(darth.attack()).toEqual(9.9);
    });
});

describe("Jedi:", function () {
    it("Конструктор Jedi должен быть объявлен", function () {
        expect(Jedi).toBeDefined();
    });

    it("Jedi должен наследоваться от Warrior", function () {
        expect(Jedi.prototype.constructor).toEqual(Warrior);
    });

    it("Jedi получает имя и уровень", function () {
        var joda = new Jedi("Joda", 100);
        expect(joda.name).toEqual("Joda");
        expect(joda.level).toEqual(100);
    });

    it("Jedi находится на светлой стороне", function () {
        var joda = new Jedi("Joda", 100);
        expect(joda.sideOfForce).toEqual("light");
    });
});

describe("Sith:", function () {
    it("Конструктор Sith должен быть объявлен", function () {
        expect(Sith).toBeDefined();
    }); 

    it("Sith должен наследоваться от Warrior", function () {
        expect(Sith.prototype.constructor).toEqual(Warrior);
    });

    it("Sith получает имя и уровень", function () {
        var darth = new Sith("Darth Vader", 100);
        expect(darth.name).toEqual("Darth Vader");
        expect(darth.level).toEqual(100);
    });

    it("Sith находится на темной стороне", function () {
        var darth = new Sith("Darth ", 100);
        expect(darth.sideOfForce).toEqual("dark");
    });
});

describe("Code: ", function () {
    it("Воин должен уметь произносить свой кодекс", function () {
        var warrior = new Warrior("Joda", 100);
        expect(warrior.getCode).toBeDefined();
    });

    it("Каждый Jedi должен знать свой кодекс", function () {
        var joda = new Jedi("Joda", 100);
        expect(joda.getCode).toBeDefined();
        expect(joda.getCode()).toEqual("Нет волнения — есть покой...");
    });

    it("Каждый Sith должен знать свой кодекс", function () {
        var darth = new Sith("Darth ", 100);
        expect(darth.getCode).toBeDefined();
        expect(darth.getCode()).toEqual("Спокойствие — ложь, есть только страсть...");
    });
});

describe("Sith.toDarkSide:", function () {
    var palpatine, anakin, darth;
    beforeEach(function () {
        darth = new Sith("Darth Vader", 1000);
        palpatine = new Sith("Palpatine", 1000);
        anakin = new Jedi("Anakin Skywalker", 100);
    });

    it("Склонять на темную сторону можно только тех, кто на светлой - Джедаев", function () {
        expect(function () {
            palpatine.toDarkSide(darth);
        }).toThrow(new Error("Invalid argument"));
    });

    it("Palpatine должен склонить Anakin Skywalker на темную сторону", function () {
        palpatine.toDarkSide(anakin);
        expect(palpatine.sideOfForce).toEqual("dark");
        expect(anakin.sideOfForce).toEqual("dark");
    });

    it("У Anakin Skywalker не хватает сил склонить Palpatine на светлую сторону", function () {
        anakin.toLightSide(palpatine);
        expect(palpatine.sideOfForce).toEqual("dark");
        expect(anakin.sideOfForce).toEqual("dark");
    });
});

describe("Jedi.toLightSide:", function () {
    var luke, darth, joda;
    beforeEach(function () {
        joda = new Jedi("Joda", 100);
        darth = new Sith("Darth Vader", 1000);
        luke = new Jedi("Like Skywalker", 1001);
    });

    it("Склонять на светлую сторону можно только тех, кто на темной - Ситхов", function () {
        expect(function () {
            joda.toLightSide(luke);
        }).toThrow(new Error("Invalid argument"));
    });

    it("Вот что бы было, если бы Люк смог склонить отца на светлую сторону", function () {
        luke.toLightSide(darth);
        expect(darth.sideOfForce).toEqual("light");
        expect(luke.sideOfForce).not.toEqual("dark");
    });

    it("У Дарта Вейдера не хватило силы склонить Люка на темную сторону", function () {
        darth.toDarkSide(luke);
        expect(darth.sideOfForce).toEqual("light");
        expect(luke.sideOfForce).toEqual("light");
    });
});