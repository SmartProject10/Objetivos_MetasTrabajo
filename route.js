const express = require('express');
const route = express.Router();

const conexion = require('./database/db');

route.get('/', function (req, res){
    conexion.query('SELECT * FROM salud_general', function(error, results1){
        if(error){
           console.log(error);
        }else{
            conexion.query('SELECT * FROM salud_especifico', function(error, results2){
                if(error){
                   console.log(error);
                }else{
                                   res.render('index', {results1:results1, results2:results2});
                                    }
                                    
                                });
                        }
                    });
        }); 
   
route.get('/create', (req,res)=>{
    res.render('create');
})
route.get('/edit1/:id_saludgeneral', (req,res)=>{    
    const id_saludgeneral= req.params.id_saludgeneral;
    var query = `SELECT * FROM salud_general WHERE id_saludgeneral="${id_saludgeneral}" `;
    conexion.query(query, (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editsaludgeneral', {results:results[0]});            
        }        
    });
});

route.get('/delete1/:id_saludgeneral', (req, res) => {
    const id_saludgeneral = req.params.id_saludgeneral;
    conexion.query('DELETE FROM salud_general WHERE id_saludgeneral = ?',[id_saludgeneral], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

route.get('/edit2/:id_saludespecifico', (req,res)=>{    
    const id_saludespecifico= req.params.id_saludespecifico;
    var query = `SELECT * FROM salud_especifico WHERE id_saludespecifico="${id_saludespecifico}" `;
    conexion.query(query, (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editsaludespecifico', {results:results[0]});            
        }        
    });
});

route.get('/delete2/:id_saludespecifico', (req, res) => {
    const id_saludespecifico = req.params.id_saludespecifico;
    conexion.query('DELETE FROM salud_especifico WHERE id_saludespecifico = ?',[id_saludespecifico], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

const crud = require('./controllers/crud');
route.post('/save1', crud.save1);
route.post('/update1', crud.update1);
route.post('/save2', crud.save2);
route.post('/update2', crud.update2);

module.exports= route;