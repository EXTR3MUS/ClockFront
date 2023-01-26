import './App.css';
import DateViewer from './components/DateViewer';
import TimerGroup from './components/TimerGroup';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <div className="clock-container-top">
        <DateViewer />
      </div>
      <div className="clock-container">
        <div className="clock-container-left">
          <h1>Stopwatch</h1>
          <div className='clock-stopwatch'>
            <Stopwatch time={0}/>
          </div>
        </div>
        <div className="clock-container-right">
          <TimerGroup />
        </div>
      </div>
      <div className="clock-container-bottom">
        <div className='footer'>Footer </div>
      </div>
    </div>
  );
}

export default App;
