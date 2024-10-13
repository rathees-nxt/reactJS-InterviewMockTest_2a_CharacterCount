import styled from 'styled-components'

export const Heading = styled.h1`
  background-color: ${props => (props.color ? '#ffbf1f' : '#0f172a')};
  padding: ${props => (props.color ? '30px' : '')};
  font-family: roboto;
  font-size: 36px;
  font-weight: bold;
  color: ${props => (props.color ? '#1e293b' : '#ffbf1f')};
  margin-top: ${props => (props.color ? '0px' : '60px')};
  border-top-left-radius: ${props => (props.color ? '15px' : '')};
`
export const ItemListContainer = styled.ul`
  list-style-type: none;
`
export const ListContent = styled.p`
  font-family: roboto;
  font-size: 20px;
  font-weight: 500;
  color: #0f172a;
`
export const FirstContainer = styled.div`
  background-color: #ffc533;
  width: 50%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
`

export const NoItemImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoItemImg = styled.img`
  width: 400px;
  margin-top: 80px;
`

export const SecondContainer = styled.div`
  background-color: #0f172a;
  width: 50%;
  height: 100%;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormContainer = styled.form`
  margin-top: 60px;
`
export const Input = styled.input`
  padding: 10px;
  color: #475569;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: roboto;
  border-radius: 7px;
  width: 350px;
  margin-right: 10px;
`
export const AddButton = styled.button`
  padding: 10px 15px;
  font-family: roboto;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffc533;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #334155;
`
export const MainContainer = styled.div`
  margin: 30px;
  width: 80vw;
  height: 80vh;
  display: flex;
`
export const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
