import React from 'react';

//determine the word count for each line
const countWords = line => {
   return line.trim().split(' ').length
 }

//Rules for valid poem:
  // The poem has three lines.
  // The first line has five words.
  // The second line has three words.
  // The third line has five words.

 const checkPoemValid = poem => {
   if (poem == "") return false
   const lines = poem.trim().split('\n')
   const isThreeWords = lines.length === 3
   const correctWordsPerLine = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5
   return isThreeWords && correctWordsPerLine ? true : false
 }

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: '',
      isValid: false
    };
  }

//update isValid based on the text entered passed into the poem validator function
  handleTextChange = event => {
    let text = event.target.value
    this.setState({
      textarea: text,
      isValid: checkPoemValid(text)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.textarea}
          onChange={this.handleTextChange}
        />
        {!this.state.isValid &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }
      </div>
    );
  }
}

export default PoemWriter;
