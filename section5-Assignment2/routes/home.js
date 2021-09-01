const express = require('express');
const path = require('path');
const rootDir = require('../utilities/path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = router;