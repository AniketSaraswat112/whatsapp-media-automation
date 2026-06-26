> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Pricing updates on the WhatsApp Business Platform

## What is changing in Meta’s pricing model?

Starting July 1, 2025, Meta is introducing a new pricing model that will change how Marketing and Utility messages are charged on WhatsApp Business Messaging.

**Key Updates**

Per-message pricing (PMP): From 1 July 2025, Marketing and Utility messages will be charged per message instead of per 24-hour conversation window.\
With per-message pricing, businesses will be charged:

* Per delivered marketing template message
* Per delivered authentication template message
* Per delivered utility template message, if delivered outside of a [customer service window](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages#customer-service-windows)\
  However, if a customer-initiated conversation is active, i,e, a service conversation, sending a Utility template within 24 hours of this window will not incur Meta charges.
* Tier based pricing for utility and authentication messages
* Check out the pricing [here](https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing/).

Additionally, here are a few examples illustrating changes in the pricing model for both marketing and utility messaging scenarios -

<Image alt="Pricing model for utility messaging" align="center" border={true} src="https://files.readme.io/4b2ba9fd777583df1a79772a10e6f5f0416217c186d5097d94d66bf16cc03a17-whatsapp-pricing-01.png">
  Pricing model for utility messaging
</Image>

<Image alt="Pricing model for marketing messaging" align="center" border={true} src="https://files.readme.io/54106379e10c879b3d0847ba62bc9e4655b6b37de0efe8abfa577cecd6b51e1e-whatsapp-pricing-02.png">
  Pricing model for marketing messaging
</Image>

## What are utility, marketing, and authentication messages?

WhatsApp defines two main conversation types:

* Service Conversations (user-initiated): Triggered when a user messages a business. Businesses can reply within a 24-hour service window.
* Business-Initiated Conversations: Started when a business sends a message using an approved template. These are further categorized into:
  * Utility: Transactional messages (e.g., order updates)
  * Marketing: Promotional content or re-engagement efforts
  * Authentication: One-time passcodes or login verification

## What is a service conversation window?

A service conversation window refers to the 24-hour period that begins every time a customer sends a message to a business. During this window, businesses can respond with free-form messages or utility templates without incurring Meta messaging charges (effective July 1, 2025).

For example, if a user messages a retailer saying, "Hey, where is my package?", a 24-hour window opens.

> Important: The 24-hour window resets each time the customer sends a new message.

<br />

## What changes are coming to Gupshup analytics and reporting?

Gupshup is updating its reports to reflect the new pricing model such that MC\_PF and UC\_PF abbreviations will be removed from Channel Analytics.

<Image align="center" className="border" border={true} src="https://files.readme.io/77a0134eb6856ea92a63a4a6c9ce7837e32fe1b5e5199fbcb3ab3ba2c07a1032-whatsapp-pricing-03.png" />

* Reports will instead show terms  "utility billable" and "utility non-billable".
* Three new columns will be introduced in T+30 DLR: Pricing Model, Category, and Type.

<Image align="center" src="https://files.readme.io/05225c0c5daa8bd4b60e0d007926211bbca41f3cfbbda0380502c43e6f3ca3c7-whatsapp-pricing-04.png" />

<br />

<Image alt="Per Message Pricing" align="center" border={true} src="https://files.readme.io/5f5f3bb3ef34eb511a940592e3bb307e48f034d95683869619ca892c0e33f308-unify_pmp_screen-png---07-01-2025_06_15_PM.png">
  Per Message Pricing
</Image>

## How will this appear on my invoices?

From August 2025 (for July usage), invoices will have new SKUs:

* Include current SKUs with a "-PM" suffix for per-message billing.
* Initially, show average prices per category.
* Future invoices may include detailed slab-based pricing and volume discounts.

<Image align="center" src="https://files.readme.io/69bf8a0d2ce21393ab96449f873b429e690a05b130b7b1851f04deb3b03a2936-whatsapp-pricing-05.png" />

## What about two-way communication or templatized replies? What if I am retargeting in 24 hours?

In two-way interactions, template messages are billed unless they meet Meta's utility non-billable criteria. Here’s how it works depending on the message type and timing:

* If the brand replies with a Marketing Template:
* Meta will charge for the message, even if it’s in the 24 hour customer service window.
* If the brand replies with a Utility Template:
* If the 24-hour service window (from the customer’s last message) is active, Meta will not charge. Outside the 24-hour window, charges apply.
* If the brand replies with a Non-template (freeform) message in 24 hour service window:

These messages are not charged by Meta

## What happens to conversation IDs?

Meta is removing conversation IDs. Billing will now rely on service window flags and timestamps provided in delivery receipts.

## How can I reconcile reports and track usage?

Delivery receipts will include pricing data directly from Meta.

* Country, category, and pricing model information will be included.
* Read events will not include pricing information.
* Reconciliation is supported using the last 30 callbacks for accuracy.

## What happens during the transition month (July 2025)?

July 2025 will be a hybrid billing month, with a mix of Conversation-Based Pricing (CBP) and Pay-Per-Message Pricing (PMP), depending on when messages are delivered. This approach ensures billing remains transparent and aligned with Meta’s monthly billing cycle.

For customers billed on message delivery (or sent date):

* You will see a combination of PMP and CBP charges in your July invoice.
* Cross-month deliveries (messages requested in June but delivered in July) will be included in the July billing cycle under the old CBP model.

<Image alt="Mix of CBP & PMP Pricing during month of July 2025" align="center" src="https://files.readme.io/61746330d28b7f31d47687cff79a8c39d5276fd899b37063de2ccbf415753a89-unify_pmp_screen.png">
  Mix of CBP & PMP Pricing during month of July 2025
</Image>

## Can I access real-time pricing data?

Yes. Gupshup can share the complete pricing object received from Meta in webhook responses. This requires enabling a flag via your enterprise settings.

## Will my custom or template reports break?

No. Existing reports will continue to function. Utility message categories in T+30 DLR will be renamed as “billable” or “non-billable” to align with the new structure.

## Will country-level data be included in reports?

Yes. Country information is already included in some reports and will be added to delivery receipts going forward.

## Can I get a sample invoice?

Yes. A sample invoice showing updated SKUs, pricing categories, and utility breakdowns will be available soon. The average price will reflect Meta’s base rate and applicable discounts.

For further assistance or to activate webhook pricing data, please reach out to your Gupshup account manager.