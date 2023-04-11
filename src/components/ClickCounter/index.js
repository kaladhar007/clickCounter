import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="body">
        <div className="content">
          <h1>
            The Button has been clicked <br />
            <span> {count} </span>times
          </h1>
          <p>Click the button to increase the count!</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            click me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
