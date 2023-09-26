function climateZoneIdentifier(latitude, zone) {

    if (latitude === 0) {
        console.log('Equator');
    } else if (Math.abs(latitude) < 23.5) {
        console.log('Tropic Zone');
    } else if (Math.abs(latitude) < 66.5) {
        console.log('Temperate Zone');
    } else if (Math.abs(latitude) <= 90.) {
        console.log('Arctic Zone');
    }
}

climateZoneIdentifier(70, 'N');
climateZoneIdentifier(45, 'S');
climateZoneIdentifier(10, 'N');
climateZoneIdentifier(0, 'N');
climateZoneIdentifier(-85, 'S');