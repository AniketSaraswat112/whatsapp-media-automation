> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Text

This endpoint allows you to send text messages via the WhatsApp channel using Gupshup’s messaging API.

## cURL

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: {{APIKEY}}' \
--data-urlencode 'source={{SOURCE}}' \
--data-urlencode 'destination={{DESTINATION}}' \
--data-urlencode 'message={"type":"text",
  "text": "https://www.google.com","previewUrl":true}' \
--data-urlencode 'src.name={{APP_NAME}}'
```

## Sample Request

### Without Context

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918XXXXX541' \
--data-urlencode 'destination=917XXXXX6501' \
--data-urlencode 'message={
  "type": "text",
  "text": "https://www.google.com",
  "previewUrl": true
}' \
--data-urlencode 'src.name=TedLasso'
```

### With Context

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918XXXX4541' \
--data-urlencode 'destination=917XXXX6501' \
--data-urlencode 'message={
  "context": {
    "msgId": "ss"
  },
  "type": "text",
  "text": "https://www.google.com",
  "previewUrl": true
}' \
--data-urlencode 'src.name=TedLasso'
```

## Request Parameters

| Parameter Name | Location | Type    | Description                      | Required | Example                                                                                                               |
| -------------- | -------- | ------- | -------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| apikey         | Header   | string  | APIKEY of your Gupshup Account   | Yes      | 61b3021cXXXXbaaae0xxxx                                                                                                |
| source         | Form     | integer | Source Phone Number              | Yes      | 91XXXX78                                                                                                              |
| destination    | Form     | integer | Destination Phone Number         | Yes      | 918XXXX43                                                                                                             |
| src.name       | Form     | string  | App Name                         | Yes      | august18                                                                                                              |
| message        | Form     | object  | Message object (refer to schema) | Yes      | [Refer to Message schema below](https://docs.gupshup.io/reference/session-text-message#message-object-form-parameter) |

## Message Object (Form Parameter)

| Property Name | Type    | Description                             | Required | Example                     |
| ------------- | ------- | --------------------------------------- | -------- | --------------------------- |
| context       | object  | Message context                         | No       | \{ "msgId": "uniqueMsgId" } |
| text          | string  | Message text                            | Yes      | Welcome to Gupshup          |
| type          | string  | Type of session message                 | No       | text                        |
| previewUrl    | boolean | Enable preview if the text contains URL | No       | false                       |

## Response Parameters

| Parameter Name | Type   | Description           | Example                                                       |
| -------------- | ------ | --------------------- | ------------------------------------------------------------- |
| status         | string | Response status       | submitted, error                                              |
| messageId      | string | Unique message ID     | 183dc8XXXX04fd0b1bfe07                                        |
| message        | string | Error message         | Invalid Destination, Authentication Failed, Too Many Requests |
| status         | string | Status of the request | error                                                         |

## Sample Success Response

```json 200
{
  "status": "submitted",
  "messageId": "183dc8f1XXXX04fd0b1bfe07"
}
```

## Status Codes

<Table>
  <thead>
    <tr>
      <th>
        Status Code
      </th>

      <th>
        Description
      </th>

      <th>
        Response Schema
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        200
      </td>

      <td>
        Successful response
      </td>

      <td>
        \{ "status": "submitted", "messageId": "uuid" }
      </td>
    </tr>

    <tr>
      <td>
        400
      </td>

      <td>
        Bad Request
      </td>

      <td>
        \{ "message": "Invalid Destination", "status": "error" } <br />or <br /> \{ "message": "Invalid App Details", "status": "error" }
      </td>
    </tr>

    <tr>
      <td>
        401
      </td>

      <td>
        Authentication Failed
      </td>

      <td>
        \{ "message": "Authentication Failed", "status": "error" }
      </td>
    </tr>

    <tr>
      <td>
        429
      </td>

      <td>
        Too Many Requests
      </td>

      <td>
        \{ "message": "Too Many Requests", "status": "error" }
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Outbound text session message API",
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
        "tags": [
          "Text message"
        ],
        "summary": "Send text message",
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "required": [
                  "source",
                  "destination",
                  "src.name",
                  "message"
                ],
                "properties": {
                  "source": {
                    "type": "integer",
                    "description": "Source Phone Number",
                    "example": "918929874278"
                  },
                  "destination": {
                    "type": "integer",
                    "description": "Destination Phone Number",
                    "example": "918805162043"
                  },
                  "src.name": {
                    "type": "string",
                    "description": "App Name",
                    "example": "august18"
                  },
                  "message": {
                    "$ref": "#/components/schemas/Message"
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
            "schema": {
              "type": "string"
            },
            "description": "APIKEY of your Gupshup Account",
            "example": "61b3021c97214370b341f8baaae0xxxx",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "submitted"
                    },
                    "messageId": {
                      "type": "string",
                      "example": "183dc8f1-7ecc-4419-895f-04fd0b1bfe07"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "anyOf": [
                    {
                      "$ref": "#/components/schemas/bad_request_invalid_destination"
                    },
                    {
                      "$ref": "#/components/schemas/bad_request_invalid_app_details"
                    }
                  ]
                }
              }
            }
          },
          "401": {
            "description": "Authentication Failed",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Authentication Failed"
                    },
                    "status": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          },
          "429": {
            "description": "Too Many Requests",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Too Many Requests"
                    },
                    "status": {
                      "type": "string",
                      "example": "error"
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
  "components": {
    "schemas": {
      "Message": {
        "title": "Text message",
        "type": "object",
        "properties": {
          "context": {
            "type": "object",
            "properties": {
              "msgId": {
                "type": "string"
              }
            }
          },
          "text": {
            "type": "string",
            "default": "Welcome to Gupshup",
            "description": "Message text"
          },
          "type": {
            "default": "text",
            "type": "string",
            "description": "Type of session message"
          },
          "previewUrl": {
            "default": false,
            "type": "boolean",
            "description": "Enable preview if the text contains URL"
          }
        },
        "required": [
          "text"
        ]
      },
      "bad_request_invalid_destination": {
        "title": "Invalid Destination",
        "type": "object",
        "properties": {
          "message": {
            "type": "string",
            "example": "Invalid Destination"
          },
          "status": {
            "type": "string",
            "example": "error"
          }
        }
      },
      "bad_request_invalid_app_details": {
        "title": "Invalid App details",
        "type": "object",
        "properties": {
          "message": {
            "type": "string",
            "example": "Invalid App Details"
          },
          "status": {
            "type": "string",
            "example": "error"
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