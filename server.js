import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.render('index', {
        result: null,
        num1: '',
        operator: '',
        num2: ''
    });
});

app.post('/calculate', (req, res) => {
    const { num1, operator, num2 } = req.body;

    let result;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.render('index', {
            result: 'Invalid numbers.',
            num1,
            operator,
            num2
        });
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
            result = n2 === 0
                ? 'Cannot divide by zero.'
                : n1 / n2;
            break;
        default:
            result = 'Invalid operator.';
    }

    res.render('index', {
        result,
        num1,
        operator,
        num2
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Web Calculator is running on port ${PORT}`);
});

export default app;
