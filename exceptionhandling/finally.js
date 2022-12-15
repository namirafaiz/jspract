

let a =1;
let b = 2
try{
console.log(a+b)
console.log(c)
}catch (error){
console.log("Error message: ", error)
}
finally{
    console.log("I'll execute either way")
    console.log(b-a)
}
