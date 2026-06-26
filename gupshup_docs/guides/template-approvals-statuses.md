> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Template Message Approvals & Statuses

This article describes the approval process and best practices for WhatsApp template approvals. To learn more about how to create and send WhatsApp templates, please refer to this article.

## Template Message Approval Criteria & Approval Period

### Approval Criteria

WhatsApp will generally reject templates for four reasons:

| Criteria                                  | Description                                                                                                                                                                                                                         |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incorrect Format                          | Templates with misplaced or malformed variables, such as incorrectly placed variables or curly braces.                                                                                                                              |
| Policy Violations                         | Templates that violate [WhatsApp's terms of service, commerce policy, and business policy](https://business.whatsapp.com/policy), or are seen as abusive, such as including prohibited content or requesting sensitive information. |
| Generic Templates                         | Templates that are too generic. These templates lack specificity and clarity, making them prone to misuse.                                                                                                                          |
| Variables Placed At the Beginning/ Ending | Since variables can consist of multiple words, WhatsApp prohibits placing variables at the beginning or end of a message. Violating this rule will cause the template to be automatically rejected.                                 |

### Approval Period

| Period                | Description                                                                                                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Typical Approval Time | Most templates are approved within minutes through a machine learning-assisted process.                                                                                                                                                                         |
| Human Review          | Templates that cannot be automatically triaged by algorithms may take up to 48 hours for a human review.                                                                                                                                                        |
| Pending State         | If a template remains in "pending" status for more than 48 hours, you should open a support ticket with Gupshup and include the template name for further investigation. Write to [devsupport@gupshup.io](mailto:devsupport@gupshup.io)  with your Customer ID. |

## Template Statuses

| Status      | Description                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Submitted   | The template is under review and can take up to 24 hours. This status indicates that the template has not yet been approved or rejected.               |
| Approved    | The template has passed review and can be used to notify customers. This status indicates that the template meets all necessary criteria and policies. |
| Rejected    | The template has failed to be reviewed due to violations of the approval criteria. This status requires revising and resubmitting the template.        |
| Paused      | The template has recurring negative feedback from users and cannot be sent until the issues are resolved.                                              |
| Failed      | The template has failed the review process at Gupshup's end.                                                                                           |
| Deactivated | The template violates policies or has received excessive negative feedback and is permanently disabled from being sent.                                |

## Tips for Creating Templates

<Table>
  <thead>
    <tr>
      <th>
        Tip
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Iterative Approach
      </td>

      <td>
        Submit the template, get approval, tweak based on feedback, and resubmit as needed. This ensures continuous improvement of the template.
      </td>
    </tr>

    <tr>
      <td>
        Re-Opening the 24-Hour Window
      </td>

      <td>
        When trying to re-engage users, mention the previous thread to provide context and continuity.

        * \*Example\*\*: *"I'm sorry that I wasn't able to respond to your concerns yesterday but I'm happy to assist you now. If you'd like to continue this discussion, please reply with YES".*
      </td>
    </tr>

    <tr>
      <td>
        Friendly Tone
      </td>

      <td>
        Use a friendly and engaging tone in the messages, and consider using emojis to increase user engagement and make the messages feel more personable.
      </td>
    </tr>
  </tbody>
</Table>

## Rejection & Revision

### Common Rejection Reasons

<Table>
  <thead>
    <tr>
      <th>
        Rejection Reason
      </th>

      <th>
        How to Fix It
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Variables placed next to each other, such as `{{1}}{{2}}`
      </td>

      <td>
        Ensure there is at least one word between variables, or use only one variable to maintain message clarity and prevent confusion.
      </td>
    </tr>

    <tr>
      <td>
        Mismatched curly braces, or words instead of numbers
      </td>

      <td>
        The correct format is `{{1}}`, not `{{one}}`. Ensure variables are properly formatted.
      </td>
    </tr>

    <tr>
      <td>
        Non-sequential variable parameters, such as ` {{1}}, {{2}}, {{4}}, {{5}}`
      </td>

      <td>
        Ensure all variables are sequentially numbered to maintain logical flow and clarity.
      </td>
    </tr>

    <tr>
      <td>
        Newlines, tabs, or more than 4 consecutive spaces
      </td>

      <td>
        Avoid using these formatting elements as per [Meta's rules](https://developers.facebook.com/docs/whatsapp/message-templates/creation/) to ensure message readability and compliance.
      </td>
    </tr>

    <tr>
      <td>
        Call-to-action has a direct link to WhatsApp, such as `<https://wa.me/14154443344>`. Meta no longer allows this.
      </td>

      <td>
        Instead of including a clickable link, spell out the phone number to comply with WhatsApp's guidelines.
      </td>
    </tr>

    <tr>
      <td>
        Duplicate templates\
        `This check does not apply to Authentication templates, such as sending OTP.`
      </td>

      <td>
        If submitting a similar template, slightly tweak the name and content to avoid duplication and ensure each template is unique.
      </td>
    </tr>

    <tr>
      <td>
        Violates WhatsApp [Commerce or Business Policy](https://business.whatsapp.com/policy), such as `requesting sensitive identifiers from users, such as payment card numbers, financial account numbers, or National Identification numbers`.
      </td>

      <td>
        Follow WhatsApp's policies and avoid requesting sensitive identifiers to ensure compliance and prevent rejection.
      </td>
    </tr>

    <tr>
      <td>
        Related to gaming or gambling
      </td>

      <td>
        Replace any words that could be remotely perceived as related to gaming or gambling to avoid policy violations.
      </td>
    </tr>

    <tr>
      <td>
        Overly vague templates, such as `Hi, {{1}}, thanks`are commonly abused by spam users, so they will be rejected.
      </td>

      <td>
        Provide sufficient detail in the message to clarify the information being inserted and avoid confusion.
      </td>
    </tr>

    <tr>
      <td>
        Incorrect language chosen
      </td>

      <td>
        Double-check that the correct language is selected for the template to ensure it is appropriate for the target audience.
      </td>
    </tr>
  </tbody>
</Table>

### Revising Rejected Templates

<Table>
  <thead>
    <tr>
      <th>
        Step
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Analyzing Rejection Reason
      </td>

      <td>
        The rejection reason can be found by clicking on the ℹ️ icon in the Template, providing insight into why the template was rejected.
      </td>
    </tr>

    <tr>
      <td>
        New Template Submission
      </td>

      <td>
        Submit a new template with a different name and delete the rejected template to avoid confusion and ensure clarity.
      </td>
    </tr>

    <tr>
      <td>
        Reconsideration Request
      </td>

      <td>
        If you believe the template was rejected by mistake, open a support ticket with Gupshup to request reconsideration.\
        Write to [devsupport@gupshup.io](mailto:devsupport@gupshup.io)   with your Customer ID.
      </td>
    </tr>
  </tbody>
</Table>

> 📘
>
> These are the rejection reasons that WhatsApp discloses:
>
> * **TAG\_CONTENT\_MISMATCH**: The language and/or template category selected don't match the template content.
> * **INVALID\_FORMAT**: Variables or other elements that were formatted incorrectly.

## Examples of Approved and Rejected Message Templates

### Approved Template Message

* `👋 Welcome {{1}}. What company do you work for?`
* `Your {{1}} appointment is coming up on {{2}}. Have a nice day`
* `Your {{1}} appointment is coming up on {{2}}. Reply with {{3}} or {{4}}. Thank you`
* `Dear {{1}}: Unfortunately your pending booking did not go through.
  No charges were made to your bank account.
  You can try to rebook the hotel again.
  We sincerely apologize for the inconvenience.`

### Rejected Template Message

The following templates don't provide sufficient detail on how they will be used:

* `Reminder: {{1}}`
* `{{1}} was added`
* `{{1}}, {{2}}!`

The following templates are considered spam, as they do not make it clear to the user why they are receiving this message:

* `I am Max, the virtual assistant.`
* `Hi, are you available?`
* `We will put our platform up and running soon, I would like to get to know you better by asking 5 questions.`
* `Do not worry, I will not share your answers with anyone.`

## Guidance on Template Categorization

Meta has strict definitions of Authentication and Utility templates. Authentication templates follow a rigid pattern pre-defined by Meta. Utility templates relate to a specific, agreed-upon transaction and accomplish one of the following: confirm, suspend, or change a transaction or subscription. As of October 30, 2023, Utility also includes messages for feedback surveys, managing user-requested opt-in, or continuing a conversation started by a user in another channel. Any templates that do not fall precisely within these strict definitions are likely to be categorized by Meta as "Marketing". This includes any mix of Marketing and Utility content. For the latest guidance [please see Meta's documentation](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines/).

### Guidance for Utility Templates

Meta's categorization engine is not deterministic. Sometimes, legitimate Utility templates can be categorized as Marketing by Meta. To overcome this issue, you may incorporate the following tips into your template creation process:

| Tip             | Description                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Follow Up       | Explicitly indicate that the message is a follow-up on a user request to ensure clarity and compliance.                                |
| Keywords        | Use A/B testing for keywords to avoid triggering marketing filters and ensure the message is correctly classified.                     |
| Media Templates | Submit a generic image for approval and replace it with a custom image when the message is sent to ensure compliance and flexibility.  |
| Clear Titles    | Use titles that indicate the Utility nature of the template, such as "safety\_alert" or "account\_update," to avoid misclassification. |