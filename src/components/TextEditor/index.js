import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgCont,
  Cont,
  ImgCont,
  Heading,
  Img,
  TextCont,
  ButtonCont,
  TextArea,
  Button,
} from './styledComponents'

class TextEditor extends Component {
  state = {textContent: ''}

  onChangeText = event => {
    this.setState({
      textContent: event.target.value,
      bold: false,
      italic: false,
      underline: false,
    })
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalian = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {textContent, bold, italic, underline} = this.state

    return (
      <BgCont>
        <Cont>
          <ImgCont>
            <Heading>Text Editor</Heading>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgCont>
          <TextCont value={textContent}>
            <ButtonCont>
              <li>
                <Button
                  data-testid="bold"
                  isBold={bold}
                  type="button"
                  onClick={this.onClickBold}
                >
                  <VscBold />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  isItalic={italic}
                  type="button"
                  onClick={this.onClickItalian}
                >
                  <GoItalic />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  isUnderlined={underline}
                  type="button"
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline />
                </Button>
              </li>
            </ButtonCont>
            <TextArea
              rows={25}
              cols={10}
              onChange={this.onChangeText}
              isBold={bold}
              isItalic={italic}
              isUnderlined={underline}
            />
          </TextCont>
        </Cont>
      </BgCont>
    )
  }
}

export default TextEditor
