const express = require('express')
const router = express.Router()

const transporter = require('./../configs/nodemailer.config')

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.post('/send-email', (req, res) => {

    let { email, subject, message } = req.body

    transporter.sendMail({
        from: 'Germán desde el campus! <myawesome@project.com>',
        to: email,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`
    })
        .then(info => console.log('INFORMACIÓN DEL ENVÍO', info))
        .catch(err => console.log('HUBO UN ERROR:', err))
})


module.exports = router
