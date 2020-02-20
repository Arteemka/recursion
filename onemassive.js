///рекурсия 
// вывести от 1 до n;
function recNat(n) {
    if (n === 1) return 1;
    return `${recNat(n - 1)}, ${n}`;
}

recNat(10);

// от А до B

function recAB(a, b) {
    return (a > b) ? (a === b) ? a : `${a}, ${recAB(a-1,b)}` : (a === b) ? a : `${a}, ${recAB(a+1,b)}`;
}

recAB(4, 10);
recAB(10, 4);

//функция Аккермана

function akker(m, n) {
    return (m === 0) ? n + 1 : (m > 0 && n === 0) ? akker(m - 1, 1) : akker(m - 1, akker(m, n - 1));
}

akker(3, 2);

//степень двойки

function accTwo(a) {
    return (a === 2) ? "Yes" : (a < 2) ? "No" : accTwo(a / 2);
}

accTwo(64)

//сумма цифр

function sum(a) {
    return (a === 1) ? a : a + sum(a - 1);
}

sum(5)

//числа справа на лево

function rightLeft(a) {
    if (a === 1) {
        return a
    }
    console.log(a); // или document.write()
    return rightLeft(a - 1);
}

rightLeft(5);

//числа слева на право

function leftRight(a) {
    if (a === 1) {
        return a;
    }
    console.log(leftRight(a - 1)); // или document.write()
    return a;
}

console.log(leftRight(5))

//проверка числа на простоту

function primeNum(a, b) {
    return (a < 2) ? "NO" : (a === 2) ? "YES" : (a % b === 0) ? "NO" : (b < a / 2) ? primeNum(a, b + 1) : "YES";
}

primeNum(15, 2);

//все простые множители этого числа в порядке неубывания с учетом кратности. Алгоритм должен иметь сложность O(logn).

function primeNumIncreese(a) {
    let b = 2;
    while (b <= a) {
        if (a % b == 0) {
            return (b != a) ? `${b} ${primeNumIncreese(a / b)}` : b
        }
        b++;
    }
}

primeNumIncreese(18);

//проверка полиндром

function palindrom(s) {
    return (s.length === 1 || s.length === 2) ? 'YES' : (s === s.split('').reverse().join('')) ? palindrom(s.substring(1, s.length - 1)) : "NO";
}

palindrom('radar');

//Вывести нечетные числа последовательности

function oddNum() {
    let a = +prompt('', 1)
    if (a > 0) {
        if (a % 2 === 1) {
            console.log(a)
            oddNum();
        } else {
            oddNum();
        }
    }
}

oddNum();

//Вывести члены последовательности с нечетными номерами

function oddNumPos() {
    let a = +prompt('', 1)
    if (a > 0) {
        let b = +prompt('', 1);
        console.log(a);
        if (b > 0) {
            oddNumPos();
        }
    }
}

oddNumPos()

// Максимум последовательности

function maxNum() {
    let a = +prompt('', 1);
    return (a === 0) ? 0 : Math.max(a, maxNum());
}

maxNum();

//Среднее значение последовательности

function avaNum(sum = 0, count = 0) {
    let a = +prompt('', 1);
    if (a > 0) {
        avaNum(sum + a, ++count);
    } else if (sum > 0 && count > 0) {
        console.log(parseFloat(sum / count));
    }
}

avaNum();

//Второй максимум

function secMax(fmax, smax) {
    let a = +prompt('', 1);
    return (a > 0) ? (fmax < a) ? secMax(a, fmax) : (smax < a) ? secMax(fmax, a) : secMax(fmax, smax) : smax;
}

secMax(0, 0);

//Количество элементов, равных максимуму

function equilMax(max, count) {
    let a = +prompt('', 1);
    return (a > 0) ? (a > max) ? equilMax(a, 1) : (a == max) ? equilMax(max, ++count) : equilMax(max, count) : count;
}

equilMax(0, 0);

//посчитать количество единиц

function countOne() {
    let a = +prompt('', 1);
    if (a === 1) {
        let b = +prompt('', 1);
        if (b === 1) {
            return countOne() + a + b;
        } else {
            let c = +prompt('', 1);
            return (c === 1) ? countOne() + a + b + c : a + b + c;
        }
    } else {
        let b = +prompt('', 1);
        return (b === 1) ? countOne() + a + b : a + b;
    }
}

countOne()

//треугольная последовательность

function triangle(a) {
    let sum = 0,
        num = 0;
    if (a === 1) {
        console.log('1');
    } else {
        for (let i = 1; sum < a; i++) {
            sum += i;
            num = i;
        }
        console.log(num + '' + triangle(--a));
    }
    return '';
}

triangle(3);

//Заданная сумма цифр

function sumNum(len, sum, k, s) {

    if (len === k) {
        return (sum === s) ? 1 : 0;
    }

    let c = len === 0 ? 1 : 0;
    let res = 0;

    for (let i = c; i < 10; i++) {
        console.log(res)
        res += sumNum(len + 1, sum + i, k, s);
    }
    return res;
}

console.log(sumNum(0, 0, 3, 15))

//без двух нулей

function withoutNull(a, b) {
    if (a > b + 1) {
        return 0;
    }

    if (a === 0 || b === 0) {
        return 1;
    }

    return withoutNull(a, b - 1) + withoutNull(a - 1, b - 1);
}

withoutNull(2, 2)

// Разворот числа

function reverse(a, b) {
    return (a === 0) ? b : reverse(Math.floor(a / 10), b * 10 + a % 10);
}
console.log(reverse(123, 0));