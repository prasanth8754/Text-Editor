import styled from 'styled-components'

// {BgCont,Cont,Img,TextCont,ButtonCont,TextArea,Button,ImgCont,Heading}

export const BgCont = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Cont = styled.div`
  background-color: #1b1c22;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`
export const ImgCont = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
export const Img = styled.img`
  width: 70%;
  margin: auto;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 25px;
  text-align: center;
  padding-bottom:50px;
`
export const TextCont = styled.div`
  background-color: #25262c;
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #334155;
  border-radius: 15px;
`
export const ButtonCont = styled.ul`
  list-style-type:none;
  padding-left:0px;
  display: flex;
  gap: 10px;
  padding: 5px;
  padding-top:0;
  border-bottom: 1px solid #334155;
`
export const Button = styled.button`
  border: 0px;
  outline: none;
  background: transparent;
  cursor: pointer;
  color:${props => {
    if (props.isBold) {
      return '#faff00'
    } else if (props.isItalic) {
      return '#faff00'
    } else if (props.isUnderlined) {
      return '#faff00'
    } else {
      return '#f1f5f9'
    }
  }};
  font-size: 20px;
`
export const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: 0px;
  color: #cbd5e1;
  outline: none;
  padding: 10px;
  padding-left:15px;
  font-weight:${props => (props.isBold ? 'bold' : 'normal')};
  font-style:${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration:${props => (props.isUnderlined ? 'underline' : 'normal')};
`
