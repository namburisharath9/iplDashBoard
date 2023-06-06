// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeamCard} = props
  const {id, name, teamImageUrl} = iplTeamCard

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="team-card">
        <div className="team-img-container">
          <img className="team-image" src={teamImageUrl} alt={name} />
        </div>
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
