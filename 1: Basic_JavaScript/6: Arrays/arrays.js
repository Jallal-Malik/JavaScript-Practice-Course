let arr1 = [1, 2433, 42 ,23, 2]

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element)
}

arr1.forEach((value, index, arr) => {
    console.log(value, index, arr)
});

let obj = {
    name: "Jallal",
    id: 180,
    email: "jallalmalik58@gmail.com"
}

for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
        
    }
}

for (const iterator of arr1) {
    console.log(iterator)
}