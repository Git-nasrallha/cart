
// get Unique Size 
export const getUniqueSize = (array)=>{
    const uniqueValue =  [...new Set(array)];
    return uniqueValue;
};


//get product by id
export const getItem=(arr,id)=>{
    const item = arr.find(item=>item.id==id);
    return item;
}