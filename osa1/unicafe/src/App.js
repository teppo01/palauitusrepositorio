import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Review = ({ text, value, percentage}) => {
    return (
        <p>{text} {value} {percentage} </p>
    )
}

const Stats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good / total) * 100;
    
    return (
        <>
            <h2>Statistics</h2>
            <Review text='good' value={good} />
            <Review text='neutral' value={neutral} />
            <Review text='bad' value={bad} />
            <Review text='all' value={total} />
            <Review text='average' value={average} />
            <Review text='positive' value={positive} percentage='%' />
        </>
    )
}

const Empty = () => {
    return (
        <>
            <p>No feedback given</p>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const totalFeedback = good + neutral + bad

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />
            { totalFeedback > 0 ? <Stats good={good} neutral={neutral} bad={bad} /> : <Empty />}
        </div>
    )
}

export default App