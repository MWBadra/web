let operation = "*"
const numbers = []
let currentNumber =''
const operations = []
const displaytext = (click)=>{
    let value = document.getElementById("displaytext")
    currentNumber+=click
    document.getElementById("displaytext").textContent += click
}
const operationsfunc = (operation)=>{
    let value = document.getElementById("displaytext")
    numbers.push(currentNumber)
    currentNumber = ''
    operations.push(operation)
    document.getElementById("displaytext").textContent += operation
}
const AC = ()=>{
    document.getElementById("displaytext").textContent = ''
   numbers.length = 0;
    operations.length = 0;
    currentNumber = '';
}
const compute = ()=>{
    numbers.push(currentNumber)
    let result = parseInt(numbers[0])
    let index = 1
   operations.forEach(i => {
     if(i === '+'){
            result += parseInt(numbers[index++])
        }
        else if(i ==='*'){
            result *= parseInt(numbers[index++])
            
        }
        else if(i ==='-'){
            result -= parseInt(numbers[index++])
            
        }
        else if(i === '/'){
            result /= parseInt(numbers[index++])
            
        }
        else if(i === '%'){
            result %= parseInt(numbers[index++])
            
        }
        else{
            result = "magdi"
        }
   })
     
    console.log(result)
    console.log(numbers)
    console.log(operations)
    document.getElementById("displaytext").textContent  = result
    

}