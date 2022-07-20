import { DescriptionBox,Avatar,Text } from "./Description.styled";
import PropTypes from 'prop-types';

export const Description = (
    { url, username, tag, location }) => { 
    return (
          <DescriptionBox >
    <Avatar 
      src={url}
      alt="User avatar"

    />
            <Text >{ username}</Text>
            <Text >@{ tag}</Text>
            <Text >{ location}</Text>
  </DescriptionBox>
    )
}

Description.prototype = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string
}