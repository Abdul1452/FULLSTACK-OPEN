import { useState } from 'react'
const Header = ({header}) => {
  return <h1>{header}</h1>
};

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;
  if (all === 0) {
  return (
    <p>No feedback given</p>
  )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good {good}</td>
            <td>neutral {neutral}</td>
            <td>bad {bad}</td>
            <td>all {all}</td>
            <td>average {average}</td>
            <td>positive {positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  return (
    <div>
      <Header header={("give feedback")}/>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      
      <Header header={("statistics")}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
      

  
    </div>
  )
}

export default App