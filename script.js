const http = require('http')
const fs = require('fs')
const yargs = require('yargs')
const child = require('child_process')
const pass = 123
const Jimp = require('jimp')
const url = require('url')
const argv = yargs
.command(
'acceso',
'Comando para levantar',
{
pass: {
describe: 'Contraseña',
demand: true,
alias: 'p',
},
},
(args) => {
args.pass == pass
?
child.exec('node acceso.js', (err, stdout) => {
err ? console.log(err) : console.log(stdout)


http
.createServer((req, res) => {
if (req.url == '/') {
res.writeHead(200, { 'Content-Type': 'text/html' })
fs.readFile('index.html', 'utf8', (err, html) => {
res.end(html)
})
}
if (req.url == '/estilos') {
res.writeHead(200, { 'Content-Type': 'text/css' })
fs.readFile('style.css', (err, css) => {
res.end(css)
})
}



const params = url.parse(req.url, true).query
const linkImagen = params.link
if (req.url.includes('/newImg')){
    Jimp.read(linkImagen, (err, imagen) => {
        imagen
        .quality(60)
        .greyscale()
        .resize(350, Jimp.AUTO)
        .sepia()
        .writeAsync('newImg.png')
        .then(() => {
        fs.readFile('newImg.png', (err, Imagen) => {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        res.end(Imagen)
        })
        })
        })
}



})
.listen(3000, () => console.log('Servidor encendido'))
})
:
console.log('Credenciales incorrectas')
}
)
.help().argv






// http
// .createServer((req, res) => {
// res.writeHead(200, { 'Content-Type': 'text/html' })
// res.end(`
// <p> Desafio <b>LATAM</b> </p>
// `)
// })
// .listen(3000, () => console.log('Servidor encendido'))












