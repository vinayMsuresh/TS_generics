interface Resource<T> {
    uid : number,
    resource : string,
    data : T
}

const obj1 : Resource<string> = {
    uid : 12,
    resource : 'Category',
    data : 'Wood'
}

const obj2 : Resource<Array<string>> = {
    uid: 13,
    resource : 'Lectures',
    data : ['Shankar', 'Suma', 'Ashwini', 'Aradhana']
}

console.log(obj1);

console.log(obj2);