// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;// Calculator route
app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', { result: 'Invalid numbers.', num1, operator, num2 });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n2 === 0 ? 'Cannot divide by zero.' : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', { result, num1, operator, num2 });
});

export default app;
