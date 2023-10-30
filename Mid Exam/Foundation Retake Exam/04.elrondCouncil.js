function elrondCouncil(votes = []) {
    let keepCount = 0;
    let destroyCount = 0;
    let useCount = 0;
    let hideCount = 0;

    for (const vote of votes) {
        if (vote === 'Keep') {
            keepCount++;
        } else if (vote === 'Destroy') {
            destroyCount++;
        } else if (vote === 'Use') {
            useCount++;
        }else if (vote === 'Hide') {
            hideCount++;
        }
    }

    if (keepCount > destroyCount && keepCount> useCount && keepCount> hideCount) {
        console.log('Keep');
    } else if (destroyCount > keepCount && destroyCount> useCount && destroyCount> hideCount) {
        console.log('Destroy');
    } else if (useCount > destroyCount && useCount> keepCount && useCount> hideCount) {
        console.log('Use');
    } else if (hideCount > destroyCount && hideCount> keepCount && hideCount> useCount) {
        console.log('Hide');
    }else {
        console.log('Undecided');
    }
}

elrondCouncil(["Keep", "Keep", "Destroy", "Hide"])
elrondCouncil(["Use", "Use", "Use", "Hide", "Hide", "Keep"])
elrondCouncil(["Destroy", "Keep", "Hide", "Use"])
elrondCouncil(["Use", "Use", "Use"])
elrondCouncil(["Destroy", "Hide", "Keep", "Use", "Use", "Destroy"])