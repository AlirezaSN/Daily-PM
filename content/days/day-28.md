# Day 28: Stakeholder Management

## Learning Objectives

By the end of this lesson, you should understand:

- What stakeholder management means
- Who product stakeholders are
- Why stakeholder management matters
- How to identify and map stakeholders
- Power vs Interest analysis
- How to manage executives
- How to work with Engineering and Design
- How to work with Sales, Marketing, and Customer Support
- How to handle conflicting priorities
- How to influence without authority
- How to communicate effectively with different stakeholders
- Common stakeholder management mistakes

---

# Introduction: Product Management Is a Team Sport

A Product Manager rarely builds a product alone.

You work with:

- Engineers
- Designers
- Executives
- Sales
- Marketing
- Customer Support
- Operations
- Legal
- Finance
- Data teams
- Customers

Each group has different goals.

For example:

Engineering may care about:

> Technical quality and maintainability.

Sales may care about:

> Closing customers.

Marketing may care about:

> Acquisition and growth.

Customer Support may care about:

> Reducing customer problems.

Executives may care about:

> Revenue, growth, and strategic objectives.

The PM's job is to create alignment.

---

# What Is Stakeholder Management?

Stakeholder management is the process of:

> Identifying people who can influence or are affected by the product, understanding their interests, and communicating and collaborating with them effectively.

A simple model:

```text id="qz3l2x"
Identify
   ↓
Understand
   ↓
Align
   ↓
Communicate
   ↓
Influence
   ↓
Maintain Relationships
```

---

# Who Is a Stakeholder?

A stakeholder is anyone who:

- Influences the product
- Is affected by the product
- Provides resources
- Makes decisions
- Has important information
- Can block progress

---

# Internal Stakeholders

Examples:

- CEO
- CTO
- CPO
- Engineering
- Design
- Sales
- Marketing
- Finance
- Legal
- Operations
- Customer Support

---

# External Stakeholders

Examples:

- Customers
- Partners
- Suppliers
- Regulators
- Enterprise clients
- Vendors

---

# Why Stakeholder Management Matters

## 1. PMs Usually Don't Have Direct Authority

An Engineering Manager does not necessarily report to the PM.

A designer may not report to the PM.

A salesperson definitely does not report to the PM.

Yet the PM needs their cooperation.

Therefore:

> **Influence is more important than authority.**

---

# 2. Stakeholders Have Different Incentives

Imagine a feature request:

> Enterprise customer wants a custom reporting dashboard.

Sales:

> We need it to close the deal.

Engineering:

> It will take three months.

Product:

> It doesn't align with our strategy.

Customer:

> It's critical for us.

There is no simple answer.

The PM must evaluate the trade-offs.

---

# 3. Misalignment Creates Product Problems

Without stakeholder alignment:

- Priorities change constantly
- Teams work on conflicting initiatives
- Decisions are revisited repeatedly
- Projects get delayed
- Trust decreases

Good stakeholder management reduces these problems.

---

# Stakeholder Mapping

One of the most useful tools is a stakeholder map.

A simple model uses:

- Power
- Interest

---

# Power vs Interest Matrix

```text id="jyt3ps"
                 HIGH INTEREST
                       ↑
       ┌───────────────┬───────────────┐
       │               │               │
       │ KEEP          │ MANAGE        │
       │ INFORMED      │ CLOSELY       │
       │               │               │
LOW    │───────────────┼───────────────│ HIGH
POWER  │               │               │ POWER
       │               │               │
       │ MONITOR       │ KEEP          │
       │               │ SATISFIED     │
       │               │               │
       └───────────────┴───────────────┘
                       ↓
                 LOW INTEREST
```

---

# Quadrant 1: High Power + High Interest

## Manage Closely

These stakeholders are very important.

Examples:

- CEO
- Product leader
- Engineering leader
- Major customer

You should:

- Communicate frequently
- Involve them in important decisions
- Understand their concerns
- Keep them aligned

---

# Quadrant 2: High Power + Low Interest

## Keep Satisfied

They have significant influence but don't need every detail.

Examples:

- CFO
- Senior executive
- Legal leadership

You should:

- Provide important updates
- Communicate major risks
- Avoid unnecessary details

---

# Quadrant 3: Low Power + High Interest

## Keep Informed

Examples:

- Customer support
- Sales representatives
- Internal users

They may care deeply but have limited decision power.

Keep them informed and collect their feedback.

---

# Quadrant 4: Low Power + Low Interest

## Monitor

These stakeholders require minimal communication.

---

# Stakeholder Mapping Example

Imagine you're building a new insurance claims platform.

| Stakeholder | Power | Interest | Approach |
|---|---|---|---|
| CEO | High | Medium | Keep satisfied |
| Product Lead | High | High | Manage closely |
| Engineering | High | High | Manage closely |
| Claims Team | Medium | High | Keep informed |
| Sales | Medium | Medium | Keep informed |
| Finance | High | Low | Keep satisfied |
| Customers | Medium | High | Keep informed |

The exact classification depends on your organization.

---

# Stakeholder Goals

Do not only ask:

> "What does this stakeholder want?"

Ask:

> **"Why do they want it?"**

This is a critical PM skill.

---

# Example

Sales says:

> "We need this feature."

Don't immediately say:

> "Why?"

Instead investigate:

> What customer problem is this solving?

You might discover:

> Sales needs it because three enterprise prospects require the capability.

Now you understand the underlying business need.

---

# Stakeholder Requests vs Problems

A stakeholder usually gives you a solution:

> "Build a dashboard."

Your job is to understand:

> "What problem does the dashboard solve?"

This is the same principle we use with customers.

---

# Example

Sales:

> "Add Excel export."

PM:

> "Why?"

Sales:

> "Customers need to analyze their data."

PM:

> "What are they trying to accomplish?"

Sales:

> "They need monthly financial reports."

Possible solution:

Maybe Excel export is correct.

But perhaps a better solution is:

> Automated financial reporting.

The PM should understand the problem before accepting the proposed solution.

---

# Working With Engineering

Engineering is one of your most important relationships.

A strong PM-engineering relationship requires:

- Mutual respect
- Clear context
- Early involvement
- Honest trade-offs
- Shared goals

---

# Don't Tell Engineers How to Code

Bad PM behavior:

> "Implement it using this architecture."

Unless you have the appropriate technical expertise and context.

Instead:

Explain:

- The problem
- User needs
- Business context
- Constraints
- Desired outcome

Then collaborate on the solution.

---

# Give Engineers Context

Bad:

> "Build this feature by Friday."

Better:

> "Our activation rate is low because many users abandon onboarding. We believe simplifying the process could increase completion. We need to explore the smallest solution that can test this hypothesis."

Now engineers understand:

- Why
- What problem
- What outcome
- What constraint

---

# Involve Engineering Early

Do not:

1. Create a detailed solution
2. Promise it to stakeholders
3. Then ask engineering to build it

Instead:

```text id="n7v4ez"
Problem
   ↓
Discovery
   ↓
Engineering Discussion
   ↓
Solution Exploration
   ↓
Prioritization
   ↓
Execution
```

---

# Working With Design

A strong relationship with Design is similar.

Don't say:

> "Make this screen look better."

Instead explain:

- User problem
- User context
- Business goal
- Constraints
- Evidence

Then let designers explore solutions.

---

# PM + Designer

Think of the relationship as:

```text id="t4ph32"
PM
What problem should we solve?

Designer
How can we solve it for users?

Engineer
How can we build it effectively?
```

These roles overlap, but each brings a different perspective.

---

# Working With Sales

Sales can provide valuable market information.

They know:

- Customer objections
- Competitor behavior
- Enterprise requirements
- Pricing concerns
- Buying patterns

But sales requests should not automatically become roadmap priorities.

---

# Example

Sales:

> "Customer X wants feature Y."

PM response:

Ask:

- How many customers need this?
- Is this a recurring problem?
- Is it strategic?
- How much revenue is involved?
- Is there another solution?
- What is the development cost?

Now you're making a product decision rather than simply accepting a request.

---

# Working With Customer Support

Support teams are an excellent source of product insights.

They know:

- Common problems
- User confusion
- Frequent complaints
- Broken workflows

Create a feedback loop:

```text id="y6pt1n"
Support Tickets
      ↓
Identify Patterns
      ↓
Analyze Root Cause
      ↓
Prioritize Problems
      ↓
Product Improvements
```

Don't simply count tickets.

Look for patterns.

---

# Working With Marketing

Marketing can help with:

- Positioning
- Messaging
- Acquisition
- Customer segmentation
- Launches

PM should collaborate early, especially for major launches.

---

# Working With Executives

Executives usually care about:

- Business outcomes
- Strategic alignment
- Revenue
- Growth
- Risks
- Investment

They generally don't need every implementation detail.

---

# Executive Communication

Instead of:

> "The API integration is 60% complete and engineering finished endpoint X."

Say:

> "The integration is on track for the planned launch. The main remaining risk is partner API stability."

Focus on:

- Outcomes
- Progress
- Risks
- Decisions needed

---

# Managing Up

"Managing up" means helping your manager and leadership understand:

- What is happening
- Why it matters
- What decisions are needed
- Where risks exist

It does not mean manipulating leadership.

It means:

> Making important information visible and actionable.

---

# Communicating With Different Stakeholders

The same information should often be presented differently.

Example:

Product initiative:

> Improve onboarding.

### CEO

> Expected to increase activation by 15%.

### Engineering

> Requires changes to authentication and onboarding services.

### Design

> Need to reduce cognitive load during signup.

### Sales

> New customers should experience a faster setup process.

### Support

> Fewer users should need help completing signup.

Same initiative.

Different communication.

---

# Influence Without Authority

This is one of the defining PM skills.

You influence people through:

- Data
- Customer evidence
- Clear reasoning
- Trust
- Relationships
- Communication
- Shared goals

---

# Five Ways to Influence

## 1. Use Evidence

Instead of:

> "I think we should build this."

Say:

> "35% of users abandon the process at this step."

Evidence makes discussions stronger.

---

# 2. Connect to Shared Goals

Instead of:

> "I want this feature."

Say:

> "This could help us achieve our activation OKR."

Now the conversation is about a shared objective.

---

# 3. Make Trade-offs Explicit

Instead of:

> "We can't do this."

Say:

> "We can do this, but it means delaying the retention initiative by approximately four weeks."

This makes the cost visible.

---

# 4. Build Relationships Before You Need Them

Stakeholder management should not start when there is a conflict.

Build trust continuously.

---

# 5. Listen

Influence isn't only persuasion.

Sometimes the stakeholder has information you don't.

Ask:

> "What am I missing?"

This question can be extremely powerful.

---

# Handling Conflicting Stakeholders

Imagine:

CEO:

> Prioritize revenue.

Customer Support:

> Fix reliability.

Engineering:

> Reduce technical debt.

Sales:

> Build enterprise features.

Who is right?

Possibly everyone.

The PM needs to understand:

- Strategic priorities
- Customer impact
- Business impact
- Risks
- Cost
- Timing

---

# Conflict Resolution Framework

When stakeholders disagree:

## Step 1

Define the decision.

> What exactly are we disagreeing about?

---

## Step 2

Understand each perspective.

> Why does each stakeholder want this?

---

## Step 3

Bring evidence.

- Customer data
- Business data
- Research
- Technical estimates

---

## Step 4

Define decision criteria.

Example:

- Customer impact
- Business impact
- Strategic alignment
- Effort
- Risk

---

## Step 5

 Make the trade-off explicit.

---

## Step 6

Make a decision.

---

## Step 7

Communicate the decision and reasoning.

---

# Example Conflict

Sales:

> Build enterprise reporting.

Engineering:

> Fix technical debt.

Product:

> Improve onboarding.

Instead of arguing:

> Which team wins?

Define a decision framework:

| Criterion | Enterprise Reporting | Technical Debt | Onboarding |
|---|---:|---:|---:|
| Customer impact | High | Medium | High |
| Revenue impact | High | Low | Medium |
| Strategic alignment | Medium | High | High |
| Effort | High | Medium | Low |
| Urgency | High | Medium | High |

Now the discussion becomes more objective.

---

# Decision-Making Principles

A good PM should:

### Make decisions with the best available information.

Not:

> Perfect information.

Perfect information rarely exists.

---

# Decision Logs

For important decisions, document:

- Decision
- Context
- Options considered
- Decision
- Reason
- Data/evidence
- Date
- Owner

Example:

```text id="w1jv0a"
Decision:
Prioritize onboarding improvements.

Reason:
Activation is below target and onboarding is the
largest identified conversion drop-off.

Alternatives:
Enterprise reporting
Technical debt

Decision date:
May 10

Owner:
Product Manager
```

Decision logs prevent repeated debates.

---

# Common Stakeholder Management Mistakes

## Mistake #1: Trying to Make Everyone Happy

Impossible.

Your job is to make the best product decision.

---

# Mistake #2: Avoiding Conflict

Healthy disagreement can improve decisions.

Don't avoid difficult conversations.

---

# Mistake #3: Saying "No" Without Explanation

Instead of:

> "No."

Explain:

> "Not now, because we're focusing on X. If this becomes more important, we can revisit it."

---

# Mistake #4: Over-Communicating Everything

More communication is not always better.

Give stakeholders the information they need.

---

# Mistake #5: Surprising Stakeholders

If a major decision affects someone, don't let them discover it from a roadmap update.

Communicate early.

---

# Mistake #6: Treating Stakeholders as Obstacles

Stakeholders often have valuable context.

Treat them as information sources and partners.

---

# Mistake #7: Over-Promising

Never promise something just to satisfy a stakeholder.

Especially when you don't control delivery.

---

# Interview Question

## Question

How do you handle conflicting stakeholder priorities?

## Strong Answer

I first clarify the underlying goals and problems behind each request. Then I evaluate the options using shared criteria such as customer impact, business value, strategic alignment, effort, and risk. I use evidence wherever possible, make trade-offs explicit, and communicate the final decision and reasoning clearly. The goal is not to make everyone happy, but to make the best product decision and maintain stakeholder trust.

---

# Interview Question 2

## Question

How do you influence teams without authority?

## Strong Answer

I build influence through trust, context, evidence, and shared goals. I involve stakeholders early, explain the customer and business problem rather than dictating solutions, and use data to support decisions. I also make trade-offs transparent so teams understand why a decision was made.

---

# Mini Case Study

You are the PM of an insurance platform.

Your stakeholders have different requests:

### Sales

> "We need a new enterprise reporting feature."

### Customer Support

> "Users are confused during claims submission."

### Engineering

> "We need time to reduce technical debt."

### Executive Team

> "We need to improve revenue this quarter."

You have limited engineering capacity.

---

## Your Task

Determine:

### 1. Who are the key stakeholders?

---

### 2. What does each stakeholder care about?

---

### 3. What is their level of power and interest?

---

### 4. What evidence would you collect?

---

### 5. How would you prioritize the competing requests?

---

### 6. How would you communicate your decision?

---

# Key Takeaways

1. Product Management is largely about alignment and influence.
2. Stakeholders can be internal or external.
3. Different stakeholders have different incentives.
4. Understand the problem behind stakeholder requests.
5. Use Power vs Interest to map stakeholders.
6. Engineers and designers should be involved early.
7. Sales and Support are valuable sources of customer insight.
8. Executives usually care about outcomes, risks, and strategy.
9. Influence comes from trust, evidence, context, and shared goals.
10. Make trade-offs explicit.
11. Healthy disagreement can improve product decisions.
12. You don't need to make everyone happy—you need to make good decisions.

---

# Day 28 Exercise

Choose a product you know well.

For example:

- LinkedIn
- Banking app
- Stock trading platform
- Insurance platform
- E-commerce product

Create a **Stakeholder Map**.

## Step 1: List 10 Stakeholders

Include different functions.

Example:

- CEO
- Engineering
- Design
- Sales
- Marketing
- Customer Support
- Finance
- Legal
- Operations
- Customers

---

## Step 2: Score Each Stakeholder

For each stakeholder, estimate:

- Power: Low / Medium / High
- Interest: Low / Medium / High

---

## Step 3: Identify Their Goals

For each stakeholder, answer:

> What does this person/team care about?

---

## Step 4: Identify Potential Conflicts

Write at least three potential conflicts.

Example:

> Sales wants customization, while Product wants scalability.

---

## Step 5: Create a Communication Plan

For each important stakeholder define:

- What they need to know
- How often to communicate
- Communication format
- Level of detail

---

# PM Reflection

Think about your current product.

Ask:

- Who has the most influence over product decisions?
- Who has the most customer knowledge?
- Who can block progress?
- Which stakeholders are currently misaligned?
- Am I involving Engineering and Design early enough?
- Do stakeholders understand the "why" behind our priorities?
- Do I communicate bad news early?
- Do I make trade-offs explicit?

Remember:

> **A Product Manager's influence comes less from authority and more from clarity, evidence, trust, and alignment.**

---

# Preview of Day 29

## Product Communication & Storytelling

Topics:

- Why communication is a core PM skill
- Communicating with executives
- Product storytelling
- Structuring product presentations
- Writing effective product documents
- Data storytelling
- Presenting product decisions
- Communicating bad news
- Handling difficult questions
- Executive-level communication