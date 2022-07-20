import PropTypes from 'prop-types';


import { Item, TextName, MarkOnline, } from "./OneFriend.styled"


export const OneFriend = ({name,avatarUrl,isOnline}) => {
    return (
        <Item  >
            <MarkOnline isOnline={isOnline} ></MarkOnline>
            <img src= {avatarUrl} alt="User avatar" width="48" />
            <TextName >{ name}</TextName>
</Item>
    )
}

OneFriend.prototype = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isOnline:PropTypes.bool,
    
    
}