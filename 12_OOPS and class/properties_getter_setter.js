class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

    Object.defineProperty(this, 'email', {
       get: function() {
           return this._email;
       },
         set: function(newEmail) {
              this._email = newEmail;
         },
    });
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(newPassword) {
            this._password = newPassword;
        },
     });
     const user=new User("ritesh@123","12345");
     console.log(user.email);
     
  
