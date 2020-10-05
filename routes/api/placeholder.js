const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({"outputText": "Hi this is Sam O"})
});

module.exports = router;