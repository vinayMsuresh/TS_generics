var makeArray = <X , Y>(x: X, y: Y):[X , Y] =>{
    return [x, y];
}

console.log(makeArray<String, String>('a', '4'));