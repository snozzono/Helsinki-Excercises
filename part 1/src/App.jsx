import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const clicker = (setter, value) => {
  return () => setter(value + 1)
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {isNaN(average) ? 0 : average}</div>
      <div>positive {isNaN(positive) ? 0 : positive} %</div> 
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <button onClick={clicker(setGood, good)}>good</button>
      <button onClick={clicker(setNeutral, neutral)}>neutral</button>
      <button onClick={clicker(setBad, bad)}>bad</button>

      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App