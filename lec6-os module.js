// let num1=90
// let num2=34
// function addNum(){
//     console.log(`the addititon of this two num is ${num1+num2}`);
// }
// addNum()

const os=require('os')

//Info about the current user
// console.log(os.userInfo())

//method return system uptime in seconds
// console.log(os.uptime());

const currentOs={
    name:os.type(),
    rel:os.release(),
    totalm:os.totalmem(),
    frm:os.freemem()

}
console.log(currentOs);