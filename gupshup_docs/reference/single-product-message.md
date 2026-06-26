> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Single Product Message

## Meta Payloads Example

```json CAPI
{
   "messaging_product": "whatsapp",
   "recipient_type": "individual",
   "to": "PHONE_NUMBER",
   "type": "interactive",
   "interactive": {
     "type": "product",
     "body": {
       "text": "optional body text"
     },
     "footer": {
       "text": "optional footer text"
     },
     "action": {
       "catalog_id": "CATALOG_ID",
       "product_retailer_id": "ID_TEST_ITEM_1"
     }
   }
 }
```

```json On-Premise
{ 
  "recipient_type": "individual",
  "to" : "{{Recipient-WA-ID}}",
  "type": "interactive",
  "interactive": {
    "type": "product",
    "body": {
      "text": "body text"
    },
    "footer": {
      "text": "footer text"
    },
    "action": {
      "catalog_id": "catalog-ID",
      "product_retailer_id": "product-ID"
    }
  }
}
```

## Response

<table>
  <thead>
    <tr>
      <th>Status Code</th>
      <th>Response</th>
      <th>Comment</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><p>Success <strong>200</strong> </p></td>
      <td><p>\{<br />    "status": "submitted",<br />    "messageId": "4bed9a90-9f7a-4584-be5b-8ee1cba61a01"<br />}</p></td>

      <td />
    </tr>

    <tr>
      <td><p>Error <strong>401</strong></p></td>
      <td><p>\{<br />    "message": \{<br />        "message": "Authentication Failed"<br />    },<br />    "status": "error"<br />}</p></td>
      <td><p>When APIKey authentication fails or apikey is not sent</p></td>
    </tr>
  </tbody>
</table>

## Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Key
      </th>

      <th>
        Description
      </th>

      <th>
        Constraints
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        apikey
      </td>

      <td>
        Apikey of the account where the app is to be created
      </td>

      <td>
        Should be a valid gupshup.io apikey
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        Source Phone Number
      </td>

      <td />
    </tr>

    <tr>
      <td>
        src.name
      </td>

      <td>
        Source App Name
      </td>

      <td />
    </tr>

    <tr>
      <td>
        destination
      </td>

      <td>
        Destination phone number
      </td>

      <td />
    </tr>

    <tr>
      <td>
        message
      </td>

      <td>
        Catalog message payload
      </td>

      <td />
    </tr>

    <tr>
      <td>
        channel
      </td>

      <td>
        Channel to send messages to
      </td>

      <td>
        * Must be whatsapp
      </td>
    </tr>
  </tbody>
</Table>

## Message Payload

| Key       | Description                           | Constraints                                                     |
| :-------- | :------------------------------------ | :-------------------------------------------------------------- |
| type      | Message type                          | Should be product\_detailsfor product messages                  |
| sub\_type | Message Sub Type                      | Should be product\_detailsfor product messages                  |
| body      | Message Body content                  |                                                                 |
| footer    | Message Footer content                | Optional                                                        |
| catalogId | Id of catalog to use the product from | Should be a valid catalog id from the catalog connected to Waba |
| productId | Id of product to be used              | Should be a valid product id from the catalog connected to Waba |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Send Single Product Message",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/api/v1/msg": {
      "post": {
        "summary": "Send Message",
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "channel": {
                    "type": "string"
                  },
                  "source": {
                    "type": "string"
                  },
                  "destination": {
                    "type": "string"
                  },
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Message sent successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "description": "Status of the message sending process"
                    },
                    "message": {
                      "type": "string",
                      "description": "Additional message details"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "apikey",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "API key for authentication",
            "example": "{{api_key}}"
          },
          {
            "name": "content-type",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "Content type of the request body",
            "example": "application/x-www-form-urlencoded"
          }
        ]
      }
    }
  },
  "x-readme": {
    "explorer-enabled": true,
    "proxy-enabled": true
  }
}
```