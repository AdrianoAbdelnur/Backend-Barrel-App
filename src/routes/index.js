const express = require("express")
const router = express.Router();

router.use("/barrel", require('./barrel'))

module.exports = router;