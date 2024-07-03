const glob = require('glob');

const ignore = ['./node_modules/**']; // Exclude node_modules folder

const componentPattern = './components/**/index.tsx'; // Replace with your desired glob pattern
glob(componentPattern, { ignore }, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
  } else {
    console.log('\n// components');
    files.forEach((file) => console.log(`export * from '${file.slice(0, -10)}';`));
  }
});

const pattern = './sections/**/index.tsx';
glob(pattern, { ignore }, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
  } else {
    console.log('\n// sections');
    files.forEach((file) => console.log(`export * from '${file.slice(0, -10)}';`));
  }
});

const typePattern = './sections/**/types.ts';
glob(typePattern, { ignore }, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
  } else {
    console.log('\n// types');
    files.forEach((file) => console.log(`export * from '${file.slice(0, -3)}';`));
  }
});
