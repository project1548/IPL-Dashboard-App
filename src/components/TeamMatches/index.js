// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchesData: [], backgroundClassMatch: '', isLoading: true}

  componentDidMount = () => {
    this.getMatchIdItem()
  }

  getMatchIdItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const formattedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatch: fetchedData.latest_match_details,
      recentMatches: fetchedData.recent_matches,
    }
    this.setState({
      matchesData: formattedData,
      backgroundClassMatch: id,
      isLoading: false,
    })
  }

  renderRecentMatches = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData

    return (
      <ul className="recent-matches-list">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatch} = matchesData
    return (
      <div className="responsive-container">
        <img className="team-banner" src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatch={latestMatch} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  render() {
    const {backgroundClassMatch, isLoading} = this.state
    return (
      <div className={`latest-match-container ${backgroundClassMatch}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches