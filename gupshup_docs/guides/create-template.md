> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Template

In the Platform, you can manage your Message Templates in one place under the **Templates** tab.

## Before You Begin

To send a template message on WhatsApp, you must first create a template message and submit it to the WhatsApp team for approval. Only the **approved templates** can be sent to users.

> 📘
>
> Providing samples when creating Message Templates is now mandatory.
>
> Samples give examples of possible data for your template, aiding in the review and approval process by clarifying the type of message you intend to send.

## Template Details

| Property        | Description                                                                                                                                                                          | Limitations                                                                              | Required? |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | :-------- |
| Template Name   | Can only contain lowercase alphabets, numerics, alphanumeric characters, and underscores.                                                                                            | No other characters or white space are allowed.                                          | Yes       |
| Category        | Select the correct category of your template. See the list of supported categories.                                                                                                  |                                                                                          | Yes       |
| Language        | Select the correct language of your template; the template name will be the same for all translations. Specify the language field when sending. See the list of supported languages. |                                                                                          | Yes       |
| Template Labels | Define what use-case this template serves e.g Account update, OTP, etc in 2-3 words                                                                                                  |                                                                                          | Yes       |
| Header          | The header of your message template; types includes Image, Video, Document, Text, and Location.                                                                                      | Character Limit: 60                                                                      | No        |
| Body            | The body of your message template.                                                                                                                                                   | Character Limit: 1024                                                                    | Yes       |
| Add Variable    | Support parameter placeholders in the format of `{{1}}`.                                                                                                                             | Within a WhatsApp Message Template, the character limit does not apply to the variables. | Yes       |
| Footer          | The text footer of your message template.                                                                                                                                            | Character Limit: 60                                                                      | No        |
| Buttons         | The button(s) of your message template includes Call-to-action, Copy Offer Code, and Quick Reply.                                                                                    | Maximum of 10 buttons.                                                                   | No        |

## Create A Template

1. Navigate to the top menu bar and hover over the **Dashboard** to open the drop-down menu. Then, select **WhatsApp**.
2. Under **Dashboard**, select your App. *You will land at the **Templates** tab*.

   <Image alt="Login> Dashboard> WhatsApp> Desired App> Templated" src="https://files.readme.io/48d0ac8-Screenshot_2024-05-29_at_12.20.28_PM.png" align="center" border="true" caption="Login> Dashboard> WhatsApp> Desired App> Templated" />
3. Select **Create Template**.

   <Image alt="Create Template" src="https://files.readme.io/f97b1e3-Screenshot_2024-05-29_at_12.22.25_PM.png" align="center" border="true" caption="Create Template" />
4. Enter a **Template name** and select the applicable **Category**.\
   *Depending on the selected category, you will need to choose a **Message Type**, such as Custom Message, Product Message, Carousel, etc*.

   <Image alt="Select Category" src="https://files.readme.io/307831e-Screenshot_2024-05-29_at_1.16.01_PM.png" align="center" border="true" caption="Select Category" />
5. Select the **Language** from the drop-down menu and enter a **Template Label**.

   <Image alt="Language and Template Label" src="https://files.readme.io/3326759-Screenshot_2024-05-29_at_1.17.53_PM.png" align="center" border="true" caption="Language And Template Label" />
6. Add a **Header** (Optional).\
   *Depending on the selected header, you will need to select a **Header Type**, such as Text or Media type*.

   <Image alt="Header" src="https://files.readme.io/e543d27-Screenshot_2024-05-29_at_1.31.22_PM.png" align="center" border="true" caption="Header" />
7. In **Body**, enter the text for your message in the language you have selected. You can add variables, such as `{{1}}` and `{{2}}` shown in the below image.

   <Image alt="Body With Sample Variables" src="https://files.readme.io/0c5890c-Screenshot_2024-05-31_at_4.37.56_PM.png" align="center" border="true" caption="Body With Sample Variables" />

   > 📘
   >
   > With the latest 9.0 release, now you can format the text with the template body. e.g., **feedback** and *Thanks* are formatted as bold and italic in the image above.
8. Optionally, you can add a **Footer**, which is a short line of text at the bottom of the template.

   <Image alt="Sample Footer" src="https://files.readme.io/5677bf0-Screenshot_2024-05-29_at_1.40.11_PM.png" align="center" border="true" caption="Sample Footer" />
9. Optionally, you can add up to 10 buttons to the template. The buttons added can be a mixture of various button types.

   <Image alt="Buttons" src="https://files.readme.io/bdebc90-Screenshot_2024-05-29_at_1.43.36_PM.png" align="center" border="true" caption="Buttons" />

   > 📘
   >
   > Despite the maximum limit of 10 buttons in a template, every button type also has its own limit.
10. Select the checkbox **Allow Meta to change the category of this template while approving** if applicable.\
    Click **Preview and Submit**.