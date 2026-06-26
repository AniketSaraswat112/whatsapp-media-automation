> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Business Profile Photo

## Request Parameters

| Key             | Description                                          | Constraints                         |
| :-------------- | :--------------------------------------------------- | :---------------------------------- |
| **Headers**     |                                                      |                                     |
| apikey          | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| **Path Params** |                                                      |                                     |
| appId           | Valid app id                                         |                                     |
| **Form Params** |                                                      |                                     |
| image           | Profile photo image file                             | Max allowed size : 5242880 bytes    |

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
          "message": "profile photo deleted successfully",
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
          "message": "Please select a profile picture before uploading",
          "status": "error"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When photo is not provided in request
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        400
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "error": {
            "message": "App Not Live"
          },
          "status": "error"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When app is not live
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        400
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "error": {
            "message": "Uploaded Photo Size Exceeded, Current Image Size is \\<image_size> but max allowed is \\<max_image_size_allowed>"
          },
          "status": "error"
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When photo size exceeds max allowed size
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        400
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "status": "error",
          "error": {
            "message": "<Facebook error response>"
          }
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When Facebook returns an error while setting business profile details
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

    <tr>
      <td style={{ textAlign: "left" }}>
        500
      </td>

      <td style={{ textAlign: "left" }}>
        ```
        {
          "status": "error",
          "message": "Internal server error. Please try again later."
        }
        ```
      </td>

      <td style={{ textAlign: "left" }}>
        When internal server error while processing
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Set profile photo",
    "contact": {},
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/app/{appId}/business/profile/photo": {
      "put": {
        "operationId": "Set profile photo",
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
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "image": {
                    "type": "string",
                    "format": "binary",
                    "description": "Image file to upload"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful photo update response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "description": "Response message for successful profile picture update",
                      "example": "profile picture updated successfully"
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