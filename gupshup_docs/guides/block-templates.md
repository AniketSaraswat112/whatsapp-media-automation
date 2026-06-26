> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Block Templates

### Introduction:

Now you can create Templates using the Blocks created in the journeys and re-use them on multiple journeys in the project with just a drag and drop. The Saved blocks can be found on the Journey Canvas left pane along with the Message and Action nodes making it seamless for the bot designer to quickly preview and use the block while creating any journey.

<Image align="center" src="https://files.readme.io/4b5f3ca-pic11l.png" />

### What's New?

* Save the Blocks created to re-use as many time needed
* Preview blocks before importing
* Customize after dragging on the canvas
* Delete the unused Block templates to keep your Canvas neat and tidy
* You can also create a block using a single code node to reuse the code in multiple journeys.
* Deleting or removing your original block from canvas won't affect your templates

<Image align="center" src="https://files.readme.io/85d3d28-pic22.png" />

<Image align="center" src="https://files.readme.io/a89732f-pic33.png" />

### Note:

* Local Variables on the Node Text Fields will be replaced by the text \{\{BLOCKVARIABLE}}. Bot designer have to reconfigure the local variables required on the journey where the block will be used later
* Variables on dropdowns will be cleared for re-configuration on the new journey once block is added
* For Call & Return node, the variable mappings configured will be cleared. Bot designer have to reconfigure the variable mappings with the new journey variables
* For Template nodes, the variables used would be cleared while saving the block.
* Each project can have a maximum of 100 Block Templates
* Starting Node cannot be included in a Block Template