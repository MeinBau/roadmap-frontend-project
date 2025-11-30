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

function TabButton(props){
    return (
        <span style={(props.isActive) ? tabActive : tab}>{props.text}</span>
    );
}

export default TabButton;