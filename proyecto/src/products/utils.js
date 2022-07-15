/**
 * Funciones y exportar informes 
 */

const excelGenerator = (products,name,res)=>{
    const xl = require('excel4node'); //Se caragra en paquete unicamente cuando se hara el uso de la función
    
    //Map a los productos

    products = products.map((product)=>{
        let id = product._id.toString();//Se trasforma el ID a String
        delete product._id; //Eliminar una propiedad del ID
        return{
            id,
            ...product
        };
    })

    let wb=new xl.Workbook(); //generar libro de excel
    let ws = wb.addWorksheet('Inventario');//

    for(let i=1; i<=products.length; i++){//Llenar archivo de excel filas
        for(let j=1; j<=Object.values(products[0]).length; j++){//con el Object.values(products[i]).length saber cuantas propiedades existen en los productos
            let data = Object.values(products[i - 1])[j - 1];//Todos los valores del primer objeto
            //se especifica el tipo de valor para agregar a la celda
            if(typeof data === 'string'){
                ws.cell(i,j).string(data);
            }else{//en este caso si no es un string es un numero
                ws.cell(i,j).number(data);
            }
        }
    }

    wb.write(`${name}.xlsx`,res);//Escriba el archivo y se le envia el nombre

}

module.exports.ProductsUtils={
    excelGenerator
}