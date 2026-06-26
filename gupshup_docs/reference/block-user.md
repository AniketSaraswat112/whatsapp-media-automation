> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Block User

**Description**\
This API allows businesses to block WhatsApp users from contacting them further. Blocking a user prevents them from sending new messages to your WhatsApp Business Account, and your business will also be unable to send messages to the user.

**Note**:

* You can only block users who have messaged your business in the last 24 hours.
* There is a 64,000 user blocklist limit per WhatsApp Business Account.

<br />

## cURL Request

```curl
curl --location 'https://api.gupshup.io/wa/app/{{appId}}/user/block' \
--header 'apikey: {{apiKey}}' \
--header 'Content-Type: application/json' \
--data '{
    "messaging_product": "whatsapp",
    "block_users": [
        {
            "user": "919876543210"
        }
    ]
}'
```

## Request Parameters

| Key             | Description      | Constraints                         |
| :-------------- | :--------------- | :---------------------------------- |
| **Headers**     |                  |                                     |
| apikey          | Apikey of app    | Should be a valid gupshup.io apikey |
| **Path Params** |                  |                                     |
| appId           | appId of the app | Should be a valid appId             |

## Response Parameters

| Key    | Description                     | Constraints |
| :----- | :------------------------------ | :---------- |
| input  | Phone number of a WhatsApp user |             |
| wa\_id | Unique ID of a WhatsApp user    |             |

## Status Codes

<Table align={["left", "left", "left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Status Code
      </th>

      <th style={{ textAlign: "left" }}>
        Response
      </th>

      <th style={{ textAlign: "left" }}>
        Comments
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        **Success**
      </td>

      <td style={{ textAlign: "left" }} />

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        200
      </td>

      <td style={{ textAlign: "left" }}>
        ```
          { 
          "block_users": { 
          "added_users": [ 
          { 
          "input": "919163805873", 
          "wa_id": "919163805873" 
          } 
          ] 
          },
          "messaging_product": "whatsapp",
          "status": "success" 
          }
        ```
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Error**
      </td>

      <td style={{ textAlign: "left" }} />

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        400
      </td>

      <td style={{ textAlign: "left" }}>
        ```
          {  
          "messaging_product": "whatsapp",  
          "block_users": {  
          "added_users": [  
          {  
          "input": "`<PHONE_NUMBER>` or `<WA_ID>`",  
          "wa_id": "`<WA_ID>`"  
          },  
          {  
          "input": "`<PHONE_NUMBER>` or `<WA_ID>`",  
          "wa_id": "`<WA_ID>`"  
          },  
          ...  
          ],  
          "failed_users": [  
          {  \
          "input": "`<PHONE_NUMBER>` or `<WA_ID>`",  
          "wa_id": "`<WA_ID>`"  
          },  
          {  
          "input": "`<PHONE_NUMBER>` or `<WA_ID>`",  
          "wa_id": "`<WA_ID>`"  
          },  
          ...  
          "errors": [{  
          "message": "`<MESSAGE>`",  
          "code": "`<CODE>`",  
          "error_data": {  
          "details": "`<DETAILS>`"  
          }]  
          }  
          ]  
          },  
          "error": {  
          "message": "(#139100) Failed to block/unblock users",  
          "type": "OAuthException",  
          "code": 139100,  
          "error_data": {  
          "details": "Failed to block some users, see the block_users response list for details"  
          },  
          "fbtrace_id": "`<FBTRACE_ID>`"  
          }
        ```
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        401
      </td>

      <td style={{ textAlign: "left" }}>
        ```
          {  
          "message": "Authentication Failed",  
          "status": "error"  
          }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When API authentication fails.
      </td>
    </tr>
  </tbody>
</Table>

<br />

## Common Error Codes

| Code   | Description                           |
| :----- | :------------------------------------ |
| 139100 | Failed to block/unblock some users    |
| 131047 | Re-engagement required (24-hour rule) |
| 139101 | Blocklist limit reached               |
| 130429 | Rate limit hit                        |