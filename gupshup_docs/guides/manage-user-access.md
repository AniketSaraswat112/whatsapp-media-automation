> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Manage WhatsApp User Access

Gupshup now supports blocking and unblocking WhatsApp users, as well as retrieving your blocklist, via a set of APIs. These capabilities help businesses protect their agents, ensure a safer chat environment, and enforce policy control over abusive or unwanted interactions.

**✋ Block WhatsApp Users**\
Use this API to block one or more WhatsApp users from contacting your business account.

What happens when a user is blocked?

* The user cannot send messages to your business.
* Your business cannot reply to the blocked user.
* The user will no longer see your online presence or availability.
* Blocking is silent — the end user is not notified explicitly.

**Key Highlights:**

* Only users who messaged your business in the last 24 hours can be blocked.
* You can block users using their phone number along with country codes.
* Responses include per-user results (success/failure), so you can handle partial errors gracefully.
* Useful for bots, support agents, and compliance teams managing abuse.

[🔗 View Block User API Reference →](https://docs.gupshup.io/reference/block-user-api)

**✅ Unblock WhatsApp Users**\
This API allows you to unblock previously blocked users, restoring the ability for two-way communication.

Use Cases:

* Reinstating users after resolving support issues.
* Reversing accidental or automated blocking logic.
* Managing dynamic user access through automated rules.
* The API works similarly to the block API — submit a list of user phone numbers along with the country codes

[🔗 View Unblock Users API Reference →](https://docs.gupshup.io/reference/unblock-user)

**📋 Fetch Blocked Users List**\
Use this endpoint to retrieve a paginated list of all currently blocked WhatsApp users for a specific business phone number.

Features:

* Supports limit, after, and before query parameters for pagination.
* Useful for audits, reporting, abuse analytics, or building admin dashboards.
* Includes both phone numbers and WA\_IDs of blocked users.

[🔗 View Blocked Users List API Reference →](https://docs.gupshup.io/reference/get-list-of-blocked-users)

**⚠️ Limitations & Error Handling**

* Users can only be blocked if they messaged you in the past 24 hours.
* 64K limit	Maximum number of blocked users is 64,000.
* Some users in the request may succeed while others fail — check added\_users and failed\_users in the response.
* When fetching or updating blocklists, you may encounter version mismatch errors if the list changes during the operation.

**📌 Pro Tip**\
Automate user blocking for policy violations, spam detection, or abuse reporting in real-time.