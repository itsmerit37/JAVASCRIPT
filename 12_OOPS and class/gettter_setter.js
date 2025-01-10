class User{
    constructor(email,password)
    {
        this.email = email;
        this.password = password; 
    }

    // getter
    get password()
    {
        return this._password.toUpperCase();
    }

    // setter
    set password(newPassword)
    {
        this._password = newPassword;
    }
}
const Ritesh=new User("hitesh@gmail.com","12345");
console.log(Ritesh);
