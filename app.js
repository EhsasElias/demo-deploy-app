const app = require('express')();

const PORT = process.env.PORT || 3000;
app.get("",(req,res) => {
    res.send("<h1>I am Sense</h1>");
});

app.listen(PORT, ()=> {
    console.log(PORT);
})