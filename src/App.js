import './App.css';
import Clock from './components/clock';
import FlowZoneHeader from './components/flowZoneHeader';
import FlowZoneUpdate from './components/flowZoneUpdate';
import MyThrivingToolKit from './components/myThrivingToolKit';


function App() {
  return (
    <div className="App">
      <div >
        <div className='Flow'>
          <FlowZoneHeader />
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Clock />
        </div>
        <div>
          <FlowZoneUpdate />
        </div>
        <div>
          <MyThrivingToolKit/>
        </div>
      </div>
    </div>
  );
}

export default App;
