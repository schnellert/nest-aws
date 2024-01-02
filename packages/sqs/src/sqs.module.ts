import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { Module } from "@nestjs/common";
import { AWS_SQS_CLIENT } from "./sqs.constants";
import { SQSClient, SQSClientConfig } from "@aws-sdk/client-sqs";

@Module({})
export class AwsSQSModule extends createConfigurableDynamicRootModule<
  AwsSQSModule,
  SQSClientConfig
>(AWS_SQS_CLIENT, {
  providers: [
    {
      provide: SQSClient,
      useFactory: (config: SQSClientConfig) => new SQSClient(config),
    },
  ],
  exports: [AWS_SQS_CLIENT],
}) {}
