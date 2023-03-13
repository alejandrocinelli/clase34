import logger from "../logger.js";

const products = [
    {produdctId: 1, name: "Producto 1", price: 100},
    {produdctId: 2, name: "Producto 2", price: 200},
    {produdctId: 3, name: "Producto 3", price: 300},
    {produdctId: 4, name: "Producto 4", price: 400},
    {produdctId: 5, name: "Producto 5", price: 500}] 
    
const getProduct = (req, res) => {
       try {
        res.json(products);
       } catch (error) {
         logger.error(`Error al buscar productos: ${error}`);
         res.status(500).json({error: "Error al buscar productos vuelve a intentarlo"})
       }
        
    }

const getProductsById = (req, res) => {
    try {
         const {id} = req.params;
            const product = products.find((product) => product.produdctId === Number(id));
            logger.info(`Producto encontrado: ${product.name}`);
            res.json(product)
    } catch (error) {
        logger.error(`Error al buscar producto: ${error}`);
        res.status(500).json({error: "Error al buscar producto vuelve a intentarlo"})
    }
           
                }  
                
const errorRequest = (req, res) => {
        res.status(404).json({error: "Ruta no encontrada"})    
    }            

export const productsController = {
        getProduct , getProductsById , errorRequest }   