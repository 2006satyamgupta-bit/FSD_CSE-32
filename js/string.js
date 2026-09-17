let text = "javascript programming";

    console.log(text.length);
    console.log(text.toUpperCase())
    console.log(text.includes("hello")); // false
    console.log(text.startsWith("a"));  //false
    console.log(text.endsWith("ing"));  //true
    console.log(text.slice(0,10)); 
    console.log(text.replace("javascript", "c++"));  
    console.log(text.substring(0,10));  

    let list = text.split(" ")

    console.log(list)

