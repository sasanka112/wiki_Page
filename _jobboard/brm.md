---

layout: default
topic_title: BRM
order: 8
topic_description:  Billing Revenue Management
topic_more_description: BRM  is an application that can handle Recurring billing. BRM currently in production manages the recurring billing for Office 365 orders in US region. OCI publishes the Order information to BRM before Invoicing or with a CSB ( Create Subscription billing ) event from OMEGA.<br/>BRM also holds the responsibility to trigger invoicing requests on every Billing Day of Month to create an Invoice in OMEGA AR. OCI has exposed a webservice to BRM to trigger the Invoicing Request. BRM also holds responsibility to send latest customer identifiers so that OCI can pull the latest customer information from CMDM and synchronize it with OMEGA before billing or auto Invoice is triggered.<br/>BRM is also responsible for retriggering Re-Auth and Capture process incase of Authorization failure in ipayment. OCI has exposed a webservice for BRM to trigger the re-auth request. <br/>BRM also takes in a feed of latest invoice balance from OMEGA. the OCI's ( ODI module ) sends the latest invoice balance feed from OMEGA tables to BRM tables once in 30 mins.<br/>BRM is being extended to support warranty Orders for recurring billing in future state.


---