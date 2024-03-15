import AWS from 'aws-sdk'
import fs from 'fs';

// Set the region and access keys
AWS.config.update({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRETACCESS
});

const s3 = new AWS.S3();

export const uploadFileToS3 = (file, folderName, fileName) => {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${folderName}/${fileName}`,
        Body: fs.createReadStream(file.path),
        ContentType: file.mimetype,
        ACL: 'public-read'
      };
  
      s3.upload(params, (err, data) => {
        if (err) {
          console.log('Error uploading file:', err);
          reject(err);
        } else {
          console.log('File uploaded successfully. File locationn:', data.Location);
          resolve(data.Location);
        }
      });
    });
  };