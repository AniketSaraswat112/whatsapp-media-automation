> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Multi-Product Message Templates

MPM templates can be used to open marketing conversations. They allow you to showcase up to 30 products from your e-commerce catalog, organized in up to 10 sections, in a single message.

![](https://files.readme.io/4c26908-image.png)

Customers can browse products and sections within the message, view details for each product, add and remove products from their cart, and submit their cart to place an order. Orders are then sent to you via a webhook.

![](https://files.readme.io/06241bc-image.png)

## Limitations

* Customers must be using WhatsApp v2.22.24 or greater.
* MPM templates cannot be forwarded to other customers.

## Send MPM Templates

> 📘
>
> * Supported on both CAPI and On-Premise (Currently there is error in MPM on-premise messaging from Meta side)
> * Template params should contain valid values (Example displayed below)
> * Sending these templates not supported through Gupshup UI

### Request

```curl
curl --location ' https://api.gupshup.io/wa/api/v1/template/msg' \ 
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: {{apiKey}}' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source={{sender_phone_number}}' \
--data-urlencode 'destination={{destination_phone_number}}' \
--data-urlencode 'src.name={{app_name}}' \
--data-urlencode 'template={"id":"{{template_id}}","params":{{template_params_list}},"mpm":{"sections":[{"title":"{{section_title}}","products":{{section_product_list}} }]}}'
```

### Meta Payload Example

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "16505551234",
  "type": "template",
  "template": {
    "name": "abandoned_cart",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "text",
            "text": "Pablo"
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "10OFF"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "mpm",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "thumbnail_product_retailer_id": "2lc20305pt",
              "sections": [
                {
                  "title": "Popular Bundles",
                  "product_items": [
                    {
                      "product_retailer_id": "2lc20305pt"
                    },
                    {
                      "product_retailer_id": "nseiw1x3ch"
                    }
                  ]
                },
                {
                  "title": "Premium Packages",
                  "product_items": [
                    {
                      "product_retailer_id": "n6k6x0y7oe"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

### Response

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>Status Code</th>
      <th style={{ textAlign: "left" }}>Response</th>
      <th style={{ textAlign: "left" }}>Comment</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>Success <b>200</b></td>

      <td style={{ textAlign: "left" }}>
        \{\
        "status": "submitted",\
        "messageId": "4bed9a90-9f7a-4584-be5b-8ee1cba61a01"\
        }
      </td>

      <td style={{ textAlign: "left" }} />
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>Error <b>401</b></td>

      <td style={{ textAlign: "left" }}>
        \{\
        "message": \{\
        "message": "Authentication Failed"\
        },\
        "status": "error"\
        }
      </td>

      <td style={{ textAlign: "left" }}>When APIKey authentication fails or apikey is not sent</td>
    </tr>
  </tbody>
</Table>

### Request Parameters

| Key         | Description                                          | Constraints                                                                                                                                                                                                                                                                                              |
| :---------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apikey      | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey                                                                                                                                                                                                                                                                      |
| source      | Source Phone Number                                  |                                                                                                                                                                                                                                                                                                          |
| src.name    | Source App Name                                      |                                                                                                                                                                                                                                                                                                          |
| destination | Destination phone number                             |                                                                                                                                                                                                                                                                                                          |
| Template    | JSON containing template details                     | - Must include valid template id - Params must include all params including a product ID (which is to be used as a thumbnail (last in the list)) - Sections param must be provided with valid ids`{"params":["{{product_id}}"],"mpm":{"sections":[{"title":"Products","products":["{{product_id}}"]}]}}` |

### Response Parameters

| Key     | Description    |
| :------ | :------------- |
| status  | Message status |
| Message | Message ID     |