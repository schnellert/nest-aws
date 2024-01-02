# @schnellert/nest-aws-ses

Simple nest aws ses client

## Getting started

### Installation

#### PNPM

- Install the package along with the aws ses client peer dependency
  `pnpm install @schnellert/nest-aws-ses @aws-sdk/client-ses`

#### NPM

- Install the package along with the aws ses client peer dependency
  `npm install @schnellert/nest-aws-ses @aws-sdk/client-ses`

#### YARN

- Install the package along with the aws ses client peer dependency
  `yarn add @schnellert/nest-aws-ses @aws-sdk/client-ses`

### Example 'forRoot'

```typescript
import { AwsSESModule } from "@schnellert/nest-aws-ses";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AwsSESModule.forRoot(AwsSESModule, {
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
import { AwsSESModule } from "@schnellert/nest-aws-ses";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AwsSESModule.forRootAsync(AwsSESModule, {
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

### Inject aws ses client:

```typescript
import { SESClient } from "@aws-sdk/client-ses";
import { InjectAwsSESClient } from "@schnellert/nest-aws-ses";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(@InjectAwsSESClient() private readonly client: SESClient) {
    // ...
  }
}
```
