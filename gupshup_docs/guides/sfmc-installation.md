> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Installation

Installation Steps Documentation: Salesforce Marketing Cloud Integration with Gupshup WhatsApp

1. **Login** to Salesforce Marketing Cloud Portal: Begin by accessing the Salesforce Marketing Cloud portal using your login credentials.
2. Once logged in, locate the **Setup** page. You can find this option under the Settings in user profile section located at the top right corner of the application interface.

   <Image alt="Setup" align="center" border={true} src="https://files.readme.io/fdc2b96-setup.png">
     Setup
   </Image>
3. **Access Installed Packages:**\
   Within the Setup page, go to **Installed Packages**. You can find this option under **Platform Tools** by navigating to **Apps** and then selecting **Installed Packages**.
4. Create a New Package: To set up the integration with Gupshup WhatsApp, you will need to create a new package. To do this:
   1. Click on the **New** button located at the top right corner of the Installed Packages page.
   2. A popup window will appear, prompting you to provide the following information: Name and Description.
      * Package Name: Give the package an appropriate name, such as "Gupshup WhatsApp Integration."

<Image alt="Create a Package" align="center" border={true} src="https://files.readme.io/259a5d4-image.png">
  Create a Package
</Image>

5. After providing the package name and description, click the **Save** button to confirm the creation of the new package. You can then proceed with the integration configuration and setup within the created package.
6. After creating the new package, the next step is to add a component that will configure the Gupshup integration. To do this:\
   Click on the **Add Component** button within the newly created package.
7. When adding a new component, you need to specify the component type. For the Gupshup WhatsApp integration, select **Component Type** as **Journey Builder Activity**.

<Image alt="Add Component" align="center" border={true} src="https://files.readme.io/41faa08-image.png">
  Add Component
</Image>

7. Set Journey Builder Activity Properties:  After selecting the component type, you will need to configure the properties of the Journey Builder Activity. Here's how to do it:
   1. Name of the Activity: Give the activity a descriptive name that helps identify its purpose, such as "Gupshup WhatsApp Messaging."
   2. Category of Activity: Choose the appropriate category for the activity. For this integration, select "Messages" from the dropdown menu. This categorization helps organize activities within Journey Builder.
   3. Endpoint URL of Gupshup App:\
      **[https://integrations-api.gupshup.io/sfmc/](https://integrations-api.gupshup.io/sfmc/)**\
      This URL is essential for connecting Salesforce Marketing Cloud to your Gupshup WhatsApp service. Ensure that you enter the complete and correct URL.

<Image align="center" className="border" border={true} src="https://files.readme.io/92b7772-image.png" />

8. Once you have filled in these details, your Journey Builder Activity is configured to work with the Gupshup WhatsApp Messaging. **Save** the activity settings and proceed with any additional configuration or customization required for your specific use case.

### Video Tutorial

This video tutorial provides instructions for the installation process:

<Embed url="https://www.youtube.com/watch?v=1xJa4mbY5TI" title="Installation and Setup Guide: Salesforce Marketing Cloud WhatsApp Integration by Gupshup" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/1xJa4mbY5TI/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=1xJa4mbY5TI" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252F1xJa4mbY5TI%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253D1xJa4mbY5TI%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252F1xJa4mbY5TI%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />