function fibonacci(n) {
    const fib = [0, 1];

    // Gera a sequência de Fibonacci
    while(fib[fib.length-1] < n) {
        const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextFib);
    }

    return fib;
};

function verificaFibonacci(numero) {
    const fibSquencia = fibonacci(numero);

    if(fibSquencia.includes(numero)) {
        return `${numero} pertence à sequência de Fibonacci.`
    } else {
        return `${numero} não percente à sequência de Fibonacci`
    }
};

// Uso das funções
const numeroInformado = 2;
const resultado = verificaFibonacci(numeroInformado);
console.log(resultado);