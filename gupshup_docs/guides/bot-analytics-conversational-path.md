> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Conversational Path

The conversation path helps you visualize how your users are moving across different Journeys when conversing with the bot. You can identify major points where users are dropping off or changing paths, and make changes in bot design to improve overall engagement and conversion.

<Image align="center" src="https://files.readme.io/2b7ae78-Conversation_Path.png" />

The start node indicates how many sessions got created, and the next step of the conversation path showcases all the Journeys which are present along with the number of times it was executed and the number of times a user didn't complete the Journey.

At the top of each node, you will be able to see how many times the node was triggered and exited in percentage and in absolute number.

You can expand and collapse a journey using the **+** & **-** buttons present on the right end of each node.

> 📘
>
> The text displayed on the node is the Node Name. If Node Name is not present, then node type is displayed.

## Special Nodes in Conversational Path

### Exit Nodes

An **Exit** is defined as a user dropping off or not responding to the bot before the session expires.

**Exit Nodes** are representations/placeholders of Exits. These nodes appear at places where users are exiting in a journey and also display the number of sessions in which users have exited at that point in the journey.

Exit Nodes are represented in red color with the node name as "EXIT\_NODE".

### Cyclic Nodes

**Cyclic Nodes** showcase the loops in the bot journey.

For example, let's take a journey with 5 nodes - Node 1 > Node 2 > Node 3 > Node 4 > Node 5. If a user at Node 3 has an option to either go to Node 4 or go back to Node 1, Node 3 is displayed with 2 branches - one going to Node 4 and one going to a cyclic node named "Node 1".