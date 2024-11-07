// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    man_of_the_match,
    date,
    venue,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <h1 className="latest-match-title">Latest Match</h1>
      <div className="latest-match-card">
        <div className="card left">
          <p className="title">{competing_team}</p>
          <p className="title">{date}</p>
          <p className="title">{venue}</p>
          <p className="title">{result}</p>
        </div>
        <img
          className="match-mid-image"
          src={competing_team_logo}
          alt={`latest match ${competing_team}`}
        />
        <div className="card right">
          <h1 className="title">First Innings</h1>
          <p className="title">{first_innings}</p>
          <h1 className="title">Second Innings</h1>
          <p className="title">{second_innings}</p>
          <h1 className="title">Man Of The Match</h1>
          <p className="title">{man_of_the_match}</p>
          <h1 className="title">Umpires</h1>
          <p className="title">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch