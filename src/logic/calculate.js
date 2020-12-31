import Big from "big.js";
import isNumber from "./isNumber";
import operate from './operate';

export default function calculate(obj,buttonName){
    if(buttonName === "AC"){
        return{
            total: null,
            next:null,
            operation: null
        }
    }

    if(isNumber(buttonName)){
        if(buttonName == 0 && obj.next == 0){
            return {}
        }
        if(obj.operation){
            if(obj.next){
                return {next : obj.next + buttonName}
            }
                return {next: buttonName}
        }

        if(obj.next){
            const next = obj.next === 0 ? buttonName: obj.next + buttonName;
            return {
                next: next,
                total: null
            }
        }
        return{
            total: null,
            next: buttonName,
        }
    }

    if(buttonName === "+/-"){
        if(obj.next){
            return{next: (-1*parseFloat(obj.next)).toString()}
        }
        if(obj.total){
            return{total: (-1*parseFloat(obj.total)).toString()}
        }
        return {}
    }

    if(buttonName === "%"){
        if(obj.operation && obj.next){
            const res = operate(obj.total,obj.next,obj.operation)
            return{
                total: Big(res).div(Big("100")).toString(),
                next:null,
                operation: null
            }
        }
        if(obj.next){
            return{next: (Big(obj.next).div(Big("100"))).toString()}
        }
        return {}
    }

    if(buttonName === "."){
        if(obj.next){
            if(obj.next.includes(".")){
                return {}
            }
            return {next: obj.next + "."}
        }
        if(obj.total){
            if(obj.total.includes(".")){
                return {}
            }
            return {total: obj.total + "."}
        }
        return {next: "0."}
    }

    if(buttonName === "="){
        if(obj.operation && obj.next){
            return{
                total: operate(obj.total,obj.next,obj.operation),
                next: null,
                operation: null
            }
        }
        return {};
    }

    if(obj.operation){
        return{total: operate(obj.total,obj.next,obj.operation),
        next: null,
        operation: null
        }
    }

    if(!obj.next){
        return {operation: buttonName}
    }

    if(obj.next){
        return{
            total: obj.next,
            next: null,
            operation: buttonName
        }
    }
}
