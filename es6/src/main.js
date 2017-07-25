"use strict"
let test = "Hello";
let name = "Bibek";
let template = `<h1>Hello ${uperCase(name)} </h1>`;
document.getElementById('template').innerHTML = template;
function uperCase(word){
    return word.toUpperCase();
}
class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    register(){
        console.log(this.username + " is now register");
    }
    static countUsers(){
        console.log('There are 50 Users');
    }
}
// let bibek = new User('bibekshakya35',"bibekshakya35@gmail.com","12233");
// bibek.register();
// User.countUsers();
class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.memberPackage = memberPackage;
    }
    getPackage(){
        console.log(this.username +" is subscribed");
    }
}
let m = new Member("Niha","Niha","Niha","Niha");
m.getPackage();
m.register();