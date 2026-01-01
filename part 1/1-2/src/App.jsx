/*no hemos pasado .map*/

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = ({ parts }) => (
  <table border={1}>
    <tbody>
      <tr>
        <td>{parts[0].name}</td>
        <td>{parts[0].exercises}</td>
      </tr>
      <tr>
        <td>{parts[1].name}</td>
        <td>{parts[1].exercises}</td>
      </tr>
      <tr>
        <td>{parts[2].name}</td>
        <td>{parts[2].exercises}</td>
      </tr>
    </tbody>
  </table>
)

const Total = ({ parts }) => {
  return(
    <table border={1}>
      <tbody>
        <tr>
          <td>Number of exercises:</td>
          <td>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {

  const course = 'Half Stack application development'

  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App