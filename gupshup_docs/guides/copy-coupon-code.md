> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Copy Coupon Code

> 📘
>
> * According to meta documentation it is supported only for CAPI but currently it's working for both on-premise and CAPI so we are also providing it for both but meta may remove this feature later for on-premise apps.
> * Category Type should always be “MARKETING"
> * Templates are limited to one copy code button.
> * Button text cannot be customized.
> * Codes are limited to 15 characters.

## Request

```curl
curl --location 'https://api.gupshup.io/wa/app/:appId/template' \
--header 'apikey: {{api_key}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'languageCode={{language_code}}' \
--data-urlencode 'content={{template body}}' \
--data-urlencode 'footer={{template footer}}' \
--data-urlencode 'category=MARKETING' \
--data-urlencode 'example={{template body example}}' \
--data-urlencode 'vertical={{template vertical}}' \
--data-urlencode 'elementName={{template name}}' \
--data-urlencode 'buttons={{button list}}'
```

## Meta Payload Example

```json
{
  "name": "coupon_code_fall2023_25off",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our Fall Sale is on!"
    },
    {
      "type": "BODY",
      "text": "Shop now through November and use code {{1}} to get {{2}} off of all merchandise!",
      "example": {
        "body_text": [
          [
            "25OFF",
            "25%"
          ]
        ]
      }
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe"
        },
        {
          "type": "COPY_CODE",
          "example": "250FF"
        }
      ]
    }
  ]
}
```

## Request Parameters

| Key          | Description                                          | Constraints                            |
| :----------- | :--------------------------------------------------- | :------------------------------------- |
| apikey       | Apikey of the account where the app is to be created | It should be a valid gupshup.io apikey |
| languageCode | Valid Language code for the template                 |                                        |
| content      | Template body                                        |                                        |
| footer       | Template Footer                                      | Optional                               |
| category     | Template Category                                    | Must always be MARKETING               |
| example      | Template Body example                                | If params are used in the body         |
| vertical     | Template Vertical                                    |                                        |
| elementName  | Template Name                                        |                                        |
| Buttons      | buttons list                                         | Can have only one copy coupon button   |
| appId        | Valid App Id                                         |                                        |

## Response

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
        Comment
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        Success **200**
      </td>

      <td style={{ textAlign: "left" }}>
        ```json
        {
          "status": "success",
          "template": {
            "appId": "5bae1cea-c3d4-4aa0-a43b-9776711c3e82",
            "category": "MARKETING",
            "containerMeta": "{\\\"appId\\\":\\\"5bae1cea-c3d4-4aa0-a43b-9776711c3e82\\\",\\\"data\\\":\\\"Shop now through November and use code {{1}} to get {{2}} off of all merchandise!\\\",\\\"buttons\\\":\\[{\\\"type\\\":\\\"COPY_CODE\\\",\\\"example\\\":\\\"250FF\\\"},{\\\"type\\\":\\\"URL\\\",\\\"text\\\":\\\"Shop Now\\\",\\\"url\\\":\\\"<https://www.luckyshrub.com/shop?promo={{1}}\\\",\\\"example\\\":[\\\"summer2023\\\"]},{\\\"type\\\":\\\"URL\\\",\\\"text\\\":\\\"Website\\\",\\\"url\\\":\\\"https://www.luckyshrub.com/shop?promo={{1}}\\\",\\\"example\\\":[\\\"summer2023\\\"]},{\\\"type\\\":\\\"PHONE_NUMBER\\\",\\\"text\\\":\\\"Call\\\",\\\"phone_number\\\":\\\"918016337728\\\"},{\\\"type\\\":\\\"QUICK_REPLY\\\",\\\"text\\\":\\\"Yes\\\"},{\\\"type\\\":\\\"QUICK_REPLY\\\",\\\"text\\\":\\\"No\\\"},{\\\"type\\\":\\\"QUICK_REPLY\\\",\\\"text\\\":\\\"Unsubscribe from Promos\\\"},{\\\"type\\\":\\\"QUICK_REPLY\\\",\\\"text\\\":\\\"Red\\\"},{\\\"type\\\":\\\"QUICK_REPLY\\\",\\\"text\\\":\\\"Blue\\\"},{\\\"type\\\":\\\"QUICK_REPLY\\\",\\\"text\\\":\\\"Green\\\"}],\\\"sampleText\\\":\\\"Shop now through November and use code 250FF to get 20% off of all merchandise!\\\",\\\"enableSample\\\":true,\\\"editTemplate\\\":false,\\\"allowTemplateCategoryChange\\\":false,\\\"addSecurityRecommendation\\\":false}",
            "createdOn": 1696721353605,
            "data": "Shop now through November and use code {{1}} to get {{2}} off of all merchandise! | [null] \\| [Shop Now,https://www.luckyshrub.com/shop?promo={{1}}] \\| [Website,https://www.luckyshrub.com/shop?promo={{1}}] \\| [Call,918016337728] \\| [Yes] \\| [No] \\| [Unsubscribe from Promos] \\| [Red] \\| [Blue] \\| [Green]",
            "elementName": "dev_test_copy_code_api_05",
            "externalId": "565849138988774",
            "id": "a0a492b5-6a21-4b0c-b862-c457afadf7fa",
            "languageCode": "en",
            "languagePolicy": "deterministic",
            "meta": "{\\\"example\\\":\\\"Shop now through November and use code 250FF to get 20% off of all merchandise!\\\"}",
            "modifiedOn": 1697240548921,
            "namespace": "69c54856_55eb_42d4_8d01_e67e984dcb0f",
            "priority": 1,
            "reason": "NONE",
            "retry": 0,
            "stage": "NONE",
            "status": "APPROVED",
            "templateType": "TEXT",
            "vertical": "TEXT",
            "wabaId": "102482675865013"
          }
        }
        ```
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>
  </tbody>
</Table>

> 📘
>
> Refer [here](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/coupon-templates?content_id=ahW3ByZXo5cOWaI) for detailed information on coupon templates and its use.