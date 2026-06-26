> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Ice Breakers

Ice Breakers serve as personalized, clickable text prompts designed to initiate interaction within a messaging thread. They offer a seamless way to engage with users, particularly in service-oriented scenarios like customer support or account management.

Imagine embedding a WhatsApp button on your app or website. With a simple tap, users are redirected to WhatsApp, where they're greeted with a selection of tailored prompts—think "Plan a trip" or "Create a workout plan." These prompts are succinct, allowing for up to **four per business phone number**, with each containing a **maximum of 80 characters**. Emojis are not supported.

<Image alt="Preview of a ice breaker" align="center" border={true} src="https://files.readme.io/be672e5-Screenshot_2024-05-15_at_10.40.15_AM.png">
  Preview of an ice breaker
</Image>

What's more, when a user taps an Ice Breaker, it seamlessly triggers a standard received `message` webhook, with the ice breaker string assigned to the `body` property in the payload. And even if a user attempts to message directly, they'll find the Ice Breaker menu readily available, ensuring a smooth user experience.

In essence, Ice Breakers offers a professional and efficient way to kickstart interactions, enhancing user engagement and facilitating seamless communication with your services.

> 📘
>
> If a WhatsApp user taps a [universal link (i.e. wa.me link)](https://faq.whatsapp.com/425247423114725/?cms_platform=iphone\&fbclid=IwAR0Wk3l6XfxxQC8iF5oku5y-BmYMO-xSguTyGlypF50tH2_GzxsblV2-G2s) configured with pre-filled text, the user interfaces for ice breakers are automatically dismissed.

## Activation Process

### Obtain WABA ID

1. Log in to your Gupshup account and select your App name.
2. Within the **Settings** tab, locate your WABA ID.

   <Image alt="Collecting WABA ID" align="center" border={true} src="https://files.readme.io/9516156-Screenshot_2024-05-16_at_11.26.46_AM.png">
     Collecting WABA ID
   </Image>

### Enabling the Ice breaker feature

1. Log in to your **Facebook Business Manager** account.

2. Navigate to **Accounts > WhatsApp accounts** and search for your WABA ID.

3. Select the **WhatsApp Manager**.

   <Image alt="Click on the WhatsApp Manager" align="center" border={true} src="https://files.readme.io/151aa06-Screenshot_2024-05-16_at_11.30.51_AM.png">
     Selecting WhatsApp Manager
   </Image>

4. Within the **WhatsApp Manager**, go to **Account tools > Phone numbers** and locate the desired phone number.

5. Click on the **settings** icon adjacent to your phone number.

6. Proceed to **Automations** and locate **Ice breakers** on the right-hand side panel.

7. By default, the feature is disabled. Toggle the switch to enable it.

8. Add your desired ice breakers and select **Save**.

<Image alt="Setup Ice breakers in WhatsApp Manager" align="center" border={true} src="https://files.readme.io/166b6ab-Screenshot_2024-05-15_at_10.49.12_AM.png">
  Setup Ice breakers in WhatsApp Manager
</Image>

When a user taps an ice breaker, it triggers a standard received message webhook with the ice breaker string assigned to the `body` property in the payload. If the user attempts to message you instead of tapping an ice breaker, the keyboard will appear as an overlay, but it can be dismissed to see the ice breaker menu again.