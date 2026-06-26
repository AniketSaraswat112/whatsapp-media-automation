> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Location

## cURL

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: {{APIKEY}}' \
--data-urlencode 'source={{SOURCE}}' \
--data-urlencode 'destination={{DESTINATION}}' \
--data-urlencode 'message={
  "type": "location",
  "longitude": "72.877655",
  "latitude": "19.075983",
  "name": "Gupshup",
  "address": "101, Silver Metropolis, Bimbisar Nagar Rd, Bimbisar Nagar, Goregaon, Mumbai, Maharashtra 400063"
}' \
--data-urlencode 'src.name={{APP_NAME}}'
```

## Sample Request

```curl
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'accept: application/json' \
--header 'apikey: xvnwgh9vgbbl6gjeezymu5v5iepxq2zt' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=918097424541' \
--data-urlencode 'destination=91735824xxxx' \
--data-urlencode 'src.name=TedLasso' \
--data-urlencode 'message={
  "type": "location",
  "longitude": "72.877655",
  "latitude": "19.075983",
  "name": "Gupshup",
  "address": "101, Silver Metropolis, Bimbisar Nagar Rd, Bimbisar Nagar, Goregaon, Mumbai, Maharashtra 400063"
}'
```

### Request Parameters

| Parameter | Location | Type   | Description                    | Example                          |
| --------- | -------- | ------ | ------------------------------ | -------------------------------- |
| apikey    | Header   | string | APIKEY of your Gupshup Account | 61b3021c97214370b341f8baaae0xxxx |

### Form Parameters (Request Body)

| Parameter   | Type    | Required | Description                                | Example                          |
| ----------- | ------- | -------- | ------------------------------------------ | -------------------------------- |
| source      | integer | Yes      | Source Phone Number                        | 918929874278                     |
| destination | integer | Yes      | Destination Phone Number                   | 918805162043                     |
| src.name    | string  | Yes      | App Name                                   | august18                         |
| message     | object  | Yes      | Message object containing location details | See below for detailed structure |

#### `message` object structure:

| Field     | Type   | Required | Default Value                                                                                   | Description                           |
| --------- | ------ | -------- | ----------------------------------------------------------------------------------------------- | ------------------------------------- |
| type      | string | Yes      | location                                                                                        | Type of session message (fixed value) |
| longitude | string | No       | 72.877655                                                                                       | Longitude of the location in decimals |
| latitude  | string | No       | 19.075983                                                                                       | Latitude of the location in decimals  |
| name      | string | No       | Gupshup                                                                                         | Name of the location                  |
| address   | string | No       | 101, Silver Metropolis, Bimbisar Nagar Rd, Bimbisar Nagar, Goregaon, Mumbai, Maharashtra 400063 | Caption for the message               |

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
    "title": "Outbound Location session message API",
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
          "Location message"
        ],
        "summary": "Send Location message",
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
        "title": "Location message",
        "type": "object",
        "properties": {
          "type": {
            "default": "location",
            "type": "string",
            "enum": [
              "location"
            ],
            "description": "Type of session message"
          },
          "longitude": {
            "type": "string",
            "description": "Longitude of the location in decimals",
            "default": 72.877655
          },
          "latitude": {
            "type": "string",
            "description": "Latitude of the location in decimals",
            "default": 19.075983
          },
          "name": {
            "type": "string",
            "description": "Name of the location",
            "default": "Gupshup"
          },
          "address": {
            "type": "string",
            "description": "Caption for the message",
            "default": "101, Silver Metropolis, Bimbisar Nagar Rd, Bimbisar Nagar, Goregaon, Mumbai, Maharashtra 400063"
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