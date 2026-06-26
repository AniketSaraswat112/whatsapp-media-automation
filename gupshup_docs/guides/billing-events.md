> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Billing events

<Callout icon="📘" theme="info">
  There is no Meta fees charged for service conversations 1st Nov onwards, hence the billable parameter will be false for service conversations
</Callout>

The billing-event informs you if a conversation is billable or not. Learn more about [Conversation based pricing](https://support.gupshup.io/hc/es-co/articles/4414423534617).

```json billing-event
{
    "app": "DemoAPI",
    "timestamp":1580546677791,
    "version":2,
    "type": "billing-event",
    "payload":{
        "deductions":{
            "type": "marketing/authentication/utility/service/FEP/FTC/marketing_lite",
            "conversationType": "service",
            "model": "NBP/CBP/PMP",
            "source": "whatsapp",
            "billable":"true/false"
       },
        "references":{
            "id":"59f8db90c37e-4408-90ab-cc54ef8246ad",
            "gsId":"ee4a68a0-1203-4c85-8dc3-49d0b3226a35",
            "conversationId":"532b57b5f6e63595ccd74c6010e5c5c7",
            "destination":"91XX985XX10X"
        }
    }
}
```

```Text billing-event-MM Lite
{
  "app": "ODTestXXXXX",
  "timestamp": 1743831556261,
  "version": 2,
  "type": "billing-event",
  "payload": {
    "deductions": {
      "type": "marketing_lite",
      "model": "PMP",
      "source": "whatsapp",
      "billable": true/false
    },
    "references": {
      "id": "ee1fdcfa-5a71-409f-8e5e-8b43c552a71a",
      "gsId": "ab4085f3-7d1b-4331-95d3-da301ad25baa",
      "conversationId": "ce17b8adb8ddfe3700a7f86c3f952e78",
      "destination": "919108568600"
    }
  }
}
```

`deductions` object description

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
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `type`
      </td>

      <td>
        The type of conversation. Possible values:

        * FEP (Free entry point)
        * Marketing
        * Marketing\_Lite
        * Authentication
        * Utility\
          -Service
        * FTC (Free Tier conversation)
      </td>

      <td>
        Marketing
      </td>
    </tr>

    <tr>
      <td>
        `conversationType`
      </td>

      <td>
        The type of FTC(Free Tier Conversation). This parameter is only received for `type` FTC.\
        If type='FTC' then conversationType is "service"
      </td>

      <td>
        Service
      </td>
    </tr>

    <tr>
      <td>
        `model`
      </td>

      <td>
        The pricing policy model applied for this message. Possible values:

        * CBP (Conversation based pricing)
        * NBP (Notification based pricing)
      </td>

      <td>
        CBP
      </td>
    </tr>

    <tr>
      <td>
        `source`
      </td>

      <td>
        Origin source of the conversation
      </td>

      <td>
        whatsapp
      </td>
    </tr>

    <tr>
      <td>
        `billable`
      </td>

      <td>
        The value is either `true` or `false` depending on whether a conversation is billable or not.
      </td>

      <td>
        false
      </td>
    </tr>
  </tbody>
</Table>

`references` object description

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
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `id`
      </td>

      <td>
        Unique WhatsApp identifier for a message
      </td>

      <td>
        59f8db90c37e-4408-90ab-cc54ef8246ad
      </td>
    </tr>

    <tr>
      <td>
        `gsId`
      </td>

      <td>
        Unique Gupshup identifier for a message
      </td>

      <td>
        ee4a68a0-1203-4c85-8dc3-49d0b3226a35
      </td>
    </tr>

    <tr>
      <td>
        `conversationId`
      </td>

      <td>
        Unique identifier for a conversation
      </td>

      <td>
        532b57b5f6e63595ccd74c6010e5c5c7
      </td>
    </tr>

    <tr>
      <td>
        `destination`
      </td>

      <td>
        Phone number of the user engaged in the conversation.\
        Phone Number will be in E.164 format.
      </td>

      <td>
        91XX985XX10X
      </td>
    </tr>
  </tbody>
</Table>