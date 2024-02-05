**Property Selling Client**Project Overview
Welcome to the Property Selling Management Application on Salesforce! This project streamlines property selling processes with a comprehensive application featuring easy data input, dynamic record displays, and efficient search functionalities for different records, ensuring seamless management of information using Salesforce CRM. The application includes custom objects, triggers, Lightning web components (LWC), and more to streamline property selling processes.

**1. Data Model:**

**Standard Objects:**
Account:

Fields: Account Name, Type, Billing Address, Shipping Address, Phone, Email.
Relationship: None.

**Contact (Person Account for Buyer):**

Fields: First Name, Last Name, Phone, Email, Mailing Address, Buyer Type, Budget, Preferred Property Type.
Relationship: Related to Account.

**Opportunity (Deal):**

Fields: Opportunity Name, Close Date, Amount, Stage, Type.
Relationship: Related to Account (Primary Contact will be the Buyer).

**Agent:**

Fields: Agent Name, Contact Information, Experience, Specialization.
Relationship: None.

**Custom Objects:
Property:**

Fields: Property Name, Type, Listing Date, Address, City, State, Property Value, Status.
Relationship: Master-Detail with Opportunity.

**Property Owner:**

Fields: Owner Name, Contact Information, Property Type (Resale/Direct from Builder), Relationship Type (Owner/Tenant).
Relationship: Master-Detail with Property.

**Project Implementation Highlights ✨**

**2. Data Model and Layouts**

Created a data model with custom and standard objects with custom fields inside each object.
Designed compact layouts and page layouts for each object's record detail page.


**3. **Data Import****

Utilized Salesforce Data Loader to import data into the Salesforce org.
Custom App and Page

Created a custom app using App Manager and designed a custom app page using Lightning App Builder.

**4. **Triggers****

Implemented triggers on the Property and Deal objects.
Trigger on Property: Automates processes when a property is listed or sold.
Trigger on Deal: Updates property and buyer information when a deal is closed.

**5. **Test Classes****

Developed test classes for triggers and Apex Controllers with 100% code coverage.
Created a Test Utility class containing methods to create test data for testing purposes.

**6. Lightning Web Components (LWC)**

Developed LWC components to display related Property and Buyer information on the Deal record detail page using lightning-record-form.
Developed LWC components to display and search Property, Buyer, Deal, and Agent records using lightning-datatable and Apex Controllers.

**7. Infinite Scrolling**

Implemented infinite scrolling to efficiently load and display all records using the enable-infinite-loading attribute of lightning-datatable.

**8. LWC Modal Components**

Created modal components for Property, Buyer, Deal, and Agent records using lightning-modal base component.
Enabled the Save button to save records efficiently using createRecord(recordInput) method from lightning/uiRecordApi.
Enabled the Cancel button to close the Modal component.


**Getting Started**
To set up and run the project locally, follow these steps:


Deploy the project to your Salesforce environment using your preferred deployment tool or Salesforce CLI.

____________________________________________________________________________________________________________________________________________________________________

**Project Screenshots**

Data Model for this Project 

![Capture](https://github.com/divya609/selfproject/assets/159016990/92101b38-cba0-48d8-aca8-2f547367fb7e)
