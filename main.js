// Author: Kyle Ress-Liere 
// Date: 5/2/21
// Description: Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.

const input = process.argv.slice(2);

const numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function phoneticNum(intList){
for (let i = 0; i < intList.length; i++) {
    output = '';
    for (let j = 0; j < intList[i].length; j++) {
        //gets the digit of each number
        digit = intList[i].charAt(j);
        output += numbers[digit];
       
    }
    console.log(output);
}
}

phoneticNum(input)




