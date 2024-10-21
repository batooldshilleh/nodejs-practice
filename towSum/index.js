const express = require('express')
const app = express()

app.get('/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)

    res.send(`sum = ${num1 + num2}`)
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
