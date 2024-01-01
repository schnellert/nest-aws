import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { S3_CLIENT } from "./s3.constants";
import { Module } from "@nestjs/common";
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

@Module({})
export class S3Module extends createConfigurableDynamicRootModule<
  S3Module,
  S3ClientConfig
>(S3_CLIENT, {
  providers: [
    {
      provide: S3_CLIENT,
      useFactory: (config: S3ClientConfig): S3Client => new S3Client(config),
    },
  ],
  exports: [S3_CLIENT],
}) {}
