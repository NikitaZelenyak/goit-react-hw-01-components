import { List,Item,Counter,NameCounter } from "./ListInfo.styled"
import PropTypes from 'prop-types';


export const Info = ({ followers, views, likes }) => {
    return (
    <List >
    <Item>
      <NameCounter >Followers</NameCounter>
          <Counter > { followers}</Counter>
    </Item>
    <Item>
      <NameCounter >Views</NameCounter>
          <Counter > { views}</Counter>
    </Item>
    <Item>
      <NameCounter >Likes</NameCounter>
      <Counter> {likes}</Counter>
    </Item> 
  </List>
  )
}

Info.prototype = {
  followers: PropTypes.number,
  views: PropTypes.number,
      likes: PropTypes.number,

}