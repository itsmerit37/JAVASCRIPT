function setUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
    
}
function createUsername(username,email,password){
    // line 9 is there then this will point to global object as empty object after adding ur own this then it will point fn setusername and return value
    //setUsername.call(username);
    setUsername.call(this,username);
    
    this.email=email;
    this.password=password;
}

const chai=new createUsername("Chai","chai@fb.com","123456");
console.log(chai);