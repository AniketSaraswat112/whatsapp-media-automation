> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Catalog Template

Catalog templates are marketing templates that allow you to showcase your product catalog entirely within WhatsApp. Catalog templates display a product thumbnail header image of your choice and custom body text, along with a fixed text header and fixed text sub-header.

![](https://files.readme.io/e48e360-image.png)

When a customer taps the View catalog button in a catalog template message, your product catalog appears within WhatsApp.

![](https://files.readme.io/fe5a3f1-image.png)

## Send Catalog Templates

> 📘
>
> * Supported ONLY on CAPI *Template Params should contain the productId which will be sent as thumbnail for the catalog (Must be the last element in templateParams list).* Sending these templates not supported through Gupshup UI

```curl Request
curl --location 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: 7ysmxxxxxxxxxxxxxxxxvs6' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=234812xxxxxx' \
--data-urlencode 'destination=917900xxxxxx' \
--data-urlencode 'src.name=myfoodangel' \
--data-urlencode 'template={"id":"6288db5e-824e-4fdf-990c-b157280f6db1","params": ["wc_post_id_8567"]}'
```

```json Meta Payload Example
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<TO>",
  "type": "template",
  "template": {
    "name": "<NAME>",
    "language": {
      "code": "<CODE>"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "<TYPE>",
            "text": "<TEXT>"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "CATALOG",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "thumbnail_product_retailer_id": "<THUMBNAIL_PRODUCT_RETAILER_ID>"
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
      <th>
        Status Code
      </th>

      <th>
        Response
      </th>

      <th>
        Comment
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Success **200**
      </td>

      <td>
        \{\
        "status": "submitted",\
        "messageId": "4bed9a90-9f7a-4584-be5b-8ee1cba61a01"\
        }
      </td>

      <td />
    </tr>

    <tr>
      <td>
        Error **401**
      </td>

      <td>
        \{\
        "message": \{\
        "message": "Authentication Failed"\
        },\
        "status": "error"\
        }
      </td>

      <td>
        When APIKey authentication fails or apikey is not sent
      </td>
    </tr>
  </tbody>
</Table>

### Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Key
      </th>

      <th>
        Description
      </th>

      <th>
        Constraints
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        apikey
      </td>

      <td>
        Apikey of the account where the app is to be created
      </td>

      <td>
        Should be a valid gupshup.io apikey
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        Source Phone Number
      </td>

      <td />
    </tr>

    <tr>
      <td>
        src.name
      </td>

      <td>
        Source App Name
      </td>

      <td />
    </tr>

    <tr>
      <td>
        destination
      </td>

      <td>
        Destination phone number
      </td>

      <td />
    </tr>

    <tr>
      <td>
        Template
      </td>

      <td>
        JSON containing template details
      </td>

      <td>
        \- Must include valid template id

        * Params must include all params including a product ID (which is to be used as a thumbnail (last in the list))
      </td>
    </tr>
  </tbody>
</Table>

### Response Parameters

| Key     | Description    |
| :------ | :------------- |
| status  | Message status |
| Message | Message ID     |