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