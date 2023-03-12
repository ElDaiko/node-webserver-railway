const http = require('http');

//request es todo lo que solicita del url.. argumentos y el response es la respuesta dle cliente
http.createServer( (req, res) => {

    /* res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/json'}) */

    res.write( 'Hola mundo' );
    res.end();

} )
.listen(8080);

console.log('escuchando en el puerto');