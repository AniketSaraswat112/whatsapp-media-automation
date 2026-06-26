> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Two Way WhatsApp Messaging

This functionality helps users to send Two Way WhatsApp messages(allows users to send and receive messages from a WhatsApp number through a WhatsApp messaging platform)

> Note: Brands can reply to a customer’s query on WhatsApp only within 24 hours from the\
> customer’s last message on Brands business WhatsApp. When a user sends a message to your WhatsApp Business API, they become an active user. A session starts from the latest user message. Sessions remain Active for **24 hours**.

To receive a customer's inbound message, we needs to set a callback URL in the WABA account. Please refer the below section [How to setup callback URL](https://docs.gupshup.io/docs/two-way-whatsapp-messaging#set-callback-url--to-receive-inbound-message-callback-url)

Considering the example of Lead module.

* Go to the Lead module
* Open a lead record
* Click on the **WhatsApp Message** Button
* Please ensure that the lead phone and mobile numbers are saved with the **respective country codes**.

<Image alt="WhatsApp Message Extension " align="center" border={true} src="https://files.readme.io/33c97cc-Click_on_extension.png">
  WhatsApp Message Extension
</Image>

* WhatsApp Messaging Screen Will Pop – Up, click on Session Messaging

<Image alt="Session Messaging" align="center" border={true} src="https://files.readme.io/650a9f4-Click_Session.png">
  Session Messaging
</Image>

* Select Channel and select Phone/Mobile Number (On which the Message is to be sent)
* If the session is not active you’ll see the below message, as mentioned below session will be active only for 24hrs from the customer’s last message.

<Image alt="Inactive Session " align="center" border={true} src="https://files.readme.io/d49d5b8-session_inactive.png">
  Inactive Session
</Image>

* If the session is active, you’ll be able to send the message.
* To receive **incoming messages** on the **session messaging** platform, please ensure that the leads phone and mobile numbers are saved with their **respective country codes.**

<Image alt="Active Session" align="center" border={true} src="https://files.readme.io/6f5d59c-Active__Session.png">
  Active Session
</Image>

* If Incoming message is received on WABA Number

<Image align="center" className="border" border={true} src="https://files.readme.io/51a5aff-Active_session.png" />

<br />

* Custom messages : user can send custom text and media messages.

<Image alt="Custom Message " align="center" border={true} src="https://files.readme.io/36e0adb-custom_message.png">
  Custom Message
</Image>