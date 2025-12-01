import './App.css';
import Tabs from './components/Tabs';
import example1 from './data/example1.json'

import { useState} from 'react';

function App() {
  const tabsData = example1.tabsData;
  const [currentTab, clickTab] = useState(0);

  return (
    <div className='container'>
      <Tabs currentTab={currentTab} clickTab={clickTab}/>
      <div style={{width: '550px', height: '400px' }}>
        <p>{tabsData[currentTab].text}</p>
      </div>
    </div>
  );
}

export default App;
