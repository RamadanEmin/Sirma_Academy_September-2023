function adventureGame(leftHand, rightHand) {
    if (leftHand === 'sword') {
        if (rightHand === 'shield') {
            console.log('Path to the castle');
        } else {
            console.log('Path to the forest');
        }
    } else if (leftHand === 'map') {
        if (rightHand === 'coins') {
            console.log('Go to the town');
        } else {
            console.log('Camp at the current spot and prepare for the next day');
        }
    } else {
        console.log('Wander aimlessly');
    }
}

adventureGame('sword', 'shield');
adventureGame('map', 'coins');
adventureGame('torch', 'flower');