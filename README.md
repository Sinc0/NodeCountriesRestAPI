### Summary
- Name: Countries REST API
- Description: Fetch data about countries
- LoC: ~670
- [Logo](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/public/icon.png)
###
- Features:
- \--- Fetch All Countries
- \--- Fetch Specific Country
- \--- Fetch Multiple Countries
- \--- Token Validation
- \--- Token Usage Tracking

### Technologies
- [Node](https://www.nodejs.org)
- [Express](https://expressjs.com)
- [EJS](https://ejs.co)
- [Mongoose](https://mongoosejs.com)

### Code
- [File - Main](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/views/index.ejs)
- [File - Routes](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/routes.js)
- [File - Server](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/server.js)
- [File - Validation](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/validation.js)
- [File - Countries](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/countries.js)
- [File - Tokens](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/tokens.js)
###
- [Fetch - All Countries](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/countries.js#L11-L48)
- [Fetch - Specific Country](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/countries.js#L52-L109)
- [Fetch - Multiple Countries](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/countries.js#L113-L176)
###
- [Token - Create](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/tokens.js#L7-L25)
- [Token - Validate](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/validation.js#L6-L35)
- [Token - Track Usage](https://github.com/Sinc0/NodeCountriesRestAPI/blob/master/controllers/countries.js#L45-L46)