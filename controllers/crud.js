const conexion= require ('../database/db');

exports.save1 = (req, res)=>{
    const salud_objgeneral = req.body.salud_objgeneral;
    conexion.query('INSERT INTO salud_general SET ?',{ salud_objgeneral:salud_objgeneral}, (error, results)=>{
      if(error){
        console.log(error);
      }else{
        res.redirect('/',);
      }
    })
  }
  
  exports.update1 = (req, res)=>{
    const id_saludgeneral = req.body.id_saludgeneral ;
    const salud_objgeneral = req.body.salud_objgeneral;
  
    var updateQuery = `UPDATE salud_general SET salud_objgeneral = "${salud_objgeneral}" WHERE id_saludgeneral  = "${id_saludgeneral}"`;
   
    conexion.query('updateQuery',(error, results)=>{
      if(error){
        console.log(error);
      }else{
        res.redirect('/');
      }
    });
  }


  
exports.save2 = (req, res)=>{
  const salud_objespecifico = req.body.salud_objespecifico;
  const meta = req.body.meta;
  const indicador = req.body.indicador;
  const formula = req.body.formula;
  const frecuencia = req.body.frecuencia;
  const responsable = req.body.responsable;
  conexion.query('INSERT INTO salud_especifico SET ?',{ salud_objespecifico:salud_objespecifico, meta:meta, indicador:indicador,formula:formula,frecuencia:frecuencia, responsable:responsable}, (error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/',);
    }
  })
}

exports.update2 = (req, res)=>{
  const id_saludpecifico = req.body.id_saludpecifico;
  const salud_objespecifico = req.body.salud_objespecifico;
  const meta = req.body.meta;
  const indicador = req.body.indicador;
  const formula = req.body.formula;
  const frecuencia = req.body.frecuencia;
  const responsable = req.body.responsable;

  conexion.query('UPDATE salud_especifico  SET ? WHERE id_saludpecifico = ?',[{salud_objespecifico:salud_objespecifico, meta :meta,indicador:indicador,formula:formula,frecuencia:frecuencia,responsable:responsable }, id_saludpecifico], (error, results)=>{
    if(error){
        console.log(error);
    }else{           
        res.redirect('/');         
    }
});
};