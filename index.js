const privateKey = "123";
const body = `{ "data": { "state_key": "2307ecab-6f8c-4c4a-aaab-254d1afcc516", "latest_approval_request": { "status": "decision_made" }, "approval_status": { "status": "approved" } } }`;
const hashedValue = require("crypto")
  .createHmac("sha1", privateKey)
  .update(body)
  .digest("base64");

const generatedSignature = `sha1=${hashedValue}`;

console.log(generatedSignature);
