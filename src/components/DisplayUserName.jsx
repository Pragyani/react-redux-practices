import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/Slices/userSlice";
import { useDispatch } from "react-redux";

const DisplayUserName = () => {

  const dispatch = useDispatch()

  const data = useSelector((userData) => {
    return userData.users
  })
  console.log(data)

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  }
  return (
    <>
      <Wrapper>
        {
          data.map((userName, id) => {
            return <li key={id}>
              {userName}
              <button className="btn-delete" onClick={() => deleteUser(id)}>
                <MdDeleteForever className="delete-icon" />
              </button>
            </li>
          })
        }
      </Wrapper>
    </>)

}
const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`


export default DisplayUserName;