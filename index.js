function decode(num) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

    // Сохраняем в переменную первый символ строки
    const len = num.toString().charAt(0);

    // разбиваем на массив символов,
    // удаляем первый символ,
    // делаем реверс,
    // соединяем в строку,
    // и разбиваем регуляркой на массив по два или одному символу
    let arr = [...num.substring(1)].reverse().join('').match(/.{1,2}/g);

    // проходим по массиву и удаляем нули у каждого числа в массиве
    let clr = arr.map(s => s.charAt(0) == 0 ? s.charAt(1) : s);

    // проходим по получному выше массиву,
    // каждую цифру массива приводим к числу в десятичной системе исчисления,
    // и вычитаем из этого числа len(первый символ исходной строки),
    // находим в алфавите нужную букву по полученному числу,
    // записываем в новый массив и обьединяем его в строку
    let res = clr.map(s => alphabet.charAt(parseInt(s, 10) - len)).join('');

    // Приводим первую букву в uppercase
    res = res.charAt(0).toUpperCase() + res.slice(1);

    return res;
}

function encode(name) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const arr = name.toLowerCase().split('');
    const randomNum = Math.floor(Math.random() * 10);

    const arrWithRandomNum = arr.map(s => alphabet.indexOf(s) + randomNum);
    const clr = arrWithRandomNum.map(s => parseInt(s, 10) < 10 ? `0${s}` : s.toString());

    return randomNum.toString() + clr.join('').split('').reverse().join('');
}
