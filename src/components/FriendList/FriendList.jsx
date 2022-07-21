


import { List } from "./FriendList.styled"
import { OneFriend } from "./OneFriend/OneFriend"

import PropTypes from 'prop-types'

export const FriendList = ({friends}) => {

    
    return (
        <List>
            {friends.map(friend => {
                return (<OneFriend
                   
                    key={friend.id}
                    avatarUrl={friend.avatar}
                    isOnline ={friend.isOnline}
                    name={friend.name}

                ></OneFriend>)
              
            })}

        </List>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
    })),

}