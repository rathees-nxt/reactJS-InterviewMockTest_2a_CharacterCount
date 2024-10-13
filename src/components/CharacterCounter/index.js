import {Component} from 'react'
import {v4} from 'uuid'

import {
  AppContainer,
  MainContainer,
  Heading,
  ItemListContainer,
  ListContent,
  FirstContainer,
  NoItemImgContainer,
  NoItemImg,
  SecondContainer,
  FormContainer,
  Input,
  AddButton,
} from './styled'

class CharacterCounter extends Component {
  state = {characterItem: [], userInput: ''}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    const addItem = {
      id: v4(),
      character: userInput,
    }
    this.setState(prevState => ({
      characterItem: [...prevState.characterItem, addItem],
      userInput: '',
    }))
  }

  renderFirstview = () => {
    const {characterItem} = this.state
    return (
      <FirstContainer>
        <Heading color>
          Count the characters like a<br />
          Boss...
        </Heading>
        {characterItem.length > 0 ? (
          <ItemListContainer>
            {characterItem.map(each => (
              <li key={each.id}>
                <ListContent>
                  {each.character} : {each.character.length}
                </ListContent>
              </li>
            ))}
          </ItemListContainer>
        ) : (
          <NoItemImgContainer>
            <NoItemImg
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          </NoItemImgContainer>
        )}
      </FirstContainer>
    )
  }

  renderSecondView = () => {
    const {userInput} = this.state
    return (
      <SecondContainer>
        <Heading>Character Counter</Heading>
        <FormContainer onSubmit={this.onSubmitAdd}>
          <Input
            onChange={this.onChangeInput}
            value={userInput}
            className="input"
            type="text"
            placeholder="Enter the Characters here"
          />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
      </SecondContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MainContainer>
          {this.renderFirstview()}
          {this.renderSecondView()}
        </MainContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
