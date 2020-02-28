
console.log("running!!");

let x = document.querySelector("#yal");


let y = document.querySelector("#ko");


let w = document.querySelector("#ok");


let tuv = document.querySelector("#yu");


let pob =document.querySelector("#error")


let button = document.querySelector("#k");


let clear = document.querySelector("#j");


let k;
let j;
let b;
let t;                                                                           
let o ;                                   


function taxOwed(val){
    val = x.value;
    let biu;
    
    if(val<=48535) {
        k = (val*15)/100;
        bui = k.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;

    }


    else if (val>=48535 && val<=97069) {
        k = val - 48535;
        j = (k*20.5)/100;
        b = j + 7280;
        bui = b.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;
    }


    else if (val>=97069 && val<=150473) {
        k = val - 97069;
        j = (k*26)/100;
        b = j + 17230;
        bui = b.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;
    }

    else if (val >=150473 && val<=214368){
        k = val - 150473;
        j =(k*29)/100;
        b = j + 31115;
        bui = b.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;
    }

    else if (val>214368) {
        k = val - 214368;
        j = (k*33)/100;
        b = j + 49645;
        bui = b.toFixed(2);
        return  document.getElementById("ko").textContent="$"+ bui ;
    }

    else {
        return document.getElementById("ko").textContent="";
    }
}

function effectiveTaxRate(val) {

val = x.value;



if(val<=48535) {
   o =  "15%" ;
   return document.getElementById("ok").textContent = o;
}

else if (val>=48535 && val<=97069) {
        o = "20.5%";
        return document.getElementById("ok").textContent = o;
    }

else if (val>=97069 && val<=150473) {
    o = "26%"
    return  document.getElementById("ok").textContent =o;
}

else if (val >=150473 && val<=214368){
    o = "29%"
    return document.getElementById("ok").textContent= o;
}

else if (val>214368){
    o = "33%"
    return  document.getElementById("ok").textContent =o;
}

else {

    return document.getElementById("ok").textContent="";
}



}









function retainedEarning(val) {

    val = x.value;
    let hjk ;

    if(val<=48535) {
        k = (val*15)/100;
        j = val - k;
        hjk = j.toFixed(2);
        return  document.getElementById("yu").textContent = "$" +hjk ; 

    }

    
    else if (val>=48535 && val<=97069) {
        k = val - 48535;
        j = (k*20.5)/100;
        b = j + 7280;
        hjk = b.toFixed(2);
        return document.getElementById("yu").textContent = "$" + hjk;

    }

    else if (val>=97069 && val<=150473) {

        k = val - 48535;
        j = (k*26)/100;
        b = j + 17230;
        t = val - b;
        hjk =t.toFixed(2);
        return   document.getElementById("yu").textContent = "$" + hjk;
    }

    else if (val >=150473 && val<=214368){
        k = val - 150473;
        j =(k*29)/100;
        b = j + 31115;
        t = val - b ;
        hjk =t.toFixed(2);
        return  document.getElementById("yu").textContent = "$" + hjk;
    }

    else if (val>214368) {
        k = val - 214368;
        j = (k*33)/100;
        b = j + 49645;
        t = val - b;
        hjk = t.toFixed(2);
        return  document.getElementById("yu").textContent = "$" + hjk;
    }


    else  {
           
        return document.getElementById("yu").textContent="";



    }
}


function libBib(val) {

    val = x.value;

    if (val>=0 ){

    return document.getElementById("error").textContent="";

    }

    else  {

        return document.getElementById("error").textContent="Error: enter a number ";
    }


    
}








function buttonn() {
      y.value = taxOwed();

      w.value = effectiveTaxRate();

      tuv.value = retainedEarning();


      pob.value =libBib();

}


function clearn() {
    x.value = null;

    document.getElementById("ko").textContent = null;
         
    document.getElementById("ok").textContent = null;

    document.getElementById("yu").textContent= null;

    document.getElementById("error").textContent = null;
}



button.addEventListener("click",buttonn);

clear.addEventListener("click",clearn);

