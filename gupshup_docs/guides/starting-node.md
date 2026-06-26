> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Starting Node

Starting Node is the default available node in all new journeys. The configuration of Starting Node triggers a journey based on the event received.

### How to configure

1. Click on the Starting Node to open the Node configuration on the right side
2. Select from the the available list of Event based on which you would like to trigger the journey
3. There are three available selection viz. No Event, User Input and AI Trigge&#x72;*(available with AI Recipe)*
4. You can also add custom Conditions if required to personalize the event triggers

![](https://files.readme.io/c7931c9-image.png)

![](https://files.readme.io/4206d02-image.png)

### Event Types:

1. **No Event**: This option is selected when you don't want this journey to be trigger with any user action. Ideally journeys used with [Call & Return](https://docs.gupshup.io/docs/call-return) nodes are used with No Event to ensure its triggered only through the Call & Return Node.
2. **User Input**: This event is selected to trigger the journey based on a match with user input. You can select from list of available operation&#x73;*(contains, equals to etc.)* to validate the user input and trigger the journey.
3. **AI Trigge&#x72;*(available with AI Recipe only)***:  This event is selected when there are intents trained in the AI Admin and the journey should be triggered when a specific intent is detected. AI Trigger is the most efficient and dynamic way of triggering journeys as it can retain the context of the intent and the entities mentioned on the user input sentence/keyword.\
   AI Trigger has few additional configurations which are as follows:
   1. Intents: Intents are trained on the AI Admin Model and can be used for triggering journeys based on that. You can customize your intent based on the domain and the LLM model will create utterances based on the description in order to provide a preview of the type of utterance that the Intent can detect.
   2. Local/Global Entities: You can create Intent Based Entities or Global Level Entities to have more information captured from the users message and use them in the journey.\
      Example for a user input like *"Book a flight from Mumbai to Brazil for 25th of Dec"*  have multiple entities like the source and destination along with the date for which the user wanted to book the ticket. These entities will be detected if there are Local Entities mapped with the intent and can be tightly coupled with a variable to update the variable value and use it later.\
      *Entity\<>Variable mappings are tightly coupled and any update on the value of entity or variable will update the other as well.*

### Additional Condition:

Bot designers will also have provision to personalize or put conditional check for the events triggered before responding with a journey. These conditions can be added in the Start Node based on the available variables.

**Example**: The bot can check for the Channel from which the user is responding and respond based on that.

![](https://files.readme.io/8aeaccd-image.png)

**Note**:

* Journey Builder will support up to 5 Events in the Starting Node
* Only 1 out of 5 Event can be selected User Event or AI Trigger
* 5 out of 5 can be selected as Customer Event