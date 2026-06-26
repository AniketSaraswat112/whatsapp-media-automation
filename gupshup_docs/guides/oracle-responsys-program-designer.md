> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# WhatsApp in Program Designer

Using the Gupshup app to send WhatsApp messages

The Gupshup app can be integrated into the Program designer screen of Oracle Responsys to facilitate the sending of WhatsApp messages.

## Usage Video

<Embed url="https://www.youtube.com/watch?v=pY6McyT8Kvs" title="Send WhatsApp Campaigns from Oracle Responsys Using Gupshup WhatsApp messaging app" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/pY6McyT8Kvs/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=pY6McyT8Kvs" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FpY6McyT8Kvs%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DpY6McyT8Kvs%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FpY6McyT8Kvs%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

<br />

## Prerequisites

The following are the prerequisites for running campaign via Oracle Repsonsys program

## Create Profile List

### Create New List

Users can create a profile list for all customers. Profile list is a customer database for defining and customizing all your data needs.

* Click  **Data** on the side navigation bar in Responsys,
* select *Profile Lists*.
* Click **Create New List**.
* Enter a unique name, select the containing folder, and optionally provide a description.
* Click **Save**.

<Image alt="Profiles lists" align="center" border={true} src="https://files.readme.io/fc4a05a-image.png">
  Profiles lists
</Image>

<Image alt="Create new List" align="center" border={true} src="https://files.readme.io/c5b0cdc-list.png">
  Create new List
</Image>

The above steps create an empty profile list containing only system-defined fields and no records.

After the profile list is created, click on **Change Schema**, Add custom-defined fields as per your needs to your list and click Save button which is located on top of the page.

<Image alt="Profile list" align="center" border={true} src="https://files.readme.io/50c4809-schema.png">
  Profile list
</Image>

### View and Add New Records

To view the records of a profile list, click on **view records** :

<Image alt="Profile lists  - View records" align="center" border={true} src="https://files.readme.io/7a58764-record.png">
  Profile lists  - View records
</Image>

Click on **New Record** to add an record to this profile list :

<Image alt="View Records" align="center" border={true} src="https://files.readme.io/1003046-record_list.png">
  View Records
</Image>

One of these fields  `CUSTOMER_ID_ | EMAIL_ADDRESS_ | MOBILE_NUMBER_` must be filled in order to save the record.

We require `MOBILE_NUMBER_` field for our app to work properly.

( For the demo purpose, some of the custom-defined fields are filled as well )

Click **Save** to save the record.

Now our profile list with one record is ready to use.

<Image alt="Create a new Record" align="center" border={true} src="https://files.readme.io/074f599-image.png">
  Create a new Record
</Image>

## Create Filter

Users can also create a filter on a profile list that is used to target customers with specific characteristics.

* Click  **Audiences** on the side navigation bar, and select **Filters**.
* Click **Create Filter** and select the **Profile List** that you want your filter to be based on.
* Select List for **List Type** and Profile for **Filter Type**.
* Click on **Done** to open a page where you can define your conditions for the filter.

<Image align="center" className="border" border={true} src="https://files.readme.io/3144301-filter.png" />

Drag the fields from the list on the left side and drop in the Profile attributes that you want to put conditions on.

( For demo purposes, we have added conditions using the fields **FIRSTNAME** and **LASTNAME**. So it will only select those records from our Profile List that has non-null **FIRSTNAME** and **LASTNAME** fields ).

<Image align="center" className="border" border={true} src="https://files.readme.io/14900c6-f1.png" />

Click on the **save** button to open a pop-up and give the filter some name, folder location, and description

<Image align="center" className="border" border={true} src="https://files.readme.io/7d39d1f-fsave.png" />

After saving the filter successfully, click **Get Actual Count** to confirm the total number of filtered records.

<Image alt="Get Actual Count button to confirm number of filtered records" align="center" border={true} src="https://files.readme.io/a42d633-count.png">
  Get Actual Count button to confirm number of filtered records
</Image>

<Image align="center" className="border" border={true} src="https://files.readme.io/1e70ba9-gc.png" />

Now, our filter is ready to use for program invocation.

<br />

## Send WhatsApp Message

### Using our app inside Responsys Program Designer

## Create Program

1. Click on the Programs menu on the side navigation bar in Responsys, then click Create Program. The Create Program dialog opens.

<Image alt="Manage Programs screen" align="center" border={true} src="https://files.readme.io/7bbf762-3_Create_Program.png">
  Manage Programs screen
</Image>

<Image alt="Create a program " align="center" border={true} src="https://files.readme.io/3eb0082-create_programm.png">
  Create a program
</Image>

2. In the Name field, type the name of the program.
3. Select a folder from the Folder drop-down list.
4. Select a Profile List from the List drop-down list.
5. In the Description fields, give any description for your program.
6. Click **Create** button.
7. The program is created, the *Create Program* dialog closes, and a opens a program designer canvas.

<Image alt="Program Designer" align="center" border={true} src="https://files.readme.io/2160463-program_created.png">
  Program Designer
</Image>

8. Click on **Settings**.
9. In the **Lifecycle Options** section, type the email addresses to receive notifications about this program.

<Image alt="Program settings" align="center" border={true} src="https://files.readme.io/9b99c5b-email.png">
  Program settings
</Image>

10. Separate multiple addresses by commas or semicolons.
11. Click on **OK**.
12. In the Program Designer screen, drag the App block on the canvas, and double-click on it to get all the available apps for your account.

<Image align="center" className="border" border={true} src="https://files.readme.io/50bc4eb-55.png" />

<br />

13. Select the Gupshup app’s Send WhatsApp Message service ( **Gupshup WhatsApp Messaging for Oracle Responsys**)  and then click on done to create an instance of the service.

<Image alt="Select Gupshup app  - Gupshup WhatsApp Messaging for Oracle Responsys" align="center" border={true} src="https://files.readme.io/7efbd5a-select_app.png">
  Select Gupshup app  - Gupshup WhatsApp Messaging for Oracle Responsys
</Image>

<Image alt="Created instance of our App's service" align="center" border={true} src="https://files.readme.io/a3cf724-congfig.png">
  Created instance of our App's service
</Image>

### Service Configuration and selecting a template

1. Click on **Configure app**, and it will load up the service configuration screen.

<Image align="center" className="border" border={true} src="https://files.readme.io/5720d11-config.png" />

2. Select a Channel from the drop-down (these are the Channels that you have saved in the app configuration step).
3. After choosing a valid channel from the drop-down, the **Select a template** section will appear below.

   <Image alt="Select Template" align="center" border={true} src="https://files.readme.io/3195123-temp.png">
     Select Template
   </Image>
4. In this section, you can choose any message template available for the selected Gupshup account.
5. You can also filter the templates based on their type (text, image, document, video).
6. The **Send To** must always be mapped to a field that is going to contain the phone number of your customer.
7. The Send To must always be mapped to a field that is going to contain the phone number of your customer.
8. Clicking on select button in the template list, redirected to template preview screen
9. you will need to map the dynamic parameters. (In our demo the selected template has two dynamic data, hence we got two textbox with parameter icon. On click icon it will display list of all parameters).

   <Image alt="Template Preview" align="center" border={true} src="https://files.readme.io/9d95fdf-temp_preview.png">
     Template Preview
   </Image>
10. After filling in all the required fields, click on save to save the configuration..
11. If you get a configuration successful message, then you can close this window.
12. To send media message user needs to select the media template and after selection there are two option to add media –
    1. Upload Media
    2. Enter Media URL

<Image alt="media message" align="center" border={true} src="https://files.readme.io/4f91861-appc3.png">
  media message
</Image>

### Program Invocation to send WhatsApp message

1. Drag the **Scheduled Filter or View** block and **End** block on the canvas.
2. Link the **Scheduled Filter or View** block to the service instance and the service instance to the **End** block.

<Image align="center" className="border" border={true} src="https://files.readme.io/98255d3-1212.png" />

3. Double-click on the **Scheduled Filter or View** block to open its properties.
4. Scroll to the scheduled filter, and select the filter in the **Run Filter** field that you have created previously.

<Image align="center" className="border" border={true} src="https://files.readme.io/40c926a-1313.png" />

5. Scroll to the **Frequency** section, and schedule when you want to trigger this program once it is published.

<Image align="center" className="border" border={true} src="https://files.readme.io/ba168a0-1414.png" />

6. Select the following property to trigger the program when the condition in **Frequency** is fulfilled.
7. Click on the done button to save and close the properties box.

<Image alt="Schedule Filter" align="center" border={true} src="https://files.readme.io/c18b91a-1515.png">
  Schedule Filter
</Image>

8. For this demo, we have selected the time in advance of 2 minutes from the time mentioned in the Responsys Program Designer. (Click save to get the updated time and schedule to trigger the program after 2 minutes).
9. Click on validate to check for any errors.
10. Click on the Publish tab.

<Image alt="Validate Program" align="center" border={true} src="https://files.readme.io/1392dd9-1616.png">
  Validate Program
</Image>

11. Click on Publish button and then click on the yes button in the pop-up to publish the app.
12. Now at the scheduled time this program will invoke the service of our app.

<Image alt="Publish Program" align="center" border={true} src="https://files.readme.io/a82737d-1717.png">
  Publish Program
</Image>