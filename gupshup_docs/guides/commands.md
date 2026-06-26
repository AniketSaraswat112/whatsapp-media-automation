> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Commands

Commands on WhatsApp are quick-access tools that users can utilize by typing a forward slash in your business's message thread. These commands consist of the command itself and a helpful hint, offering users a glimpse into what action can be initiated.

For instance, you might define a command like `/schedule` with the hint `Schedule an appointment`, giving users a clear understanding of its purpose. This simple yet effective system empowers users to navigate your services effortlessly, enhancing their overall experience.

<Image alt="Preview of Commands" align="center" border={true} src="https://files.readme.io/581a695-Screenshot_2024-05-15_at_10.55.29_AM.png">
  Preview of Commands
</Image>

When a WhatsApp user types, `/imagine` cars racing on Mars, it will trigger a standard received message webhook with that **exact text** string assigned to the `body` property. You could then generate and return an image of cars racing on the planet Mars from your software.

## Activation Process

### Obtain WABA ID

1. Log in to your Gupshup account and select your App name.
2. Within the **Settings** tab, locate your WABA ID.

   <Image alt="Collecting WABA ID" align="center" border={true} src="https://files.readme.io/8e1521b-Screenshot_2024-05-16_at_11.26.46_AM.png">
     Collecting WABA ID
   </Image>

### Enabling the Commands feature

1. Log in to your **Facebook Business Manager** account.

2. Navigate to **Accounts > WhatsApp accounts** and search for your WABA ID.

3. Select the **WhatsApp Manager**.

   <Image alt="Click on the WhatsApp Manager" align="center" border={true} src="https://files.readme.io/ad1746a-Screenshot_2024-05-16_at_11.30.51_AM.png">
     Selecting WhatsApp Manager
   </Image>

4. Within the **WhatsApp Manager**, go to **Account tools > Phone numbers** and locate the desired phone number.

5. Click on the **settings** icon adjacent to your phone number.

6. Proceed to **Automations** and locate **Commands** on the right-hand side panel.

7. By default, the feature is disabled. Toggle the switch to enable it.

8. Add your desired commands and select **Save**.

<Image alt="Adding Commands" align="center" border={true} src="https://files.readme.io/6857de9-Screenshot_2024-05-15_at_11.01.29_AM.png">
  Setup Commands in WhatsApp Manager
</Image>

> 📘
>
> You can define up to 30 commands. Each command has a maximum of 32 characters, and each hint has a maximum of 256 characters. Emojis are not supported.