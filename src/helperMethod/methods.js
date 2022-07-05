
// get Unique Size 
export const getUniqueSize = (array)=>{
    const uniqueValue =  [...new Set(array)];
    return uniqueValue;
}