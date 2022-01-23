import Profile from "../components/profile/Profile";
import profileData from "./user.json";
import Statistics from "../components/statistics/Statistics";
import statisticsData from "./data.json";
import FriendList from "./friends/FriendList";
import friendsData from "./friends.json";
import TransactionHistory from "./transaction/TransactionHistory";
import transactionData from "./transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
};

export default App;
