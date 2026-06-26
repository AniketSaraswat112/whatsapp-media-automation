> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Subscriptions and notifications

## Event subscriptions

An event subscription is a registration that specifies a particular event is about to be performed. When the triggering event happens, it indicates that the event is important to the system.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Events that require subscription
      </th>

      <th>
        Events that do not require subscription
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **System Events**

        * Template events
        * Account events: tier-events, pndn-events, review-events, status-events, capability-events.
      </td>

      <td>
        **User Events**

        * Sandbox-start
        * Opted-in
        * Opted-out
      </td>
    </tr>

    <tr>
      <td>
        **Message Events**

        * Read
        * Sent
        * Delivered
        * Delete
        * Others
      </td>

      <td>
        **Message Events**

        * Enqueued
        * Failed
        * Mismatch

        **Message (User messages)**\
        **Billing Events**
      </td>
    </tr>
  </tbody>
</Table>

## Notifications

Whenever a trigger event occurs, the WhatsApp Self-Serve Platform sees the event and sends a notification to your configured Webhook URL. There are two types of notifications you will receive on your webhook/ callback URL.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Type of notification
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Inbound events
      </td>

      <td>
        These notifications are the events related to your WhatsApp business API.
      </td>
    </tr>

    <tr>
      <td>
        Inbound messages
      </td>

      <td>
        These notifications are the messages sent to you by your users.
      </td>
    </tr>
  </tbody>
</Table>

## Payload object

The following payload is common to all inbound notifications.

```json Common inbound notification payload
{
  "app": "DemoApp",
  "timestamp": 1580227766370,
  "version": 2,
  "type": "account-event"|"user-event"|"template-event"|"message-event"|"billing-event"|"message",
  "payload": # This payload object varies according to the value of the property "type"
}
```

## Description: Payload object

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
        `app`
      </td>

      <td>
        The name of the Gupshup Access API app to which the customer has sent a message on WhatsApp.
      </td>

      <td>
        DemoApp
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`
      </td>

      <td>
        UNIX timestamp of the message sent by the customer that was received by Gupshup
      </td>

      <td>
        1584898839530
      </td>
    </tr>

    <tr>
      <td>
        `version`
      </td>

      <td>
        The payload's version that was received on the callback.
      </td>

      <td>
        2
      </td>
    </tr>

    <tr>
      <td>
        `type`
      </td>

      <td>
        The type of inbound notification.

        **Possible values:**

        1. `user-event`
        2. `system-event`
        3. `message-event`
        4. `billing-event`
        5. `message`
      </td>

      <td>
        user-event
      </td>
    </tr>

    <tr>
      <td>
        `payload`
      </td>

      <td>
        The payload object contains information of the respective notification type.

        Refer inbound payload description for different [events](https://docs.gupshup.io/docs/inbound-events) and [messages](https://docs.gupshup.io/docs/inbound-messages).
      </td>

      <td>
        For type: `user-event`

        ````{ "phone":"918x98xx21x4","type":"sandbox-start"
        }```

         
        ````
      </td>
    </tr>
  </tbody>
</Table>