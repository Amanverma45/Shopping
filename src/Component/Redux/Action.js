import React from 'react'
import axios from'axios'

const Action = () => async(dispatch)=>{
    try{
        const product = await axios.get('http://localhost:1000/getProducts')
         const res = product.data

         dispatch({type:'success',payload:res})
    }catch(err){
        dispatch({type:'fail',payload:err.message})
    }
}


export default Action
