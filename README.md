# ok-lambda (Work in Progress)
Example only. Scheduled AWS lambda function. In original version realize portfolio balancer on OKEx exchange.
Mix of synthetic example and old code refactoring. (not in public)
*Tell me if it is enough for code example. I am on vacation.*

## Changelog

### 1.0.0

**tick.handler** sends random into 'random' mqtt topic



## Structure and conception:

- *functions* - labmda functions handlers there
- functions/*tick* - main function (consumer for services/...)
- *models* - TS models/interfaces, can be used as ```import {} from '@ok/functions'```
- *services*
- services/*okex* - **OkexService** wraps *okex-api* JS library
- services/okex/*adapters* - adapters for OKX api there
- services/*report.service.ts* - **ReportService** reports data. Currently wraps MQTT client.

## Requirements:

- serverless/sls cli
- node: 14.x+

## Configuration:

Set in your AWS console next SSM variables:

- **ok/mqtt** - your open mqtt server connection string (I'm using stable hosted MQTT server for logging and smart house) 

- ok/okex_api_key (not used yet)
- ok/okex_api_secret (not used yet)
- ok/okex_api_password (not used yet)

## Build

```bash
npm run build
```

## Deployment

```bash
sls deploy
```
