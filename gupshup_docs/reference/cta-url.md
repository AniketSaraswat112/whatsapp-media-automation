> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# CTA URL Message

## cURL

```curl
curl --location --request POST '{{wa_base_url}}/wa/api/v1/msg' \
--header 'apikey: {{API_KEY}}' \
--header 'X-GS: header12,3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source={{SOURCE_NUMBER}}' \
--data-urlencode 'src.name={{SOURCE_NAME}}' \
--data-urlencode 'destination={{DESTINATION}}' \
--data-urlencode 'message={{message}}' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'disablePreview={{true/false}}' \
--data-urlencode 'bypassCheck={{true/false}}'
```

### Headers

| Key    | Value               | Description                    |
| ------ | ------------------- | ------------------------------ |
| apikey | `your_api_key_here` | APIKEY of your Gupshup Account |

### Form Parameters

| Parameter   | Type    | Required | Description              |
| ----------- | ------- | -------- | ------------------------ |
| source      | integer | Yes      | Source Phone Number      |
| destination | integer | Yes      | Destination Phone Number |
| src.name    | string  | No       | Valid app Name           |
| message     | object  | Yes      | Message object           |

#### `Message` Object Structure

| Parameter     | Type   | Required | Description             |
| ------------- | ------ | -------- | ----------------------- |
| body          | string | Yes      | Message text            |
| type          | string | Yes      | URL button type         |
| display\_text | string | Yes      | CTA button display name |
| url           | string | Yes      | URL of the CTA button   |
| footer        | string | No       | Footer for the message  |
| header        | object | No       | Header object           |

##### `Header` Object Structure

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| type      | string | Yes      | The type can be image or video           |
| image     | object | No       | Image object (required if type is image) |
| video     | object | No       | Video object (required if type is video) |

### Responses

#### 200 OK

```json
{
  "status": "submitted",
  "messageId": "183dc8f1-7ecc-4419-895f-04fd0b1bfe07"
}
```

#### 400 Bad Request

```json
{
  "message": "Invalid Destination",
  "status": "error"
}
```

or

```json
{
  "message": "Invalid App Details",
  "status": "error"
}
```

#### 401 Authentication Failed

```json
{
  "message": "Authentication Failed",
  "status": "error"
}
```

#### 429 Too Many Requests

```json
{
  "message": "Too Many Requests",
  "status": "error"
}
```

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Outbound CTA session message API",
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
          "CTA URL message"
        ],
        "summary": "Send CTA URL message",
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "required": [
                  "source",
                  "destination",
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
        "title": "cta message",
        "type": "object",
        "properties": {
          "body": {
            "type": "string",
            "default": "Welcome to Gupshup",
            "description": "Message text"
          },
          "type": {
            "default": "cta_url",
            "type": "string",
            "description": "url button"
          },
          "display_text": {
            "default": "Click Me!",
            "type": "string",
            "description": "CTA button display name"
          },
          "url": {
            "type": "string",
            "default": "https://www.gupshup.io",
            "description": "url of the cta button"
          },
          "footer": {
            "type": "string",
            "default": "Thank you",
            "description": "footer for the message"
          },
          "header": {
            "title": "header",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "default": "video",
                "description": "type can be image or video"
              },
              "video": {
                "type": "object",
                "properties": {
                  "link": {
                    "type": "string",
                    "default": "https://www.buildquickbots.com/whatsapp/media/sample/video/sample01.mp4",
                    "description": "video link"
                  }
                }
              }
            }
          }
        }
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