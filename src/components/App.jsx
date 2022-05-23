import { Profile } from './Profile/profile';

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
      <Profile/>

{/* <FeedbackOptions options={} onLeaveFeedback={}/>
<Section title=""/> */}


    </div>
  );
};
