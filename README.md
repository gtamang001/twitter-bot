### Sample twitter bot that tweets using the api call to twitter

### To Run 
### Set up NPM
Run 
```bash
brew install node
```
Node comes with the npm which is a package manager for node applications similar to maven for java

```bash'
git clone this tempalte 
```
Create a new file config.js with following code 
```js
module.exports = {
    consumer_key:         'test-twitter-account-key',
    consumer_secret:      'test-twitter-account-secret-key',
    access_token:         'test-twitter-account-access-token',
    access_token_secret:  'test-twitter-account-access-token-secret',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true, 
}
```
Test your code
```bash
cd twitter-bot-folder
node bot.js
```
