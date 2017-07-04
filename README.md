## ON BRANCH walletBalance

#### in the api directory
```
yarn add dotenv
```
- in server .js add ```require('dotenv').config()``` at the top

```
yarn add node-fetch
```
- in ```routes/walletBalace.js``` add ```const fetch = require('node-fetch')```
- use "fetch" to bring in api data
- plugin your bitcoin wallet address in the .env with key BITCOIN_ADDRESS
- using a get request to pull in json data

##### TODO
- switch to "axios"
- save to db


