import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './Friends/friends';
import { TransactionHistory } from './Transactions/transactions';

export const App = () => {
  return (
    <div
      className="main"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics stats={data} /> */}
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
