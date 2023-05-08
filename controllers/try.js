const path = require('path');
const B2 = require('backblaze-b2');

const b2 = new B2({
  applicationKeyId: 'your-application-key-id',
  applicationKey: 'your-application-key',
});

// Authenticate with B2 Cloud Storage
b2.authorize().then(() => {

  // Set the bucket name and file name
  const bucketName = 'my-bucket';
  const fileName = 'my-image.jpg';

  // Read the file
  const filePath = path.join(__dirname, fileName);
  const fileContent = fs.readFileSync(filePath);

  // Upload the file to B2 Cloud Storage
  b2.uploadFile({
    fileName: fileName,
    data: fileContent,
    bucketId: bucketName
  }).then(response => {
    console.log('File uploaded successfully:', response.data.fileName);
  }).catch(error => {
    console.error('Error uploading file:', error);
  });

}).catch(error => {
  console.error('Error authenticating with B2 Cloud Storage:', error);
});
