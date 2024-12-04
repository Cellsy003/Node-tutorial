// const amout = 9

// if(amout < 10){
//     console.log('small number');
    
// } else {
//     console.log('large number');
    
// }

// console.log(`hey it's my first node app`);


// setInterval(() => {
//     console.log('samuel');
    
// }, 10000 );

// console.log(__filename);

// const name = require('./names');
// const sayHi = require('./function');
// const data = require('./alternative')
// console.log(data);



// console.log(sayHi);






// sayHi('susan')
// sayHi(name.john)
// sayHi(name.peter)



const {readFile, writeFile} = require('fs');


readFile('./content/first.txt','utf8',(err, result) =>{
    if(err) {
        console.log(err)
        return;
        
    }
    console.log(result);
    
})