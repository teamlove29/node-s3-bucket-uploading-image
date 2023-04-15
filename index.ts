import {
  S3Client,
  ListBucketsCommand,
  PutObjectCommand,
  ListBucketsOutput,
  PutObjectOutput,
} from "@aws-sdk/client-s3";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as mime from "mime";

// Load environment variables from the .env file
dotenv.config();

// Instantiate an Amazon S3 client
const s3Client = new S3Client({ region: process.env.AWS_REGION });

// Function to list buckets
async function listBuckets(): Promise<void> {
  try {
    const data: ListBucketsOutput = await s3Client.send(
      new ListBucketsCommand({})
    );
    console.log("Buckets:", data.Buckets);
  } catch (err) {
    console.error("Error listing buckets:", err);
  }
}

// Function to upload a file
async function uploadFile(
  bucketName: string,
  key: string,
  filePath: string
): Promise<void> {
  try {
    const fileStream = fs.createReadStream(filePath);
    const contentType = mime.getType(filePath) || "application/octet-stream";

    const uploadParams = {
      Bucket: bucketName,
      Key: key,
      Body: fileStream,
      ContentType: contentType, // Set the Content-Type header
      //   ACL: 'public-read', // Set the ACL to public-read
    };

    const data: PutObjectOutput = await s3Client.send(
      new PutObjectCommand(uploadParams)
    );
    console.log(`File uploaded successfully. ETag: ${data.ETag}`);
  } catch (err) {
    console.error("Error uploading file:", err);
  }
}

// List buckets
listBuckets();

// Upload a file
const bucketName = process.env.AWS_NAME as string;
const key = "your-object-key.png";
const filePath = "./test_photo.png";
uploadFile(bucketName, key, filePath);



// create fuction test 1234 