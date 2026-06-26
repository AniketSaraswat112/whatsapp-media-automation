> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Create/ Update Business Profile Details

## Request Parameters

| Key             | Description                                          | Constraints                         |
| :-------------- | :--------------------------------------------------- | :---------------------------------- |
| **Headers**     |                                                      |                                     |
| apikey          | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| **Path Params** |                                                      |                                     |
| appId           | Valid app id                                         |                                     |
| **Form Params** |                                                      |                                     |
| addressLine1    | Address of the business                              |                                     |
| addressLine2    | Address of the business                              |                                     |
| city            | City where business is situated                      |                                     |
| state           | State where business is situated                     |                                     |
| country         | Country where business is situated                   |                                     |
| pincode         | Pincode where business is situated                   |                                     |
| desc            | Description of the business                          |                                     |
| vertical        | Type/Category of business                            |                                     |
| ProfileEmail    | Email of business                                    |                                     |
| website1        | Website of business                                  |                                     |
| website2        | Website of business                                  |                                     |

## Response Parameters

| Key          | Description                                    |
| :----------- | :--------------------------------------------- |
| addressLine1 | Address of the business                        |
| addressLine2 | Address of the business                        |
| city         | City where business is situated                |
| state        | State where business is situated               |
| country      | Country where business is situated             |
| pincode      | Pincode of the city where business is situated |
| desc         | Description of the business                    |
| vertical     | Type/Category of business                      |
| profileEmail | Email of business                              |
| website1     | Website of business                            |
| website2     | Website of business                            |

## Status Codes

<table>
  <thead>
    <tr>
      <th>Status Code</th>
      <th>Response</th>
      <th>Comments</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><p><strong>Success</strong></p></td>

      <td />

      <td />
    </tr>

    <tr>
      <td><p>200</p></td>
      <td><p>\{<br />    "profile": \{<br />        "addressLine1": "\<business\_address>",<br />        "addressLine2": "\<business\_address>",<br />        "city": "\<city>",<br />        "country": "\<country>",<br />        "desc": "\<business\_description>",<br />        "pinCode": "\<city\_pincode>",<br />        "profileEmail": "\<business\_email>",<br />        "state": "\<state>",<br />        "vertical": "\<business\_type>",<br />        "website1": "\<business\_website>",<br />        "website2": "\<business\_website>"<br />    },<br />    "status": "success"<br />}</p></td>

      <td />
    </tr>

    <tr>
      <td><p><strong>Error</strong></p></td>

      <td />

      <td />
    </tr>

    <tr>
      <td><p>400</p></td>
      <td><p>\{<br />    "status": "error",<br />    "message": "Invalid app id provided"<br />}</p></td>
      <td><p>When invalid/empty appId is provided</p></td>
    </tr>

    <tr>
      <td><p>400</p></td>
      <td><p>\{<br />    "status": "error",<br />    "message": "app is not live"<br />}</p></td>
      <td><p>When app is not live</p></td>
    </tr>

    <tr>
      <td><p>400</p></td>
      <td><p>\{<br />    "status": "error",<br />    "message": "Unable to Authenticate Docker"<br />}</p></td>
      <td><p>When docker authentication fails</p></td>
    </tr>

    <tr>
      <td><p>400</p></td>
      <td><p>\{<br />    "status": "error",<br />    "error": "\<Facebook error response>"<br />}</p></td>
      <td><p>When Facebook returns error while setting business profile details</p></td>
    </tr>

    <tr>
      <td><p>400</p></td>
      <td><p>\{<br />  "status": "error",<br />  "message": "vertical can't be empty"<br />}</p></td>
      <td><p>When vertical field is empty</p></td>
    </tr>

    <tr>
      <td><p>400</p></td>
      <td><p>\{<br />  "status": "error",<br />  "message": "Invalid Website URL"<br />}</p></td>
      <td><p>When invalid website is provided</p></td>
    </tr>

    <tr>
      <td><p>401</p></td>
      <td><p>\{<br />    "status": "error",<br />    "message": "Authentication Failed"<br />}</p></td>
      <td><p>When API key is unauthorized</p></td>
    </tr>

    <tr>
      <td><p>429</p></td>
      <td><p>\{<br />    "status": "error",<br />    "message": "Too Many Requests"<br />}</p></td>
      <td><p>When the rate limit is exceeded</p></td>
    </tr>

    <tr>
      <td><p>500</p></td>
      <td><p>\{<br />  "status": "error",<br />  "message": "unable to update profile details"<br />}</p></td>
      <td><p>When server error occurs</p></td>
    </tr>
  </tbody>
</table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Set profile details",
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
      "put": {
        "operationId": "Set profile details",
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
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "addLine1": {
                    "type": "string",
                    "description": "First line of the address"
                  },
                  "addLine2": {
                    "type": "string",
                    "description": "Second line of the address"
                  },
                  "city": {
                    "type": "string",
                    "description": "City where the profile is located"
                  },
                  "state": {
                    "type": "string",
                    "description": "State where the profile is situated"
                  },
                  "pinCode": {
                    "type": "string",
                    "description": "Postal code of the profile location"
                  },
                  "country": {
                    "type": "string",
                    "description": "Country where the profile is situated"
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
                  },
                  "desc": {
                    "type": "string",
                    "description": "Description of the profile"
                  },
                  "profileEmail": {
                    "type": "string",
                    "description": "Profile email"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful update response",
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
                        "state": {
                          "type": "string",
                          "description": "State where the profile is situated"
                        },
                        "pinCode": {
                          "type": "string",
                          "description": "Postal code of the profile location"
                        },
                        "country": {
                          "type": "string",
                          "description": "Country where the profile is situated"
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
                        },
                        "desc": {
                          "type": "string",
                          "description": "Description of the profile"
                        },
                        "profileEmail": {
                          "type": "string",
                          "description": "Profile email"
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