> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Limited Time Offer- LTO

## cURL

```curl
curl --location '{{api_front_base_url}}/wa/api/v1/template/msg' \
--header 'apikey: {{apiKey}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source={{source phone number}}' \
--data-urlencode 'destination={{destination phone number}}' \
--data-urlencode 'src.name={{app_name}}' \
--data-urlencode 'template={"id":"{{template_id}}","params":{{template_params_list}},"expiration":{{expiration_time_in_UNIX_timestamp_in_milliseconds}} }' \
--data-urlencode 'message={{message}}' \
--data-urlencode 'postbackTexts=[{"index":"<qr_btn_index>","text":"<postback_text>"}]'
```

> 📘
>
> * Expiration must be provided for LTO templates created where `has_expiration` is true
> * Include the message object in the curl above only if the template has media. Refer image, video and document template docs to get the corresponding message payloads.
> * Omit the `postbackTexts` parameter in the curl above if the template doesn’t have quick reply buttons, or if it has but there’s no need for postback text support.

### Request Parameters

| Name   | In     | Description          | Required | Type   | Example                          |
| ------ | ------ | -------------------- | -------- | ------ | -------------------------------- |
| apikey | header | Your account API key | true     | string | 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a |

### Form Parameters

| Name        | Type   | Description                                                                        | Required | Example      |
| ----------- | ------ | ---------------------------------------------------------------------------------- | -------- | ------------ |
| source      | string | Sender Whatsapp Number                                                             | true     | 919163xxxxx3 |
| src.name    | string | App name that the source number belongs to                                         | true     | DemoApp      |
| destination | string | Receiver Whatsapp Number                                                           | true     | 917839xxxxx3 |
| template    | object | Contains template id, list of template parameters, and expiration for LTO template | true     |              |
| message     | object | Optional; required for media LTO templates                                         | false    |              |

### Object Structures

#### Template Object

| Name       | Type    | Description                                       | Required | Example               |
| ---------- | ------- | ------------------------------------------------- | -------- | --------------------- |
| id         | string  | Template ID                                       | true     | "template\_id"        |
| params     | array   | List of template parameters in LTO template       | true     | \["param1", "param2"] |
| expiration | integer | Expiration time in UNIX timestamp in milliseconds | true     | 1644912000000         |

#### Message Object

**Image Header**

| Name  | Type   | Description                       | Example             |
| ----- | ------ | --------------------------------- | ------------------- |
| type  | string | Type of message (must be "image") | image               |
| image | object | Image object containing id / link |                     |
| link  | string | Media URL of the image            | `<image_media_url>` |
| id    | string | Media ID of the image             | `<image_media_id>`  |

**Video Header**

| Name  | Type   | Description                       | Example             |
| ----- | ------ | --------------------------------- | ------------------- |
| type  | string | Type of message (must be "video") | video               |
| video | object | Video object containing id / link |                     |
| link  | string | Media URL of the video            | `<video_media_url>` |
| id    | string | Media ID of the video             | `<video_media_id>`  |

**Postback Texts**

| Name  | Type    | Description                  | Example |
| ----- | ------- | ---------------------------- | ------- |
| index | integer | Button index (0-based)       | 0       |
| text  | string  | Postback text for the button | hello   |

**Channel**

| Name    | Type   | Description             | Example  |
| ------- | ------ | ----------------------- | -------- |
| channel | string | Messaging Platform Name | whatsapp |

### Status Codes

| Status Code | Description                                       | Response Schema                                             |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------- |
| 202         | Success response                                  | `{ "status": "success", "messageId": "message id" }`        |
| 400         | Error response; in case of bad request            | `{ "status": "error", "message": "Invalid Destination" }`   |
| 401         | Error response; in case of authentication failure | `{ "status": "error", "message": "Authentication Failed" }` |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Sending LTO Template",
    "contact": {},
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/api/v1/template/msg": {
      "post": {
        "operationId": "Sending LTO Template",
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
                    "description": "contains template id and list of template parameters and expiration for LTO template",
                    "properties": {
                      "id": {
                        "type": "string",
                        "description": "Template ID",
                        "example": "template_id"
                      },
                      "params": {
                        "type": "array",
                        "description": "List of template parameters in LTO template",
                        "items": {
                          "type": "string"
                        },
                        "example": [
                          "param1",
                          "param2"
                        ]
                      },
                      "expiration": {
                        "type": "integer",
                        "description": "Expiration time in UNIX timestamp in milliseconds; must be provided where has_expiration is true",
                        "example": 1644912000000
                      }
                    }
                  },
                  "message": {
                    "type": "object",
                    "description": "optional; required for media LTO templates",
                    "oneOf": [
                      {
                        "title": "Image header",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "image"
                            ],
                            "description": "Type of message",
                            "example": "image"
                          },
                          "image": {
                            "type": "object",
                            "description": "Image object containing id / link",
                            "properties": {
                              "link": {
                                "type": "string",
                                "description": "Media URL of the image",
                                "example": "<image_media_url>"
                              },
                              "id": {
                                "type": "string",
                                "description": "Media ID of the image",
                                "example": "<image_media_id>"
                              }
                            }
                          }
                        }
                      },
                      {
                        "title": "Video header",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "video"
                            ],
                            "description": "Type of message",
                            "example": "video"
                          },
                          "video": {
                            "type": "object",
                            "description": "Video object containing id / link",
                            "properties": {
                              "link": {
                                "type": "string",
                                "description": "Media URL of the video",
                                "example": "<video_media_url>"
                              },
                              "id": {
                                "type": "string",
                                "description": "Media ID of the video",
                                "example": "<video_media_id>"
                              }
                            }
                          }
                        }
                      }
                    ]
                  },
                  "postbackTexts": {
                    "type": "array",
                    "description": "list of objects containing postback text details; include if postback text support required for quick-reply buttons",
                    "items": {
                      "type": "object",
                      "properties": {
                        "index": {
                          "type": "integer",
                          "description": "button index (0-based)",
                          "example": 0
                        },
                        "text": {
                          "type": "string",
                          "description": "postback text for the button",
                          "example": "hello"
                        }
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
          "202": {
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