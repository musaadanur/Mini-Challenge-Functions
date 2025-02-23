console.log("hayy");

// fonksiyonlar /* */ 
function getBread(){
    return console.log("ekmek alındı");
};
getBread();

// function declaration, expression, arrow function(hoist edilmez)
// parameter, argument(deger)

() => {}; // arrow func
const fn1 = () => {};
fn1();

// pure function side effect uretmeyen fonksiyona denir

const arr1=[1,2,3];
const result= arr1.find((i) => i===2);//predicate func

function variadic(...args){ // variadic func

}

