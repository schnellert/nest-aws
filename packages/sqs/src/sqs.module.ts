import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { Module } from "@nestjs/common";
import { SQS_CLIENT } from "./sqs.constants";
import { SQSClient, SQSClientConfig } from "@aws-sdk/client-sqs";

@Module({})
export class SQSModule extends createConfigurableDynamicRootModule<
  SQSModule,
  SQSClientConfig
>(SQS_CLIENT, {
  providers: [
    {
      provide: SQSClient,
      useFactory: (config: SQSClientConfig) => new SQSClient(config),
    },
  ],
  exports: [SQS_CLIENT],
}) {}
