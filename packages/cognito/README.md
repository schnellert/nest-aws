# @schnellert/nest-aws-cognito

Simple nest aws cognito identity provider client

## Getting started

### Installation

#### PNPM

- Install the package along with the aws cognito identity provider client peer dependency
  `pnpm install @schnellert/nest-aws-cognito @aws-sdk/client-cognito-identity-provider`

#### NPM

- Install the package along with the aws cognito identity provider client peer dependency
  `npm install @schnellert/nest-aws-cognito @aws-sdk/client-cognito-identity-provider`

#### YARN

- Install the package along with the aws cognito identity provider client peer dependency
  `yarn add @schnellert/nest-aws-cognito @aws-sdk/client-cognito-identity-provider`

### Example 'forRoot'

```typescript
import { CognitoModule } from "@schnellert/nest-aws-cognito";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AwsCognitoModule.forRoot(AwsCognitoModule, {
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
import { AwsCognitoModule } from "@schnellert/nest-aws-cognito";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AwsCognitoModule.forRootAsync(AwsCognitoModule, {
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

### Inject aws cognito identity provider client:

```typescript
import { AwsCognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { InjectAwsCognitoIdentityProviderClient } from "@schnellert/nest-aws-cognito";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(
    @InjectAwsCognitoIdentityProviderClient()
    private readonly client: AwsCognitoIdentityProviderClient
  ) {
    // ...
  }
}
```
