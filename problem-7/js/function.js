async function fristFuncation() { // create a new function
  return  new Promise ((resolve) => { // return and put the promise  
        setTimeout(() => { // set timeout
            const result = 10;// 
            console.log("Frist function complete successfully:");
            resolve(result);
        }, 1000);
    })
}

async function secondFunction(value) {
    return new Promise ((resolve) => {
      setTimeout(() => {
        const result = value * 2;
        console.log("Second function complete sucessfully");
        resolve(result);
      }, 1000);
    })
};

async function finalResultfuncation() {
    try{
    const resultfromFrist = await fristFuncation();
    const finalResult = await secondFunction(resultfromFrist);
    console.log("Final Result:",finalResult);
} catch(error) {
    console.error("Erorr funcations result:", error.message);
}
}

finalResultfuncation();




















































let tableHeaders = document.getElementById("table-row");
let 