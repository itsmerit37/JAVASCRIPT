class User
    {
        constructor(username)
        {
            this.username = username;
        }
        logMe()
        {
            console.log(this.username);
        }
        createId()
        {
            return `${this.username}123`;
        }
    }
    const Ritesh=new User("Ritesh");
   console.log(Ritesh.createId());
