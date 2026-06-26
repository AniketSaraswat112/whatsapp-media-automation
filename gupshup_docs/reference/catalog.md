> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Catalog

## Meta Payloads Example

```json CAPI & On-Premise
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<receipientPhoneNumber>",
  "type": "interactive",
  "interactive" : {
    "type" : "catalog_message",
    "body" : {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "catalog_message",
      "parameters": { // *Optional
        "thumbnail_product_retailer_id": "<Product-retailer-id>"
      }
    }
  }
}
```

## Response

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Status Code
      </th>

      <th style={{ textAlign: "left" }}>
        Response
      </th>

      <th style={{ textAlign: "left" }}>
        Comment
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        Success **200**
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "status": "submitted",
          "messageId": "4bed9a90-9f7a-4584-be5b-8ee1cba61a01"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Error **401**
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "message": {
            "message": "Authentication Failed"
          },
          "status": "error"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When APIKey authentication fails or apikey is not sent
      </td>
    </tr>
  </tbody>
</Table>

## Request Parameters

| Key            | Description                                          | Constraints                         |
| :------------- | :--------------------------------------------------- | :---------------------------------- |
| apikey         | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| source         | Source Phone Number                                  |                                     |
| src.name       | Source App Name                                      |                                     |
| destination    | Destination phone number                             |                                     |
| message        | Catalog message payload                              |                                     |
| channel        | Channel to send messages to                          | - Must be WhatsApp                  |
| disablePreview | Whether to disable preview of url                    |                                     |

## Message Payloads

| Key         | Description                                     | Constraints                                                         |
| :---------- | :---------------------------------------------- | :------------------------------------------------------------------ |
| type        | Message type                                    | Should be product\_detailsfor product messages                      |
| sub\_type   | Message Sub Type                                | Should be product\_detailsfor product messages                      |
| body        | Message Body Content                            |                                                                     |
| footer      | Message Footer content                          | Optional                                                            |
| thumbnailId | Product Id to be shown as Thumbnail for catalog | Should contain valid product IDs from the catalog connected to Waba |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Gupshup WhatsApp API",
    "description": "API for sending WhatsApp messages via Gupshup",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io/wa/api/v1"
    }
  ],
  "paths": {
    "/msg": {
      "post": {
        "summary": "Send WhatsApp message",
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "source": {
                    "type": "string",
                    "description": "Sender's WhatsApp number"
                  },
                  "src.name": {
                    "type": "string",
                    "description": "Name of the source application"
                  },
                  "destination": {
                    "type": "string",
                    "description": "Recipient's WhatsApp number"
                  },
                  "message": {
                    "type": "string",
                    "description": "JSON string containing message details"
                  },
                  "channel": {
                    "type": "string",
                    "enum": [
                      "whatsapp"
                    ]
                  },
                  "disablePreview": {
                    "type": "boolean",
                    "description": "Flag to disable message preview"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Message sent successfully"
          }
        },
        "parameters": [
          {
            "name": "apikey",
            "in": "header",
            "description": "API key for authentication",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content type header",
            "required": true,
            "schema": {
              "type": "string"
            }
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