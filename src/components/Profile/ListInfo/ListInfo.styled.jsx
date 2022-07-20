import styled from "styled-components";
export const List = styled.ul`
display:flex;
margin-top:20px;
    justify-content: center;
    padding: 0;
background-color: #ffea00;
margin-bottom: 0px;

border: 1px solid blue;
border-radius: 4px;
`

export const Item = styled.li`
 
padding: 10px;

:not(:last-child){
    border-right: 1px solid blue; ;
}

`
export const Counter = styled.span`
display:flex;
justify-content: center;



`
export const NameCounter = styled.span`
display:flex;
justify-content: center;
color: #0d26379e;
font-size: 24px;
`