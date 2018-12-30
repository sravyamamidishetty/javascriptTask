let rfirstname=/[a-zA-z][^0-9]/;
let rlastname=/[a-zA-z]/;
let remail=/^[a-z0-9][^A-Z]{5,10}/;
let rmobile=/^[8|9|7|6][0-9]{9}/;
let rpassword=/[a-zA-z0-9]/;

function registerLogin(){
  
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let remail=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("confirmpassword").value;

    if(fname==""){
        document.getElementById("validfirstname").innerHTML="please fill the first name";
        return false;
    }

    if(lname==""){
        document.getElementById("validlastname").innerHTML="please fill the last name";
        return false;
    }
    
    if(remail==""|!remail.test(email)){
        document.getElementById("validemail").innerHTML="EX: 'abc@gmail.com' ";
        return false;
    }
 
    if(mobile==""|!rmobile.test(mobile)){
        document.getElementById("validmobile").innerHTML="Mobile number must start with 7 or 6 or 8 or 9";
        return false;
    }

    if(password==""|!rpassword.test(password)){
        document.getElementById("validpassword").innerHTML="Password must be alphanumeric";
        return false;
    }

    if(confirmpassword==""|confirmpassword!=password){
        document.getElementById("validpassword").innerHTML="Password and confirm password must be same";
        return false;
    }

    var person=new Person();
    person.firstname=firstname;
    person.middlename=middlename;
    person.lastname=lastname;
    person.email=email;
    person.mobile=mobile;
    person.password=password;
    person.confirmpassword=confirmpassword;
 
    console.log(person);

}    

function loginValidate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email==""|email!="user@gmail.com"){
        document.getElementById("loginemail").innerHTML="Incorrect Email";
        return false;
    }

    if(password==""|password!="123456"){
        document.getElementById("loginpassword").innerHTML="Incorrect Password";
        return false;
    }
}

class Person{

    constructor(){
        this.firstname="";
        this.middlename="";
        this.lastname="";
        this.email="";
        this.mobile="";
        this.password="";
        this.confirmpassword="";
    }
    
}
