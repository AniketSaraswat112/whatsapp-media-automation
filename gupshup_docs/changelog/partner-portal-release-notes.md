> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Partner Portal

These release notes describe the new feature updates, bug fixes, performance improvements, known issues, and other important information for the Partner Portal

# Version 14.5 Release Date: 8 January 2025

# Overall Summary

## Partner Portal: API Key Management Enhancement

We are introducing new self-service API key management capabilities in the Partner Portal to enhance security and provide partners with more control over their API access.

# Detailed Overview

<br />

## Partner Portal: API Key Management Enhancement

1. Partners can now manage up to two separate App API keys through the Partner Portal
2. Partners have the ability to invalidate existing API keys instantly using the delete function
3. Partners have option to regenerate new API keys with unlimited validity

Create API key

<Image align="center" src="https://files.readme.io/6d4dfc6b1685f52a52e0e97365bcc2dce6ca0858e652fac8d11ae13e175f60cf-App_api_keys_1.png" />

Click on create button

<Image align="center" src="https://files.readme.io/146edbb916aae8a47c5ecd8045aa9a16e921afaa02fc654e9707de60f82ee175-craete_app_api_key.png" />

Deleting the API key

<Image align="center" src="https://files.readme.io/ef0cfee6d912498eb5b7f81fc7e8856bd888119b863a34ee9e811ffe331160ec-API_app_keys.png" />

# Version 14.0 `Release Date: 24 December 2024`

# Overall Summary

## Restricting Features for Partners Who Haven't Registered as Tech Providers

For partners who haven’t registered as Tech providers and added an approved joint solution ID in their Gupshup partner portal account, the partners will not be able to create new apps via the partner portal or partner APIs or link their partner ID in the Gupshup self-serve portal.

# Detailed Overview

## Restricting Features for Partners Who don’t have an approved solution ID

Partners who have not completed the TPP will face restrictions on specific features.

For non-TPP partners post-November 20th, attempts to use app creation and app linking APIs will result in an error message prompting users to add their joint solution ID before proceeding.

* **App Creation:** *"Please add your joint solution ID before proceeding with app creation."*
* **App Linking:** *"Please add your joint solution ID before proceeding with app linking."*

Additionally, a banner is displayed on the homepage, notifying users: *"You have not yet added your joint solution ID. Please add it at the earliest. You will have restricted access until you add your joint solution ID."*

# Version 13.5 `Release Date: 05 December 2024`

# Overall Summary

## Webhook changes contextual replies

The WhatsApp message IDs and GS message IDs are present in the events received by partners on their callback for contextual replies.

## Solution Name accepts special characters

You can now create Solution names using special characters as (\~!@#$%^&\*()\_-\{}:"\<>?/ | |=+).

<br />

# Detailed Overview

## Webhook changes contextual replies

The WhatsApp message IDs and GS message IDs are present in the events when

1. User replies to business message
2. User replies to their own previous message

This applies only to the following V3 endpoints:

* text reply
* quick reply
* button reply
* list reply
* nfm reply - address, flows
* media reply - image, video, file, sticker, audio, contact, location,
* catalog

## Solution Name accepts special characters

The Meta Dev Portal allows partners to create solution IDs and names using alphanumeric and special characters as (\~!@#$%^&\*()\_-\{}:"\<>?/ | |=+).  To enhance usability and consistency, it is essential to enable support for special characters in solution names on the Partner Portal.

<br />

# Version 13.0 `Release Date: 21 November 2024`

## Overall Summary

## Client Secret expiry

A new **Create Secret** section on the settings page enables partner users to generate and manage client secrets for Partner Portal APIs.

## Detailed Notes

## Client Secret expiry

A new section **Create Secret**, was added to the settings page, allowing partner users to generate their client secrets for accessing Partner Portal APIs. In this section, users (API developers) are provided access to create a client secret by setting an expiry date.

Once expired, users need to re-generate the secret ID.  You can read more about how to generate client secrets [here](https://docs.gupshup.io/docs/sop-guide-for-user-experience-after-auth0).

**Note** This action will be visible to partner users, though only partner admins have access to the "Joint Solution" and "Manage Users" sections.

<br />

# Version 12.5 `Release Date: 05 November 2024`

## Overall Summary

## During customer creation for Partner Managed wallet, users are to provide pre-filled editable First and Last name for partner

Provide a pre-filled, editable First and Last name for the partner during customer creation for Partner Managed Wallet.

## Spotlight on Vault (Under Resource)

Added a **new** icon or indicator to highlight the recently launched Vault feature in the Partner Portal.

## Ratings API should be consistent with WABA info API

Synchronized Ratings API and WABA Info API responses to maintain consistency, especially when events are missed by the partner portal.

<br />

## Detailed Notes

## During customer creation for Partner Managed wallet, users are to provide pre-filled editable First and Last name for partner

Added a toggle button that enables the Partner to add/edit the fields for the partner's First and Last name with their Brand name by selecting the wallet from the drop-down list.

<Image align="center" width="50% " src="https://files.readme.io/35fdb38a48c41357a53451bfb1a7594c38e735312500f346ce726f03073527bc-image-20241016-091119.png" />

## Spotlight on Vault (Under Resource)

Added a **new** icon with a hover effect or indicator to highlight the recently launched Vault feature in the Partner Portal.

<Image align="center" className="border" width="90% " border={true} src="https://files.readme.io/416225ee3c23c08d4d3b72cbca32aac750ce89da291db76ebbfc25fddae4b8b0-Screenshot-2024-10-15-at-5.59.46_PM-1.png" />

## Ratings API should be consistent with WABA info API

The Ratings API and WABA Info API responses need to be synchronized to ensure consistency, especially when the partner portal does not receive events. This will solve the previously reported issue by partners where the Ratings API response was not refreshed.

<br />

# Version 12.0 `Release Date: 08 October 2024`

## Overall Summary

## Phone Number shows for each live app on the app listing page

Phone numbers will be displayed against each live app on the listing page.

## Additional emails can now be added for receiving Gupshup communications

Added three categories of communication to manage better communication for partner users.

## Insights for partners in the Partner portal

Added a new tab Insights in the Partner Portal to empower partners by surfacing key metrics.

## Improved Partner Analytics

For more detailed insights and a better user experience, a new column **Discount** was added to the existing table.

## Wallet statement now available in Excel format along with PDF

While emailing the wallet statement, the users will now get the wallet statement in Excel format, along with the PDF format. This enables our partners to slice and dice their wallet statements easily.

<br />

## Detailed Notes

## Phone Number shows for each live app on the app listing page

In the Partner Portal, each app's Phone number and App ID appear on the app listing page. This applies only to **LIVE** apps where the WABA phone number is registered and active. Additionally, a search allows partners to search for apps based on the WABA number, improving searchability and accessibility.

<Image align="center" className="border" width="90% " border={true} src="https://files.readme.io/55b6da63034d2a834066ebc44887c00d06c4ef9ad3567859334645b238303fce-WABA.png" />

## Additional emails to be added for communication

The current system sends Partner communications to the partner-based email address.  To manage better communication preferences for users, we have created three categories of communication:

* Marketing & Newsletter for partner updates,
* Product and Technical for API-related communications, and
* Financial for any wallet, commission, or monetary information.

This segregation aims to prevent key individuals from missing partner communications.  By default, new users receive Marketing and Product communication.  Additionally, users are provided to select the desired types of communication to enable or disable from the *Settings* in the top right corner.

<Image align="center" className="border" width="90% " border={true} src="https://files.readme.io/1b8be1868823c307862c12bf9905ef9876342e796f29452c86b8b661c6cf925d-email2.png" />

Please note that communication preferences are only being recorded at the moment and will be applicable at a later date.

## Insights for partners in the partner portal

We have added a new Insights tab (*Analytics Tab >> Insights*) in the Partner Portal.  This feature will empower partners by surfacing key metrics that can improve decision-making and strategy.

* **Top 10 Apps by Messaging Volume:**
  * This section displays the top 10 applications based on their messaging volume for the current month.
  * Apps are listed in descending order, showcasing their names alongside their respective messaging volumes.
* **Live Apps Timelines:**
  * A month-on-month view for the last six months is presented, illustrating the trend in the number of live apps.
  * The total count of live apps is highlighted for the current month, allowing partners to quickly assess current activity levels.
* **Conversations Volume Graph:**
  * A graph representing the total conversational volume over the last six months has been added
* **Meta Fees & Gupshup Fee Trend Line:**

  * A trend line depicting the Meta fees and Gupshup fees over the last six months will be WABA Phone Number will be shown against each live app on the app listing page featured.

<Image align="center" className="border" border={true} src="https://files.readme.io/5680149ed5abfb5574d34677f3e5be8564b697343fd08130b43d8a78ac5d156d-abc.png" />

## Improved Partner Analytics

Added a new column **Discounts** to the existing data table in the Dashboard of the Partner Portal, allowing for more detailed insights and better user experience.\
***Key Enhancements***:

1. **New Column: Discount**
   1. Introduced a new column **Discount**, allowing the partners to view and assess the discounts applied to the customer from the Analytics Dashboard table for only prepaid partners.
   2. Displays Discount column in .csv file (Download report) file only for prepaid partners.
2. **Renamed Column: Total Cost**
   1. The existing **Total Cost** column is renamed to **Total Cost Before Discount**, providing clearer context on the data presented.
3. **Time Zone Display and Selection**
   1. The time zone is prominently displayed, with an option for users to select their preferred time zone.
   2. A NOTE stating “*All results are shown as per IST time zone*” is added below the table, ensuring users are aware of the time zone context for all displayed data.
4. Removed **Gupshup Fee**, **Whatsapp Fee**, and **Total Cost** columns from the .csv file (Download report) for postpaid partners.
5. Removed **Gs Cap** and **Cumulative Bill** columns from app wise in the .csv file (Download report) file for postpaid partners.

<Image align="center" className="border" width="90% " border={true} src="https://files.readme.io/f86c744da6fce1d96b9265602b9a7815801e21a401e19aa6c5b39b3adc3c5076-Improve.png" />

## Wallet statement now available in Excel format along with PDF

While emailing the wallet statement, the users get the wallet statement in Excel format, along with the PDF format. This enables our partners to slice and dice their wallet statements easily.

<br />

# Version 11.5 `Release Date: 16 September 2024`

## Overall Summary

## Partner Wrapper for Delete App API

* Partner API to delete apps (sandbox).

## Partners can now select data storage region during onboarding

* During the WABA go-live process initiated from the Partner Portal UI, the partners can now select the data storage region for the FBC hosting.

## Monthly Summary Report for Partners

* A monthly summary report for partners will be triggered on the 1st of every month.

## Made Upper case & Lower case characters mandatory in the password

* Users can now change the password periodically.

<br />

## Detailed Notes

## Partner Wrapper for Delete App API

Partner API to [delete apps (sandbox)](https://docs.gupshup.io/reference/deleteappsandbox).  This will help partners clean up sandbox apps if they wish to delete them.

## Partners can now select data storage region during onboarding

During the WABA (WhatsApp Business Account) go-live process, which is initiated through the Partner Portal UI, partners now have the option to select Meta's data storage region for hosting their FBC. This added flexibility allows partners to choose the specific geographical location where the data is stored on Meta’s cloud, providing greater control and potentially meeting compliance requirements or performance considerations. By default, the selected Meta's standard data storage region is the **USA**, unless the Partner chooses a different region. This capability ensures that partners can align their data storage preferences with their operational needs and regulatory obligations.

<Image align="center" className="border" width="60% " border={true} src="https://files.readme.io/2c22f498821c5982cdd3e86836e3b22906250d2014156f4ac3e32154217c92dd-image-5.png" />

## Monthly Summary Report for Partners

A monthly summary report for partners will be triggered on the 1st day of every month. This report will cover the following details:

* **Commission generated** - the commission generated for the partner
* **Discounts** - the discounts given by Gupshup to the partner
* **Usage** - Sum of WhatsApp fee and Gupshup fee charged to the partner
* **Capping for the partners** - details of the app capping applied to partner apps

<Image align="center" className="border" width="60% " border={true} src="https://files.readme.io/442de2ee343de7ef9e04fbace9e0596f5d69ffaea8f59699b3253a2fb69caac6-Untitled-1.png" />

## Make Upper case & Lower case characters mandatory in the password

The purpose of the password policy is to establish a standard for the creation of strong passwords.  It is essential to require a minimum of 8-character password, with a combination of alpha, numeric, and special characters with at least one lower and one upper case letter. New partners can change their passwords through the user interface (UI).\
**Example:** A7b\@w!2c

<br />

# Version 11.0 `Release Date: 26 August 2024`

## Overall Summary

## Partner Vault tab to added in partner portal

* Added a new **Vault** section to the Partner Portal in the Resource tab. You can make the most out of working with Gupshup with the resources shared in Vault.

## Upload media or use URL to generate media ID (CAPI only)

* APIs to generate media ID, using [file upload](https://docs.gupshup.io/reference/generate-media-id-using-file-upload) or [URL](https://docs.gupshup.io/reference/post_partner-app-appid-media), are only available to partners on CAPI.

## Removed media SKUs from UI, API, PDF, CSV

* To streamline the data presentation,  we have removed media SKUs from the UI, API, PDF, and CSV exports.

<br />

## Detailed Notes

## Partner Vault added in partner portal

To enhance the Partner Portal, a new tab **Vault** is added to the dropdown list of Resources tab.  This tab provides access to the vault link at gupshup.io/partner-vault/, adding to the resources available to partners for better engagement and support.  You can make the most out of working with Gupshup with the resources shared in Vault.

<Image align="center" className="border" width="70% " border={true} src="https://files.readme.io/4f83ef64ef1852b8b349ff06ffd15bb29c894f2e4b398c13f84d74219bae9b01-Untitled.png" />

## Upload media or use URL to generate media ID (CAPI only)

APIs to generate media ID, using file upload or URL, are only available to partners on CAPI.  Read how to [Generate Media ID](https://docs.gupshup.io/reference/generate-media-id).

## Removed media SKUs from UI, API, PDF, CSV

To streamline the data presentation, we have removed media SKUs from the UI, API, PDF, and CSV exports. The media messages will be counted under template sent and session sent columns now.  Refer to [API.](https://docs.gupshup.io/reference/get_partner-app-appid-usage-1)

<br />

<br />

# Version 10.5 `Release Date: 29 July 2024`

## Overall Summary

## Feedback capturing improved in the Partner Portal

* Partners can now attach screenshots and video recordings along with their feedback on the Partner Portal.

## WABA Info

* The API offers a comprehensive messaging status for live applications, showing their availability as Available, Limited, or Blocked. It also provides detailed statuses at the WABA, Business, and app levels.

## Meta Utility Template Library

* Meta has introduced pre-defined utility templates for common use cases like delivery updates, account updates, and reminders, allowing quick template creation without requiring approvals, as long as there are no additional checks in the template description or text, except for variables.

## Detailed Notes

## Feedback capturing improved in the Partner Portal

This document outlines the feedback captured in the Partner Portal.

1. Users can now provide feedback to communicate their specific issues or suggestions for the product and categorize it as a bug or a feature request by selecting from the dropdown list.
2. Partners now have the ability to provide feedback in the formats below:
   * Attach/upload files (.mp4 .avi .wmv .jpg, .jpeg .svg .png).
   * Attach screen recordings up to 15 MB.
3. The maximum file size for attachments, including screenshots and screen recordings, is increased to 15 MB. This ensures that partners can easily upload and share their files without any limitations.

<Image align="center" src="https://files.readme.io/6fc8ad7-Presentation1.png" />

## WABA Info

The API provides messaging status information for live apps, including overall status (Available, Limited, Blocked), as well as individual status at the WABA (WhatsApp Business Account), Business, and app levels.

If the messaging status is Limited, the API will send an "Additional\_info" node. If the messaging status is Blocked, the API will send an "errors" node, which includes information such as error code, error description, and possible solution. Refer to [WABA Info API](https://docs.gupshup.io/reference/getwabainfo) for more information.

## Meta Utility Template Library

Meta library is updated with pre-defined Utility Templates for common use cases like delivery updates, account updates, and reminders.

These templates allow for quick creation without the need for approvals, as long as there are no changes in the template's description or text, apart from the variables.

This enhancement streamlines the template creation process for users, making it easier to communicate important information efficiently. Refer to the [ API](https://docs.gupshup.io/reference/gettemplatesfromlibrary_3-1)s.

# Version 10.0 `Release Date: 08 July 2024`

## Overall Summary

## User Management for Partner Portal

* Partner users can now grant access/revoke access to the partner portal users. They can also permanently delete a user as well. This functionality is only available to partner portal admins.

## Support of Thread Builder Link on Partner Portal

* We've added a new text message to the Apps Page to help you create custom templates. The text is as follows:

> “Create mocks and template previews with the WhatsApp Thread Builder”

> 📘 Note:
>
> For new users, the text will only be displayed on the Apps page.

## Support for 100 MB Media Upload

* Partners can now upload media files up to 100MB for HandleID and Media ID with this update.

## Delete template by ID and Element Name

* You can now delete templates by passing the template ID and the element name. You can read more about the API [here](https://docs.gupshup.io/reference/delete_partner-app-appid-template-elementname-templateid).

## Reminder email to submit solution details

* Partners who have not submitted their solution request details will be prompted to submit their solution details

## Get Template API Update

* We updated the response for the Get Template API. The API response will now include two new fields: new\_category and correct\_category. During this process, Meta will send two webhook events for template\_category\_update. Know more

# Detailed Notes

## User Management for Partner Portal

Partner users can now revoke access/grant access to other partner users. They can also permanently delete partner portal users. This functionality is only available to partner portal admins.

<Image align="center" src="https://files.readme.io/c981c07-Picture1.png" />

In case a partner user’s access is revoked, the user's status will change from Active to Suspended.

<Image align="center" src="https://files.readme.io/41fe8de-Picture2.png" />

In case if access is restored to the user, the status will change back to Active.

Upon clicking on the delete icon, the user will be permanently deleted as a partner portal user. A confirmation message will be displayed, and once the user clicks on delete. The user will be permanently deleted from the partner portal.

<Image align="center" src="https://files.readme.io/75b4ebf-Picture3.png" />

## Support of Thread Builder Link on Partner Portal

As shown in the below image, a redirection link has been added to the Partner Portal Apps page.

Whatsapp thread builder is a prototyping tool, which can be used by partners to create their mocks and template previews. It can be accessed after Facebook login.

<Image align="center" src="https://files.readme.io/27e73f3-Picture4.png" />

## Get Template API Update

Starting from June 1, 2024, Meta has implemented a recurring process to automatically identify and update the category of any marketing or utility templates that have been miscategorized, according to their guidelines, to ensure that all templates are correctly categorized.

In this process, meta will now send two webhook events for template\_category\_update.

1. The first one is the alert event which informs about the template’s current category and the correct category it belongs to.
2. The second event (sent on the 1st of the next month after the alert event) is the actual category update event informing that the template’s category has now been updated.

For more information, refer to the [link](https://docs.gupshup.io/reference/get_partner-app-appid-templates-1).

## Delete template by ID and element name

We have the API to delete templates by passing the template ID and the element name. You can read more about the API [here](https://docs.gupshup.io/reference/delete_partner-app-appid-template-elementname-templateid).

## Reminder email to submit solution details

Partners who have not submitted their solution request details will be prompted to submit their solution details. This email will be sent to the partners.

<br />

# Version 9.5 `Release Date: 18 June 2024`

## Overall Summary

## Wallet Page to be the Default Landing Page

* If a wallet is not created for any new partner, the user will land on the Wallet page, by default. From there the user can create a wallet and then an app.

## Support of the International Authentication tab on the Analytics Page

* We've added a new SKU for International Authentication on the Analytics page. This SKU shows values on the pie chart. If the value is zero, it won't be shown. You can also find these values  in the PDF reports under the Conversation > Int Auth tab, and in the CSV file under the International Authentication tab.
* We have updated the response for the public [Get App's Daily Usage](https://docs.gupshup.io/reference/get_partner-app-appid-usage) API as well.

## Redirection from Partner Portal to Gupshup Documentation

* A new  Documentation tab has been added to the Partner Portal that redirects the user to Partner APIs,i.e. [https://docs.gupshup.io/reference/post\_partner-account-login](https://docs.gupshup.io/reference/post_partner-account-login) . Old documentation will be deprecated soon

## Note added to Analytics Page

* Under the Note section on the Analytics page, a new text has been added, which is as follows:

> “All results are shown as per IST timezone”.

## Resubmission of Solution ID for existing ISVs

* The partner will now have the option to resubmit a new Solution ID if the previous one gets rejected. This feature is accessible on the Settings Page.
* When the user submits a new Solution ID, the status will change to “PENDING” and the approval request will be sent to the Partner Support Team.

## Addition of EXPIRED state on Commission page

* A new "EXPIRED" state has been added under the status tab on the Commission page. This indicates expired credits in wallets as per the [Commission Policy](https://docs.gupshup.io/docs/unused-commission-policy)

## Partner API Conversational Components

* We've added two new Conversational Components to support the ice breakers and welcome messages.\
  The APIs are as follows:
  * [Get Conversational Component](https://docs.gupshup.io/reference/get_partner-app-appid-conversational-component)
  * [Set Conversational Component](https://docs.gupshup.io/reference/post_partner-app-appid-conversational-component)

## Health Check API Update

* We updated the response for the Health Check API. This API indicates WABA health as healthy if accountStatus is ACTIVE and dockerStatus is CONNECTED or MIGRATED.
* Click [here](https://docs.gupshup.io/reference/get_partner-app-appid-health), to learn more about Health Check API.

## Get Quality Rating Update

* We've updated the response for the Get Quality Rating API. The API response will now include a new field called Phone Quality, with the following possible values:
  * Green: High quality
  * Yellow: Medium quality
  * Red: Low quality
* Click [here](https://docs.gupshup.io/reference/get_partner-app-appid-ratings), to learn more about Get Quality Rating API.

## Bug Fixes on wallet

* The wallet statement downloaded will be in Asia/Kolkata timezone , and the note has been added on the email statement pop up

<Image align="center" src="https://files.readme.io/9c2160c-image.png" />

<br />

* The pricing for Kazakhstan customers for Meta fees will be as per other country rates in Meta Rate card going forward

# Detailed Notes

## Support of the International Authentication tab on the Analytics Page

A new SKU for International Authentication has been introduced on the Analytics page. This SKU shows values on the pie chart. If the value is zero, it won't be shown. You can also find these values in the PDF reports under the Conversation > Int Auth tab, and in the CSV file under the International Authentication tab.

We have updated the response for the public Get App Usage API accordingly.

<Image alt="Partners can view International Authentication analytics under the Total Conversation card" align="center" src="https://files.readme.io/cdfc671-Picture1.png">
  Partners can view International Authentication analytics under the Total Conversation card
</Image>

## Addition of EXPIRED state on Commission page

We have introduced a new state called "EXPIRED" under the status tab on the Commission page. This indicates expired credits in a wallet.

<Image align="center" src="https://files.readme.io/a7f5d58-Picture2.png" />

## Partner API Conversational Components

With the addition of new Conversational Component APIs, partners will be able to configure the ice breakers and send welcome messages. It supports up to 4 ice breakers, each with a maximum of 80 characters.

<Image align="center" width="50% " src="https://files.readme.io/210ec5e-Picture3.png" />

# Version 9.1 `Release Date: 3 June 2024`

## Overall Summary

## Existing Partners can now become tech providers with Gupshup

* Existing partners can now add joint solution ID via the settings page in the Partner Portal

## Partner Admins can now toggle apps for their own usage

* Partners can modify sandbox apps to mark them for their own usage. When these apps go live, they will not have any solution ID mapped with them.

## Overdraft Automation for wallet

* Gupshup will now calculate the overdraft limit that is available to its users based on their past usage.
* Users can assign their overdraft limit between 0 and the Gupshup calculated limit, this limit will be applicable to their wallets immediately

## Meta fees to be deducted on delivery instead of sent

* Updated the Meta fee deduction policy

## International authentication pricing rollout

* Based on the eligibility criteria, the customers will be charged international authentication prices

# Detailed Notes

## Existing Partners can now become Tech Providers with Gupshup

●	Existing Partners can now enter their solution ID on the partner portal and submit it for Gupshup approval . Read more about this feature [here](https://support.gupshup.io/hc/en-us/articles/33097921935769-Tech-Provider-Setup-for-Non-TPP-partners-on-Gupshup)

<Image alt="Partner can add new joint solution from their settings menu" align="center" src="https://files.readme.io/5019187-Picture1.png">
  Partner can add new joint solution from their settings menu
</Image>

<Image alt="Once the partner clicks on submit for approval, the above message is shown to the partner" align="center" src="https://files.readme.io/055da6b-Picture2.png">
  Once the partner clicks on submit for approval, the above message is shown to the partner
</Image>

<Image alt="The status of the solution remains pending till Gupshup approves it" align="center" src="https://files.readme.io/5b4fd9b-Picture3.png">
  The status of the solution remains pending till Gupshup approves it
</Image>

* Once the solution is approved, the status is changed to approved in the settings page.
* Please note that the apps going live after the approval of the solution ID by Gupshup are mapped with the added solution ID.
* The only exception is the apps that the partners have for their own use, and which are specified in the app properties.
* How to make apps live with this Joint Solution ID? Read [here](https://support.gupshup.io/hc/en-us/articles/33097921935769-Tech-Provider-Setup-for-Non-TPP-partners-on-Gupshup).

## Partner Admins can now toggle apps for their own usage

* Partner Admins can now toggle apps for their own usage (or have the apps as demo apps) by modifying the app properties clicking on the pencil icon on the Apps page on Partner portal. This allows the app to go live without any joint solution. Read more about this feature [here](https://support.gupshup.io/hc/en-us/articles/33099748350489-Go-live-for-a-demo-app-of-Tech-Provider).

<Image alt="Partners can modify the app properties by clicking on the pencil icon" align="center" src="https://files.readme.io/0faa67d-Picture4.png">
  Partners can modify the app properties by clicking on the pencil icon
</Image>

* The partner can toggle on the button to mark this app for their own usage.
* For tech providers with an approved solution ID added, in case the partner toggles the button on, the app once it goes live, will not have any solution ID mapped to the app.
* This can only be done for sandbox apps , once an app goes live, its app properties can not be modified.

<Image alt="Partner can mark apps for their own usage" align="center" src="https://files.readme.io/88b1865-Picture5.png">
  Partner can mark apps for their own usage
</Image>

## Overdraft Automation for Wallet

Gupshup will now calculate the overdraft limit that is available to its users based on their past usage.

### Overdraft Calculation:

The overdraft limit is a dynamic value determined by the following factors:

1. **Current/Assigned Overdraft**: This is the user's current overdraft limit, set by support.
2. **Recharge History**: The sum of all recharges made by the user over the past 90 days.
3. **Opening Balance**: The user's account balance at the beginning of the 90-day window.
4. **Consumption History**: The total amount spent from the wallet over the past 90 days.\
   Read more about [Gupshup's assigned Overdraft](https://docs.gupshup.io/docs/overdraft-limit).

## Meta fees to be deducted on delivered instead of sent

Meta fees will be deducted based on delivered or read events instead of sent events. This change is designed to align the fee structure with Meta.

There will be no change in the billing events.

## International authentication Pricing

For customers in Indonesia from June 1st 2024, and India from July 1st 2024, the international authentication would be charged if applicable. This is applicable if customers send authentication conversations to a different country. This is applicable after 750K conversations are crossed in a month. You can read more about this [here](https://developers.facebook.com/docs/whatsapp/pricing/authentication-international-rates).

# Version 9.0 `Release Date: 21 May 2024`

## Overall Summary

## Addition of Customer ID column to the Analytics Page

* A new column, Customer ID, has been added to the Analytics Page to track self-serve Customer ID or Wallet-wise analytics per app.

## Solution Name now Support Spaces

* Partners can now enter solution names with spaces, for example, **solution test** if the name set in the Meta Developer Portal was the same.

## Tech Provider Guide added on Partner Sign-up Page

* A new icon, Know How to Get Your Solution ID, has been added to the Partner Signup page. This functionality assists partners in learning how to obtain their solution ID before proceeding with the signup on the Partner Portal.

## Embed Flow will only support CAPI (FBC) Hosting

* Partners will only view the FBC hosting option when taking an app live. WABAs will be onboarded on CAPI(Cloud API) going forward for partners.

# Detailed Notes

## Addition of Customer ID column to the Analytics Page

Customer ID will now be available against the apps listed on the analytics page on the Partner Portal. It will also be available on the reports downloaded from the analytics page in the partner portal.

The response for the [GET Partner Apps](https://docs.gupshup.io/reference/get_partner-account-api-partnerapps) API has also been modified to include customer ID.

Added below is the screenshot for reference.

<Image align="center" src="https://files.readme.io/31d7c1a-customer_id.png" />

## Solution Name now Support Spaces

The solution name field now supports spaces.

<Image align="center" src="https://files.readme.io/8d2a0b1-namespace.png" />

> 📘 Note:
>
> An "i" icon has been added with the text "**Exact name of the solution as created in the partner solutions on the Meta developer platform**".

## Tech Provider Guide added on Partner Signup Page

To make it easier for partners to sign up on the Gupshup partner portal, the tech provider guide is now embedded in the partner sign-up page.

<Image align="center" src="https://files.readme.io/03d69d2-sign_up.png" />

## Embed Flow will only support CAPI (FBC) Hosting

Partners will only view the FBC hosting option when taking an app live. WABAs will be onboarded on CAPI(Cloud API) going forward for partners.

# Version 8.5 `Release Date: 17 April 2024`

## Overall Summary

## API for Template Comparison

* Users can now compare actions on the Template list with the API.

## Traversing to the Previous Step During Partner Setup

* A back button has been added to the Go Live UI, enabling users to navigate back to the previous step easily during partner setup.

# Detailed Summary

## API for Template Comparison

The API allows comparison of two templates by examining how often each one is sent, which one has the lower ratio of blocks to sends, and each template's top reason for being blocked.

### Prerequisites

* Only two templates can be compared at a time for now.
* Both templates must be in the same WhatsApp Business Account.
* Templates must have been sent at least 1,000 times in the queries specified timeframe.
* Timeframes are limited to 7, 30, 60, and 90-day lookbacks from the time of the request.\
  start time \< end time.

Click [here](https://docs.gupshup.io/reference/get_partner-app-appid-template-analytics-templateid-compare), to read more about Template Comparison APIs.

## Traversing to the Previous Step During Partner Setup

Partners can review and make changes before final submission if necessary. They can do so by clicking on the back button or clicking on the green stepper to navigate to the previous step.

<Image align="center" src="https://files.readme.io/59162e8-23-04.png" />

# Version 8.0 `Release Date: 26 March 2024`

## Overall Summary

## Improved Commission Payouts for Tech Provider partners

* Commission Payout to the wallet would only be available to those partners for whom the wallet is enabled. Tech Provider Partners can easily move their commission to their wallets by choosing the preferred wallet on the partner portal.
* Similarly, for setting recurring payouts, partners can now choose the wallet to which they want to move the commission.
* New and Improved partner docs available at docs.gupshup.io

# Detailed Notes

## Improved commission payouts for partners

* Partners can now move their commission to their wallets. Simply, select the wallet where you would like to move your commission.
* The list of your partner wallets will be visible on the withdraw commission pop-up.

<Image align="center" src="https://files.readme.io/09d9072-commisson.png" />

* Similarly for setting recurring payouts, the partners can choose the wallet to which the commission needs to be moved.

<Image align="center" src="https://files.readme.io/03c2652-gh.png" />

## New and Improved partner docs available

* New and Improved partner docs are available at [docs.gupshup.io](https://docs.gupshup.io/)
* Guides, API References, and Release Notes will be available for partners from March 26th onwards.
* We will keep updating our partner docs

# Version 7.5 `Release Date: 6 March 2024`

## Overall Summary

## Partner Setup Enhancements

* Tech providers must now provide their Solution ID and Solution Name during partner sign-up.
* You can refer to the partner setup tab to understand your progress while setting up the partner portal

# Detailed Notes

## TPP Partner Setup Enhancements

1. **Simple Partner Application**

During the partner application step, partners must submit the following fields:

a. Solution ID

b. Solution Name

<Image alt="Partners need to submit their Solution ID and Solution Name during partner setup" align="center" src="https://files.readme.io/6792433-a.png">
  Partners need to submit their Solution ID and Solution Name during partner setup
</Image>

# Version 7.0 `Release Date: 19 Feb 2024`

## Overall Summary:

## TPP Partner Onboarding Enhancements

* Simple Partner Application - Reduced number of inputs for partner application
* Re-Submit Partner Creation Request - Ability to submit partner creation request with modified meta app ID details, if the support team has rejected the partner creation request
* Meta App ID Screenshot - Partners need to submit a Meta App ID screenshot during the partner creation process

## Allowing URLs to be submitted in media upload API ( handle ID, and media ID )

* Partners can now submit URLs in the media upload API

## Detailed Notes :

### TPP Partner Onboarding Enhancements

1. **Simple Partner Application**

During the partner application step, partners now need to submit the following fields

* Registered Business Name
* Registered Business Address
* Nature of Service Provided
* ISV FB Manager

<Image align="center" src="https://files.readme.io/10ec3c1-1.1.png" />

### Revised partner application step in the partner creation process

2. **Resubmit  Partner application in case of Rejection**

If partner support rejects the partner application, partners can now submit their partner application with modified Meta App ID details.

<Image alt="Screen in case the partner application is rejected during the partner creation process" align="center" src="https://files.readme.io/74ba07e-2.2.png">
  Screen in case the partner application is rejected during the partner creation process
</Image>

<Image alt="Screen for the partner to resubmit the partner application, once the partner clicks on resubmit" align="center" src="https://files.readme.io/5119e58-3.3.png">
  Screen for the partner to resubmit the partner application, once the partner clicks on resubmit
</Image>

3. **Meta App ID screenshot to be uploaded**

Partners need to submit a mandatory screenshot detailing the following, during the partner creation application.

The supported format types for the screenshot are SVG, JPEG, JPG, and PNG.\
The screenshot should contain the following information, which should be visible

* App Name
* Meta App ID
* Email address of Partner
* Whatsapp product added to app

<Image alt="Screen to upload Meta App ID screenshot during the partner creation process" align="center" src="https://files.readme.io/e066ec2-4.4.png">
  Screen to upload Meta App ID screenshot during the partner creation process
</Image>

<Image alt="Sample screen that needs to be submitted by partner" align="center" src="https://files.readme.io/83a4cbc-5.5.png">
  Sample screen that needs to be submitted by partner
</Image>

<br />

## Allowing URLs to be submitted in media upload API

We now support submitting video/Image URLs in the media Upload API, with handle ID