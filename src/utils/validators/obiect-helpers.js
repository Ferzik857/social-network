export const updateObjectInArray = (items, itemId, objPropName, NewObjProps)=>{
   return items.map(u => {
        if(u[objPropName]=== itemId){
            return{...u, ...NewObjProps}
        }
        return u;
    })
}