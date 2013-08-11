describe("Warrior", function () {
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

describe("Warrior.prototype", function () {
    it("Воин должен уметь атаковать", function () {
        var dart = new Warrior("Dart Weider", 99);
        expect(dart.attack).toBeDefined();
        expect(dart.attack()).toEqual(9.9);
    });
});