> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Interactive Messages

Interactive messages give your users a simpler way to find and select what they want from your business on WhatsApp.

## Types of Interactive Messages:

* **List Messages**: Messages with up to 10 items in a menu. When customers are engaged with a business, this kind of messaging provides a quicker and more reliable approach for them to choose.
* **Reply Button Messages**: Messages with three alternatives, each of which is a button. Users may choose from a menu more quickly when communicating with a business using this kind of communication. The user experience of reply buttons is the same as that of interactive templates with buttons.
* **Single-Product Messages**: Messages with a single product item from the business’s inventory. The product is displayed in a Product Detail Page (PDP) format. See [Share Products With Customers](https://developers.facebook.com/docs/whatsapp/guides/commerce-guides/share-products-with-customers) for more information.
* **Multi-Product Messages**: Messages containing a selection of up to 30 items from a business’ inventory. See [Share Products With Customers](https://developers.facebook.com/docs/whatsapp/guides/commerce-guides/share-products-with-customers) for more information.
* **Location Request Messages**: Messages that request the user's location.
* **Address Messages**: Address messages give your users a simpler way to share the shipping address with the business on WhatsApp.

## Interactive Message Specifications

* It is possible to integrate interactive messages into one flow.
* Users can go back and re-open an earlier message, but they cannot pick more than one choice from a list or button message at once.
* It is not possible to utilize list or respond button messages as notifications. They may now only be sent up to 24 hours after the user's last message. You receive an error notice if you attempt to send a message after the 24-hour timeframe has passed.
* Supported platforms include the web, iOS, and Android.

## Product Messages

The Product Messages enable businesses to showcase their products and services to their customers without leaving the WhatsApp app.

Both Multi-Product Messages and Single Product Messages are types of session interactive messages meaning you are not required to get them approved from WhatsApp, unlike template messages - they cannot be sent as notifications but can only be sent as part of existing conversations.

### Single Product Messages

Single product message comprises of **Body**(Optional), **Footer**(Optional), and **Action**(Mandatory).

<img src="https://files.readme.io/d13e483-single_product_message.png" alt="Single Product Message example" style={{ display: "block", margin: "0 auto", border: "1px solid #dedede", borderRadius: "6px" }} />

<img src="https://files.readme.io/1eddb54-SPM.png" alt="Product Detail Page Example" style={{ display: "block", margin: "0 auto", border: "1px solid #dedede", borderRadius: "6px" }} />

### Multi-Product Messages

The multi-Product message comprises of **Header**(Mandatory), **Body**(Mandatory), **Footer**(Optional), and **Action**(Mandatory).

<figure style={{ textAlign: "center" }}>
  <img src="https://files.readme.io/9481a0e-multipro.png" alt="Multi-Product Message Example" style={{ display: "block", margin: "0 auto", border: "1px solid #dedede", borderRadius: "6px" }} />

  <figcaption style={{ fontSize: "14px", color: "#555", marginTop: "8px" }}>
    Multi-Product Message Example
  </figcaption>
</figure>

<figure style={{ textAlign: "center", marginTop: "24px" }}>
  <img src="https://files.readme.io/e2ea5bb-mpm.png" alt="Menu triggered when user clicks on Start Shopping" style={{ display: "block", margin: "0 auto", border: "1px solid #dedede", borderRadius: "6px" }} />

  <figcaption style={{ fontSize: "14px", color: "#555", marginTop: "8px" }}>
    Menu triggered when user clicks on Start Shopping
  </figcaption>
</figure>

### Main Actions of Product Messages

Users that receive Multi and Single Product Messages can perform 3 main actions:

* **View products**: Customers can see a list of products or just one product. Whenever a user clicks on a specific item, WhatsApp fetches the product's latest info and displays the product in a Product Detail Page (PDP) format. Currently, PDPs only support product images —any videos and/or GIFs added to the product won’t be displayed in the PDP.
* **Add products to a cart**: Whenever a user adds a product to the shopping cart, WhatsApp fetches the item’s latest info. If there has been a state change on any of the items, WhatsApp displays a dialog saying “One or more items in your cart have been updated” — See Product Updates given below for more information. A cart persists in a chat thread between the business and the customer until the cart is sent to the business —See Shopping Cart Experience given below for details.
* **Send a shopping cart to the business**: After adding all needed items, customers can send their cart to the business they’re messaging with. After that, businesses can define the next steps, such as requesting delivery info or giving payment options.

> 📘
>
> If a customer has multiple devices linked to the same WhatsApp account, the Multi-Product and Single Product Messages will be synced between devices. However, the shopping cart is local to each specific device.

Refer [here]() for a detailed application, specifications, and experience in using product messages.

## Location Request Messages

Location request messages contain body text and a Send location button that users can tap. Tapping the button displays a location-sharing screen which the user can then use to share their location.

```curl Request Payload
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'apikey: {{apikey}}' \
--header 'cache-control: no-cache' \
--header 'content-type: application/x-www-form-urlencoded' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source={{src no}}' \
--data-urlencode 'destination={{dest no}}' \
--data-urlencode 'message={
    "type": "location_request_message",
    "body": {
        "text": "test location"
    },
    "action": {
        "name": "send_location"
    }
}' \
--data-urlencode 'src.name={{source_name}}'
```

```json
{
    "recipient_type": "individual",
    "to": "916205947795",
    "type": "interactive",
    "interactive": {
        "type": "location_request_message",
        "body": {
            "type": "text",
            "text": "test location"
        },
        "action": {
            "name": "send_location"
        }
    }
}
```

```json Incoming Payload
{
    "app": "app_name",
    "timestamp": 1699445520743,
    "version": 2,
    "type": "message",
    "payload": {
        "id": "ABEGkYkQhkNxAhAkqxGZzCEyTYqouWRfOda_",
        "source": "source no",
        "type": "location",
        "payload": {
            "name":"Rahul", #Optional
            "longitude": "86.9930474",
            "latitude": "23.6791297",
            "address":"11 Rose Apt" #Optional
        },
        "sender": {
            "phone": "918910864371",
            "name": "name",
            "country_code": "91",
            "dial_code": "dialcode"
        },
        "context": {
            "id": "c3dc17e8-9a61-4114-aeae-b546aed99819",
            "gsId": "42d15ba4-1ad7-4adb-bea3-ea030da37fa5",
            "forwarded": false,
            "frequently_forwarded": false
        }
    }
}
```

Refer [here](https://developers.facebook.com/docs/whatsapp/guides/interactive-messages#location-request-messages) for detailed information on location request messages.

## Address Messages

Address messages are interactive messages that contain the 4 main parts: header, body, footer, and action. Inside the action component business specifies the name “address\_message” and relevant parameters.

> 📘
>
> This feature is only available for businesses based in Singapore and their Singapore customers, and businesses based in India and their India customers.

The below table outlines which fields are supported in which country specifically.

| Field Name     | Display Label     | Input Type | Supported Countries | Limitations              |
| :------------- | :---------------- | :--------- | :------------------ | :----------------------- |
| name           | Name              | text       | India, Singapore    | None                     |
| phone\_number  | Phone Number      | text       | India, Singapore    | Valid phone numbers only |
| in\_pin\_code  | Pin Code          | text       | India               | Max length: 6            |
| sg\_post\_code | Post Code         | number     | Singapore           | Max length: 6            |
| house\_number  | Flat/House Number | text       | India               | None                     |
| India          | Floor Number      | text       | India               | None                     |
| tower\_number  | Tower Number      | text       | India               | None                     |
| building\_name | Building Name     | text       | India               | None                     |
| address        | Address           | text       | India, Singapore    | None                     |
| landmark\_area | Landmark Area     | text       | India               | None                     |
| unit\_number   | Unit Number       | text       | Singapore           | None                     |
| city           | City              | text       | India, Singapore    | None                     |
| state          | State             | text       | India               | None                     |

![](https://files.readme.io/19b7092-image.png)

Refer here for detailed information on [Address messages](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages?content_id=mME54G4IwKg3fi7#address-messages) and how to [send](https://developers.facebook.com/docs/whatsapp/api/messages/address-messages) them.

## Send Address Message

> 📘
>
> * Supported on both CAPI and On-Premise.
> * Message Type should always be “address\_message".
> * In address payload, country field is compulsory.
> * While sending saved address in address payload, validation errors can not be sent. If validation errors are sent, the user will not be shown saved address.

```curl Request
curl --location 'https://api.gupshup.io/wa/api/v1/msg' \
--header 'apikey: {{api_key}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source={{source}}' \
--data-urlencode 'src.name={{srcname}}' \
--data-urlencode 'destination={{destination}}' \
--data-urlencode 'message={
  "type": "address_message",
  "header": {
    "text": "Hi"
  },
  "body": {
    "text": "Hi"
  },
  "footer": {
    "text": "Hi"
  },
  "address": {
    "country": "IN",
    "values": {
      "name": "CUSTOMER_NAME",
      "phoneNumber": "+91xxxxxxxxxx",
      "inPinCode": "11001",
      "houseNumber": "104",
      "floorNumber": "3",
      "towerNumber": "1",
      "buildingName": "Delhi Tower",
      "address": "Janpath Rd",
      "landmarkArea": "Khurshid Lal",
      "city": "Delhi"
    },
    "savedAddresses": [
      {
        "id": "address_id",
        "address": {
          "name": "CUSTOMER_NAME",
          "phoneNumber": "+91xxxxxxxxxx",
          "inPinCode": "11001",
          "houseNumber": "104",
          "floorNumber": "3",
          "towerNumber": "1",
          "buildingName": "Delhi Tower",
          "address": "Janpath Rd",
          "landmarkArea": "Khurshid Lal",
          "city": "Delhi"
        }
      }
    ],
    "validationErrors": {
      "inPinCode": "We could not locate this pin code."
    }
  }
}' \
--data-urlencode 'channel=whatsapp'
```

```json Incoming Payload
{
    "app": "<app_name>",
    "timestamp": 1693824819662,
    "version": 2,
    "type": "message",
    "payload": {
        "id": "<message_id>",
        "source": "<recipient_number>",
        "type": "nfm_reply",
        "payload": {
            "id": "123456",
            "name": "address_message",
            "addressDetails": {
                "name": "Customer_number",
                "address": "Janpath Rd",
                "city": "Delhi",
                "state": "Delhi",
                "phone_number": "+919xxxxxxxxx",
                "in_pin_code": "11001",
                "house_number": "104",
                "floor_number": "3",
                "tower_number": "1",
                "building_name": "Delhi Tower",
                "landmark_area": "Khurshid Lal"
            },
            "body": "Aditya\n+919xxxxxxxxx\n11001, Delhi Tower, Khurshid Lal, Janpath Rd, 1, Delhi, 104, 3, Delhi"
        },
        "sender": {
            "phone": "<recipient_number>",
            "name": "Aditya Shrivastava",
            "country_code": "91",
            "dial_code": "<recipient_number_without_country_code>"
        },
        "context": {
            "id": "2b28cae6-76a2-48b5-858e-f28f24eebb0c",
            "gsId": "6456e32f-b14a-4c70-b004-29b9094ae569",
            "forwarded": false,
            "frequently_forwarded": false
        }
    }
}
```

### Meta Payloads Example

```json CAPI
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "91xxxxxxxxxx",
  "type": "interactive",
  "interactive": {
    "type": "address_message",
    "body": {
      "text": "Thanks for your order! Tell us what address you’d like this order delivered to."
    },
    "action": {
      "name": "address_message",
      "parameters": {
          "country": "IN",
          "values": {
              "name": "CUSTOMER_NAME",
              "phone_number": "+65xxxxxxxxxx"
          },
          "saved_addresses": [
             {
                 "id": "address1",
                 "value": {
                    "name": "CUSTOMER_NAME",
                    "phone_number": "+91xxxxxxxxxx",
                    "in_pin_code": "400063",
                    "floor_number": "8",
                    "building_name": "",
                    "address": "Wing A, Cello Triumph,IB Patel Rd",
                    "landmark_area": "Goregaon",
                    "city": "Mumbai"
                 }
             }
          ]
       }
    }
  }
}
```

```json On-Premise
{
  "to": "PHONE_NUMBER",
  "recipient_type": "individual",
  "interactive": {
    "type": "address_message",
    "header": {
      "text": "header"
    },
    "body": {
      "text": "body"
    },
    "footer": {
      "text": "footer"
    },
    "action": {
      "name": "address_message",
      "parameters": {
        "country": "IN",
        "values": {
          "name": "CUSTOMER_NAME",
          "phone_number": "+91xxxxxxxxxx"
        },
        "saved_addresses": [
          {
            "id": "address_id",
            "value": {
              "name": "CUSTOMER_NAME",
              "phone_number": "+91xxxxxxxxxx",
              "in_pin_code": "11001",
              "house_number": "104",
              "floor_number": "3",
              "tower_number": "1",
              "building_name": "Delhi Tower",
              "address": "Janpath Rd",
              "landmark_area": "Khurshid Lal",
              "city": "Delhi"
            }
          }
        ]
      }
    }
  }
}
```

### Response

<HTMLBlock>
  {`
  <table style="width: 100%; border-collapse: collapse;">
  <thead>
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px;">Status Code</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Response</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Comment</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Success <strong>200</strong> </p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>{<br>    &quot;status&quot;: &quot;submitted&quot;,<br>    &quot;messageId&quot;: &quot;3150a255-492c-410a-8051-c4b37b38ef40&quot;<br>}</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Error <strong>401</strong></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>{<br>    &quot;message&quot;: {<br>        &quot;message&quot;: &quot;Authentication Failed&quot;<br>    },<br>    &quot;status&quot;: &quot;error&quot;<br>}</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>When APIKey authentication fails or apikey is not sent</p>
  </td>
  </tr>
  </tbody>
  </table>
  `}
</HTMLBlock>

### Request Parameters

| Key         | Description                                          | Constraints                         |
| :---------- | :--------------------------------------------------- | :---------------------------------- |
| apikey      | Apikey of the account where the app is to be created | Should be a valid gupshup.io apikey |
| source      | Source Phone Number                                  |                                     |
| src.name    | Source App Name                                      |                                     |
| destination | Destination number                                   |                                     |
| message     | Catalog message payload                              |                                     |
| channel     | Channel to send messages to                          | Must be WhatsApp                    |

### Message Payload

| Key     | Description            | Constraints                                    |
| :------ | :--------------------- | :--------------------------------------------- |
| type    | Message type           | Should be address\_messagefor address messages |
| header  | Message header content |                                                |
| body    | Message body content   |                                                |
| footer  | Message Footer content | Optional                                       |
| address | Address payload        | Should be a valid address payload              |