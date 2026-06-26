> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Multi Product Message

## Meta Payloads Example

```json CAPI
{
 "messaging_product": "whatsapp",
   "recipient_type": "individual",
   "to": "PHONE_NUMBER",
   "type": "interactive",
   "interactive": {
     "type": "product_list",
     "header":{
       "type": "text",
       "text": "header-content"
     },
     "body": {
       "text": "body-content"
     },
     "footer": {
       "text": "footer-content"
     },
     "action": {
       "catalog_id": "CATALOG_ID",
       "sections": [
         {
           "title": "section-title",
           "product_items": [
             { "product_retailer_id": "product-SKU-in-catalog" },
             { "product_retailer_id": "product-SKU-in-catalog" }
           ]
         },
         {
           "title": "section-title",
           "product_items": [
             { "product_retailer_id": "product-SKU-in-catalog" },
             { "product_retailer_id": "product-SKU-in-catalog" }
           ]
         }
       ]
     }
   }
 }
```

```json On-Premise
{ 
  "recipient_type": "individual",
  "to" : "whatsapp-id",
  "type": "interactive",
  "interactive": 
    {
    "type": "product_list",
    "Header":{
       "type": "text",
        "text": "text-header-content"
     },
     "body":{
        "text": "text-body-content"
      },
     "footer":{
        "text":"text-footer-content"
     },
     "action":{
        "catalog_id":"catalog-id",
        "sections": [
             {
             "title": "section-title",             
             "product_items": [
                  { "product_retailer_id": "product-SKU-in-catalog" },
                  { "product_retailer_id": "product-SKU-in-catalog" }
              ]},
              {
              "title": "the-section-title",
              "product_items": [
                 { "product_retailer_id": "product-SKU-in-catalog" }
              ]}
       ]
     }  
    }
}
```

## Request Parameters

| Key         | Description                                          | Constraints                         |
| :---------- | :--------------------------------------------------- | :---------------------------------- |
| apikey      | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| source      | Source Phone Number                                  |                                     |
| src.name    | Source App Name                                      |                                     |
| destination | Destination phone number                             |                                     |
| message     | Catalog message payload                              |                                     |
| channel     | Channel to send messages to                          | - Must be WhatsApp                  |

## Message Payload

| Key       | Description                                        | Constraints                                                         |
| :-------- | :------------------------------------------------- | :------------------------------------------------------------------ |
| type      | Message type                                       | Should be product\_detailsfor product messages                      |
| sub\_type | Message Sub Type                                   | Should be product\_detailsfor product messages                      |
| Header    | Message header content                             |                                                                     |
| body      | Message Body Content                               |                                                                     |
| footer    | Message Footer content                             | Optional                                                            |
| section   | Sections of product to use in multiproduct catalog | Should contain valid product IDs from the catalog connected to Waba |

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
                  "channel": {
                    "type": "string",
                    "enum": [
                      "whatsapp"
                    ]
                  },
                  "source": {
                    "type": "string",
                    "description": "Sender's WhatsApp number"
                  },
                  "destination": {
                    "type": "string",
                    "description": "Recipient's WhatsApp number"
                  },
                  "message": {
                    "type": "string",
                    "description": "JSON string containing message details"
                  },
                  "src.name": {
                    "type": "string",
                    "description": "Name of the source application"
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
          "name": "content-type",
          "in": "header",
          "description": "Content type header",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ]
    }
  },
  "x-readme": {
    "explorer-enabled": true,
    "proxy-enabled": true
  }
}
```