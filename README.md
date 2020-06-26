# Iwoca Hash Generator
 

## Installation

Install Node js

  
## Generate hash

### 1 - Change your private key

```typescript
const privateKey = "123"; 
```

### 2 - Change your body

```typescript
const body = `{ "data": { "state_key": "2307ecab-6f8c-4c4a-aaab-254d1afcc516", "latest_approval_request": { "status": "decision_made" }, "approval_status": { "status": "approved" } } }`; 
``` 
### 3 - Generate iwoca hash

```
npm run start 

```
Result 
```
> iwoca-hash@1.0.0 start /Users/muratakkas/Projects/iwoca_hash
> node index.js

sha1=enb3MhDnnwqbylFQ4MsY2ujNHMc=
```
You need to copy last line to use in post man


## Simulate iwoca web hook 

### 1 - Open Postman and enter webhook url  below
 
### 2 - Set postman raw body 

### 3 - Set your hash as hader

```
key : X-IW-Signature
value :  sha1=enb3MhDnnwqbylFQ4MsY2ujNHMc=

```
You are ready


