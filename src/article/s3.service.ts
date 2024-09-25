import { Injectable } from '@nestjs/common';
import { S3 } from '@aws-sdk/client-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';

@Injectable()
export class S3Service {
  private s3 = new S3({
    region: 'us-east-1', // e.g., 'us-west-2'
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const bucketName = 'blogpostbucketpersonal';
    const key = `${randomUUID()}-${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.s3.send(command);

    // Construct the file URL
    return `https://${bucketName}.s3.amazonaws.com/${key}`;
  }
}
