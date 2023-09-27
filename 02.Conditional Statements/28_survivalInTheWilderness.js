function survivalInTheWilderness(timeOfDay, environment, item) {
    if (timeOfDay === 'day') {
        if (environment === 'forest') {
            if (item === 'knife') {
                console.log('Hunt for food');
            } else if (item === 'container') {
                console.log('Collect berries');
            } else {
                console.log('Explore');
            }
        } else if (environment === 'desert') {
            if (item === 'hat') {
                console.log('Search for water');
            } else {
                console.log('Find shade');
            }
        }
    } else if (timeOfDay === 'night') {
        if (environment === 'forest') {
            if (item === 'firestarter') {
                console.log('Make a campfire');
            } else {
                console.log('Climb a tree for safety');
            }
        } else if (environment === 'desert') {
            if (item === 'blanket') {
                console.log('Sleep');
            } else {
                console.log('Keep moving to stay warm');
            }
        }
    }
}

survivalInTheWilderness('day', 'forest', 'knife');
survivalInTheWilderness('day', 'forest', 'container');
survivalInTheWilderness('night', 'forest', 'firestarter');
survivalInTheWilderness('night', 'desert', 'blanket');
survivalInTheWilderness('day', 'desert', 'hat');
survivalInTheWilderness('night', 'desert', 'sword');