var input = 'turpentine and turtles'
const vowels = ['a','e','i','o','u']


var resultArray = []

for (let i = 0; i < input.length; i++) {
    if(input[i] === 'e'){
        resultArray.push(input[i])
    } else if( input[i] === 'u'){
        resultArray.push(input[i])
    }else{console.log('none')}
    for (let j = 0; j < vowels.length; j++) {
        // console.log(j)
        if(input[i] === vowels[j]){
            // console.log(input[i])
           resultArray.push(input[i])      
        }
    }
}
let resultStrings = resultArray.join('')
resultStrings = resultStrings.toUpperCase()

console.log(resultStrings)
