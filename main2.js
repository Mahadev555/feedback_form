const fs = require("fs")
let text = fs.readFileSync("dldl.txt",'utf-8')

console.log(text)

text = text.replace("Keep","atharv");
console.log(text)

console.log("New file............")
fs.writeFileSync("atharv.txt",text)
let text2 = fs.readFileSync("atharv.txt",'utf-8')
console.log(text2)