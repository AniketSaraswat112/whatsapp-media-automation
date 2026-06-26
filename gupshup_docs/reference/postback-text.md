> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Postback Text Support

Allow users to add postback text to quick reply buttons in template send message API.

## cURL Request

```curl
curl --location '{{api_front_base_url}}/wa/api/v1/template/msg' \
--header 'apikey: {{apiKey}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source={{source phone number}}' \
--data-urlencode 'destination={{destination phone number}}' \
--data-urlencode 'src.name={{app_name}}' \
--data-urlencode 'template={{template}}' \
--data-urlencode 'message={{message}}' \
--data-urlencode 'postbackTexts={{[{"index":3,"text":"hello"}]}}'

```

## Response

### Success

```json Success Response 202
{
  "status": "submitted",
  "messageId": "3867730a-bb97-4ea5-bad6-e6e34201ce89"
}
```

### Error

When API authentication fails.

```json Error Response 401
{
  "message": "Authentication Failed",
  "status": "error"
}
```

## Expected Response On Callback

```json
{
    "app": "<APP_NAME>",
    "phone": "<APP_PHONE_NUMBER>",
    "timestamp": 1712230664720,
    "version": 2,
    "type": "message",
    "payload": {
        "id": "<MESSAGE_ID>",
        "source": "<PHONE_NUMBER>",
        "type": "quick_reply",
        "payload": {
            "text": "<BUTTON_TEXT>",
            "type": "button",
            "postbackText": "<POSTBACK_TEXT>"
        },
        "sender": {
            "phone": "<SENDER_PHONE>",
            "name": "<SENDER_NAME>",
            "country_code": "91",
            "dial_code": "<SENDER_PHONE>"
        },
        "context": {
            "id": "<MESSAGE_ID>",
            "forwarded": false,
            "frequently_forwarded": false
        }
    }
}

```

## Request Parameters

### Header

| Header     | Description                                           | Constraints                            |
| :--------- | :---------------------------------------------------- | :------------------------------------- |
| **apikey** | Apikey of the account where the app is to be created. | It should be a valid gupshup.io apikey |

### Form Parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **source**
      </td>

      <td>
        Source Phone Number
      </td>

      <td>
        `+1234567890`
      </td>
    </tr>

    <tr>
      <td>
        **destination**
      </td>

      <td>
        Destination Phone Number
      </td>

      <td>
        `+0987654321`
      </td>
    </tr>

    <tr>
      <td>
        **src.name**
      </td>

      <td>
        App Name
      </td>

      <td>
        `MyApp`
      </td>
    </tr>

    <tr>
      <td>
        **channel**
      </td>

      <td>
        Channel
      </td>

      <td>
        `whatsapp`
      </td>
    </tr>

    <tr>
      <td>
        **template**
      </td>

      <td>
        JSON containing template details.
      </td>

      <td>
        All parameters in the main message bubble and cards must be in the params array in order.

        ```
        {
          "id": "\<template_id>",
          "params": [  
            <list_of_template_parameters>  
          ]
        }
        ```
      </td>
    </tr>

    <tr>
      <td>
        **message**
      </td>

      <td>
        Message
      </td>

      <td>
        For the carousel, message JSON and the media ID/link will also contain the postbackTexts here index is the button index (starts from 0) and text is the postback text for that button.

        ```
        {
          "type": "carousel",
          "cardHeaderType": "\<IMAGE/VIDEO>",
          "cards": \[
            {
              "id/link": "\<image_id or image_link/video_id or video_link>",
              "postbackTexts":[{"index":0,"text":"hello"}]
            },
          ]
        }
        ```
      </td>
    </tr>

    <tr>
      <td>
        **postbackTexts**
      </td>

      <td>
        Postback Texts for quick reply buttons
      </td>

      <td>
        ```
        [  
          {  
            "index": 3, // button index starts from 0  
            "text": "hello" //postback text for the button  
          }  
        ]
        ```
      </td>
    </tr>
  </tbody>
</Table>

## Response Parameters

| Parameter   | Description    | Example                                |
| ----------- | -------------- | -------------------------------------- |
| **status**  | Message status | `submitted`                            |
| **message** | Message-Id     | `3867730a-bb97-4ea5-bad6-e6e34201ce89` |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Gupshup API",
    "description": "API for adding postback text to quick reply buttons in template send messages.",
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
        "summary": "Add Postback Text to Template Send Message",
        "description": "Allow users to add postback text to quick reply buttons in template send message API.",
        "parameters": [
          {
            "name": "apikey",
            "in": "header",
            "required": true,
            "description": "API key of the account.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "channel": {
                    "type": "string",
                    "example": "whatsapp"
                  },
                  "source": {
                    "type": "string",
                    "example": "+1234567890"
                  },
                  "destination": {
                    "type": "string",
                    "example": "+0987654321"
                  },
                  "src.name": {
                    "type": "string",
                    "example": "MyApp"
                  },
                  "template": {
                    "type": "string",
                    "example": "{\"id\": \"<template_id>\", \"params\": [\"<param1>\", \"<param2>\"]}"
                  },
                  "message": {
                    "type": "string",
                    "example": "{\"text\": \"Hello, world!\"}"
                  },
                  "postbackTexts": {
                    "type": "string",
                    "example": "[{\"index\": 3, \"text\": \"hello\"}]"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "202": {
            "description": "Successfully submitted message.",
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
                      "example": "3867730a-bb97-4ea5-bad6-e6e34201ce89"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Authentication failed.",
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