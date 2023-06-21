const array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
// const count = {};
// array.forEach(Element => count1[Element] = (count1[Element] || 0) +1);
// console.log(count);

let count = {};
let maxValue = 0;
let maxCount = 0;

array.forEach(Element => {
    count[Element] = (count[Element] || 0) +1;
    console.log(count);
    if (count[Element] > maxCount) {
        maxValue = Element;
        maxCount = count[Element];
    }
});

console.log(`Value : ${maxValue}, Count : ${maxCount}`)