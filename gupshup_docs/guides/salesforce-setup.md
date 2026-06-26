> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Step 2: Setup Configuration

To configure the setup for your Salesforce app, including creating CSP Trusted Sites, setting the page layout, configuring page layout settings for campaigns, and managing permission sets, follow the steps below:

## 1. Create CSP Trusted Sites

The Lightning Component framework uses **Content Security Policy (CSP)** to impose restrictions on content.

1. To create CSP Trusted Sites in Salesforce, please follow these steps:

* Click on the gear icon located in the top-right corner and select "Setup" from the dropdown menu.
* In the search bar, type "My Domain" and select "My Domain" from the search results.
* Copy ***Current My Domain URL***

<Image alt="My Domain" align="center" border={true} src="https://files.readme.io/f7762b8-CSP_Trusted_Sites.png">
  My Domain
</Image>

* In the search bar, type "CSP" and select "Content Security Policy" from the search results.
* Click on "Trusted Sites" under the "Content Security Policy" section.
* On the Trusted Sites page, click on the "New Trusted Site" button.
* Fill in the required information for the CSP Trusted Site:
  * Trusted Site Name: Provide a descriptive name for the trusted site.
  * Trusted Site URL: Enter the URL copied in the above step .
  * Active: Check the box to activate the CSP Trusted Site.
* Select all the directives under CSP Directives
* Optionally, you can specify additional settings such as CSP Trusted Site Type or enforce specific Content Security Policies.
* Click on the "Save" button to create the CSP Trusted Site.

<Image alt="CSP Trusted Sites" align="center" border={true} src="https://files.readme.io/51c35d7-trusted_site_url.png">
  CSP Trusted Sites
</Image>

2. Similarly create a second new CSP Trusted Site in Salesforce
   1. Fill in the required information for the CSP Trusted Site:
      1. Trusted Site Name: Provide a descriptive name for the trusted site.
      2. Trusted Site URL: [https://wsv2-iebhnubbya-el.a.run.app](https://wsv2-iebhnubbya-el.a.run.app)
      3. Active: Check the box to activate the CSP Trusted Site.
   2. Select all the directives under CSP Directives
   3. Optionally, you can specify additional settings such as CSP Trusted Site Type or enforce specific Content Security Policies.
   4. Click on the "Save" button to create the CSP Trusted Site.

<Image alt="CSP Trusted Sites" align="center" border={true} src="https://files.readme.io/17a9205-image.png">
  CSP Trusted Sites
</Image>

***

## 2. Setting the Page Layout

To set the page layout in Salesforce, follow these steps:

for all the objects (Lead, Contact, Account, Opportunity, Campaign, Case)

### 2.1 Adding WhatsApp history Component to the Object Record Page

To add the WhatsApp history component to the record page of the "Lead" object in Salesforce, follow these steps:

* Go to the Salesforce setup by clicking on the gear icon located in the top-right corner and selecting "Setup" from the dropdown menu.
* In the setup menu, search for "Object Manager" and click on it.
* Select the "Lead" object from the list of objects.
* Under the "Lead" object, click on "Lightning Record Pages".
* Locate the Gupshup Lead Record Page and click on it to open the page editor.
* In the page editor, find the section or location where you want to add the WhatsApp history component.

<Image align="center" className="border" border={true} src="https://files.readme.io/bb77e5e-setting_page_layout.png" />

* Click on View Button to access the detailed view of the record.

<Image alt="Lightning Record page detailed view" align="center" border={true} src="https://files.readme.io/279da56-Lead_record_page.png">
  Lightning Record page detailed view
</Image>

* After opening the Gupshup App in Salesforce, locate the "Activation" option.
* Click on the "Activation" option to proceed.

<Image alt="Activate" align="center" border={true} src="https://files.readme.io/f0258f4-activation.png">
  Activate
</Image>

* Look for the "Assign to Apps, Record types, and Profiles" section.
* Click on the "Assign to Apps, Record types, and Profiles" option to continue.

<Image title="Screenshot from 2022-08-17 22-10-57.png" align="center" className="border" border={true} src="https://files.readme.io/d1da219-Screenshot_from_2022-08-17_22-10-57.png" />

* In the "Assign to Apps, Record types, and Profiles" page, locate the Gupshup App from the available options.
* Select the Gupshup App by clicking on it.

<Image title="Screenshot from 2022-08-17 22-11-51.png" alt="select gupshup app" align="center" border={true} src="https://files.readme.io/bd49fe6-Screenshot_from_2022-08-17_22-11-51.png">
  select gupshup app
</Image>

* Once you have selected the Gupshup App, click on the "Next" button to proceed.

* In the "Select Form factor" page, choose the "Desktop" option from the available choices.

* Select "Desktop" by clicking on it.

<Image title="Form Factor.png" alt="select form factor" align="center" border={true} src="https://files.readme.io/16a3e53-Form_Factor.png">
  select form factor
</Image>

* After selecting "Desktop", click on the "Next" button to proceed.

* On the "Profiles" page, select the desired profiles that should have access to the Gupshup App.

* Choose the profiles by checking the corresponding checkboxes.

<Image title="Selected Profiles.png" alt="choose profiles" align="center" border={true} src="https://files.readme.io/c368675-Selected_Profiles.png">
  choose profiles
</Image>

* Once you have selected the desired profiles, click on the "Save" button to save the changes.

### 2.2 Adding “Send WhatsApp Message” Button on detail page

To add the "Send WhatsApp Message" button on the detail page of the "Lead" object in Salesforce, follow these steps:

Let us take an example of a “Lead” and the same can be done for “Contact”, “Account” and “Opportunity” Objects.

* Go to the Salesforce setup by clicking on the gear icon located in the top-right corner and selecting "Setup" from the dropdown menu.
* In the setup menu, search for "Object Manager" and click on it.
* Select the "Lead" object from the list of objects.
* Under the "Lead" object, click on "Page Layouts".
* Click on "Page Layout Assignment" at the top-right corner of the page.
* Locate the desired page layout assignment and click on it to open the page layout editor for that assignment.

<Image title="Page Layout Assignment.png" alt="Adding “Send WhatsApp Message” Button on detail page" align="center" border={true} src="https://files.readme.io/2e3a56d-Page_Layout_Assignment.png">
  Adding “Send WhatsApp Message” Button on detail page
</Image>

* In the "Page Layout Assignment" section, click on the "Edit Assignment" button.
* Locate the system admin user from the list of available users.
* In the "Layout Name" column for the system admin user, select "Gupshup Lead Layout" from the dropdown menu.

<Image title="ObjManager.png" align="center" className="border" border={true} src="https://files.readme.io/3d7fb90-ObjManager.png" />

* Once you have selected "Gupshup Lead Layout" for the system admin user, click on the "Save" button to save the assignment.

***

## 3. Page Layout Setting for Campaign

To set the page layout for the Campaign object and add the "Send WhatsApp Message" button, follow these steps:

* Go to the Salesforce setup by clicking on the gear icon located in the top-right corner and selecting "Setup" from the dropdown menu.
* In the setup menu, search for "Object Manager" and click on it.
* Select the "Campaign" object from the list of objects.
* Under the "Campaign" object, click on "Page Layouts".
* Look for the page layout you want to edit and click on it to open the page layout editor.
* In the page layout editor, navigate to the "Mobile and Lightning Actions" section.
* Locate the "Send WhatsApp Message" button in the palette on the left-hand side.
* Drag and drop the "Send WhatsApp Message" button onto the desired location within the page layout.
* Arrange the button as needed by adjusting its position within the layout.
* Save the changes to the page layout.

<Image title="campaign.png" alt="Page layout for compains" align="center" border={true} src="https://files.readme.io/e3798d3-campaign.png">
  Page layout for compains
</Image>

***

## 4. Permission Sets

This Permission Set must be assigned to the Gupshup User or SFDC user who is responsible for managing the WhatsApp Channel Configurations. The User who is assigned with this permission set, will be able to create, edit and delete the WhatsApp Channel Configurations. Gupshup recommends using Permission Set assignment very judiciously as it provides control over key application configuration.

By following these steps, you can assign the "WA\_Channel\_Permission\_Set" permission set to the specified user in Salesforce. This permission set grants access to create, edit, and delete the WhatsApp channel configurations. It is recommended to assign this permission set judiciously, as it provides control over important application configurations related to the WhatsApp channel.

To assign the "WA\_Channel\_Permission\_Set" permission set to a specific user in Salesforce for managing the WhatsApp channel configurations, follow these steps:

**Steps to Assign Permission Set:**

1. Go to the Salesforce setup by clicking on the gear icon located in the top-right corner and selecting "Setup" from the dropdown menu.
2. In the setup menu, search for "Users" and click on it to access the user settings.
3. Search for and select the specific user to whom you want to assign the permission set.
4. Hover over the "Permission Set Assignment" related list on the user detail page and click on "Edit Assignment".
5. In the "Permission Set Assignment" editor, click on the "Add Permission Set" button.
6. Select the "**WA\_Channel\_Permission\_Set**" from the list of available permission sets.
7. Click on the "Save" button to assign the permission set to the user.

<br />

## 5. Create records in campaign phone mapping

To create records in campaign phone mapping in Salesforce, please follow these steps:

* Click on the gear icon located in the top-right corner and select "Setup" from the\
  dropdown menu.
* In the search bar, type "custom settings" and select " campaign phone mapping "\
  from the search results.

<Image alt="Custom settings" align="center" border={true} src="https://files.readme.io/9a8bc835d4de5ae4032fbfe6871306ea68f5dd690efbc3917e5e40f8c2ef282d-image_62.png">
  Custom settings
</Image>

<br />

* Click on **campaign phone mapping** and then click on manage.

<Image alt="manage custom settings" align="center" border={true} src="https://files.readme.io/302c523471f63be89ca12a10b626cca59fb25b32d8e4e9d4677c5a5e3e380e17-image_63.png">
  manage custom settings
</Image>

* After clicking on manage select the new button

<Image alt="Add new dataset" align="center" border={true} src="https://files.readme.io/68a986dcf73e16a01610a5a54713f758bb44ec1e60284ec8cfa0fe11c3e1ead5-image_64.png">
  Add new dataset
</Image>

* Fill in the required information for the campaign phone mapping records created:

<Image alt="Campaign Phone Mappings edit" align="center" border={true} src="https://files.readme.io/a600a2ed76f9a17ffeb0349b6d1ea7160194d72d9da35601545246feb2846180-image_65.png">
  Campaign Phone Mappings edit
</Image>

○ Name: **Mobile**\
○ Active: Check the box to activate the campaign phone mapping.\
○ Campaign phone type label: “Mobile”\
○ Contact phone type field API Name: MobilePhone\
○ Lead phone type field API Name: MobilePhone

<br />

* Click on “Save” button to create campaign phone mapping record.

<Image alt="Save campaign phone mapping record" align="center" border={true} src="https://files.readme.io/d7b2cb6356b9eb9a6a36ec8b658a5e26eda28a57806cf92c5a2bea8ab7b7adf7-image_66.png">
  Save campaign phone mapping record
</Image>

<br />

* Similarly create a second new campaign **phone** mapping record:

<Image alt="campaign phone mappings edit" align="center" border={true} src="https://files.readme.io/7b9c3463f7b312ff58df375c88be50d19db0aa34ac263fa9a8fcaad0baae1dba-image_65.png">
  campaign phone mappings edit
</Image>

○ Name: **Phone**\
○ Active: Check the box to activate the campaign phone mapping.\
○ Campaign phone type label: Phone\
○ Contact phone type field API Name: Phone\
○ Lead phone type field API Name: Phone

* Click on “Save” button to create campaign phone mapping record

<Image alt="Save campaign phone mapping record" align="center" border={true} src="https://files.readme.io/e54bbf09a3c80a93a033e811afdd4374b34bde1837a7cc4f64c329213cbdb8f1-image_67.png">
  Save campaign phone mapping record
</Image>

<br />

# To Enable Auto Lead Creation

To streamline lead generation from incoming WhatsApp messages using Gupshup, you'll configure Salesforce to automatically create leads from WhatsApp numbers that do not already exist in your Salesforce database. This involves setting up a queue for lead management and creating a lead assignment rule to automate the lead creation process.

## Create Queue

To create records in Queue  in Salesforce, please follow these steps:

* Navigate to Setup:
  * Click on the gear icon in the top-right corner of Salesforce and select "**Setup**" from the dropdown menu.
* Create a New Queue:

  * In the Quick Find box on the left, type "**Queues**".
  * Select "**Queues**" from the search results.
  * Click on the "**New**" button.

  <Image alt="Create Queue" align="center" border={true} src="https://files.readme.io/adce79bb2e5918e671354cb8babeb379d678fd02482575170abe9015b740be38-image_71.png">
    Create Queue
  </Image>
* Fill in the required information for the Queue record created:

  * Label: Enter **Gupshup WhatsApp Lead Assignment**
  * Queue Name : Enter **Gupshup\_WhatsApp\_Lead\_Assignment**
  * Supported Objects:  Check the box for **Leads** to ensure that this queue will handle lead records.
  * Selected Members: Add the Salesforce users or groups who will be responsible for managing leads in this queue.

  <Image alt="new queue" align="center" border={true} src="https://files.readme.io/8451b6e190cc9b137f2d132132a05af93584003fc1899b689c66a072ebdd10ff-image_75.png">
    new queue
  </Image>

  <Image alt="Selected Object - Lead" align="center" border={true} src="https://files.readme.io/5ac3a0ab916db66b7ae4653d31ae463b17e33f25485b99cb2c31a71ce80b3317-image_86.png">
    Selected Object - Lead
  </Image>

  <Image alt="Selected members " align="center" border={true} src="https://files.readme.io/6cc8b4155a356463e186405c1fae0b26730f9a1d6da254dd7051516f2b7e5930-image_87.png">
    Selected members
  </Image>
* Click the "Save" button to create and finalize the queue setup.

<br />

## Adding a Lead Source Field Value

* Access Salesforce Setup:
  * Click on the gear icon in the top-right corner of Salesforce.
  * Select "**Setup**" from the dropdown menu to open the Setup page.
* Navigate to Object Manager:
  * In the Quick Find box on the left side of the Setup page, type "**Object Manager**".
  * Click on "**Object Manager**" to open the Object Manager section.
* Select the Lead Object:
  * In the Object Manager, scroll through the list or use the search bar to find and select the "**Lead**" object.

<Image alt="Lead Object Manager" align="center" border={true} src="https://files.readme.io/7288319d79ed36295fcdc4c0752fe6f9680ba4d99ad1ee39a71f6144290ebd74-image_88.png">
  Lead Object Manager
</Image>

* Access Fields & Relationships:
  * Once in the Lead object settings, click on "**Fields & Relationships**" in the left-hand sidebar. This will show you a list of all fields associated with the Lead object.

<Image alt="Fields & Relationships" align="center" border={true} src="https://files.readme.io/6d2b277d36b7a70704fafab21abc92bdcda6983a1a7479613006ea3cf179ccb2-image_89.png">
  Fields & Relationships
</Image>

* Find and Modify the Lead Source Field:
  * Find and select the "**Lead Source**" field from the list of fields. This field is used to track the source of the lead.
* Picklist Values:
  * On the Lead Source field detail page, look for the section titled "**Picklist Values**". This section lists all current values available in the picklist for this field.
  * Click on the "**New**" button to add a new picklist value.

<Image align="center" className="border" border={true} src="https://files.readme.io/c32f15ee5eb6c3b9c4bd42c6fe67fa12c6b738ab20d3f00b2f8cc03f4e976757-image_90.png" />

* Add New Picklist Value:
  * In the new picklist value form, fill in the required information:
    * Value: Enter "**Gupshup WhatsApp**" as the new picklist value. This will be the new option available for selection in the Lead Source field.

<Image alt="Add New Picklist value" align="center" border={true} src="https://files.readme.io/81343bf1cbf70050696011b02fede647085860e5295e8a2f2286f97ae995c19f-image_92.png">
  Add New Picklist value
</Image>

* Save the New Value:
  * Click the "**Save**" button to create and add the new value to the Lead Source field.

## Create a Lead Assignment Rule

Lead Assignment Rules in Salesforce help you automatically assign new leads to users or queues based on specified criteria. Here's how to create a Lead Assignment Rule and configure it to use the queue for leads generated from Gupshup WhatsApp messages:

* Access Salesforce Setup:
  * Click on the gear icon in the top-right corner of Salesforce and select "Setup" from the dropdown menu.
* Navigate to Lead Assignment Rules:
  * In the Quick Find box on the left side of the Setup page, type "Lead Assignment Rules".
  * Select "Lead Assignment Rules" from the search results.
* Create a New Rule:

  * Click on the "New Rule" button to create a new lead assignment rule.

  <Image alt="Lead Assignment Rule" align="center" border={true} src="https://files.readme.io/b9504a06e521e39b78bd49c6407aa5b1e38ab90ba2021f271d3d0b60eaa0f04a-image_78.png">
    Lead Assignment Rule
  </Image>
* Define Rule Details:

  * Rule Name: Enter a descriptive name for the rule, such as **Whatsapp lead assignment**.
  * Active: Ensure the rule is marked as active if you want it to start working immediately.
  * Click on the “Save” button to create a Lead assignment rule record.

  <Image alt="Rule Details" align="center" border={true} src="https://files.readme.io/11ad2d884949872cff292dd47602f18c684da98915946bf81f09549747d6eaee-image_80.png">
    Rule Details
  </Image>
* Access the Lead Assignment Rule:

  * After creating the Lead Assignment Rule, navigate back to the Lead Assignment Rules page.
  * Locate and click on the rule you just created, such as "Assign Gupshup WhatsApp Leads to Queue", to open its record.

  <Image alt="WhatsApp Lead assignment Rule" align="center" border={true} src="https://files.readme.io/9c1cc710885c715489f156f492261ef50b28daaefa5e585229022a1efdad5b6b-image_82.png">
    WhatsApp Lead assignment Rule
  </Image>
* Add a New Rule Entries:

  * After saving the rule, you'll need to create specific rule entries to define how leads are assigned.
  * Click on "Rule Entries" related list on the rule detail page.
  * Click on the "New" button to create a new rule entry.

  <Image alt="Add a New Rule entry" align="center" border={true} src="https://files.readme.io/5082df599f50018c207a73f24c3d280fcd74526811c8373d7677febf9eac91b1-image_83.png">
    Add a New Rule entry
  </Image>
* Define Rule Entry Criteria:

  * Sort Order: Enter **1** to set the priority of this rule entry. The sort order determines the sequence in which rules are evaluated.
  * Field: Select Lead Source (Field: **Lead:Lead Source**).
  * Operator: Choose **equals**.
  * Value: Enter **Gupshup WhatsApp** (the value that matches the incoming message source).

  <Image alt="Define Rule Entry Criteria" align="center" border={true} src="https://files.readme.io/fb5937a9f6b554f3d900d95ec869608dfbc8a1118498c7689d4400a2a9bae0e6-image_85.png">
    Define Rule Entry Criteria
  </Image>
* Assign to Queue:
  * Assign To: Choose  Queue from the options.
  * Queue: Select **Gupshup WhatsApp Lead Assignment** queue from the dropdown list.
* Save the Rule Entry:
  * Click the **Save** button to store the rule entry.
* Activate the Rule:
  * Ensure the rule is active by verifying that the **Active** checkbox is checked on the rule detail page.

<br />

## Create and Configure Records in Gupshup Auto Lead Creation

<br />

* Access Salesforce Setup:
  * Click on the gear icon located in the top-right corner of Salesforce.
  * Select "**Setup**" from the dropdown menu to open the Setup page.
* Navigate to Custom Settings:
  * In the Quick Find box on the left side of the Setup page, type "**Custom Settings**".
  * Select "**Custom Settings**" from the search results.
* Locate Gupshup Auto Lead Creation:
  * In the list of custom settings, find and click on "**Gupshup Auto Lead Creation**". This will open the custom setting details page.

<Image alt="Custom settings - Gupshup Auto Lead Creation" align="center" border={true} src="https://files.readme.io/b5efa79995fc77fcf02636cb3a3a3b4bac6a83e73f7705a97b529cdd1132ea0d-image_93.png">
  Custom settings - Gupshup Auto Lead Creation
</Image>

* Manage Custom Settings:
  * On the Gupshup Auto Lead Creation custom setting page, click on the "**Manage**" button. This will show the existing records for this custom setting and allow you to add new records.

<Image alt="manage custom settings" align="center" border={true} src="https://files.readme.io/eecab72e37dca1080423ec57db4db2026dd6538bbcb29e2dfc7eb83e3dd880b4-image_94.png">
  manage custom settings
</Image>

* Create a New Record:
  * Click on the "New" button to create a new custom setting record.

<Image alt="Create new record" align="center" border={true} src="https://files.readme.io/cf94cf4cd4440da424d116c3860e5239030cbdc6b1f31f30dbbecea778670823-image_95.png">
  Create new record
</Image>

* Fill in the Required Information:
  * Name: Enter "**Gupshup Auto Lead Creation**" as the name for the new record.
  * Auto Lead Creation: Check the box to activate the auto lead creation feature. This enables automatic creation of leads based on the specified criteria from Gupshup.

<Image alt="custom settings" align="center" border={true} src="https://files.readme.io/6bd00bf9cd4c0751157a982f52d34a342242b20cbb19a25d948848ffbc18e80b-image_96.png">
  custom settings
</Image>

* Save the New Record:
  * Click the "**Save**" button to create and save the new custom setting record.

# Video:

In this video, we explore the powerful integration provided by Gupshup, which seamlessly connects Salesforce CRM with WhatsApp for efficient messaging and campaign management. Learn how to streamline your communication processes and drive engagement effectively using this integration.

Gupshup Integration: Streamlining Salesforce CRM with WhatsApp for Seamless Messaging and Campaign Management

<Embed url="https://www.youtube.com/watch?v=BFbmZLAOp68" title="Gupshup Salesforce Integration: Integrating Salesforce CRM with WhatsApp for Seamless Messaging" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/BFbmZLAOp68/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=BFbmZLAOp68" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FBFbmZLAOp68%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DBFbmZLAOp68%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FBFbmZLAOp68%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />