import React from "react";
import { deleteUsers } from "../store/Slices/userSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";


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

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background: linear-gradient(135deg, #7f6de3 0%, #11aaf1 100%);
    margin-top:2rem;
    border-radius :3px;
    padding: 10px;
    letter-spacing:0.1px;
    font-size:large;   
    cursor: pointer;
    color: #fff;
    border: none;
  }
`

export default DeleteAllusers