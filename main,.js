
let items = ['Apple', 'banana']

function add(str) {

   if (!items.includes(str)) {
      items.push(str);
   }
}
add()

function remove(str) {
   let array = items.indexOf(str);
   if (array !== -1) {
      items.splice(array, 1);
   }
}
remove();

function lastChar(str) {
   if (str.length === 0) {
      return null;
   }
   return str[str.length - 1];
}

function reverse(str) {
   return str.split('').reverse().join('');
}

console.log(`items: ${items}`);
console.log(`Last char of 'Apple': ${lastChar('Apple')}`);
console.log(`Last char of 'Banana': ${lastChar('Banana')}`);
console.log(`Reverse of 'Apple': ${reverse('Apple')}`);
console.log(`Reverse of 'Banana': ${reverse('Banana')}`);

