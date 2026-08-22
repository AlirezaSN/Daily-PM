# Day 40: Product Delivery & Execution

## Learning Objectives

By the end of this lesson, you should understand:

- The difference between product discovery and product delivery
- How to move from a validated idea to implementation
- How to break large initiatives into smaller deliverables
- Epics, features, and user stories
- How Product Managers work with engineering during execution
- Backlog management
- Sprint planning
- Scope management
- Managing dependencies and blockers
- Handling changing requirements
- Release planning
- QA and acceptance
- Release readiness
- Feature flags
- Incremental releases
- Post-launch monitoring
- Production issues
- Balancing speed, scope, and quality
- Common execution mistakes
- How PMs help teams deliver successfully

---

# 1. Product Delivery vs. Product Discovery

You have already learned about product discovery.

Discovery asks:

> **Are we solving the right problem, and is this solution worth building?**

Delivery asks:

> **How do we turn the chosen solution into a reliable product experience?**

A simplified model is:

```text
Discovery
   ↓
Understand problem
   ↓
Validate solution
   ↓
Decide what to build
   ↓
Delivery
   ↓
Build
   ↓
Test
   ↓
Launch
   ↓
Measure
````

Discovery and delivery are different, but they are not completely separate.

Good product teams continuously learn during both.

---

# 2. Delivery Doesn't Mean "Throw It to Engineering"

A common misconception is:

> "The PM finished the requirements, so engineering handles the rest."

That creates problems.

During delivery, the PM still needs to:

* Clarify requirements
* Make product decisions
* Resolve ambiguity
* Manage scope
* Remove blockers
* Coordinate stakeholders
* Make trade-offs
* Monitor progress
* Prepare for launch
* Validate the outcome

The PM remains involved without micromanaging implementation.

---

# 3. From Idea to Delivery

A typical flow might look like:

```text
Problem
  ↓
Research
  ↓
Problem validation
  ↓
Solution exploration
  ↓
Prototype
  ↓
Experiment
  ↓
Decision
  ↓
Scope definition
  ↓
Development
  ↓
Testing
  ↓
Launch
  ↓
Measurement
```

The important point is:

> **Development should begin after the team has enough confidence about what it is trying to achieve.**

You don't need perfect certainty.

You need enough evidence to justify the investment.

---

# 4. Define the Outcome Before the Work

Before starting development, the team should understand:

### Problem

What are we solving?

### User

Who has the problem?

### Outcome

What should improve?

### Scope

What are we building?

### Success

How will we know whether it worked?

For example:

> Problem: New traders struggle to understand whether their order was successfully submitted.

> Outcome: Reduce uncertainty after order submission.

> Success metric: Reduction in order-status-related support contacts.

This is stronger than:

> "Build a better order confirmation screen."

---

# 5. Breaking Large Initiatives Into Smaller Pieces

Large initiatives are difficult to execute.

Suppose you want to build:

> A complete investment portfolio management system.

That's too large to treat as one delivery item.

You might break it into:

```text
Portfolio Management
    |
    +-- Portfolio overview
    |
    +-- Asset allocation
    |
    +-- Performance history
    |
    +-- Transaction history
    |
    +-- Profit/loss calculation
    |
    +-- Notifications
```

Each part can then be further broken down.

---

# 6. Epic

An **Epic** is a large body of work that usually contains multiple smaller pieces.

Example:

> Portfolio Management

An epic may contain:

* Portfolio overview
* Asset allocation
* Performance charts
* Transaction history

An epic is generally too large to represent one small development task.

---

# 7. Feature

A **feature** is a specific product capability.

Example:

> Users can view their portfolio allocation by asset.

This is more specific than the overall portfolio-management epic.

A feature can still contain multiple user stories or technical tasks.

---

# 8. User Story

A common user story format is:

> **As a [user], I want [action], so that [benefit].**

Example:

> As an investor, I want to see my portfolio allocation by asset so that I can understand how my investments are distributed.

The format is useful because it connects functionality to user value.

However, don't treat the format as a strict requirement for every piece of work.

The important thing is clarity.

---

# 9. Acceptance Criteria

A user story should have clear conditions for completion.

Example:

### Story

> As an investor, I want to see my portfolio allocation by asset.

### Acceptance Criteria

* The user can see the percentage allocated to each asset.
* Percentages add up to approximately 100%.
* Assets are sorted by allocation.
* Loading state is displayed while data is retrieved.
* An appropriate empty state is displayed when there are no investments.
* Errors are handled appropriately.

Acceptance criteria help remove ambiguity.

---

# 10. Definition of Done

Acceptance criteria describe a specific requirement.

The **Definition of Done** describes what the team generally means by "finished."

For example:

* Development completed
* Code reviewed
* Automated tests passed
* QA completed
* Acceptance criteria satisfied
* Analytics implemented
* Accessibility checked
* Documentation updated
* Release configuration completed

The exact Definition of Done depends on the organization.

---

# 11. Backlog

The product backlog contains work that may need to be done.

It can include:

* Features
* Bugs
* Improvements
* Technical debt
* Research
* Experiments
* Infrastructure work

The backlog is not simply:

> "Everything we will eventually build."

It is a prioritized representation of potential work.

---

# 12. Backlog ≠ Roadmap

These are different.

### Roadmap

Communicates:

> Where are we going and why?

### Backlog

Contains:

> What work might be required?

A roadmap may say:

> Improve onboarding in Q3.

The backlog may contain:

* Simplify registration
* Improve verification
* Add progress indicator
* Improve error messages
* Test alternative onboarding flow

The backlog is much more detailed.

---

# 13. Backlog Prioritization During Delivery

Not every backlog item deserves immediate attention.

A PM should continuously evaluate:

* Customer impact
* Business impact
* Urgency
* Effort
* Risk
* Dependencies
* Strategic importance

Prioritization is not a one-time activity.

New information can change priorities.

---

# 14. Sprint Planning

In Scrum, a sprint is a fixed development period during which the team works toward a specific goal.

During sprint planning, the team typically discusses:

* Sprint goal
* Candidate backlog items
* Capacity
* Dependencies
* Technical considerations

The PM should help communicate:

> What is most important and why?

Engineering should help determine:

> What is realistically achievable?

---

# 15. Sprint Goal

A strong sprint should ideally have a meaningful goal.

Weak:

> Complete tickets 123, 124, 125, and 126.

Better:

> Enable users to complete the first step of account funding.

The second provides context and creates alignment.

---

# 16. Capacity

A team cannot deliver unlimited work.

Capacity depends on:

* Team size
* Availability
* Complexity
* Meetings
* Support work
* Technical issues
* Holidays
* Other commitments

A PM should not assume:

> "The team has five engineers, so we can always deliver X points."

Capacity changes over time.

---

# 17. Story Points

Some Agile teams use **story points** to estimate relative complexity.

For example:

```text
1 → Very small
2 → Small
3 → Moderate
5 → Large
8 → Very large
13 → Probably too large
```

Story points are not necessarily:

> "Hours."

They represent relative effort/complexity based on the team's estimation approach.

---

# 18. Don't Turn Story Points Into Productivity Scores

A common mistake is:

> "Team A completed 50 points. Team B completed 70 points. Team B is better."

This is generally misleading.

Story points are team-specific estimation units.

They are useful primarily for planning within the same team's context.

---

# 19. Scope Management

One of the most important PM responsibilities during delivery is managing scope.

Imagine a feature initially includes:

* Basic functionality
* Advanced filtering
* Export
* Notifications
* Analytics
* Personalization

Engineering discovers that the complete scope requires six weeks.

You may only have three weeks.

The PM should ask:

> What is the smallest scope that still delivers meaningful value?

---

# 20. Scope Cutting

Suppose the original feature is:

> Advanced transaction search.

MVP:

* Search by transaction name
* Date filter

Later:

* Amount filter
* Multiple conditions
* Saved searches
* Advanced sorting

This allows the team to deliver value earlier.

Scope reduction is often better than delaying everything.

---

# 21. Scope Creep

**Scope creep** occurs when additional requirements gradually enter the project.

Example:

Initial requirement:

> Users can filter transactions by date.

Then:

> Can we also add amount filtering?

Then:

> Can users save filters?

Then:

> Can we add export?

Then:

> Can we add AI-powered search?

Each request may be reasonable.

Together, they can turn a small feature into a major project.

---

# 22. Handling Scope Creep

Don't automatically say:

> "No."

Instead ask:

> "What problem does this additional requirement solve?"

Then evaluate:

* Impact
* Urgency
* Effort
* Dependencies
* Strategic importance

If it is valuable but not essential:

> Add it to the backlog for later.

If it is critical:

> Revisit the scope and explicitly trade something else off.

---

# 23. Change Requests

Requirements can legitimately change during development.

For example:

> New regulatory requirements emerge.

The PM cannot simply say:

> "We already finalized the requirements."

Instead:

1. Understand the change.
2. Determine its impact.
3. Reassess priorities.
4. Identify what must change.
5. Communicate the trade-off.
6. Update the plan.

Agility doesn't mean accepting every change.

It means responding intelligently to meaningful change.

---

# 24. Managing Dependencies

A dependency exists when one piece of work depends on another.

Example:

```text
Mobile App
    ↓
Backend API
    ↓
Payment Provider
```

The mobile team may not be able to finish until the API is available.

Dependencies can exist between:

* Teams
* Services
* Vendors
* Legal
* Security
* Design
* Engineering
* Data

PMs should identify important dependencies early.

---

# 25. Dependency Risk

Suppose your feature depends on:

> A third-party payment provider.

Potential risks:

* API changes
* Approval delays
* Integration problems
* Sandbox limitations
* Security reviews

The PM should ask:

> "What happens if this dependency is delayed?"

Then create alternatives where possible.

---

# 26. Blockers

A blocker prevents the team from progressing.

Examples:

* Missing API
* Unresolved product decision
* Design not finalized
* Environment unavailable
* External vendor delay
* Security approval pending

The PM's role is often to help remove blockers.

---

# 27. PM as Blocker Remover

Suppose engineering says:

> "We can't launch because Legal hasn't approved the new flow."

A weak PM says:

> "Okay."

A strong PM investigates:

* Who owns approval?
* What information do they need?
* What is blocking the review?
* Can we schedule a review?
* Can we launch another part independently?

The PM creates momentum.

---

# 28. Managing Ambiguity During Development

Sometimes engineers ask:

> "What should happen in this edge case?"

The PM may not have explicitly defined it.

Don't guess automatically.

Instead:

1. Understand the user/business impact.
2. Check existing product behavior.
3. Check business rules.
4. Talk to relevant stakeholders.
5. Make the decision.
6. Document it.

Fast decisions are useful, but arbitrary decisions are dangerous.

---

# 29. Edge Cases

Good delivery requires thinking about edge cases.

For example:

> User attempts to withdraw money.

What if:

* Balance is insufficient?
* Network fails?
* Account is locked?
* Verification is incomplete?
* Withdrawal limit is exceeded?
* Currency is unsupported?
* Provider is unavailable?

These cases should be considered before launch.

---

# 30. QA and Product Acceptance

QA is not simply:

> "Does the button work?"

Testing may include:

* Functional testing
* Regression testing
* Usability testing
* Performance testing
* Security testing
* Compatibility testing
* Accessibility testing

The PM should also validate whether the feature solves the intended product problem.

---

# 31. QA vs. Product Acceptance

QA might determine:

> The system behaves according to specification.

The PM should also ask:

> Does this behavior actually deliver the intended user value?

A feature can technically work while still being a poor product.

---

# 32. Release Planning

A release is the process of making product changes available to users.

Before release, consider:

* What is being released?
* Who gets access?
* When?
* What dependencies exist?
* Is support prepared?
* Is analytics ready?
* Is monitoring ready?
* Are rollback procedures available?

---

# 33. Release Readiness Checklist

A simple checklist might include:

```text
[ ] Development complete
[ ] QA complete
[ ] Acceptance criteria satisfied
[ ] Analytics implemented
[ ] Monitoring configured
[ ] Documentation updated
[ ] Customer support informed
[ ] Stakeholders informed
[ ] Rollback plan ready
[ ] Feature flag configured
[ ] Launch communication ready
```

The exact checklist depends on the product.

---

# 34. Feature Flags

A **feature flag** allows a team to control whether a feature is enabled.

For example:

```text
Feature X
   |
   +-- Internal users: ON
   |
   +-- 5% customers: ON
   |
   +-- Everyone else: OFF
```

This can reduce launch risk.

---

# 35. Gradual Rollouts

Instead of releasing to everyone immediately:

```text
Internal
   ↓
1%
   ↓
5%
   ↓
25%
   ↓
50%
   ↓
100%
```

At each stage, monitor:

* Errors
* Performance
* Conversion
* User feedback
* Business metrics

If something goes wrong, the rollout can be stopped.

---

# 36. Canary Releases

A canary release is a type of gradual release where a small subset of users receives the change first.

The purpose is to identify problems before full rollout.

This is particularly useful for:

* High-risk infrastructure changes
* Critical workflows
* Large-scale systems

---

# 37. Rollback

A rollback means returning to a previous version or state when a release causes serious problems.

A PM should know:

> What is our rollback strategy?

Not every product change can be easily rolled back.

For example:

> A database migration

may require a more complex recovery strategy than:

> A UI change behind a feature flag.

---

# 38. Launch Is Not the Finish Line

A common mistake is:

```text
Build → Launch → Done
```

A better model is:

```text
Build
  ↓
Launch
  ↓
Monitor
  ↓
Measure
  ↓
Learn
  ↓
Improve
```

The real question after launch is:

> Did we achieve the intended outcome?

---

# 39. Post-Launch Monitoring

After launch, monitor:

### Product metrics

* Activation
* Conversion
* Retention
* Feature adoption

### Technical metrics

* Error rate
* Latency
* Crashes
* API failures

### Customer signals

* Support tickets
* Reviews
* Complaints
* Feedback

The exact metrics depend on the feature.

---

# 40. Production Issues

Sometimes a release causes unexpected problems.

Example:

> Payment success rate falls from 98% to 85%.

The PM should help coordinate the response.

The priority becomes:

> Protect customers and stabilize the product.

Possible actions:

* Stop rollout
* Disable feature
* Roll back
* Notify stakeholders
* Investigate root cause
* Communicate with customers if necessary

---

# 41. Incident Management

During a serious incident, avoid unnecessary debate.

A simplified process:

```text
Detect
  ↓
Assess severity
  ↓
Contain
  ↓
Restore service
  ↓
Communicate
  ↓
Investigate
  ↓
Prevent recurrence
```

The PM may help coordinate product/business communication while engineering handles technical remediation.

---

# 42. Postmortems

After a significant incident, teams may conduct a postmortem.

The purpose is not:

> "Who caused the problem?"

The purpose is:

> "Why did the system allow this problem to happen, and how can we prevent it?"

A good postmortem examines:

* What happened?
* Why did it happen?
* What was the impact?
* How was it detected?
* What went well?
* What went poorly?
* What actions should we take?

---

# 43. Measuring Delivery Success

Delivery success isn't simply:

> "We shipped on time."

You should consider:

### Delivery

Did we deliver the intended scope?

### Quality

Did we maintain acceptable quality?

### Customer

Did the customer experience improve?

### Business

Did the business outcome improve?

### Learning

Did we validate our assumptions?

---

# 44. Speed vs. Quality

There is often pressure to:

> "Ship faster."

Speed matters.

But speed without quality can create:

* Bugs
* Support costs
* Technical debt
* Customer frustration
* Rework

The goal is not:

> Maximum speed.

The goal is:

> **Sustainable delivery of valuable outcomes.**

---

# 45. Don't Measure PM Performance by Features Shipped

A PM who ships 50 features isn't necessarily better than a PM who ships 10.

The important questions are:

* Did the features solve meaningful problems?
* Did users adopt them?
* Did the business benefit?
* Did the team learn?
* Did the product improve?

Output matters, but outcome matters more.

---

# 46. Delivery Metrics

Possible delivery metrics include:

* Cycle time
* Lead time
* Deployment frequency
* Release frequency
* Escaped defects
* Change failure rate
* Time to recovery

These are often associated with engineering delivery performance.

PMs should understand them without turning them into simplistic productivity measurements.

---

# 47. Cycle Time

**Cycle time** measures how long work takes from a defined start point to completion.

For example:

```text
Development started
       ↓
      10 days
       ↓
Production
```

Cycle time can help identify bottlenecks.

If cycle time increases significantly, investigate why.

---

# 48. Bottlenecks

Suppose a team can develop a feature in:

> 5 days

but QA takes:

> 10 days.

The bottleneck may be testing.

Or perhaps:

> Design approval takes two weeks.

The bottleneck is not necessarily engineering.

PMs should look at the whole delivery system.

---

# 49. The Delivery System

Think of delivery as:

```text
Idea
 ↓
Discovery
 ↓
Design
 ↓
Development
 ↓
QA
 ↓
Release
 ↓
Measurement
```

A delay anywhere can affect the whole system.

Optimizing only one part may not improve overall delivery.

---

# 50. Communication During Delivery

The PM should communicate important changes clearly.

For example:

> "The payment feature will launch one week later because the provider integration requires additional security validation. We are keeping the original scope and moving the release from June 10 to June 17."

Good communication includes:

* What changed
* Why
* Impact
* New expectation
* Next steps

Avoid vague updates such as:

> "There are some technical issues."

---

# 51. Status Updates

A useful status update might contain:

### Status

On track / At risk / Blocked

### Progress

What has been completed?

### Risks

What could affect delivery?

### Decisions needed

What requires stakeholder input?

### Next steps

What happens next?

This keeps stakeholders aligned without unnecessary detail.

---

# 52. Managing Stakeholder Pressure

A stakeholder might say:

> "We need this feature by Friday."

The PM should not immediately promise it.

Instead ask:

* Why Friday?
* What happens if it's Monday?
* What is the minimum required scope?
* What resources are available?
* What can be deprioritized?
* What risks are acceptable?

Then make the trade-off explicit.

---

# 53. The Three Questions of Delivery

Whenever delivery becomes difficult, ask:

### 1. What is the most important outcome?

### 2. What is preventing us from achieving it?

### 3. What trade-off can we make?

These three questions often clarify the situation quickly.

---

# 54. Example: Fintech Feature

Imagine your team is building:

> Instant bank transfer.

Initial scope:

* Bank account linking
* Transfer initiation
* Transfer status
* Failure handling
* Notifications
* Transaction history

During development, engineering discovers that one banking provider requires additional integration work.

The PM should consider:

* Can we launch with fewer providers?
* Can we release the feature to a limited segment?
* Can we delay notifications?
* Can we launch transaction status first?
* Is there a regulatory requirement?

This is product execution.

---

# 55. Delivery Is About Trade-Offs

You will frequently encounter situations like:

```text
                Scope
                  ↑
                  |
        Quality ← + → Speed
                  |
                  ↓
                 Cost
```

You cannot maximize everything simultaneously.

Good PMs make trade-offs consciously.

Weak PMs make trade-offs accidentally.

---

# 56. A Strong Delivery Mindset

A strong PM thinks:

> "How can we deliver the most valuable outcome with the resources and constraints we have?"

Not:

> "How can we force the team to deliver everything?"

This distinction is critical.

---

# 57. Common Delivery Mistakes

### Mistake 1: Starting development with unclear requirements

Result:

* Rework
* Confusion
* Delays

### Mistake 2: Treating scope as fixed

Result:

* Missed opportunities
* Unnecessary delays

### Mistake 3: Accepting every request

Result:

* Scope creep
* Lack of focus

### Mistake 4: Ignoring technical constraints

Result:

* Unrealistic plans

### Mistake 5: Leaving testing until the end

Result:

* Late discovery of problems

### Mistake 6: Treating launch as the end

Result:

* No learning

### Mistake 7: Measuring delivery by output only

Result:

* Feature factories

---

# 58. The Product Manager's Role During Execution

During delivery, the PM should continuously ask:

> Are we building the right thing?

> Are we still solving the original problem?

> Has anything changed?

> What decisions are blocking the team?

> What scope can we reduce?

> What risks are emerging?

> Are we still on track toward the intended outcome?

This keeps execution connected to product strategy.

---

# 59. End-to-End Example

Imagine you discover:

> New users abandon the investment onboarding process.

### Discovery

Research identifies:

> Users don't understand why identity verification is required.

### Solution

The team proposes:

> Improve explanation and simplify the verification flow.

### Experiment

A prototype is tested with users.

Results are positive.

### Delivery

The team builds:

* Improved explanation
* Simplified flow
* Better error messages

### QA

The team validates:

* Functional behavior
* Edge cases
* Error handling

### Release

The feature is launched to:

> 10% of users.

### Measurement

Monitor:

* Verification completion
* Activation
* Time to complete onboarding
* Support contacts

### Decision

If results are positive:

> Increase rollout.

If negative:

> Investigate and iterate.

This is the complete discovery-to-delivery-to-learning loop.

---

# 60. Final Mental Model

Think about product execution as:

```text
Validated Problem
      ↓
Clear Outcome
      ↓
Defined Scope
      ↓
Cross-Functional Planning
      ↓
Development
      ↓
Testing
      ↓
Controlled Release
      ↓
Monitoring
      ↓
Measurement
      ↓
Learning
      ↓
Iteration
```

The PM's role is to keep the team focused on:

> **Delivering valuable outcomes, not simply completing tickets.**

---

# Key Takeaways

1. Discovery determines what is worth building; delivery turns it into reality.
2. PMs remain involved throughout execution.
3. Large initiatives should be broken into manageable pieces.
4. Epics, features, and user stories provide different levels of granularity.
5. Acceptance criteria reduce ambiguity.
6. Definition of Done establishes a shared meaning of completion.
7. The backlog contains potential work; the roadmap communicates direction.
8. Sprint goals should focus on meaningful outcomes.
9. Story points are relative estimation units, not productivity scores.
10. Scope should be actively managed during delivery.
11. Scope creep should be evaluated rather than automatically accepted.
12. Requirements can legitimately change when new information appears.
13. Dependencies should be identified early.
14. PMs help remove blockers and facilitate decisions.
15. Edge cases should be considered before launch.
16. QA validates product behavior, but PMs must also validate product value.
17. Release planning should include monitoring, communication, and rollback considerations.
18. Feature flags and gradual rollouts can reduce launch risk.
19. Launch is not the end of the product process.
20. Post-launch measurement determines whether the intended outcome was achieved.
21. Serious production issues require rapid containment and coordinated communication.
22. Postmortems should focus on learning and prevention rather than blame.
23. Delivery speed matters, but sustainable quality matters too.
24. Feature count is not a good measure of product success by itself.
25. The PM's job during execution is to protect the desired outcome while managing constraints and trade-offs.
26. The best delivery teams continuously connect execution back to customer and business value.

---

# Practical Exercise

Imagine you are the PM of a stock trading platform.

Your team is building:

> **"Instant deposit"**

The original scope includes:

* Add bank account
* Verify bank account
* Deposit money
* Show deposit status
* Handle failures
* Send notifications
* Show transaction history

Engineering tells you:

> "The full scope will take 8 weeks, but the business wants something live in 4 weeks."

Answer:

1. What is the desired customer outcome?
2. What could the MVP scope be?
3. Which features could be postponed?
4. What dependencies might exist?
5. What technical risks should you ask engineering about?
6. What acceptance criteria would you define?
7. What should be included in the release-readiness checklist?
8. What feature-flag or gradual-rollout strategy could you use?
9. What product metrics would you monitor after launch?
10. What guardrail metrics would you monitor?
11. What would make you stop or roll back the rollout?
12. How would you communicate the four-week MVP decision to stakeholders?

The goal is to practice **making delivery trade-offs while protecting the most important customer outcome**.

---

# Preview of Day 41

## Product Leadership & Decision-Making

Topics:

* What product leadership means
* Product leadership vs. product management
* Decision-making as a PM
* Decision-making under uncertainty
* Making decisions with incomplete information
* Reversible vs. irreversible decisions
* One-way and two-way doors
* Decision frameworks
* Data-driven vs. data-informed decisions
* Using judgment when data is unavailable
* Managing competing priorities
* Making difficult trade-offs
* Communicating product decisions
* Getting stakeholder alignment
* Handling disagreement with executives
* Saying no effectively
* Escalation and decision ownership
* Building trust
* Accountability
* Product leadership behaviors
* Common decision-making mistakes
* Developing product judgment