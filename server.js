var express = require('express')
    , logger = require('morgan')
    , app = express()
    , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
    try {
        var html = template({ title: 'Home' })
        res.send(html)
    } catch (e) {
        next(e)
    }
})

app.get('/footprint', function (req, res, next) {
    try {
        console.log('In #footprint')
        template = require('jade').compileFile(__dirname + '/source/templates/footprint.jade')
        var html = template({ title: 'Footprint' })
        res.send(html)
    } catch (e) {
        next(e)
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})