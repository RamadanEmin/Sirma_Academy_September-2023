function extractFile(text = '') {
    const pattern = /\\([^\\]+)\.([^.]+)$/g;

    const file = text.matchAll(pattern);
    for (const item of file) {
        console.log(`File name: ${item[1]}`);
        console.log(`File extension: ${item[2]}`);
    }
}

extractFile('C:\\desktop\\academy\\template.pptx');
extractFile('C:\\Projects\\website.folder\\file.name.js');