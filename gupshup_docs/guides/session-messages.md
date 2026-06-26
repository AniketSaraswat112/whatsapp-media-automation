> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Session messages

You can send Session messages to Active users only. When a user sends a message to your WhatsApp Business API, they become an active user. A session starts from the latest user message. Sessions remain Active for 24 hours.

## Replies

Business can reply to a specific user message using contextual bubble on WhatsApp. his feature is available for CAPI users i.e. when WhatsApp docker is hosted in Meta cloud

### Payload Description

```
{
  "text":"",
  "type":"text",
  "context": {
    "msgId": ""
  }
}
```

| Key               | Desciption                  | Constraint                     |
| :---------------- | :-------------------------- | :----------------------------- |
| message\_id/msgId | Message Id to send reply to | Must not be older than 30 days |

You can use our [send message API](https://docs.gupshup.io/reference/sendmessage) for sending session messages.