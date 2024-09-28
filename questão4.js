function nextElement() {
    // a) 1, 3, 5, 7, ___ (números ímpares)
    const a = [1, 3, 5, 7];
    const nextA = a[a.length - 1] + 2;

    // b) 2, 4, 8, 16, 32, 64, ____ (potências de 2, multiplicando por 2)
    const b = [2, 4, 8, 16, 32, 64];
    const nextB = b[b.length - 1] * 2;

    // c) 0, 1, 4, 9, 16, 25, 36, ____ (quadrados perfeitos)
    const c = [0, 1, 4, 9, 16, 25, 36];
    const nextC = Math.pow(c.length, 2);

    // d) 4, 16, 36, 64, ____ (quadrados de múltiplos de 2)
    const d = [4, 16, 36, 64];
    const nextD = Math.pow(Math.sqrt(d[d.length - 1]) + 2, 2);

    // e) 1, 1, 2, 3, 5, 8, ____ (sequência de Fibonacci)
    const e = [1, 1, 2, 3, 5, 8];
    const nextE = e[e.length - 1] + e[e.length - 2];

    // f) 2, 10, 12, 16, 17, 18, 19, ____ (números não primos)
    const f = [2, 10, 12, 16, 17, 18, 19];
    let nextF = f[f.length - 1] + 1;
    while (isPrime(nextF)) {
        nextF++;
    }

    console.log(`Próximo elemento de a: ${nextA}`);
    console.log(`Próximo elemento de b: ${nextB}`);
    console.log(`Próximo elemento de c: ${nextC}`);
    console.log(`Próximo elemento de d: ${nextD}`);
    console.log(`Próximo elemento de e: ${nextE}`);
    console.log(`Próximo elemento de f: ${nextF}`);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

nextElement();