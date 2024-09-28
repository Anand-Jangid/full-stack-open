import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

  

  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button handler={goodHandler} text="good" />
      <Button handler={neutralHandler} text="neutral" />
      <Button handler={badHandler} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  );
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positivePercentage = good / all * 100;

  if(all === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average.toFixed(2)} />
          <StatisticsLine text="positive" value={positivePercentage.toFixed(2) + " %"} />
        </tbody>
      </table>
    </div>
  );
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

export default App