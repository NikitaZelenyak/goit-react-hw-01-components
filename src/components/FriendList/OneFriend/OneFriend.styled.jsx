import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
border-bottom: 1px solid orange;

`

export const TextName = styled.p`
display: block;
margin-left: 20px;
`

export const MarkOnline = styled.span`
 display: block;
 width: 10px;
 height: 10px;
background-color: red;
margin-right: 10px;
 border-radius: 50%;
background-color: ${({isOnline}) => {
    if (isOnline) {
        return 'green'
    }
    return 'red'
}}
 `