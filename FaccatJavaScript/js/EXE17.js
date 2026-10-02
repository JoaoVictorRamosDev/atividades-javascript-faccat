//Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
//minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
 let horaInicio = Number(prompt("Digite o horario do início do jogo de xadrez: "))
 let horaFim = Number(prompt("Digite o horario do fim do jogo de xadrez: "))
 let duracao = horaFim - horaInicio

 if (horaInicio == horaFim){
    duracao = 24;
    }
    else if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio
    }
    else {
        duracao = (24 - horaInicio) + horaFim
    }

    alert("A duração da partida foi de: " + duracao + " horas")
   

