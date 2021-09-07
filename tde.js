var jogo = [[-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]];
var resposta = [["yellow", 3, 0, 2, 2], ["blue", 1, 2, 0, 1], ["red", 2, 4, 3, 3], ["green", 0, 1, 4, 4], ["white", 4, 3, 1, 0]];

function arrumar(i, j)
{
debugger;

    alt = jogo[i][j];
    jogo[i][j] = document.getElementById("casa"+ i + "." + j).value;
    vetor = [jogo[i][j], alt];


    document.getElementById("casa" + i).style.backgroundColor = jogo[i][0];
 
    for(let x of vetor)
    switch (j)
    {
            case 0:
            switch (x)
            {
                  case "red":
            
                        mesmacasa(0, 1, "red", 2, 2);
                        break;
                  case "green":
                        mesmacasa(0, 2, "green", 1, 6);

                  case "white":
                        ladoesquerdo();
                        break;

                  case "yellow":
                        mesmacasa(0, 3, "yellow", 2, 8)

                        break;

                  case "blue":

                        vizinho(0, 1, "blue", 3, 14);

            }

            case 1:
                  switch (x)
                  {
                        case "0":

                              mesmacasa(1, 3, 0, 4, 13);
                              break;
                        case "1":

                              mesmacasa(1, 2, 1, 2, 4);
                              break;
                        
                        case "2":

                              mesmacasa(1, 0, 2, "red", 2);
                              break;
                        case "3":

                              fixa(1, 0, 3, 1);
                              vizinho(1, 0, 3, "blue", 14);
                              break;
                        case "4":
                              mesmacasa(1, 4, 4, 0, 3);
                              break;
                  }
            
            case 2:
                  switch (x)
                  {
                        case "0":
                              vizinho(2, 3, 0, 0, 15);
                              break;
                        case "1":
                              mesmacasa(2, 0, 1, "green", 6);
                              break;
                        case "2":
                              mesmacasa(2, 1, 2, 1, 4);
                              break;
                        case "3":
                              mesmacasa(2, 3, 3, 1, 12);
                              break;
                        case "4":
                              fixa(2, 2, 4, 9);
                  }

            case 3:
                  switch (x)
                  {
                        case "0":
                              vizinho(3, 4, 0, 2, 10);
                              vizinho(3, 2, 0, 0, 15);
                              break;
                        case "1":
                              mesmacasa(3, 2, 1, 3, 12);
                              break;
                        case "2":
                              mesmacasa(3, 0, 2, "yellow", 8);
                              vizinho(3, 4, 2, 1, 11);
                              break;
                        case "3":
                              mesmacasa(3, 4, 3, 3, 7);
                              break;
                        case "4":
                              mesmacasa(3, 1, 4, 0, 13);
                              break;
                  }
            
            case 4:
                  switch (x)
                  {
                        case "0":
                              mesmacasa(4, 1, 0, 4, 3);
                              break;
                        case "1":
                              vizinho(4, 3, 1, 2, 11);
                              break;
                        case "2":
                              vizinho(4, 3, 2, 0, 10);
                              break;
                              
                        case "3":
                              mesmacasa(4, 3, 3, 3, 7);
                              break;


                  }
    }

    if(jogo.join(" * ") === resposta.join(" * "))
    {
          alert("parabens você conseguiu !!!");
    }
}


function mesmacasa(p1, p2, r1, r2, dica)
{
    i = 0;
    j = 0;
    
    while(i < 5){
          
          if((jogo[i][p2] == r2)&&(jogo[i][p1] == r1))
          {
                j+= 1;
          }else if((jogo[i][p2] == r2) || (jogo[i][p1] == r1))
          {
                j=5;
                break;
          }
          
          i+=1;
    }
    var e = document.getElementById("dica" + dica).innerText;
    
    if(j == 1)
    {

          document.getElementById("dica" + dica).innerHTML= "<del>" + e + "</del>";
          document.getElementById("dica" + dica).className="list-group-item disabled";
    }else
    {
          document.getElementById("dica" + dica).innerHTML= e;
          document.getElementById("dica" + dica).className="list-group-item";
    }
    
}

function ladoesquerdo()
{
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
            document.getElementById("dica" + dica).className="list-group-item disabled";
      }else
      {
            document.getElementById("dica5").innerHTML= "A casa Verde fica do lado esquerdo da casa Branca.";
            document.getElementById("dica" + dica).className="list-group-item";
      }

}

function vizinho(p1, p2, r1, r2, dica)
{
       
            
      i = 0;
      j = 0;
      k = 0
      while(i < 5)
      {
            if(jogo[i][p2] == r2)
            {
                  if(i == 0)
                  {
                        if(jogo[i+1][p1] == r1)
                        {
                              j++;
                        }
                  }
                  else if(i == 4)
                  {
                        if(jogo[i-1][p1] == r1)
                        {
                              j++;
                        }
                  }
                  else
                  {
                        if(jogo[i-1][p1] == r1)
                        {
                              j++;
                        }
                        
                        if(jogo[i+1][p1] == r1)
                        {
                              j++;
                        }
                  }
            }
            
            if(jogo[i][p2] == r2)
            {
                  k++;
            }
            
            if(jogo[i][p1] == r1)
            {
                  k++;
            }
            i++;
      }
     
      var e = document.getElementById("dica" + dica).innerText;
    
      if(j == 1 && k == 2)
      {
  
            document.getElementById("dica" + dica).innerHTML= "<del>" + e + "</del>";
            document.getElementById("dica" + dica).className="list-group-item disabled";
      }else
      {

            document.getElementById("dica" + dica).innerHTML= e;
            document.getElementById("dica" + dica).className="list-group-item";
      }
}

function fixa(pessoa, casa, nome, dica)
{
      i = 0;
      j = false;
      while(i < 5)
      {
            if(jogo[i][pessoa] == nome)
            {
                  if(i == casa)
                  {
                        j = true;
                  }else
                  {
                        j = false;
                        break;
                  }
            }

            i++;
      }

      var e = document.getElementById("dica" + dica).innerText;
    
      if(j)
      {
  
            document.getElementById("dica" + dica).innerHTML= "<del>" + e + "</del>";
            document.getElementById("dica" + dica).className="list-group-item disabled";

      }else
      {

            document.getElementById("dica" + dica).innerHTML= e;
            document.getElementById("dica" + dica).className="list-group-item";
      }
}

