> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Catalog

## cURL

```curl
curl --location '{{api_front_base_url}}/wa/api/v1/raw/msg' \
--header 'apikey: {{apiKey}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source={{source phone number}}' \
--data-urlencode 'destination={{destination phone number}}' \
--data-urlencode 'src.name={{app_name}}' \
--data-urlencode 'template={"id":"`<template_id>`","params":[`<list_of_template_parameters>`]}'
```

> 📘
>
> * Sending MPM templates not supported via Gupshup UI.
> * The `template.params` list must include the thumbnail product retailer id as the last parameter

### Request Parameters

| Name   | In     | Description          | Required | Type   | Example                          |
| ------ | ------ | -------------------- | -------- | ------ | -------------------------------- |
| apikey | header | Your account API key | true     | string | 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a |

***

### Form Parameters

| Name        | Type   | Description                                          | Required | Example      |
| ----------- | ------ | ---------------------------------------------------- | -------- | ------------ |
| source      | string | Sender WhatsApp Number                               | true     | 919163xxxxx3 |
| src.name    | string | App name that the source number belongs to           | true     | DemoApp      |
| destination | string | Receiver WhatsApp Number                             | true     | 917839xxxxx3 |
| template    | object | Contains template ID and list of template parameters | true     |              |
| channel     | string | Messaging Platform Name                              | true     | whatsapp     |

#### Template Object

| Name   | Type   | Description                                                                                                 | Required | Example              |
| ------ | ------ | ----------------------------------------------------------------------------------------------------------- | -------- | -------------------- |
| id     | string | Template ID                                                                                                 | true     | "template\_id"       |
| params | array  | List of template parameters; should also contain the thumbnail\_product\_retailer\_id as the last parameter | true     | \["hi","di3i7rs6js"] |

***

### Status Codes

| Status Code | Description                                       | Response Schema                                             |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------- |
| 200         | Success response                                  | `{ "status": "success", "messageId": "message id" }`        |
| 400         | Error response; in case of bad request            | `{ "status": "error", "message": "Invalid Destination" }`   |
| 401         | Error response; in case of authentication failure | `{ "status": "error", "message": "Authentication Failed" }` |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Sending Catalog Template",
    "contact": {},
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/api/v1/raw/msg": {
      "post": {
        "operationId": "Sending Catalog Template",
        "parameters": [
          {
            "name": "apikey",
            "in": "header",
            "description": "Your account API key",
            "required": true,
            "style": "simple",
            "schema": {
              "type": "string",
              "example": "2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "required": [
                  "source",
                  "src.name",
                  "destination",
                  "template"
                ],
                "properties": {
                  "source": {
                    "type": "string",
                    "description": "Sender Whatsapp Number",
                    "example": "919163xxxxx3"
                  },
                  "src.name": {
                    "type": "string",
                    "description": "App name that the source number belongs to",
                    "example": "DemoApp"
                  },
                  "destination": {
                    "type": "string",
                    "description": "Receiver Whatsapp Number",
                    "example": "917839xxxxx3"
                  },
                  "template": {
                    "type": "object",
                    "description": "contains template id and list of template parameters",
                    "properties": {
                      "id": {
                        "type": "string",
                        "description": "Template ID",
                        "example": "template_id"
                      },
                      "params": {
                        "type": "array",
                        "description": "List of template parameters; should also contain the thumbnail_product_retailer_id as the last parameter",
                        "items": {
                          "type": "string"
                        },
                        "example": [
                          "hi",
                          "di3i7rs6js"
                        ]
                      }
                    }
                  },
                  "channel": {
                    "type": "string",
                    "description": "Messaging Platform Name",
                    "example": "whatsapp"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "messageId": {
                      "type": "string",
                      "description": "message id for the template message sent",
                      "example": "message id"
                    },
                    "status": {
                      "type": "string",
                      "description": "Status of the response",
                      "enum": [
                        "success"
                      ]
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Error response; in case of bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "description": "error message",
                      "example": "Invalid Destination"
                    },
                    "status": {
                      "type": "string",
                      "description": "Status of the response",
                      "enum": [
                        "error"
                      ]
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Error response; in case of authentication failure",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "description": "error message",
                      "example": "Authentication Failed"
                    },
                    "status": {
                      "type": "string",
                      "description": "Status of the response",
                      "enum": [
                        "error"
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "x-readme": {
    "explorer-enabled": true,
    "proxy-enabled": true
  }
}
```