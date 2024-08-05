import {Order,Purchase,Series,Product} from "../models"
import {storage}from "../index" 

async function getUserProducts(userId: string){
    return await Order.findAll({
        include:[
          {model:Purchase,required:true,attributes:[]},
          {model:Series,required:true,
            attributes:["seriesId","title","description"],
            include:[{model:Product,required:true,attributes:["productId","name"]}]
          }
        ],
        where:{userId:userId},
        attributes:[]
    });
}

async function getProductLink(productId:string,userId:string) { 
    const series = await getUserProducts(userId);
    const purchased = validateProduct(series,productId);
    if(!purchased)
      return null;
    const result = await generateTempLink(productId)
    return {url:result[0]}
}

function validateProduct(series:any,productId:string){
  for(let serie of series){
    for(let product of serie.series.products){
      if(product.productId===productId)
        return true;
    }
  }
  return false;
}

async function generateTempLink(filePath:string) {
 return await storage.file(`${filePath}.png`).getSignedUrl({  
    version: 'v4',
    action: "read",
    expires: Date.now() + 15 * 60 * 1000
  });
}

export default {getUserProducts,getProductLink}