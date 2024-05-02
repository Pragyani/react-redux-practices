import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DisplayUserName = () => {
    const data = useSelector((userData) => {
        return userData.users
    })
    console.log(data)
    return (
        <>
            <Wrapper>
                {
                    data.map((userName, id) => {
                        return <li key={id}>
                            {userName}
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