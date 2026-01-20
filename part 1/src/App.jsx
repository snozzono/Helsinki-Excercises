import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const clicker = (setter, value) => () => setter(value + 1)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <Header text="give feedback" />
      <button onClick={clicker(setGood, good)}>good</button>
      <button onClick={clicker(setNeutral, neutral)}>neutral</button>
      <button onClick={clicker(setBad, bad)}>bad</button>

      <Header text="statistics" />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {isNaN(average) ? 0 : average}</div>
      <div>positive {isNaN(positive) ? 0 : positive} %</div>
    </div>
  )
}

export default App