let str = "nrupul"

let h2 =""
    for (let i=str.length-1; i>=0; i--){
        h2=h2+str[i];
    }
    
    
    if (str==h2){
        console.log("Yes")
    }else{
        console.log("No")
    }