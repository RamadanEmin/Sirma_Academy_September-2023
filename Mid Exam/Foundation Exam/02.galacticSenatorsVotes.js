function galacticSenatorsVotes(votes = []) {
    let yesCount = 0;
    let noCount = 0;
    let abstainCount = 0;

    for (const vote of votes) {
        if (vote === 'Yes') {
            yesCount++;
        } else if (vote === 'No') {
            noCount++;
        } else if (vote === 'Abstain') {
            abstainCount++;
        }
    }

    if (yesCount === 0 && noCount === 0 && abstainCount > 0) {
        console.log('Abstain');
    } else if (yesCount === noCount) {
        console.log('Tie');
    } else if (yesCount > noCount) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

// galacticSenatorsVotes(["Yes", "No", "Yes", "Abstain", "Yes"])
// galacticSenatorsVotes(["No", "No", "Abstain", "Abstain"])
// galacticSenatorsVotes(["Yes", "No"])
// galacticSenatorsVotes(["Abstain"])
// galacticSenatorsVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"])