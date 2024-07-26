import { publicRequest,userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess,
        logout,
        addUserFailure,addUserStart,addUserSuccess}from "./userRedux"
import{addOrderFailure,addOrderStart,addOrderSuccess} from"./orderRedux"
 import { addProductFailure, addProductStart, addProductSuccess } from "./productRedux"
import { clear } from "./cartRedux";

// const URL="https://relife-resource.onrender.com/api/";
export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try{

        const res=await publicRequest.post("auth/login",user)
        dispatch(loginSuccess(res.data));
        

    }catch(err){
        dispatch(loginFailure());
        console.log(err.response.status,"from apicall")
        throw new Error(err.response.status)
    }
};
//Add Product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest().post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
    throw err; // Re-throw the error to be caught in handleClick
  }
};
//Add User
export const addUser = async (dispatch, user) => {
    dispatch(addUserStart());
    try {
      const res = await publicRequest.post("auth/register", user);
      console.log('Response:', res); // Log the entire response
  
      if (res.status === 201) { // Check specifically for 201 Created status
        dispatch(addUserSuccess(res.data));
      } else {
        console.error('Unexpected status code:', res.status);
        throw new Error('Unexpected response status');
      }
    } catch (err) {
      console.error('Error occurred:', err); // Log the entire error
      dispatch(addUserFailure());
      throw new Error(err.response?.data?.error || 'An error occurred');
    }
  };
  //Add Order
  export const addOrder = async (dispatch, order) => {
    const { userId, amount, products,address } = order;
    
    //filter
    const formattedProducts = products.map(product => ({
      productId: product._id,
      quantity: product.quantity
    }));
  
    
    const orderData = {
      userId,
      products: formattedProducts,
      amount,
      address: {
        city: address 
      }
    };
  
    console.log("Formatted order data:", orderData);
  
    dispatch(addOrderStart());
    try {
      const res = await userRequest().post(`/orders`, orderData);
      dispatch(addOrderSuccess(res.data));
    } catch (err) {
      dispatch(addOrderFailure());
      console.error("Order creation error:", err.response?.data?.error || err.message);
    }
  };
//logout
export const logOut=async(dispatch)=>{
    dispatch(logout());
    dispatch(clear());
};
//clear cart
export const clearCart=async(dispatch)=>{
    dispatch(clear());
};