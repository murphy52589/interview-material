const fizzbuzzBoom = () => {
    const conditions = {
        2: 'Boom',
        3: 'Fizz',
        5: 'Buzz'
    };

    for (let i = 1; i <= 100; i++) {
        let output = '';
        for (let condition in conditions) {
            if (i % condition === 0) output += conditions[condition];
        }
        console.log(output || i);
    }
}

fizzbuzzBoom();