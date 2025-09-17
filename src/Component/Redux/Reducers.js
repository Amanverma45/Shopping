const initialState = {
  products: []
}

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'success':
      return {
        products: Array.isArray(action.payload) 
          ? action.payload 
          : action.payload.products || []   // 👈 agar object me products hai
      }

    case 'fail':
      return { products: [] }

    default:
      return state
  }
}

export default Reducers
