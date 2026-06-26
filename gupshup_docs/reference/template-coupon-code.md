> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Coupon Code

## cURL

```curl
curl --location '{{api_front_base_url}}/wa/api/v1/template/msg' \
--header 'apikey: {{apiKey}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source={{source phone number}}' \
--data-urlencode 'destination={{destination phone number}}' \
--data-urlencode 'src.name={{app_name}}' \
--data-urlencode 'template={"id":"<template_id>","params":[<list_of_template_parameters>]}' \
--data-urlencode 'message={{message}}' \
--data-urlencode 'postbackTexts=[{"index":<qr_btn_index>,"text":"<postback_text>"}]'
```

> 📘
>
> * Include the message object in the curl above only if the template has media.\
>   Refer image, video and document template docs to get the corresponding message payloads.\* Omit the postbackTexts parameter in the curl above if the template doesn’t have quick reply buttons, or if it has but there’s no need for postback text support.

### Request Parameters

| Parameter | Location | Type   | Description          | Example                          |
| --------- | -------- | ------ | -------------------- | -------------------------------- |
| apikey    | Header   | string | Your account API key | 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a |

### Form Parameters (Request Body)

| Parameter     | Type   | Required | Description                                                                     | Example                          |
| ------------- | ------ | -------- | ------------------------------------------------------------------------------- | -------------------------------- |
| source        | string | Yes      | Sender WhatsApp Number                                                          | 919163xxxxx3                     |
| src.name      | string | Yes      | App name that the source number belongs to                                      | DemoApp                          |
| destination   | string | Yes      | Receiver WhatsApp Number                                                        | 917839xxxxx3                     |
| template      | object | Yes      | Contains template id and list of template parameters, including the coupon code | See below for detailed structure |
| message       | object | No       | Optional; required for media templates                                          | See below for detailed structure |
| postbackTexts | array  | No       | List of objects containing postback text details                                | See below for detailed structure |
| channel       | string | No       | Messaging Platform Name                                                         | whatsapp                         |

#### `template` object structure:

| Field  | Type   | Description                                                              | Example      |
| ------ | ------ | ------------------------------------------------------------------------ | ------------ |
| id     | string | Template ID                                                              | template\_id |
| params | array  | List of template parameters; MUST include the coupon code value in order | \["125OFF"]  |

#### `message` object structure:

| Field    | Type   | Description                          | Example                          |
| -------- | ------ | ------------------------------------ | -------------------------------- |
| type     | string | Type of message                      | image / video / document         |
| image    | object | Image object containing id / link    | See below for detailed structure |
| video    | object | Video object containing id / link    | See below for detailed structure |
| document | object | Document object containing id / link | See below for detailed structure |

##### `image` object structure:

| Field | Type   | Description            | Example                |
| ----- | ------ | ---------------------- | ---------------------- |
| link  | string | Media URL of the image | "\<image\_media\_url>" |
| id    | string | Media ID of the image  | "\<image\_media\_id>"  |

##### `video` object structure:

| Field | Type   | Description            | Example                |
| ----- | ------ | ---------------------- | ---------------------- |
| link  | string | Media URL of the video | "\<video\_media\_url>" |
| id    | string | Media ID of the video  | "\<video\_media\_id>"  |

##### `document` object structure:

| Field    | Type   | Description                                     | Example                   |
| -------- | ------ | ----------------------------------------------- | ------------------------- |
| link     | string | Media URL of the document                       | "\<document\_media\_url>" |
| id       | string | Media ID of the document                        | "\<document\_media\_id>"  |
| filename | string | Name of the document file to be shown; optional | "temp.pdf"                |

#### `postbackTexts` object structure:

| Field | Type    | Description                  | Example |
| ----- | ------- | ---------------------------- | ------- |
| index | integer | Button index (0-based)       | 0       |
| text  | string  | Postback text for the button | hello   |

### Status Codes

| Status Code | Description                                       | Response Body                                               |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------- |
| 202         | Success response                                  | `{ "messageId": "message id", "status": "success" }`        |
| 400         | Error response; in case of bad request            | `{ "message": "Invalid Destination", "status": "error" }`   |
| 401         | Error response; in case of authentication failure | `{ "message": "Authentication Failed", "status": "error" }` |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Sending Coupon Code Template",
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
        "operationId": "Sending Coupon Code Template",
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
                    "description": "contains template id and list of template parameters, including the coupon code",
                    "properties": {
                      "id": {
                        "type": "string",
                        "description": "Template ID",
                        "example": "template_id"
                      },
                      "params": {
                        "type": "array",
                        "description": "List of template parameters; MUST include the coupon code value in order",
                        "items": {
                          "type": "string"
                        },
                        "example": [
                          "125OFF"
                        ]
                      }
                    }
                  },
                  "message": {
                    "type": "object",
                    "description": "optional; required for media templates",
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
                      },
                      {
                        "title": "Document header",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "document"
                            ],
                            "description": "Type of message",
                            "example": "document"
                          },
                          "document": {
                            "type": "object",
                            "description": "Document object containing id / link",
                            "properties": {
                              "link": {
                                "type": "string",
                                "description": "Media URL of the document",
                                "example": "<document_media_url>"
                              },
                              "id": {
                                "type": "string",
                                "description": "Media ID of the document",
                                "example": "<document_media_id>"
                              },
                              "filename": {
                                "type": "string",
                                "description": "name of the document file to be shown; optional",
                                "example": "temp.pdf"
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