// let str = "nrupul"

// let h2 =""
//     for (let i=str.length-1; i>=0; i--){
//         h2=h2+str[i];
//     }
    
    
//     if (str==h2){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }

let a = 10
let b = 12

let counta = 0
    for (let i = 1; i<=a; i++){
        if (a%i==0){
            counta++
        }
    }
    let countb=0
    for (let j = 1; j<=b; j++){
        if (b%j==0){
            countb++
        }
    }
    if ((counta==2)&&(countb==2)){
        console.log("True")
    }else{
        console.log("False")
    }