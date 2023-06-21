const array = [1, 2, 3, 5, 4, 2, 6, 4];

const nonDup = [];
array.forEach(Element => {
    if (nonDup.indexOf(Element) == -1){ 
        nonDup.push(Element);
    }     
});

// const duplicates = array.filter((element, index) => array.indexOf(element) == index); 

console.log(nonDup)