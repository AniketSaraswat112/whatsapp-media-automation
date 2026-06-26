> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Feature #3: Bulk Messaging

To utilize the Bulk messaging feature in Salesforce (SFDC) using the Gupshup app with support for WhatsApp and SMS channels, follow these steps:

* Go to the Gupshup app in Salesforce.
* Select the "Bulk Messaging" tab within the app.

<Image alt="Bulk Messaging" align="center" border={true} src="https://files.readme.io/6592154-2d4b87f-image_21.png">
  Bulk Messaging
</Image>

* From the "Object Selection" drop-down, choose the Lead/contact object for which you want to send bulk messages.
* Select the desired list view that contains the records you want to send messages to.
* Within the selected list view, choose the specific records to which you want to send the messages.
* Click on the "Send Gupshup Message" button located at the top right corner of the page.

<Image alt="Choose object for bulk messaging" align="center" border={true} src="https://files.readme.io/44409d0-image_22.png">
  Choose object for bulk messaging
</Image>

* After clicking the button, you will be prompted with a warning message indicating that only opted-in users will receive the messages.

<Image alt="Opt-in warning" align="center" border={true} src="https://files.readme.io/5ba8faa-image_23.png">
  Opt-in warning
</Image>

## Send WhatsApp Messages

Once the Gupshup Messaging screen opens, follow these steps to send a WhatsApp message:

* Select the "Channel" from which you want to send the message (e.g., WhatsApp or SMS). the channel is already saved during the channel setup.
* Choose the desired phone number type, such as "Phone," "Office Number," or any other applicable option, for sending the message.
* Select the category of the message you want to send, such as "Text" for a simple text message, "Media" for media files like images or videos, or "Doc" for documents.\
  There are four categories – Text, Image, Video and Document
  * The selected template caption can be previewed in the template preview ox below,
  * For Media files, user need to upload the files and preview will be available on the screen.
* Choose a template if available. Templates provide pre-defined message content that can be customized as needed.
* Review the message content and ensure it meets your requirements.
* Click on the "Send" button to send the message.

<Image alt="Send WhatsApp messages" align="center" border={true} src="https://files.readme.io/a1f3be1-bulk_messaging_5.png">
  Send WhatsApp messages
</Image>

* **Message sent successfully** pops up and “Message sent” reflects in the “Chat history” screen.

## Send SMS messages

We need to add SMS templates manually in the Gupshup app before sending SMS bulk messages, follow these steps:

* Go to the Gupshup app from the App Launcher in Salesforce.
* Select the "Templates" tab.
* Click on the "New" button to create a new template.
* Fill in the required fields for the template, such as template name, content, and any other relevant details.
* From the channel dropdown, select the SMS channel to associate the template with SMS messages.
* Click on the "Save" button to save the template.

<Image alt="Add SMS templates" align="center" border={true} src="https://files.readme.io/09bf740-image_24.png">
  Add SMS templates
</Image>

* Select “Channel” from where you need to send the Message.
* Select “Number type” on which the Message is to be sent
* Click on the template Selection Button on the Bottom Left
* Template Selection tab will pop up
* Select Category of the template, For SMS Channel there is only one template category available i.e. “Text”
* The selected template previewed in the template preview box below. provide all the required variables.
* click Send to roll out bulk messages

<Image align="center" className="border" border={true} src="https://files.readme.io/2fa7511-image_25.png" />

<Embed url="https://www.youtube.com/watch?v=lFQtDrGHJNs" title="Utilizing Bulk Messaging in Salesforce with Gupshup: WhatsApp and SMS Channels" favicon="https://www.google.com/favicon.ico" provider="youtube.com" href="https://www.youtube.com/watch?v=lFQtDrGHJNs" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FlFQtDrGHJNs%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DlFQtDrGHJNs%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />