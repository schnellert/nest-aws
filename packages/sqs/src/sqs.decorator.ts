import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { AWS_SQS_CLIENT } from "./sqs.constants";

export const InjectAwsSQSClient = makeInjectableDecorator(AWS_SQS_CLIENT);
