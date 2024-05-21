const fizzbuzzBoom = () => {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 2 === 0) output += 'Boom';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

fizzbuzzBoom();

/* refactor this to be a key value pair object.
That way the developer doesn't have to remember the order of conditionals  */