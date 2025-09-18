
import axios from'axios'

const Action = () => async(dispatch)=>{
    try{
        const product = await axios.get('https://shoppingbackend-6iki.onrender.com/getProducts')
         const res = product.data

         dispatch({type:'success',payload:res})
    }catch(err){
        dispatch({type:'fail',payload:err.message})
    }
}


export default Action
