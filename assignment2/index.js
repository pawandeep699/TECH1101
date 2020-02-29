// for input values 
const x = document.querySelector("#yal");

// for displaying tax owed
const y = document.querySelector("#ko");

//for displaying Effective Tax-rate
const w = document.querySelector("#ok");

//for displaing Retained Earnings
const tuv = document.querySelector("#yu");

//For displaying error on non - numbers inputs
const pob =document.querySelector("#error")

//buttons
const button = document.querySelector("#k");
const clear = document.querySelector("#j");

// global variables declaration
let k;
let j;
let b;
let t;                                                                           
let o ;                                   

   // for tax owed
function taxOwed(val){
    val = x.value;
    let biu;
    
    if(val<=48535) {
        k = (val*15)/100;
        bui = k.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;

    }


    else if (val>48535 && val<=97069) {
        k = val - 48535;
        j = (k*20.5)/100;
        b = j + 7280;
        bui = b.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;
    }


    else if (val>97069 && val<=150473) {
        k = val - 97069;
        j = (k*26)/100;
        b = j + 17230;
        bui = b.toFixed(2);
        return document.getElementById("ko").textContent = "$" + bui;
    }

    else if (val >150473 && val<=214368){
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



 // for Effective Tax Rate 

function effectiveTaxRate(val) {

val = x.value;
let bui;
if(val<=48535&&val>0) {
    k = (val*15)/100;
    b = k/val*100;
    bui = b.toFixed(2);
    return document.getElementById("ok").textContent =  bui;

}


else if (val>48535 && val<=97069) {
    k = val - 48535;
    j = (k*20.5)/100;
    b = j + 7280;
    t = b/val*100;
    bui = t.toFixed(2);
    return document.getElementById("ok").textContent = bui;
}


else if (val>97069 && val<=150473) {
    k = val - 97069;
    j = (k*26)/100;
    b = j + 17230;
    t = b/val*100;
    bui = t.toFixed(2);
    return document.getElementById("ok").textContent = bui;
}

else if (val >150473 && val<=214368){
    k = val - 150473;
    j =(k*29)/100;
    b = j + 31115;
    t = b/val*100;
    bui = t.toFixed(2);
    return document.getElementById("ok").textContent = bui;
}

else if (val>214368) {
    k = val - 214368;
    j = (k*33)/100;
    b = j + 49645;
    t = b/val*100;
    bui = t.toFixed(2);
    return  document.getElementById("ok").textContent= bui ;
}

 else if (val == 0) {

    return document.getElementById("ok").textContent= 0;
 }

else {

    return document.getElementById("ok").textContent="";      // returns nothing when non-number value is input.
}



}







// for Retained Earnings 

function retainedEarning(val) {

    val = x.value;
    let hjk ;

    if(val<=48535) {
        k = (val*15)/100;
        j = val - k;
        hjk = j.toFixed(2);
        return  document.getElementById("yu").textContent = "$" +hjk ; 

    }

    
    else if (val>48535 && val<=97069) {
        k = val - 48535;
        j = (k*20.5)/100;
        b = j + 7280;
        t = val - b;
        hjk = t.toFixed(2);
        return document.getElementById("yu").textContent = "$" + hjk;

    }

    else if (val>97069 && val<=150473) {

        k = val - 97069;
        j = (k*26)/100;
        b = j + 17230;
        t = val - b;
        hjk =t.toFixed(2);
        return   document.getElementById("yu").textContent = "$" + hjk;
    }

    else if (val >150473 && val<=214368){
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

   // for displaying error on non-number inputs
function libBib(val) {

    val = x.value;

    if (val>=0 ){

    return document.getElementById("error").textContent="";

    }

    else  {

        return document.getElementById("error").textContent="Error: enter a number ";
    }


    
}






//start function

function buttonn() {
      y.value = taxOwed();                

      w.value = effectiveTaxRate();       

      tuv.value = retainedEarning();     


      pob.value =libBib();                

}

// clear function
function clearn() {
    x.value = null;

    document.getElementById("ko").textContent = null;         
         
    document.getElementById("ok").textContent = null;

    document.getElementById("yu").textContent= null;

    document.getElementId("error").textContent = null;
}


//submit buuton
button.addEventListener("click",buttonn);
//clear button
clear.addEventListener("click",clearn);
