import { createSlice } from "@reduxjs/toolkit";


const STATUSES =Object.freeze( {
    IDLE : 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const ProductSlice = createSlice({
   name: 'product',
   initialState : {
    data : [],
    status : STATUSES.IDLE,
   },
   reducers:{
    setProducts(state, action) {
        state.data = action.payload;
      },
      setStatus(state,action){
        state.status = action.payload;
      }
   }
})

export const {setProducts,setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;

export function fetchProduct(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            //console.log(data);
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))

        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}