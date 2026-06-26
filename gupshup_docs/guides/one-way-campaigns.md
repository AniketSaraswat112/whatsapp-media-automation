> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# One-Way Campaigns

This page will cover how you can trigger one-way campaigns from third-party platform of your choice.

<br />

### Step 1

Setup a custom integration on your Gupshup Converse Dashboard. Follow the steps in the link below:

[https://console-docs.gupshup.io/docs/custom-integrations](https://console-docs.gupshup.io/docs/custom-integrations)

Now this will be your integration entry-point for all the campaigns you want to trigger from your 3rd party system.

Once you are done with the setup, copy the **callback URL** and **authorization token** details. These values will need to be configured in the Third-party platform of your choice.

![](https://files.readme.io/81392d100d98f93ba511971f7f54af14093936c01f0b4a0bbd7b3881fd536754-image.png)

<br />

### Step 2

Most Third-party platforms such as Braze, Bloomreach, WebEngage, etc., have their own Journey builder / flow builder / canvas module, which can be used to take an action based on an event.

1. Setup a new journey for each new campaign you want to start
2. Create a new event node. You can setup a  *one at a time* trigger based event such as "new lead created",  "abandoned cart", etc. in this node.
3. Create a new "webhook / API action" node node. configure the callback URL and other details retrieved from Step 1, in this action.
4. Save and Start the journey so Gupshup Converse can start receiving these events.

<br />

### Step 3

1. Go to the **Bot Studio** Module in your Gupshup Converse Dashboard and select the **Journeys** section.
2. Click on "Create Journey" on the top right in the "User Journeys" tab.
3. Change Starting node event type to "Custom Event" and configure the node based on your specifications.

![](https://files.readme.io/f1714f678c1f8867224ec5e9adff2544d064bd9f8628c5e746d2be686ff9a9f1-Screenshot_2025-01-29_at_1.08.08_PM.png)

4. Attach a "Message Template" node to the starting node and configure based on your requirements.

![](https://files.readme.io/6d5c0d0ed0023ef8278250f71122e37b993d68a9b277e4ac3fed56ad0296b812-Screenshot_2025-01-29_at_1.10.33_PM.png)

5. Save and Deploy the journey.