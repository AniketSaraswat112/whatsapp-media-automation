> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# List

### Request Parameters

| Parameter | Location | Type   | Description                    | Example                          |
| --------- | -------- | ------ | ------------------------------ | -------------------------------- |
| apikey    | Header   | string | APIKEY of your Gupshup Account | 61b3021c97214370b341f8baaae0xxxx |

### Form Parameters (Request Body)

| Parameter   | Type    | Required | Description                            | Example                          |
| ----------- | ------- | -------- | -------------------------------------- | -------------------------------- |
| source      | integer | Yes      | Source Phone Number                    | 918929874278                     |
| destination | integer | Yes      | Destination Phone Number               | 918805162043                     |
| src.name    | string  | Yes      | App Name                               | august18                         |
| message     | object  | Yes      | Message object containing list details | See below for detailed structure |

#### `message` object structure:

| Field         | Type   | Required | Description                    | Example                            |
| ------------- | ------ | -------- | ------------------------------ | ---------------------------------- |
| type          | string | Yes      | Type of the message            | list                               |
| title         | string | Yes      | Header text of the message     | Header text of the message         |
| body          | string | Yes      | Body content of the message    | This the the body of the message   |
| msgid         | string | Yes      | Identifier of the message      | IDENTIFIER\_ID                     |
| globalButtons | array  | No       | Array of global button objects | See `globalButton` structure below |
| items         | array  | No       | Array of item objects          | See `item` structure below         |

#### `globalButton` object structure:

| Field | Type   | Description         | Example |
| ----- | ------ | ------------------- | ------- |
| type  | string | Type of title       | text    |
| title | string | Title of the button | options |

#### `item` object structure:

| Field   | Type  | Description             | Example                      |
| ------- | ----- | ----------------------- | ---------------------------- |
| options | array | Array of option objects | See `option` structure below |

#### `option` object structure:

| Field        | Type    | Required | Description                                     | Example                                     |
| ------------ | ------- | -------- | ----------------------------------------------- | ------------------------------------------- |
| type         | string  | Yes      | Type of the option                              | text                                        |
| title        | string  | Yes      | Row's title                                     | section 1 row 1📍🙂                         |
| description  | string  | Yes      | Row's description                               | first row of first section description 🙂😇 |
| postbackText | string  | Yes      | Row's postback payload                          | section 1 row 1 postback payload            |
| encodeText   | boolean | No       | Indicates whether to encode the title's content | true                                        |

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
        Response Body (application/json)
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
        `{ "status": "submitted", "messageId": "183dc8f1-7ecc-4419-895f-04fd0b1bfe07" }`
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
        Either: <br />`{ "message": "Invalid Destination", "status": "error" }` <br />or<br /> `{ "message": "Invalid App Details", "status": "error" }`
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
        `{ "message": "Authentication Failed", "status": "error" }`
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
        `{ "message": "Too Many Requests", "status": "error" }`
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Outbound List session message API",
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
          "List message"
        ],
        "summary": "Send list message",
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
        "title": "Item message",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of the message",
            "example": "list"
          },
          "title": {
            "type": "string",
            "description": "header",
            "example": "Header text of the message"
          },
          "body": {
            "type": "string",
            "description": "Body content of the message",
            "example": "This the the body of the message"
          },
          "msgid": {
            "type": "string",
            "description": "identifier of the message",
            "example": "IDENTIFIER_ID"
          },
          "globalButtons": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/globalButton"
            }
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/item"
            }
          }
        }
      },
      "option": {
        "title": "option",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "example": "text"
          },
          "title": {
            "type": "string",
            "description": "row's title",
            "example": "section 1 row 1📍🙂"
          },
          "description": {
            "type": "string",
            "description": "row's description",
            "example": "first row of first section description 🙂😇"
          },
          "postbackText": {
            "type": "string",
            "description": "row's postback payload",
            "example": "section 1 row 1 postback payload"
          },
          "encodeText": {
            "type": "boolean",
            "default": false,
            "description": "Indicated whether to encode the content of the title. Enable only if the docker is onprem and the title contains emoji or content that needs to be encoded",
            "example": true
          }
        }
      },
      "globalButton": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of title",
            "example": "text"
          },
          "title": {
            "type": "string",
            "description": "title of the button",
            "example": "options"
          }
        }
      },
      "item": {
        "title": "item",
        "type": "object",
        "properties": {
          "options": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/option"
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