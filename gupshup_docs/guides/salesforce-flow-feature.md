> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Feature #6: Flow feature

Users will be able to send Whatsapp messages when any record gets created / updated.

Video Tutorial

<Embed url="https://www.youtube.com/watch?v=z_8lwa3Hql8" title="Automating WhatsApp Messages with Salesforce Flows Using Gupshup Integration" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/z_8lwa3Hql8/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=z_8lwa3Hql8" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252Fz_8lwa3Hql8%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253Dz_8lwa3Hql8%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252Fz_8lwa3Hql8%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

\### Creating flow configuration

1. Click on App Launcher and Open Gupshup App.
2. Click on Flow Configuration Tab and click on “New”.

<Image alt="Create a new flow" align="center" border={true} src="https://files.readme.io/2002eff-image.png">
  Create a new flow
</Image>

3. Provide Flow Name and Select Object on which user wants to send the WhatsApp Messages on trigger of Flow.
4. Select the already configured Channel and then Select Number on which user wants to send the WhatsApp Messages of the selected Object.
5. Click on template button to go template screen.

<Image alt="Gupshup flow configuration screen" align="center" border={true} src="https://files.readme.io/3c7b022-image.png">
  Gupshup flow configuration screen
</Image>

6. Select the Category and Template and provide necessary details.
7. Click on Save.

<Image alt="Select a Template and save" align="center" border={true} src="https://files.readme.io/81f6b1a-image.png">
  Select a Template and save
</Image>

### Configuring Flow

1. Go to setup.
2. Search Flows in quick find box and open Flows and click on “New Flow”.

<Image alt="Search for flow" align="center" border={true} src="https://files.readme.io/20f1f68-image.png">
  Search for flow
</Image>

3. Select the core of the newly created Flow.
4. Set the starting condition of your Flow.
5. Add element to your flow “Get Records”.
6. Provide Label for Get Record Element and Select the object “Flow Configuration”.

<Image alt="Configure the flow" align="center" border={true} src="https://files.readme.io/ac02328-image.png">
  Configure the flow
</Image>

7. Filter the Flow Configuration record which you earlier created by placing Condition Requirement.
8. Select only the first record.
9. Now again add an element and choose “Action” element in interaction.

<Image alt="Define actions" align="center" border={true} src="https://files.readme.io/39ebd93-image.png">
  Define actions
</Image>

10. Search for “Send Whatsapp Message” in Action search input field and select it and provide Label.
11. In Send Whatsapp Message Action, Select “Flow Configuration“ Object in Object for Flow Configuration field.
12. In Send Whatsapp Message Action, Select “Flow Configuration“ Object in Object for Flow Configuration field.

<Image alt="Add Send Whatsapp message as Action" align="center" border={true} src="https://files.readme.io/12ec226-image.png">
  Add Send Whatsapp message as Action
</Image>

13. Select object for Record, the name of object of the record to which user wants to send the WhatsApp message.
14. Select Flow Configuration Record and Record to which user wants to send WhatsApp message.

<Image alt="Provide all necessary fields" align="center" border={true} src="https://files.readme.io/2a4de2d-image.png">
  Provide all necessary fields
</Image>

15. Click on Done.
16. Save the Flow and activate the Flow.

> 📘 Gupshup Global Opt In field for the record should be checked.

> 📘 Number should already be opted-in in the platform.