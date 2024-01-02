import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { Module } from "@nestjs/common";
import { AWS_SES_CLIENT } from "./ses.constants";
import { SESClient, SESClientConfig } from "@aws-sdk/client-ses";

@Module({})
export class AwsSESModule extends createConfigurableDynamicRootModule<
  AwsSESModule,
  SESClientConfig
>(AWS_SES_CLIENT, {
  providers: [
    {
      provide: AWS_SES_CLIENT,
      useFactory: (config: SESClientConfig) => new SESClient(config),
    },
  ],
  exports: [AWS_SES_CLIENT],
}) {}
