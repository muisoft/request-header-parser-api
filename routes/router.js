import express from 'express'


export const router = express.Router()
router.get('/whoami', function(req, res){
	  let ip = req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress
    let lang = req.acceptsLanguages()[0]
    let user = req.headers['user-agent']

    res.json({
    'ipaddress': ip,
      'language': lang,
    'software': user.substring(user.indexOf('(') + 1, user.indexOf(')'))
    })
})