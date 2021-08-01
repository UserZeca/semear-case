//+-------------------------------------------------------------------------------------------------------------------+

/** @author: Ezequias Kluyvert de Oliveira Lemos
 *  @description:Javascript script related to the index.html page of this same project.   
 **/
//+-------------------------------------------------------------------------------------------------------------------+

/** 
 * @formsValidation 
 * @param id Submit button ID 
 * @param state New button state 
 * @description: Function that activates the send button.
*/
function formsValidation(id,state){
    document.getElementById(id).disabled = !state;
}
//+-------------------------------------------------------------------------------------------------------------------+
/** 
 * @caractersValidation 
 * @param event Information about events related to the keyboard 
 * @description: Function that activates the send buttonFunction that validates only letters for this field.
*/
function caractersValidation(event){
    return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)
            || event.charCode == 32;
}
//+-------------------------------------------------------------------------------------------------------------------+
/**
 * @incorrectEmailAlert 
 * @param obj Object related to the id email
 * @description: Sends an invalid email message
 */
function incorrectEmailAlert(obj){

    console.log(obj.valid);
    if(obj.valid){
     
        document.getElementById("invalidEmail").innerHTML="";
    }else{
     
        document.getElementById("invalidEmail").style.color="red";
        document.getElementById("invalidEmail").style.float="right";
        document.getElementById("invalidEmail").style.fontSize="0.75rem";
        document.getElementById("invalidEmail").innerHTML="<b>E-mail inválido</b>";
    }
}




function incorrectCPFAlert(obj){


    if(obj.value.length == 11){ 
        document.getElementById("invalidCPF").innerHTML="";
    }else{
     
        document.getElementById("invalidCPF").style.color="red";
        document.getElementById("invalidCPF").style.float="right";
        document.getElementById("invalidCPF").style.fontSize="0.75rem";
        document.getElementById("invalidCPF").innerHTML="<b>CPF inválido</b>";
    }
}





function validation(){

    let obj = document.getElementById('email');
    let user = obj.value.substring(0, obj.value.indexOf("@"));
    let domain = obj.value.substring(obj.value.indexOf("@") + 1, obj.value.length);
    let telephone = document.getElementById('telephone');
    let cpf = document.getElementById('cpf');



    let emailValid = false;
    
    // --------------------------------------

    if (
        (user.length >=1) &&
        (domain.length >=3) && 
        (user.search("@")==-1) && 
        (domain.search("@")==-1) &&
        (user.search(" ")==-1) && 
        (domain.search(" ")==-1) &&
        (domain.search(".")!=-1) &&      
        (domain.indexOf(".") >=1)&& 
        (domain.lastIndexOf(".") < domain.length - 1) 
       
    ) {
        obj.valid = true;
        emailValid= true;

    }else{
        obj.valid = false;
        emailValid = false;
    }
   
    // --------------------------------------

    if(telephone.value.length >= 10 ){
        telephone.valid = true;
    }else{

        telephone.valid = false;

    }

    // -----------------------------------------

    if(cpf.value.length == 11){
        console.log('a');
        cpf.valid = true;
        
    }else{
        console.log('b');
        cpf.valid = false;
      
    }

    


    let length_name = document.getElementById('name').value.length;
    let length_prof = document.getElementById('prof').value.length;
    let length_renda =  document.getElementById('renda').value;
    

    console.log(length_name);
    console.log(length_prof);
    console.log(length_renda);
    console.log(cpf.valid); 
    console.log(telephone.valid);
    console.log(emailValid);
    
    
    if(
        length_name > 0 &&
        length_prof > 0 &&
  
        length_renda != "NaN" &&
        cpf.valid == true && 
        emailValid == true && 
        telephone.valid == true
    ){
        
        formsValidation('submit',true);


    }else{

        formsValidation('submit',false);

    }
    

}


//+-------------------------------------------------------------------------------------------------------------------+
/**
 * @emailValidation
 * @param infomation Information related to ID, email. 
 */




function emailValidation(infomation){

    let obj = infomation;
    let user = obj.value.substring(0, obj.value.indexOf("@"));
    let domain = obj.value.substring(obj.value.indexOf("@") + 1, obj.value.length);
    
  

    if (
        (user.length >=1) &&
        (domain.length >=3) && 
        (user.search("@")==-1) && 
        (domain.search("@")==-1) &&
        (user.search(" ")==-1) && 
        (domain.search(" ")==-1) &&
        (domain.search(".")!=-1) &&      
        (domain.indexOf(".") >=1)&& 
        (domain.lastIndexOf(".") < domain.length - 1) 
       
    ) {
        obj.valid = true;


    }else{
        obj.valid = false;
    }


    return obj.valid;

}
//+-------------------------------------------------------------------------------------------------------------------+
/**
 * @telephoneFildValidation
 * @param event Event related to ID, telephone.
 * @description: Returns true, if the character is numeric. Otherwise, it returns false.
 */
function telephoneFildValidation(event){

    let telephone = document.getElementById('telephone').value;

    if(telephone.length >= 10) {

        telephone.valid = true;

    }else{

        telephone.valid = false;
        
    }

    return event.charCode >= 48 && event.charCode <= 57;
}
//+-------------------------------------------------------------------------------------------------------------------+
/** -+ Functions related to telephone masks +-
 *  @description: Basically what this set of functions does is to take the string 
 *                from the input, and change it in real "time" (setTimeout).
 * 
 */

 // Function that updates the input from time to time.
 function update(_obj,_func){
   
    obj = _obj;
    func = _func;

    setTimeout("telephoneMask()",1);
}

// Function that defines the new value for the input, that is, changed, depending on its state.
function telephoneMask(){
    obj.value=func(obj.value)
}

// Function that changes the strings that make up the input.
function changeInput(input){
    input=input.replace(/\D/g,"");                  // Removes all non-numbers
    input=input.replace(/^(\d{2})(\d)/g,"($1) $2"); // Insert parentheses around the first two digits
    input=input.replace(/(\d)(\d{4})$/,"$1-$2");    // Insert a hyphen between the fourth and fifth digits
    return input;
}
//+-------------------------------------------------------------------------------------------------------------------+

function loadingNewProperty(id){
    document.getElementById(id).valid = false;
}

// Event that "observes" everything, triggering as soon as another event occurs.
window.onload = function(){
    




    loadingNewProperty('email');

    

    document.getElementById('name').onkeypress = function(event){
        return caractersValidation(event);
    }
    
    document.getElementById('email').onkeyup = function(){    

        validation()
    }
    
    document.getElementById('email').onblur = function(){
        incorrectEmailAlert(this);
    }
    

    document.getElementById('cpf').onblur = function(){
        
        incorrectCPFAlert(this);

    }


    document.getElementById('telephone').onkeyup = function(){     
        update( this, changeInput );
    }

    document.getElementById('telephone').onkeypress = function(event){ 
        return telephoneFildValidation(event);
    }

    document.getElementById('name').onkeyup = function(){    
        validation();
    }
    
    document.getElementById('cpf').onkeyup = function(){    
        validation();
    } 
    
    
    document.getElementById('prof').onkeyup = function(){    
        validation();
    }
    

    document.getElementById('renda').onchange = function(){    
        validation();
    }


    


}
//+-------------------------------------------------------------------------------------------------------------------+