// watch harrys notes
console.log("This is video 37")

// var a = 4;
// var b = 5;
// var c = "Shubman";
// show 17 in console after inspect
// console.log(a + b + 8);

// print number number string because c is string it give s type by type of 
// console.log(typeof a, typeof b, typeof c);
// here in 6 ,"5" will not add because a1 in const so it will not add 5..
// because a because constant value i can't chnage its value
// we need it because sometimes we want ki hmara varible glti se bhi chnage na ho hmari vjh se
// so it throw error in console
// const a1=6;
// a1=a1+5;
// but if it is like it becuase it is va variable
// var a =6;
// a=a+5;

// so kbhi bhi javascipt use kre i will use let only not var..start fro here because let global variable bn jata h
let a = 4;
let b = 5;
let c = "Shubman";
// show 17 in console after inspect
// console.log(a + b + 8);
// console.log(typeof a, typeof b, typeof c);
// 9 will come
// a=a+5;
// print 4 because let a=4 in upar line i have declared it globally.
{

    console.log(a)
}
// but if i write in..like this
{
    // it will print 77 not 4 because i delared it inside brakct which take more priority than declared  globally because it overshadow a=4;
    let a=77;
    console.log(a);
}
// it willl agin print 4. bc its out of bracket
console.log(a);


// but if i write var insted of let like
// it will print 78 fro both bhar jo h globallly 77 and for andr also
var s= 77;
{
    var s=78;
    console.log(s);
}
let x="Tanya Sharma"
let y=22;
let z=3.555;
// ye const bna diya so i cant change it
const p=true;
let q=undefined
let r=null;
console.log(x,y,z,p,q,r);
// here r typeof is object means null typeof is object it is interview que like why null is object in javascipt
// In JavaScript, typeof null returns "object" because of a historical bug in JavaScript.
// Originally, null was represented in a way that made it look like an object to the typeof operator.
// console.log(typeof null); // "object"
// But remember: null is not actually an object. It means an intentional absence of a value.
console.log(typeof x, typeof y,typeof z,typeof p,typeof q,typeof r);

// object in javascript
let o = {
    // here its my choice i can write name in double quote or not because isme koi space nhi h
    // its key because object has 2 things key,value in pair
    "name" : "Shubman",
    // here i have to write job code in "" double quotes bacause job code this word has space so when there is space it wmust written in double quotes
    // its value....
    "job code" : 5600,
    "is_handsome" : true

}
console.log(o);
// if i want to add something i it i can write
o.salary = "10000"
console.log(o);
o.salary = "100crore"
console.log(o);
