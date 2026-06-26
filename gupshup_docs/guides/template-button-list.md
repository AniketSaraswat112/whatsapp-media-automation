> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Template Button List

> 🚧 Before you begin
>
> * Supported for both On-Premise and CAPI
> * Only MARKETING and UTILITY template can have multiple buttons of different type.
> * Templates can have a maximum of 10 buttons with certain limitations on each type and combination.
> * [CATALOG](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/catalog-templates) and [MPM](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/mpm-templates#components) templates can have only one button.
> * [AUTHENTICATION](https://developers.facebook.com/docs/whatsapp/business-management-api/authentication-templates#components) templates can have only one button and its type must be OTP.

> 📘 Limitations
>
> * Templates are limited to a maximum of 1 button of type PHONE\_NUMBER.
> * Templates are limited to a maximum of 2 buttons of type URL.
> * Templates are limited to a maximum of 10 buttons of type QUICK\_REPLY.
> * If using quick reply buttons with buttons of some other type, buttons must be organized into two groups: quick reply buttons and non-quick reply buttons. If grouped incorrectly, the API will return an error indicating an invalid combination.
> * MARKETING Templates are limited to a maximum of 1 button of type COPY\_CODE.
> * UTILITY templates cannot use COPY\_CODE.
> * MARKETING and UTILITY templates cannot use button of type OTP.

## Request

```curl
curl --location 'https://api.gupshup.io/wa/app/:appId/template' \
--header 'apikey: {{api_key}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'languageCode={{language_code}}' \
--data-urlencode 'content={{template body}}' \
--data-urlencode 'footer={{template footer}}' \
--data-urlencode 'category={{template category}}' \
--data-urlencode 'example={{template body example}}' \
--data-urlencode 'vertical={{template vertical}}' \
--data-urlencode 'elementName={{template name}}' \
--data-urlencode 'templateType={{template type}}'
```

## Meta Payload Example

```json
{
  "name": "seasonal_promotion",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our {{1}} is on!",
      "example": {
        "header_text": [
          "Summer Sale"
        ]
      }
    },
    {
      "type": "BODY",
      "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
      "example": {
        "body_text": [
          [
            "the end of August", "25OFF", "25%"
          ]
        ]
      }
    },
    {
      "type": "FOOTER",
      "text": "Use the buttons below to manage your marketing subscriptions"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe from Promos"
        },
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe from All"
        }
      ]
    }
  ]
}
```

## Request Parameters

| Key           | Description                                          | Constraints                            |
| :------------ | :--------------------------------------------------- | :------------------------------------- |
| apikey        | Apikey of the account where the app is to be created | It should be a valid gupshup.io apikey |
| languageCode  | Valid Language code for the template                 |                                        |
| content       | Template body                                        |                                        |
| footer        | Template Footer                                      | Optional                               |
| category      | Template Category                                    |                                        |
| example       | Template Body example                                | If params are used in the body         |
| vertical      | Template Vertical                                    |                                        |
| elementName   | Template Name                                        |                                        |
| templatetType | Template Type                                        |                                        |
| Buttons       | List of template buttons                             | Buttons should be of valid type        |
| appId         | Valid App Id                                         |                                        |

## Response Parameters

| Key      | Description                                   |
| :------- | :-------------------------------------------- |
| status   | Creation status                               |
| template | Template object if template creation succeeds |
| message  | Error Message if  template creation  fails    |

> 📘
>
> Refer [here](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#buttons) for a detailed information on template button list and it's use.