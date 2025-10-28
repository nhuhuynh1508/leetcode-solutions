function numberofBeams(bank) {
    let totalBeams = 0;
    let previousDevices = 0;

    for (let row of bank) {
        const devices = row.split('1').length - 1;
        if (devices > 0) {
            totalBeams += previousDevices * devices;
            // move the laser connection down to this new active row
            previousDevices = devices;
        }
    }
    return totalBeams;
}

console.log(numberofBeams(["011001","000000","010100","001000"]))