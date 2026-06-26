> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Quick Replies

This endpoint allows you to send quick reply messages via the WhatsApp channel using Gupshup’s messaging API.

## cURL

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: {{APIKEY}}' \
--data-urlencode 'source={{SOURCE}}' \
--data-urlencode 'destination={{DESTINATION}}' \
--data-urlencode 'message={
	"type":"quick_reply",
	"msgid":"{{POSTBACK_TRACKING_ID}}",
	"content":{
		"type":"{{QUICK_REPLY_TYPE}}",
		"text":"{{BODY_CONTENT}}",
		"url":"{{HEADER_MEDIA_URL}}",
		"caption":"{{FOOTER}}",
		"header":"{{HEADER_TEXT}}",
		"filename":"{{FILE_NAME}}"
	},
	"options":[
		{
			"title":"{{BUTTON_TITLE}}",
			"postbackText":"{{POSTBACK_TRACKING_TEXT}}"
		}
	]
}' \
--data-urlencode 'src.name={{APP_NAME}}'
```

## Sample Requests- Quick Replies

```curl Text
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--header 'cache-control: no-cache' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918097424541' \
--data-urlencode 'destination=91735824xxxx' \
--data-urlencode 'message={
	"type":"quick_reply",
	"content":{
		"type":"text",
		"text":"body",
		"caption":"footer",
		"header":"header"
	},
	"options":[
		{
			"title":"button title 1",
			"postbackText":"tracking text"
		}
	]
}' \
--data-urlencode 'src.name=TedLasso'
```

```curl File
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--header 'cache-control: no-cache' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918097424541' \
--data-urlencode 'destination=91735824xxxx' \
--data-urlencode 'message={
	"type":"quick_reply",
	"content":{
		"type":"file",
		"text":"body",
		"caption":"footer",
		"url":"https://www.clickdimensions.com/links/TestPDFfile.pdf",
		"filename":"sample"
	},
	"options":[
		{
			"title":"button title 1",
			"postbackText":"tracking text"
		}
	]
}' \
--data-urlencode 'src.name=TedLasso'
```

```curl Image
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--header 'cache-control: no-cache' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918097424541' \
--data-urlencode 'destination=91735824xxxx' \
--data-urlencode 'message={
	"type":"quick_reply",
	"content":{
		"type":"image",
		"text":"body",
		"caption":"footer",
		"url":"https://picsum.photos/200"
	},
	"options":[
		{
			"title":"button title 1",
			"postbackText":"tracking text"
		}
	]
}' \
--data-urlencode 'src.name=TedLasso'
```

```curl Video
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--header 'cache-control: no-cache' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=918097424541' \
--data-urlencode 'destination=91735824xxxx' \
--data-urlencode 'message={
	"type":"quick_reply",
	"content":{
		"type":"video",
		"text":"body",
		"caption":"footer",
		"url":"https://file-examples.com/storage/fe3cb26995666504a8d6180/2017/04/file_example_MP4_480_1_5MG.mp4"
	},
	"options":[
		{
			"title":"button title 1",
			"postbackText":"tracking text"
		}
	]
}' \
--data-urlencode 'src.name=TedLasso'
```

## Header Parameters

| Parameter | Type   | Required | Description                 | Example                            |
| --------- | ------ | -------- | --------------------------- | ---------------------------------- |
| `apikey`  | string | Yes      | API key for Gupshup account | `61b3021c97214370b341f8baaae0xxxx` |

## Body Parameters

| Parameter     | Type    | Required | Description                                                                                   | Example       |
| ------------- | ------- | -------- | --------------------------------------------------------------------------------------------- | ------------- |
| `source`      | integer | Yes      | Source phone number                                                                           | `918XXXX4278` |
| `destination` | integer | Yes      | Destination phone number                                                                      | `918XXXX2043` |
| `src.name`    | string  | Yes      | App name                                                                                      | `august18`    |
| `message`     | object  | Yes      | Message details ([see below](https://docs.gupshup.io/reference/quick-replies#message-object)) |               |

### Message Object

The `message` object follows the schema below.

| Field     | Type   | Required | Description                   | Example                                                                                    |
| --------- | ------ | -------- | ----------------------------- | ------------------------------------------------------------------------------------------ |
| `type`    | string | Yes      | Type of session message       | `quick_reply`                                                                              |
| `msgid`   | string | No       | Tracking ID for postback text | `QR123456789`                                                                              |
| `content` | object | Yes      | Content of the message        | [See content schema below](https://docs.gupshup.io/reference/quick-replies#content-object) |
| `options` | array  | Yes      | Quick reply options (up to 3) |                                                                                            |

### Content Object

The `content` object contains the body and media of the message.

| Field      | Type   | Required | Description               | Example                        |
| ---------- | ------ | -------- | ------------------------- | ------------------------------ |
| `type`     | string | Yes      | Content type              | `text`                         |
| `text`     | string | Yes      | Body of the message       | `Hello from Gupshup Team`      |
| `url`      | string | No       | URL of the media header   | `https://example.com/file.jpg` |
| `caption`  | string | No       | Footer text               | `Check this out!`              |
| `filename` | string | No       | Name of the file attached | `file.jpg`                     |

### Options (Quick Reply)

Each option in the `options` array allows users to respond with a pre-defined message.

| Field          | Type   | Required | Description                               | Example            |
| -------------- | ------ | -------- | ----------------------------------------- | ------------------ |
| `title`        | string | Yes      | Title of the quick reply button           | `Yes`              |
| `postbackText` | string | No       | Text sent back when the option is clicked | `User clicked Yes` |

## Responses

### Success (200 OK)

On success, the API returns a status of `submitted` along with a unique `messageId` for tracking purposes.

| Field       | Type   | Description            | Example               |
| ----------- | ------ | ---------------------- | --------------------- |
| `status`    | string | Status of the message  | `submitted`           |
| `messageId` | string | ID of the sent message | `183dc8f1-xxxx4fxxx7` |

### Success Response

```json
{
  "status": "submitted",
  "messageId": "183dc8xxxxxxxxxxxxb1bfe07"
}
```

### Error Responses

#### 400 Error

```json
{
  "message": "Invalid Destination",
  "status": "error"
}
```

This response indicates invalid input, such as an incorrect phone number or app details.

| Field     | Type   | Description         | Example               |
| --------- | ------ | ------------------- | --------------------- |
| `message` | string | Error message       | `Invalid Destination` |
| `status`  | string | Status of the error | `error`               |

#### 401 Unauthorized

```json
{
  "message": "Authentication Failed",
  "status": "error"
}
```

This response occurs when authentication fails due to an invalid API key.

| Field     | Type   | Description         | Example                 |
| --------- | ------ | ------------------- | ----------------------- |
| `message` | string | Error message       | `Authentication Failed` |
| `status`  | string | Status of the error | `error`                 |

#### 429 Too Many Requests

```json
{
  "message": "Too Many Requests",
  "status": "error"
}
```

This response indicates the rate limit has been exceeded.

| Field     | Type   | Description         | Example             |
| --------- | ------ | ------------------- | ------------------- |
| `message` | string | Error message       | `Too Many Requests` |
| `status`  | string | Status of the error | `error`             |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Outbound Quick Reply session message API",
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
          "Quick reply message"
        ],
        "summary": "Send QR message",
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
        "title": "QR message",
        "type": "object",
        "properties": {
          "type": {
            "default": "quick_reply",
            "type": "string",
            "enum": [
              "quick_reply"
            ],
            "description": "Type of session message"
          },
          "msgid": {
            "type": "string",
            "description": "tracking id for postback text"
          },
          "content": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "default": "text",
                "enum": [
                  "text",
                  "file",
                  "image",
                  "video"
                ]
              },
              "text": {
                "type": "string",
                "default": "Hello from Gupshup Team",
                "description": "Body of the message"
              },
              "url": {
                "type": "string",
                "description": "URL of the media header"
              },
              "caption": {
                "type": "string",
                "description": "Footer text"
              },
              "filename": {
                "type": "string",
                "description": "Name of the header file"
              }
            },
            "required": [
              "type",
              "text"
            ]
          },
          "options": {
            "type": "array",
            "maxItems": 3,
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "description": "Title of the button"
                },
                "postbackText": {
                  "type": "string",
                  "description": "Text to be returned in the postback"
                }
              },
              "required": [
                "title"
              ]
            }
          }
        },
        "required": [
          "type",
          "content",
          "options"
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