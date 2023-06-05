
let text = `{
    "from": "kevin",
    "to"  : "class",
    "body": "Good afternoon class!!!"
}`;

console.log(text.length);
console.log(text);

let data = JSON.parse(text)

console.log(data.to)
console.log(data.from)
console.log(data.body)

data.to = "Everyone!!!"

let output = JSON.stringify(data, 0, 8)//human readable 4 spaces indented
console.log(output.length)
console.log(output)
