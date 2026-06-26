> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Setup Configuration

## Don't have a Gupshup Account yet?

Get Started today: [https://www.gupshup.io/contact-us](https://www.gupshup.io/contact-us)

# Already using Gupshup?

At Gupshup, we onboard our clients on 3 kinds of Accounts, based on their needs and use-cases. They are:

1. Console Self-Serve
2. Self-Serve
3. Enterprise / Console Enterprise

**\**NOTE***: If you are not aware of the type of Gupshup account you are using, please check out the following documentation: [https://docs.gupshup.io/docs/integration-configuration-assistant](https://docs.gupshup.io/docs/integration-configuration-assistant)

Now that you might be aware of the type of account you are using, let's move forward.

After clicking "**WhatsApp Messaging By Gupshup,**" a popup window will display three tabs:

1**Template Messaging** -Template Messaging refers to pre-approved message templates that can be used to send consistent and standardized messages to users.\
2.**Session Messaging** - Session Messaging involves real-time, interactive conversations between a user and a business within a specific time frame.\
3.**Channel Configuration** -Channel Configuration refers to the setup and management of communication channels used for messaging.

\***\*Click on the "Add channel" textbox and input the necessary information to proceed with adding a new channel\*\***

<Image align="center" className="border" border={true} src="https://files.readme.io/b3c22f4-2024-05-24_12-25.png" />

* After opening the configuration screen, you can proceed with entering the necessary channel details

<Image align="center" className="border" border={true} src="https://files.readme.io/9e1b6dd-2024-05-24_12-31.png" />

* If your channel hasn't been configured yet, you'll be directed to the Channel Configuration screen.
* In this documentation, we'll center our attention on the Channel Configuration tab. Click on this tab to proceed with configuring your Gupshup WhatsApp Business account.
* Don't have a Gupshup Account yet?
* Get Started today: [https://www.gupshup.io/contact-us](https://www.gupshup.io/contact-us)

<br />

# Configure a Gupshup Enterprise / Console Enterprise Account

* If you have a Gupshup Enterprise account, please head over to Channel config page and begin with creating a channel first.

**On clicking Enterprise button in Channel config screen, we will get to see the following fields which we need to fill up correctly** :

**1.Channel Name**: Give any random name to your channel

**2.User Name**: Use the HSM Account ID shared by the Gupshup team over Email during account activation.

**3.Password:** Use the HSM Account Password shared by the Gupshup team over Email during account activation.

**4.country code** : Use the based on the country code field.

**5. Business No**: A Verified Business Phone Number, to test sending of messages, you must have a Verified Business Phone Number linked to your account.

<Image align="center" className="border" border={true} src="https://files.readme.io/1e913ae-2024-05-24_12-49.png" />

Once you've entered the required details mentioned above, choose the features you wish to activate by selecting their respective checkboxes. We'll provide detailed information about these features in the Features document. Finally, click the Submit button to save your configuration settings.

## Configure Gupshup  Self-Serve / Console Self-Serve Account

If you have a Gupshup Self-Serve account, please enter the following details and click submit button to save configuration. You need to choose the "channel config " tab for configuring the integration.

After opening the configuration screen, you can proceed with entering the necessary channel detail

**Following details are needed to configure the extension to use a Self-Serve account**

1.channel name

2.App Name

3.App ID (WABA ID)

4.API Key

5.country ode

6.Business WhatsApp Number(WABA number)

In case you are facing trouble in retrieving these details, please follow the documentation below:

* Console Self-Serve Accounts: [https://docs.gupshup.io/docs/configure-console-self-serve-integration](https://docs.gupshup.io/docs/configure-console-self-serve-integration)
* Self-Serve Account: [https://docs.gupshup.io/docs/configure-self-serve-integration](https://docs.gupshup.io/docs/configure-self-serve-integration)\
  On clicking selfserve button in Channel config screen, we will get to see the following fields which we need to fill up correctly :

<Image align="center" className="border" border={true} src="https://files.readme.io/a1c1f80-2024-05-24_13-42.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/f817604-2024-05-24_13-45.png" />

<br />

**Enable to receive inbound messages in hubspot :**\
Enable this checkbox to receive incoming messages on the Waba number.

**Enable contact creation :**\
Enable this checkbox to create a lead for incoming messages on the Waba number from unknown senders.

**Enable create timeline activity :**\
Enable this checkbox to create a timeline activity

* Once done with the configuration of Self Serve WABA and Hubspot's Gupshup App Extension, we need to cross check if the Callback URL is set properly with our app. In order to do this, we will have to go to the Gupshup's official website \[ [gupshup.io](gupshup.io) ] and in Whatsapp's Dashboard section \[ [gupshup.io/whatsapp/dashboard](gupshup.io/whatsapp/dashboard) ], we will find our App name. Just click on your App Name and then scroll down a bit to find Callback URL panel.

<Image align="center" className="border" border={true} src="https://files.readme.io/b1af578-image.png" />

* Click on Callback URL / Link your Bot.

<Image align="center" className="border" border={true} src="https://files.readme.io/1cc5560-image.png" />

<br />

* Once we click on Callback URL,

1. Please ensure that the Callback URL is enabled and
2. Please make sure the Callback URL set is of Hubspot.

<Image align="center" className="border" border={true} src="https://files.readme.io/a8f4cab-image.png" />

* Now we are all set to experience the benefits of having a two way communication with our Clients in the Hubspots's Gupshup App Extension by :

1. Initializing the conversation by sending a template message from Hubspot's Gupshup App Extension.
2. After we receive the first reply from Client's end, we can then be able to have a two way chat

* When you click on the "**Cancel**" button, all input field data will be cleared.\[selfserve.

<Image align="center" className="border" border={true} src="https://files.readme.io/fbd4cbb-2024-05-24_13-51.png" />

<br />

<Image align="center" className="border" border={true} src="https://files.readme.io/4632444-2024-05-24_13-52.png" />

## Add one more channel setup :

* we have already created one channel. Now, I am creating another by clicking on the blue "**Add Channel**" label.

<Image align="center" className="border" border={true} src="https://files.readme.io/d98a44f-2024-05-24_13-57.png" />

<br />

## Add one more selfserve:

* we have already created a self-serve channel. Now, I am creating another channel for   self-serve.

<Image align="center" className="border" border={true} src="https://files.readme.io/85fc579-2024-05-24_13-59.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/d6acc33-2024-05-24_14-00.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/e62a6e0-2024-05-24_14-02.png" />

## Add one more enterprise:

* weI have already created a enterprise channel. Now, I am creating another channel for enterprise
* You need to choose the **Enterprise** tab for configuring the integration.

**Channel Name**: Assign a unique name for your account to identify it.

**HSM Account ID**: Use the HSM Account ID shared by the Gupshup team over Email during account activation.

**Password / HSM Account Password**: Use the HSM Account Password shared by the Gupshup team over Email during account activation.

**country code** : Use the based on the country code field.

**WhatsApp Business No**: A Verified Business Phone Number, to test sending of messages, you must have a Verified Business Phone Number linked to your account.

* After entering the details, click Submit to save the configuration.

<Image align="center" className="border" border={true} src="https://files.readme.io/aa2a4fb-2024-05-24_14-09.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/8b0a280-2024-05-24_14-11.png" />

## Edit field for enterprise:

* We have already created a enterprise channel. I need to make changes to the password and mobile number,  Please click on the respective fields and make the changes.

<Image align="center" className="border" border={true} src="https://files.readme.io/7c0f398-2024-05-24_14-18.png" />

## Edit field for selfserve

* We have already created a self-serve channel. I need to make changes to the API key, app ID, and phone number. Please click on the respective fields and make the changes.

<Image align="center" className="border" border={true} src="https://files.readme.io/807f224-2024-05-24_14-20.png" />

<br />

## Click the delete button  enterprise & selfserve

* we have already set up an selfserve channel to facilitate communication within our organization. However, due to certain changes or reasons,  now need to remove this channel from our system
* When you click the "**OK**" button, the specific channel will be available for deletion on the configuration page.

<Image align="center" className="border" border={true} src="https://files.readme.io/1b5e844-2024-05-24_14-25.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/4983cd3-2024-05-24_14-26.png" />

* When you click the "**Cancel**" button, that particular channel will be available on the configuration page.

<Image align="center" className="border" border={true} src="https://files.readme.io/d734b6f-2024-05-24_14-27.png" />

* When you click the "**UPDATE**" button, the specific channel will be updated.

<Image align="center" className="border" border={true} src="https://files.readme.io/961b235-2024-05-24_15-13.png" />