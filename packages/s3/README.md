# @schnellert/nest-aws-s3

Simple nest aws s3 client

## Getting started

### Installation

#### PNPM

- Install the package along with the aws s3 client peer dependency
  `pnpm install @schnellert/nest-aws-s3 @aws-sdk/client-s3`

#### NPM

- Install the package along with the aws s3 client peer dependency
  `npm install @schnellert/nest-aws-s3 @aws-sdk/client-s3`

#### YARN

- Install the package along with the aws s3 client peer dependency
  `yarn add @schnellert/nest-aws-s3 @aws-sdk/client-s3`

### Example 'forRoot'

```typescript
import { S3Module } from "@schnellert/nest-aws-s3";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    S3Module.forRoot(S3Module, {
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
import { S3Module } from "@schnellert/nest-aws-s3";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot(),
    S3Module.forRootAsync(S3Module, {
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

### Inject s3 client:

```typescript
import { S3Client } from "@aws-sdk/client-s3";
import { InjectS3Client } from "@schnellert/nest-aws-s3";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(@InjectS3Client() private readonly client: S3Client) {
    // ...
  }
}
```
