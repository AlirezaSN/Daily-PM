# Day 35: Product Requirements & Writing Effective PRDs

## Learning Objectives

By the end of this lesson, you should understand:

- What product requirements are
- Why requirements matter
- What a PRD is
- When to write a PRD
- The difference between a problem statement and a requirement
- How to structure a PRD
- Product context
- Problem statement
- Goals and non-goals
- User stories
- Functional requirements
- Non-functional requirements
- Acceptance criteria
- Business rules
- Edge cases
- Dependencies
- Constraints
- Assumptions
- Success metrics
- MVP scope
- Out-of-scope items
- How to write requirements for engineers and designers
- Common PRD mistakes
- How to review a PRD
- How to keep requirements clear without over-specifying the solution

---

# 1. What Is a Product Requirement?

A **product requirement** describes something the product needs to do, support, or achieve in order to solve a customer or business problem.

For example:

> Users should be able to reset their password using their registered email address.

This is a product requirement.

But a requirement isn't necessarily a feature.

For example:

> Users should be able to recover access to their account without contacting customer support.

This describes the desired capability without immediately prescribing the exact implementation.

---

# 2. What Is a PRD?

**PRD** stands for **Product Requirements Document**.

A PRD is a document that communicates:

- What problem we are solving
- Why we are solving it
- Who we are solving it for
- What the product should accomplish
- What is included
- What is not included
- How success will be measured
- What constraints and assumptions exist

The PRD helps the product team establish a shared understanding before and during development.

---

# 3. Why Do We Need PRDs?

Without clear requirements, different people may have different interpretations.

For example:

### Product Manager

> "Users should be able to upload documents."

### Designer

> "I'll create a drag-and-drop uploader."

### Engineer

> "I'll allow PDF files only."

### Business team

> "Users should be able to upload any document."

Everyone has a different interpretation.

A good PRD reduces this ambiguity.

---

# 4. A PRD Is Not a Contract

A common mistake is treating a PRD as a fixed contract.

Product development involves learning.

You may discover:

- The customer problem was different.
- A requirement isn't technically feasible.
- A simpler solution exists.
- A business constraint changed.
- Customer research revealed a new need.

Therefore:

> **A PRD should provide clarity without preventing learning and adaptation.**

Good requirements are clear but not unnecessarily rigid.

---

# 5. PRD vs. Product Spec

The terminology varies between companies.

Some organizations use:

- PRD
- Product Spec
- Product Requirements
- Feature Specification
- Product Brief
- Functional Specification

The exact name isn't important.

What matters is that the team has a shared understanding of:

> **What we're building, why we're building it, and how we'll know it works.**

---

# 6. Problem First, Solution Second

One of the most important principles in writing requirements is:

> **Start with the problem, not the solution.**

Weak:

> Build a button that allows users to upload documents.

Better:

> Users currently need to contact support to submit required documents, creating unnecessary delays.

Then:

> We need to enable customers to submit the required documents digitally.

Now the team understands the reason behind the requirement.

---

# 7. Problem Statement

A good problem statement explains:

- Who has the problem
- What the problem is
- When it happens
- Why it matters
- What impact it creates

Example:

> First-time insurance customers struggle to understand which documents are required for a claim. This causes confusion, repeated support contacts, and claim abandonment.

This is much more useful than:

> Improve the claim process.

---

# 8. Product Context

Before describing requirements, explain the context.

Example:

> Customers currently submit claims through the mobile application. After starting a claim, they are asked to upload supporting documents. Support data indicates that a significant number of users contact customer service because they don't know which documents are required.

This gives the team the background needed to understand the problem.

---

# 9. Goals

Goals describe what you want to achieve.

Example:

### Goals

- Reduce confusion during claim submission.
- Increase claim completion rate.
- Reduce unnecessary support contacts.
- Reduce time required to prepare a claim.

Goals should focus on outcomes rather than implementation.

---

# 10. Non-Goals

**Non-goals** clarify what you intentionally won't solve.

For example:

### Non-goals

- Redesign the entire insurance claim experience.
- Change the underlying claim approval process.
- Build an AI claims assistant.
- Support claims submitted through external channels.

Non-goals are extremely useful because they prevent scope expansion.

---

# 11. Scope

Scope defines what is included in the current initiative.

Example:

### In Scope

- Document requirements page
- Personalized document checklist
- Document upload
- Upload validation
- Submission confirmation

### Out of Scope

- Claim approval automation
- Fraud detection
- Payment processing
- Insurer-side workflow changes

This makes the boundaries explicit.

---

# 12. User Stories

A common format for describing requirements is:

> **As a [user], I want [capability], so that [benefit].**

Example:

> As an insurance customer, I want to see which documents are required for my claim so that I can prepare everything before starting the submission.

Another example:

> As a customer, I want to know whether my uploaded document is valid so that I can correct mistakes before submitting my claim.

---

# 13. User Stories Are Not Requirements by Themselves

A user story is useful, but it may not contain enough detail.

For example:

> As a customer, I want to upload documents.

Questions remain:

- Which file types?
- Maximum size?
- How many files?
- Can users replace files?
- What happens if upload fails?
- Can users upload from mobile?
- Is the document scanned for validity?

That's why user stories often need supporting acceptance criteria and business rules.

---

# 14. Functional Requirements

Functional requirements describe what the product should do.

Examples:

- Users can upload documents.
- Users can remove uploaded documents.
- Users can replace documents.
- The system validates file type.
- The system validates file size.
- The system displays upload progress.
- The system shows an error when an upload fails.

These requirements describe product behavior.

---

# 15. Non-Functional Requirements

Non-functional requirements describe qualities or constraints of the system.

Examples:

- Performance
- Security
- Reliability
- Accessibility
- Scalability
- Availability
- Privacy

Example:

> Document upload should complete within 5 seconds for files up to 10 MB under normal network conditions.

That's a non-functional requirement.

---

# 16. Functional vs. Non-Functional Requirements

| Type | Example |
|---|---|
| Functional | User can upload a document |
| Functional | System rejects unsupported file types |
| Functional | User can delete an uploaded file |
| Non-functional | Upload response should appear within 2 seconds |
| Non-functional | Uploaded documents must be encrypted |
| Non-functional | Feature must support screen readers |

A good PRD may contain both.

---

# 17. Acceptance Criteria

Acceptance criteria define the conditions that must be satisfied for a requirement to be considered complete.

Example:

### Requirement

Users can upload a PDF document.

### Acceptance Criteria

- User can select a PDF file.
- Files larger than 10 MB are rejected.
- Non-PDF files are rejected.
- Upload progress is displayed.
- Successful uploads appear in the document list.
- Failed uploads show an understandable error message.
- Users can retry a failed upload.

Acceptance criteria make requirements testable.

---

# 18. Good Acceptance Criteria

Good acceptance criteria are:

- Specific
- Testable
- Understandable
- Unambiguous
- Relevant

Bad:

> The upload experience should be easy.

This is subjective.

Better:

> Users can upload a supported document without leaving the claim submission flow.

Even better:

> A user can select a supported document, upload it successfully, and see the document listed as "Uploaded" without leaving the claim submission flow.

---

# 19. Given / When / Then

A common format for acceptance criteria is:

```text
Given [initial condition]
When [action]
Then [expected result]
````

Example:

```text
Given the user is on the document upload screen
When the user selects a PDF smaller than 10 MB
Then the document should upload successfully
```

Another:

```text
Given the user is on the document upload screen
When the user selects a file larger than 10 MB
Then the system should reject the file and display an appropriate error
```

This format is especially useful for QA and engineering.

---

# 20. Business Rules

Business rules describe rules that the product must follow.

For example:

* A claim cannot be submitted without required documents.
* A user can submit a maximum of three claims per day.
* Only verified users can withdraw funds.
* A refund can only be requested within 30 days.
* A trade cannot be placed when the market is closed.

Business rules are important because they often come from:

* Business policies
* Regulatory requirements
* Risk management
* Financial rules
* Operational constraints

---

# 21. Edge Cases

An edge case is an unusual situation that the product should handle.

For example:

Normal:

> User uploads a valid document.

Edge cases:

* User loses internet connection.
* Upload is interrupted.
* File is corrupted.
* File is too large.
* User uploads duplicate documents.
* User closes the app during upload.
* Server becomes unavailable.
* User's session expires.

A good PRD identifies important edge cases without trying to document every imaginable scenario.

---

# 22. Error States

Every major user flow should consider failure states.

For example:

### Successful

> Document uploaded successfully.

### Failure

> Upload failed.

But a good product requirement should ask:

> What does the user do next?

Better:

> If upload fails, the user should see a clear error message and be able to retry without selecting the document again.

Error handling is part of the product experience.

---

# 23. Empty States

Empty states are often forgotten.

Examples:

* No transactions
* No search results
* No notifications
* No saved jobs
* No uploaded documents

A PRD should clarify what the user should see and what action they can take.

Example:

> When a user has no saved jobs, show an explanation and provide a CTA to search for jobs.

---

# 24. Loading States

Don't document only the final state.

Consider:

* Loading
* Success
* Failure
* Partial completion

For example:

```text
Start Upload
     ↓
Uploading...
     ↓
Success
```

or:

```text
Start Upload
     ↓
Uploading...
     ↓
Failed
     ↓
Retry
```

A complete requirement considers the whole interaction.

---

# 25. Dependencies

A dependency is something your feature relies on.

Examples:

* Backend API
* Payment provider
* Authentication service
* Third-party API
* Design system
* Legal approval
* Data team
* Another product team

Example:

> The document validation feature depends on the existing document-processing service.

Dependencies are important for planning and risk management.

---

# 26. Constraints

Constraints are limitations that affect the solution.

Examples:

* Limited engineering capacity
* Regulatory requirements
* Existing architecture
* Budget
* Deadline
* Third-party API limitations
* Security requirements
* Platform limitations

Example:

> The first release must use the existing document-storage service and cannot introduce a new infrastructure dependency.

---

# 27. Assumptions

Assumptions are things you currently believe to be true but haven't fully validated.

Example:

> We assume most customers have the required documents available digitally.

Another:

> We assume customers will understand the document checklist without needing human support.

Important assumptions should be validated.

---

# 28. Requirements vs. Assumptions

Don't confuse them.

### Requirement

> The system must allow users to upload PDF documents.

### Assumption

> Most users will have their documents in PDF format.

The first describes what the product must do.

The second describes something you believe about customers.

---

# 29. Requirements vs. Constraints

### Requirement

> Users should be able to upload documents.

### Constraint

> We must use the existing document storage infrastructure.

Requirements describe what needs to be achieved.

Constraints describe limitations on how it can be achieved.

---

# 30. Requirements vs. Acceptance Criteria

### Requirement

> Users can upload documents.

### Acceptance Criteria

> Supported documents upload successfully, unsupported formats are rejected, and users receive clear feedback.

The requirement describes the capability.

Acceptance criteria define when the capability is considered complete.

---

# 31. Success Metrics

A PRD should explain how you will know whether the product actually worked.

For example:

### Primary Metric

> Claim completion rate.

### Secondary Metrics

* Average claim submission time
* Support contacts per claim
* Document upload failure rate

### Guardrail Metrics

* Claim fraud rate
* Customer satisfaction
* System error rate

A feature isn't automatically successful because it was shipped.

---

# 32. Output Metrics vs. Outcome Metrics

This distinction is important.

### Output

> Number of features released.

### Outcome

> Claim completion rate increased by 15%.

PMs should focus more heavily on outcomes.

Building something is an output.

Creating customer or business value is an outcome.

---

# 33. Example: Weak Success Criteria

> Launch the new document upload feature.

This tells us what we will ship.

It doesn't tell us whether it worked.

Better:

> Increase claim completion rate from 60% to 75% within three months of launch.

Now the team has a measurable outcome.

---

# 34. MVP Scope

A PRD should distinguish between:

> What is necessary for the first useful version?

and:

> What would be nice to have later?

Example:

### MVP

* Upload PDF
* Upload JPG
* Validate file size
* Show upload progress
* Retry failed upload

### Later

* Automatic document classification
* OCR
* AI validation
* Document recommendations
* Bulk upload

This helps protect the team from unnecessary scope.

---

# 35. Must Have vs. Nice to Have

A simple prioritization:

### Must Have

Required for the product to work.

### Should Have

Important but potentially deferrable.

### Could Have

Useful but not essential.

### Won't Have

Explicitly excluded from this release.

Be careful with "nice to have" lists.

If everything is marked important, nothing is actually prioritized.

---

# 36. PRD Structure

A practical PRD can follow this structure:

```text
1. Overview
2. Problem Statement
3. Background / Context
4. Target Users
5. Goals
6. Non-Goals
7. Success Metrics
8. Scope
9. User Stories
10. Functional Requirements
11. Non-Functional Requirements
12. Business Rules
13. Edge Cases
14. Dependencies
15. Constraints
16. Assumptions
17. Design / UX Considerations
18. Analytics Requirements
19. Rollout Plan
20. Open Questions
```

Not every PRD needs every section.

Use the level of detail appropriate for the project.

---

# 37. Target Users

Clearly define who the feature is for.

Weak:

> Users.

Better:

> First-time insurance customers submitting their first claim through the mobile app.

Specific user definitions help the team make better decisions.

---

# 38. User Personas vs. Target Users

You don't always need a detailed persona.

For many product requirements, this is enough:

> Primary user: First-time insurance customers.

If different users have significantly different needs, define them separately.

For example:

* Individual customers
* Corporate customers
* Insurance agents
* Internal claim reviewers

Different users may require different requirements.

---

# 39. Design Requirements

A PRD doesn't need to dictate every UI detail.

Weak:

> Put a blue button in the top-right corner.

Unless there is a specific reason, this unnecessarily constrains design.

Better:

> Users should have a clear primary action for submitting the claim.

Then the designer can determine the best interaction.

---

# 40. Don't Over-Specify the Solution

The PM's responsibility is often to clarify:

> What problem needs to be solved and what outcome is expected.

The designer determines:

> How the experience should work.

The engineer determines:

> How the system should be implemented.

Of course, these responsibilities overlap in collaborative teams.

The key principle is:

> **Provide enough detail to remove ambiguity without unnecessarily restricting the team.**

---

# 41. Technical Details in a PRD

Should a PM include technical details?

Sometimes.

Include them when they affect:

* Feasibility
* Scope
* Dependencies
* Performance
* Security
* Architecture
* Business behavior

But avoid pretending to be the technical architect when you don't need to be.

For example:

Good:

> The feature depends on the existing payment provider API.

Potentially unnecessary:

> Use PostgreSQL table X with column Y and implement endpoint Z.

The latter may belong in technical design documentation.

---

# 42. Analytics Requirements

If you want to measure success, define what needs to be tracked.

Example:

For document upload:

Events:

* `document_upload_started`
* `document_upload_success`
* `document_upload_failed`
* `document_deleted`
* `claim_submitted`

Properties might include:

* Document type
* File size
* Error type
* User segment

This ensures the team can measure the feature after launch.

---

# 43. Rollout Plan

Some features should not be released to everyone immediately.

Possible rollout approaches:

* Internal testing
* Beta users
* Small percentage of users
* Specific customer segment
* Geographic rollout
* Feature flag
* Full release

Example:

```text
Internal
   ↓
5% users
   ↓
25% users
   ↓
50% users
   ↓
100% users
```

A gradual rollout can reduce risk.

---

# 44. Open Questions

A good PRD can explicitly list things that are not yet known.

Example:

### Open Questions

* Should users be able to upload multiple documents at once?
* What file formats should be supported?
* What is the maximum file size?
* Should users be able to replace a document after submission?
* What happens if the upload service is unavailable?

This is better than pretending everything is already decided.

---

# 45. Decision Log

For complex projects, maintain a record of important decisions.

Example:

| Date  | Decision                  | Reason                    |
| ----- | ------------------------- | ------------------------- |
| Aug 1 | Support PDF and JPG       | Most common formats       |
| Aug 3 | Maximum file size = 10 MB | Infrastructure constraint |
| Aug 5 | Bulk upload postponed     | MVP scope                 |

This prevents the team from repeatedly debating the same decisions.

---

# 46. Example PRD — LinkedIn Saved Jobs

Let's create a simplified example.

## Overview

LinkedIn users can discover jobs but may not be ready to apply immediately. The goal is to allow users to save jobs and return to them later.

## Problem

Users lose track of jobs they are interested in because they cannot easily organize jobs they want to review later.

## Target User

Professionals actively exploring job opportunities.

## Goal

Increase the number of relevant job opportunities users return to and apply for.

## Non-Goals

* Full job application management
* Interview scheduling
* Resume creation

---

# 47. LinkedIn PRD — User Stories

### Story 1

> As a job seeker, I want to save a job so that I can review it later.

### Story 2

> As a job seeker, I want to see my saved jobs so that I can decide which ones to apply to.

### Story 3

> As a job seeker, I want to remove a saved job so that my saved list remains relevant.

---

# 48. LinkedIn PRD — Functional Requirements

### Save Job

* User can save a job from the job detail page.
* User can save a job from job search results.
* Saved state is clearly visible.
* User can unsave a job.

### Saved Jobs

* User can access a list of saved jobs.
* Each saved job displays relevant job information.
* User can open the job detail page.
* User can remove a saved job.

---

# 49. LinkedIn PRD — Acceptance Criteria

```text
Given a user is viewing an unsaved job
When the user selects "Save"
Then the job should appear in the user's saved jobs
```

```text
Given a user has saved a job
When the user selects "Unsave"
Then the job should be removed from saved jobs
```

```text
Given a user has saved multiple jobs
When the user opens Saved Jobs
Then all currently saved jobs should be displayed
```

---

# 50. LinkedIn PRD — Edge Cases

Consider:

* Job has been removed.
* Job posting has expired.
* Company no longer accepts applications.
* User saves the same job multiple times.
* User is offline.
* User logs out and logs back in.
* User's account is deleted.
* Job details have changed.

The product should define appropriate behavior for important cases.

---

# 51. LinkedIn PRD — Success Metrics

### Primary Metric

> Application rate from saved jobs.

### Secondary Metrics

* Number of jobs saved
* Return rate to saved jobs
* Saved-job-to-application conversion
* Number of active users with saved jobs

### Guardrails

* Search engagement should not decrease.
* Overall job application rate should not decrease.

---

# 52. A Good PRD Is Not Necessarily Long

A common misconception is:

> "A good PRD must be 20 pages."

Not necessarily.

For a small feature, a one- or two-page document may be enough.

For a complex system, you may need much more detail.

The goal is:

> **Enough information to create shared understanding and enable good decisions.**

Not:

> Maximum documentation.

---

# 53. The Right Level of Detail

Too little detail:

> "Improve claims."

The team doesn't know what to do.

Too much detail:

> "Click this exact button at x=100, y=250 and call endpoint `/api/v2/claims/upload`."

The PRD becomes unnecessarily restrictive.

The ideal level is:

> **Clear enough to eliminate ambiguity, flexible enough to allow the team to solve the problem.**

---

# 54. Common PRD Mistakes

## Mistake 1: Starting With Features

> "Build a dashboard."

Instead:

> Explain the customer/business problem.

---

## Mistake 2: No Success Metric

If you don't define success, you may not know whether the feature worked.

---

## Mistake 3: No Non-Goals

Without non-goals, scope tends to expand.

---

## Mistake 4: Ignoring Edge Cases

Only documenting the happy path creates problems later.

---

## Mistake 5: Over-Specifying Design

Don't unnecessarily dictate implementation or UI details.

---

## Mistake 6: Ignoring Technical Constraints

A requirement that cannot realistically be implemented isn't useful.

---

## Mistake 7: Writing for Yourself

A PRD is for the team.

Write it so that:

* Engineers understand it.
* Designers understand it.
* QA understands it.
* Stakeholders understand it.

---

# 55. PRD Review

Before development begins, review the PRD with the relevant team.

### Product

> Does this solve the right problem?

### Design

> Is the experience clear?

### Engineering

> Is it technically feasible?

### QA

> Is the behavior testable?

### Business

> Does it support the desired outcome?

This collaborative review can reveal issues early.

---

# 56. Questions Engineers May Ask

Be prepared for questions such as:

* What happens if the API fails?
* What happens if the user loses connection?
* What is the maximum file size?
* Can users retry?
* What happens to partially completed submissions?
* Which users are eligible?
* What happens when a user is not authenticated?
* What happens when data is missing?
* Which states need to be tracked?

A good PRD anticipates important questions.

---

# 57. Questions Designers May Ask

Designers may ask:

* What is the primary user goal?
* What information is most important?
* What happens if the action fails?
* What are the different user states?
* What should the primary CTA be?
* Which users need different experiences?
* What is the expected behavior after completion?

Again, the PRD should provide context rather than dictate every visual decision.

---

# 58. Questions QA May Ask

QA may ask:

* What are the expected behaviors?
* What are valid inputs?
* What are invalid inputs?
* What are the edge cases?
* What happens during failures?
* What are the acceptance criteria?
* Which platforms need to be supported?

Clear requirements make QA significantly easier.

---

# 59. PRD Quality Checklist

Before sharing your PRD, ask:

### Problem

* Is the problem clearly defined?
* Do we know who experiences it?
* Do we have evidence?

### Goal

* Is the desired outcome clear?
* Is success measurable?

### Scope

* Is the MVP clear?
* Are non-goals defined?

### Requirements

* Are requirements specific?
* Are they testable?
* Are important edge cases covered?

### Feasibility

* Are major dependencies identified?
* Are important constraints documented?

### Collaboration

* Can design understand the experience?
* Can engineering understand the behavior?
* Can QA test it?

---

# 60. PRD Writing Principles

Remember these principles:

### 1. Start with Why

Explain the problem before describing the solution.

### 2. Focus on Outcomes

Describe what success looks like.

### 3. Be Specific

Avoid ambiguous language.

### 4. Stay Flexible

Don't unnecessarily prescribe implementation.

### 5. Make Requirements Testable

Someone should be able to determine whether they are satisfied.

### 6. Expose Uncertainty

Document assumptions and open questions.

### 7. Define Boundaries

Use scope and non-goals.

### 8. Collaborate

A PRD should not be written in isolation.

---

# 61. The PRD Mental Model

A useful way to think about a PRD is:

```text
WHY
Why are we doing this?
        ↓
WHO
Who are we solving it for?
        ↓
WHAT PROBLEM
What problem are they experiencing?
        ↓
OUTCOME
What should improve?
        ↓
SCOPE
What are we solving now?
        ↓
REQUIREMENTS
What must the product do?
        ↓
CONSTRAINTS
What limitations exist?
        ↓
SUCCESS
How will we know it worked?
```

This structure keeps the document connected to the underlying product problem.

---

# 62. Day 35 Exercise

Create a mini PRD for **LinkedIn Saved Jobs**.

Use the following structure:

```text
# Product Requirements Document

## 1. Overview

## 2. Problem Statement

## 3. Target Users

## 4. Goals

## 5. Non-Goals

## 6. Success Metrics

## 7. Scope

### In Scope

### Out of Scope

## 8. User Stories

## 9. Functional Requirements

## 10. Non-Functional Requirements

## 11. Business Rules

## 12. Edge Cases

## 13. Dependencies

## 14. Assumptions

## 15. Open Questions
```

Don't copy the example from this lesson.

Create your own version.

---

# 63. Advanced Exercise

Now create a PRD for a product you know well.

Choose one:

* Trading platform
* Crypto exchange
* Insurance platform
* Banking app
* E-commerce platform
* SaaS product

Pick **one problem**, not an entire product.

Then write:

1. Problem statement
2. Target users
3. Evidence
4. Goals
5. Non-goals
6. Success metrics
7. MVP scope
8. User stories
9. Functional requirements
10. Acceptance criteria
11. Edge cases
12. Dependencies
13. Constraints
14. Assumptions
15. Open questions

The goal is not to write a long document.

The goal is to practice **clear product thinking**.

---

# 64. PM Interview Questions

## Question 1: What is a PRD?

A PRD is a document that communicates the problem, target users, desired outcomes, scope, requirements, constraints, assumptions, and success criteria for a product initiative.

---

## Question 2: What makes a good PRD?

A good PRD creates shared understanding without unnecessarily prescribing the implementation. It clearly explains the problem, desired outcome, scope, requirements, edge cases, constraints, and success metrics.

---

## Question 3: How detailed should a PRD be?

It should contain enough detail to eliminate ambiguity and allow design, engineering, and QA to work effectively, but not so much detail that it unnecessarily restricts the team's solution.

---

## Question 4: What's the difference between a user story and acceptance criteria?

A user story describes what a user wants to accomplish and why. Acceptance criteria define the conditions that must be satisfied for that requirement to be considered complete.

---

## Question 5: Should a PM write technical requirements?

A PM should document technical constraints, dependencies, and requirements that affect the product behavior or business outcome. Detailed implementation decisions should generally be developed collaboratively with engineering rather than unnecessarily prescribed by the PM.

---

## Question 6: What should you do if engineering says a requirement isn't feasible?

First understand the technical constraint and why the requirement is difficult. Then work with engineering and design to explore alternative ways to achieve the underlying customer or business outcome. The goal should be to preserve the outcome rather than blindly defend the original solution.

---

# 65. Key Takeaways

1. **A PRD creates shared understanding around a product initiative.**
2. Start with the **problem**, not the feature.
3. Clearly define the target users.
4. Define measurable goals and outcomes.
5. Explicitly define non-goals and scope.
6. User stories describe user needs.
7. Functional requirements describe product behavior.
8. Non-functional requirements describe qualities and constraints.
9. Acceptance criteria make requirements testable.
10. Business rules define important product behavior and policies.
11. Edge cases describe important non-happy-path scenarios.
12. Dependencies and constraints should be visible.
13. Assumptions should be documented and validated when important.
14. Success metrics should measure outcomes, not just outputs.
15. MVP scope protects the team from unnecessary complexity.
16. A PRD should not unnecessarily dictate UI or technical implementation.
17. Good PRDs are collaborative documents.
18. The right PRD length depends on the complexity of the initiative.
19. Requirements should be clear enough to eliminate ambiguity but flexible enough to allow better solutions.
20. The ultimate purpose of a PRD is not documentation itself; it is to help the team **build the right thing, for the right users, for the right reasons**.

# Preview of Day 36

## Agile Product Management & Scrum

Topics:

* What Agile is
* Why Agile was created
* Agile principles
* Agile vs. Waterfall
* Scrum framework
* Scrum roles
* Product Owner vs. Product Manager
* Scrum events
* Product Backlog
* Sprint Backlog
* Sprint Planning
* Sprint Goal
* Daily Scrum
* Sprint Review
* Sprint Retrospective
* Backlog refinement
* Definition of Ready
* Definition of Done
* User stories
* Story splitting
* Vertical slicing
* Estimation
* Story Points
* Planning Poker
* Velocity
* Burndown and Burnup charts
* Agile roadmaps
* Agile prioritization
* Agile metrics
* Common Agile mistakes
* Role of the Product Manager in Agile teams
* Practical Agile examples
* PM interview questions