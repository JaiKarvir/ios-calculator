import Big from "big.js";

export default function operate(numOne, numTwo, operation){
    const one = Big(numOne || "0");
    const two = Big(numTwo || (operation === "x" || operation === "/" ? "1":"0"));
    if(operation === "+"){
        return one.plus(two).toString();
    }
    if(operation === "-"){
        return one.minus(two).toString();
    }
    if(operation === "x"){
        return one.times(two).toString();
    }
    if(operation === "/"){
        if(numTwo === "0"){
            alert("Divide by 0 error");
            return 0;
        }
        return one.div(two).toString();
    }

    throw new Error("Invalid operation");
} 