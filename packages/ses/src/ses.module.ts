import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { Module } from "@nestjs/common";
import { SES_CLIENT } from "./ses.constants";
import { SESClient, SESClientConfig } from "@aws-sdk/client-ses";

@Module({})
export class SESModule extends createConfigurableDynamicRootModule<
  SESModule,
  SESClientConfig
>(SES_CLIENT, {
  providers: [
    {
      provide: SES_CLIENT,
      useFactory: (config: SESClientConfig) => new SESClient(config),
    },
  ],
  exports: [SES_CLIENT],
}) {}
