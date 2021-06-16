
var jogo = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
var resposta = [["yellow", 3, 0, 2, 2], ["blue", 1, 2, 0, 1], ["red", 2, 4, 3, 3], ["green", 0, 1, 4, 4], ["white", 4, 3, 1, 0]];
var i = 0, j=0, gatos = 0;
function arrumar()
{
      jogo[0][0] = document.getElementById("casa0.0").value;
      jogo[0][1] = Number(document.getElementById("casa0.1").value);
      jogo[0][2] = Number(document.getElementById("casa0.2").value);
      jogo[0][3] = Number(document.getElementById("casa0.3").value);
      jogo[0][4] = Number(document.getElementById("casa0.4").value);
      
      jogo[1][0] = document.getElementById("casa1.0").value;
      jogo[1][1] = Number(document.getElementById("casa1.1").value);
      jogo[1][2] = Number(document.getElementById("casa1.2").value);
      jogo[1][3] = Number(document.getElementById("casa1.3").value);
      jogo[1][4] = Number(document.getElementById("casa1.4").value);
      
      jogo[2][0] = document.getElementById("casa2.0").value;
      jogo[2][1] = Number(document.getElementById("casa2.1").value);
      jogo[2][2] = Number(document.getElementById("casa2.2").value);
      jogo[2][3] = Number(document.getElementById("casa2.3").value);
      jogo[2][4] = Number(document.getElementById("casa2.4").value);
      
      jogo[3][0] = document.getElementById("casa3.0").value;
      jogo[3][1] = Number(document.getElementById("casa3.1").value);
      jogo[3][2] = Number(document.getElementById("casa3.2").value);
      jogo[3][3] = Number(document.getElementById("casa3.3").value);
      jogo[3][4] = Number(document.getElementById("casa3.4").value);
      
      jogo[4][0] = document.getElementById("casa4.0").value;
      jogo[4][1] = Number(document.getElementById("casa4.1").value);
      jogo[4][2] = Number(document.getElementById("casa4.2").value);
      jogo[4][3] = Number(document.getElementById("casa4.3").value);
      jogo[4][4] = Number(document.getElementById("casa4.4").value);
      
      //Arrumar as cores
      
      document.getElementById("casa0").style.backgroundColor= jogo[0][0];
      document.getElementById("casa1").style.backgroundColor= jogo[1][0];
      document.getElementById("casa2").style.backgroundColor= jogo[2][0];
      document.getElementById("casa3").style.backgroundColor= jogo[3][0];
      document.getElementById("casa4").style.backgroundColor= jogo[4][0];
      
      //verificar as respostas
      
      if(jogo[0][1] == 3 && !(jogo[1][1] == 3 || jogo[2][1] == 3 || jogo[3][1] == 3 || jogo[4][1] == 3))
      {
            document.getElementById("dica1").innerHTML="<del>O Noroeguês vive na primeira casa</del>";
      }else
      {
            document.getElementById("dica1").innerHTML="O Noroeguês vive na primeira casa";
      }
      
      //dica 2:
      
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][1] == 2)&&(jogo[i][0] == "red"))
            {
                  j+= 1;
            }else if((jogo[i][1] == 2) || (jogo[i][0] == "red"))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica2").innerHTML= "<del>O Inglês vive na casa Vermelha.</del>";
      }else
      {
            document.getElementById("dica2").innerHTML= "O Inglês vive na casa Vermelha.";
      }
      
      //dica3: 
           
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][1] == 4)&&(jogo[i][4] === 0))
            {
                  j+= 1;
            }else if((jogo[i][1] == 4) || (jogo[i][4] === 0))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica3").innerHTML= "<del>O Sueco tem Cachorros como animais de estimação.</del>";
      }else
      {
            document.getElementById("dica3").innerHTML= "O Sueco tem Cachorros como animais de estimação.";
      }
   
      //dica 4:
      
           
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][1] == 1)&&(jogo[i][2] === 2))
            {
                  j+= 1;
            }else if((jogo[i][1] == 1) || (jogo[i][2] === 2))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica4").innerHTML= "<del>O Dinamarquês bebe Chá.</del>";
      }else
      {
            document.getElementById("dica4").innerHTML= "O Dinamarquês bebe Chá.";
      }
      
      //dica 5:

      i = 1;
      j = 0;

      while( i < 5)
      {
            if(jogo[i][0] == "white" && jogo[i - 1][0] == "green")
            {
                  j++;
            }else if((jogo[i][0] == "white" && (jogo[i - 1][0] != "green")) || (jogo[i - 1][0] == "green" && (jogo[i][0] != "white")))
            {
                  j=5;
                  break;
            }
            
            if(jogo[0][0] == "white")
            {
                 j=5;
                 break;
            }
            
            i++;
      }
      
      
      if(j == 1)
      {
            document.getElementById("dica5").innerHTML= "<del>A casa Verde fica do lado esquerdo da casa Branca.</del>";
      }else
      {
            document.getElementById("dica5").innerHTML= "A casa Verde fica do lado esquerdo da casa Branca.";
      }
      
      //dica 6:
          
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][0] == "green")&&(jogo[i][2] == 1))
            {
                  j+= 1;
            }else if((jogo[i][0] == "green") || (jogo[i][2] == 1))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica6").innerHTML= "<del>O homem que vive na casa Verde bebe Café.</del>";
      }else
      {
            document.getElementById("dica6").innerHTML= "O homem que vive na casa Verde bebe Café.";
      }
      
      //dica 7:
      
                
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][3] == 3)&&(jogo[i][4] == 3))
            {
                  j+= 1;
            }else if((jogo[i][3] == 3) || (jogo[i][4] == 3))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica7").innerHTML= "<del>O homem que fuma Pall Mall cria Pássaros.</del>";
      }else
      {
            document.getElementById("dica7").innerHTML= "O homem que fuma Pall Mall cria Pássaros.";
      }

      //dica 8:
      
                      
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][0] == "yellow")&&(jogo[i][3] == 2))
            {
                  j+= 1;
            }else if((jogo[i][0] == "yellow") || (jogo[i][3] == 2))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica8").innerHTML= "<del>O homem que vive na casa Amarela fuma Dunhill.</del>";
      }else
      {
            document.getElementById("dica8").innerHTML= "O homem que vive na casa Amarela fuma Dunhill.";
      }
      
      //dica 9:
      
       
      if(jogo[2][2] == 4 && !(jogo[0][2] == 4 || jogo[1][2] == 4 || jogo[3][2] == 4 || jogo[4][2] == 4))
      {
            document.getElementById("dica9").innerHTML="<del>O homem que vive na casa do meio bebe Leite.</del>";
      }else
      {
            document.getElementById("dica9").innerHTML="O homem que vive na casa do meio bebe Leite.";
      }
   
      //dica 10:
      i = 0;
      j = 0;
      gatos = 0
      while(i < 5)
      {
            if(jogo[i][3] == 0)
            {
                  if(i == 0)
                  {
                        if(jogo[i+1][4] == 2)
                        {
                              j++;
                        }
                  }
                  else if(i == 4)
                  {
                        if(jogo[i-1][4] == 2)
                        {
                              j++;
                        }
                  }
                  else
                  {
                        if(jogo[i-1][4] == 2)
                        {
                              j++;
                        }
                        
                        if(jogo[i+1][4] == 2)
                        {
                              j++;
                        }
                  }
            }
            
            if(jogo[i][4] == 2)
            {
                  gatos++;
            }
            
            if(jogo[i][3] == 0)
            {
                  gatos++;
            }
            i++;
      }
     
      
      if(j == 1 && gatos == 2)
      {
            document.getElementById("dica10").innerHTML= "<del>O homem que fuma Blends vive ao lado do que tem Gatos.</del>";
      }else
      {
            document.getElementById("dica10").innerHTML= "O homem que fuma Blends vive ao lado do que tem Gatos.";
      }
      
      
      //dica 11:
      
            i = 0;
      j = 0;
      gatos = 0
      while(i < 5)
      {
            if(jogo[i][4] == 1)
            {
                  if(i == 0)
                  {
                        if(jogo[i+1][3] == 2)
                        {
                              j++;
                        }
                  }
                  else if(i == 4)
                  {
                        if(jogo[i-1][3] == 2)
                        {
                              j++;
                        }
                  }
                  else
                  {
                        if(jogo[i-1][3] == 2)
                        {
                              j++;
                        }
                        
                        if(jogo[i+1][3] == 2)
                        {
                              j++;
                        }
                  }
            }
            
            if(jogo[i][3] == 2)
            {
                  gatos++;
            }
            
            if(jogo[i][4] == 1)
            {
                  gatos++;
            }
            i++;
      }
     
      
      if(j == 1 && gatos == 2)
      {
            document.getElementById("dica11").innerHTML= "<del>O homem que cria Cavalos vive ao lado do que fuma Dunhill.</del>";
      }else
      {
            document.getElementById("dica11").innerHTML= "O homem que cria Cavalos vive ao lado do que fuma Dunhill.";
      }
      
      //dica 12 
                      
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][3] == 1)&&(jogo[i][2] == 3))
            {
                  j+= 1;
            }else if((jogo[i][3] == 1) || (jogo[i][2] == 3))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica12").innerHTML= "<del>O homem que fuma BlueMaster bebe Cerveja.</del>";
      }else
      {
            document.getElementById("dica12").innerHTML= "O homem que fuma BlueMaster bebe Cerveja.";
      }
      //dica 13 
                      
      i = 0;
      j = 0;
      
      while(i < 5){
            
            if((jogo[i][1] == 0)&&(jogo[i][3] == 4))
            {
                  j+= 1;
            }else if((jogo[i][1] == 0) || (jogo[i][3] == 4))
            {
                  j=5;
                  break;
            }
            
            i+=1;
      }

      if(j == 1)
      {
            document.getElementById("dica13").innerHTML= "<del>O Alemão fuma Prince.</del>";
      }else
      {
            document.getElementById("dica13").innerHTML= "O Alemão fuma Prince.";
      }

      //dica 14
      
            
            i = 0;
      j = 0;
      gatos = 0
      while(i < 5)
      {
            if(jogo[i][1] == 3)
            {
                  if(i == 0)
                  {
                        if(jogo[i+1][0] == "blue")
                        {
                              j++;
                        }
                  }
                  else if(i == 4)
                  {
                        if(jogo[i-1][0] == "blue")
                        {
                              j++;
                        }
                  }
                  else
                  {
                        if(jogo[i-1][0] == "blue")
                        {
                              j++;
                        }
                        
                        if(jogo[i+1][0] == "blue")
                        {
                              j++;
                        }
                  }
            }
            
            if(jogo[i][1] == 3)
            {
                  gatos++;
            }
            
            if(jogo[i][0] =="blue")
            {
                  gatos++;
            }
            i++;
      }
     
       
      if(j == 1 && gatos == 2)
      {
            document.getElementById("dica14").innerHTML= "<del>O Norueguês vive ao lado da casa Azul.</del>";
      }else
      {
            document.getElementById("dica14").innerHTML= "O Norueguês vive ao lado da casa Azul.";
      }
      
      
            //dica 15
      
            
            i = 0;
      j = 0;
      gatos = 0
      while(i < 5)
      {
            if(jogo[i][3] == 0)
            {
                  if(i == 0)
                  {
                        if(jogo[i+1][2] == 0)
                        {
                              j++;
                        }
                  }
                  else if(i == 4)
                  {
                        if(jogo[i-1][2] == 0)
                        {
                              j++;
                        }
                  }
                  else
                  {
                        if(jogo[i-1][2] == 0)
                        {
                              j++;
                        }
                        
                        if(jogo[i+1][2] == 0)
                        {
                              j++;
                        }
                  }
            }
            
            if(jogo[i][3] == 0)
            {
                  gatos++;
            }
            
            if(jogo[i][2] ==0)
            {
                  gatos++;
            }
            i++;
      }
     
       
      if(j == 1 && gatos == 2)
      {
            document.getElementById("dica15").innerHTML= "<del>O homem que fuma Blends é vizinho do que bebe Água.</del>";
      }else
      {
            document.getElementById("dica15").innerHTML= "O homem que fuma Blends é vizinho do que bebe Água.";
      }


}

function Analisar()
{
      i = 0;
      j = 0;
      gatos= 0;
      while(i < 5)
      {
            j=0
            while(j<5)
            {
                  if(jogo[i][j] == resposta[i][j])
                  {
                        gatos++;
                  }
                  j++;
            }
      
      i++;      
      }
      
      if(gatos == 25)
      {
            alert("parabens você conseguiu !!!");
      }else
      {
            alert("ainda tem algo de errado !!");
      }
}