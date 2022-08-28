const LuidyMoura = (NumeroMax) => {
   let Resultado = []
   for( let i = 1; i <= NumeroMax; i++){
        if(i % 5 == 0){ Resultado.push("Luidy")
        }
        if(i % 9 == 0){Resultado.push("Moura")
        }
        if (i % 5 == 0 && i % 9 == 0){Resultado.push("LuidyMoura")
        }
        if (i % 5 != 0 || i % 9 != 0) {Resultado.push(i)
        }
   }
   return (Resultado)

}