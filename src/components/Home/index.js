// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class IplHomePage extends Component {
  state = {iplTeamList: [], isLoading: true}

  componentDidMount = () => {
    this.getTheIPLTeamList()
  }

  getTheIPLTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamData = data.teams
    const formattedData = teamData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(formattedData)
    this.setState({iplTeamList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, iplTeamList} = this.state
    return (
      <div className="ipl-app-container">
        <div className="main-heading-title">
          <img
            className="main-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ipl-team-list-container">
            {iplTeamList.map(eachTeam => (
              <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default IplHomePage