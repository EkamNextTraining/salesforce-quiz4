// =====================================================================
//  SF DEVELOPER QUIZ — Question Bank (80 questions)
//  Topics: Apex Core, Apex Triggers
//  Random pick per session: 10 scenario, 5 coding, 5 MCQ
//
//  Distribution:
//    scenario : 40 questions (10 randomly picked)
//    coding   : 20 questions  (5 randomly picked)
//    mcq      : 20 questions  (5 randomly picked)
// =====================================================================

const ALL_QUESTIONS = {

  // ────────────────────────────────────────────────────────────────
  //  SCENARIO / DESCRIPTIVE — 40 questions
  // ────────────────────────────────────────────────────────────────
  scenario: [

    // ── Data Types, Variables, Assignment, Type Casting ──────────
    {
      type: "scenario",
      category: "Data Types & Variables",
      scenario: "A developer declares an Integer variable and assigns it 9.7 via a cast from Double. Later, the same variable is assigned the result of Integer.valueOf('abc').",
      question: "What are the two outcomes and why? Explain how Apex handles narrowing type casts and what exception is thrown during a failed valueOf conversion. How would you write defensive code to prevent a runtime crash?",
      placeholder: "Explain the cast behaviour, the exception type, and show defensive code using try-catch..."
    },
    {
      type: "scenario",
      category: "Data Types & Variables",
      scenario: "A developer stores monetary values in a Double variable and uses it in arithmetic across several methods. After deployment, financial reports show rounding discrepancies of ±0.01. The logic is correct but the data type is the root cause.",
      question: "Why does Double cause rounding errors for financial calculations in Apex? What data type should be used instead, and how does it handle precision differently? Show a code comparison.",
      placeholder: "Explain Double precision issues, name the correct type, and show a before/after code example..."
    },
    {
      type: "scenario",
      category: "Data Types & Variables",
      scenario: "A junior developer writes: Object obj = 'Hello'; Integer len = (Integer) obj; The code compiles but throws a runtime error when executed.",
      question: "Explain why the code compiles but fails at runtime. What is the difference between compile-time type checking and runtime type casting? How would you safely cast an Object to a known type using instanceof?",
      placeholder: "Explain compile vs runtime type safety, and rewrite using instanceof before casting..."
    },
    {
      type: "scenario",
      category: "Data Types & Variables",
      scenario: "A developer uses a String variable to store a Salesforce record Id retrieved from a URL parameter. Later, the Id is used in a SOQL WHERE clause. The query returns no results even though the record exists in the org.",
      question: "What are the common causes of Id-related mismatches in Apex (15-char vs 18-char Ids, case sensitivity)? How does Apex's Id data type differ from String for holding Salesforce Ids? How would you safely convert and compare Ids?",
      placeholder: "Explain 15 vs 18 char Id differences, the Id data type advantages, and safe comparison patterns..."
    },

    // ── Conditional Statements ───────────────────────────────────
    {
      type: "scenario",
      category: "Conditional Statements",
      scenario: "A method receives a String representing an account tier: 'Gold', 'Silver', 'Bronze', or null. It must return a discount: Gold=20, Silver=10, Bronze=5, null/unknown=0. A developer implements this with nested if-else. A reviewer recommends a switch statement.",
      question: "Rewrite the logic using an Apex switch statement. What are the advantages over nested if-else here? What happens if the input is null — does Apex's switch statement handle it safely?",
      placeholder: "Write the switch statement, explain null handling, and compare advantages over if-else..."
    },
    {
      type: "scenario",
      category: "Conditional Statements",
      scenario: "A developer writes a validation method checking: (1) Account revenue > 1,000,000, (2) Account type is 'Enterprise', and (3) a Boolean Active_Contract__c field is true. A single compound if with && is used. A NullPointerException is thrown when Account type is null.",
      question: "Explain short-circuit evaluation in Apex and how condition order prevents NullPointerExceptions. Rewrite the condition safely. When would you use || instead of &&?",
      placeholder: "Explain short-circuit evaluation, rewrite with null check first, and contrast && vs || use cases..."
    },

    // ── Iterations ───────────────────────────────────────────────
    {
      type: "scenario",
      category: "Iterations",
      scenario: "A developer writes a for loop over a List<Opportunity> and inside the loop executes a SOQL query to fetch related Contacts for each record. With 150 Opportunities the code fails in production with a governor limit error.",
      question: "Identify the exact governor limit violated. Rewrite using a single SOQL outside the loop and a Map to correlate data inside the loop. Why is this pattern critical?",
      placeholder: "Name the violated limit, explain the Map pattern, and show the corrected bulkified code..."
    },
    {
      type: "scenario",
      category: "Iterations",
      scenario: "A developer iterates a List<String> of emails with a for-each loop and removes entries containing '@test.com' inside the loop. The code compiles but some entries are not removed and others throw unexpected exceptions.",
      question: "Why is it unsafe to remove items from a collection while iterating it with a for-each loop in Apex? Describe two safe alternatives: index-based removal and building a new keep-list.",
      placeholder: "Explain the ConcurrentModificationException risk and provide two safe iteration-removal patterns..."
    },
    {
      type: "scenario",
      category: "Iterations",
      scenario: "A developer uses a while loop to process a queue stored in a List, removing the first item each iteration. A missing break condition causes an infinite loop until Apex kills the transaction.",
      question: "What Apex governor limit terminates a runaway loop? Compare risks of while vs for loops in Apex. Describe best practices including maximum iteration guards and exit condition verification.",
      placeholder: "Name the terminating limit, compare loop type risks, and explain safe while loop practices..."
    },

    // ── sObjects ─────────────────────────────────────────────────
    {
      type: "scenario",
      category: "Introduction to sObjects",
      scenario: "A developer writes a method that accepts a generic sObject. They try to access a field using dot notation: sObj.Name. The code fails to compile because the compiler cannot verify the field on a generic sObject.",
      question: "Explain the difference between strongly-typed sObject field access and dynamic access using get() and put(). When would you use generic sObject vs typed Account? Show both approaches for reading and writing a field.",
      placeholder: "Explain typed vs generic sObject field access with complete code examples for both approaches..."
    },
    {
      type: "scenario",
      category: "Introduction to sObjects",
      scenario: "A developer creates an Account in memory and sets fields, but forgets to insert it. Later they pass the sObject to a method that creates a related Contact using account.Id. A NullPointerException is thrown.",
      question: "Why is the Id field null before DML insert? What is the Id lifecycle? Describe common bugs from confusing in-memory sObjects with persisted records and how to avoid them.",
      placeholder: "Explain sObject Id lifecycle, the insert requirement, and in-memory vs persisted record pitfalls..."
    },
    {
      type: "scenario",
      category: "Introduction to sObjects",
      scenario: "A developer needs to write a method that works with any Salesforce object type at runtime, reading fields by API name from a configuration map and constructing new records of that type dynamically.",
      question: "Explain how to use Schema.getGlobalDescribe(), Type.forName(), and sObject.put() to build a fully dynamic record creation utility in Apex. What are the performance considerations of calling getGlobalDescribe() repeatedly?",
      placeholder: "Explain dynamic sObject creation, Schema describe usage, and performance best practices..."
    },

    // ── SOQL ─────────────────────────────────────────────────────
    {
      type: "scenario",
      category: "SOQL",
      scenario: "A SOQL query inside a trigger on Account fires 500 times during a bulk load. The transaction fails with 'Too many SOQL queries: 101'.",
      question: "Explain the SOQL governor limit in triggers. How do SOQL for loops differ from List assignment in terms of heap and execution? Rewrite the trigger to query all needed data in a single SOQL using Account Ids from Trigger.newMap.",
      placeholder: "State the limit, compare SOQL loop vs List assignment, and rewrite the bulkified trigger query..."
    },
    {
      type: "scenario",
      category: "SOQL",
      scenario: "A developer builds a search query as a String and concatenates user-supplied input directly into the WHERE clause. A security review flags this as a SOQL injection vulnerability.",
      question: "Explain how SOQL injection works in Apex and why String concatenation in dynamic SOQL is dangerous. Rewrite using a bind variable. When must you use Database.query() vs inline SOQL, and how do bind variables work in both?",
      placeholder: "Explain SOQL injection, rewrite with bind variable, and explain Database.query vs inline SOQL..."
    },
    {
      type: "scenario",
      category: "SOQL",
      scenario: "A developer queries 60,000 Account records into a List<Account>. On large orgs the code throws 'Heap size too large'. The goal is to process and update every record.",
      question: "What is the Apex heap size limit? How does a SOQL for loop solve this with cursor-based processing? Compare heap usage of List assignment vs SOQL for loop and explain when to escalate to Batch Apex.",
      placeholder: "State the heap limit, explain SOQL cursor behaviour, and compare all three processing approaches..."
    },

    // ── SOSL ─────────────────────────────────────────────────────
    {
      type: "scenario",
      category: "SOSL",
      scenario: "A developer uses SOQL with LIKE '%term%' across Account, Contact, and Lead with three separate queries. Performance is poor. A senior developer recommends SOSL.",
      question: "Compare SOQL and SOSL for multi-object search. Describe syntax, use cases, and governor limits for each. Write a SOSL statement searching ALL FIELDS across all three objects. When is SOSL the wrong choice?",
      placeholder: "Compare SOQL vs SOSL, write the multi-object SOSL, and list when SOSL should NOT be used..."
    },
    {
      type: "scenario",
      category: "SOSL",
      scenario: "A developer's SOSL query in a test class returns no results for records inserted in the same test, even though the insert succeeded. A colleague's test on the same code passes.",
      question: "Why does SOSL not return newly inserted records in test context by default? What is Test.setFixedSearchResults() and how do you use it? Explain how SOQL and SOSL behave differently in test execution.",
      placeholder: "Explain SOSL test indexing gap, Test.setFixedSearchResults() usage, and SOQL vs SOSL in tests..."
    },

    // ── DML & Bulkification ──────────────────────────────────────
    {
      type: "scenario",
      category: "DML & Bulkification",
      scenario: "An Account trigger on insert calls insert inside the loop — one DML per Account. A bulk load of 200 Accounts causes 'Too many DML statements: 151'.",
      question: "Explain the DML statement governor limit. Rewrite to collect all Opportunity sObjects into a List and perform a single insert after the loop. Why is this pattern called bulkification and why is it mandatory?",
      placeholder: "State the DML limit, explain bulkification, and show the corrected single-insert trigger code..."
    },
    {
      type: "scenario",
      category: "DML & Bulkification",
      scenario: "A developer inserts 500 Accounts with plain insert. Some fail validation rules causing a full rollback. The requirement is: insert valid records, log failures, never stop the entire batch.",
      question: "Explain the difference between insert (all-or-none) and Database.insert() with allOrNone=false. How do you use Database.SaveResult to identify failures? Write code capturing partial failures with error messages.",
      placeholder: "Compare insert vs Database.insert, show SaveResult iteration, and write the partial success handler..."
    },
    {
      type: "scenario",
      category: "DML & Bulkification",
      scenario: "A developer needs to insert-or-update Contacts based on Email as the unique key. They write SOQL + if/else + insert/update. A reviewer says one DML statement can replace all of this.",
      question: "Explain the upsert DML operation. How does it work with an external Id vs the standard Id? What happens when duplicates are found on an external Id during upsert? Show code upserting Contacts using Email as the external Id.",
      placeholder: "Explain upsert mechanics, external Id duplicate behaviour, and show the upsert code with Email key..."
    },

    // ── Debugging & Logging ──────────────────────────────────────
    {
      type: "scenario",
      category: "Debugging & Logging",
      scenario: "A developer uses System.debug() extensively throughout a complex class. In production, users report slow performance on the page calling this class.",
      question: "Does System.debug() impact performance in production when no debug session is active? Explain how Apex debug logging works, its size limits, and all log levels (ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST). What are production best practices?",
      placeholder: "Explain debug log performance impact, all log levels, size limits, and production best practices..."
    },
    {
      type: "scenario",
      category: "Debugging & Logging",
      scenario: "A production trigger fires on Contact update but produces incorrect results for only a subset of records. The developer cannot reproduce it in sandbox and needs a debug log from a specific production user's session.",
      question: "How do you enable a user-specific debug log in Salesforce Setup? What log categories and levels are available? How do you read a debug log to trace trigger execution, identify the failure point, and locate relevant SOQL and DML calls?",
      placeholder: "Explain user-specific debug log setup, log categories, and how to analyse a trigger execution log..."
    },

    // ── Exception Handling ───────────────────────────────────────
    {
      type: "scenario",
      category: "Exception Handling",
      scenario: "An Apex method calls an external REST API. On network timeout it throws a CalloutException. The developer wraps everything in a single catch(Exception e) block. A reviewer flags this as poor practice.",
      question: "Why is catching the base Exception class bad practice? Explain the Apex exception hierarchy. How do you use multiple catch blocks for CalloutException, DmlException, and a custom exception? What must always be logged in a catch block?",
      placeholder: "Explain the exception hierarchy, show multiple catch blocks, and list mandatory log fields..."
    },
    {
      type: "scenario",
      category: "Exception Handling",
      scenario: "An architect requires a service class to throw a custom exception with a descriptive message when Opportunity validation fails instead of returning a Boolean. The calling controller must display the message to the user.",
      question: "How do you create a custom Apex exception class? Write the custom exception, throw it from the service, catch it in the controller, and surface the message using ApexPages.addMessage.",
      placeholder: "Write the custom exception class, throw and catch it, and show ApexPages.addMessage usage..."
    },
    {
      type: "scenario",
      category: "Exception Handling",
      scenario: "A developer uses try-catch-finally for DML. Inside the catch block they attempt another DML insert to log the error to a custom object. The second DML fails silently after investigation reveals the transaction was already rolled back.",
      question: "Explain how DML exceptions and transaction rollbacks interact. Why does DML inside a catch block sometimes fail? What is a Savepoint and how do you use Database.setSavepoint() and Database.rollback() to control partial rollbacks?",
      placeholder: "Explain rollback interaction with catch, and show Database.setSavepoint / rollback pattern..."
    },

    // ── Custom Labels, Settings, Metadata ────────────────────────
    {
      type: "scenario",
      category: "Custom Labels, Settings & Metadata",
      scenario: "A developer hardcodes an API endpoint URL and timeout value in Apex. When the endpoint changes between UAT and production, a full code deployment is required. The team wants admins to update values without deployment.",
      question: "Compare Custom Labels, Custom Settings, and Custom Metadata Types for configuration storage. Which is best for this use case and why? Explain key differences: Apex querying, deployability, per-profile/per-user support.",
      placeholder: "Compare all three options, recommend the right choice, and explain querying and deployment differences..."
    },
    {
      type: "scenario",
      category: "Custom Labels, Settings & Metadata",
      scenario: "A developer stores feature flags in a Hierarchy Custom Setting. The flag should be ON for 'Sales' profile users but OFF for everyone else. They query the setting using getInstance().",
      question: "Explain how Hierarchy Custom Settings resolve values across org default, profile, and user levels. How does getInstance() decide which level to return? Write code to query the setting for the running user and handle the case where no profile-level value exists.",
      placeholder: "Explain hierarchy level resolution, getInstance() logic, and write the query with null-safe fallback..."
    },
    {
      type: "scenario",
      category: "Custom Labels, Settings & Metadata",
      scenario: "A team uses Custom Metadata Type records to drive discount rules. After a sandbox refresh the records disappear. Updating a metadata record in production requires a change management process taking days.",
      question: "Why do Custom Metadata records survive deployments but not always sandbox refreshes? How do you deploy Custom Metadata records via change sets or Metadata API? What are the DML restrictions on Custom Metadata compared to Custom Settings?",
      placeholder: "Explain metadata persistence, deployment methods, and Custom Metadata DML limitations..."
    },

    // ── Email Services ────────────────────────────────────────────
    {
      type: "scenario",
      category: "Email Services",
      scenario: "A developer sends personalised emails to 500 Contacts inside a batch execute() method — one Messaging.sendEmail() call per Contact. The job fails after a few batches with an email governor limit error.",
      question: "What is the Apex email governor limit per transaction? How do you use Messaging.sendEmail() with a List to send multiple emails in one call? Restructure the batch to avoid the limit, considering how limits reset between batch chunks.",
      placeholder: "State the email limit, explain bulk send with a List, and restructure the batch execute method..."
    },
    {
      type: "scenario",
      category: "Email Services",
      scenario: "A requirement calls for an email address that, when emailed, automatically creates a Case with the email subject as Case Subject and the body as Description. The developer is directed to use an Apex Email Service.",
      question: "Explain how Apex Email Services work end-to-end. What interface must the handler implement? Describe InboundEmail and InboundEnvelope — how do you access subject, body, sender, and attachments? How is the Email Service endpoint configured in Setup?",
      placeholder: "Explain the interface, InboundEmail object structure, and Setup configuration steps..."
    },

    // ── Apex Triggers ────────────────────────────────────────────
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "A before insert trigger modifies Opportunity fields. The developer notices before trigger records have no Id, while after trigger records do. Assigning to Trigger.new in an after trigger causes an error.",
      question: "Explain the key differences between before and after triggers: record state, Id availability, and direct modification rules. When must you use before vs after? What is the correct pattern to update records from an after trigger?",
      placeholder: "Compare before vs after trigger state, Id availability, and show the correct after-trigger update pattern..."
    },
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "A Contact trigger fires on insert and update. To detect Email field changes on update the developer uses Trigger.old[0], which fails when multiple records are updated at once.",
      question: "Explain Trigger.old, Trigger.new, Trigger.oldMap, and Trigger.newMap. Why is Trigger.old[0] dangerous in bulk context? Write the correct pattern to detect field changes by comparing Trigger.newMap and Trigger.oldMap.",
      placeholder: "Explain all four context variables and write the Map-based field-change detection pattern..."
    },
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "An org has three triggers on Account written by different developers over two years. On Account update all three fire in an unpredictable order; one's changes overwrite another. Process Builder and a Flow also run on Account.",
      question: "Explain the risks of multiple triggers on the same object. What is the Single Trigger / Trigger Handler pattern and how does it solve this? Explain the Salesforce order of execution for a record update — where do triggers, validation rules, workflows, and flows fit?",
      placeholder: "Explain multiple trigger risks, single trigger pattern, and the full Salesforce order of execution..."
    },
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "An after insert trigger on Opportunity creates a Task. When the Task inserts it fires a trigger that updates the Opportunity. This causes the Opportunity trigger to fire again — infinite recursion.",
      question: "How does Salesforce limit recursive trigger execution? Explain the static Boolean flag pattern to prevent recursion. What are its limitations? Describe the alternative pattern using a static Set<Id> to track already-processed records.",
      placeholder: "Explain Salesforce recursion limits, static flag pattern, limitations, and the Id Set alternative..."
    },
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "A trigger on Lead fires on delete. The developer uses Trigger.new inside the delete trigger. The code compiles but Trigger.new is null at runtime, causing a NullPointerException.",
      question: "Explain which trigger context variables are available for each DML operation (insert, update, delete, undelete). Why is Trigger.new null on delete? What is Trigger.old used for in delete/undelete? Show a safe trigger template handling all four operations.",
      placeholder: "Map DML events to available context variables and write a safe multi-operation trigger template..."
    },
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "A trigger on Account calls a helper that performs SOQL and DML. During a Data Loader operation of 10,000 records (batches of 200), the trigger hits governor limits on the 3rd batch even though each batch has only 200 records.",
      question: "Explain governor limit scope in Apex triggers — do limits reset between batches in bulk DML? How many records per trigger invocation in a bulk operation? Describe the full bulkification pattern: collect, single SOQL, process in memory, single DML.",
      placeholder: "Explain per-batch limit scope, 200-record chunk size, and the complete bulkification pattern..."
    },
    {
      type: "scenario",
      category: "Apex Triggers",
      scenario: "A developer writes a test class for an Account trigger that creates one Account and asserts the result. The test passes with 100% coverage. A reviewer rejects it saying it does not validate bulk behaviour and will fail in a real data load.",
      question: "Why is a single-record test insufficient for trigger test classes? Write a test that inserts 200 Accounts and asserts the trigger ran correctly for all of them. What is @TestSetup and when should it be used in trigger tests?",
      placeholder: "Explain bulk test requirements, write a 200-record trigger test, and explain @TestSetup usage..."
    },

    // ── Governor Limits ───────────────────────────────────────────
    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "An Apex class works fine in a dev org but fails in production during a nightly batch processing 50,000 records. The failure is inconsistent — sometimes at 38,000 records, sometimes at 42,000.",
      question: "Explain Apex governor limits and why they exist. List the most critical per-transaction limits. Why does the class fail at inconsistent record counts? What tools (Limits class, debug logs) monitor real-time limit consumption?",
      placeholder: "List key governor limits, explain non-deterministic failure, and show Limits class monitoring code..."
    },
    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "After adding a new feature, a developer's code starts hitting the CPU time limit even though SOQL and DML counts remain within limits. They use Limits.getCpuTime() to diagnose.",
      question: "What is the Apex CPU time limit and what types of operations consume it? Explain synchronous (10s) vs asynchronous (60s) CPU limits. What code patterns cause excessive CPU usage and how do you optimise them?",
      placeholder: "Explain CPU limits, sync vs async differences, and list CPU-heavy patterns with optimisation strategies..."
    },
    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "A developer's Apex trigger works correctly when tested manually but fails during a nightly integration that sends 5,000 records via the REST API in a single call. The error log shows heap size and DML limit violations appearing together.",
      question: "Explain why multiple governor limits can be violated in the same transaction. How do heap size, DML statements, SOQL queries, and CPU time each get consumed differently in a bulk trigger context? Describe a systematic approach to audit a trigger for all limit risks before deployment.",
      placeholder: "Explain how multiple limits can fail together, and describe a pre-deployment limit audit strategy..."
    }
  ],

  // ────────────────────────────────────────────────────────────────
  //  LIVE CODING — 20 questions
  // ────────────────────────────────────────────────────────────────
  coding: [

    {
      type: "coding",
      category: "Data Types & Type Casting",
      scenario: "You need a utility method that accepts a raw Object value from a dynamic context and safely converts it to an Integer. It must handle null, non-numeric Strings, Doubles, and valid Integer Strings without throwing an unhandled exception.",
      question: "Write an Apex method safeToInteger(Object val) that returns the Integer value or null if conversion fails. Use instanceof checks and try-catch where necessary.",
      language: "Apex",
      placeholder: "public static Integer safeToInteger(Object val) {\n    // your code here\n}",
      codeHint: "Check null first, then instanceof Integer, Double, String. For String use try { Integer.valueOf(str) } catch. Return null on any failure."
    },
    {
      type: "coding",
      category: "Iterations & Collections",
      scenario: "You have a List<Account> that may contain duplicates based on the Name field. You need to deduplicate — keep only the first occurrence of each Name — and return a new List<Account> preserving the original order.",
      question: "Write an Apex method deduplicateAccounts(List<Account> accounts) that returns the deduplicated list without using a Set directly on sObjects.",
      language: "Apex",
      placeholder: "public static List<Account> deduplicateAccounts(List<Account> accounts) {\n    // your code here\n}",
      codeHint: "Use a Set<String> to track seen names. Iterate with for-each. Add to result list only if name not in the Set yet."
    },
    {
      type: "coding",
      category: "sObjects & Dynamic Apex",
      scenario: "You need a generic utility that accepts any sObject and a Map of field API names to values, and sets those fields dynamically — without knowing the object type at compile time.",
      question: "Write an Apex method applyFieldValues(sObject record, Map<String, Object> fieldValues) that uses sObject.put() to set each field and returns the modified sObject.",
      language: "Apex",
      placeholder: "public static sObject applyFieldValues(sObject record, Map<String, Object> fieldValues) {\n    // your code here\n}",
      codeHint: "Null-check the map. Iterate fieldValues.keySet(). Call record.put(fieldName, fieldValues.get(fieldName)). Return the record."
    },
    {
      type: "coding",
      category: "SOQL & Bulkification",
      scenario: "A trigger on Contact (after insert, after update) must update the parent Account's Total_Active_Contacts__c field with the count of Contacts where Active__c = true. It must handle bulk operations with a single SOQL and single DML.",
      question: "Write the Apex trigger and helper class ContactTriggerHelper with a static method updateAccountContactCount(List<Contact> contacts). Use an AggregateResult query grouped by AccountId.",
      language: "Apex",
      placeholder: "trigger ContactTrigger on Contact (after insert, after update) {\n    ContactTriggerHelper.updateAccountContactCount(Trigger.new);\n}\n\npublic class ContactTriggerHelper {\n    public static void updateAccountContactCount(List<Contact> contacts) {\n        // your code here\n    }\n}",
      codeHint: "Collect AccountIds from trigger records. Use: SELECT AccountId, COUNT(Id) cnt FROM Contact WHERE AccountId IN :accountIds AND Active__c = true GROUP BY AccountId. Map AccountId to count. Update Accounts in one DML."
    },
    {
      type: "coding",
      category: "SOQL Loops",
      scenario: "You need to process all Opportunities where StageName = 'Prospecting' and Amount > 10000, inserting a report record for each. The total record count could exceed 50,000 — too large for a single List.",
      question: "Write Apex code using a SOQL for loop to process records in chunks of 200, creating and inserting Opportunity_Report__c records per chunk without exceeding heap size.",
      language: "Apex",
      placeholder: "public static void processLargeOpportunitySet() {\n    // your code here\n}",
      codeHint: "Use: for (List<Opportunity> chunk : [SELECT Id, Name, Amount FROM Opportunity WHERE StageName='Prospecting' AND Amount > 10000]) { ... build reports ... insert reports; }"
    },
    {
      type: "coding",
      category: "SOSL",
      scenario: "A global search feature must search a user-supplied keyword across Contact (FirstName, LastName, Email) and Account (Name, Website) simultaneously and return all results as a combined List<sObject>.",
      question: "Write an Apex method globalSearch(String keyword) using SOSL. Handle blank keyword input. Return all matching records from both objects in a single list.",
      language: "Apex",
      placeholder: "public static List<sObject> globalSearch(String keyword) {\n    // your code here\n}",
      codeHint: "Check String.isBlank(keyword). Use: FIND :keyword IN ALL FIELDS RETURNING Contact(Id,FirstName,LastName,Email), Account(Id,Name,Website). Combine results[0] and results[1] into one List<sObject>."
    },
    {
      type: "coding",
      category: "DML & Partial Success",
      scenario: "A batch process inserts a List<Lead> where some records fail validation rules. All valid records must be inserted, failed ones collected with error messages, and a summary returned.",
      question: "Write insertLeadsWithSummary(List<Lead> leads) using Database.insert with allOrNone=false. Return a Map<String, List<Lead>> with keys 'success' and 'failed'.",
      language: "Apex",
      placeholder: "public static Map<String, List<Lead>> insertLeadsWithSummary(List<Lead> leads) {\n    // your code here\n}",
      codeHint: "Database.insert(leads, false) returns Database.SaveResult[]. Check sr.isSuccess() for each. Use sr.getErrors() for failures. Populate 'success' and 'failed' lists."
    },
    {
      type: "coding",
      category: "Exception Handling",
      scenario: "A service method calls an external API using Http. It must handle: a successful 200 response, a 500 server error, and a CalloutException (network failure). Each must be handled differently and logged to Error_Log__c.",
      question: "Write callExternalService(String endpoint) with proper try-catch-finally handling. Create an Error_Log__c record on failure with Error_Type__c, Error_Message__c, and Stack_Trace__c fields.",
      language: "Apex",
      placeholder: "public static String callExternalService(String endpoint) {\n    // your code here\n}",
      codeHint: "Use HttpRequest/HttpResponse. Check response.getStatusCode(). Catch CalloutException separately from Exception. In catch, insert Error_Log__c with e.getMessage() and e.getStackTraceString(). Use finally for cleanup."
    },
    {
      type: "coding",
      category: "Custom Metadata",
      scenario: "A discount service reads percentages from Discount_Rule__mdt (fields: Tier__c, Discount_Percentage__c). It must return the correct discount for a given tier, defaulting to 0 if no matching rule exists.",
      question: "Write getDiscount(String tier) that queries the Custom Metadata Type and returns the Decimal discount. Do not hardcode any values.",
      language: "Apex",
      placeholder: "public static Decimal getDiscount(String tier) {\n    // your code here\n}",
      codeHint: "Query: [SELECT Discount_Percentage__c FROM Discount_Rule__mdt WHERE Tier__c = :tier LIMIT 1]. Check if empty before accessing index 0. Return 0 as default."
    },
    {
      type: "coding",
      category: "Email Services",
      scenario: "An Apex Email Service handler receives emails. When the subject starts with 'CASE:', create a Case: Subject = email subject minus the prefix, Description = email body, SuppliedEmail = sender address.",
      question: "Write class CaseEmailHandler implementing Messaging.InboundEmailHandler. Implement handleInboundEmail to create the Case and return a success reply.",
      language: "Apex",
      placeholder: "global class CaseEmailHandler implements Messaging.InboundEmailHandler {\n    global Messaging.InboundEmailResult handleInboundEmail(\n        Messaging.InboundEmail email,\n        Messaging.InboundEnvelope envelope\n    ) {\n        // your code here\n    }\n}",
      codeHint: "Check email.subject.startsWith('CASE:'). Use substring(5) to strip prefix. Set Case.Subject, Case.Description = email.plainTextBody, Case.SuppliedEmail = email.fromAddress. Insert Case. Set result.success = true."
    },
    {
      type: "coding",
      category: "Apex Triggers — Before Validation",
      scenario: "On Opportunity, a before insert and before update trigger must enforce: if StageName = 'Closed Won', CloseDate must not be in the future. If it is, add a field-level error on CloseDate.",
      question: "Write OpportunityValidationTrigger firing on before insert and before update to enforce this rule with a field-level error.",
      language: "Apex",
      placeholder: "trigger OpportunityValidationTrigger on Opportunity (before insert, before update) {\n    // your code here\n}",
      codeHint: "Iterate Trigger.new. Check StageName == 'Closed Won' AND CloseDate > Date.today(). Use opp.CloseDate.addError('Close Date cannot be in the future for a Closed Won deal.')."
    },
    {
      type: "coding",
      category: "Apex Triggers — Bulkification",
      scenario: "An after insert trigger on Case must create a follow-up Task for each new Case. Subject: 'Follow up on Case: ' + CaseNumber. Due: today + 3 days. Assigned to: Case OwnerId. Must be fully bulkified with a separate handler class.",
      question: "Write the trigger and CaseTriggerHandler class with static method createFollowUpTasks(List<Case> newCases). All DML must be outside any loop.",
      language: "Apex",
      placeholder: "trigger CaseTrigger on Case (after insert) {\n    CaseTriggerHandler.createFollowUpTasks(Trigger.new);\n}\n\npublic class CaseTriggerHandler {\n    public static void createFollowUpTasks(List<Case> newCases) {\n        // your code here\n    }\n}",
      codeHint: "Build List<Task> in the loop — no DML inside. Set WhatId = case.Id, Subject, ActivityDate = Date.today()+3, OwnerId. Insert the full list after the loop."
    },
    {
      type: "coding",
      category: "Apex Triggers — Recursion Prevention",
      scenario: "An after update trigger on Account sends an email when Rating changes. Integration processes sometimes update Account from the same trigger causing recursion and duplicate emails.",
      question: "Write the trigger and AccountTriggerHelper class with a static Boolean flag preventing recursion. The email logic must run only once per transaction.",
      language: "Apex",
      placeholder: "public class AccountTriggerHelper {\n    public static Boolean hasRun = false;\n\n    public static void handleRatingChange(List<Account> newList, Map<Id, Account> oldMap) {\n        // your code here\n    }\n}\n\ntrigger AccountTrigger on Account (after update) {\n    // your code here\n}",
      codeHint: "Check if (!AccountTriggerHelper.hasRun). Set hasRun = true immediately. Compare newList Rating vs oldMap.get(a.Id).Rating to detect changes. Send email only for changed records."
    },
    {
      type: "coding",
      category: "Apex Triggers — Delete/Undelete",
      scenario: "A trigger on Contact handles before delete and after undelete. On before delete: block deletion of Contacts where related Account.Type = 'Key Account'. On after undelete: set Description = 'Record restored on ' + today's date.",
      question: "Write ContactLifecycleTrigger handling both operations in a bulkified way.",
      language: "Apex",
      placeholder: "trigger ContactLifecycleTrigger on Contact (before delete, after undelete) {\n    // your code here\n}",
      codeHint: "Before delete: collect AccountIds from Trigger.old, query Accounts WHERE Type='Key Account', build a Set<Id> of key account Ids, add addError() on matching Contacts. After undelete: iterate Trigger.new, set Description, update in bulk."
    },
    {
      type: "coding",
      category: "Apex Triggers — Field Change Detection",
      scenario: "A trigger on Opportunity fires after update. When the StageName field changes, you must insert a Stage_History__c record capturing: OpportunityId, Old_Stage__c, New_Stage__c, Changed_Date__c (today).",
      question: "Write the trigger and handler method trackStageChanges(List<Opportunity> newList, Map<Id, Opportunity> oldMap) that detects stage changes and bulk-inserts Stage_History__c records.",
      language: "Apex",
      placeholder: "trigger OpportunityTrigger on Opportunity (after update) {\n    OpportunityTriggerHandler.trackStageChanges(Trigger.new, Trigger.oldMap);\n}\n\npublic class OpportunityTriggerHandler {\n    public static void trackStageChanges(\n        List<Opportunity> newList,\n        Map<Id, Opportunity> oldMap\n    ) {\n        // your code here\n    }\n}",
      codeHint: "Iterate newList. Compare opp.StageName != oldMap.get(opp.Id).StageName. Build List<Stage_History__c> with all four fields. Insert after loop."
    },
    {
      type: "coding",
      category: "Apex — Test Classes",
      scenario: "Write a test class for a trigger that sets a Contact's Title = 'VIP' when the related Account's AnnualRevenue > 1,000,000. Must validate positive case, negative case, and bulk behaviour with 200 records each.",
      question: "Write VIPContactTriggerTest with @TestSetup, a bulk positive test, and a bulk negative test.",
      language: "Apex",
      placeholder: "@isTest\npublic class VIPContactTriggerTest {\n\n    @TestSetup\n    static void setup() {\n        // your code here\n    }\n\n    @isTest\n    static void testBulkPositive() {\n        // your code here\n    }\n\n    @isTest\n    static void testBulkNegative() {\n        // your code here\n    }\n}",
      codeHint: "In @TestSetup create Accounts with high and low revenue. In each test insert 200 Contacts. Query Contacts back and use System.assertEquals to check Title values for all 200."
    },
    {
      type: "coding",
      category: "Debugging & Logging",
      scenario: "A production Apex service is failing with a generic error. You need structured diagnostic logging that captures: context name, message, governor limit usage at checkpoints (SOQL count, DML count, heap, CPU), and exception details.",
      question: "Write DiagnosticLogger with static methods log(String context, String message) and logException(String context, Exception e) that output structured debug lines with current limit stats.",
      language: "Apex",
      placeholder: "public class DiagnosticLogger {\n\n    public static void log(String context, String message) {\n        // your code here\n    }\n\n    public static void logException(String context, Exception e) {\n        // your code here\n    }\n}",
      codeHint: "Use Limits.getQueries(), Limits.getLimitQueries(), Limits.getDmlStatements(), Limits.getCpuTime(), Limits.getHeapSize(). For logException: e.getTypeName(), e.getMessage(), e.getStackTraceString()."
    },
    {
      type: "coding",
      category: "Custom Labels",
      scenario: "Validation error messages are hardcoded in Apex. They must be moved to Custom Labels so they can be translated and updated without code changes.",
      question: "Write MessageService with three static methods returning Custom Label values: getRequiredFieldError(), getSuccessMessage(), getDuplicateWarning(). Show how the same labels are referenced in a Visualforce page.",
      language: "Apex",
      placeholder: "public class MessageService {\n\n    public static String getRequiredFieldError() {\n        // your code here\n    }\n\n    public static String getSuccessMessage() {\n        // your code here\n    }\n\n    public static String getDuplicateWarning() {\n        // your code here\n    }\n    \n    // Visualforce equivalent shown as a comment below:\n}",
      codeHint: "Return System.Label.Required_Field_Error etc. in Apex. In a comment show the Visualforce equivalent: {!$Label.Required_Field_Error}."
    },
    {
      type: "coding",
      category: "DML — Upsert",
      scenario: "An integration receives a List<Account> from an external system. Each Account has an External_System_Id__c custom external Id field. Some records exist in Salesforce already; some are new. Both must be handled atomically.",
      question: "Write syncAccounts(List<Account> incomingAccounts) using Database.upsert with External_System_Id__c as the key and allOrNone=false. Log any errors from UpsertResult.",
      language: "Apex",
      placeholder: "public static void syncAccounts(List<Account> incomingAccounts) {\n    // your code here\n}",
      codeHint: "Database.upsert(incomingAccounts, Account.External_System_Id__c, false). Iterate Database.UpsertResult[]. Check ur.isSuccess(). For failures: ur.getErrors() gives error list with message and statusCode."
    },
    {
      type: "coding",
      category: "Custom Settings",
      scenario: "A Hierarchy Custom Setting Feature_Flags__c has a Boolean field Enable_New_Pricing__c. You need a utility method that returns true only if the flag is enabled for the currently running user, checking user → profile → org default in order.",
      question: "Write getFeatureFlag() that queries the Custom Setting for the running user using getInstance() and safely returns the Boolean field value, defaulting to false if no setting is found.",
      language: "Apex",
      placeholder: "public static Boolean getFeatureFlag() {\n    // your code here\n}",
      codeHint: "Feature_Flags__c setting = Feature_Flags__c.getInstance(UserInfo.getUserId()); — this resolves hierarchy automatically. Null-check before accessing. Return false as default."
    }
  ],

  // ────────────────────────────────────────────────────────────────
  //  MCQ — 20 questions
  // ────────────────────────────────────────────────────────────────
  mcq: [

    {
      type: "mcq",
      category: "Data Types",
      scenario: "A developer needs to store monetary values requiring exact decimal precision for tax calculations, with no floating-point rounding errors.",
      question: "Which Apex data type should be used for precise decimal arithmetic?",
      options: ["Double", "Float", "Decimal", "Long"],
      answer: 2
    },
    {
      type: "mcq",
      category: "Data Types & Type Casting",
      scenario: "The following Apex code executes: Integer i = (Integer) 9.9;",
      question: "What is the value of i after this statement?",
      options: ["10 — it rounds up to the nearest integer", "9 — it truncates the decimal portion", "A TypeException is thrown at runtime", "A compile error is thrown because Double cannot be cast to Integer"],
      answer: 1
    },
    {
      type: "mcq",
      category: "Conditional Statements",
      scenario: "An Apex switch statement is written to evaluate a String variable. At runtime the variable's value is null.",
      question: "How does an Apex switch statement handle a null input value?",
      options: [
        "It throws a NullPointerException automatically",
        "It matches the first when clause regardless of value",
        "It falls through to the else/default block if present, otherwise does nothing",
        "Null causes a compile-time error in switch statements"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Iterations",
      scenario: "A developer iterates a List<String> with a for-each loop and calls list.remove(item) inside the loop body to remove certain items.",
      question: "What happens when you modify a List while iterating it with a for-each loop in Apex?",
      options: [
        "It works correctly and removes the item",
        "A compile error is thrown",
        "A System.ListException or ConcurrentModificationException is thrown at runtime",
        "The loop silently skips the item after each removal"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "SOQL Governor Limits",
      scenario: "A developer writes a SOQL query that returns 60,000 rows assigned directly to a List<Account> variable in a single transaction.",
      question: "What happens when a SOQL result assigned to a List exceeds 50,000 rows?",
      options: [
        "Only the first 50,000 records are returned silently",
        "A QueryException is thrown: 'Too many query rows: 50001'",
        "The query automatically paginates into the list in chunks",
        "A heap size error is always thrown before the query limit is reached"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "SOQL Injection",
      scenario: "A developer builds a dynamic SOQL string by concatenating a user-supplied search value directly into the WHERE clause.",
      question: "Which is the most secure way to handle user input in dynamic SOQL?",
      options: [
        "Use String.escapeSingleQuotes() on the input before concatenating",
        "Use EncodingUtil.urlEncode() to sanitise the input",
        "Use a bind variable (:userInput) instead of string concatenation",
        "Wrap the concatenation in a try-catch block"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "SOQL For Loop",
      scenario: "A developer uses a SOQL for loop: for (List<Account> chunk : [SELECT Id FROM Account WHERE ...]) { ... }",
      question: "How many records does each chunk List contain per iteration by default?",
      options: ["1 record per iteration", "100 records per iteration", "200 records per iteration", "500 records per iteration"],
      answer: 2
    },
    {
      type: "mcq",
      category: "SOSL — Test Context",
      scenario: "A developer inserts a Contact in a test method and immediately runs a SOSL query searching for that Contact. The SOSL returns zero results.",
      question: "Why does SOSL return no results for newly inserted records in test context?",
      options: [
        "SOSL is not supported inside test methods",
        "Search indexes are not updated during test execution; use Test.setFixedSearchResults() to mock results",
        "The Contact was not committed to the database before the SOSL executed",
        "SOSL requires a minimum of 10 records to return any results"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "DML — Partial Success",
      scenario: "A developer calls insert(recordList) where some records will fail due to validation rules. They want valid records saved and failures reported without rolling back the entire operation.",
      question: "Which approach allows partial success in a DML insert?",
      options: [
        "Wrap insert recordList in a try-catch to catch only failed records",
        "Database.insert(recordList, false) and iterate Database.SaveResult[] to check isSuccess()",
        "Database.insert(recordList, true) and check UpsertResult[]",
        "Partial inserts are not supported in Apex — it is always all-or-nothing"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "DML — Upsert",
      scenario: "A developer needs to insert-or-update a list of Contact records using Email as the match key. Email is configured as an external Id field on Contact.",
      question: "Which Apex DML statement handles this in a single operation?",
      options: [
        "merge contactList Contact.Email",
        "update contactList",
        "upsert contactList Contact.Email",
        "Database.insertOrUpdate(contactList)"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Exception Handling — Savepoints",
      scenario: "A DmlException inside a catch block causes a silent failure because the transaction was already rolled back by the original exception. The developer needs to recover and continue.",
      question: "Which mechanism allows you to partially roll back a transaction to a specific point and then continue executing DML afterward?",
      options: [
        "Database.rollback() called without any parameters",
        "System.undoLastDml() reverts the most recent DML statement",
        "Savepoint sp = Database.setSavepoint() before the risky DML, then Database.rollback(sp) in the catch",
        "Using a try block inside a finally block to re-attempt the DML"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Exception Handling — Multiple Catch",
      scenario: "A developer writes: try { ... } catch (DmlException e) { ... } catch (Exception e) { ... }",
      question: "Which exceptions are caught by the second catch (Exception e) block?",
      options: [
        "Only DmlExceptions that were explicitly re-thrown in the first catch",
        "All exceptions including DmlException since Exception is the base class",
        "All exceptions EXCEPT DmlException, which is already handled by the first block",
        "The code does not compile — multiple catch blocks are not supported in Apex"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Custom Metadata vs Custom Settings",
      scenario: "A team needs configuration data that is deployable between sandboxes via Change Sets, survives sandbox refreshes, and is queryable in Apex. Per-user values are not required.",
      question: "Which configuration tool best meets all these requirements?",
      options: [
        "Custom Settings — Hierarchy type",
        "Custom Settings — List type",
        "Custom Metadata Types",
        "Custom Labels"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Custom Labels",
      scenario: "A Custom Label is referenced in Apex using System.Label.My_Label_Name. The label has a French translation configured.",
      question: "When will the French translation be returned instead of the default value?",
      options: [
        "When the running user's language preference is set to French",
        "Custom Labels always return the default value in Apex; translations only work in Visualforce",
        "When the org's default language is set to French",
        "Only when explicitly requested via a Language parameter in the API call"
      ],
      answer: 0
    },
    {
      type: "mcq",
      category: "Apex Triggers — Context Variables",
      scenario: "A trigger on Contact is written for the delete event. The developer uses Trigger.new inside the trigger body.",
      question: "What is the value of Trigger.new in a delete trigger?",
      options: [
        "It contains the records being deleted with their current field values",
        "It contains the records as they will appear after deletion",
        "It is null — only Trigger.old is populated on a delete trigger",
        "It contains an empty list"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Apex Triggers — Before vs After",
      scenario: "A developer needs to set a default field value before the record is written to the database, without issuing an additional DML update statement.",
      question: "Which trigger event handles this most efficiently?",
      options: [
        "after insert — to read the new Id after database assignment",
        "before insert — fields can be modified directly on Trigger.new records before save",
        "after update — to re-set values after the initial save",
        "before delete — to preserve values before removal"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "Apex Triggers — Bulk Processing",
      scenario: "A trigger on Account is invoked by a Data Loader operation that updates 2,000 records at once.",
      question: "How does Salesforce invoke the trigger for these 2,000 records?",
      options: [
        "One trigger invocation processes all 2,000 records simultaneously",
        "One trigger invocation fires per record — 2,000 separate calls",
        "Triggers fire in chunks of 200 records — 10 separate invocations with limits resetting each time",
        "Triggers are bypassed for bulk Data Loader operations exceeding 1,000 records"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Apex Triggers — Recursion",
      scenario: "A static Boolean flag prevents trigger recursion. The flag is set to true on first run. A batch job processes 2,000 records across 10 trigger invocations of 200 records each.",
      question: "What is the primary limitation of the static Boolean flag anti-recursion pattern?",
      options: [
        "Static variables reset between each 200-record chunk, so the flag offers no protection across chunks",
        "The flag prevents ALL subsequent trigger invocations in the same transaction, including legitimate non-recursive ones",
        "Static variables are not supported inside trigger handler classes, only in regular Apex classes",
        "The flag only works for before triggers and has no effect on after triggers"
      ],
      answer: 1
    },
    {
      type: "mcq",
      category: "Apex Triggers — Order of Execution",
      scenario: "A developer wants to know at which point in the Salesforce order of execution an Apex before trigger fires relative to validation rules.",
      question: "When does an Apex before trigger fire in the Salesforce order of execution?",
      options: [
        "After all validation rules (system and custom) have run",
        "Before any system validation — it is the very first thing to execute on save",
        "After system validation (required fields, data formats) but before custom validation rules",
        "After workflow field updates but before record commits"
      ],
      answer: 2
    },
    {
      type: "mcq",
      category: "Governor Limits",
      scenario: "A developer calls Limits.getQueries() and finds they have used 45 out of 100 SOQL queries. They add a new feature and the code now starts failing with CPU time limit errors instead of SOQL errors.",
      question: "What is the synchronous Apex CPU time governor limit?",
      options: [
        "5,000 milliseconds (5 seconds)",
        "10,000 milliseconds (10 seconds)",
        "30,000 milliseconds (30 seconds)",
        "60,000 milliseconds (60 seconds) — same as asynchronous"
      ],
      answer: 1
    }
  ]
};

// ── Shuffle Utility ──────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Build Random 20-Question Set ─────────────────────────────────────
// Each session: 10 scenario + 5 coding + 5 MCQ = 20 questions
function buildQuestionSet() {
  const descriptive = shuffle(ALL_QUESTIONS.scenario).slice(0, 10);
  const coding      = shuffle(ALL_QUESTIONS.coding).slice(0, 5);
  const mcq         = shuffle(ALL_QUESTIONS.mcq).slice(0, 5);

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

// QUESTIONS is used by quiz.js — populated fresh on each quiz start
let QUESTIONS = [];
