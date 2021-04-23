
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}/* to debbug we should  click on the element and in the window select "Break on => attribute modification"*/ 

// Regular
console.log('hello')

// Interpolated
console.log(`Hello I'm here `);

// Styled
console.log('i am some great text', 'font-size: 50px;')

// warning!
console.warn('Ohh noo');

// Error :|
console.error('Shiit');

// Info
console.info('Crocodiles eat people')

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('.outch'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p)/*look properties and methods*/

// Grouping together
console.group();
console.groupEnd();
console.groupCollapsed();

// counting
console.count() /*how many times have you run it*/

// timing
console.time('fetching data');
fetch()
console.timeEnd('fetching data');
console.log(data);


// tabel

console.table()
