// =====================================================================
//  SF ADMIN QUIZ — Question Bank (80 questions)
//  Random pick per session: 10 scenario, 5 coding, 5 MCQ
// =====================================================================

const ALL_QUESTIONS = {

  // ──────────────────────────────────────────────────────────────────
  //  SCENARIO / DESCRIPTIVE — 40 questions (10 randomly picked)
  // ──────────────────────────────────────────────────────────────────
  scenario: [
    {
      type: "scenario",
      category: "Security & Access",
      scenario: "A mid-sized retail company has 500 Salesforce users. Sales reps should only see records they own. Managers should see all records in their region. Regional VPs need a full view across all regions. Sensitive pricing fields must be hidden from reps but visible to managers.",
      question: "Design the complete security model for this organisation. Explain OWD settings, role hierarchy, sharing rules, and field-level security choices.",
      placeholder: "Describe OWD settings, role hierarchy levels, sharing rules, and FLS configuration..."
    },
    {
      type: "scenario",
      category: "Data Management",
      scenario: "Your company is migrating 2 million legacy CRM records into Salesforce. The data has duplicates, missing required fields, inconsistent phone formats, and relationships that must be preserved (Accounts → Contacts → Opportunities).",
      question: "Outline your complete data migration strategy, including tools, data cleansing steps, loading order, and post-migration validation.",
      placeholder: "Describe your migration plan step by step..."
    },
    {
      type: "scenario",
      category: "Automation",
      scenario: "When a new Lead is created with 'Web' as the Lead Source, the system must: auto-assign it to the Web Leads queue, send a welcome email to the lead, create a follow-up Task for the assigned user due in 2 business days, and notify the Sales Manager via Chatter.",
      question: "Which automation tools would you use and why? Walk through the complete configuration.",
      placeholder: "Describe the automation tools and configuration steps..."
    },
    {
      type: "scenario",
      category: "Reports & Dashboards",
      scenario: "The VP of Sales wants a real-time executive dashboard showing: pipeline by stage, top 10 reps by closed revenue this quarter, win rate vs last quarter, and average deal size by product. The dashboard must refresh every hour and be accessible on mobile.",
      question: "Describe how you would build this dashboard. Include report types, groupings, chart choices, and any limitations to address.",
      placeholder: "Describe your report and dashboard configuration..."
    },
    {
      type: "scenario",
      category: "Service Cloud",
      scenario: "A support team receives 1,000 cases daily via email, web form, and phone. Cases must be auto-routed to specialised queues based on product type. High-priority customers (marked in Account record) must get SLA response within 2 hours. Agents need a 360-degree customer view.",
      question: "Design the complete Service Cloud setup to handle this. Cover case assignment, escalation rules, entitlements, and the agent console layout.",
      placeholder: "Describe your Service Cloud configuration..."
    },
    {
      type: "scenario",
      category: "Sales Cloud",
      scenario: "Your sales team wants to shorten the sales cycle by standardising the opportunity management process. Different product lines follow different stages with specific required fields at each stage. Managers want a warning before a deal moves backward in the pipeline.",
      question: "How would you implement this using Sales Processes, Opportunity Stages, Validation Rules, and Path? Explain each configuration decision.",
      placeholder: "Describe your Sales Cloud configuration..."
    },
    {
      type: "scenario",
      category: "Integration",
      scenario: "Your company's ERP system needs to sync invoice data to Salesforce every night. When an invoice is marked 'Paid' in the ERP, the related Opportunity in Salesforce must update to 'Closed Won'. Real-time sync is needed for high-value deals over $50,000.",
      question: "Design the integration architecture. Explain whether you'd use REST API, Bulk API, or middleware, and how you'd handle errors and failures.",
      placeholder: "Describe your integration design and error handling approach..."
    },
    {
      type: "scenario",
      category: "Change Management",
      scenario: "Your organisation is upgrading from Classic to Lightning Experience. 200 users are involved. Some are resistant. Custom Visualforce pages need to be assessed. Training must be rolled out across three time zones.",
      question: "Develop a Lightning migration plan covering assessment, phased rollout, user training, and measuring adoption success.",
      placeholder: "Describe your migration and change management strategy..."
    },
    {
      type: "scenario",
      category: "AppExchange & Managed Packages",
      scenario: "Your admin team wants to install a managed package from AppExchange for contract management. The package requires custom permissions, touches existing Account and Opportunity objects, and must not disrupt current workflows.",
      question: "Walk through the evaluation, installation, and post-installation configuration steps you would take. What risks would you assess?",
      placeholder: "Describe your AppExchange package evaluation and deployment process..."
    },
    {
      type: "scenario",
      category: "Validation & Data Quality",
      scenario: "Sales reps are entering bad data — incorrect phone formats, empty industry fields on Accounts, and Opportunity close dates being set in the past. The data quality issues are causing CRM reporting inaccuracies.",
      question: "Design a complete data quality strategy using validation rules, duplicate rules, matching rules, and any other Salesforce-native features.",
      placeholder: "Describe your validation rules and data quality configuration..."
    },
    {
      type: "scenario",
      category: "Community / Experience Cloud",
      scenario: "A company wants to build a partner portal where channel partners can register deals, check their pipeline, submit support cases, and access marketing materials. Partners must only see their own data.",
      question: "Design the Experience Cloud implementation. Cover the template choice, sharing settings for external users, and key components to configure.",
      placeholder: "Describe your Experience Cloud portal design..."
    },
    {
      type: "scenario",
      category: "CPQ",
      scenario: "Your company sells bundled software + implementation services. Pricing has volume discounts, partner discounts (up to 20%), and special pricing that requires VP approval. Quotes must generate a branded PDF proposal automatically.",
      question: "Describe how you would configure Salesforce CPQ to handle this. Cover product bundles, price rules, approval workflows, and quote templates.",
      placeholder: "Describe your CPQ configuration approach..."
    },
    {
      type: "scenario",
      category: "Flows",
      scenario: "When a Contact's email is updated, you need to: check if the same email exists on another Contact, if duplicate found — flag the record and notify the Account owner, if no duplicate — sync the email change to the related Lead records, and log the change to a custom audit object.",
      question: "Build this logic using Flow. Describe each element you would use and how you'd handle the branching logic.",
      placeholder: "Describe your Flow design step by step..."
    },
    {
      type: "scenario",
      category: "Territory Management",
      scenario: "A company is reorganising its sales territories from region-based to industry-based. 10,000 Account records need to be reassigned. Sales reps must only see accounts in their assigned territory. Territory changes happen quarterly.",
      question: "Explain how you'd configure Enterprise Territory Management to handle this scenario and manage ongoing territory changes.",
      placeholder: "Describe your Territory Management setup..."
    },
    {
      type: "scenario",
      category: "Mobile & Offline",
      scenario: "Field service reps work in areas with no internet connectivity. They need to access customer account details, log service activities, capture signatures, and sync data when they return to connectivity.",
      question: "How would you configure Salesforce Mobile App with offline capabilities for this team? What are the limitations they need to know about?",
      placeholder: "Describe your mobile and offline configuration approach..."
    },
    {
      type: "scenario",
      category: "Forecasting",
      scenario: "The CFO wants to see a 90-day rolling revenue forecast broken down by product family, rep, and region. The sales team uses a combination of committed and pipeline deals. Forecast categories need to map to the company's finance definitions.",
      question: "Configure Collaborative Forecasting to meet these requirements. How would you map stages to forecast categories and set up hierarchy-based forecasting?",
      placeholder: "Describe your forecasting configuration..."
    },
    {
      type: "scenario",
      category: "Duplicate Management",
      scenario: "After a tradeshow, the marketing team imported 5,000 new Leads. Now the system has thousands of duplicates across Leads and Contacts. Going forward, reps must be warned before creating a duplicate and prevented from creating exact duplicates.",
      question: "Describe how you'd use Duplicate Rules and Matching Rules to handle both the existing duplicates and prevent future ones.",
      placeholder: "Describe your duplicate management strategy..."
    },
    {
      type: "scenario",
      category: "Approval Processes",
      scenario: "Opportunities over $100,000 require a 3-level approval: direct manager → regional VP → Finance. If any approver rejects, the opportunity must revert to the previous stage. Approvers must be able to approve via email and mobile.",
      question: "Design the Approval Process configuration. Cover entry criteria, approval steps, actions on approval/rejection, and how you'd handle delegation.",
      placeholder: "Describe your Approval Process design..."
    },
    {
      type: "scenario",
      category: "Einstein Analytics",
      scenario: "A retail company wants to use Einstein Analytics to predict which Accounts are at risk of churning in the next 30 days. They have 3 years of historical data including purchase history, support case volume, and engagement scores.",
      question: "How would you configure Einstein Analytics for this churn prediction use case? What datasets, recipes, and dashboards would you build?",
      placeholder: "Describe your Einstein Analytics approach..."
    },
    {
      type: "scenario",
      category: "Profiles & Permission Sets",
      scenario: "Your org has grown from 50 to 500 users across 8 departments. The current setup uses 15 profiles with inconsistent permissions. Users frequently request access that doesn't fit their profile. Provisioning is slow and error-prone.",
      question: "Redesign the permission model. How would you rationalise profiles, introduce permission sets, and use permission set groups? What's your governance process?",
      placeholder: "Describe your profiles and permission sets redesign..."
    },
    {
      type: "scenario",
      category: "Sandbox Strategy",
      scenario: "Your team has 3 developers, 2 QA engineers, and 1 UAT team. They need isolated environments to build, test, and validate before production. You have a Developer Edition, two Developer Pro sandboxes, one Partial sandbox, and one Full sandbox available.",
      question: "Define the sandbox strategy and deployment pipeline. How do you manage data, metadata, and environment promotion across these sandboxes?",
      placeholder: "Describe your sandbox strategy and deployment approach..."
    },
    {
      type: "scenario",
      category: "Omni-Channel",
      scenario: "A bank's contact centre handles 500 concurrent agents. Work items arrive from chat, email, social media, and phone. Agents have different skill sets and capacity. VIP customers must always get priority routing and senior agents.",
      question: "Configure Omni-Channel to handle this scenario. Cover queues, routing configurations, skills-based routing, and capacity management.",
      placeholder: "Describe your Omni-Channel configuration..."
    },
    {
      type: "scenario",
      category: "Process Builder → Flow Migration",
      scenario: "Your org has 40 active Process Builder processes built over 5 years. Salesforce is retiring Process Builder. Some processes are complex with multiple criteria nodes and immediate/scheduled actions.",
      question: "Create a migration strategy to move all Process Builder processes to Flow. How do you assess complexity, prioritise, test, and handle rollback?",
      placeholder: "Describe your Process Builder to Flow migration strategy..."
    },
    {
      type: "scenario",
      category: "Custom Objects & Relationships",
      scenario: "A training company needs to track: Courses, Batches (multiple per Course), Enrolments (students in each batch), and Certificates (issued on completion). Each relationship has different visibility and deletion behaviour requirements.",
      question: "Design the custom object model. Justify each relationship type (master-detail vs lookup), explain the impact on sharing and roll-up summaries, and describe any junction objects needed.",
      placeholder: "Describe your data model design..."
    },
    {
      type: "scenario",
      category: "Marketing Cloud Connect",
      scenario: "Your company uses Salesforce CRM and Marketing Cloud. The marketing team wants to sync Leads and Contacts to Marketing Cloud, run targeted email campaigns, and push engagement data back to CRM so sales reps can see email open and click history on the record.",
      question: "Describe the Marketing Cloud Connect setup. Cover the sync configuration, data extensions, tracking, and how engagement data flows back to CRM.",
      placeholder: "Describe your Marketing Cloud Connect setup..."
    },
    {
      type: "scenario",
      category: "Record Types",
      scenario: "A healthcare company uses the Account object for both Hospitals and Individual Patients. Hospitals have different fields, picklist values, and page layouts than Patients. The sales process is also different for each.",
      question: "How would you use Record Types to support this? Cover the configuration, profile assignment, page layout assignment, and any business process differences.",
      placeholder: "Describe your Record Types configuration..."
    },
    {
      type: "scenario",
      category: "Queues & Assignment Rules",
      scenario: "An insurance company has 5 regional support teams. Cases submitted from the website must be auto-assigned based on the customer's state, product type, and case priority. If no rule matches, cases go to a default queue. Queue members must be notified.",
      question: "Configure case assignment rules and queues for this scenario. How do you handle rule priority, default assignment, and notifications?",
      placeholder: "Describe your queues and assignment rules configuration..."
    },
    {
      type: "scenario",
      category: "Health Cloud",
      scenario: "A hospital network wants to implement Salesforce Health Cloud to manage patient relationships, care plans, and referrals. The system must comply with HIPAA. Care coordinators need a 360-degree view of each patient across multiple providers.",
      question: "Outline the Health Cloud implementation approach. Cover the data model, consent management, HIPAA compliance configuration, and care plan setup.",
      placeholder: "Describe your Health Cloud implementation approach..."
    },
    {
      type: "scenario",
      category: "Flow — Scheduled Automation",
      scenario: "Every Monday at 8 AM, the system must find all open Opportunities with a Close Date that is more than 30 days old and no activity in the last 14 days. It should send an alert to the Opportunity owner's manager and flag the record as 'Stale'.",
      question: "Build this using a Scheduled Flow. Describe every element — how you filter records, check activity, send the alert, and update the field.",
      placeholder: "Describe your Scheduled Flow design..."
    },
    {
      type: "scenario",
      category: "Knowledge Management",
      scenario: "A tech company's support team handles 800 tickets/day. 60% are repeat questions. Agents spend 40% of their time searching for answers. Management wants to implement Salesforce Knowledge to reduce handle time and enable customer self-service.",
      question: "Design the Knowledge implementation. Cover article types, data categories, lifecycle (draft → review → publish), channel visibility, and the agent console integration.",
      placeholder: "Describe your Salesforce Knowledge design..."
    },
    {
      type: "scenario",
      category: "Field Service Lightning",
      scenario: "A telecom company has 200 field technicians who install and repair equipment at customer sites. Jobs require specific skills, tools, and parts. Scheduling must consider technician location, skills, and availability. Customers need real-time ETAs.",
      question: "Configure Field Service Lightning for this scenario. Cover work orders, service territories, resource skills, scheduling optimisation, and the mobile app setup.",
      placeholder: "Describe your Field Service Lightning configuration..."
    },
    {
      type: "scenario",
      category: "Change Sets & Deployment",
      scenario: "Your team made 80 configuration changes in a sandbox: custom fields, validation rules, flows, page layouts, and a new custom object with 3 related objects. You need to deploy to production with minimal downtime during business hours.",
      question: "Plan the deployment. How do you organise change sets, handle dependencies, manage deployment order, and validate before going live?",
      placeholder: "Describe your deployment plan and risk mitigation..."
    },
    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "Your org is hitting SOQL query limits (100 queries per transaction) and DML limits (150 statements per transaction). This is causing failures in bulk operations. An Apex trigger on Account is the primary culprit.",
      question: "Diagnose and fix the governor limit issues. Explain bulkification, how to refactor the trigger, and best practices to prevent future limit breaches.",
      placeholder: "Describe your approach to diagnosing and fixing governor limit issues..."
    },
    {
      type: "scenario",
      category: "Entitlements & Milestones",
      scenario: "A SaaS company offers three support tiers: Basic (24hr response), Professional (4hr response), and Enterprise (1hr response + dedicated rep). Each tier has different escalation paths. SLA breaches must trigger automatic escalation and management notification.",
      question: "Configure Entitlements, Service Contracts, and Milestones to enforce these SLAs. How do you handle milestone violations and escalation actions?",
      placeholder: "Describe your Entitlements and Milestone configuration..."
    },
    {
      type: "scenario",
      category: "Role Hierarchy & Sharing",
      scenario: "A financial services firm has Advisors who own client accounts, Team Leaders who manage groups of advisors, and Branch Managers who oversee multiple teams. Advisors must never see each other's clients. Team Leaders see all their team's clients. Compliance officers need read access to all records.",
      question: "Design the role hierarchy, OWD settings, and any required sharing mechanisms. How do you give Compliance officers access without making records public?",
      placeholder: "Describe your security and sharing model..."
    },
    {
      type: "scenario",
      category: "Chatter & Collaboration",
      scenario: "Your company wants to use Chatter to improve internal collaboration. Sales reps need deal-specific group chats, service agents need case collaboration, and the executive team wants a private strategy channel. External partners need limited Chatter access.",
      question: "Design the Chatter rollout. Cover group types (public, private, broadcast), Chatter for external users, moderation policies, and integration with case and opportunity records.",
      placeholder: "Describe your Chatter collaboration design..."
    },
    {
      type: "scenario",
      category: "Custom Metadata Types",
      scenario: "Your org has configuration values (tax rates, discount thresholds, API endpoints, feature flags) currently hardcoded in Apex. These values change quarterly and require a code deployment each time. The business wants admins to update them without developer involvement.",
      question: "Migrate these values to Custom Metadata Types. How does this differ from Custom Settings? How do you query them in Apex and deploy them as metadata?",
      placeholder: "Describe your Custom Metadata Types design and migration approach..."
    },
    {
      type: "scenario",
      category: "Event-Driven Architecture",
      scenario: "Multiple external systems need to be notified when a contract is signed in Salesforce. The signing event must trigger actions in an ERP, a document management system, and a billing platform. The architecture must handle failures gracefully and support retry.",
      question: "Design an event-driven architecture using Platform Events. How do you publish, subscribe, handle failures, and ensure at-least-once delivery?",
      placeholder: "Describe your Platform Events architecture..."
    },
    {
      type: "scenario",
      category: "Multi-Currency",
      scenario: "Your org needs to support 12 currencies across 20 countries. Sales reps enter opportunities in local currencies. Reports and dashboards must show all amounts in USD. Historical exchange rates must be preserved on closed deals.",
      question: "Configure Advanced Currency Management. How do you enable multi-currency, manage exchange rates, handle dated exchange rates, and set up currency reporting?",
      placeholder: "Describe your multi-currency configuration..."
    },
    {
      type: "scenario",
      category: "GDPR & Data Privacy",
      scenario: "Your Salesforce org contains personal data for EU citizens. You must comply with GDPR: individuals have the right to access, correct, and delete their data. Consent must be tracked. Data retention limits must be enforced.",
      question: "Implement a GDPR compliance framework in Salesforce. Cover data privacy records, consent tracking, individual rights requests, and automated data deletion.",
      placeholder: "Describe your GDPR compliance implementation..."
    }
  ],

  // ──────────────────────────────────────────────────────────────────
  //  LIVE CODING — 20 questions (5 randomly picked)
  // ──────────────────────────────────────────────────────────────────
  coding: [
    {
      type: "coding",
      category: "Apex — Triggers",
      scenario: "When an Opportunity is updated to 'Closed Won', automatically create a follow-up Task assigned to the Opportunity Owner due 7 days from today with Subject 'Post-Sale Follow-Up'.",
      question: "Write an Apex trigger on the Opportunity object to implement this requirement.",
      language: "Apex",
      placeholder: "trigger OpportunityTrigger on Opportunity (after update) {\n  // your code here\n}",
      codeHint: "Use a trigger on Opportunity (after update). Filter for stage change to 'Closed Won'. Insert Task records in bulk."
    },
    {
      type: "coding",
      category: "SOQL",
      scenario: "You need to report on all Accounts in the 'Technology' industry that have at least one open Opportunity with an Amount greater than $50,000. Include the Account Name, the Opportunity Name, Stage, and Amount in the results.",
      question: "Write a SOQL query to retrieve this data efficiently using a relationship query.",
      language: "SOQL",
      placeholder: "SELECT ...\nFROM ...\nWHERE ...",
      codeHint: "Use a parent-to-child subquery or child-to-parent relationship. Filter on Industry and use a subquery for Opportunities."
    },
    {
      type: "coding",
      category: "Apex — Batch",
      scenario: "You need to batch-process all Contacts who haven't had any activity (Tasks or Events) in the last 180 days and set a custom field 'Dormant__c' to true.",
      question: "Write a Batch Apex class that identifies and updates these dormant Contacts.",
      language: "Apex",
      placeholder: "global class DormantContactBatch implements Database.Batchable<sObject> {\n  // your code here\n}",
      codeHint: "Implement Database.Batchable<sObject>. Use ActivityDate in SOQL or query Tasks/Events separately. Process in start(), execute(), finish()."
    },
    {
      type: "coding",
      category: "LWC — Component",
      scenario: "Create a Lightning Web Component that displays a list of Accounts fetched from Apex. Each account shows Name, Industry, and Annual Revenue. Users can click a row to navigate to that Account record.",
      question: "Write the LWC HTML template and JavaScript controller for this component.",
      language: "LWC (JS)",
      placeholder: "// accountList.js\nimport { LightningElement, wire } from 'lwc';\n// your code here",
      codeHint: "Use @wire with getAccountList Apex method. Use NavigationMixin for record navigation. Iterate accounts with for:each in template."
    },
    {
      type: "coding",
      category: "Apex — REST API",
      scenario: "Build a custom REST API endpoint in Salesforce that accepts a POST request with a JSON body containing { 'accountName': '...', 'industry': '...' } and creates a new Account record, returning the new Account Id and Name.",
      question: "Write the Apex REST Resource class to implement this endpoint.",
      language: "Apex",
      placeholder: "@RestResource(urlMapping='/account/create')\nglobal class AccountCreateResource {\n  // your code here\n}",
      codeHint: "Use @RestResource and @HttpPost annotations. Parse RestRequest body. Return a wrapper class with accountId and name."
    },
    {
      type: "coding",
      category: "SOSL",
      scenario: "A user types a search term in a global search box. The app must search across Contact Name, Account Name, and Lead Company Name simultaneously and return up to 10 results from each object.",
      question: "Write a SOSL statement to implement this multi-object search.",
      language: "SOSL",
      placeholder: "FIND {searchTerm}\nIN ALL FIELDS\nRETURNING ...",
      codeHint: "Use FIND with RETURNING clause for Contact, Account, Lead. Specify field names to return. Use LIMIT on each object."
    },
    {
      type: "coding",
      category: "Apex — Queueable",
      scenario: "After a Case is closed, you need to call an external REST API (e.g., a ticketing system) to mark the ticket as resolved. This should be asynchronous to avoid slowing down the user's save action.",
      question: "Write a Queueable Apex class that makes the callout after Case closure.",
      language: "Apex",
      placeholder: "public class TicketCloseQueueable implements Queueable, Database.AllowsCallouts {\n  // your code here\n}",
      codeHint: "Implement Queueable and Database.AllowsCallouts. Use Http and HttpRequest for the callout. Enqueue from a trigger or flow."
    },
    {
      type: "coding",
      category: "LWC — Form",
      scenario: "Build an LWC form that lets users enter a Lead's First Name, Last Name, Email, and Company. On submit, validate that all fields are filled, then call an Apex method to insert the Lead and display a success toast.",
      question: "Write the LWC HTML and JavaScript for this lead capture form.",
      language: "LWC (JS)",
      placeholder: "// leadForm.js\nimport { LightningElement } from 'lwc';\nimport createLead from '@salesforce/apex/LeadController.createLead';\n// your code here",
      codeHint: "Use lightning-input components. Validate with reportValidity(). Call Apex imperatively. Show toast with ShowToastEvent."
    },
    {
      type: "coding",
      category: "Apex — Trigger Handler",
      scenario: "Create a trigger handler class for the Account object. When an Account's Phone field is updated, log the old and new phone numbers to a custom object called 'Field_Change_Log__c' with fields: Object_Name__c, Record_Id__c, Field_Name__c, Old_Value__c, New_Value__c.",
      question: "Write the Apex trigger and trigger handler class for this requirement.",
      language: "Apex",
      placeholder: "// AccountTriggerHandler.cls\npublic class AccountTriggerHandler {\n  // your code here\n}",
      codeHint: "Separate trigger logic into a handler class. Use Trigger.oldMap and Trigger.newMap. Bulk-insert Field_Change_Log__c records."
    },
    {
      type: "coding",
      category: "SOQL — Aggregate",
      scenario: "The finance team needs a report showing total closed-won revenue per Account for the current fiscal year, but only for Accounts with total revenue over $500,000. Results should be ordered by total revenue descending.",
      question: "Write the SOQL aggregate query to produce this data.",
      language: "SOQL",
      placeholder: "SELECT AccountId, Account.Name, SUM(Amount) totalRevenue\nFROM Opportunity\nWHERE ...\nGROUP BY ...\nHAVING ...",
      codeHint: "Use SUM(Amount) with GROUP BY AccountId, Account.Name. Filter on StageName and fiscal year. Use HAVING SUM(Amount) > 500000."
    },
    {
      type: "coding",
      category: "Apex — Scheduled",
      scenario: "Create a Scheduled Apex class that runs every day at midnight. It should find all Leads that were created more than 90 days ago with Status = 'New' and update their Status to 'Unqualified'.",
      question: "Write the Schedulable Apex class for this automated cleanup job.",
      language: "Apex",
      placeholder: "global class StaleLeadScheduler implements Schedulable {\n  // your code here\n}",
      codeHint: "Implement Schedulable interface. Query leads with SOQL. Delegate bulk update to a Batchable class for large datasets."
    },
    {
      type: "coding",
      category: "LWC — Wire Adapter",
      scenario: "Build a component that shows the current user's recent Opportunities. Use the getRecord wire adapter to display the user's name at the top and use a custom Apex method to fetch their 5 most recent Opportunities.",
      question: "Write the LWC JavaScript that wires getRecord for user info and calls Apex for opportunities.",
      language: "LWC (JS)",
      placeholder: "import { LightningElement, wire } from 'lwc';\nimport { getRecord } from 'lightning/uiRecordApi';\nimport userId from '@salesforce/user/Id';\n// your code here",
      codeHint: "Use @wire(getRecord) with userId and NAME field. Use @wire or imperative Apex call for opportunities. Handle loading and error states."
    },
    {
      type: "coding",
      category: "Apex — Future Method",
      scenario: "When a new Contact is inserted, you need to call an external email verification API to validate the email address. The result (Valid/Invalid) should be written back to a custom field Email_Status__c on the Contact.",
      question: "Write the Apex @future method that makes the callout and updates the Contact.",
      language: "Apex",
      placeholder: "public class EmailVerificationService {\n  @future(callout=true)\n  public static void verifyEmail(Id contactId, String email) {\n    // your code here\n  }\n}",
      codeHint: "Use @future(callout=true). Make Http callout with the email. Parse the JSON response. Update the Contact record with the result."
    },
    {
      type: "coding",
      category: "SOQL — Parent-Child",
      scenario: "You need to display each Account with all its open Cases on a custom page. Include Account Name, Account Rating, Case Number, Case Subject, and Case Status for cases that are not 'Closed'.",
      question: "Write a SOQL query using a parent-to-child subquery to retrieve this data.",
      language: "SOQL",
      placeholder: "SELECT Name, Rating,\n  (SELECT CaseNumber, Subject, Status FROM Cases WHERE ...)\nFROM Account\nWHERE ...",
      codeHint: "Use a subquery in the SELECT clause using the child relationship name 'Cases'. Filter the subquery on Status != 'Closed'."
    },
    {
      type: "coding",
      category: "LWC — Custom Event",
      scenario: "Build a parent-child LWC pair. The child component has a 'Mark Complete' button. When clicked, it fires a custom event to the parent. The parent listens to the event and updates a 'completedCount' property displayed in its template.",
      question: "Write both the child (taskItem.js/html) and parent (taskList.js/html) components.",
      language: "LWC (JS)",
      placeholder: "// taskItem.js - child component\nimport { LightningElement } from 'lwc';\n// your code here\n\n// taskList.js - parent component\nimport { LightningElement } from 'lwc';\n// your code here",
      codeHint: "Use CustomEvent in child with bubbles:true. Use template event handler (ontaskcomplete) in parent. Update tracked property in parent handler."
    },
    {
      type: "coding",
      category: "Apex — Test Class",
      scenario: "Write a test class for the following scenario: An Apex trigger on Account updates a custom field 'Total_Contacts__c' with the count of related active Contacts whenever a Contact is inserted, updated, or deleted.",
      question: "Write a complete test class with test data setup, insert, update, and delete test methods achieving 100% code coverage.",
      language: "Apex",
      placeholder: "@isTest\npublic class AccountContactCountTest {\n  @TestSetup\n  static void setup() {\n    // your code here\n  }\n}",
      codeHint: "Use @TestSetup for data creation. Write separate test methods for insert, update, delete. Use System.assertEquals to validate counts."
    },
    {
      type: "coding",
      category: "Apex — Custom Exception",
      scenario: "Build a service class that validates Opportunity data before insertion. If Amount is negative or CloseDate is in the past, throw a custom exception. The calling code should catch this exception and add a page-level error.",
      question: "Write the custom exception class, the validation service, and example calling code that handles the exception.",
      language: "Apex",
      placeholder: "// OpportunityValidationException.cls\npublic class OpportunityValidationException extends Exception {}\n\n// OpportunityValidationService.cls\npublic class OpportunityValidationService {\n  // your code here\n}",
      codeHint: "Extend Exception for the custom class. Throw in the service with a descriptive message. Catch in the controller and use ApexPages.addMessage."
    },
    {
      type: "coding",
      category: "SOQL — Dynamic",
      scenario: "Build a dynamic SOQL method that takes an object API name, a list of field API names, a WHERE clause string, and a LIMIT integer. It should construct and execute the query safely and return a list of sObjects.",
      question: "Write the Apex method that constructs and executes a dynamic SOQL query with these parameters.",
      language: "Apex",
      placeholder: "public class DynamicQueryUtil {\n  public static List<sObject> query(\n    String objectName,\n    List<String> fields,\n    String whereClause,\n    Integer limitCount\n  ) {\n    // your code here\n  }\n}",
      codeHint: "Use String.join for fields. Build the SOQL string. Use Database.query() to execute. Validate inputs to prevent SOQL injection."
    },
    {
      type: "coding",
      category: "LWC — Lightning Data Service",
      scenario: "Create an LWC that uses the lightning-record-form component to display and edit an Account record. Show fields: Name, Phone, Industry, AnnualRevenue, Description. On save success, show a toast. On cancel, revert to view mode.",
      question: "Write the complete LWC HTML template with lightning-record-form configured for edit mode.",
      language: "LWC (HTML)",
      placeholder: "<!-- accountEditor.html -->\n<template>\n  <!-- your code here -->\n</template>",
      codeHint: "Use lightning-record-form with record-id, object-api-name, and fields array. Handle onsuccess with ShowToastEvent. Handle oncancel to reset mode."
    },
    {
      type: "coding",
      category: "Apex — Platform Events",
      scenario: "When an Opportunity is updated to 'Closed Won', publish a Platform Event 'Deal_Closed__e' with fields: AccountId__c, OpportunityId__c, Amount__c, and CloseDate__c. Write the subscriber trigger that listens and creates a Congratulations Task for the owner.",
      question: "Write both the publisher code (in a trigger) and the subscriber trigger for the Platform Event.",
      language: "Apex",
      placeholder: "// Publisher - in OpportunityTrigger\n// Publish Deal_Closed__e event\n\n// Subscriber - DealClosedEventTrigger\ntrigger DealClosedEventTrigger on Deal_Closed__e (after insert) {\n  // your code here\n}",
      codeHint: "Use EventBus.publish() for the event. In the subscriber trigger, access event fields via Trigger.new. Bulkify the Task insert."
    }
  ],

  // ──────────────────────────────────────────────────────────────────
  //  MCQ — 20 questions (5 randomly picked)
  // ──────────────────────────────────────────────────────────────────
  mcq: [
    {
      type: "mcq",
      category: "Security",
      scenario: "An org has OWD set to Private for Opportunities. A Sales Rep creates an Opportunity. The Rep's Manager is directly above them in the Role Hierarchy.",
      question: "Can the Manager see the Rep's Opportunity without any sharing rule?",
      options: ["No, OWD Private blocks all access", "Yes, Role Hierarchy grants access upward", "Only if a manual share is created", "Only if the Manager is also the Record Owner"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Deployment",
      scenario: "An admin made configuration changes in a sandbox and needs to deploy them to production. The changes include custom fields, page layouts, and a Flow.",
      question: "What is the recommended deployment method for this?",
      options: ["Manually recreate changes in production", "Use Change Sets", "Use Data Loader to transfer metadata", "Export/import using Workbench"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Apex — Concepts",
      scenario: "A developer needs to run a complex data processing job that involves updating 1 million records without hitting governor limits.",
      question: "Which Apex feature is designed for this use case?",
      options: ["@future methods", "Queueable Apex", "Batch Apex", "Platform Events"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Flows",
      scenario: "A Flow needs to look up an Account record, and if it doesn't exist, create a new one, otherwise update the existing record — all in one Flow.",
      question: "Which Flow elements would handle this logic?",
      options: [
        "Get Records → Decision → Create Records or Update Records",
        "Loop → Assignment → Create Records",
        "Subflow → Get Records → Update Records",
        "Assignment → Get Records → Create Records"
      ],
      answer: 0
    },
    {
      type: "mcq",
      category: "Salesforce Platform",
      scenario: "A company needs to store 500GB of files (PDFs, images) uploaded by customers through an Experience Cloud portal.",
      question: "Which Salesforce storage option is most cost-effective for large binary files?",
      options: ["Salesforce Files storage", "Chatter Files", "Salesforce CRM Content", "Files stored as Attachments on records"],
      answer: 0
    },
    {
      type: "mcq",
      category: "Reports & Dashboards",
      scenario: "A dashboard component must always show data as of the last time the dashboard was refreshed, regardless of who is viewing it.",
      question: "Which dashboard running user setting achieves this?",
      options: ["Run as logged-in user", "Run as specified user", "Run as dashboard owner", "Dynamic Dashboard"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Data Quality",
      scenario: "The admin wants to prevent users from creating a new Contact if another Contact with the same email address already exists in the system. A hard block is required.",
      question: "Which Salesforce feature achieves the hard block?",
      options: ["Matching Rule only", "Matching Rule + Duplicate Rule set to Block", "Validation Rule checking for duplicate email", "Duplicate Rule with Alert action only"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Integration",
      scenario: "An external application needs to query Salesforce data in real time and handle responses of up to 100,000 records efficiently.",
      question: "Which Salesforce API is most appropriate?",
      options: ["SOAP API", "REST API", "Bulk API 2.0", "Streaming API"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Communities / Experience Cloud",
      scenario: "External partner users in an Experience Cloud site should only see Account records that belong to their own company.",
      question: "Which feature controls this access for external users?",
      options: ["Role Hierarchy", "Account-based Sharing in Partner Communities", "OWD set to Public", "Permission Sets for External Users"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Change Data Capture",
      scenario: "A third-party system needs to be notified in near-real-time whenever a Contact record in Salesforce is updated, deleted, or undeleted — without polling.",
      question: "Which Salesforce feature enables this?",
      options: ["Outbound Messages", "Platform Events", "Change Data Capture", "Streaming API PushTopics"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Einstein Features",
      scenario: "A sales manager wants Salesforce to automatically predict whether each open Opportunity is likely to close this quarter based on historical data.",
      question: "Which Einstein feature provides this capability out of the box?",
      options: ["Einstein Activity Capture", "Einstein Opportunity Scoring", "Einstein Lead Scoring", "Einstein Analytics Predictions"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Sandboxes",
      scenario: "A developer needs an environment to build and test new Apex code with a small subset of production data (up to 10GB). The sandbox must be refreshable monthly.",
      question: "Which sandbox type is the right fit?",
      options: ["Developer Sandbox", "Developer Pro Sandbox", "Partial Copy Sandbox", "Full Sandbox"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Validation Rules",
      scenario: "An admin wants to prevent Opportunities from being saved if the Close Date is set to a date in the past AND the Stage is not 'Closed Won' or 'Closed Lost'.",
      question: "Which formula correctly implements this validation?",
      options: [
        "CloseDate < TODAY() && ISPICKVAL(StageName, 'Closed Won')",
        "CloseDate < TODAY() && NOT(ISPICKVAL(StageName,'Closed Won') || ISPICKVAL(StageName,'Closed Lost'))",
        "CloseDate < TODAY() || ISPICKVAL(StageName, 'Closed Lost')",
        "NOT(CloseDate > TODAY()) && StageName != 'Closed Won'"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "Object Relationships",
      scenario: "An admin needs to create a relationship where deleting the parent record also deletes all child records, and roll-up summary fields are required on the parent.",
      question: "Which relationship type should be used?",
      options: ["Lookup Relationship", "Master-Detail Relationship", "Many-to-Many (Junction Object)", "External Lookup"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Apex — Governor Limits",
      scenario: "A trigger on the Contact object queries the Account object inside a for loop iterating over Trigger.new records. The org has 200 contacts updated in one batch.",
      question: "What is the problem with this code?",
      options: [
        "SOQL queries are not allowed in triggers",
        "It violates the 100 SOQL queries per transaction governor limit",
        "Trigger.new cannot be iterated in a for loop",
        "Contacts cannot query Accounts in Apex"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "Flow Types",
      scenario: "A business requirement states: 'When a new Case is created via API or record insert (not by user), automatically assign it to the correct queue based on Case Type.'",
      question: "Which Flow type best meets this requirement?",
      options: ["Screen Flow", "Schedule-Triggered Flow", "Record-Triggered Flow", "Platform Event-Triggered Flow"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Data Loader",
      scenario: "An admin needs to import 500,000 Account records from a CSV file. The operation must handle partial successes and failures must be logged for review.",
      question: "Which tool and setting is most appropriate?",
      options: [
        "Data Import Wizard with standard settings",
        "Data Loader with Insert and success/error log files",
        "Workbench Bulk API with synchronous mode",
        "SOQL-based insert from Developer Console"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "Process Automation",
      scenario: "A Salesforce admin needs to update a field on a parent Account whenever any of its child Contacts is marked as 'VIP'. No code should be involved.",
      question: "Which declarative tool is best suited for this cross-object field update?",
      options: ["Workflow Rule with Field Update", "Process Builder", "Record-Triggered Flow with Update Records (cross-object)", "Validation Rule"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Sharing Model",
      scenario: "After setting OWD for Leads to 'Public Read Only', the admin realises that users in the same territory still cannot edit each other's leads.",
      question: "What is the correct OWD setting to allow users to read and edit all records?",
      options: ["Private", "Public Read Only", "Public Read/Write", "Controlled by Parent"],
      answer: 2
    },
    {
      type: "mcq",
      category: "API Limits",
      scenario: "A company's integration team is hitting the daily API request limit (15,000 calls/day on Enterprise Edition) due to frequent polling of Salesforce for record changes.",
      question: "Which Salesforce feature eliminates the need for polling and reduces API usage?",
      options: ["REST API with pagination", "Bulk API 2.0", "Streaming API / CometD", "SOAP API with compression"],
      answer: 2
    }
  ]
};

// ── Shuffle Utility ─────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Build Random 20-Question Set ────────────────────────────────────
function buildQuestionSet() {
  const descriptive = shuffle(ALL_QUESTIONS.scenario).slice(0, 10);
  const coding      = shuffle(ALL_QUESTIONS.coding).slice(0, 5);
  const mcq         = shuffle(ALL_QUESTIONS.mcq).slice(0, 5);

  // Interleave types for a natural exam feel
  return [
    ...descriptive.slice(0, 4),
    ...coding.slice(0, 2),
    ...mcq.slice(0, 2),
    ...descriptive.slice(4, 7),
    ...coding.slice(2, 4),
    ...mcq.slice(2, 4),
    ...descriptive.slice(7, 10),
    ...coding.slice(4, 5),
    ...mcq.slice(4, 5),
  ];
}

// QUESTIONS is used by quiz.js — built fresh on quiz start
let QUESTIONS = [];
