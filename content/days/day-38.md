# Day 38: Product Roadmapping & Prioritization

## Learning Objectives

By the end of this lesson, you should understand:

- What a product roadmap is
- Why product teams use roadmaps
- The difference between strategy, roadmap, backlog, and release plan
- Different types of product roadmaps
- Outcome-based vs. feature-based roadmaps
- Roadmap horizons
- Now / Next / Later planning
- Prioritization principles
- RICE
- ICE
- MoSCoW
- Value vs. Effort
- Cost of Delay
- WSJF
- Opportunity Scoring
- Impact vs. Confidence
- How to handle dependencies
- How to consider technical debt
- How to handle stakeholder requests
- How to communicate a roadmap
- How to deal with uncertainty and changing priorities
- Common roadmap mistakes
- How to build a practical roadmap

---

# 1. What Is a Product Roadmap?

A **product roadmap** is a communication and planning tool that shows the product's direction and the major initiatives the team expects to work on over a period of time.

A roadmap answers questions such as:

- What are we planning to work on?
- Why are we working on it?
- What outcomes are we trying to achieve?
- What is the approximate timing?
- What are our current priorities?

A roadmap should help people understand:

> **Where the product is going and what we currently believe we need to do to get there.**

---

# 2. A Roadmap Is Not a Promise

One of the most important concepts in product management:

> **A roadmap is not necessarily a commitment.**

Product teams learn continuously.

New information can change priorities.

For example:

```text
January
    ↓
Plan: Improve onboarding
    ↓
February
    ↓
Research reveals payment failure is a bigger problem
    ↓
Priority changes
    ↓
March
    ↓
Payment reliability becomes the priority
````

A good roadmap should be able to change when evidence changes.

---

# 3. Why Do We Need a Roadmap?

A roadmap helps align:

* Product
* Engineering
* Design
* Marketing
* Sales
* Customer support
* Operations
* Leadership

Without alignment, different teams may have different assumptions.

For example:

> Sales expects an enterprise feature next month.

> Engineering expects to work on infrastructure.

> Product expects to improve onboarding.

A roadmap can expose these differences.

---

# 4. Roadmap vs. Strategy

This distinction is critical.

### Strategy

> Become the easiest investment platform for first-time investors.

### Roadmap

```text
Q1
Simplify onboarding

Q2
Improve educational guidance

Q3
Improve portfolio experience
```

Strategy answers:

> **Why and where?**

Roadmap answers:

> **What are we planning to do and roughly when?**

The roadmap should be derived from the strategy.

---

# 5. Roadmap vs. Backlog

A **product backlog** contains potential work items.

For example:

* Fix login bug
* Add dark mode
* Improve search
* Add Apple Pay
* Redesign onboarding
* Improve API performance
* Add referral program

A roadmap contains the **higher-priority strategic initiatives**.

Think of it as:

```text
Strategy
   ↓
Roadmap
   ↓
Backlog
   ↓
User Stories
   ↓
Tasks
```

The backlog is much more detailed than the roadmap.

---

# 6. Roadmap vs. Release Plan

A **release plan** is usually more specific about what will be delivered and when.

Example:

### Roadmap

> Improve onboarding in Q1.

### Release Plan

> February 10 — New identity verification flow
> February 24 — New onboarding checklist
> March 10 — Guided account setup

Roadmaps usually operate at a higher level.

---

# 7. What Should Be on a Roadmap?

A good roadmap might contain:

* Strategic themes
* Problems
* Opportunities
* Outcomes
* Initiatives
* High-level timing
* Owners
* Dependencies
* Confidence levels

Avoid filling it with dozens of tiny features.

---

# 8. Feature-Based Roadmap

A traditional roadmap might look like:

| Quarter | Features        |
| ------- | --------------- |
| Q1      | New onboarding  |
| Q1      | Dark mode       |
| Q2      | Referral system |
| Q2      | New dashboard   |
| Q3      | AI chatbot      |

This is easy to understand but has a major problem:

> It focuses on outputs rather than outcomes.

---

# 9. Outcome-Based Roadmap

An outcome-based roadmap focuses on the problem or result.

Example:

| Quarter | Outcome             | Initiative                       |
| ------- | ------------------- | -------------------------------- |
| Q1      | Increase activation | Improve onboarding               |
| Q2      | Increase retention  | Improve first-week experience    |
| Q3      | Increase engagement | Personalized investment guidance |

This is usually more strategically useful.

---

# 10. Feature vs. Outcome

Feature:

> Build a new onboarding flow.

Outcome:

> Increase onboarding completion by 15%.

The feature is one possible way to achieve the outcome.

If research shows another solution works better, you can change the feature without changing the goal.

---

# 11. Theme-Based Roadmap

A theme-based roadmap groups work into strategic areas.

Example:

```text
Q1

Activation
- Simplify onboarding
- Improve identity verification

Trust
- Improve transaction transparency
- Improve error communication

Engagement
- Personalized notifications
- Better portfolio insights
```

This provides more context than a simple feature list.

---

# 12. Now / Next / Later

One of the simplest roadmap formats is:

### Now

Work currently being pursued.

### Next

High-priority work expected to come next.

### Later

Potential opportunities that haven't been committed to.

Example:

```text
NOW
Improve onboarding

NEXT
Improve search

LATER
AI investment assistant
```

This approach avoids false precision.

---

# 13. Why Now / Next / Later Is Useful

Long-term planning is uncertain.

You might be highly confident about next month's work but much less confident about work six months from now.

Therefore:

> **The further into the future you plan, the less precise your roadmap should usually be.**

---

# 14. Roadmap Horizons

A useful model is:

### Horizon 1 — Now

High confidence.

Detailed initiatives are acceptable.

### Horizon 2 — Next

Medium confidence.

Use initiatives or themes.

### Horizon 3 — Later

Low confidence.

Use strategic themes or opportunities rather than detailed features.

```text
Confidence
HIGH ──────────────→ LOW

NOW → NEXT → LATER

Detailed → High-level → Directional
```

---

# 15. The Problem With Dates

Suppose your roadmap says:

> "Launch AI assistant on June 15."

Stakeholders may interpret this as a commitment.

But many factors can change:

* Engineering complexity
* Dependencies
* Research findings
* Bugs
* Regulatory changes
* Business priorities

Instead, you might communicate:

> "AI assistant — Q2"

or:

> "AI assistance — Next"

depending on your level of confidence.

---

# 16. Roadmap Confidence

Not every roadmap item has the same certainty.

You can communicate confidence as:

* High
* Medium
* Low

For example:

| Initiative              | Timing | Confidence |
| ----------------------- | ------ | ---------- |
| Onboarding improvements | Q1     | High       |
| Search redesign         | Q2     | Medium     |
| AI assistant            | Later  | Low        |

This makes uncertainty explicit.

---

# 17. What Is Prioritization?

**Prioritization** is the process of deciding:

> **What should we work on first, given limited resources?**

Resources are limited:

* Engineers
* Designers
* Time
* Money
* Attention
* Organizational capacity

Therefore:

> You cannot do everything.

---

# 18. Why Prioritization Is Difficult

Imagine you have:

* 50 feature requests
* 10 customer problems
* 5 stakeholder requests
* 3 technical debt initiatives

But your team can only complete 10 meaningful initiatives.

You need to decide:

> Which 10 create the most value?

That's prioritization.

---

# 19. Good Prioritization Is Not Just About Impact

A common mistake is:

> "This feature has high impact, so we should build it."

But impact isn't enough.

You should also consider:

* Effort
* Confidence
* Strategic alignment
* Urgency
* Risk
* Dependencies
* Opportunity cost

---

# 20. Opportunity Cost

Every decision has an opportunity cost.

If your team spends three months building Feature A, they cannot spend those three months building Features B and C.

Therefore:

> Choosing one opportunity means giving up another.

Good PMs think about what they are **not** doing.

---

# 21. Prioritization Criteria

Common criteria include:

### Value

How much customer or business value could this create?

### Effort

How much time and resources will it require?

### Confidence

How confident are we in our estimates?

### Strategic Alignment

How strongly does it support our strategy?

### Urgency

How quickly does it need to happen?

### Risk

What happens if we don't do it?

---

# 22. Value vs. Effort

One of the simplest prioritization frameworks is:

> **Value vs. Effort**

Create a matrix:

```text
                 HIGH VALUE
                     ↑
                     |
     QUICK WINS      |      BIG BETS
                     |
---------------------+--------------------→ EFFORT
                     |
     FILL-INS        |      AVOID
                     |
                     ↓
                 LOW VALUE
```

Generally:

* High value + low effort → prioritize
* High value + high effort → evaluate carefully
* Low value + low effort → lower priority
* Low value + high effort → usually avoid

---

# 23. Example: Value vs. Effort

Suppose you have:

| Feature            | Value |    Effort |
| ------------------ | ----: | --------: |
| Improve onboarding |  High |    Medium |
| Dark mode          |   Low |       Low |
| AI assistant       |  High | Very High |
| Minor UI change    |   Low |    Medium |

You wouldn't automatically choose the highest-value feature.

You need to consider the trade-offs.

---

# 24. RICE Framework

**RICE** is a popular prioritization framework.

RICE stands for:

* **Reach**
* **Impact**
* **Confidence**
* **Effort**

Formula:

```text
RICE Score =
(Reach × Impact × Confidence) / Effort
```

It helps compare opportunities using multiple dimensions.

---

# 25. RICE — Reach

**Reach** asks:

> How many users will be affected during a specific period?

Example:

> 20,000 users per quarter.

Reach should be based on a defined period.

For example:

> 20,000 users per quarter

is more useful than:

> Many users.

---

# 26. RICE — Impact

Impact estimates how strongly the initiative will affect each user.

A common scale might be:

```text
3 = Massive
2 = Huge
1 = High
0.5 = Medium
0.25 = Low
```

The exact scale can be adapted.

The important thing is consistency.

---

# 27. RICE — Confidence

Confidence represents how certain you are about your estimates.

For example:

```text
100% = Very confident
80%  = Reasonably confident
50%  = Uncertain
```

Confidence prevents highly speculative opportunities from receiving artificially high scores.

---

# 28. RICE — Effort

Effort estimates how much work is required.

You might estimate:

* Engineering
* Design
* Product
* QA
* Operations

A simple estimate could be:

> 10 person-weeks.

---

# 29. RICE Example

Suppose:

### Feature A

* Reach = 10,000
* Impact = 2
* Confidence = 80%
* Effort = 20

```text
RICE =
(10,000 × 2 × 0.8) / 20
= 800
```

### Feature B

* Reach = 5,000
* Impact = 3
* Confidence = 90%
* Effort = 10

```text
RICE =
(5,000 × 3 × 0.9) / 10
= 1,350
```

Feature B has the higher RICE score.

---

# 30. Limitations of RICE

RICE is useful, but it isn't objective truth.

Problems include:

* Estimates can be wrong.
* Impact can be subjective.
* Reach may be difficult to estimate.
* Strategic importance may not be captured.
* Regulatory work may score poorly despite being mandatory.

Therefore:

> **Use RICE to support judgment, not replace judgment.**

---

# 31. ICE Framework

ICE stands for:

* Impact
* Confidence
* Ease

A common formula:

```text
ICE Score =
Impact × Confidence × Ease
```

It's simpler than RICE.

Use it when:

* You need a lightweight framework.
* Reach is difficult to estimate.
* You have many ideas to evaluate quickly.

---

# 32. ICE Example

Suppose:

| Initiative | Impact | Confidence | Ease |
| ---------- | -----: | ---------: | ---: |
| A          |      8 |        0.8 |    7 |
| B          |      9 |        0.6 |    5 |
| C          |      6 |        0.9 |    9 |

Calculate:

```text
A = 8 × 0.8 × 7 = 44.8

B = 9 × 0.6 × 5 = 27

C = 6 × 0.9 × 9 = 48.6
```

C has the highest score.

---

# 33. MoSCoW Prioritization

MoSCoW divides requirements into:

### Must Have

Required for success.

### Should Have

Important but not essential.

### Could Have

Useful but lower priority.

### Won't Have

Explicitly excluded from the current scope.

Example:

### Launching a payment product

**Must Have**

* Secure payment processing
* Transaction confirmation

**Should Have**

* Payment history filters

**Could Have**

* Custom payment themes

**Won't Have**

* Advanced analytics in v1

---

# 34. MoSCoW's Important Lesson

The most important category is:

> **Won't Have**

Why?

Because prioritization requires explicit exclusion.

If everything is a "Must Have":

> Nothing is prioritized.

---

# 35. Cost of Delay

**Cost of Delay** asks:

> What does it cost us if we wait?

This is particularly useful when timing matters.

Examples:

* Regulatory deadline
* Seasonal opportunity
* Competitor launch
* Contract commitment
* Security vulnerability
* Major customer dependency

A lower-value opportunity may become high priority if delaying it is very expensive.

---

# 36. Example: Cost of Delay

Suppose:

### Feature A

Potential value:

> $1M annually

But there is no urgency.

### Feature B

Potential value:

> $500K annually

But a regulatory deadline is two months away.

Feature B may be more urgent because:

> The cost of delaying it is extremely high.

---

# 37. WSJF

**Weighted Shortest Job First (WSJF)** is commonly associated with scaled Agile environments.

A simplified formula is:

```text
WSJF =
Cost of Delay / Job Size
```

Cost of Delay can incorporate:

* User/business value
* Time criticality
* Risk reduction / opportunity enablement

The idea is:

> Prioritize work that provides significant value or urgency relative to its size.

---

# 38. Opportunity Scoring

Opportunity scoring focuses on customer needs.

A common approach asks customers:

> How important is this outcome?

and:

> How satisfied are you with the current solution?

High importance + low satisfaction can indicate a strong opportunity.

For example:

| Customer Need    | Importance | Satisfaction |
| ---------------- | ---------: | -----------: |
| Fast onboarding  |          9 |            4 |
| Dark mode        |          4 |            7 |
| Better reporting |          8 |            5 |

Fast onboarding may represent a stronger opportunity.

---

# 39. Impact vs. Confidence

Another simple framework is:

> **Impact × Confidence**

Consider:

### Initiative A

High impact, high confidence.

→ Strong candidate.

### Initiative B

High impact, low confidence.

→ Consider experimentation.

### Initiative C

Low impact, high confidence.

→ Possibly useful, but not strategically important.

### Initiative D

Low impact, low confidence.

→ Usually deprioritize.

---

# 40. Prioritization Is Context-Dependent

There is no universal best framework.

For example:

### Startup

May favor:

* Speed
* Learning
* High-impact opportunities

### Enterprise

May need to consider:

* Dependencies
* Compliance
* Stakeholder commitments

### Fintech

May need to heavily consider:

* Regulation
* Risk
* Security
* Financial impact
* Operational requirements

The framework should fit the decision.

---

# 41. Mandatory Work

Some work isn't optional.

Examples:

* Regulatory compliance
* Security vulnerabilities
* Critical production bugs
* Legal requirements
* Infrastructure failures

You shouldn't say:

> "The RICE score is low, so we won't fix the security vulnerability."

Some work is mandatory regardless of its score.

---

# 42. Technical Debt

Technical debt represents shortcuts or technical decisions that create future costs.

Examples:

* Old architecture
* Poor test coverage
* Slow systems
* Fragile integrations
* Outdated dependencies
* Manual processes

Technical debt can reduce product velocity.

---

# 43. Technical Debt vs. Features

Suppose:

> Feature A generates revenue but requires working around a fragile system.

> Feature B improves the underlying architecture.

A PM needs to understand the long-term trade-off.

Technical work may not directly create customer-facing value today, but it can:

* Increase development speed
* Reduce incidents
* Enable future features
* Reduce maintenance cost

---

# 44. Dependencies

A dependency exists when one piece of work depends on another.

Example:

```text
API upgrade
    ↓
New mobile experience
    ↓
Personalization
```

If the API upgrade is delayed, the other initiatives may also be delayed.

Therefore, roadmaps should consider dependencies.

---

# 45. Dependency Types

Common dependencies include:

### Technical

One system needs another.

### Team

Another team must complete work.

### Business

Legal or finance approval is required.

### External

Third-party provider changes are required.

### Regulatory

A regulatory decision or approval is required.

---

# 46. Stakeholder Requests

PMs frequently receive requests from:

* CEO
* Sales
* Marketing
* Customer support
* Operations
* Engineering
* Large customers

The mistake is to automatically add every request to the roadmap.

Instead ask:

> What problem is this request solving?

Then evaluate:

* Customer value
* Business value
* Strategic alignment
* Urgency
* Effort
* Opportunity cost

---

# 47. Example: CEO Request

CEO:

> "We need a referral system."

Bad PM response:

> "Okay, I'll add it to the roadmap."

Better response:

> "What outcome are we trying to achieve?"

Maybe the actual goal is:

> Reduce customer acquisition cost.

Now you can consider:

* Referral program
* Partnerships
* Improved sharing
* Affiliate program
* Better conversion

The feature request becomes a strategic problem.

---

# 48. Stakeholder Prioritization

When stakeholders disagree, create transparency.

For example:

| Initiative | Customer Value | Business Value | Strategic Fit | Effort |
| ---------- | -------------: | -------------: | ------------: | -----: |
| A          |           High |           High |          High | Medium |
| B          |         Medium |           High |           Low |    Low |
| C          |           High |         Medium |          High |   High |

Now discussions can focus on assumptions instead of opinions.

---

# 49. Prioritization Meeting

A good prioritization discussion might follow:

### Step 1

Clarify the objective.

> What are we trying to achieve?

### Step 2

Review opportunities.

> Which problems matter?

### Step 3

Review evidence.

> What do we know?

### Step 4

Evaluate options.

> What could we do?

### Step 5

Discuss trade-offs.

> What are we giving up?

### Step 6

Make the decision.

> What will we prioritize?

### Step 7

Document the rationale.

> Why did we decide this?

---

# 50. Roadmap Communication

Different audiences need different levels of detail.

### Executives

Usually care about:

* Strategic outcomes
* Major initiatives
* Timing
* Business impact
* Risks

### Engineering

Usually needs:

* Problems
* Scope
* Dependencies
* Technical considerations
* Priorities

### Sales

Usually cares about:

* Customer-impacting initiatives
* Expected timing
* Important capabilities

### Customers

Usually need:

* Benefits
* Major improvements
* Reliable expectations

Do not give everyone the same roadmap.

---

# 51. Internal vs. External Roadmaps

### Internal Roadmap

Can include:

* Risks
* Dependencies
* Confidence
* Strategic context
* Internal constraints

### External Roadmap

Should usually be:

* Simpler
* Higher-level
* Carefully worded
* Less commitment-oriented

An external roadmap can create customer expectations.

---

# 52. Roadmap Communication Principle

Don't communicate only:

> "We're building X."

Communicate:

> "We're working on X because we want to improve Y for Z customers."

Example:

> "We're simplifying onboarding to help first-time investors activate faster."

This connects the roadmap to customer value.

---

# 53. Roadmap Changes

Roadmaps will change.

That's normal.

The problem isn't changing the roadmap.

The problem is:

> Changing it without understanding why.

When priorities change, explain:

* What changed?
* What new evidence appeared?
* What is the impact?
* What is being deprioritized?
* What is the new priority?

---

# 54. Example of a Roadmap Change

Original:

```text
Q2
Improve search
```

New customer research reveals:

> Users struggle more with onboarding than search.

Updated roadmap:

```text
Q2
Improve onboarding
```

A good explanation:

> "Research showed that onboarding is responsible for significantly more user drop-off than search. We are therefore reallocating Q2 capacity toward onboarding."

This is a healthy product decision.

---

# 55. Common Roadmap Mistake: Too Much Detail

Bad roadmap:

```text
June 1
Create button component
June 3
Implement API
June 5
Update CSS
June 7
Write tests
...
```

That's a project plan or engineering task list.

A product roadmap should stay at the appropriate level.

---

# 56. Common Roadmap Mistake: Too Many Items

If your roadmap contains 100 initiatives, it becomes difficult to understand.

A roadmap should communicate:

> **Focus.**

Not:

> Everything we might possibly do.

---

# 57. Common Roadmap Mistake: Treating Everything as Equal

If every item has the same visual weight:

```text
Feature A
Feature B
Feature C
Feature D
Feature E
Feature F
```

stakeholders can't tell what matters most.

Use:

* Strategic themes
* Priorities
* Outcomes
* Confidence
* Timing

to communicate importance.

---

# 58. Common Roadmap Mistake: Committing Too Early

Six months from now:

> "We'll launch Feature X on October 12."

You probably don't have enough information.

Instead:

> "Feature X — Later"

or:

> "Q4 — Target"

depending on confidence.

---

# 59. Common Roadmap Mistake: Ignoring Capacity

A roadmap isn't realistic if the team can't execute it.

Consider:

* Engineering capacity
* Design capacity
* QA
* Product capacity
* Operational capacity
* Dependencies
* Planned vacations
* Maintenance work

A roadmap must fit actual organizational capacity.

---

# 60. Capacity Example

Suppose your team has:

* 1 frontend engineer
* 1 backend engineer
* 1 designer
* 1 PM

You cannot plan as if you have:

* 5 frontend engineers
* 5 backend engineers
* 3 designers

Capacity should influence roadmap ambition.

---

# 61. Capacity Planning

A simple model:

```text
Available Capacity
        -
Maintenance
        -
Technical Debt
        -
Operational Work
        ↓
Capacity for New Initiatives
```

If your team has 100 units of theoretical capacity, you may only have 60–70 available for roadmap initiatives.

---

# 62. Roadmap and Agile

Agile doesn't mean:

> "We don't plan."

Agile means:

> Plan while accepting that information will change.

You can have:

* Product strategy
* Quarterly objectives
* Roadmap
* Sprint planning
* Backlog

while remaining adaptable.

---

# 63. Roadmap and Discovery

Discovery should influence the roadmap.

For example:

```text
Potential Opportunity
        ↓
Discovery
        ↓
Evidence
        ↓
Prioritization
        ↓
Roadmap
        ↓
Delivery
```

Don't automatically put every idea on the roadmap before validating it.

---

# 64. Discovery vs. Delivery in Roadmaps

Sometimes the roadmap should include discovery itself.

Example:

> Q2 — Validate whether AI-powered investment guidance can improve investor confidence.

This is different from:

> Q2 — Build AI investment assistant.

The first is a learning initiative.

The second assumes the solution is already known.

---

# 65. Roadmap as a Set of Hypotheses

An advanced way to think about roadmaps:

> **A roadmap represents our current beliefs about where we should invest.**

Each initiative contains assumptions.

For example:

> "Improving onboarding will increase activation."

That's a hypothesis.

Your roadmap should evolve as you learn whether that hypothesis is correct.

---

# 66. Prioritization and Discovery

Suppose two opportunities have similar potential impact.

### Opportunity A

High impact, strong evidence.

### Opportunity B

High potential impact, weak evidence.

You might:

* Build A
* Run discovery on B

This is more sophisticated than simply ranking everything.

---

# 67. Build vs. Learn

Product teams often have two types of work:

### Build

We have enough confidence to implement.

### Learn

We need more evidence before making a significant investment.

A mature roadmap can include both.

---

# 68. A Practical Prioritization Framework

You don't always need a complicated mathematical model.

A practical process:

### Step 1 — Strategic Alignment

Does it support the strategy?

### Step 2 — Customer Value

Does it solve an important problem?

### Step 3 — Business Value

Does it create meaningful business value?

### Step 4 — Urgency

Does timing matter?

### Step 5 — Effort

How much capacity does it require?

### Step 6 — Confidence

How strong is our evidence?

### Step 7 — Opportunity Cost

What are we giving up?

---

# 69. Prioritization Scorecard

You can create a simple table:

| Initiative | Strategic Fit | Customer Value | Business Value | Urgency | Effort | Confidence |
| ---------- | ------------- | -------------- | -------------- | ------- | ------ | ---------- |
| A          | High          | High           | High           | Medium  | Medium | High       |
| B          | Medium        | High           | Medium         | Low     | Low    | Medium     |
| C          | Low           | Medium         | High           | High    | High   | Low        |

The table isn't the decision.

It supports the discussion.

---

# 70. Prioritization Is a Product Decision

Engineers can estimate effort.

Designers can evaluate UX complexity.

Data analysts can provide evidence.

Business stakeholders can explain commercial impact.

But the PM is often responsible for bringing these inputs together and making the product prioritization decision.

---

# 71. Don't Hide Behind Frameworks

A PM should never say:

> "RICE told us to build this."

Instead:

> "This initiative scored highly because it affects a large number of users, has strong evidence of impact, and requires relatively low effort. It also strongly supports our activation strategy."

Frameworks provide structure.

PM judgment makes the decision.

---

# 72. Example: Prioritizing a Fintech Product

Imagine a stock trading platform with these opportunities:

| Opportunity               | Potential Value | Effort    | Urgency   |
| ------------------------- | --------------- | --------- | --------- |
| Improve onboarding        | High            | Medium    | High      |
| Add advanced charting     | Medium          | High      | Low       |
| Improve order reliability | Very High       | Medium    | Very High |
| Dark mode                 | Low             | Low       | Low       |
| Add social trading        | High            | Very High | Low       |

A strong PM may prioritize:

1. Order reliability
2. Onboarding
3. Advanced charting
4. Social trading
5. Dark mode

But the exact ranking depends on strategy and evidence.

---

# 73. Prioritization and Risk

Risk should be explicitly considered.

Examples:

### Product Risk

Users may not want it.

### Technical Risk

It may be difficult to build.

### Business Risk

It may not generate expected value.

### Regulatory Risk

It may violate requirements.

### Operational Risk

It may create support or operational problems.

High-risk initiatives may deserve early validation.

---

# 74. Risk-Adjusted Prioritization

Imagine:

### Initiative A

Potential impact: Very High
Confidence: High
Risk: Low

### Initiative B

Potential impact: Very High
Confidence: Low
Risk: High

A doesn't necessarily mean:

> Build A and ignore B.

For B, you might first:

> Run a discovery experiment.

This reduces uncertainty before committing significant resources.

---

# 75. The Cost of Not Doing Something

Prioritization often focuses on:

> "What value will this create?"

But also ask:

> "What happens if we don't do it?"

Possible consequences:

* Revenue loss
* Customer churn
* Regulatory penalties
* Security incidents
* Competitive disadvantage
* Increased operational cost
* Technical deterioration

This is especially important in fintech.

---

# 76. Roadmap Example

Imagine a fintech product strategy:

> Become the easiest investment platform for first-time investors.

### Q1 — Activation

Outcome:

> Increase successful onboarding.

Initiatives:

* Simplify onboarding
* Improve identity verification
* Improve onboarding guidance

### Q2 — Confidence

Outcome:

> Increase user confidence in investment decisions.

Initiatives:

* Educational explanations
* Risk explanations
* Portfolio insights

### Q3 — Retention

Outcome:

> Improve 90-day retention.

Initiatives:

* Personalized insights
* Investment reminders
* Portfolio health tools

This roadmap has a strategic narrative.

---

# 77. Roadmap Template

A practical roadmap can use:

| Time  | Strategic Theme | Outcome             | Initiative                       | Confidence |
| ----- | --------------- | ------------------- | -------------------------------- | ---------- |
| Now   | Activation      | Increase activation | Simplify onboarding              | High       |
| Next  | Trust           | Increase confidence | Improve transaction transparency | Medium     |
| Later | Engagement      | Increase engagement | Personalized insights            | Low        |

This is often more useful than a long list of features.

---

# 78. How to Build a Roadmap Step by Step

### Step 1

Start with the product strategy.

### Step 2

Define desired outcomes.

### Step 3

Identify opportunities.

### Step 4

Generate possible initiatives.

### Step 5

Estimate value and effort.

### Step 6

Evaluate strategic alignment.

### Step 7

Consider dependencies and risks.

### Step 8

Prioritize.

### Step 9

Check team capacity.

### Step 10

Create the roadmap.

### Step 11

Communicate assumptions and confidence.

### Step 12

Review and update regularly.

---

# 79. Roadmap Review Questions

Before publishing a roadmap, ask:

### Strategy

* Does this support our strategy?

### Customer

* Which customer problem does this address?

### Outcome

* What will improve?

### Evidence

* What evidence supports this?

### Capacity

* Can we realistically execute it?

### Dependencies

* What must happen first?

### Risk

* What could go wrong?

### Timing

* Why now?

### Trade-offs

* What are we not doing?

---

# 80. Final Mental Model

Think about roadmapping as:

```text
STRATEGY
   ↓
OUTCOMES
   ↓
OPPORTUNITIES
   ↓
INITIATIVES
   ↓
PRIORITIZATION
   ↓
CAPACITY & DEPENDENCIES
   ↓
ROADMAP
   ↓
DELIVERY
   ↓
MEASUREMENT
   ↓
LEARNING
   ↓
ROADMAP UPDATE
```

A roadmap isn't a static document.

It is part of a continuous product management cycle.

---

# 81. Key Takeaways

1. A roadmap communicates product direction and priorities.
2. A roadmap is not necessarily a fixed commitment.
3. Strategy explains why and where; the roadmap explains what and roughly when.
4. The backlog contains much more detailed potential work.
5. Outcome-based roadmaps focus on results rather than features.
6. Now / Next / Later is useful when uncertainty is high.
7. The further into the future you plan, the less precise the roadmap should usually be.
8. Prioritization is necessary because resources are limited.
9. Every prioritization decision has an opportunity cost.
10. Value vs. Effort is a simple and useful framework.
11. RICE considers Reach, Impact, Confidence, and Effort.
12. ICE considers Impact, Confidence, and Ease.
13. MoSCoW distinguishes Must, Should, Could, and Won't Have.
14. Cost of Delay helps identify time-sensitive work.
15. WSJF considers value, urgency, risk, and job size.
16. Opportunity Scoring focuses on important customer needs with low satisfaction.
17. No prioritization framework should replace PM judgment.
18. Regulatory, security, and other mandatory work may need special treatment.
19. Technical debt should be considered as part of product capacity.
20. Dependencies can significantly affect roadmap sequencing.
21. Stakeholder requests should be translated into underlying problems and outcomes.
22. Roadmaps should communicate rationale, not just features.
23. Roadmaps should reflect actual team capacity.
24. Discovery can be included in a roadmap when uncertainty is high.
25. A good roadmap can change when evidence changes.
26. The best roadmaps connect:

```text
Strategy
   ↓
Outcomes
   ↓
Initiatives
   ↓
Priorities
   ↓
Execution
```

27. The ultimate goal of a roadmap is not to predict the future perfectly.

It is to help the organization:

> **Focus limited resources on the most valuable opportunities while remaining adaptable as new information becomes available.**

# Preview of Day 39

## Product Analytics & Metrics

Topics:

* Why product metrics matter
* Metrics vs. KPIs
* Vanity metrics
* Actionable metrics
* Input vs. output metrics
* Leading vs. lagging indicators
* North Star Metric
* Metric trees
* Business metrics
* Product metrics
* Acquisition metrics
* Activation metrics
* Engagement metrics
* Retention metrics
* Revenue metrics
* Conversion rates
* Funnel analysis
* Cohort analysis
* DAU, WAU, and MAU
* Stickiness
* Churn
* Customer Lifetime Value
* Customer Acquisition Cost
* Average Revenue Per User
* Feature adoption
* Time to value
* Measuring product success
* Choosing the right metrics
* Common metric mistakes
* Building a product KPI framework
* PM interview questions
