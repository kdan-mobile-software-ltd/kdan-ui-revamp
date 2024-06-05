const glob = require('glob');

const pattern = './sections/**/types.ts'; // Replace with your desired glob pattern
const ignore = ['./node_modules/**']; // Exclude node_modules folder

glob(pattern, { ignore }, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
  } else {
    console.log('Found files:');
    files.forEach((file) => console.log(`export * from '${file.slice(0, -3)}';`));
  }
});
