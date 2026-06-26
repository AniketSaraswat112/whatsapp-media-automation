> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Block User

API to block user

Notes:
- You can only block users that have messaged your business in the last 24 hours.
- 64k blocklist limit

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Block User",
    "description": "API to block user",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "{api_front_url}",
      "variables": {
        "api_front_url": {
          "default": "https://api.gupshup.io",
          "description": "Base URL for the API"
        }
      }
    }
  ],
  "paths": {
    "/wa/app/{appId}/user/block": {
      "post": {
        "summary": "Block User",
        "description": "API to block user\n\nNotes:\n- You can only block users that have messaged your business in the last 24 hours.\n- 64k blocklist limit\n",
        "parameters": [
          {
            "name": "appId",
            "in": "path",
            "required": true,
            "description": "appId of the app",
            "schema": {
              "type": "string"
            },
            "example": "b6xxxedd-1xxq-4da1-8e96-exxxxe27xx1f"
          },
          {
            "name": "apikey",
            "in": "header",
            "required": true,
            "description": "Apikey of app",
            "schema": {
              "type": "string"
            },
            "example": "xvnwxxggh9vxxxxymu5vxx5iepxqx2zt"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "messaging_product",
                  "block_users"
                ],
                "properties": {
                  "messaging_product": {
                    "type": "string",
                    "enum": [
                      "whatsapp"
                    ],
                    "description": "Must be \"whatsapp\""
                  },
                  "block_users": {
                    "type": "array",
                    "description": "List of users that need to be blocked",
                    "items": {
                      "type": "object",
                      "required": [
                        "user"
                      ],
                      "properties": {
                        "user": {
                          "type": "string",
                          "description": "Phone number of the user to block",
                          "example": "919163805873"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "block_users": {
                      "type": "object",
                      "properties": {
                        "added_users": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "input": {
                                "type": "string",
                                "description": "Phone number of a WhatsApp user",
                                "example": "919163805873"
                              },
                              "wa_id": {
                                "type": "string",
                                "description": "Unique ID of a WhatsApp user",
                                "example": "919163400873"
                              }
                            }
                          }
                        }
                      }
                    },
                    "messaging_product": {
                      "type": "string",
                      "example": "whatsapp"
                    },
                    "status": {
                      "type": "string",
                      "example": "success"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "messaging_product": {
                      "type": "string",
                      "example": "whatsapp"
                    },
                    "block_users": {
                      "type": "object",
                      "properties": {
                        "added_users": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "input": {
                                "type": "string",
                                "description": "Phone number or WA_ID"
                              },
                              "wa_id": {
                                "type": "string",
                                "description": "Unique ID of a WhatsApp user"
                              }
                            }
                          }
                        },
                        "failed_users": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "input": {
                                "type": "string",
                                "description": "Phone number or WA_ID"
                              },
                              "wa_id": {
                                "type": "string",
                                "description": "Unique ID of a WhatsApp user"
                              },
                              "errors": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "message": {
                                      "type": "string"
                                    },
                                    "code": {
                                      "type": "string"
                                    },
                                    "error_data": {
                                      "type": "object",
                                      "properties": {
                                        "details": {
                                          "type": "string"
                                        }
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
                    "error": {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "(#139100) Failed to block/unblock users"
                        },
                        "type": {
                          "type": "string",
                          "example": "OAuthException"
                        },
                        "code": {
                          "type": "integer",
                          "example": 139100
                        },
                        "error_data": {
                          "type": "object",
                          "properties": {
                            "details": {
                              "type": "string",
                              "example": "Failed to block some users, see the block_users response list for details"
                            }
                          }
                        },
                        "fbtrace_id": {
                          "type": "string"
                        }
                      }
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