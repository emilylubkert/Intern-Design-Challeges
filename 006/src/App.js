import DayCard from './components/DayCard';
import './App.css';
import Settings from './components/Settings';
import Map from './components/Map';
import Month from './components/Month';
import Search from './components/Search';
import ProfilePic from './components/ProfilePic';
function App() {
  return (
    <div className='App'>
    <Settings />
      <header className='App-header'>
        <ProfilePic picture={'./profilePic.png'}/>
        <Search />
      </header>
      <div className='day-card-container'>
        <DayCard dayAbbrev={'S'} temperature={79 + '\u00b0'} />
        <DayCard dayAbbrev={'M'} temperature={68 + '\u00b0'} />
        <DayCard dayAbbrev={'T'} temperature={70 + '\u00b0'} />
        <DayCard dayAbbrev={'W'} temperature={80 + '\u00b0'} />
        <DayCard dayAbbrev={'TH'} temperature={87 + '\u00b0'} />
        <DayCard dayAbbrev={'F'} temperature={90 + '\u00b0'} />
        <DayCard dayAbbrev={'SA'} temperature={89 + '\u00b0'} />
      </div>
      <div className='map-container'>
        <Map />
        <Month />
      </div>
    </div>
  );
}

export default App;
