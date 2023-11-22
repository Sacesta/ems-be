const router = require("express").Router();
const Log = require('../controllers/log.controller')
const auth = require('../middleware/auth')

// update log
router.post('/update', auth(['employee']), async(req,res)=>{
    const response = await Log.update(req.body.sessionId,req.body.data)
    res.json(response)
})

// approve log
router.post('/approve', auth(['admin','sadmin']), async(req,res)=>{
    const response = await Log.approve(req.body.logId)
    res.json(response)
})

module.exports = router;