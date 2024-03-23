import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = (cart) =>{
    return async dispatch =>{
        const fetchData = async ()=>{
          const response =  await fetch('https://react-udemy-4eceb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

          if(!response.ok){
            throw new Error('Could not fetch cart data!');
          }
          const data = await response.json();
          return data;
        };

        try {
          const cartData = await fetchData();
          dispatch(cartActions.replaceCart(cartData))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title:'Error!',
                message: 'Fetching cart data failed!'
              }))
        }
    }
}

export const sendCartData = (cart) =>{
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title:'Sending..',
            message: 'Sending cart data!'
          }));

        const sendRequest = async () =>{
            const response = await fetch('https://react-udemy-4eceb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {method:'PUT',
            body: JSON.stringify(cart)
          },);
        
          if(!response.ok){
            throw new Error('Sending cart data failed');
            
          }
        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title:'Success!',
                message: 'Sent cart data successfully!'
              }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title:'Error!',
                message: 'Sending cart data failed!'
              }))
        }

        

       
    }
}