import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { AWS_S3_CLIENT } from "./s3.constants";

export const InjectAwsS3Client = makeInjectableDecorator(AWS_S3_CLIENT);
