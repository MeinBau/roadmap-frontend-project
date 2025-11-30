import './App.css';
import TabButton from './components/TabButton';

function App() {
  return (
    <div className='container'>
      <div>
        <TabButton text='First Tab' isActive={true}></TabButton>
        <TabButton text='Second Tab' isActive={false}></TabButton>
        <TabButton text='Third Tab' isActive={false}></TabButton>
        <TabButton text='Fourth Tab' isActive={false}></TabButton>
      </div>
    </div>
  );
}

export default App;
