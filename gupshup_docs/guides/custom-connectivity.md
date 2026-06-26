> ## Documentation Index
> Fetch the complete documentation index at: https://docs.gupshup.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Custom Connectivity.

# Automation (Cloudflow/Power Automate)

* To create a Power Automate to send template messages Go to [https://make.powerapps.com/](https://make.powerapps.com/) and select the environment where you want to create the flow

<Image align="center" className="border" border={true} src="https://files.readme.io/f35cae9-image.png" />

**Note**: While creating any power Automate it is needed to be part of a solution, else you will need to put the orgID manually.\
Inside the solution, you can create the Power Automate.\
There are different types of Power Automate,  you can create any type of Power Automate to send text messages.

Automated: triggered on specific conditions.\
◦ Instant: This is triggered manually.\
◦ Schedule: This is scheduled to run at a specific time.

<Image align="center" className="border" border={true} src="https://files.readme.io/2a41b71-image.png" />

**Common steps:**\
1.Here I am creating a Manual Power Automate.

<Image align="center" className="border" border={true} src="https://files.readme.io/02e485a-image.png" />

2.Click on the +New Step and select the Gupshup

<Image align="center" className="border" border={true} src="https://files.readme.io/d9b6761-image.png" />

3.You will be able to see the below list of actions that can be performed

<Image align="center" className="border" border={true} src="https://files.readme.io/b7442d6-image.png" />

4.Select the Send Selfserve Message/Send Enterprise Message, and you will be able to see the following parameter that needs to be filled

<Image align="center" className="border" border={true} src="https://files.readme.io/af2903f-image.png" />

* Channel name: Need to select the channel that has been created while sending the message in UI.
* Type: Chhanel Type (selfserve)
* Template: It will list down all the templates associated with the given channel

<Image align="center" className="border" border={true} src="https://files.readme.io/6a17257-image.png" />

* Message Type: Select from the available option
* Sample Message: This shows how a message will look while sending to the client.

<Image align="center" className="border" border={true} src="https://files.readme.io/949ede1-image.png" />

# Params

Based on the parameters you need to add the more parameter

## Single VariablePass the required value since it has only one, need to create only one param

<Image align="center" className="border" border={true} src="https://files.readme.io/1b48d6b-image.png" />

Pass the required value since it has only one, need to create only one param

## Multiple Variable

It has four different variables so need to add 4 different values

<Image align="center" className="border" border={true} src="https://files.readme.io/c4ecb8c-image.png" />

## Phone number

### 1.static

“Static means that the value is hard-coded value in mobile field

<Image align="center" className="border" border={true} src="https://files.readme.io/d00b652-image.png" />

### 2.dynamic mobile number

"We can enter the mobile number in the text box field."

<Image align="center" className="border" border={true} src="https://files.readme.io/657b484-2024-06-06_16-42.png" />

# Organization Id

<Image align="center" className="border" border={true} src="https://files.readme.io/93f1d1d-image.png" />

**Media URL**: This is optional and needs to pass only when the selected template is of type media/document.

## Send Template message (Text)

To send the text message select the template which is of type text

<Image align="center" className="border" border={true} src="https://files.readme.io/d863196-image.png" />

## Send Template message (Image)/Send Template message (Video)/Send Template message (Document)

* To send a message with an image/video/document few more steps are involved. If you want to send a template message and your **\*image/video/document** is present inside the CRM, you need to follow the below steps\
  1\. Read the image.\
  2\. Compose the image to base64.\
  3\. Create an Image URL for WhatsApp.\
  We have stored the Image in the notes of a contact/lead.

### Read Image

Here, I have stored the image in a note entity and used GUID to read it. This image can be read dynamically based on your requirements. Again, this image can be stored anywhere and needs to be in the expected forma

<Image align="center" className="border" border={true} src="https://files.readme.io/31ef6b1-image.png" />

# notes

* Just click on the lead module. It will display the 'Send WhatsApp Message' option below, and a plus icon symbol will be visibleol

<Image align="center" className="border" border={true} src="https://files.readme.io/a43934a-2024-06-06_16-47.png" />

### click on the notes

<Image align="center" className="border" border={true} src="https://files.readme.io/edb4a5a-2024-06-06_16-51.png" />

### upload the file

<Image align="center" className="border" border={true} src="https://files.readme.io/e8eca6e-2024-06-06_16-53.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/35d23c5-2024-06-06_16-54.png" />

### After uploading, see this page. It should show the date and file as well.

<Image align="center" className="border" border={true} src="https://files.readme.io/a4a6058-2024-06-06_16-55.png" />

* Afterward, navigate to the settings icon and click on 'Advanced Settings

<Image align="center" className="border" border={true} src="https://files.readme.io/a4fcc97-2024-06-06_17-02.png" />

click on that filter icon button

<Image align="center" className="border" border={true} src="https://files.readme.io/7892c43-2024-06-06_17-05.png" />

* "After that, open a new window, click on the arrow icon, and select 'Choose the Note'."

<Image align="center" className="border" border={true} src="https://files.readme.io/3d21244-2024-06-06_17-38.png" />

* Clicking on that result table will display notes filed inside, including documents, images, and videos that I added.

<Image align="center" className="border" border={true} src="https://files.readme.io/c62a22f-2024-06-06_17-42.png" />

* copy and paste it  value for notes

<Image align="center" className="border" border={true} src="https://files.readme.io/79e94d5-2024-06-06_17-46.png" />

* copy and paste selct coloum below **documentbody,filename**

<Image align="center" className="border" border={true} src="https://files.readme.io/25fe836-2024-06-06_17-51.png" />

### Compose Image

Need to compose the base64 image to the binary as expected by the WhatsApp image uploader request “base64toBinary” request can be used.

<Image align="center" className="border" border={true} src="https://files.readme.io/971c7c8-2024-06-06_17-53.png" />

## click on the compose text

<Image align="center" className="border" border={true} src="https://files.readme.io/711299a-2024-06-06_17-55.png" />

### Afterward, open the compose field, click on the input field marked "t," which will open a dynamic box on the left side. Then, click on "Expression," copy the value, and paste the following: base64ToBinary(outputs('Get\_a\_row\_by\_ID')?\['body/documentbody']). Finally, click the "OK" button.

<Image align="center" className="border" border={true} src="https://files.readme.io/5170b69-2024-06-06_18-00.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/c2d7e7c-image.png" />

<br />

Next, click on the "Add" button, then select the Gupshp logo and click on it to upload the file.

<Image align="center" className="border" border={true} src="https://files.readme.io/c06be13-2024-06-06_18-04.png" />

### Create an Image URL for WhatsApp

Upload the file to the WhatsApp server to generate the public url. You can use the below method “Upload Media File” method to generate the URL.

<Image align="center" className="border" border={true} src="https://files.readme.io/67b5a67-image.png" />

### Pass the URL to the Media template

While sending the message make sure to set the url generated from the “upload media file” request.

<Image align="center" className="border" border={true} src="https://files.readme.io/e890259-image.png" />

**Notes**:while reading a document/video/image from the CRM, you need to make sure that the template that has been selected is of the same type.  For example, if you have selected the template of type image make sure that you are reading the notes of image type only.\
So message may be sent successfully from PowerAutomate but it is not received at the user end.

**Direct link**

You can also send the media message with a public link.

Image: [https://i.natgeofe.com/n/726708f7-f79d-47a5-ba03-711449823607/01-balance-of-nature.jpg](https://i.natgeofe.com/n/726708f7-f79d-47a5-ba03-711449823607/01-balance-of-nature.jpg)\
Document: [https://ik.imagekit.io/mc4zdqvkb/native-integration/sample02\_HpJ-pZcfs.pdf](https://ik.imagekit.io/mc4zdqvkb/native-integration/sample02_HpJ-pZcfs.pdf)\
Video: [https://ik.imagekit.io/mc4zdqvkb/native-integration/file\_example\_MP4\_640\_3MG\_ygrU3Y81G.mp4](https://ik.imagekit.io/mc4zdqvkb/native-integration/file_example_MP4_640_3MG_ygrU3Y81G.mp4)

<Image align="center" className="border" border={true} src="https://files.readme.io/e664f65-image.png" />

<br />

### Send Automated message

You can send an automated message to client, for example, when a new lead/contact is created/updated.\
You can create the Power Automate in a solution as shown below.

<Image align="center" className="border" border={true} src="https://files.readme.io/4fb201b-image.png" />

Follow the same steps to add the template message as explained in the common steps.

<Image align="center" className="border" border={true} src="https://files.readme.io/182d90a-image.png" />

# Schedule PowerAutomate

You can schedule the message to send the message at a given specific time,\
You can create the Power Automate in a solution as shown below.

<Image align="center" className="border" border={true} src="https://files.readme.io/67dad43-image.png" />

After that click on schedule and provide the necessary information, as shown below, and click Create

![](https://files.readme.io/80931c5-image.png)

Provide the necessary information as shown below and done. You can refer to the common steps for the field information and link to the document

<Image align="center" className="border" border={true} src="https://files.readme.io/1975e7f-image.png" />

Limitations\
1\. If you are uninstalling the solution and encounter an error, make sure to delete all the connections/Power Automate created using this solutio