const express = require('express');
const app = express();
const PORT = 3000;

// Helper function to validate numbers
const validateNumbers = (num1, num2 = null) => {
    if (isNaN(num1) || (num2 !== null && isNaN(num2))) {
        return { error: "Invalid input. Please provide valid numbers." };
    }
    return null;
};

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateNumbers(num1, num2);
    if (validationError) return res.status(400).json(validationError);
    res.json({ result: Number(num1) + Number(num2) });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateNumbers(num1, num2);
    if (validationError) return res.status(400).json(validationError);
    res.json({ result: Number(num1) - Number(num2) });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateNumbers(num1, num2);
    if (validationError) return res.status(400).json(validationError);
    res.json({ result: Number(num1) * Number(num2) });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateNumbers(num1, num2);
    if (validationError) return res.status(400).json(validationError);
    if (Number(num2) === 0) return res.status(400).json({ error: "Division by zero is not allowed." });
    res.json({ result: Number(num1) / Number(num2) });
});

// Exponentiation
app.get('/power', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateNumbers(num1, num2);
    if (validationError) return res.status(400).json(validationError);
    res.json({ result: Math.pow(Number(num1), Number(num2)) });
});

// Square Root
app.get('/sqrt', (req, res) => {
    const { num1 } = req.query;
    const validationError = validateNumbers(num1);
    if (validationError) return res.status(400).json(validationError);
    if (Number(num1) < 0) return res.status(400).json({ error: "Square root of negative number is not allowed." });
    res.json({ result: Math.sqrt(Number(num1)) });
});

// Modulo
app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateNumbers(num1, num2);
    if (validationError) return res.status(400).json(validationError);
    res.json({ result: Number(num1) % Number(num2) });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
