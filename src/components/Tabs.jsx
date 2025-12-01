import TabButton from './TabButton';

function Tabs({currentTab, clickTab}){
    return (
        <div>
            <TabButton idx={0} clickTab={clickTab} text='First Tab' isActive={currentTab===0}></TabButton>
            <TabButton idx={1} clickTab={clickTab} text='Second Tab' isActive={currentTab===1}></TabButton>
            <TabButton idx={2} clickTab={clickTab} text='Third Tab' isActive={currentTab===2}></TabButton>
            <TabButton idx={3} clickTab={clickTab} text='Fourth Tab' isActive={currentTab===3}></TabButton>
        </div>
    );
}

export default Tabs;