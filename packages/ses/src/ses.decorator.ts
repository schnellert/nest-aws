import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { AWS_SES_CLIENT } from "./ses.constants";

export const InjectAwsSESClient = makeInjectableDecorator(AWS_SES_CLIENT);
