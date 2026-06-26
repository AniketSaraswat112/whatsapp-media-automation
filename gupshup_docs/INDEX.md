# Gupshup Documentation Index

Scraped on: 2026-06-25
Source: https://docs.gupshup.io/
Total files: ~162 markdown files across 4 directories

## Directory Structure

```
gupshup_docs/
├── INDEX.md                   ← this file
├── guides/                    ← 117 guide pages
├── reference/                 ← 41 API reference pages
├── pages/                     ← 2 general pages
└── changelog/                 ← 2 changelog pages
```

---

## GUIDES (`guides/`)

### Bot Analytics
- `bot-analytics-conversational-path.md`
- `bot-analytics-dashboard.md`
- `bot-analytics-exit-nodes.md`
- `bot-analytics-journey-tracking.md`
- `analytics-dashboard.md`

### Bot Studio / Nodes
- `ai-node.md`
- `action-nodes.md`
- `message-nodes.md`
- `starting-node.md`
- `block-templates.md`
- `copy-journey.md`
- `ipaas-callback-url-event-on-starting-node.md`

### Bot Platform
- `intents.md`
- `publish-your-bot-on-instagram.md`
- `set-up-persistent-menu.md`

### Goals
- `creating-goals.md`
- `goal-analytics.md`

### WhatsApp Platform — Getting Started
- `overview.md` (Getting Started)
- `quickstart.md` (Create Your First App)
- `onboarding-guide.md`
- `getting-started.md`
- `introduction.md`
- `sandbox.md`

### WhatsApp Platform — Account & Profile
- `profile.md`
- `settings.md`
- `manage-business-profile.md`
- `display-name-guidelines.md`
- `change-display-name.md`
- `types-of-whatsapp-business-accounts.md`
- `verify-business-on-meta.md`
- `waba-health.md`

### WhatsApp Platform — Messaging
- `session-messages.md`
- `interactive-messages.md`
- `types-of-text-messages.md`
- `media.md`
- `text.md`
- `other.md`
- `inbound-message.md`
- `subscriptions-and-notifications.md`
- `manage-user-access.md`

### WhatsApp Platform — Templates
- `templates.md`
- `create-template.md`
- `edit-template.md`
- `delete-template.md`
- `template-additional-operations.md`
- `template-approvals-statuses.md`
- `templates-comparison.md`
- `template-messages.md`
- `catalog-template.md`
- `copy-coupon-code.md`
- `mpm-templates.md`
- `template-button-list.md`

### WhatsApp Platform — Events & Webhooks
- `webhooks.md`
- `set-webhook-url.md`
- `webhook-key-points.md`
- `message-events.md`
- `billing-events.md`
- `system-events.md`
- `error-codes.md`
- `welcome.md`
- `welcome-messages.md`

### WhatsApp Platform — Commands & Features
- `commands.md`
- `ice-breakers.md`
- `bulk-upload.md`
- `wallet.md`

### Campaigns & Integrations
- `interactive-campaigns.md`
- `one-way-campaigns.md`
- `customisable-integrations.md`
- `pricing-updates.md`

### HubSpot CRM Integration
- `hubspot-installation.md`
- `hubspot-setup.md`
- `hubspot-send-template.md`
- `hubspot-two-way.md`
- `hubspot-workflows.md`
- `hubspot-notifications.md`
- `hubspot-notifications-1.md`
- `hubspot-faqs.md`
- `timeline-activity.md`
- `custom-connectivity.md`
- `receive-notifications-for-incoming-messages.md`

### Salesforce CRM Integration
- `salesforce-installation.md`
- `salesforce-setup.md`
- `salesforce-bulk-messaging.md`
- `salesforce-flow-feature.md`
- `salesforce-masking-phones.md`
- `salesforce-scheduler.md`

### Zoho CRM Integration
- `zoho-crm-getting-started.md`
- `zoho-crm-installation.md`
- `zoho-crm-authorisation.md`
- `zoho-crm-channel-setup.md`
- `zoho-crm-setup-configuration.md` (missing — check zoho-crm-limitations.md)
- `zoho-crm-limitations.md`
- `zoho-crm-two-way.md`
- `zoho-crm-bulk.md`
- `zoho-crm-automation.md`
- `zoho-crm-notifications.md`
- `zoho-crm-template-messaging.md`

### Zoho Desk Integration
- `zoho-desk.md`
- `zoho-desk-getting-started.md`
- `zoho-desk-features.md`
- `zoho-desk-setup.md`

### Microsoft Dynamics 365 CRM
- `ms-dynamics-crm.md`
- `ms-dynamics-installation.md`
- `ms-dynamics-setup.md`
- `ms-dynamics-send-template.md`
- `ms-dynamics-two-way.md`

### Oracle Responsys Integration
- `oracle-responsys.md`
- `oracle-responsys-installation.md`
- `oracle-responsys-installation2.md`
- `oracle-responsys-bot-studio.md`
- `oracle-responsys-program-designer.md`
- `oracle-responsys-program-designer-send.md`
- `oracle-responsys-setup.md`
- `oracle-responsys-setup-config.md`
- `oracle-responsys-delivery-reports.md`
- `oracle-responsys-limitations.md`
- `set-up-gupshup-whatsapp-account.md`

### Salesforce Marketing Cloud (SFMC)
- `sfmc-installation.md`

### Version & Misc
- `version-history.md`
- `two-way-messaging-session-messaging.md`
- `send-template-messages.md`
- `template-messaging.md`

---

## API REFERENCE (`reference/`)

### User Management
- `block-user.md`
- `block-user-v1.md`
- `get-blocked-users.md`
- `unblock-user.md`

### Business Profile
- `get-business-details.md`
- `get-profile-about.md`
- `get-profile-waba-details.md`
- `get-profile-photo.md`
- `set-profile-about.md`
- `set-profile-details.md`
- `set-profile-photo.md`

### Sending Messages (Session)
- `send-messages.md` (main send endpoint)
- `session-text-message.md`
- `quick-replies.md`
- `postback-text.md`
- `cta-url.md`
- `list-message.md`
- `image-message.md`
- `video-message.md`
- `document-message.md`
- `audio-message.md`
- `sticker-message.md`
- `reaction-message.md`
- `location-message.md`
- `single-product-message.md`
- `catalog.md`
- `multi-product-message.md`

### Sending Template Messages
- `template-text.md`
- `template-image.md`
- `template-video.md`
- `template-document.md`
- `template-audio.md` (may be missing)
- `template-location.md`
- `template-authentication.md`
- `template-carousel.md`
- `template-catalog.md`
- `template-coupon-code.md`
- `template-lto.md` (Limited Time Offer)
- `template-mpm.md` (Multi Product Message)

### MM Lite
- `send-mm-lite-v3.md`

### Template Management
- `get-all-templates.md`
- `get-template-by-id.md`

---

## PAGES (`pages/`)
- `customer-classification.md`
- `previous-release-notes.md`

---

## CHANGELOG (`changelog/`)
- `whatsapp-self-serve-platform.md`
- `partner-portal-release-notes.md`
