const mysql= require('mysql')

const user= mysql.user

const conection= mysql.createConnection({
     host:'localhost',
     user:'CompTech',
     password:'admin',
     database:'comptech'
})
conection.connect((err)=>{
    if(err)throw err
    console.log('la conexion funciona')
})


const insertar ="INSERT INTO CLIENTE (DNI,NOMBRE,APELLIDOS,CORREO,DIRECCION) VALUES ('12345678S','Luisma','Garcia' , 'luisma@gmail.com', 'calle sddds 7 4Dch')"

conection.query(insertar,(err,rows)=>{
    if(err) throw err
})

conection.query('SELECT * from CLIENTE', (err,rows)=>{
    if(err)throw err
    console.log('Los datos de la tabla son estos')
    console.log(rows)
})




conection.end()