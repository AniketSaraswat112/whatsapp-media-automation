> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Installation

This document outlines the process for integrating **Gupshup WhatsApp Messaging for Oracle Responsys** into Oracle Responsys. With the integration, businesses can send targeted messages to their customers using the popular messaging platform.

**Installation link -**[https://ams.oraclecloud.com/ams/applications/install/751ce5b1-2de6-4698-898f-c10ed52e7976](https://ams.oraclecloud.com/ams/applications/install/751ce5b1-2de6-4698-898f-c10ed52e7976)

<Embed url="https://www.youtube.com/watch?v=VFmc2fjjumY" title="Send WhatsApp messages - Steps to install Gupshup app from Oracle Responsys Marketplace" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/VFmc2fjjumY/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=VFmc2fjjumY" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FVFmc2fjjumY%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DVFmc2fjjumY%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FVFmc2fjjumY%252Fhqdefault.jpg%26key%3D02466f963b9b4bb8845a05b53d3235d7%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

## Prerequisites

The following are the basic prerequisites for using the Gupshup WhatsApp Messaging for Oracle Responsys.

1. An active Oracle Responsys account: you'll need to sign up for the Oracle Responsys account before you can use the app.
2. A Gupshup WhatsApp Business API Account: You'll need to input Gupshup WhatsApp Business API account.

> If you don’t have an account, please contact your account manager. For any queries, our support is available for you at 022 42006799 or email us at [enterprise-support@gupshup.io](mailto:enterprise-support@gupshup.io)

3. Internet connection: An internet connection is required to access the app
4. A supported web browser: The Gupshup WhatsApp Messaging for Oracle Responsys support the latest version of Chrome, Firefox, Safari, and Edge.

## Installation

Here are the general steps to install the Gupshup WhatsApp Messaging for Oracle Responsys app in your Oracle Responsys account.

App installation can be broken down into three steps: Installation, Grant access and configure your Gupshup WhatsApp Business API account.

1. Log in to your Oracle Responsys account: To start with the installation process, log in to your Oracle Responsys account. Once you logged in, you may be asked to verify the code to log in to Oracle Responsys and activate the device.

<Image align="center" className="border" border={true} src="https://files.readme.io/b5e9781-image.png" />

2. Install the app using the link provided: To Install the app, navigate to an install [URL](https://ams.oraclecloud.com/ams/applications/install/751ce5b1-2de6-4698-898f-c10ed52e7976) in the new tab. The install URL will prompt the app installation process
3. On Clicking the above installation [link](https://ams.oraclecloud.com/ams/applications/install/751ce5b1-2de6-4698-898f-c10ed52e7976), the Oracle Responsys application will redirect you to a page to see a list of all your available locations, Choose the location where you want to install the app and click **Continue**.

<Image alt="Choose Location" align="center" border={true} src="https://files.readme.io/a0bfdf1-Pod_selection.png">
  Choose Location
</Image>

> Note: It is important to select the correct location.
>
> For global routed/OCI accounts, users will be prompted with 3 fields Tenant ID, Site ID, Unique Identifier
>
> Tenant ID is not mandatory. Find the Site ID and Unique Identifier fields in your account login URL. For example: https\://\<UNIQUE\_ID>.responsys.\<SITE\_ID>.com/authentication/login/LoginIdp

4. Review and accept the app's Terms and Conditions.
5. After successful login, it will display list of APIs which is used in this app and Install button.

   <Image alt="api list" align="center" border={true} src="https://files.readme.io/87d5782-Install_Api.png">
     api list
   </Image>

   <br />
6. You can either configure the app at this stage or later through app management (For this document, we will configure the app through the app management page).
7. Click on **Proceed** button to finish the installation process.

<Image alt="Add Gupshup Account" align="center" border={true} src="https://files.readme.io/8db7104-Add_account.png">
  Add Gupshup Account
</Image>

8. A success page is displayed.

<Image alt="Installation Completed" align="center" border={true} src="https://files.readme.io/13c32ee-success.png">
  Installation Completed
</Image>

Here app installation is completed. To ensure the installation is correct, navigate to Oracle Responsys account → Account Management → App Management.

<Image alt="Installed apps" align="center" border={true} src="https://files.readme.io/450fdec-app_display.png">
  Installed apps
</Image>