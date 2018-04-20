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
    //TODO filter the first 5 elements and return a new array.
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

### Create new file

Create Javascript file under `src/quizes/`, let it be `my-quiz.js` for example.

### Extend base class

In the custom quiz file, you are supposed to implement a class and extends the `BaseClass` from `src/common/base-class.js`.

```js
//my-quiz.js
const BaseClass = require('../common/base-class');

class MyQuiz extends BaseClass {

}

module.exports = MyQuiz;
```

### Customize quiz items and design the rules

You can customize your own quiz items, and design their corresponding rules. The judgement rules are arrays consisting of only 2 elements. The 1st element is the quiz(js method) itself while the 2nd one is the correct answer. And you should return these arrays in a array through the method `getAllItems()`.

To make the purpose of every quiz item clearer, it's highly recommended to illustrate the requirement in comment with `TODO`.

```js
//my-quiz.js
const BaseClass = require('../common/base-class');

class MyQuiz extends BaseClass {

    giveMe5() {
        //TODO just give me 5
    }

    getAllItems() {
        return [
            [this.giveMe5, 5]
        ];
    }

}

module.exports = MyQuiz;
```

### Name the quiz and add to the app

Name the quiz in method `init()`.

```js
//my-quiz.js
const BaseClass = require('../common/base-class');

class MyQuiz extends BaseClass {

    init() {
        this.name = 'MyQuiz';
    }

    giveMe5() {
        //TODO 
    }

    getAllItems() {
        return [
            [this.giveMe5, 5]
        ];
    }

}

module.exports = MyQuiz;
```

Add the quiz the the app.

```js
// src/quizes/index.js
const MyQuiz = require('./my-quiz');

module.exports = [MyQuiz, ];
```

Now you can run `npm start` to see your custom quiz.

## License

```
MIT License

Copyright (c) 2018 Mindjet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```