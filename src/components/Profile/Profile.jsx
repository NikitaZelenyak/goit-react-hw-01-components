
import user from "../../components/user.json";

import { Wrapper } from "./Profile.styled"

import { Description } from "components/Profile/Description/Description"; 
import { Info } from './ListInfo/ListInfo';

export const Profile = () => {
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