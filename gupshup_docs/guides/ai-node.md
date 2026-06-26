> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# AI Node

### When to use

The AI Node is used to link journeys with trained workspaces created in the AI Admin in Bot Studio. For instance, if businesses want to answer customer FAQs, bot designer can train the data workspace with relevant FAQ related data sources and use the AI Node to link the journey with the same data workspace. When a user interacts with the bot at run-time, user can ask the query and the AI enabled journey provides the best relevant answer to the user.

Currently, bot designer can use AI Node in journeys to automate -

1. Generic queries of customers such as FAQs for the business
2. Commerce use cases such as queries on product catalogues of the business

### How to use

Drag and drop the AI Node from the Node Panel to the canvas.

1. Select the trained Data workspace from the dropdown. The response to customer queries will be received from this data workspace. Generic workspaces can be created to answer the FAQ.
2. Store the response in a JSON variable using the "Store In" dropdown.

![](https://files.readme.io/c4589fa-image.png)

3. At run-time when a customer asks a query to the Bot, the generic data workspace uses AI to send relevant response to the JSON variable. The response ca be relayed to the customer by using ***\{\{var\_local.VariableUsed.output\[0].faq\_response\[0].message}}*** in a text node. A sample is attached below. Bot designer can use other message nodes to provide the response to customers.

```
{{var_local.VariableUsed.output[0].faq_response[0].message}} //Can be used to send text to users
```

![](https://files.readme.io/d38faa4-image.png)

4. Journey can be designed to answer multiple customer queries by re-using the AI Node through looping within the journey or using the Call and Return Node.

### Limitations

1. This node is available only when AI is enabled in the recipe.
2. Data workspace that are created and trained successfully in the AI Admin Module are visible in the dropdown to select data workspace.
3. Response can be stored in JSON Variable only.