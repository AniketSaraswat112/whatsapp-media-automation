> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Send WhatsApp Message Using Gupshup App Inside Responsys Program Designer

Follow the steps below to send a WhatsApp message using the Gupshup Oracle App in the Oracle Responsys Program Designer.

<br />

# Step 1: Add the Gupshup App Block

1. Open Program Designer:
   1. In Oracle Responsys, navigate to the Program Designer screen.
2. Add the Gupshup App Block:
   1. Drag the **App** block onto the canvas.
   2. Double-click on the app block to see all available apps for your account.
3. Select the Gupshup App:
   1. Choose the **Gupshup app** from the available apps list.
   2. Select Send WhatsApp Message service (Gupshup-Oracle).
4. Confirm the Selection:
   1. After selecting the service, click Done to create an instance of the service.

<Image alt="Select Gupshup app" align="center" border={true} src="https://files.readme.io/640741b7cc7497d3c0d491ef6650cdbbab8a725157f92f84dc098b0e00a1c1de-unnamed_3.png">
  Select Gupshup app
</Image>

<br />

# Step 2: Configure the Service Instance and Choose Gupshup account

1. Configure the Gupshup App:

   1. Click on Configure App to open the service configuration screen

      <Image alt="Service Configuration" align="center" border={true} src="https://files.readme.io/364e6f3328ba3ea73525d540796255d584d9bb4b2e054979c7ee011718dceb64-unnamed_4.png">
        Service Configuration
      </Image>
2. Select Gupshup Account:
   1. From the drop-down list, choose the Gupshup Account that you configured earlier (these are the accounts you saved in the configuration step).
3. Set "Send To" Field:
   1. Map the Send To field to the phone number field, which should contain the recipient’s phone number. This ensures that the message is sent to the correct contact.
4. Click on Next:

   1. After configuring the account and the recipient phone number, click **Next** to continue.

      <Image alt="Gupshup app service configuration" align="center" border={true} src="https://files.readme.io/a6f0f771282d77964b9171160a9cb717d743c96551e2e4c4de1a70117d347352-unnamed_5.png">
        Gupshup app service configuration
      </Image>

<br />

# Step 3: Convert the Campaign to an Interactive Journey

1. Convert the Campaign:

   1. Click the Convert button. This will convert your 1-way campaign journey into an interactive journey.

      <Image align="center" className="border" border={true} src="https://files.readme.io/2295674ab79c1ceb04f74b337d7cf74adee6c3f1c12b3ab24987e69737362fa1-unnamed_6.png" />
2. Default Journey Setup:
   1. After conversion, the default journey will include the Start Node and the Template Node.
   2. Do not modify the default nodes as they are necessary for the journey to function correctly.Build the
3. Interactive Journey:
   1. Now you can edit your interactive campaign journey as needed. When the marketing campaign is triggered (based on the scheduled time), the bot will trigger the interactive journey when customers respond to the campaign.
4. Save the Journey:

   1. Once your interactive journey is set up, click on Update to save the changes.

      <Image align="center" className="border" border={true} src="https://files.readme.io/be39d4913f655d8a0e07dc4e1cb0dbd7348e051454503bbb37ac7007014a55e6-unnamed_7.png" />

<br />

For more on creating and managing interactive journeys, visit the [Gupshup Bot Studio](https://console-docs.gupshup.io/docs/about-bot-studio) for detailed instructions.

<br />

# Step 4: Program Invocation to Send WhatsApp Message

Now, let's configure the program to send the WhatsApp message at the scheduled time.

1. Drag the Scheduled Filter or View Block:
   1. From the Program Designer, drag the Scheduled Filter or View block onto the canvas.
2. Connect Blocks:
   1. Link the Scheduled Filter/View block to the Gupshup service instance.
   2. Link the service instance to the End block.
3. Configure Scheduled Filter:
   1. Double-click the Scheduled Filter or View block to open its properties.
   2. Scroll to the Scheduled Filter section and select the filter you created previously (under the Run Filter field).
4. Set Frequency:
   1. Scroll down to the Frequency section and configure the schedule to trigger the program when the specified condition is met.
   2. For this demo, select 2 minutes in advance from the time specified in the Program Designer. Click Save to update the time.
5. Validate the Program:
   1. Click on Validate to check for any configuration errors.

<br />

# Step 5: Publish the Program

1. Publish the Program:
   1. After validation, click the Publish tab.\
      Click on the Publish button.
2. Confirm Publishing:
   1. A pop-up will appear asking for confirmation. Click Yes to confirm and publish the program.
3. Program Invocation:
   1. At the scheduled time, the program will invoke the Gupshup app’s service and send the WhatsApp message as configured.