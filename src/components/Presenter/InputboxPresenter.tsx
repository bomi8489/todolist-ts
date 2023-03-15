import styled from 'styled-components';

const Inputbox = styled.div`
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
`

const Subtitle = styled.h2`
margin-top: 0;
margin-bottom: 10px;
`

const Input = styled.input`
text-align: center;
font-family: 'Do Hyeon', cursive;
font-weight: bold;
font-size: 1.5rem;
width: 70%;
height: 30px;
background: none;
border-left-width:0;
border-right-width:0;
border-top-width:0;
border-bottom-width:1;
color: #f8f8f2;
`

const Button = styled.button`
display: none;
`

export { Inputbox, Subtitle, Input, Button };