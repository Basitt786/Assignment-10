
let array = ['Apple','Banana'];


function add(str) {
   array.push(str);
}

function remove() {
   array.pop();
}


function lastChar(str) {
   return str.charAt(str.length - 1);
}


function reverse(str) {
   return str.split('').reverse().join('');
}

console.log(`Array: ${array}`);
console.log(`Last char of 'Apple': ${lastChar('Apple')}`);
console.log(`Last char of 'Banana': ${lastChar('Banana')}`);
console.log(`Reverse of 'Apple': ${reverse('Apple')}`);
console.log(`Reverse of 'Banana': ${reverse('Banana')}`);

