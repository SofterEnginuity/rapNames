const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const movies = {
    'halloween town': {
        'movieName': 'Halloween Town',
        'releaseYear': 1998,
        'directorName': 'Duwayne Dunham',
        'rottenTomatoes': '5.7'
    },
    'beetlejuice':{
        'movieName': 'beetlejuice',
        'releaseYear': 1988,
        'directorName': 'tim burton',
        'rottenTomatoes': '7.10'
    },
    // 'unknown':{
    //     'releaseYear': 0,
    //     'directorName': 'unknown',
    //     'rottenTomatoes': 'unknown'
    // }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:movies',(request,response)=>{
    const movieName = request.params.movies.toLowerCase()

    if( movies[movieName] ){
        response.json(movies[movieName])
    }else{
        response.json(movies['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

