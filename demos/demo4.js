//PARSE JSON STRING MANUALLY
let text = `{
    "from": "kevin",
    "to"  : "class",
    "body": "Good afternoon class!!!"
}`;

function removeEnds(text){
    return text.slice(1,-1);
}

console.log(removeEnds("[inside, has, stuff]"))

function parseObject(text){
    let object = {};
    let lines = text.split(",") //cut at comma to create array  list
    lines.forEach(line => {
        let parts = line.split(":")
        let key = removeEnds(parts[0].trim());
        let value = removeEnds(parts[1].trim());
        object[key] = value;       
    });
    return object;
}

function parseJSON(text){
    //DEFENSIVE PROGRAMMING
    if(text.length < 1){
        return "";
    }

    let first = text[0];
    
    if("{"===first){
        return parseObject(removeEnds(text)) //throw away curly braces
    }else if("[" === first){
        // return parseArray(text)
    }
}

results = parseJSON(text);
console.log(results);