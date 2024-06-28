import express from "express";
import { JSONFilePreset } from 'lowdb/node'
const app = express();
const port = 3000;

const defaultData = { count: 0 }
const db = await JSONFilePreset('db.json', defaultData)

// Middleware to parse JSON bodies
app.use(express.json());

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
        await db.read()
        let count = await db.data.count
        const traits = getPersonalityTraits();
        res.json({
            name: name,
            traits: traits,
            count: count
        });
        db.data.count = count + 1
        await db.write()
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
