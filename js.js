/*

let div = document.getElementById("tabela");

// criar elemento tabela

let tabela = document.createElement("table");
tabela.border="1"

// criar elemnto thead

let thead = document.createElement ("thead");

//Criar elemento tr

let tr = document.createElement ("tr");

//criar elemento th

let th1 = document.createElement("th");

th1.textContent="FRUTAS";

//criar elemento th

let th2 = document.createElement("th");

th2.textContent="PREÇO";

// criar elemetnto tbody

let tbody= document.createElement("tbody");

//Criar elemento tr

let tr2 = document.createElement ("tr");

//criar elemento td

let td1 = document.createElement("td")
td1.textContent="Banana";
//////////////////////////////////////
let td2 = document.createElement("td")
td2.textContent="500kz";


let tr3= document.createElement ("tr");

let td3 = document.createElement("td")
td3.textContent="Laranja";
//////////////////////////////////////
let td4 = document.createElement("td")
td4.textContent="200kz";

let tr4= document.createElement ("tr");



let td5 = document.createElement("td")
td5.textContent="Manga";
//////////////////////////////////////
let td6 = document.createElement("td")
td6.textContent="150kz";
let tr5= document.createElement ("tr");

let td7 = document.createElement("td")
td7.textContent="Abacate";
//////////////////////////////////////
let td8 = document.createElement("td")
td8.textContent="100kz";

// adicionar a tabela a div 

div.appendChild(tabela)

// adicionar o thead na tabela
 tabela.appendChild(thead)

 // adicionar os th no tr
 thead.appendChild(tr)

 // adicionar os th no tr
 tr.appendChild(th1)
  tr.appendChild(th2)
  
  // adicionar o tbody na tabela

  tabela.appendChild(tbody)

  // adicionar os tr no tbody
 
    tr2.appendChild(td1)
  tr2.appendChild(td2)
    tr3.appendChild(td3)
       tr3.appendChild(td4)
       tr4.appendChild(td5)
       tr4.appendChild(td6)
       
       tr5.appendChild(td7)
      tr5.appendChild(td8)
        tbody.appendChild(tr2)
                tbody.appendChild(tr3)
                  tbody.appendChild(tr4)
                    tbody.appendChild(tr5)

                //criar um formulário

*/
let div2 = document.getElementById("formulario")


 let form =document.createElement("form")

// criar o elemento label

let label1 = document.createElement("label")
label1.textContent="Nome da Fruta:"

// criar elemento input

let input1= document.createElement("input")
input1.type= "text"
input1.name= " quantidade"
input1.id="quantidade"
input1.required=true
 
//criar label
let label2= document.createElement("label")
label2.textContent="Preço"

let input2 = document.createElement("input")
input2.type= "text"
input2.name= " quantidade"
input2.id="quantidade"
input2.required=true

let label3= document.createElement("label")
label3.textContent="Quantidade"


let input3 = document.createElement("input")
input3.type= "number"
input3.name= " quantidade"
input3.id="quantidade"
input3.required=true



div2.appendChild(form)


form.appendChild(label1)
form.appendChild(input1)

form.appendChild(label2)
form.appendChild(input2)

form.appendChild(label3)
form.appendChild(input3)


 

        

