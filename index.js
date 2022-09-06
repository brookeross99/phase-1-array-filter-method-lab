// Code your solution here
function findMatching(names,looking){
    return names.filter(
        (possible)=>possible.toLowerCase()===looking.toLowerCase()
    );
}

function fuzzyMatch(driver,match){
    return driver.filter(
        (possible)=>possible.toLowerCase().indexOf(match.toLowerCase())===0
    );
}

function matchName(data,lookingName){
    return data.filter((record)=>record.name===lookingName);
}