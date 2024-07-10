### Create account in trongrid

1. create account here [Tron Grid](https://www.trongrid.io/) to get API key

### Requirements

### How to get transactions ?

- get transaction -> [reference](https://developers.tron.network/reference/get-transaction-info-by-account-address)

```typescript
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api.shasta.trongrid.io/v1/accounts/TYkqQVTjv8Zk7tH8g9kXs2Bqx5ramKyhaa/transactions",
  headers: { accept: "application/json" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```
