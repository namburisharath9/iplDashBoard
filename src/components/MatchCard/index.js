// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const statusClassName = `status-${matchStatus}`
  const altText = `competing team ${competingTeam}`

  return (
    <li className="match-card-container">
      <img className="team-logo" src={competingTeamLogo} alt={altText} />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
