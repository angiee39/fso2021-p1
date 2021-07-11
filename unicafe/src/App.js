import React, { useState } from 'react'

const Buttons = (props) => {
  const {feedback} = props
  const {good, neutral, bad} = props.feedback;
  const {setFeedback} = props

  const handleGood = () => {
    setFeedback({...feedback,good: good + 1})
  }
  const handleNeutral = () => {
    setFeedback({...feedback, neutral: neutral + 1})
  }
  const handleBad = () => {
    setFeedback({...feedback, bad: bad + 1})
  }
  return (
    <div>
      <button onClick={handleGood}>
        good
      </button>
      <button onClick={handleNeutral}>
        neutral
      </button>
      <button onClick={handleBad}>
        bad
      </button>
    </div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props.feedback
  if ( good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }
  const Statistic = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="all" value={good + neutral + bad}/>
          <Statistic text="average" value={((good - bad) / (good + neutral + bad)).toFixed(2)}/>
          <Statistic text="positive" value={(good * 100 / (good + neutral + bad)).toFixed(2) + " %"}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons setFeedback={setFeedback} feedback={feedback} />
      <h1>statistics</h1>
      <Statistics feedback={feedback} />
    </div>
  )
}

export default App