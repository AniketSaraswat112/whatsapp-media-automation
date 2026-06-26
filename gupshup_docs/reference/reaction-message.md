> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Reaction

## cURL

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: {{APIKEY}}' \
--data-urlencode 'source={{SOURCE}}' \
--data-urlencode 'destination={{DESTINATION}}' \
--data-urlencode 'message={
  "type": "reaction",
  "msgId": "bb8bad1b-d92e-4b02-8fbd-fbeef979569c",
  "emoji": "😃"
}' \
--data-urlencode 'src.name={{APP_NAME}}'
```

## Sample Request

```curl
curl --location 'https://{BaseURL}/wa/api/v1/msg' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--header 'cache-control: no-cache' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918097424541' \
--data-urlencode 'destination=91735824xxxx' \
--data-urlencode 'message={
  "type": "reaction",
  "msgId": "bb8bad1b-d92e-4b02-8fbd-fbeef979569c",
  "emoji": "😃"
}' \
--data-urlencode 'src.name=TedLasso'
```

### Request Parameters

#### Header Parameters

| Parameter Name | Location | Type   | Description                    | Required | Example                          |
| -------------- | -------- | ------ | ------------------------------ | -------- | -------------------------------- |
| apikey         | Header   | string | APIKEY of your Gupshup Account | Yes      | 61b3021c97214370b341f8baaae0xxxx |

#### Form Parameters

| Parameter Name | Location | Type    | Description                      | Required | Example                       |
| -------------- | -------- | ------- | -------------------------------- | -------- | ----------------------------- |
| source         | Form     | integer | Source Phone Number              | Yes      | 918929874278                  |
| destination    | Form     | integer | Destination Phone Number         | Yes      | 918805162043                  |
| src.name       | Form     | string  | App Name                         | Yes      | august18                      |
| message        | Form     | object  | Message object (refer to schema) | Yes      | Refer to Message schema below |

### Message Object (Form Parameter)

| Property Name | Type   | Description                           | Required | Example                              |
| ------------- | ------ | ------------------------------------- | -------- | ------------------------------------ |
| type          | string | Type of session message               | Yes      | reaction                             |
| emoji         | string | Emoji                                 | No       | 😀                                   |
| msgId         | string | Message ID for which reaction is sent | Yes      | ef740cec-3352-4a81-a732-34a4b70aa709 |

### Response Parameters

| Parameter Name | Type   | Description           | Example                                                                            |
| -------------- | ------ | --------------------- | ---------------------------------------------------------------------------------- |
| status         | string | Response status       | submitted                                                                          |
| messageId      | string | Unique message ID     | 183dc8f1-7ecc-4419-895f-04fd0b1bfe07                                               |
| message        | string | Error message         | Invalid Destination, Invalid App Details, Authentication Failed, Too Many Requests |
| status         | string | Status of the request | error                                                                              |

### Status Codes

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
        \{ "status": "submitted", "messageId": "183dc8f1-7ecc-4419-895f-04fd0b1bfe07" }
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
    "title": "Outbound Reaction session message API",
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
          "Reaction message"
        ],
        "summary": "Send Reaction message",
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
        "title": "Reaction message",
        "type": "object",
        "properties": {
          "type": {
            "default": "reaction",
            "type": "string",
            "enum": [
              "reaction"
            ],
            "description": "Type of session message"
          },
          "emoji": {
            "type": "string",
            "description": "Emoji",
            "default": "reaction emoji"
          },
          "msgId": {
            "default": "ef740cec-3352-4a81-a732-34a4b70aa709",
            "type": "string",
            "description": "Message Id for which reaction should be sent"
          }
        },
        "required": [
          "type"
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