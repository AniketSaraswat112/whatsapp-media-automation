> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Feature #7: Masking Phone Numbers

# Phone Number Masking in Gupshup Salesforce Package

The Gupshup package provides an option to **mask phone numbers** while using the **"Send WhatsApp Message"** quick action button.\
This feature helps protect sensitive customer data by displaying only the necessary part of a phone number while masking the rest.

***

## 🔧 Steps to Enable Phone Number Masking

1. Go to **Setup** in Salesforce.
2. In the **Quick Find** box, search for **Custom Settings**.
3. Open **Gupshup Setting** and click on the **Manage** button.

   ![](https://files.readme.io/73ddef4d3085dce324cacb34c8327b4fbc196c075456aed31fac38b291ac03a9-image.png)
4. Under the **Gupshup Setting** section, click **New** to create an Org-level custom setting record.
5. Check the box **Mask Phone Numbers** to enable masking.
6. *(Optional)* Define a specific masking pattern in the **Phone Number Masking Format** field.

   * If left blank, the system will use the **default masking logic**.

     ![](https://files.readme.io/a6f3f063a1bdc579df73fb3bc0dae3cc85146d336a1f5bbce5c3fccca972ef30-image.png)
7. Click **Save**.

***

## 📝 Masking Format Guidelines

The **Phone Number Masking Format** field accepts **comma-separated values** for different phone number lengths.

### Valid Characters

* `N` → Show the actual digit
* `X` → Mask the digit

### Example: 10-digit number

* Format:\
  NNNNNXXXXX
* Output:\
  98765\*\*\*\*\*

***

## 📌 Multiple Formats Example

If you want to support **multiple phone number lengths**, provide comma-separated formats:

\{NNNNNXXXXX},\{NNNXXXXXXNN},\{NNNNXXXXXXNN}

* If a number has **11 digits** and a format for 11 digits is defined, that format will be applied.
* If no matching format exists, the **default masking logic** is used.

***

## 🔒 Default Masking Logic

If no format is defined or if a number length does not match any provided format:

* The **first 3 digits** and the **last 2 digits** remain visible.
* All other digits are masked with `*`.
* If the number starts with a `"+"`, it remains visible.

**Example**

* Original:\
  +919876543210
* Masked (default):\
  +919\*\*\*\*\*\*\*10

***

✅ This ensures that sensitive phone numbers are kept secure while still allowing identifiers for recognition.