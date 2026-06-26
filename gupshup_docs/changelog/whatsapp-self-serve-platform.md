> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# WhatsApp Self Serve Platform

*Discover the newest features and enhancements on the WhatsApp Self-Serve Platform, designed to streamline communication and improve business efficiency. Dive into our latest updates and see how they can transform your workflow. Don’t forget to check out our[previous release notes](https://docs.gupshup.io/page/previous-release-notes) for a complete history of updates and improvements!*

# Notice: Deprecation of Customer Support Apps by Sep 2024

For the ongoing apps of customer support tool type, we will continue to provide maintenance and support only till 30th Sep 2024.\
We request you to plan your migration/transition activity accordingly for these apps.

# Notice: Downgrade of Gupshup Legacy Bot Platform by Sep 2024

Gupshup legacy bot platform is coming to an end of life. We will only support and maintain the bots created till 30th Sep, 2024. It is imperative that you begin migrating your bots to alternative platforms before the final downgrade before Sep 30, 2024.

# /sm Endpoint End of Life by 15th August extended to 31st October 2024 for existing On-Premise and Cloud API apps

Read this [article](https://support.gupshup.io/hc/en-us/articles/34057158742297) to learn more

# Optin Optout Service - End of Life by 31st Aug 2024 for existing On-Premise and Cloud API apps

As informed previously, we advise customers to NOT register optin optouts via any single/bulk upload APIs. Customers must manage opt-in opt-out data at their end. You must also prepare for the end of life for any Gupshup opt-in opt-out endpoints you use by 31st Aug 2024. This will result in failure in response to these APIs after the deadline. We recommend you store final list of opt-in opt-outs before the deadline.

Please read more about it [here](https://support.gupshup.io/hc/en-us/articles/35183519921689).

## Version 11.0 `Release Date: 22 August 2024`

Welcome to the WASS 11.0 release! This update brings exciting new features and improvements making your experience smoother and more efficient. Let's take a closer look at what's new in this release.

## Overview

The 11.0 release introduces several powerful enhancements designed to improve the flexibility, tracking, and functionality of your messaging experience. Key updates include the introduction of `biz_opaque_callback_data` for enhanced message tracking, the ability to select local storage regions for your data, and dedicated subscription modes for receiving flow completion and payment event messages.

We've also expanded the capabilities of WhatsApp Business by increasing the character limit for business descriptions and significantly raising the test template count limit to support more extensive message testing and optimization. Additionally, this release includes updates to international pricing for authentication conversations, ensuring transparency and clarity in your billing processes.

## Biz Opaque Callback Data Support

We’re excited to introduce support for `biz_opaque_callback_data` on our platform. This feature allows you to include an arbitrary string in your messages, particularly useful for tracking purposes. For example, you can pass a message template ID in this field to monitor your customer’s journey from the first message. This enables you to evaluate the ROI of different message templates to determine the most effective.

* **Key Details:**
  * Maximum length: 512 characters
  * This field is returned in sent, delivered, and read message webhooks but is not processed by Cloud API.
  * Applicable only to Cloud API.

## Local Storage Region Selection in CAPI Onboarding

We’ve added the ability to select a local storage region during Cloud API onboarding. This feature gives you greater control over where your message data is stored at rest, ensuring compliance with regional data storage regulations.

* **Supported Regions:**
  * **APAC:** India, Singapore, Indonesia, South Korea, Japan, Australia
  * **LATAM:** Brazil
  * **MEA:** South Africa, Bahrain, UAE
  * **Europe:** EU (Germany), UK, Switzerland
  * **NORAM:** Canada, US (Default)

<Image align="center" className="border" border={true} src="https://files.readme.io/ef8696b33c56a3d6a517709131e3268ef158f963c76aa8f18f615f6bbfb5ff72-latam.png" />

## Authentication International Pricing

If your business opens an authentication conversation with a WhatsApp user in a country with an authentication-international rate (currently India and Indonesia), you may be billed at this rate under certain conditions.

* **Billing Criteria:**

  * The conversation occurs after a specific start time for the country.
  * Your business opens more than 750K conversations in 30 days across all of your WABAs.
  * Your business is based in a different country from the user.

  <br />

  > 📘
  >
  > Start times are business- and country-specific timestamps. They indicate authentication conversations opened by your business with WhatsApp users in these countries on or after these dates only will be charged authentication-international rates.

  <Callout icon="📔" theme="default">
    ### For example, if your business is based in Indonesia and you open an authentication conversation with a WhatsApp user who has a +62 (Indonesia) country calling code, you will not be billed the authentication-international rate, since you are based in the same country as the user. If your business is based in India, however, you will be billed the authentication-international rate, if you meet all of the criteria above.

    For a detailed Information, please refer to the [Meta's Documentation](https://developers.facebook.com/docs/whatsapp/pricing/authentication-international-rates?content_id=UvBAOr6V3jtQrLP#authentication-international-rates).
  </Callout>

  <br />

<Image align="center" className="border" border={true} src="https://files.readme.io/486eee20d2959c2e5485db653b8b26b51fafdb7e1e21e076dbb1e6f485e8fd5d-wabahealth.png" />

## Expanded Business Description Character Limit

We’ve increased the character limit for your WhatsApp business description to 512 characters, doubling the previous limit. This allows you to provide more detailed and engaging information about your business, helping you connect with customers more effectively.

* **Benefits:**
  * Offer more detailed insights into your services, core values, and unique selling points.
  * Make your business profile more informative and appealing.

<Image align="center" className="border" border={true} src="https://files.readme.io/e84935458eaa1b6afa6865f1d2d8f50edd5683e6f22b132ba91c3742a2adae9b-512char.png" />

## Increased Test Template Limit

To support growing business needs, we’ve raised the limit for testing message templates from 5 to 100. This significant increase allows for more extensive A/B testing and experimentation, enabling you to optimize message performance effectively.

* **Key Advantages:**
  * More room for creativity and functionality in messaging.
  * Enhanced ability to test and refine message strategies.

<Image align="center" className="border" border={true} src="https://files.readme.io/2378bf51d28a6f3be6e6f1be1367a14a49fad3f05d7d1dbef5b94be0e1d0f7ad-100.png" />

***