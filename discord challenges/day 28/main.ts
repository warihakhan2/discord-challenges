//q82
function stringLength(str: string){
    return str.length;
}

console.log(stringLength("Alice"));
//q83
function convertCase(str: string){
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();

    console.log("UpperCase:", upperCase, "LowerCase:", lowerCase);
}

convertCase("Hello world");
//q84
function replaceJavaScriptWithTypeScript(sentence:string){
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(
    replaceJavaScriptWithTypeScript(`I love JavaScript and JavaScript is awesome`));