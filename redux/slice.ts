import { ReduxSliceGlobalType, ReduxStoreSliceType } from '@/utils/types';
import { createSlice, Slice } from '@reduxjs/toolkit';

const initialState : ReduxSliceGlobalType = {
    data : []
}

const reduxCartItemsSlice : Slice<ReduxSliceGlobalType> = createSlice({
    name : 'cartStore',
    initialState,
    reducers : {
        addItemsToCart(state : any, action : any){
            if(action.payload) state.data.push(action.payload);
        }
    }
});


export const {addItemsToCart} = reduxCartItemsSlice.actions;

export default reduxCartItemsSlice.reducer;
