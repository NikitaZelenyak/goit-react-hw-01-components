
import friends from "../components/friends.json"
import user from "../components/user.json";
import data from "../components/data.json"
import transactions from "../components/transactions.json"

import { Profile } from '../components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import PropTypes from 'prop-types'

export const App = () => {
  return (
    <div
      style={{
      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user}></Profile>
      <Statistics data={data}></Statistics>
      <FriendList friends ={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
  );
};

App.prototype = {
  user: PropTypes.objectOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  friends: PropTypes.arrayOf(PropTypes.object),
   transactions: PropTypes.arrayOf(PropTypes.object)

}