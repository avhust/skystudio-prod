const fs = require('fs');
const path = require('path');

function removeAndRenameFiles(folder, index, extension) {
    // Get the list of all files in the folder.
    const folderExtension = path.join(folder, extension);

    // remove .DS_Store
    fs.unlinkSync(path.join(folderExtension, '.DS_Store'));

    const files = fs.readdirSync(folderExtension);

    const maxIndex = files.length / 2;

    // Find the pair of files to remove.
    const filesToRemove = files.filter(file => file.endsWith(`photo${index}-1x.${extension}`) || file.endsWith(`photo${index}.${extension}`));

    // Remove the pair of files.
    for (const file of filesToRemove) {
        fs.unlinkSync(path.join(folderExtension, file));
    }

    // Rename all next files.
    for (let i = index + 1; i <= maxIndex; i++) {
        const oldFileName = `photo${i}.${extension}`;
        const newFileName = `photo${i - 1}.${extension}`;
        fs.renameSync(path.join(folderExtension, oldFileName), path.join(folderExtension, newFileName));
    }

    // Rename all next files with -1x suffix.
    for (let i = index + 1; i <= maxIndex; i++) {
        const oldFileName = `photo${i}-1x.${extension}`;
        const newFileName = `photo${i - 1}-1x.${extension}`;
        fs.renameSync(path.join(folderExtension, oldFileName), path.join(folderExtension, newFileName));
    }
}
function main() {
    // Get the folder and index from the command line arguments.
    const folder = process.argv[2];
    const index = parseInt(process.argv[3]);
    // const extension = parseInt(process.argv[4]);
    const extensions = ['avif', 'webp', 'jpg'];

    // Remove the pair of files and rename all next files.
    for (let i = 0; i < extensions.length; i++) {
        removeAndRenameFiles(folder, index, extensions[i]);
    }
}

main();