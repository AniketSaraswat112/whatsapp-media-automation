> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Business Profile About

## Request Parameters

| Key             | Description                                          | Constraints                         |
| :-------------- | :--------------------------------------------------- | :---------------------------------- |
| **Headers**     |                                                      |                                     |
| apikey          | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| **Path Params** |                                                      |                                     |
| appId           | Valid app id                                         |                                     |

## Response Parameters

| Key   | Description                                                     |
| :---- | :-------------------------------------------------------------- |
| about | Contains field ‘message’ which has the about details of the app |

## Status Codes

<Table align={["left", "left", "left"]}>
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
        <strong>Success</strong>
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
          "about": {
            "message": "Hey There! I am using WhatsApp"
          },
          "status": "success"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        <strong>Error</strong>
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
    "title": "Get profile about",
    "contact": {},
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/app/{appId}/business/profile/about": {
      "get": {
        "operationId": "Get profile about",
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
                    "about": {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "description": "Message about the profile"
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