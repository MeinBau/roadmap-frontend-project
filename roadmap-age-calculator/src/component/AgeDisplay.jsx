
function AgeDisplay({now, birthday}){
    const age = now.diff(birthday, ['years', 'months','days']).toObject();
    return (
        <>
            <h1>{"You are "+age.years+" years "+age.months+" months old"}</h1>
        </>
    );
}

export default AgeDisplay;