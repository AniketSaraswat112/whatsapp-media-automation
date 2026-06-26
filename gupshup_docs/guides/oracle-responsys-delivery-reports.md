> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Real Time Delivery Reports

Track the delivery and read status of Notification using the Gupshup Messaging App in real time.

The Real time Daily Live Report (DLR) feature is designed to provide users with timely updates on their WhatsApp reports without requiring any manual intervention. Once a client opts in for the Daily Live Report, the system initiates the reporting process and sets up a recurring task that runs every 30 minutes.

## Scope

This documentation covers the prerequisites, the breakdown of message status, and step-by-step instructions to set up the DLR Report functionality within your Oracle Responsys account.

## Prerequisites

Before proceeding with setting up the DLR Report functionality, ensure you meet the following prerequisites:

### Contact Your Gupshup Account Manager

Reach out to your Gupshup WhatsApp Business API account manager or the designated support channel to request the setup of a Callback URL for your account. They will assist you in configuring the necessary settings for message status notifications.

Once you get in touch with your account manager, provide them with the below Callback URL to receive message status updates.

Callback URL : [https://integrations-api.gupshup.io/gsreporting/webhook/whatsapp/enterprise/dlr/oracle\_responsys](https://integrations-api.gupshup.io/gsreporting/webhook/whatsapp/enterprise/dlr/oracle_responsys)

### Create the DLR Table

Reach out to Gupshup Team to set up DLR table within your Oracle Responsys account. This table will be used to store and manage the Delivery Receipt data for WhatsApp messages.

Folder:  "Gupshup WhatsApp DLR"

File: DLR\_REPORT

### Testing

Thoroughly test the integration between Gupshup WhatsApp API and Oracle Responsys. Verify that the callback mechanism is functioning correctly, and message status updates are being captured and stored in the "DLR\_REPORT" table.

## Accessing and Analyzing DLR Data

Once the DLR Report functionality is set up and the message status data is captured in the "DLR\_REPORT" table, you can access and analyze the data for valuable insights:

* Log in to your Oracle Responsys account.
* Navigate to the "Gupshup WhatsApp DLR" folder.
* Access the "DLR\_REPORT" table to view the captured message status data.

![](https://files.readme.io/f204a4c-image.png)

<br />

### Interpreting DLR Data

When analyzing the DLR data, use the "Status" column to determine the delivery status of each WhatsApp message. Utilize the "Recipient ID" and "Message ID" columns to identify specific messages and recipients. The "Timestamp" column will indicate when the message status was updated.

### Using DLR Data for Insights and Decision-making

Leverage this DLR data to monitor the success and engagement of your WhatsApp messaging campaigns. Utilize the data to refine your messaging strategies, identify any delivery issues, and make data-driven decisions to enhance the overall messaging experience.

## Message Status Breakdown

When you send a message through WhatsApp, the system provides status updates indicating the delivery and read status of the message. These status updates are essential for tracking the message's progress and understanding its delivery outcome. Below is a breakdown of each status:

* SENT: Message is sent to WhatsApp server successfully (equivalent of single grey tick on WhatsApp)
* SUCCESS: Message is delivered to the user on WhatsApp (equivalent of two grey ticks on WhatsApp)
* READ: Message is read by the user on WhatsApp (equivalent of two blue ticks on WhatsApp)
* UNKNOWN\_SUBSCRIBER: Unknown/invalid number/does not exist on WhatsApp
* DEFERRED: Messages that could not be sent to WhatsApp
* OTHER: Message that are sent to WhatsApp but could not be delivered for reasons that don’t fall under any mentioned category

## Limitations

Data Purge: Purging the data from the supplementary table is not supported currently. As a result, historical DLR data will be retained indefinitely unless an alternative approach is implemented.