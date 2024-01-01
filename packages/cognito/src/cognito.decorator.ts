import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { COGNITO_IDENTITY_PROVIDER_CLIENT } from "./cognito.constants";

export const InjectCognitoIdentityProviderClient = makeInjectableDecorator(
  COGNITO_IDENTITY_PROVIDER_CLIENT
);
