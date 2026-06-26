> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Updating Default Scheduler Time in Gupshup Salesforce App

## Updating Default Scheduler Time in Gupshup Salesforce App

To adjust the default scheduler time to poll inbound messages in the Gupshup Salesforce app, follow these instructions to update the **Inbound\_Polling\_Scheduling\_Time** Custom Label. This process involves adding a local translation to set the scheduler time.

### Steps to Update the Scheduler Time

1. Access Salesforce Setup
   1. Log in to Salesforce.
   2. Navigate to Setup:
      1. Click on the gear icon located in the top-right corner of the Salesforce interface.
      2. Select **Setup** from the dropdown menu.
2. Locate Custom Labels
   1. Search for Custom Labels:
      1. In the Quick Find box on the left-hand side of the Setup page, type **Custom Labels**.
      2. Click on **Custom Labels** from the search results.
3. Select the Relevant Custom Label
   1. Find and Select the Custom Label:
      1. In the Custom Labels list, look for **Inbound\_Polling\_Scheduling\_Time**.
      2. Click on the label name to open its details.
4. Add New Local Translation

   1. Create New Local Translation:
      1. Under the **Inbound\_Polling\_Scheduling\_Time** Custom Label details, click on **New Local Translations/Overrides**.
   2. Enter Translation Details:
      1. Select Language: Choose the language for which you want to set the translation. If you are making changes for all users regardless of their language, select the default language or your specific target language.
      2. Set Translation Text: Enter "1" in the Translation Text field to set the scheduler time.
   3. Save Your Changes:
      1. Click **Save** to apply the new local translation.\ <br />

   <Image align="center" className="border" border={true} src="https://files.readme.io/cf3c637-image_57.png" />

In the new local translation, select the language and set the translation text as "1" .

<Image align="center" className="border" border={true} src="https://files.readme.io/fabb04e-image_58.png" />

<br />

Once you have provided the language and translation test, **save** it.

<Image align="center" className="border" border={true} src="https://files.readme.io/17a5f39-image_59.png" />