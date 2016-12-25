class Greeter{
greeting:string;
constructor(message:string)
{

this.greeting=message;

}
greet(){

return( "HELLO"+ + this.greeting);

}
}

let greeter= new Greeter( "worlds")
let button =document.createElement('button');
button.textContent="click me";
button.onclick =function(){

alert(
    greeter.greet()
);

}
