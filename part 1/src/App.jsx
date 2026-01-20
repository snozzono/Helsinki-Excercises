import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return <div>{text} {value}</div>
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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={isNaN(average) ? 0 : average} />
      <StatisticLine text="positive" value={isNaN(positive) ? 0 : positive + ' %'} />
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
      <Button onClick={clicker(setGood, good)} text="good" />
      <Button onClick={clicker(setNeutral, neutral)} text="neutral" />
      <Button onClick={clicker(setBad, bad)} text="bad" />

      <Header text="statistics" />
      {good + neutral + bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>no feedback given</div>
      )}
    </div>
  )
}

export default App