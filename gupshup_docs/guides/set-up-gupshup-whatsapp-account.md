> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Set Up Gupshup WhatsApp Account

To send WhatsApp messages via Gupshup, you need to set up your Gupshup WhatsApp Business account in Salesforce Marketing Cloud. Follow these steps:

1. Create a New Journey:
   1. Start by creating a new journey in Journey Builder. Follow these steps:
   2. Click on **Create New Journey** to initiate the process.
2. Build a Multi-Step Journey:
   1. Under the new journey, click Build under **Multi-Step Journey**. This allows you to create a multi-step journey that includes WhatsApp Template Messages.
3. Configure Entry Source:
   1. Drag and drop your chosen **entry source** onto the canvas. You can use either a **Data Extension** or **API Event** as your entry source.
4. Configure Entry Source Details:
   1. Click on the Data extension entry source you added to the canvas.
   2. Click on Summary.
   3. Click Done to confirm and save your entry source configuration.
5. Add Gupshup WhatsApp Message Integration Activity:
   1. Drag and drop the **WhatsApp Messaging By Gupshup** custom activity onto the canvas.
6. Configure Gupshup WhatsApp Message Integration Activity:
   1. Click on the **WhatsApp Messaging By Gupshup** custom activity to configure it.
   2. Add an activity name and description to help identify it within the journey.
7. Configure Gupshup WhatsApp Channel:
   1. After clicking **WhatsApp Messaging By Gupshup** custom activity, a popup window will appear with two tabs: **Template Messaging** and **Channel Configuration**. If your channel is not yet configured, you will be directed to the Channel Configuration screen.
   2. In this documentation, we'll focus on the **Channel Configuration** tab.
8. Click on the **Channel Configuration** tab to continue configuring your Gupshup WhatsApp Business account.

Don't have a Gupshup Account yet?\
Get Started today: [https://www.gupshup.io/contact-us](https://www.gupshup.io/contact-us)

### Configure a Gupshup Enterprise / Console Enterprise Account

To set up your Gupshup WhatsApp Business account or Console Enterprise Account for integration, follow these steps:

If you have a Gupshup WhatsApp Business account, please enter the following details and click submit button to save configuration. You need to choose the "Enterprise" tab for configuring the integration.

1. **Channel Name**: Assign a unique name for your account to identify it.
2. **HSM Account ID**: Enter the HSM (Highly Structured Message) Account ID that the Gupshup team shared with you via email during the account activation process.
3. **Password**: Use the HSM Account Password provided by the Gupshup team in the activation email.
4. **WhatsApp Business No**: Ensure that you have a Verified Business Phone Number linked to your account. This verified number is necessary for testing and sending messages.

Save Configuration:

After entering the required information, click the "Submit"  button to save the configuration.

### Video Tutorial

<Embed url="https://www.youtube.com/watch?v=fdhqWDKdwKg" title="How to Add Gupshup WhatsApp Channel in Salesforce Marketing Cloud - Step-by-Step Tutorial" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/fdhqWDKdwKg/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=fdhqWDKdwKg" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FfdhqWDKdwKg%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DfdhqWDKdwKg%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FfdhqWDKdwKg%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

<br />

### Configure Gupshup Self-Serve / Console Self-Serve Account

If you have a Gupshup Self-Serve or Console account, please enter the following details and click submit button to save configuration. You need to choose the "**Self-Serve**" tab for configuring the integration.

<br />

Following details are needed to configure the extension to use a Self-Serve account

* App Name
* App ID
* API Key
* Country Code
* WhatsApp Business Number\
  In case you are facing trouble in retrieving these details, please follow the documentation below:
  * Console Self-Serve Accounts: [https://docs.gupshup.io/docs/configure-console-self-serve-integration](https://docs.gupshup.io/docs/configure-console-self-serve-integration)
  * Self-Serve Account: [https://docs.gupshup.io/docs/configure-self-serve-integration](https://docs.gupshup.io/docs/configure-self-serve-integration)

<br />

<Image alt="Self-Serve Channel Configuration" align="center" border={true} src="https://files.readme.io/c40083f-9dca84a-Selfserve_channel_Configuration.png">
  Self-Serve Channel Configuration
</Image>

<br />

<Image alt="Self-Serve Channel Configuration" align="center" border={true} src="https://files.readme.io/cf77829-6e79169-Selfserve_channel_Configuration1.png">
  Self-Serve Channel Configuration
</Image>