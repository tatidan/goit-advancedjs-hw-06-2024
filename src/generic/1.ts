/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// let arr: any[] = [];
// let arr: Array<string | number> = [];

function getPromise() {
  const promise: Promise<any[]> = new Promise((resolve) => {
    resolve(["Text", 50]);
  });
  return promise;
}

getPromise().then((data) => {
  console.log(data);
});

export {};
