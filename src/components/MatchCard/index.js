// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competing_team_logo, result, competing_team, match_status} = eachMatch
  const status = match_status === 'Won' ? 'won' : 'lost'
  return (
    <li className="matches-list-item">
      <img
        className="match-logo"
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
      />
      <p className="team-title">{competing_team}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${status}`}>{match_status}</p>
    </li>
  )
}

export default MatchCard