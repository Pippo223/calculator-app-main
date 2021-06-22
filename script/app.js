const input = document.querySelector("input")

const nine = document.getElementById("nine")
const eight = document.getElementById("eight")
const seven = document.getElementById("seven")
const six = document.getElementById("six")
const five = document.getElementById("five")
const four = document.getElementById("four")
const three = document.getElementById("three")
const two = document.getElementById("two")
const one = document.getElementById("one")
const add = document.getElementById("add")
const minus = document.getElementById("minus")
const divide = document.getElementById("divide")
const times = document.getElementById("times")
const equals = document.getElementById("equals")
const del = document.getElementById("del")
const reset = document.getElementById("reset")

//Set trackers for add, subtract, multiply and divide onclicks respectively
let a=0
let s=0
let m=0
let d=0


const calculator = {
    displayValue: null,
    firstNumber:null,
    awaitingNextNumber:false,
    operator: null
}
    
    nine.onclick = ()=> {
        if (input.value == null)
        {
            input.value = nine.value
            //calculator.displayValue = input.value
        }
        else {
            input.value = input.value + nine.value
           // calculator.displayValue = input.value
        }
    }
    
    eight.onclick = ()=> {
        if (input.value == null)
        {
            input.value = eight.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + eight.value
            calculator.displayValue = input.value
        }
    }
    
    seven.onclick = ()=> {
        if (input.value == null)
        {
            input.value = seven.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + seven.value
            calculator.displayValue = input.value
        }
    }
    
    six.onclick = ()=> {
        if (input.value == null)
        {
            input.value = six.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + six.value
            calculator.displayValue = input.value
        }
    }
    
    five.onclick = ()=> {
        if (input.value == null)
        {
            input.value = five.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + five.value
            calculator.displayValue = input.value
        }
    }
    
    four.onclick = ()=> {
        if (input.value == null)
        {
            input.value = four.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + four.value
            calculator.displayValue = input.value
        }
    }
    
    three.onclick = ()=> {
        if (input.value == null)
        {
            input.value = three.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + three.value
            calculator.displayValue = input.value
        }
    }
    
    two.onclick = ()=> {
        if (input.value == null)
        {
            input.value = two.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + two.value
            calculator.displayValue = input.value
        }
    }
    
    one.onclick = ()=> {
        if (input.value == null)
        {
            input.value = one.value
            calculator.displayValue = input.value
        }
        else {
            input.value = input.value + one.value
            calculator.displayValue = input.value
        }
    }
    
    zero.onclick = ()=> {
        if (input.value == null)
        {
            input.value = Number(zero.value)
            calculator.displayValue = Number(input.value)
            
        }
        else {
            input.value = input.value + zero.value
            calculator.displayValue = input.value
        }
    }
    
    dot.onclick = ()=> {
        if (!input.value.includes("."))
        {
            input.value += "."
           calculator.displayValue = input.value   
        }
       

    }

add.onclick = ()=> {
    if (calculator.firstNumber == "")
     {
        calculator.firstNumber = Number(calculator.displayValue)
        input.value = null
        input.placeholder =  calculator.firstNumber
    }
    else if (s==1) {
        calculator.firstNumber = Number(calculator.firstNumber) - Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
    }
    else if (m==1) {
        if(input.value == "")
     {
        calculator.firstNumber = Number(calculator.firstNumber)
        input.placeholder = calculator.firstNumber
    } else {
            calculator.firstNumber = Number(calculator.firstNumber) * Number(input.value)
            input.value = null
            input.placeholder = calculator.firstNumber
        }
    }
    else if (d==1) {
        if(input.value == "")
        {
           calculator.firstNumber = Number(calculator.firstNumber)
           input.placeholder = calculator.firstNumber
       } else {
            calculator.firstNumber = Number(calculator.firstNumber) / Number(input.value)
            input.value = null
            input.placeholder = calculator.firstNumber
        }
    }
    else {
        calculator.firstNumber = Number(calculator.firstNumber) + Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
    }
    a=1;s=0;m=0;d=0
}

minus.onclick = ()=> {
    if (calculator.firstNumber == null)
     {
        calculator.firstNumber = Number(calculator.displayValue)
        input.value = null
        input.placeholder =  calculator.firstNumber
    }
    else if (a==1) {
        calculator.firstNumber = Number(calculator.firstNumber) + Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
    }
    
    else if (d==1) {
        if(input.value == null)
     {
        calculator.firstNumber = Number(calculator.firstNumber)
        input.placeholder = calculator.firstNumber
    } 
    else if (calculator.firstNumber == 0){
        calculator.firstNumber = Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
        console.log(calculator.firstNumber)
    }
    
    else {
        calculator.firstNumber = Number(calculator.firstNumber) / Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
     }
    }
    
    else if (m==1) {
        if(input.value == null )
     {
         calculator.firstNumber = Number(calculator.firstNumber)
         input.placeholder = calculator.firstNumber
     }  else if (calculator.firstNumber == 0){
        calculator.firstNumber = Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
        
    }   else {
            calculator.firstNumber = Number(calculator.firstNumber) * Number(input.value)
            input.value = null
            input.placeholder = calculator.firstNumber
        }
    }
    
    else {
        calculator.firstNumber = Number(calculator.firstNumber) - Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
    }
    a=0;s=1;m=0;d=0
}

times.onclick = ()=> { 

    if (calculator.firstNumber == "")
    {
       calculator.firstNumber = Number(input.value)
       console.log(calculator.firstNumber);
       input.value = null
       input.placeholder =  calculator.firstNumber
   }
   else if (a==1) {
       calculator.firstNumber = Number(calculator.firstNumber) + Number(input.value)
       input.value = null
       input.placeholder = calculator.firstNumber
   }
   else if (s==1) {
       calculator.firstNumber = Number(calculator.firstNumber) - Number(input.value)
       input.value = null
       input.placeholder = calculator.firstNumber
   }
   else if (d==1) {
    if(input.value == "")
    {
     calculator.firstNumber = Number(calculator.firstNumber)
     console.log("first: "+calculator.firstNumber);
     //input.value = null
     input.placeholder = calculator.firstNumber
    } else if (calculator.firstNumber == 0){
        calculator.firstNumber = Number(input.value)
        console.log("2nd: "+calculator.firstNumber);
        input.value = null
        input.placeholder = calculator.firstNumber
    }

    else { console.log("3rd: "+ input.value);
       calculator.firstNumber = Number(calculator.firstNumber) / Number(input.value)
      
       input.value = null
       input.placeholder = calculator.firstNumber
    }
}
   else {
       if(input.value == "")
       {
        calculator.firstNumber = Number(calculator.firstNumber)
        //input.value = null
        input.placeholder = calculator.firstNumber
       } else if (calculator.firstNumber == null){
            calculator.firstNumber = Number(input.value)
            input.value = null
            input.placeholder = calculator.firstNumber
       }

       else {
             calculator.firstNumber = Number(calculator.firstNumber) * Number(input.value)
             input.value = null
             input.placeholder = calculator.firstNumber
    }
   }
   a=0;s=0;m=1;d=0
}
divide.onclick = () => {
    if (calculator.firstNumber == null)
    {
       calculator.firstNumber = Number(input.value)
       input.value = null
       input.placeholder =  calculator.firstNumber
   }
   else if (a==1) {
       calculator.firstNumber = Number(calculator.firstNumber) + Number(input.value)
       input.value = null
       input.placeholder = calculator.firstNumber
   }
   else if (s==1) {
       calculator.firstNumber = Number(calculator.firstNumber) - Number(input.value)
       input.value = null
       input.placeholder = calculator.firstNumber
   }
   else if (m==1) {
    if(input.value == null)
    {
     calculator.firstNumber = Number(calculator.firstNumber)
     //input.value = null
     input.placeholder = calculator.firstNumber
    }
    else{
       calculator.firstNumber = Number(calculator.firstNumber) * Number(input.value)
       input.value = null
       input.placeholder = calculator.firstNumber
    }
   }
   else {
    if(input.value == "")
    {
     calculator.firstNumber = Number(calculator.firstNumber)
     //input.value = null
     input.placeholder = calculator.firstNumber
    }
    else {
          calculator.firstNumber = Number(calculator.firstNumber) / Number(input.value)
          input.value = null
          input.placeholder = calculator.firstNumber
 }
}
   a=0;s=0;m=0;d=1
}

equals.onclick = () => {
     if (a==1) {
        calculator.firstNumber = Number(calculator.firstNumber) + Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
    }
    else if (s==1) {
        calculator.firstNumber = Number(calculator.firstNumber) - Number(input.value)
        input.value = null
        input.placeholder = calculator.firstNumber
    }
    else if (m==1) {
        if(input.value == "")
        {
         calculator.firstNumber = Number(calculator.firstNumber)
         //input.value = null
         input.placeholder = calculator.firstNumber
        }
        else {
            calculator.firstNumber = Number(calculator.firstNumber) * Number(input.value)
            input.value = null
            input.placeholder = calculator.firstNumber
        }
    }
    else if (d==1) {
        if(input.value == "")
        {
         calculator.firstNumber = Number(calculator.firstNumber)
         //input.value = null
         input.placeholder = calculator.firstNumber
        }
        else {
            calculator.firstNumber = Number(calculator.firstNumber) / Number(input.value)
            input.value = null
            input.placeholder = calculator.firstNumber
        }
    }
}

del.onclick = () => {
  
  if(input.placeholder != "")
  {
    input.value = input.placeholder.slice(0,-1)
      calculator.firstNumber = input.value
      input.value = null
      input.placeholder = calculator.firstNumber
      console.log("second: "+input.value+"and"+ calculator.firstNumber);
      console.log("placeh2"+ input.placeholder);
  }
  else {
    input.value = input.value.slice(0,-1)
    calculator.firstNumber = input.value
    input.value = null
    input.placeholder = calculator.firstNumber
    console.log("first: "+input.value);
    console.log("placeh1: "+input.placeholder);
  }
}

reset.onclick = () => {
    document.location.reload()
}