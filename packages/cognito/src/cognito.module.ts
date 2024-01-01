import { Module } from "@nestjs/common";
import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { COGNITO_IDENTITY_PROVIDER_CLIENT } from "./cognito.constants";
import {
  CognitoIdentityProviderClientConfig,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

@Module({})
export class CognitoModule extends createConfigurableDynamicRootModule<
  CognitoModule,
  CognitoIdentityProviderClientConfig
>(COGNITO_IDENTITY_PROVIDER_CLIENT, {
  providers: [
    {
      provide: COGNITO_IDENTITY_PROVIDER_CLIENT,
      useFactory: (
        config: CognitoIdentityProviderClientConfig
      ): CognitoIdentityProviderClient =>
        new CognitoIdentityProviderClient(config),
    },
  ],
  exports: [COGNITO_IDENTITY_PROVIDER_CLIENT],
}) {}
