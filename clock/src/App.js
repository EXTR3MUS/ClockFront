import './App.css';
import DateViewer from './components/DateViewer';
import TimerGroup from './components/TimerGroup';
import Stopwatch from './components/Stopwatch';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <div className="clock-container-top">
        <DateViewer />
      </div>
      <div className="clock-container">
        <div className="clock-container-left">
          <Container title="Stopwatch">
            <Stopwatch time={0}/>
          </Container>
        </div>
        <div className="clock-container-right">
          <Container title="Timer">
            <TimerGroup />
          </Container>
        </div>
      </div>
      <div className="clock-container-bottom">
        <div className='footer'>Footer </div>
      </div>
    </div>
  );
}

export default App;

// icons library docs
// https://react-icons.github.io/react-icons