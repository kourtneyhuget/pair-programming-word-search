const wordSearch = (letters, word) => {
    if (word.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } else {
            var newArr = [];
            for (let i = 0; i < letters[0].length; i++) {
                newArr.push([]);
            }
            for (let l = 0; l < letters.length; l++) {
                for (let v = 0; v < letters[l].length; v++) {
                    newArr[v].push(letters[l][v]);
                }
            }
        };
    };
    let wordsArray = [];
    for (array in newArr) {
        wordsArray.push(newArr[array].join(""));
        let lastIndex = wordsArray.length - 1;
        if (wordsArray[lastIndex].includes(word)) {
            return true;
        }
    } return false;
};

module.exports = wordSearch;
