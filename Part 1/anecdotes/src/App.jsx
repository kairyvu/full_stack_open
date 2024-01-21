import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Header = ({text}) => (
  <h1>{text}</h1>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const onCountVote = () => {
    const copy = [...vote]
    copy[selected]++
    setVote(copy)
  }

  const getMax = () => {
    let max = vote[0]
    let maxIndex = 0
    for (let i = 0; i < vote.length; i++) {
      if (max < vote[i]) {
        max = vote[i]
        maxIndex = i
      }
    }
    return maxIndex
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected]} votes</div>
      <Button handleClick={onCountVote} text="vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <div>{anecdotes[getMax()]}</div>
      <div>has {vote[getMax()]} votes</div>
    </div>
  )
}

export default App