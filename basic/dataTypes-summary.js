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
        
        