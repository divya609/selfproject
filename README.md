**Project Overview**
Welcome to the Property Selling Management Application on Salesforce! This project simplifies property selling processes through a robust application, enabling easy data input, dynamic record displays, and efficient search functionalities, all seamlessly integrated with Salesforce CRM. Leveraging custom objects, triggers, Lightning web components (LWC), and more, this application aims to enhance property management workflows.

**1. **Project Structure
Custom Objects 🛠️****

**Account Object (Considered as Property):**
Fields:

Property Name, Type (Picklist: 1BHK, 2BHK, etc.), Listing Date (Date), Address (Text), City (Text), State (Text), Property Value (Currency), Status (Picklist: Listed, Sold, Under Contract)

**Lead Object (Person interacting with business):**
**Fields:**

First Name (Text), Last Name (Text), Phone (Phone), Email (Email), Status (Picklist: Open, Contacted, Converted, Closed)

**Opportunity Object (Deal):
Fields:**

Opportunity Name (Text), Close Date (Date), Amount (Currency), Stage (Picklist: Prospecting, Qualification, Proposal, Closed Won, Closed Lost), Type (Picklist: New Business, Existing Business), Related Property (Lookup to Property/Account), Related Lead (Lookup to Lead)

**Agent Object (Custom):
Fields:**

Agent Name (Text), Contact Information (Phone/Email), Experience (Number), Specialization (Text), Related Property (Lookup to Property/Account)

**OpportunityDiscountLog (custom)
Fields:**
OpportunityId__c(text), ActionTaken__c (Text), DiscountPercentage__c (Number(5,2)), ActionDate__c (Date/Time)

**Project Implementation Highlights ✨**

**2. **Data** Model and Layouts**

Created a data model with custom objects and standard objects, with custom fields inside each object.
Designed compact layouts and page layouts for each object's record detail page.

**3. Triggers**

Implemented triggers on the Opportunity and Account object.
Trigger on Opportunity for Discount approval: Automates processes when an opportunity is created or updated.
Trigger on Account to assign agents : Populates Agents to Account(property) based on agent specialization and availability.

**4. Test Classes**

Developed test classes for triggers and Apex Controllers with 100% code coverage.
Created a Test Utility class containing methods to create test data for testing purposes.

**5. Lightning Web Components (LWC)**

The LoanCalculator LWC offers a quick and easy way for Salesforce users to calculate monthly payments on loans, including mortgages, auto, and personal loans. It provides dynamic, real-time calculations using principal amount, interest rate, and loan term inputs, all within the familiar Salesforce UI. This component is designed to enhance financial planning and decision-making directly within Salesforce, ensuring a seamless and integrated user experience.
