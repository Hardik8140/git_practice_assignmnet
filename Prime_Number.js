let a = 11
let b = 13

let counta = 0
    for (let i = 1; i<=a; i++){
        if (a%i!=0){
            counta++
        }
    }
    let countb=0
    for (let i = 1; i<=b; i++){
        if (b%i!=0){
            countb++
        }
    }
    if ((counta==0)&&(countb==0)){
        console.log("True")
    }else{
        console.log("False")
    }