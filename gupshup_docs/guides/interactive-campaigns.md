> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Interactive Campaigns

This page will cover how you can trigger two-way interactive campaigns from third-party platform of your choice.

### Step 1

Setup a custom integration on your Gupshup Converse Dashboard. Follow the steps in the link below:

[https://console-docs.gupshup.io/docs/custom-integrations](https://console-docs.gupshup.io/docs/custom-integrations)

Now this will be your integration entry-point for all the campaigns you want to trigger from your 3rd party system.

Once you are done with the setup, copy the **callback URL** and **authorization token** details. These values will need to be configured in the Third-party platform of your choice.

![](https://files.readme.io/81392d100d98f93ba511971f7f54af14093936c01f0b4a0bbd7b3881fd536754-image.png)

### Step 2

Most Third-party platforms such as Braze, Bloomreach, WebEngage, etc., have their own Journey builder / flow builder / canvas module, which can be used to take an action based on an event.

1. Setup a new journey for each new campaign you want to start
2. Create a new event node. You can setup a  *one at a time* trigger based event such as "new lead created",  "abandoned cart", etc. in this node.
3. Create a new "webhook / API action" node node. configure the callback URL and other details retrieved from Step 1, in this action.
4. Save and Start the journey so Gupshup Converse can start receiving these events.

### Step 3

1. Go to the **Bot Studio** Module in your Gupshup Converse Dashboard and select the **Journeys** section.
2. Click on "Create Journey" on the top right in the "User Journeys" tab.
3. Change Starting node event type to "Custom Event" and configure the node based on your specifications.

![](https://files.readme.io/f1714f678c1f8867224ec5e9adff2544d064bd9f8628c5e746d2be686ff9a9f1-Screenshot_2025-01-29_at_1.08.08_PM.png)

4. Attach a "Message Template" node to the starting node and configure based on your requirements. Use a template which has **Quick Reply** buttons so user can interact with the message.

   ![](https://files.readme.io/63d60ccfcb62bbc1f3abc7d5a9f771833dae968b1e810f2ee6eb1d75fad40ba2-Screenshot_2025-01-29_at_1.13.27_PM.png)
5. Add business logic and craft bot replies based on your requirement.\
   Find more info on bot studio: [https://console-docs.gupshup.io/docs/about-bot-studio](https://console-docs.gupshup.io/docs/about-bot-studio)

![](https://files.readme.io/e393deaa819328325e5d581ec0f34fc85c316bd6c04d95489b823b4871492a5f-Screenshot_2025-01-29_at_1.17.22_PM.png)

6. Save and Deploy the journey.