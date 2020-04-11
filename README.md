# Reseepe

-   Final project of AI class

## Running by terminal

```
python -m http.server
```

## Libraries

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

## Importing database

```js
let fruit = new Array(
    "apple",
    "banana",
    "cherry",
    "grape",
    "kiwi",
    "orange",
    "peach",
    "pear",
    "plum",
    "pineapple",
    "strawberry",
    "broccoli",
    "carrot",
    "cucumber",
    "cabbage",
    "lettuce",
    "tomato",
    "potato"
);
let calo = new Array(
    52,
    87,
    5,
    3,
    2,
    45,
    42,
    96,
    30,
    96,
    38,
    45,
    30,
    14,
    26,
    10,
    25,
    110
);
```

## Searching and counting

```js
let name = new Array(); //Build an array of all detected labels
let num = new Array(); //Add counters for each labels
let q = 0;

for (let i = 0; i < objects.length; i++) {
    //The first one is always special
    if (i == 0) {
        name[q] = objects[i].label;
        num[q] = 1;
    }
    //Comparing the label with previous one
    //A new label
    else if (i > 0 && objects[i].label != objects[i - 1].label) {
        q++;
        name[q] = objects[i].label;
        num[q] = 1;
    }
    //An existing label
    else if (i > 0 && objects[i].label == objects[i - 1].label) {
        num[q]++;
    }
}
```

## Searching heat data from the database

```js
for (h = 0; h <= fruit.length; h++) {
    if (name[i] == fruit[h]) {
        sum = sum + calo[h] * num[i].toFixed(1);//The total heat 
        document.getElementById("heat").innerHTML =
            document.getElementById("heat").innerHTML +
            calo[h].toFixed(1) +
            " × " +
            num[i] +
            " cal<br>";
    }
}
```
