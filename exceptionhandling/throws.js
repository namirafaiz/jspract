//throw exception
let num = 18;
try{
    // if (num=num) throw"same"
    if (num<15) throw"smaleer than 10"
    if (num>11) throw new Error("Greater")

}catch (error){
console.log(error)
}