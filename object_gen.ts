 interface info  {
     name : String,
     age : Number,
     uid?: Number
 };

const person = <T extends object>(obj : T) : T => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}


console.log(person<info>({name: 'Vinay', age: 24}));