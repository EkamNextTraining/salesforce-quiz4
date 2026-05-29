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

  // ──────────────────────────────────────────────────────────────────
  // DESCRIPTIVE QUESTIONS — 40
  // ──────────────────────────────────────────────────────────────────
  scenario: [

    {
      type: "scenario",
      category: "Data Types & Variables",
      scenario: "A developer stores employee age, salary, and active status using different Apex data types.",
      question: "Explain primitive data types in Apex and when each should be used.",
      placeholder: "Explain Integer, Decimal, Boolean, String, Date, etc..."
    },

    {
      type: "scenario",
      category: "Type Casting",
      scenario: "A Double value is assigned to an Integer variable in Apex.",
      question: "Explain implicit and explicit type casting with examples.",
      placeholder: "Explain type conversion and casting..."
    },

    {
      type: "scenario",
      category: "Variables",
      scenario: "An Apex class contains local, static, and instance variables.",
      question: "Differentiate between local, static, and instance variables in Apex.",
      placeholder: "Explain scope and usage..."
    },

    {
      type: "scenario",
      category: "Conditional Statements",
      scenario: "A company calculates employee bonus percentages based on performance ratings.",
      question: "Explain how if-else statements can be used to implement this logic.",
      placeholder: "Explain conditional branching..."
    },

    {
      type: "scenario",
      category: "Conditional Statements",
      scenario: "A support team assigns ticket priorities based on issue severity.",
      question: "How would you implement this using switch statements in Apex?",
      placeholder: "Explain switch-case usage..."
    },

    {
      type: "scenario",
      category: "Iterations",
      scenario: "A developer processes 500 Account records in Apex.",
      question: "Explain different iteration statements available in Apex.",
      placeholder: "Explain for, while, do-while..."
    },

    {
      type: "scenario",
      category: "Iterations",
      scenario: "An Apex loop runs infinitely and exceeds governor limits.",
      question: "Explain risks of improper looping in Apex.",
      placeholder: "Explain governor limits and infinite loops..."
    },

    {
      type: "scenario",
      category: "sObjects",
      scenario: "A developer dynamically accesses Account fields using field API names.",
      question: "Explain how sObjects work in Apex.",
      placeholder: "Explain dynamic and static sObjects..."
    },

    {
      type: "scenario",
      category: "SOQL",
      scenario: "A company wants to retrieve all Accounts with related Contacts.",
      question: "Explain parent-to-child SOQL relationship queries.",
      placeholder: "Explain subqueries..."
    },

    {
      type: "scenario",
      category: "SOQL",
      scenario: "A developer fetches Opportunity records along with Account names.",
      question: "Explain child-to-parent relationship queries in SOQL.",
      placeholder: "Explain dot notation..."
    },

    {
      type: "scenario",
      category: "SOQL Loops",
      scenario: "A company processes 50,000 Contact records using Apex.",
      question: "Why are SOQL loops used in Apex?",
      placeholder: "Explain memory optimization..."
    },

    {
      type: "scenario",
      category: "SOSL",
      scenario: "A global search feature searches Accounts, Contacts, and Leads together.",
      question: "Explain the advantages of SOSL over SOQL.",
      placeholder: "Explain text searching..."
    },

    {
      type: "scenario",
      category: "DML Operations",
      scenario: "A company inserts new Accounts and updates Opportunities using Apex.",
      question: "Explain different DML operations in Apex.",
      placeholder: "Explain insert, update, delete, undelete..."
    },

    {
      type: "scenario",
      category: "DML Operations",
      scenario: "Some records fail validation during bulk insertion.",
      question: "Explain partial success handling using Database methods.",
      placeholder: "Explain Database.insert with allOrNone..."
    },

    {
      type: "scenario",
      category: "Bulkification",
      scenario: "A trigger works for single records but fails during Data Loader imports.",
      question: "Explain bulkification in Apex.",
      placeholder: "Explain collections and bulk-safe code..."
    },

    {
      type: "scenario",
      category: "Collections",
      scenario: "A developer uses List, Set, and Map in a trigger.",
      question: "Explain different collection types in Apex.",
      placeholder: "Explain List, Set, Map..."
    },

    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "A trigger exceeds the SOQL query limit.",
      question: "Explain governor limits in Salesforce.",
      placeholder: "Explain limits and multitenancy..."
    },

    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "SOQL queries are written inside loops.",
      question: "Why is SOQL inside loops considered a bad practice?",
      placeholder: "Explain query limits..."
    },

    {
      type: "scenario",
      category: "Governor Limits",
      scenario: "A trigger performs DML operations inside loops.",
      question: "Explain the impact of DML inside loops.",
      placeholder: "Explain DML limits..."
    },

    {
      type: "scenario",
      category: "Debugging",
      scenario: "An Apex class behaves differently in production and sandbox.",
      question: "How would you debug this issue using debug logs?",
      placeholder: "Explain log analysis..."
    },

    {
      type: "scenario",
      category: "Debugging",
      scenario: "A developer cannot identify why a trigger is failing.",
      question: "Explain debugging techniques available in Salesforce.",
      placeholder: "Explain checkpoints and logs..."
    },

    {
      type: "scenario",
      category: "Exception Handling",
      scenario: "An Apex class throws a DmlException during record insertion.",
      question: "Explain exception handling in Apex.",
      placeholder: "Explain try-catch-finally..."
    },

    {
      type: "scenario",
      category: "Exception Handling",
      scenario: "A company wants custom error messages for business validations.",
      question: "Explain custom exceptions in Apex.",
      placeholder: "Explain extending Exception class..."
    },

    {
      type: "scenario",
      category: "Custom Labels",
      scenario: "An application supports users in multiple languages.",
      question: "How do Custom Labels support multilingual applications?",
      placeholder: "Explain translation support..."
    },

    {
      type: "scenario",
      category: "Custom Settings",
      scenario: "Tax percentages are stored centrally and accessed from Apex.",
      question: "Explain Hierarchy Custom Settings.",
      placeholder: "Explain user/profile level settings..."
    },

    {
      type: "scenario",
      category: "Custom Metadata",
      scenario: "API endpoints are frequently changed without deployments.",
      question: "Explain advantages of Custom Metadata Types.",
      placeholder: "Explain metadata deployment benefits..."
    },

    {
      type: "scenario",
      category: "Email Services",
      scenario: "Customer emails should automatically create Cases.",
      question: "Explain Email Services in Salesforce.",
      placeholder: "Explain inbound email handling..."
    },

    {
      type: "scenario",
      category: "Triggers",
      scenario: "A company auto-populates fields before saving records.",
      question: "Explain before triggers in Salesforce.",
      placeholder: "Explain before insert/update..."
    },

    {
      type: "scenario",
      category: "Triggers",
      scenario: "Related records should be created after record insertion.",
      question: "Explain after triggers in Salesforce.",
      placeholder: "Explain after insert/update..."
    },

    {
      type: "scenario",
      category: "Triggers",
      scenario: "A developer wants to compare old and new field values.",
      question: "Explain trigger context variables.",
      placeholder: "Explain Trigger.new, oldMap..."
    },

    {
      type: "scenario",
      category: "Triggers",
      scenario: "A trigger repeatedly calls itself until limits are hit.",
      question: "Explain recursion in Apex triggers.",
      placeholder: "Explain recursion prevention..."
    },

    {
      type: "scenario",
      category: "Triggers",
      scenario: "Users should not delete Accounts with Opportunities.",
      question: "Explain before delete trigger usage.",
      placeholder: "Explain addError..."
    },

    {
      type: "scenario",
      category: "Triggers",
      scenario: "A Contact restored from recycle bin should notify Account owner.",
      question: "Explain undelete triggers.",
      placeholder: "Explain after undelete..."
    },

    {
      type: "scenario",
      category: "Trigger Framework",
      scenario: "A project has multiple triggers causing maintenance issues.",
      question: "Why should trigger handler classes be used?",
      placeholder: "Explain framework benefits..."
    },

    {
      type: "scenario",
      category: "Best Practices",
      scenario: "A trigger becomes difficult to maintain over time.",
      question: "Explain Apex trigger best practices.",
      placeholder: "Explain one trigger per object..."
    },

    {
      type: "scenario",
      category: "Duplicate Prevention",
      scenario: "Duplicate Contacts are created under the same Account.",
      question: "How would you prevent duplicates using Apex Trigger?",
      placeholder: "Explain duplicate validation..."
    },

    {
      type: "scenario",
      category: "Order Of Execution",
      scenario: "A validation rule and trigger both update the same field.",
      question: "Explain Salesforce order of execution.",
      placeholder: "Explain execution flow..."
    },

    {
      type: "scenario",
      category: "Validation Rules",
      scenario: "An Opportunity Close Date should not be in the past.",
      question: "Explain how validation rules work with triggers.",
      placeholder: "Explain validations..."
    },

    {
      type: "scenario",
      category: "Asynchronous Apex",
      scenario: "Large volume processing slows down user transactions.",
      question: "Differentiate synchronous and asynchronous Apex.",
      placeholder: "Explain Future, Queueable, Batch..."
    },

    {
      type: "scenario",
      category: "Real-Time Scenario",
      scenario: "An Opportunity Closed Won updates Account fields and creates Tasks.",
      question: "Explain a real-time scenario involving SOQL, DML, collections, and triggers.",
      placeholder: "Explain complete implementation..."
    }

  ],

  // ──────────────────────────────────────────────────────────────────
  // CODING QUESTIONS — 20
  // ──────────────────────────────────────────────────────────────────
  coding: [

    {
      type: "coding",
      category: "Data Types",
      scenario: "A developer wants to print all primitive data types in Apex.",
      question: "Write an Apex class demonstrating all primitive data types.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Type Casting",
      scenario: "A utility method receives Object values dynamically.",
      question: "Write an Apex method to safely convert Object to Integer.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Conditional Statements",
      scenario: "Employee bonus depends on performance score.",
      question: "Write an Apex program using if-else statements for bonus calculation.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Iterations",
      scenario: "A developer needs to print numbers from 1 to 100.",
      question: "Write an Apex program using a for loop.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "DML",
      scenario: "An Account record should be inserted and updated.",
      question: "Write Apex code to insert and update an Account.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "SOQL",
      scenario: "Accounts and related Contacts should be fetched.",
      question: "Write a SOQL relationship query.",
      language: "SOQL"
    },

    {
      type: "coding",
      category: "SOQL",
      scenario: "Opportunity count per Account is required.",
      question: "Write a SOQL aggregate query.",
      language: "SOQL"
    },

    {
      type: "coding",
      category: "SOSL",
      scenario: "Users search Accounts and Contacts together.",
      question: "Write a SOSL query for global search.",
      language: "SOSL"
    },

    {
      type: "coding",
      category: "Collections",
      scenario: "Accounts should be stored and accessed efficiently.",
      question: "Write Apex code using Map<Id, Account>.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Bulkification",
      scenario: "200 Contacts should be inserted efficiently.",
      question: "Write bulkified Apex code for Contact insertion.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Exception Handling",
      scenario: "An invalid DML operation throws an exception.",
      question: "Write Apex code using try-catch.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Custom Metadata",
      scenario: "Tax configuration values are stored in metadata.",
      question: "Write Apex code to query Custom Metadata records.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Custom Settings",
      scenario: "User-specific configurations should be accessed.",
      question: "Write Apex code to query Hierarchy Custom Settings.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Before Trigger",
      scenario: "Department should default to Sales during Contact creation.",
      question: "Write a before insert trigger on Contact.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "After Trigger",
      scenario: "A Task should be created after Opportunity Closed Won.",
      question: "Write an after update trigger on Opportunity.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Duplicate Prevention",
      scenario: "Duplicate Contacts should not exist under same Account.",
      question: "Write a trigger to prevent duplicate Contacts.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Delete Trigger",
      scenario: "Accounts with Opportunities should not be deleted.",
      question: "Write a before delete trigger on Account.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Trigger Context Variables",
      scenario: "Old and new Opportunity values should be compared.",
      question: "Write a trigger using oldMap and newMap.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Bulkification",
      scenario: "Account Contact count should update automatically.",
      question: "Write a bulkified trigger for Contact count update.",
      language: "Apex"
    },

    {
      type: "coding",
      category: "Trigger Framework",
      scenario: "A project requires maintainable trigger architecture.",
      question: "Write a basic Trigger Handler class structure.",
      language: "Apex"
    }

  ],

  // ────────────────────────────────────────────────────────────────
  //  MCQ — 20 questions
  // ────────────────────────────────────────────────────────────────
  mcq: [

  {
    type: "mcq",
    category: "Data Types",
    scenario: "Precise monetary calculations are required for tax processing.",
    question: "Which Apex data type should be used?",
    options: ["Double", "Float", "Decimal", "Long"],
    answer: 2
  },

  {
    type: "mcq",
    category: "Variables",
    scenario: "A variable should be shared across all instances of a class.",
    question: "Which keyword should be used?",
    options: ["final", "global", "static", "private"],
    answer: 2
  },

  {
    type: "mcq",
    category: "Conditional Statements",
    scenario: "Different blocks should execute based on conditions.",
    question: "Which statement is used?",
    options: ["for", "if", "while", "return"],
    answer: 1
  },

  {
    type: "mcq",
    category: "Iterations",
    scenario: "A loop must execute at least once.",
    question: "Which loop should be used?",
    options: ["for", "while", "do-while", "foreach"],
    answer: 2
  },

  {
    type: "mcq",
    category: "Collections",
    scenario: "Unique values should be stored without duplicates.",
    question: "Which collection type should be used?",
    options: ["List", "Map", "Set", "Array"],
    answer: 2
  },

  {
    type: "mcq",
    category: "sObjects",
    scenario: "A developer creates a custom object record dynamically.",
    question: "Which Apex type represents Salesforce records?",
    options: ["Object", "sObject", "Record", "Entity"],
    answer: 1
  },

  {
    type: "mcq",
    category: "SOQL",
    scenario: "A developer wants to fetch related Contacts from Account.",
    question: "Which SOQL query type should be used?",
    options: [
      "Aggregate Query",
      "Parent-to-Child Query",
      "SOSL Query",
      "Dynamic SOQL"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "SOQL",
    scenario: "Account name should be fetched from Opportunity.",
    question: "Which relationship query should be used?",
    options: [
      "Parent-to-Child",
      "Child-to-Parent",
      "Aggregate Query",
      "SOSL"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "SOQL Loops",
    scenario: "A developer processes 50,000 records in Apex.",
    question: "Why are SOQL loops used?",
    options: [
      "To increase DML limits",
      "To optimize memory usage",
      "To avoid triggers",
      "To delete records"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "SOSL",
    scenario: "A user searches multiple objects using one keyword.",
    question: "Which query language should be used?",
    options: ["SOQL", "SOSL", "SQL", "DML"],
    answer: 1
  },

  {
    type: "mcq",
    category: "DML",
    scenario: "A developer wants to modify existing records.",
    question: "Which DML operation should be used?",
    options: ["insert", "update", "upsert", "merge"],
    answer: 1
  },

  {
    type: "mcq",
    category: "Bulkification",
    scenario: "A trigger processes 200 records from Data Loader.",
    question: "Which practice should be followed?",
    options: [
      "SOQL inside loops",
      "DML inside loops",
      "Use collections",
      "One query per record"
    ],
    answer: 2
  },

  {
    type: "mcq",
    category: "Governor Limits",
    scenario: "Too many SOQL queries are executed in one transaction.",
    question: "Which exception occurs?",
    options: [
      "NullPointerException",
      "LimitException",
      "DmlException",
      "QueryParserException"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "Debugging",
    scenario: "A developer wants to print variable values during execution.",
    question: "Which method is used?",
    options: [
      "console.log()",
      "System.debug()",
      "print()",
      "debug.log()"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "Exception Handling",
    scenario: "A DML operation fails during execution.",
    question: "Which block handles exceptions?",
    options: ["if", "try-catch", "switch", "finally"],
    answer: 1
  },

  {
    type: "mcq",
    category: "Custom Labels",
    scenario: "A company supports multiple languages.",
    question: "Which feature stores reusable translated text?",
    options: [
      "Custom Metadata",
      "Custom Labels",
      "Custom Settings",
      "Validation Rules"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "Custom Settings",
    scenario: "User-specific configuration values are required.",
    question: "Which type of Custom Setting should be used?",
    options: [
      "List Custom Setting",
      "Hierarchy Custom Setting",
      "Metadata Type",
      "Platform Cache"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "Triggers",
    scenario: "Fields should be updated before saving records.",
    question: "Which trigger type should be used?",
    options: [
      "after insert",
      "before insert",
      "after delete",
      "after undelete"
    ],
    answer: 1
  },

  {
    type: "mcq",
    category: "Triggers",
    scenario: "Related records should be created after save.",
    question: "Which trigger type is best?",
    options: [
      "before insert",
      "before update",
      "after insert",
      "before delete"
    ],
    answer: 2
  },

  {
    type: "mcq",
    category: "Trigger Context Variables",
    scenario: "A developer compares old and new values during update.",
    question: "Which variable stores old values?",
    options: [
      "Trigger.new",
      "Trigger.old",
      "Trigger.newMap",
      "Trigger.size"
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
