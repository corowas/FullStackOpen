import { useState } from 'react'

const Display = props => <tr><td>{props.text}</td><td> {props.value}</td></tr>
// const Total = ({clicks}) => {
//   total = clicks.good + clicks.bad + clicks.neutral
//   clicks.bad = clicks.bad * -1
//   tempTotal = clicks.good + clicks.bad

// }

const Button = ({handleClick, text}) => {
  console.log("clicked")
  return(
<button onClick={handleClick} text={text}>{text}</button>

  )
 
}
const Statistics = ({clicks}) => {
  let total = clicks.good + clicks.bad + clicks.neutral
  let newBad = clicks.bad * -1
  let avg = (clicks.good + newBad) / total
  let posAvg = clicks.good / total
  if (total === 0) {
    return(
      <div>
        Please click a buttton
      </div>
    )
    
  } else {
 return(
  <div>
    <table>
      <tbody>
      <Display text="good" value={clicks.good} />
      <Display text="bad" value ={clicks.bad} />
      <Display text="neutral" value={clicks.neutral} />
      <Display text="total Clicks" value={total} />
      <Display text="Average" value={avg} />
      <Display text="Positive Average" value={posAvg} />
      </tbody>
      </table>
      </div>
      )}
}
const App = (props) => {
  const [clicks, setClicks] = useState ({
    good:0, bad:0, neutral:0
  })
  

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})
  const handleBadClick = () => 
    setClicks({...clicks, bad: clicks.bad +1})
    const handleNeutralClicks = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})
  


  return(
    <div>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleBadClick} text="bad" />
      <Button handleClick={handleNeutralClicks} text="neutral" />
      <h1>Statistics</h1>
      <Statistics clicks={clicks} />
      

</div>
  )
}

export default App;
