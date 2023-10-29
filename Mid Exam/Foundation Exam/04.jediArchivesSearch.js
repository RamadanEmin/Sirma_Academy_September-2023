function jediArchivesSearch(arr = [], str = '') {
    const firstOccurrence = arr.indexOf(str);
    const lastOccurrence = arr.lastIndexOf(str);

    if (firstOccurrence === -1) {
        console.log('Record not found');
    } else {
        console.log(`First Occurrence: ${firstOccurrence}`);
        console.log(`Last Occurrence: ${lastOccurrence}`);
    }
}

jediArchivesSearch(["Yoda", "Obi-Wan", "Yoda", "Luke"], "Yoda");
jediArchivesSearch(["Han", "Leia", "Chewbacca", "Han"], "Han");
jediArchivesSearch(["Lando", "Vader", "Palpatine"], "Maul");
jediArchivesSearch(["Yoda", "Obi-Wan", "Anakin", "Luke"], "Luke");