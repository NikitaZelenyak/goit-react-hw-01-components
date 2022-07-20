import friends from "../../components/friends.json"


import { List } from "./FriendList.styled"
import { OneFriend } from "./OneFriend/OneFriend"


export const FriendList = () => {
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

