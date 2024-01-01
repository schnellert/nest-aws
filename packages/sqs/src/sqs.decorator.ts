import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { SQS_CLIENT } from "./sqs.constants";

export const InjectSQSClient = makeInjectableDecorator(SQS_CLIENT);
