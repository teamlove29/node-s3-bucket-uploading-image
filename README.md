# node-s3-bucket-uploading-image

### S3 bucket คือบริการเก็บข้อมูลออนไลน์ที่ให้ผู้ใช้สามารถเก็บไฟล์และข้อมูลต่างๆ ในรูปแบบของ "บักเก็ต" (Bucket) บน Amazon Web Services (AWS) ได้ โดยที่ข้อมูลจะถูกเก็บอยู่บน cloud storage ของ AWS และสามารถเข้าถึงได้จากทุกที่ที่มีการเชื่อมต่ออินเทอร์เน็ต การใช้งาน S3 bucket สามารถทำได้หลายรูปแบบ เช่น เก็บไฟล์สำหรับเว็บไซต์ เก็บไฟล์ของแอปพลิเคชัน เก็บไฟล์ข้อมูลสำหรับการแบ่งปันในองค์กร และอื่นๆ โดย S3 bucket มีความยืดหยุ่นในการกำหนดค่าการเข้าถึงข้อมูล ความปลอดภัยของข้อมูล และการจัดเก็บข้อมูลในรูปแบบที่ต้องการ

![create_discord_3](https://cdn.nerdyelectronics.com/wp-content/uploads/2020/03/NE-S3-storage.png)

- ข้อมูลเพิ่มเติมเพิ่มความปลอดภัยให้กับ​ S3 [CloudFront + AWS S3](https://snappytux.com/how-to-set-up-a-cloudfront-for-amazon-s3/)

### SET JSON Permissions

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets",
                "s3:ListBucket"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::teem-vintage/*"
            ]
        }
    ]
}
```