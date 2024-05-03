import React from "react";
import { deleteUsers } from "../store/Slices/userSlice";
import { useDispatch } from "react-redux";
const DeleteAllusers=()=>{

    const dispatch= useDispatch()
     
     const delUser=()=>{
      dispatch(deleteUsers())
     }
    return(
    <Wrapper>
  <button className="clear-btn" onClick={delUser}>clear all data</button>
    </Wrapper>
    )
}


export default DeleteAllusers