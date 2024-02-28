const response = () => {
    return new Promise((resolve, reject) => {
        let a = 10;
        setTimeout(() => {
            if (a < 11) {
                resolve(a)
            }
            else {
                reject(a)
            }

        }, 3000);
    })
}

const data = () => {

    console.log('this will print after the promise is rejected');
    // return new Promise((resolve,reject)=>{

    //       setTimeout(() => {

    //       }, 3000);
    // })
}

response()
    .then(() => {
        console.log('operation successful');
    })
    // .then(data)
    .catch(() => {
        console.log('operation gone wrong');
        
    })
    data()
