/**
 * Результатом выполнения домашнего задания будет библиотека StrJs,
 * содержащая функции-утилиты для работы со строками.
 */

/**
 * Задание 1. Создайте модуль StrJs.
 */

var StrJs;

/**
 * Задание 2. В модуль StrJs добавить функцию format, позволяющую форматировать строку.
 * В качестве первого параметра принимается строка-шаблон в форамте 'blah-blah {0}, blah {1}...',
 * следом в функцию передаются параметры, общее количество которых должно соответствовать вставок {x}
 * в строке-шаблоне. Возможно здесь пригодятся регулярные выражения 
 * см. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * @example
 * var txt = StrJs.format('Hello, {0} {1}', 'JS', 'World'); // значение txt равно 'Hello, JS World'
 * @param {String} token строка-шаблон.
 * @param {Mixed...} values значения, которые заменят {0}, {1}... в строке-шаблоне.
 * @return {String} отформатированная строка.
 */

/**
 * Задание 3. В модуль StrJs добавить функцию repeat.
 * @example
 * var txt = StrJs.repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = StrJs.repeat('hello', 3); // 'hellohellohello'
 * @param {String} str строка, которая будет повторяться.
 * @param {Number} count количество повторений.
 * @param {String} sep разделитель (необязательный параметр).
 * @return {String} строка с повотрениями.
 */

/**
 * Задание 4. В модуль StrJs добавить функцию toGetParams, формирующую из
 * объекта строку параметров для GET-запроса.
 * @example
 * var params = StrJs.toGetParams({p1: 1, p2: 'hello', }); // p1=1&p2=hello
 * @param {Object} obj объект, из которого будут формироваться строка параметров.
 * @return {String} строка параметров.
 */

/**
 * Задание 5. В StrJs добавить функцию formatUrl, формирующую из базового url и объекта
 * строку GET-запроса.
 * @example
 * var getUrl = StrJs.formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 * @param {String} url базовый url
 * @param {Object} obj объект, из которого будут формироваться строка параметров.
 */

/**
 * Задание 6. В StrJs добавить функцию startsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента начинается со строки, переданной в качестве второго аргумента,
 * false в противном случае..
 * @param {String} string
 * @param {String} begin
 * @return {Boolean} 
 */

/**
 * Задание 7. В StrJs добавить функцию endsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента оканчивается на строку, переданной в качестве второго аргумента,
 * false в противном случае.
 * @param {String} string
 * @param {String} end
 * @return {Boolean} 
 */


