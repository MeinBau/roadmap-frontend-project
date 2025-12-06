
function AgeDisplay({now, birthday}){
    const age = now.diff(birthday, ['years', 'months','days']).toObject();
    const ageDisplay = (age.years===undefined || age.months===undefined) ? "" : "You are "+age.years+" years "+age.months+" months old"
    return (
        <>
            <h1>{ageDisplay}</h1>
        </>
    );
}

export default AgeDisplay;