> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Template messages

Template messages are Highly Structured(HSM)/ Notification messages. Once your WhatsApp Business API is Live, you can create template messages and submit them to WhatsApp for approval. You can send Template messages to users that you have opted-in. To know how you can opt-in users, read [frequently asked questions](https://support.gupshup.io/hc/en-us/articles/360012075919).

## API Endpoint

|                                                    |
| :------------------------------------------------- |
| [https://api.gupshup.io/wa/api/v1/template/msg](#) |

## Headers

| Header       | Value                             |
| :----------- | :-------------------------------- |
| Content-Type | application/x-www-form-urlencoded |
| Apikey       | Your Gupshup account API key      |

## Request body

<HTMLBlock>
  {`
  <table style="width: 100%; border-collapse: collapse;">
  <thead>
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px;">Key</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Sample</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>source</code></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Your registered WhatsApp Business API phone number.  </p>
  <p>The number must be in E. 164 format.</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>917834811114</p>
  </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>destination</code></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>User&#39;s phone number.</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>919876543210</p>
  </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>template</code></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>See <a href="https://docs.gupshup.io/docs/template-messages#template-object-description">template object description</a></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>{&quot;id&quot;: &quot;c6aecef6-bcb0-4fb1-8100-28c094e3bc6b&quot;,&quot;params&quot;: [&quot;Agent&quot;,&quot;Local Address&quot;,&quot;Tracking code&quot;]}</code></p>
  </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>message</code></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Required only if the template is of type Media - Image, Video, Document(.pdf) or location.  </p>
  <p>See <a href="https://docs.gupshup.io/docs/template-messages#message-object-description">message object description</a></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Image: <code>{&quot;type&quot;:&quot;image&quot;,&quot;image&quot;:{&quot;link&quot;:&quot;&quot;}}</code>  </p>
  <p>Video:<code>{&quot;type&quot;:&quot;video&quot;,&quot;video&quot;:{&quot;link&quot;:&quot;&quot;}}</code>  </p>
  <p>Document: <code>{&quot;type&quot;:&quot;document&quot;,&quot;document&quot;:{&quot;link&quot;:&quot;&quot;}}</code>  </p>
  <p>Location: <code>{&quot;type&quot;:&quot;location&quot;,&quot;location&quot;:{&quot;longitude&quot;:&quot;&quot;,&quot;latitude&quot;:&quot;&quot;}}</code></p>
  </td>
  </tr>
  </tbody>
  </table>
  `}
</HTMLBlock>

### Template object description

<HTMLBlock>
  {`
  <table style="width: 100%; border-collapse: collapse;">
  <thead>
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px;">Key</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Sample</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>id</code></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for a template  </p>
  <p>Use this <a href="https://docs.gupshup.io/reference/getalltemplatesforanapp">API to get all template details for an app</a>.</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>c6aecef6-bcb0-4fb1-8100-28c094e3bc6b</code></p>
  </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><p><code>params</code></p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>Array of placeholders/variables in the template in the order of occurrence.</p>
  </td>
    <td style="border: 1px solid #ddd; padding: 8px;"><p>[&quot;Agent&quot;,&quot;Local Address&quot;,&quot;Tracking code&quot;]</p>
  </td>
  </tr>
  </tbody>
  </table>
  `}
</HTMLBlock>

### Message object description

| Key                                         | Type   | Description                                                                         | Sample                                                                             |
| :------------------------------------------ | :----- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| `type`                                      | string | The type of media. Possible values are: `image`, `video`, `document` and `location` | `image`                                                                            |
| `image`, `video`, `document`, or `location` | object | This object has the link to the `type` of media file specified                      | `{"link":"https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg"}` |

## API Response

Send message API requests received by our platform are processed asynchronously, and hence you will always get an HTTP\_SUCCESS(200 to 299) response range if the API request made is correct. The API response includes an object with a Gupshup unique message identifier and status as submitted. Your callback URL/webhook will receive a message event stating the submitted message to the WhatsApp API client(which eventually sends the message to the customer) is enqueued or has failed.

| Header       | Value     |
| :----------- | :-------- |
| Content-Type | text/html |

```json 2XX
{
   "status":"submitted",
   "messageId":"ee4a68a0-1203-4c85-8dc3-49d0b3226a35"
}
```

The Gupshup unique message identifier that is the `messageId` in the API response will help you track messages through the inbound message events - enqueued, failed, sent, delivered, and read that you obtain on your webhook/callback URL.

## Sample requests

> 📘
>
> Following are sample API requests for each message type. These examples are for your reference only. You can create templates from settings in the app dashboard and submit them to WhatsApp for review.

```curl text
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'apikey: 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=917834811114' \
--data-urlencode 'destination=918x98xx21x4' \
--data-urlencode 'template={"id": "c6aecef6-bcb0-4fb1-8100-28c094e3bc6b","params": ["Agent","Local Address","Tracking code"]}'
```

```curl image
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'apikey: 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=917834811114' \
--data-urlencode 'destination=918x98xx21x4' \
--data-urlencode 'template={"id": "c6aecef6-bcb0-4fb1-8100-28c094e3bc6b","params": ["Agent","Local Address","Tracking code"]}' \
--data-urlencode 'message={"type":"image","image":{"link":"https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg"}}'
```

```curl document
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'apikey: 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=917834811114' \
--data-urlencode 'destination=918x98xx21x4' \
--data-urlencode 'template={"id": "c6aecef6-bcb0-4fb1-8100-28c094e3bc6b","params": ["Agent","Local Address","Tracking code"]}' \
--data-urlencode 'message={"type":"document","document":{"link":"https://www.buildquickbots.com/whatsapp/media/sample/pdf/sample01.pdf","filename": "Sample funtional resume"}}'
```

```curl video
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'apikey: 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=917834811114' \
--data-urlencode 'destination=918x98xx21x4' \
--data-urlencode 'template={"id": "c6aecef6-bcb0-4fb1-8100-28c094e3bc6b","params": ["Agent","Local Address","Tracking code"]}' \
--data-urlencode 'message={"type":"video","video":{"link": "https://www.buildquickbots.com/whatsapp/media/sample/video/sample01.mp4"}}'
```

```curl location
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: <api-key>' \
--data-urlencode 'channel=whatsapp' \
--data-urlencode 'source=91XXXXXXXXXX' \
--data-urlencode 'destination=91XXXXXXXXX6' \
--data-urlencode 'src.name=appname' \
--data-urlencode 'template={"id": "d10fb73f-c79a-42d9-XXXX-1XXXXXXd81","params": []}' \
--data-urlencode 'message={"type":"location","location":{"name":"1513  Farnum Road","address":"New York 10019","longitude":-79.0896492,"latitude":42.5950661}}'\'''
```

```curl CTA
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'apikey: 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=917834811114' \
--data-urlencode 'destination=918x98xx21x4' \
--data-urlencode 'template={"id": "c49ee21d-4d39-452d-a6c1-25b7615e01e4","params": ["John","docs/bot-platform/guide/whatsapp-api-documentation"]}' \
--data-urlencode 'message={"type":"document","document":{"link":"https://www.buildquickbots.com/whatsapp/media/sample/pdf/sample01.pdf","filename": "Sample funtional resume"}}'
```

```curl Quick reply
curl --location --request POST 'https://api.gupshup.io/wa/api/v1/template/msg' \
--header 'apikey: 2xxc4x4xx2c94xxxc2f9xx9d43xxxx8a' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'source=917834811114' \
--data-urlencode 'destination=918x98xx21x4' \
--data-urlencode 'template={"id": "c6aecef6-bcb0-4fb1-8100-28c094e3bc6b","params": ["12323XXXX"]}'
```

> 📘 For On-Prem apps
>
> * Location template message name and address are mandatory.
> * Location session message  name and address are mandatory.

> 📘 For Cloud apps
>
> * Location template message name and address are mandatory.
> * Location session message  name and address are NOT mandatory.