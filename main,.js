
let items = ['Apple','Banana'];


function add(str) {
   items.push(str);
}

function remove() {
   items.pop();
}


function lastChar(str) {
   return str.charAt(str.length - 1);
}


function reverse(str) {
   return str.split('').reverse().join('');
}

console.log(`items: ${items}`);
console.log(`Last char of 'Apple': ${lastChar('Apple')}`);
console.log(`Last char of 'Banana': ${lastChar('Banana')}`);
console.log(`Reverse of 'Apple': ${reverse('Apple')}`);
console.log(`Reverse of 'Banana': ${reverse('Banana')}`);

