/*
            PRIMITIVE --7 TYPES
            String
            number
            boolean
            null
            undefined
            Symbol
            BigInt
*/


/*

        Non primitive

        Array
        Object
        functions
      
  */

        const id=Symbol('123')
        const anotherId=Symbol('123')
        console.log(id===anotherId); //false


        const heros=["shaktiman","naagraj","doga"];


        let myObj=
        {
             name:"Ritesh",
             age:22
        }

        const myFunction=function()
        {
            console.log("Hello");
            
        }

        

    //--------------------------------------Mmemory-------------------------------------------------
    //Stack (primitive) heap (non-primitive)

    let myOriginalName="Ritesh Singh"
    let anotherName=myOriginalName
    anotherName="Rishu Singh"
    console.log(myOriginalName);
    console.log(anotherName);

    let userOne=
    {
        name:"Ritesh",
        upi:"916167@ybl"
    }
    let userTwo=userOne

    userTwo.upi="8795@ybl"
    console.log(userOne.upi);
    console.log(userTwo.upi);
    
    
    
    


        