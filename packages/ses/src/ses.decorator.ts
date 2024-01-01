import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { SES_CLIENT } from "./ses.constants";

export const InjectSESClient = makeInjectableDecorator(SES_CLIENT);
