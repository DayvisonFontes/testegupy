function contarLetraA(string) {
    // Converte a string em minúscula para facilitar a contagem
    const letra = 'a';
    const stringLower = string.toLowerCase();

    // Conta quantas vezes a letra 'a' aparece na string
    const quantidade = stringLower.split(letra).length - 1;

    if(quantidade > 0) {
        return `A letra 'a' aparece ${quantidade} vez(es) na string.`;
    } else {
        return "A letra 'a' não aparece na string";
    }

};

const stringInformada = 'Palavra';
const resultado = contarLetraA(stringInformada);
console.log(resultado);