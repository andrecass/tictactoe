 //Sem tempo limite 
    // TASKS
    //Escolhas do jogador1
    
    // 1 -  pegar a posição de cada escolha e receber o seu valor
    // 2 -  somar os valores 
    // 3 -  verificar se a soma dos valores batem de acordo com valor das possiveis combinações 
    // 8 - Combinações Possiveis
    
    //     Y
    //   7 4 5 6 8
    //   1 A B C 
    // X 2 D E F 
    //   3 G H I 
    
    //    

    //     Y
    //   7 4 5 6 8
    //   1 7   8   5  = 24
    // X 2 5   5   5  = 15
    //   3 5   2   3  = 6
    //     12  15  18
   
    //[6, 15, 24, 12, 15, 18, 15]
    
    
    // Y - P1 = G H I VALOR = 6  | P2 = D E F VALOR = 14  | P3 = A B C VALOR = 24
    // J - P4 = A D G VALOR = 12 | P5 = B E H VALOR = 15  | P6 = C F I VALOR = 18
    // K - P7 - I E A VALOR = 15
    // Z - P8 - C E G VALOR = 15
    
   
    
    //Px + Px + Px = Vx


    // tinha usado false e true pra switch nas jogadas esse primeiro codigo vou deixar de update porque não funcionou.
    //var Escolha_jogador = null
    //var Escolha_maquina = null
    //function opcao(pos, valor) {
      
      

         
    
     
    //}//

    // segundo atemp
    
// redo again
var jogada = true 
var j1 = []
var j2 = []
var j1R = null
var j2R = null

function opcao(pos, val){
  if(jogada == true ){
    document.getElementById(pos).innerHTML = 'X'

    //j1 is an array every single choice made by the players is add to array.
    j1.push(val)

    //the function sort() reorganize the numbers 
    var j1R = j1.sort()
    
    console.log(j1R)

    //the condition verify if the combination of number match
    if(j1R == '1,2,3' || j1R == '4,5,6' || j1R == '7,8,9' ||
       j1R == '1,4,7' || j1R == '2,5,8' || j1R == '3,6,9' ||
       j1R == '1,2,9' || j1R == '2,3,6') {
       console.log(j1R + ' X venceu')
    
    //if match the set() run and clean the screen.   
        setTimeout(() => {
          
          //reset array
            
          console.log(j1)
          
          limpac();
        }, 1000)
       }

   

    jogada = false
  
  }else {
    
    document.getElementById(pos).innerHTML = 'O'
    
    //j2 is an array every single choice made by the players is add to array.
    j2.push(val)

    //the function sort() reorganize the numbers 
    var j2R = j2.sort()
    
    console.log(j2R)

    //the condition verify if the combination of number match
    if(j2R == '1,2,3' || j2R == '4,5,6' || j2R == '7,8,9' ||
       j2R == '1,4,7' || j2R == '2,5,8' || j2R == '3,6,9' ||
       j2R == '1,2,9' || j2R == '2,3,6') {
       console.log(j2R + ' O venceu')
    
    //if match the set() run and clean the screen.
       setTimeout(() => {
          //reset array
          
          console.log(j2)
          
          limpac();
        }, 1000)
    }

    
    jogada = true
    
  }
  
  
}

function limpac(){
  for (let i = 1; i < 10; i++) {
    document.getElementById('z'+ i).innerHTML = ''
    
  }

}