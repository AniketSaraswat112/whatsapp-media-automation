> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Business Profile WABA Details

## Request Parameters

| Key             | Description                                          | Constraints                         |
| :-------------- | :--------------------------------------------------- | :---------------------------------- |
| **Headers**     |                                                      |                                     |
| apikey          | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| **Path Params** |                                                      |                                     |
| appId           | Valid app id                                         |                                     |

## Response Parameters

| Key          | Description          |
| :----------- | :------------------- |
| businessName | Name of the business |
| wabaName     | App Name             |
| phoneNumber  | App Phone Number     |
| timeZone     | Timezone             |
| wabaId       | Waba Id              |

## Status Codes

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Status Code
      </th>

      <th style={{ textAlign: "left" }}>
        Response
      </th>

      <th style={{ textAlign: "left" }}>
        Comments
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        **Success**
      </td>

      <td style={{ textAlign: "left" }} />

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        200
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "profile": {
            "addressLine1": "First address line",
            "addressLine2": "Second address line",
            "city": "City name",
            "country": "Country code",
            "desc": "Profile description",
            "pinCode": "Postal code",
            "profileEmail": "Email address",
            "state": "State",
            "vertical": "Industry vertical",
            "website1": "First website",
            "website2": "Second website"
          },
          "status": "success"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Error**
      </td>

      <td style={{ textAlign: "left" }} />

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        400
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "status": "error",
          "message": "Invalid app id provided"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When invalid/empty appId is provided
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        401
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "status": "error",
          "message": "Authentication Failed"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When API key is unauthorized
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        429
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "status": "error",
          "message": "Too Many Requests"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When the rate limit is exceeded
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Get profile details",
    "contact": {},
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/app/{appId}/business/profile": {
      "get": {
        "operationId": "Get profile details",
        "parameters": [
          {
            "name": "appId",
            "in": "path",
            "description": "Unique identifier for an app",
            "required": true,
            "style": "simple",
            "schema": {
              "type": "string",
              "example": "1b73dad6-xxxx-xxxx-xxxx-60981da19f70"
            }
          },
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
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "profile": {
                      "type": "object",
                      "properties": {
                        "addressLine1": {
                          "type": "string",
                          "description": "First line of the address"
                        },
                        "addressLine2": {
                          "type": "string",
                          "description": "Second line of the address"
                        },
                        "city": {
                          "type": "string",
                          "description": "City where the profile is located"
                        },
                        "country": {
                          "type": "string",
                          "description": "Country where the profile is situated"
                        },
                        "desc": {
                          "type": "string",
                          "description": "Description of the profile"
                        },
                        "pinCode": {
                          "type": "string",
                          "description": "Postal code of the profile location"
                        },
                        "profileEmail": {
                          "type": "string",
                          "description": "Profile email"
                        },
                        "state": {
                          "type": "string",
                          "description": "State where the profile is situated"
                        },
                        "vertical": {
                          "type": "string",
                          "description": "Profile vertical"
                        },
                        "website1": {
                          "type": "string",
                          "format": "uri",
                          "description": "Website URL 1 of the profile"
                        },
                        "website2": {
                          "type": "string",
                          "format": "uri",
                          "description": "Website URL 2 of the profile"
                        }
                      }
                    },
                    "status": {
                      "type": "string",
                      "description": "Status of the response",
                      "enum": [
                        "success",
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