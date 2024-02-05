**Property Selling Client**Project Overview
Welcome to the Property Selling Management Application on Salesforce! This project streamlines property selling processes with a comprehensive application featuring easy data input, dynamic record displays, and efficient search functionalities for different records, ensuring seamless management of information using Salesforce CRM. The application includes custom objects, triggers, Lightning web components (LWC), and more to streamline property selling processes.

**Project Structure**
**1. Custom Objects 🛠️**
Property Object

Fields: Property Name, Type, Listing Date, Address, City, State, Property Value, Status.
Buyer Object

Fields: Buyer Name, Contact Information, Budget, Preferred Property Type.
Deal Object

Fields: Deal Name, Property, Buyer, Deal Date, Deal Amount, Status.
Agent Object

Fields: Agent Name, Contact Information, Experience, Specialization.
Project Implementation Highlights ✨

**2. Data Model and Layouts**

Created a data model with four objects (Property, Buyer, Deal, Agent) with custom fields inside each object.
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

Clone the repository: git clone https://github.com/yourusername/property-management.git
Deploy the project to your Salesforce environment using your preferred deployment tool or Salesforce CLI.
