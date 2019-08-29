let s1 = `catsanddog`
let words1= ["cat", "cats", "and", "sand", "dog"]
let valid_words = []

const removeItemFromArray = (array, word) => {
    let index = array.indexOf(word);
    if (index > -1) {
        array.splice(index, 1);
    }
}

const create_valid_word = (s, words) => {
    let valid_sentence = '';
    let prev_word = null;
    words.forEach(word => {
        if(s.includes(word)) {
            prev_rang = s.indexOf(prev_word);
            if (prev_rang == s.indexOf(word)) {
                removeItemFromArray(words, prev_word);
                create_valid_word(s, words);
            }
            if (prev_rang < s.indexOf(word)) {
                valid_sentence += `${word} `;
                prev_word = word
            }
        }
    });
    valid_words.push(valid_sentence);
};

create_valid_word(s1, words1)
console.log(valid_words);
