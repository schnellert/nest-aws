import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { AWS_COGNITO_IDENTITY_PROVIDER_CLIENT } from "./cognito.constants";

export const InjectAwsCognitoIdentityProviderClient = makeInjectableDecorator(
  AWS_COGNITO_IDENTITY_PROVIDER_CLIENT
);
