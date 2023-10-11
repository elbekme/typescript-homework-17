// -------------- 1 - Masala --------------

function getSum(n: number): number{
    let toq = 1;
    let juft = 1;

    for(let i = 1; i <= n; i++) {
        toq *= 2 * i - 1;
        juft *= 2 * i;
    }
    return toq + juft;
}

let n = 3;
let res = getSum(n);
console.log(res);


// ------------- 2- Masala -------------------

let arr1: number[] = [1589, 31851, 512, 180975, 78];

function getDigitsNumber(arr: number[]): number {
    let maxNum = arr[0];
    for (const el of arr) {
        const digit =el;
        if (digit > maxNum) {
            maxNum = digit;
        }
    }

    return maxNum;
}

console.log(getDigitsNumber(arr1));



// ------------- 3 - Masala -------------------

let arr: any[] = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

function getStringArr(arr: any[]): string[] {
    let strArr: string[] = []

  for (const el of arr) {
    if(el === el.toString()){
        strArr.push(el);
    }
  }
  return strArr;
}

console.log(getStringArr(arr));


// ------------- 4 - Masala -------------------


let str1: string = "Hello! How are you? I'm doing great. What's new?";
const punctuationSigns: string[] = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];

function getPunctuationNumber(punctuationMarks: string[], str: string): number {
    // console.log(str);
    // console.log(punctuationMarks);
    let sum = 0;
    
    for(const el of str){
        if(punctuationMarks.includes(el)){
            sum++;
        }
        
    }
    return sum 
}


console.log(getPunctuationNumber(punctuationSigns, str1))


// ------------- 5 - Masala -------------------

let str: string = 'Elbek Juraqulov';

function switchLetter(str: string): string{
    let sum = '';
    for(const el of str){
        // console.log(el);
        if(el.toLowerCase() === el){
            sum+= el.toUpperCase()
        }
        if(el.toUpperCase() === el){
            sum+=el.toLowerCase()
        }
    }
    return sum

}

console.log(switchLetter(str));


// ------------- 6 - Masala -------------------


let obj: object = {a: 1, b: 2, c: 3};

function changeObjToArr(obj: object): any[] {
    let changeArr: any[] = [];

    for (const [key, value] of Object.entries(obj)) {
        changeArr.push(key + value);
    }

    return changeArr;
}

console.log(changeObjToArr(obj));


// ------------- 7 - Masala -------------------
type Students = {
    name: string,
    isGrant: boolean,
}
let students: Students[] = [
	{name: "Jurabek", isGrant: false},
	{name: "Elbek", isGrant: true},
	{name: "Shamshod", isGrant: false},
	{name: "Kamola", isGrant: false},
	{name: "Gulnoza", isGrant: true},
	{name: "Savlatbek", isGrant: false},
]
function seperateStudents(students: Students[]): object {
    let grand:any= [];
    let contract:any = [];
    let all: object = {'grand':grand,'contract':contract};
    
    students.map((k) => {
        if(k.isGrant == true){
            grand.push(k.name)
        }
        if(k.isGrant == false){
            contract.push(k.name)
        }
    })
    all
    return all
}

console.log(seperateStudents(students))



// ------------- 8 - Masala -------------------

interface Book {
    name: string;
    pages: number;
    isReadFinished: boolean;
}

const books: Book[] = [
      { name: "The Great Gatsby", pages: 180, isReadFinished: true },
      { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
      { name: "Atomic Habits", pages: 328, isReadFinished: true },
      { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
      { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
      { name: "The Hobbit", pages: 310, isReadFinished: false },
      { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
      { name: "Harry Potter", pages: 320, isReadFinished: true },
      { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
      { name: "To the Lighthouse", pages: 209, isReadFinished: true }
];

  function getTotalPages(books: Book[]): number {
    let totalPage = 0;
    if (books.length === 0) {
      return 0;
    }
    books.forEach((book: Book) => {
      if (typeof book.pages === 'number') {
        totalPage += book.pages;
      }
    });
    return totalPage;
  }

  console.log(getTotalPages(books));


// ------------- 9 - Masala -------------------

let obj1: object = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj1);
console.log(keys);




