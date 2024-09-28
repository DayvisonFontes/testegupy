function identificarInterruptores() {
    // Passo 1: Liga o primeiro interruptor (interruptor 1)
    let interruptor1 = true; // Lâmpada ligada
    let interruptor2 = false; // Lâmpada desligada
    let interruptor3 = false; // Lâmpada desligada

    console.log("Ligando o primeiro interruptor...");
    
    // Simula esperar 10 minutos
    setTimeout(() => {
        console.log("Desligando o primeiro interruptor e ligando o segundo...");
        // Passo 2: Desliga o primeiro interruptor e liga o segundo
        interruptor1 = false; // Lâmpada desligada
        interruptor2 = true; // Lâmpada ligada

        // Passo 3: Ir até a sala das lâmpadas (simulação)
        const estadoLamps = verificarLamps(interruptor1, interruptor2, interruptor3);
        console.log(estadoLamps);
    }, 1000); // Para simulação, usamos 1 segundo em vez de 10 minutos
}

function verificarLamps(int1, int2, int3) {
    // Simula o estado das lâmpadas
    const lampadas = {
        lampada1: int1 ? "acessa" : "apagada",
        lampada2: int2 ? "acessa" : "apagada",
        lampada3: int3 ? "acessa" : "apagada",
    };

    // Determina o estado das lâmpadas e identifica qual interruptor controla cada uma
    if (lampadas.lampada1 === "apagada" && lampadas.lampada2 === "acessa") {
        return "Interruptor 1 controla a lâmpada fria e apagada; Interruptor 2 controla a lâmpada acesa; Interruptor 3 controla a lâmpada quente.";
    } else {
        // Este código é apenas para simular; normalmente, não teríamos isso, pois saberíamos os estados
        return "Os estados das lâmpadas não correspondem.";
    }
}

// Inicia a identificação dos interruptores
identificarInterruptores();