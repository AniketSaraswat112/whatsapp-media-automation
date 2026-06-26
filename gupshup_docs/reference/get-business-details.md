> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Business Details

## Request Parameters

| Key    | Description                                           | Constraints                            |
| :----- | :---------------------------------------------------- | :------------------------------------- |
| apikey | Apikey of the account where the app is to be created. | It should be a valid gupshup.io apikey |

## cURL Request

```curl
curl --location 'https://api.gupshup.io/wa/app/{{APP_ID}}/business' \
--header 'Content-Type: application/json' \
--header 'apikey: {{APIKEY}}'
```

## Response

```Text JSON
{
    "business": {
        "addressLine1": "{{ADDRESS_LINE_1}}",
        "addressLine2": "{{ADDRESS_LINE_2}}",
        "city": "{{CITY}}",
        "contactName": "{{CONTACT_NAME}}",
        "contactNumber": "{{CONTACT_NUMBER}}",
        "country": "{{COUNTRY_CODE}}",
        "createdOn": {{CREATED_ON_TIMESTAMP}},
        "displayAddress": "{{ADDRESS}}",
        "email": "{{EMAIL_ID}}",
        "emailVerified": {{STATUS_OF_EMAIL_VERIFICATION}},
        "hqRegion": "{{HQ_REGION}}",
        "id": "{{APP_ID}}",
        "modifiedOn": {{LAST_MODIFIED_ON_TIMESTAMP}},
        "name": "{{BUSINESS_NAME}}",
        "pinCode": "{{PINCODE}}",
        "preferredCountry": "{{PREFERRED_COUNTRY}}",
        "state": "{{STATE}}",
        "tncAccepted": {{TERMS_AND_CONDITION_ACCEPTANCE_STATUS}},
        "vertical": "{{BUSINESS_VERTICAL}}",
        "website": "{{BUSINESS_WEBSITE}}"
    },
    "status": "success"
}
```

## Status Codes

| Status Code | Response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Comments |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| **Success** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |          |
| 200         | `{       "business": {           "addressLine1": "{{ADDRESS_LINE_1}}",           "addressLine2": "{{ADDRESS_LINE_2}}",           "city": "{{CITY}}",           "contactName": "{{CONTACT_NAME}}",           "contactNumber": "{{CONTACT_NUMBER}}",           "country": "{{COUNTRY_CODE}}",           "createdOn": {{CREATED_ON_TIMESTAMP}},           "displayAddress": "{{ADDRESS}}",           "email": "{{EMAIL_ID}}",           "emailVerified": {{STATUS_OF_EMAIL_VERIFICATION}},           "hqRegion": "{{HQ_REGION}}",           "id": "{{APP_ID}}",           "modifiedOn": {{LAST_MODIFIED_ON_TIMESTAMP}},           "name": "{{BUSINESS_NAME}}",           "pinCode": "{{PINCODE}}",           "preferredCountry": "{{PREFERRED_COUNTRY}}",           "state": "{{STATE}}",           "tncAccepted": {{TERMS_AND_CONDITION_ACCEPTANCE_STATUS}},           "vertical": "{{BUSINESS_VERTICAL}}",           "website": "{{BUSINESS_WEBSITE}}"       },       "status": "success"   }` |          |
| **Error**   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |          |
| 400         | `{   	"status" : "error",   	"message" : "Invalid app id provided"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |          |
| 401         | `{       "status": "error",       "message": "Authentication Failed"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |          |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Get business details",
    "contact": {},
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.gupshup.io"
    }
  ],
  "paths": {
    "/wa/app/{appId}/business": {
      "get": {
        "operationId": "Get business details",
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
                    "business": {
                      "type": "object",
                      "properties": {
                        "about": {
                          "type": "string",
                          "description": "Description about the business"
                        },
                        "addressLine1": {
                          "type": "string",
                          "description": "First line of the address"
                        },
                        "addressLine2": {
                          "type": "string",
                          "description": "Second line of the address"
                        },
                        "altWebsite": {
                          "type": "string",
                          "format": "uri",
                          "description": "Alternate website URL"
                        },
                        "city": {
                          "type": "string",
                          "description": "City where the business is located"
                        },
                        "contactName": {
                          "type": "string",
                          "description": "Name of the contact person"
                        },
                        "contactNumber": {
                          "type": "string",
                          "description": "Contact number of the business"
                        },
                        "country": {
                          "type": "string",
                          "description": "Country where the business is situated"
                        },
                        "createdOn": {
                          "type": "integer",
                          "format": "int64",
                          "description": "Timestamp for creation"
                        },
                        "description": {
                          "type": "string",
                          "description": "Description of the business profile"
                        },
                        "displayAddress": {
                          "type": "string",
                          "description": "Display address containing multiple lines"
                        },
                        "email": {
                          "type": "string",
                          "format": "email",
                          "description": "Email address for the business"
                        },
                        "emailVerified": {
                          "type": "boolean",
                          "description": "Indicates if the email is verified"
                        },
                        "hqRegion": {
                          "type": "string",
                          "description": "Headquarters region"
                        },
                        "id": {
                          "type": "string",
                          "description": "Unique identifier for the business"
                        },
                        "modifiedOn": {
                          "type": "integer",
                          "format": "int64",
                          "description": "Timestamp for modification"
                        },
                        "name": {
                          "type": "string",
                          "description": "Name of the business"
                        },
                        "pinCode": {
                          "type": "string",
                          "description": "Postal code of the business location"
                        },
                        "preferredCountry": {
                          "type": "string",
                          "description": "Preferred country of the business"
                        },
                        "profileEmail": {
                          "type": "string",
                          "description": "Profile email"
                        },
                        "state": {
                          "type": "string",
                          "description": "State where the business is situated"
                        },
                        "tncAccepted": {
                          "type": "boolean",
                          "description": "Indicates if terms and conditions are accepted"
                        },
                        "vertical": {
                          "type": "string",
                          "description": "Business vertical"
                        },
                        "website": {
                          "type": "string",
                          "format": "uri",
                          "description": "Website URL of the business"
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