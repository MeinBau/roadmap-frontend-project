const tabActive = {
    color: 'black',
    fontWeight: 'bold',
    borderBottom: '2px solid black',
    cursor: 'pointer',
    padding: '8px 16px',
}

const tab= {
    color: '#999',
    fontWeight: 'normal',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    padding: '8px 16px',
}


function TabButton({idx, clickTab, text, isActive}){
    return (
        <span style={(isActive) ? tabActive : tab} onClick={()=>clickTab(idx)}>{text}</span>
    );
}

export default TabButton;