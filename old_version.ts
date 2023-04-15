// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import { Readable } from 'stream';
// require('dotenv').config();

// const accessKeyId = process.env.AWS_ACCESS_KEY_ID as string
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY as string
// const region = process.env.AWS_REGION;

// const s3BucketName = 'teem-vintage';
// const s3ObjectKey = 'your-s3-object-key';
// const s3ObjectContent = 'Hello, world!';

// const s3 = new S3Client({
//   region,
//   credentials: {
//     accessKeyId ,
//     secretAccessKey,
//   },
// });

// const uploadObjectToS3 = async () => {
//   const stream = Readable.from(s3ObjectContent);

//   const command = new PutObjectCommand({
//     Bucket: s3BucketName,
//     Key: s3ObjectKey,
//     Body: stream,
//   });

//   await s3.send(command);
// };

// uploadObjectToS3()
//   .then(() => console.log(`Object "${s3ObjectKey}" has been uploaded to S3 bucket "${s3BucketName}"`))
//   .catch((err) => console.error(err));
