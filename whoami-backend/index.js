var express = require('express')
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())


// Function to generate personality traits with weights
const getPersonalityTraits = () => {
    // Default weights if not provided

    // Generate traits with weighted values
    return {
        confidence: Math.floor(Math.random() * 100),
        smile: Math.floor(Math.random() * 100),
        cuteness: Math.floor(Math.random() * 100),
        love: Math.floor(Math.random() * 100),
        kindness: Math.floor(Math.random() * 100),
        anger: Math.floor(Math.random() * 100)
    };
};

// Route to handle personality request
app.get('/traits/:name', async (req, res) => {
    try {
        const name = req.params.name;
        // Example weights - adjust these as needed
        const traits = getPersonalityTraits();
        res.json({
            name: name,
            traits: traits,
        });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.get("/", (req, res) => {
    res.send("Nothing.")
})

// Start server
app.listen(port, () => {
    console.log(` API listening at ${port}.`);
});
