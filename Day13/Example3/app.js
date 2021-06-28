let freq = (str) => {
    let words = str.split(" ");
    let map = new Map();
    words.forEach(word => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        }
        else {
            map.set(word, 1);
        }
    });
    return map;
};
console.log(freq("abc abc ab ab abcd ab abc"));
