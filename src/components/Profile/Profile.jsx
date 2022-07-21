
import PropTypes from 'prop-types'

import { Wrapper } from "./Profile.styled"

import { Description } from "components/Profile/Description/Description"; 
import { Info } from './ListInfo/ListInfo';

export const Profile = ({user}) => {
    return (
        <Wrapper>
  <Description
          url={user.avatar}
          username={user.username }
          tag={ user.tag}
          location={user.location } />
        <Info
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        </Wrapper>
    )
}

Profile.prototype = {
    user: PropTypes.objectOf(PropTypes.string),
}