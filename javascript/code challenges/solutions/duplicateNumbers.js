function removeDuplicates(arr) {
    // The Set data type only allows unique values
    const seen = new Set();

    const result = [];

    function isObject(obj) {
        return obj && typeof obj === 'object';
    }

    function addElement(element) {
        if (isObject(element)) {
            const str = JSON.stringify(element);
            if (!seen.has(str)) {
                seen.add(str);
                result.push(element);
            }
        } else {
            if (!seen.has(element)) {
                seen.add(element);
                result.push(element);
            }
        }
    }

    arr.forEach(element => addElement(element));

    return result;
}

const input = [1, 2, 3, 4, [1, 2], [1, 2], {a: 1}, {a: 1}, 2, 3, {b: 2}, [3, 4, 5], [3, 4, 5]];
console.log(removeDuplicates(input));
