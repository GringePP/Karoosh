# Karoosh
![karoosh](./art/karoosh.png)

Karoosh is a fighter in Wenja tribe. I am just kidding, Karoosh is a local judgement system for some Javascript quizes like array methods, design pattern, etc.

## Install dependencies

```bash
git clone https://github.com/GringePP/Karoosh.git
cd Karoosh
npm i
```

## Start from the ground

Let's solve the quizes that have already existed.

For example, in `src/quizes/array-methods.js`, there are several quizes there, pick the one named `filter5fromLeft`. It means that we are supposed to return a new array with the first 5 elements from the origin array by using `filter` method. We can also get the full requirement from the `TODO` comment.

```js
filter5fromLeft() {
    const arr = [0, 1, 3, 6, 8, 9, 20, 1];
    //TODO 筛选出前5个元素，并返回新数组
    return arr.filter((v, i) => i < 5);
}
```

Then, run `npm start` to check the result. 

```
===== YOUR QUIZ RESULT =====


----ArrayMethods----
filter5fromLeft :  √
reduceToSum :  ×       The type of your answer is NOT the same as the correct one.


============================
```
Just forget about the result of `reduceToSum` as we haven't implemented it.

## Extend to the sky

You are welcome to customize your own quizes and judgement rules too! :)


