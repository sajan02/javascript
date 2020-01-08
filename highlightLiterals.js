function highlight(strings, ...values) {
    let result = '';
    console.log(strings, values);
    strings.forEach((str,index) => {
        result += str;
        if (values[index]) {
            result += `<mark>${values[index]}</mark>`;
        }
    });
    return result;
}

const author = 'Sajan Kashi';
const statement = 'I am a man of fortune & I must seek my fortune';
const quote = highlight`${author} once said, ${statement}`;
console.log(quote);
