let string = "BYE"

//Step1=Split
var stringg = string.split("")
console.log(stringg)

//step2=Ascii Values
let array = []
let add 
for (let i=0; i<string.length;i++) {

     array.push(string.charCodeAt(i))

}

//Step3=Converting into Binary
let binArray = []
console.log(array)

for (let i=0;i<array.length;i++){
binArray.push((array[i].toString(2)))
}
console.log(binArray)

//step4= Making 8 bits
for (let z = 0;z<=binArray.length-1;z++){
        binArray[z]=binArray[z].toString(2).padStart(8,"0")
    }
    console.log(binArray)

    //step 4 = Putting them together
  let joining = (binArray.join(''))
  console.log([joining])

  //step5 = Making 6 bits
  
  let slice1 = joining.slice(0,7)
console.log(slice1)
let slice2 = joining.slice(7,14)
console.log(slice2)
let slice3 = joining.slice(14,21)
console.log(slice3)
let slice4 = joining.slice(21,28)
console.log(slice4)
let slice5 = joining.slice(28,35)
console.log(slice5)
let slice6 = joining.slice(35,42)
console.log(slice6)
let slice7 = joining.slice(42,49)
console.log(slice7)
let slice8 = joining.slice(49,56)
console.log(slice8)
let slice9 = joining.slice(56,63)
console.log(slice9)
let slice10 = joining.slice(63,70)
console.log(slice10)




// for (let j=0;j<binArray.length;j++){
//     if (j.length=2){
//         console.log(`${000000}${binArray}`)
    
//     }
//     else("")
//     }

  
        
    
    



















//      if  (j.length=3){
//         console.log(`${00000}${binArray}`)
//     }
//     if (j.length=4){
//         console.log(`${0000}${binArray}`)
//     }
//     if (j.length=5){
//         console.log(`${000}${binArray}`)
//     }
//    if (j.length=6){
//         console.log(`${00}${binArray}`)
//     }
//      if (j.length=7){
//         console.log(`${0}${binArray}`)
//     }
//     else{
//         console.log("error")

//     }

// }

    
// console.log(("00000000"+binArray.toString(2)).substring(-8))

// console.log(("00000000"+binArray.toString(2).substring(-8)))
// if (binArray.length=4){
//     console.log([binArray.join('-00000')])
// }
// else if (binArray.length=5){
//     console.log([binArray.join(0000)])
// }
//     else if (binArray.length=7){
//         console.log([binArray.join('-0')])
    
// }



// let binary
// for (let j=0;j<array.length;j++){
//   binary = [array(j)]
// }


// console.log(binary())








// for (let i =0; i<string;i++){
//     array.push(string(ascii))
// }
// console.log(array)




// let strascii = Number(ascii)
// console.log(typeof(strascii))



// copyItems = []
// for (let i=0;i<string.length;i++){
//     copyItems.push(string[i])
// }
// console.log(copyItems)





//  for (let j=0;j< ascii.length;j++){
//     let newArray = parseInt(ascii,2)
//     console.log(newArray)
//  }



// const numToSeparate = 12345;

// const arrayOfDigits = Array.from(String(numToSeparate), Number);

// console.log(arrayOfDigits)
// let binary =Array.from(String(ascii),Number)
// console.log(asciiArr)

// const num = 1213
// const numArr=Array.from(String(num),Number)
// console.log(numArr)



// for (let i=0;i<ascii.length;i++){
//     console.log(ascii.toString(2))
// }
// let binary = ascii.toString(2)
// console.log(binary)

// for(let i = 0; i < stringg.length; i++){
//     let code = stringg.charCodeAt(i);
//     charCodeArr.push(code);
// }
// let str = "nam"
// console.log(str.charCodeAt(0))