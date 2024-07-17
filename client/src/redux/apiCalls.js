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
export const addUser=async(dispatch,user)=>{
    dispatch(addUserStart());
    try{
        const res=await publicRequest.post("auth/register", user );
        dispatch(addUserSuccess(res.data));
        // console.log(res)

    }catch(err){
        console.log(err,"error occured")
        dispatch(addUserFailure());
        throw new Error(err.response.data.error)
    }
};
//Add Order
export const addOrder=async(dispatch,order)=>{
    dispatch(addOrderStart());
    try{
        const res=await userRequest.post(`/orders`, order );
        dispatch(addOrderSuccess(res.data));

    }catch(err){
        
        dispatch(addOrderFailure());
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