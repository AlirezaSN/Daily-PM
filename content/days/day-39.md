# Day 39: Working Effectively with Engineering & Design

## Learning Objectives

By the end of this lesson, you should understand:

- How Product Managers work with Engineering and Design
- The responsibilities of PMs, Designers, and Engineers
- How to build strong cross-functional relationships
- How to communicate effectively with technical teams
- How to communicate effectively with designers
- How to involve engineers and designers in discovery
- How to work with technical constraints
- How to handle disagreements
- How to make trade-offs
- How to balance product quality, speed, and scope
- How to work with technical debt
- How to participate effectively in planning and execution
- How to avoid common PM mistakes when working with engineering
- What makes a strong cross-functional product team

---

# 1. Why Cross-Functional Collaboration Matters

Product development is not an individual activity.

A PM cannot successfully build a product alone.

A typical product team may include:

- Product Manager
- Product Designer
- Engineers
- QA
- Data Analysts
- Researchers
- Marketing
- Operations
- Customer Support

Among these roles, the PM often works most closely with:

> **Engineering and Design**

The PM understands the problem and desired outcome.

The Designer focuses on the user experience.

The Engineers determine how the solution can be built.

Successful products emerge when these perspectives work together.

---

# 2. The Product Trio

A common model is the **Product Trio**:

```text
              Product
                 |
        +--------+--------+
        |                 |
     Design          Engineering
````

The three perspectives are:

### Product

> What problem should we solve and why?

### Design

> How should the experience work for the user?

### Engineering

> How can we build it effectively and reliably?

The strongest teams don't operate sequentially.

Instead, they collaborate throughout discovery and delivery.

---

# 3. The Wrong Model

A weak product development process often looks like:

```text
PM
 ↓
Writes requirements
 ↓
Designer
 ↓
Creates designs
 ↓
Engineer
 ↓
Builds the product
```

This creates several problems.

Engineers may discover technical problems too late.

Designers may discover usability problems after the requirements are already finalized.

The PM may make assumptions that neither design nor engineering agrees with.

---

# 4. A Better Model

A stronger process looks like:

```text
       Product
       /      \
      /        \
 Design ------- Engineering
      \        /
       \      /
       Discovery
          ↓
       Solution
          ↓
       Delivery
          ↓
        Learning
```

The team collaborates continuously.

For example:

> PM identifies a customer problem.

The designer helps understand the experience.

The engineer identifies technical constraints.

Together, the team explores possible solutions.

---

# 5. PM Responsibilities

The PM is generally responsible for:

* Understanding customer problems
* Defining product goals
* Setting priorities
* Establishing product direction
* Communicating context
* Making product decisions
* Aligning stakeholders
* Measuring outcomes

The PM is **not** necessarily responsible for:

* Designing every screen
* Writing production code
* Managing every engineering task
* Making every technical decision

The PM owns the **product problem and outcome**, not every implementation detail.

---

# 6. Designer Responsibilities

A product designer typically focuses on:

* User experience
* Interaction design
* Information architecture
* Visual design
* Usability
* Prototyping
* User testing

The designer should help answer:

> "How can we make this solution useful and easy to use?"

A PM shouldn't dictate every design decision.

Instead, the PM should provide:

* Context
* User problem
* Constraints
* Goals
* Success criteria

Then collaborate with the designer on the solution.

---

# 7. Engineering Responsibilities

Engineers are responsible for turning product solutions into working software.

They contribute to:

* Technical architecture
* Implementation
* Scalability
* Performance
* Security
* Reliability
* Testing
* Technical feasibility

Engineers should not be treated simply as:

> "People who implement PM requirements."

They are product problem-solvers with technical expertise.

---

# 8. Engineers Should Be Involved Early

Consider this situation.

A PM proposes:

> "Users should be able to upload unlimited video files."

The designer creates the experience.

The requirements are finalized.

Then engineering says:

> "This would require significant infrastructure changes and storage costs."

The team has discovered the constraint too late.

A better approach is to involve engineering early.

The engineer might suggest:

> "We could limit file size, compress videos, or use asynchronous processing."

Now the team can explore better solutions.

---

# 9. Engineers Are Part of Product Discovery

Engineering involvement shouldn't begin only after discovery is complete.

Engineers can contribute during:

* Problem exploration
* Solution ideation
* Feasibility analysis
* Experiment design
* MVP definition
* Technical risk assessment

For example:

> "Could we test this idea without building the entire system?"

An engineer might propose a lightweight technical experiment.

This can significantly reduce development effort.

---

# 10. Design Should Also Be Involved Early

The same principle applies to designers.

Instead of:

> PM defines everything → Designer creates screens

use:

> PM + Designer explore the problem together.

The designer may discover:

* Users don't understand the terminology.
* The workflow has too many steps.
* The problem could be solved without a new feature.
* The proposed solution creates another usability problem.

Early collaboration improves the solution before development begins.

---

# 11. Give Context, Not Just Requirements

Compare these two requests.

### Poor

> "Add a filter for transaction date."

### Better

> "Users reviewing their transaction history need to find transactions from a specific period. Currently they have to scroll through the entire list. We want to reduce the time required to find a specific transaction."

The second version provides context.

The team can now consider multiple solutions.

Maybe the best solution is:

* Date filter
* Search
* Preset periods
* Sorting
* Better transaction grouping

The PM should communicate the **problem and outcome**, not prematurely dictate the implementation.

---

# 12. Outcome vs. Output

An output is something the team builds.

Example:

> Add date filtering.

An outcome is what changes for the user.

Example:

> Users can find a specific transaction significantly faster.

The PM should focus primarily on outcomes.

The feature is a means to achieve the outcome.

---

# 13. Don't Become the Engineering Manager

A common PM mistake is trying to manage engineering tasks at a microscopic level.

For example:

> "You should implement this using this class."

> "This API should have exactly these endpoints."

> "You should use this database structure."

Unless the PM has a specific technical responsibility, these decisions should generally be owned by engineers.

The PM should communicate:

* What problem needs solving
* Why it matters
* Desired outcome
* Constraints
* Priority

Engineering should generally determine:

> How to build it.

---

# 14. Don't Become the Designer

The same principle applies to design.

A PM shouldn't normally say:

> "Move this button 8 pixels to the left."

Instead:

> "Users are missing this action during onboarding."

Then work with the designer to determine the best solution.

The PM should challenge the experience when necessary, but shouldn't replace design expertise.

---

# 15. Technical Constraints

Every product has technical constraints.

Examples:

* Legacy systems
* API limitations
* Infrastructure capacity
* Security requirements
* Data limitations
* Performance constraints
* Third-party dependencies
* Compliance requirements

A PM should understand these constraints without becoming the technical owner.

The goal is:

> **Understand enough technology to make good product decisions.**

---

# 16. Technical Feasibility

Suppose the product idea is:

> "Show real-time fraud detection results before every transaction."

Engineering may explain:

* Existing APIs are not real-time.
* Processing takes several seconds.
* The current architecture can't support the expected volume.

The PM shouldn't simply respond:

> "We need it anyway."

Instead, explore alternatives:

* Can we use asynchronous processing?
* Can we check only high-risk transactions?
* Can we improve the existing process incrementally?
* Can we build a prototype first?

Product management is often about finding a workable balance.

---

# 17. Trade-Offs

Product decisions usually involve trade-offs.

You may need to balance:

* Scope
* Time
* Cost
* Quality
* User experience
* Technical complexity
* Risk

For example:

```text
Better UX
    ↑
    |
More complexity
    |
    ↓
Longer development time
```

There is rarely a perfect solution.

The PM's job is to make the trade-offs explicit.

---

# 18. The Scope-Time-Quality Trade-Off

Suppose a feature requires:

> 8 weeks

but you only have:

> 4 weeks.

You have several options:

### Reduce scope

Build fewer capabilities.

### Increase resources

Add engineers if possible.

### Extend timeline

Launch later.

### Reduce quality

Usually dangerous if it affects reliability, security, or critical user experience.

A strong PM doesn't simply say:

> "Make it faster."

They ask:

> "What can we change to achieve the most important outcome within our constraints?"

---

# 19. MVP and Engineering

MVP doesn't mean:

> "Build a bad version."

It means:

> Build the smallest version capable of testing an important assumption or delivering meaningful value.

Suppose you want to build:

> A complex personalized recommendation engine.

Instead of building the entire system, the MVP might use:

* Simple rules
* Manual curation
* Existing infrastructure

If users don't find the recommendations valuable, you've avoided significant engineering investment.

---

# 20. Technical Debt

**Technical debt** refers to the future cost created by shortcuts or suboptimal technical decisions.

For example:

> The team builds a quick solution to meet a deadline.

The solution works.

But later:

* Changes become harder.
* Bugs increase.
* Performance decreases.
* Development slows down.

This accumulated cost is technical debt.

---

# 21. Technical Debt Isn't Always Bad

Technical debt can sometimes be a reasonable trade-off.

For example:

> "We need to validate this hypothesis quickly."

A lightweight implementation may be appropriate.

The problem is when technical debt becomes:

> invisible, unmanaged, and permanent.

A PM should understand the business impact of technical debt.

---

# 22. How Technical Debt Affects Product

Technical debt can lead to:

* Slower feature development
* More bugs
* Higher maintenance costs
* Reduced reliability
* Poor performance
* Increased developer frustration

Eventually, it can reduce the product team's ability to deliver customer value.

Therefore:

> Technical health is part of product health.

---

# 23. How Should PMs Prioritize Technical Debt?

Don't prioritize technical debt only because:

> "Engineering wants it."

Connect it to product impact.

For example:

### Technical issue

Legacy payment service.

### Product impact

Payment failures increase by 2%.

### Business impact

Revenue loss and customer frustration.

Now the technical work has a clear product rationale.

---

# 24. Definition of Done

The team should agree on what it means for work to be complete.

A Definition of Done may include:

* Code implemented
* Code reviewed
* Tests completed
* Design implemented
* Analytics added
* Accessibility checked
* Documentation updated
* Monitoring configured
* Product acceptance completed

The exact definition depends on the team.

---

# 25. Acceptance Criteria

Acceptance criteria define conditions that must be satisfied for a requirement to be considered complete.

Example:

> Users should be able to filter transactions by date.

Acceptance criteria:

* User can select a start date.
* User can select an end date.
* Results include transactions within the selected period.
* Invalid date ranges are handled.
* Empty results have an appropriate state.

Good acceptance criteria reduce ambiguity.

---

# 26. Don't Over-Specify the Solution

A common PM mistake is writing extremely detailed instructions:

```text
Click button X.
Open modal Y.
Use dropdown Z.
Call API A.
Send parameter B.
Store result in database C.
```

This may unnecessarily constrain engineering and design.

Instead, specify:

* User problem
* Desired behavior
* Business rules
* Constraints
* Acceptance criteria

Then let specialists determine implementation details.

---

# 27. Handling Disagreements

Disagreements are normal.

Examples:

### PM vs. Engineering

> "This feature is too expensive."

### PM vs. Design

> "This experience isn't intuitive."

### Engineering vs. Design

> "This design is difficult to implement."

The goal isn't to eliminate disagreement.

The goal is to resolve disagreement constructively.

---

# 28. A Good Disagreement Process

When disagreement occurs:

### Step 1 — Clarify the issue

What exactly do we disagree about?

### Step 2 — Understand the reasoning

Why does each person believe their approach is better?

### Step 3 — Return to the goal

What user or business outcome are we trying to achieve?

### Step 4 — Explore alternatives

Can we find another solution?

### Step 5 — Evaluate trade-offs

Compare:

* Impact
* Effort
* Risk
* Time
* Quality

### Step 6 — Decide

Someone needs to make the decision.

---

# 29. Don't Use Authority to Win

Bad:

> "I'm the PM, so we're doing it this way."

Better:

> "Our primary goal is to improve activation. Option A provides more impact but requires three weeks. Option B provides slightly less impact and can be delivered in one week. Which approach gives us the best trade-off?"

Data and reasoning are generally more effective than authority.

---

# 30. Product Decisions vs. Technical Decisions

A useful distinction:

### Product Decision

> Should we build this?

### Product Experience Decision

> What should the user experience look like?

### Technical Decision

> How should we build it?

The boundaries aren't absolute, but this distinction helps teams avoid unnecessary conflict.

---

# 31. Working With Estimates

Engineers may estimate:

> 3 weeks.

Don't immediately treat that as a fixed commitment.

Ask:

> "What makes this three weeks?"

You may discover:

* 1 week implementation
* 1 week integration
* 3 days testing
* 2 days deployment

Now you understand the estimate.

You can also ask:

> "What would reduce this to one week?"

This may reveal scope-reduction opportunities.

---

# 32. Estimation Is Not Negotiation

A common mistake is:

> Engineer: "This takes four weeks."

> PM: "It has to take two."

This isn't productive.

Instead:

> "We need something usable in two weeks. What scope could we remove to make that possible?"

This turns a conflict into a problem-solving conversation.

---

# 33. Product Manager as a Translator

PMs often translate between different perspectives.

### Customer language

> "I can't find my previous transactions."

### Product language

> "Transaction discovery has poor usability."

### Design language

> "The current information architecture makes historical transactions difficult to scan."

### Engineering language

> "The current API doesn't support efficient historical filtering."

The PM helps connect these perspectives.

---

# 34. Communication With Engineers

When discussing a feature, communicate:

### Context

Why are we doing this?

### Problem

What user problem exists?

### Goal

What outcome do we want?

### Priority

Why now?

### Constraints

What limitations exist?

### Acceptance criteria

What must be true when we're done?

### Open questions

What remains uncertain?

This provides enough context without dictating implementation.

---

# 35. Communication With Designers

When working with designers, communicate:

* Target user
* User problem
* Context
* Desired outcome
* Constraints
* Existing research
* Business requirements
* Success criteria

Then collaborate on:

* User flow
* Information architecture
* Interaction
* Visual design
* Usability

---

# 36. Shared Ownership

Strong teams don't say:

> "That's the PM's problem."

or:

> "That's engineering's problem."

Instead:

> "That's our product problem."

For example:

If users are unable to complete payment:

* PM investigates the user/business impact.
* Designer investigates the experience.
* Engineer investigates technical causes.
* Together they identify the best solution.

---

# 37. The PM Should Create Clarity

One of the PM's most valuable contributions is reducing ambiguity.

Before development, the team should understand:

```text
Why?
 ↓
What problem?
 ↓
For whom?
 ↓
What outcome?
 ↓
What constraints?
 ↓
What solution are we testing?
 ↓
How will we measure success?
```

If these questions are unclear, development may move quickly in the wrong direction.

---

# 38. Psychological Safety

Strong product teams need an environment where people can say:

> "I don't think this will work."

without being punished.

Engineers should be able to challenge product assumptions.

Designers should be able to challenge UX decisions.

PMs should be able to challenge technical assumptions.

The objective is not to protect ideas.

The objective is to find the best solution.

---

# 39. Healthy Product Team Culture

A healthy team typically has:

* Shared goals
* Clear ownership
* Open communication
* Mutual respect
* Data-informed decisions
* Fast feedback
* Willingness to experiment
* Constructive disagreement
* Clear priorities
* Accountability

A dysfunctional team often has:

* Siloed roles
* Blame
* Constant interruptions
* Unclear priorities
* Micromanagement
* Decisions based on hierarchy
* Late discovery of constraints

---

# 40. Common PM Mistakes

Avoid these behaviors:

### 1. Throwing requirements over the wall

> "Here is the PRD. Build it."

### 2. Micromanaging engineering

> "Implement it exactly this way."

### 3. Micromanaging design

> "Move this button."

### 4. Ignoring technical debt

> "We only care about features."

### 5. Treating estimates as commitments

> "You said two weeks, so it must be two weeks."

### 6. Excluding engineers from discovery

> "We'll ask them after we decide."

### 7. Excluding designers from problem discovery

> "Design starts after requirements are finished."

### 8. Using authority instead of reasoning

> "I'm the PM, so this is the decision."

---

# 41. A Practical Collaboration Workflow

A strong workflow can look like:

```text
Customer Problem
       ↓
PM + Design + Engineering
       ↓
Problem Understanding
       ↓
Solution Exploration
       ↓
Technical Feasibility
       ↓
Prototype / Experiment
       ↓
Scope Definition
       ↓
Development
       ↓
QA & Validation
       ↓
Launch
       ↓
Measure
       ↓
Learn
```

The team should collaborate throughout this process.

---

# 42. Example: Building a New Payment Method

Imagine a fintech product wants to add:

> Apple Pay support.

### PM

Understands:

* Customer demand
* Business opportunity
* Expected impact
* Target users

### Designer

Explores:

* Payment flow
* User experience
* Error states
* Confirmation experience

### Engineer

Investigates:

* API integration
* Security
* Platform limitations
* Backend requirements
* Transaction processing

### Together

The team determines:

* MVP scope
* Technical approach
* Launch criteria
* Success metrics

This is cross-functional product development.

---

# 43. Product Team Decision Framework

When evaluating a solution, consider:

```text
Customer Value
      +
Business Value
      +
Technical Feasibility
      +
UX Quality
      +
Strategic Fit
      +
Risk
      ↓
Product Decision
```

No single function should evaluate the solution alone.

---

# 44. The Best PMs Don't Have All the Answers

A common misconception is:

> "A good PM should always know what to build."

In reality, strong PMs know how to:

* Ask good questions
* Bring the right people together
* Make assumptions explicit
* Facilitate decisions
* Manage trade-offs
* Learn quickly
* Change direction when evidence changes

The PM doesn't need to be the smartest person in every discipline.

The PM needs to help the team make good decisions.

---

# 45. Key Takeaways

1. Product development is a cross-functional activity.
2. PMs, designers, and engineers should collaborate throughout discovery and delivery.
3. The PM owns product outcomes, not every implementation detail.
4. Engineers are product partners, not simply requirement executors.
5. Designers should be involved in problem discovery, not just visual design.
6. Give teams context rather than only instructions.
7. Focus on outcomes rather than outputs.
8. Involve engineering early to identify technical constraints.
9. Involve design early to identify usability opportunities.
10. Technical debt can have significant product consequences.
11. Technical debt should be prioritized based on its product and business impact.
12. Estimates should be used for planning and trade-offs, not as weapons for negotiation.
13. When scope must decrease, reduce scope instead of blindly demanding faster execution.
14. Acceptance criteria reduce ambiguity.
15. Avoid over-specifying implementation details.
16. Disagreements are healthy when handled constructively.
17. Product decisions should be based on goals, evidence, and trade-offs rather than authority.
18. A PM often acts as a translator between customers, business, design, and engineering.
19. Psychological safety enables teams to challenge assumptions.
20. The strongest product teams share ownership of outcomes.
21. Good collaboration creates clarity around why, what, and how.
22. The PM's job is not to have every answer.
23. The PM's job is to help the team find and execute the best path toward the desired outcome.

---

# Practical Exercise

Imagine you're the PM of a fintech trading platform.

The company wants to introduce:

> "One-click trading."

Before discussing implementation, answer:

### 1. What user problem are we trying to solve?

### 2. Who experiences this problem?

### 3. What outcome do we want?

### 4. What questions should we ask the designer?

### 5. What questions should we ask engineering?

### 6. What technical constraints might exist?

### 7. What risks should we consider?

### 8. What could the MVP look like?

### 9. What could we measure after launch?

### 10. What guardrail metrics would you monitor?

The goal isn't to design the feature immediately.

The goal is to practice thinking like a PM working **with** engineering and design rather than simply giving them requirements.

# Preview of Day 40

## Product Delivery & Execution

Topics:

* Product delivery vs. product discovery
* From validated idea to implementation
* Breaking initiatives into smaller deliverables
* Epics, features, and user stories
* Sprint planning
* Backlog management
* Working with engineering during execution
* Managing scope during development
* Handling blockers and dependencies
* Managing changing requirements
* Release planning
* Release readiness
* QA and acceptance
* Launch checklists
* Feature flags
* Incremental releases
* Monitoring after launch
* Post-launch validation
* Handling production issues
* Balancing speed and quality
* Common execution mistakes
* How PMs ensure successful delivery
