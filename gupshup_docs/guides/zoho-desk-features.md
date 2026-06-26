> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Features

1. Integrate your Gupshup WhatsApp business account and respond to WhatsApp queries directly from ZohoDesk
2. Multiple support agents can connect to the single WhatsApp support number to manage chats
3. Automated ticket creation message and ticket status updates to customer on WhatsApp
4. Media messages: Add image, document, and video attachments and send rich media messages

Providing a **detailed description** of each of the features included in this extension.

### Global Optin

You are trying to optin your Client’s Whatsapp number at Global level. Make it enabled every time, you create a new channel.

![](https://files.readme.io/64051f8-image.png)

### Set callback URL to receive incoming/inbound messages

![](https://files.readme.io/69ba203-image.png)

This feature allow users to connect with their clients and have one to one chat through Gupshup’s Zohodesk extension.

Once done with the configuration, we need to cross check if the Callback URL is set properly with our app. In order to do this, we will have to go to the Gupshup's official website \[ gupshup.io ] and in WhatsApp's Dashboard section \[ [gupshup.io/whatsapp/dashboard](gupshup.io/whatsapp/dashboard) ], we will find our App name. Just click on your App Name and then scroll down a bit to find Callback URL panel.

> 📘 Note : Cross checking if callback is set properly, it is possible only if you are trying to configure a Self Serve / Console Self Serve WABA.

### Self Serve WABA callback confirmation

1. Go to [gupshup.io/whatsapp/dashboard](gupshup.io/whatsapp/dashboard)
2. Click on the App name which you are trying to configure on Gupshup’s Zohodesk extension.

![](https://files.readme.io/844daa2-image.png)

3. Click on Callback URL / Link your Bot.

![](https://files.readme.io/ad64f88-image.png)

Once we click on Callback URL :-

* Please ensure that the Callback URL is enabled and
* Make sure the Callback URL set is of ZohoDesk.

![](https://files.readme.io/48fb97c-image.png)

### Console Self Serve WABA callback confirmation

1. Visit [Unified Console | Gupshup](https://console.gupshup.io/unified/dashboard)  login into your console dashboard with your credentials.
2. Once logged in, you will redirected to the landing page of the Console dashboard. Click on **Channels** drop down button in the left navigation menu.

![](https://files.readme.io/c7230d2-image.png)

3. Click on WhatsApp button mentioned in the expanded drop down section under Channels.

![](https://files.readme.io/47a50e8-image.png)

4. Go to the Webhooks tab by clicking on Webhooks button to check if the callback of Zohodesk is set properly or not.

### Auto Ticket creation

![](https://files.readme.io/a06ae32-image.png)

**Use cases** of this feature :

1. Enabling this feature auto generates the tickets based on the incoming messages that the users get on their WABA which they have configured.
2. If in case a ticket is already in Open state, then on receiving incoming messages from this particular Whatsapp number will no more auto generate tickets. Tickets are auto created only if all the tickets associated with that particular Whatsapp number are either in On Hold / Escalated / Closed state.

### Add Outbound messages to Ticket comments

![](https://files.readme.io/a6274f8-image.png)

This feature will allow users to see their outgoing messages \[ both Template messages and session / custom messages ] in the Conversations tab of Zohodesk tickets.

**Outgoing messages** : User will create channel by configuring their WABA either Self Serve / Enterprise WABA. After configuring, they will be able to send messages from their WABA to client’s Whatsapp number. Those messages are termed to be as Outgoing messages.

![](https://files.readme.io/d2f299c-image.png)

### Whatsapp notification on Ticket updates

![](https://files.readme.io/346a365-image.png)

This new feature includes sending Whatsapp Message to the Client :

1. On updating the Ticket Status \[For example : From Open to Pending / Pending to Resolved and so on..]
2. On updating the Ticket \[ specifically **Type** + **Priority** + **Group** + **Agent** + **Adding outbound messages to ticket comments** (This is because adding comments to a particular ticket itself is considered as a ticket update)]

Users can make use of the feature mentioned above by Enabling Whatsapp Message on Ticket Updates button in the Channel Config Page. Please go through the steps mentioned below in order to know.

First step would be to create 3 new templates from the WhatsApp Dashboard. The contents of the template body should be as mentioned :

| Template Name          | Content of the Template Body                         |
| :--------------------- | :--------------------------------------------------- |
| `ticket_add`           | `A new ticket has been created with case ID {{1}}`   |
| `change_ticket_status` | `The status of case {{1}} has been updated to {{2}}` |
| `ticket_update`        | `The case {{1}} has been updated`                    |

> 📘 Note : Do not include spaces / any character in the template body, while creating these templates from Whatsapp Analytics Dashboard. Content of the Template body should exactly be the same as mentioned above.

Now that we have enabled the Whatsapp Notification on Ticket Update feature, we can go ahead with creating a New Ticket to receive a Whatsapp Message.

![](https://files.readme.io/a1e828c-image.png)

If in case the user updates the following, his/her clients will receive a Whatsapp Notification notifying them that the ticket has been updated :

1. **Type**
2. **Priority**
3. **Group**
4. **Agent**
5. **Adding outbound messages to ticket comments** (This is because adding comments to a particular ticket itself is considered as a ticket update )

![](https://files.readme.io/1cf50a6-image.png)

Here, if in case the user updates the status of the ticket from one state to another, his/her client will receive a Whatsapp Message on updating the status of the ticket let’s say for example from Open to Pending / Pending to Resolved.

![](https://files.readme.io/bb1a32f-image.png)