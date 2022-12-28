/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const crypto = require('crypto');

const start = Date.now();


crypto.pbkdf2('qwerty', '5', 1000000, 64, 'sha512', () => {
    console.log('1 закончил за', Date.now() - start );
});
crypto.pbkdf2('qwerty', '5', 1000000, 64, 'sha512', () => {
    console.log('2 закончил за', Date.now() - start );
});
crypto.pbkdf2('qwerty', '5', 1000000, 64, 'sha512', () => {
    console.log('3 закончил за', Date.now() - start );
});
crypto.pbkdf2('qwerty', '5', 1000000, 64, 'sha512', () => {
    console.log('4 закончил за', Date.now() - start );
});
crypto.pbkdf2('qwerty', '5', 1000000, 64, 'sha512', () => {
    console.log('5 закончил за', Date.now() - start );
});
    
    
    

