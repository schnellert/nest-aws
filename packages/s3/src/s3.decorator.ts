import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { S3_CLIENT } from "./s3.constants";

export const InjectS3Client = makeInjectableDecorator(S3_CLIENT);
