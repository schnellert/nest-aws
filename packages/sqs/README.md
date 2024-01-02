# @schnellert/nest-aws-sqs

Simple nest aws sqs client

## Getting started

### Installation

#### PNPM

- Install the package along with the aws sqs client peer dependency
  `pnpm install @schnellert/nest-aws-sqs @aws-sdk/client-sqs`

#### NPM

- Install the package along with the aws sqs client peer dependency
  `npm install @schnellert/nest-aws-sqs @aws-sdk/client-sqs`

#### YARN

- Install the package along with the aws sqs client peer dependency
  `yarn add @schnellert/nest-aws-sqs @aws-sdk/client-sqs`

### Example 'forRoot'

```typescript
import { AwsSQSModule } from "@schnellert/nest-aws-sqs";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AwsSQSModule.forRoot(AwsSQSModule, {
      credentials: {
        secretAccessKey: "<secretAccessKey>",
        accessKeyId: "<accessKeyId>",
      },
    }),
  ],
})
export class AppModule {}
```

### Example 'forRootAsync' with nest.js config service:

```typescript
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AwsSQSModule } from "@schnellert/nest-aws-sqs";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AwsSQSModule.forRootAsync(AwsSQSModule, {
      useFactory: (configService: ConfigService) => {
        return {
          credentials: {
            secretAccessKey: configService.getOrThrow("AWS_SECRET_ACCESS_KEY"),
            accessKeyId: configService.getOrThrow("AWS_ACCESS_KEY_ID"),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

### Inject aws sqs client:

```typescript
import { SQSClient } from "@aws-sdk/client-sqs";
import { InjectAwsSQSClient } from "@schnellert/nest-aws-sqs";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(@InjectAwsSQSClient() private readonly client: SQSClient) {
    // ...
  }
}
```
