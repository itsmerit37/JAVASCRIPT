const coading=["js","reacty","ruby","angular","java"]

//for each does not return 
const value= coading.forEach((item)=>
{
   // console.log(item);
    return item
    
})
//console.log(value);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=>num>4)
// console.log(newNums);

const newNums=[]
myNums.forEach((num)=>
{
    if(num>4)
    {
        newNums.push(num)
        
    }
})
// console.log(newNums);

let books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        year: 1851
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        year: 1869
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        year: 1922
    }
];

const booksdetails= books.filter((bk)=>
{
   return  bk.year>1900 && bk.author.startsWith("J");
})
console.log(booksdetails);


//
const coadings=["js","reacty","ruby","angular","java"]
const neeCoadungCourse= coading.map((value)=> value +"s")
console.log(neeCoadungCourse);






