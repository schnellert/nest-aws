import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { AWS_S3_CLIENT } from "./s3.constants";
import { Module } from "@nestjs/common";
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

@Module({})
export class AwsS3Module extends createConfigurableDynamicRootModule<
  AwsS3Module,
  S3ClientConfig
>(AWS_S3_CLIENT, {
  providers: [
    {
      provide: AWS_S3_CLIENT,
      useFactory: (config: S3ClientConfig): S3Client => new S3Client(config),
    },
  ],
  exports: [AWS_S3_CLIENT],
}) {}
