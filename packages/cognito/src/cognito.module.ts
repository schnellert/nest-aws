import { Module } from "@nestjs/common";
import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { AWS_COGNITO_IDENTITY_PROVIDER_CLIENT } from "./cognito.constants";
import {
  CognitoIdentityProviderClientConfig,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

@Module({})
export class AwsCognitoModule extends createConfigurableDynamicRootModule<
  AwsCognitoModule,
  CognitoIdentityProviderClientConfig
>(AWS_COGNITO_IDENTITY_PROVIDER_CLIENT, {
  providers: [
    {
      provide: AWS_COGNITO_IDENTITY_PROVIDER_CLIENT,
      useFactory: (
        config: CognitoIdentityProviderClientConfig
      ): CognitoIdentityProviderClient =>
        new CognitoIdentityProviderClient(config),
    },
  ],
  exports: [AWS_COGNITO_IDENTITY_PROVIDER_CLIENT],
}) {}
