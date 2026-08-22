# Day 34: Product Experimentation & Validation

## Learning Objectives

By the end of this lesson, you should understand:

- What Product Discovery is
- Why Product Discovery matters
- Discovery vs. Delivery
- Problem Discovery vs. Solution Discovery
- Continuous Discovery
- Assumptions and hypotheses
- Opportunity identification
- Customer interviews
- Observation
- Surveys
- Usability testing
- Prototyping
- Experiments
- Fake-door tests
- Concierge MVPs
- Wizard-of-Oz experiments
- Validation and evidence
- Discovery metrics
- Common discovery mistakes
- How to build a continuous discovery habit

---

# 1. What Is Product Discovery?

**Product Discovery** is the process of learning what customers need, identifying valuable problems, evaluating possible solutions, and reducing uncertainty before investing significant resources in building a product.

The core idea is:

> **Before building something, make sure you are solving the right problem in the right way.**

A Product Manager shouldn't simply receive requirements and send them to engineering.

Instead, the PM should ask:

- Is this actually a problem?
- Who has this problem?
- How important is it?
- How frequently does it happen?
- How are customers solving it today?
- Why is the current solution insufficient?
- What outcome does the customer want?
- What solutions could solve it?
- Which solution is most promising?
- How can we test our assumptions cheaply?

---

# 2. Why Product Discovery Matters

Building software is expensive.

Even a small feature can require:

- Product management
- Design
- Frontend development
- Backend development
- QA
- DevOps
- Analytics
- Customer support
- Marketing

If you build the wrong thing, you don't just lose development time.

You may also lose:

- Customer trust
- Revenue
- Team morale
- Market opportunity
- Strategic focus

Discovery helps reduce these risks.

---

# 3. The Product Development Problem

Imagine your team spends three months building a feature.

After launch:

> Only 2% of users use it.

Why?

Maybe:

- The problem wasn't important.
- The wrong customers were targeted.
- The solution didn't solve the problem.
- Customers already had a better alternative.
- The feature was too difficult to use.
- The problem existed, but the chosen solution was wrong.

Discovery tries to identify these issues **before** you spend three months building.

---

# 4. Discovery vs. Delivery

A useful distinction:

### Discovery

> **What should we build?**

### Delivery

> **How do we build it?**

Discovery deals with uncertainty.

Delivery deals with execution.

A simplified model:

```text
DISCOVERY
Understand problem
       ↓
Identify opportunity
       ↓
Explore solutions
       ↓
Validate solution
       ↓
Decide what to build
       ↓
DELIVERY
Design
       ↓
Develop
       ↓
Test
       ↓
Launch
       ↓
Measure
````

The two activities should work together.

---

# 5. Discovery Is Not a Phase That Happens Once

A common mistake is thinking:

> "We'll do discovery for two weeks, then stop."

Modern Product Management increasingly treats discovery as **continuous**.

Even after launching a product, you continue learning:

```text
Discover
   ↓
Build
   ↓
Launch
   ↓
Measure
   ↓
Learn
   ↓
Discover again
```

This creates a continuous learning loop.

---

# 6. Problem Discovery

**Problem Discovery** means understanding the customer's problem before deciding on a solution.

For example:

A customer says:

> "I want an AI chatbot."

Don't immediately build a chatbot.

Ask:

> "What are you trying to accomplish?"

Maybe the real problem is:

> "I can't find answers in our internal documentation."

Now you can investigate:

* Why can't they find information?
* How do they search today?
* How long does it take?
* How often does this happen?
* What happens when they can't find an answer?

The chatbot is only one possible solution.

---

# 7. Solution Discovery

Once you understand the problem, you can explore possible solutions.

For example:

### Problem

Employees spend too much time finding information.

Possible solutions:

1. Better search
2. Improved documentation
3. AI chatbot
4. RAG-based knowledge assistant
5. Human support
6. Automated recommendations

Solution discovery asks:

> **Which solution is most likely to solve the problem effectively?**

---

# 8. The Two Biggest Discovery Questions

Most discovery work can be organized around two questions:

### Question 1

> **Are we solving the right problem?**

### Question 2

> **Are we solving it in the right way?**

The first is primarily **problem discovery**.

The second is primarily **solution discovery**.

---

# 9. Product Discovery Reduces Risk

There are several types of risk.

## Value Risk

> Will customers actually want this?

## Usability Risk

> Will customers understand and use it?

## Feasibility Risk

> Can we technically build it?

## Viability Risk

> Does it make business sense?

A good discovery process tries to reduce all four.

---

# 10. Value Risk

Value risk asks:

> **Will customers care?**

Example:

Your team wants to build:

> AI-generated investment summaries.

Questions:

* Do customers actually want summaries?
* What problem are they trying to solve?
* How often do they need them?
* What do they currently use?
* Is this problem important enough to change behavior?

If customers don't care, technical excellence doesn't matter.

---

# 11. Usability Risk

Usability risk asks:

> **Can customers understand and use the solution?**

Suppose you build an AI insurance assistant.

Customers may not understand:

* What questions they can ask
* What documents they can upload
* Whether the answer is reliable
* What they should do next

The solution may be valuable but difficult to use.

A prototype or usability test can help identify this before development.

---

# 12. Feasibility Risk

Feasibility asks:

> **Can we actually build this?**

For example:

You want real-time fraud detection.

Questions:

* Do we have the necessary data?
* Can our backend support it?
* Is the latency acceptable?
* Do we have the required infrastructure?
* Can our team maintain it?

Sometimes Product Managers should involve engineers early in discovery.

---

# 13. Viability Risk

Viability asks:

> **Does this make business sense?**

For example:

Customers may love a feature.

But:

* It costs $10 per transaction.
* Customers will only pay $1.
* It creates regulatory problems.
* It doesn't fit the company's strategy.

The product may be desirable but not viable.

---

# 14. The Four Risks

A useful framework:

| Risk        | Core Question                   |
| ----------- | ------------------------------- |
| Value       | Will customers want it?         |
| Usability   | Can customers use it?           |
| Feasibility | Can we build it?                |
| Viability   | Should the business support it? |

A strong PM thinks about all four.

---

# 15. Assumptions

Every product idea contains assumptions.

For example:

> "Customers want personalized job recommendations."

This contains assumptions:

* Customers want recommendations.
* They trust recommendations.
* Recommendations will be relevant.
* They will use them.
* The problem is important.
* We can generate sufficiently accurate recommendations.
* Better recommendations will increase applications.

Discovery helps test these assumptions.

---

# 16. Hypotheses

A **hypothesis** is a testable belief about what will happen.

Instead of:

> "Users don't like our onboarding."

Write:

> "We believe first-time users abandon onboarding because they don't understand why identity verification is required."

Now you can test it.

---

# 17. Good vs. Bad Hypotheses

### Bad

> "Users will love this feature."

Too vague.

### Better

> "We believe users abandon onboarding because the identity verification step is unclear."

### Even better

> "We believe users who receive an explanation before identity verification will have a higher onboarding completion rate."

Now you have:

* Target behavior
* Expected cause
* Proposed intervention
* Measurable outcome

---

# 18. Assumption Mapping

Not all assumptions deserve equal attention.

A useful approach is to evaluate:

### Importance

How damaging would it be if we're wrong?

### Uncertainty

How confident are we that it's true?

Prioritize assumptions that are:

> **High importance + High uncertainty**

These are dangerous assumptions.

---

# 19. Example Assumption Map

Imagine building an AI financial assistant.

| Assumption                        | Importance | Uncertainty |
| --------------------------------- | ---------: | ----------: |
| Customers want financial guidance |       High |        High |
| Customers trust AI answers        |       High |        High |
| API can provide required data     |       High |      Medium |
| Users prefer dark mode            |        Low |      Medium |
| Users like the proposed icon      |        Low |        High |

The first two should be tested before worrying about the icon.

---

# 20. Discovery Questions

A PM can structure discovery around:

### Customer

> Who has the problem?

### Problem

> What exactly is happening?

### Context

> When and where does it happen?

### Frequency

> How often?

### Importance

> How important is it?

### Current Solution

> How do they solve it today?

### Alternatives

> What else could they use?

### Outcome

> What does success look like?

### Constraints

> What prevents a better solution today?

---

# 21. Customer Interviews

Customer interviews are one of the most common discovery methods.

The goal isn't to convince customers of your idea.

The goal is to learn.

A strong interview explores:

* Past behavior
* Current process
* Problems
* Motivations
* Alternatives
* Decision criteria
* Desired outcomes

---

# 22. The Golden Rule of Interviews

> **Talk about what people actually did, not what they say they would do.**

Bad:

> "Would you use an AI assistant for your insurance claims?"

Better:

> "Tell me about the last time you submitted an insurance claim."

The second question gives you evidence about actual behavior.

---

# 23. Interview Example

Suppose you want to improve stock trading research.

Don't ask:

> "Would you like AI-generated stock recommendations?"

Instead:

> "Tell me about the last time you decided to buy a stock."

Then:

* What triggered the decision?
* Where did you look for information?
* Which sources did you trust?
* How long did the process take?
* What was confusing?
* What made you confident?
* Did you consider other investments?
* What happened after you made the decision?

Now you are learning about the actual problem.

---

# 24. Observation

Sometimes customers can't accurately explain their behavior.

Observation can help.

For example:

Instead of asking:

> "How do you use our claim system?"

Watch a customer complete a claim.

You may discover:

> They open three browser tabs to find required information.

They might never mention this during an interview.

Observation reveals actual behavior.

---

# 25. Usability Testing

Usability testing evaluates whether customers can successfully use a solution.

You give users a task.

For example:

> "Imagine you need to submit a claim for a medical expense. Show me how you would do it."

Then observe:

* Where they click
* Where they hesitate
* What they misunderstand
* What they expect
* Where they make errors

The goal isn't to test the user.

The goal is to test the product.

---

# 26. Prototype Testing

You don't always need a working product.

You can test a prototype.

For example:

```text
Idea
 ↓
Wireframe
 ↓
Clickable Prototype
 ↓
User Test
 ↓
Learn
 ↓
Improve
```

A prototype can help you discover usability problems before engineering begins.

---

# 27. Why Prototypes Are Powerful

Imagine two approaches.

### Approach A

Build the feature.

Cost:

> 3 weeks engineering.

Then discover:

> Customers don't understand it.

### Approach B

Create a prototype.

Cost:

> 1–2 days design.

Test with five customers.

Discover:

> Customers don't understand it.

You can change the design before spending three weeks on development.

---

# 28. Surveys

Surveys are useful when you need information from a larger number of people.

Good uses:

* Quantifying a known problem
* Measuring satisfaction
* Ranking problems
* Segmenting customers
* Testing specific hypotheses

Example:

> "Which part of the claim process is most difficult?"

You might ask 1,000 users.

---

# 29. Interviews vs. Surveys

### Interviews

Good for:

> **Understanding why.**

Advantages:

* Deep
* Contextual
* Flexible

Disadvantages:

* Small sample
* Time-consuming
* Potential interviewer bias

### Surveys

Good for:

> **Understanding how many / how often.**

Advantages:

* Large sample
* Quantitative
* Relatively fast

Disadvantages:

* Less depth
* Question wording can influence answers
* Limited context

Use them together when appropriate.

---

# 30. Fake Door Test

A **fake-door test** measures interest in a product or feature before actually building it.

For example:

You add:

> "AI Investment Assistant"

to the product.

When users click it, they see:

> "Coming soon."

You measure:

> How many users express interest?

This can test demand.

---

# 31. Important Warning About Fake Doors

A fake-door test measures:

> **Interest**

It does not necessarily prove:

> **Long-term value.**

Someone clicking a button doesn't mean they will:

* Use the product regularly
* Pay for it
* Trust it
* Recommend it

Therefore, interpret the evidence carefully.

---

# 32. Concierge MVP

A **Concierge MVP** provides a service manually instead of building the complete automated product.

Example:

Suppose you want to build:

> Automated investment portfolio recommendations.

Instead of building an AI system immediately:

1. User submits their information.
2. A human analyzes it.
3. Human sends recommendations.
4. You observe whether customers value the service.

You're testing:

> **Does the service provide meaningful value?**

before automating it.

---

# 33. Wizard-of-Oz Experiment

A **Wizard-of-Oz experiment** makes a system appear automated even though humans are operating behind the scenes.

For example:

The interface says:

> "Ask our AI assistant."

Customer asks a question.

Behind the scenes:

> A human prepares the answer.

The customer thinks the system is automated.

This can test whether the experience is valuable before investing in complex technology.

---

# 34. Concierge vs. Wizard-of-Oz

### Concierge MVP

The customer may know a human is providing the service.

### Wizard-of-Oz

The customer believes the system is automated.

Both allow you to test value before building the full technology.

---

# 35. Experimentation

An experiment is a controlled way to test a hypothesis.

A basic structure:

```text
Hypothesis
   ↓
Experiment
   ↓
Measure
   ↓
Result
   ↓
Decision
```

For example:

> We believe personalized job recommendations will increase job applications.

Experiment:

> Show personalized recommendations to a subset of users.

Metric:

> Application rate.

Decision:

> Continue, modify, or stop.

---

# 36. MVP

**Minimum Viable Product (MVP)** is a product version designed to deliver enough value to learn from real customers with minimal investment.

The important idea is:

> **Minimum doesn't mean low quality.**

It means:

> Minimum necessary scope to test the most important assumptions and deliver meaningful value.

---

# 37. MVP vs. Prototype

### Prototype

Usually used to test:

> Concept or usability.

It may not be a real product.

### MVP

Used to test:

> Real customer value with real usage.

An MVP usually works sufficiently for customers to use it in the intended context.

---

# 38. Discovery vs. MVP

Don't automatically build an MVP.

Sometimes a prototype is enough.

Sometimes an interview is enough.

Sometimes analytics already provides the answer.

The goal isn't:

> "Build an MVP."

The goal is:

> **Get the strongest evidence at the lowest reasonable cost.**

---

# 39. Evidence Ladder

You can think about evidence as increasing in strength:

```text
Opinion
  ↓
Stated Preference
  ↓
Observed Behavior
  ↓
Prototype Behavior
  ↓
Real Product Behavior
  ↓
Repeated Customer Behavior
```

For example:

> "I would use this."

is weaker evidence than:

> "I actually used it."

And:

> "I used it repeatedly and paid for it."

is even stronger evidence of value.

---

# 40. Discovery Is About Reducing Uncertainty

You don't need absolute certainty.

You need enough confidence to make a decision.

For example:

Before research:

> 30% confidence this problem is important.

After interviews:

> 60%.

After prototype testing:

> 75%.

After a real-world experiment:

> 85%.

Now you may have enough evidence to invest.

---

# 41. When Should You Stop Discovery?

Discovery shouldn't continue forever.

You can stop when:

* The problem is sufficiently understood.
* The opportunity is valuable enough.
* Major risks have been tested.
* The team has confidence in the solution.
* The remaining uncertainty is acceptable.

The goal is:

> **Enough confidence to make a good decision.**

Not:

> Perfect certainty.

---

# 42. Discovery Metrics

Discovery itself can be measured.

Useful metrics include:

### Problem validation

> % of interviewed users who experience the problem.

### Solution desirability

> % of target users who choose the proposed solution.

### Usability

> Task completion rate.

### Demand

> Click-through or signup rate.

### Value

> Repeat usage.

### Conversion

> % of users who take the desired action.

The right metric depends on the experiment.

---

# 43. Learning Metrics vs. Business Metrics

Not every experiment should immediately optimize revenue.

Early discovery may focus on:

> Did we validate the problem?

Later experiments may focus on:

> Did behavior change?

Eventually:

> Did business outcomes improve?

For example:

```text
Problem Validation
       ↓
Solution Validation
       ↓
Behavior Change
       ↓
Product Metrics
       ↓
Business Metrics
```

---

# 44. Discovery Decision Types

Every experiment should ideally lead to a decision.

Possible decisions:

### Persevere

Evidence supports the idea.

### Iterate

The problem is real, but the solution needs improvement.

### Pivot

The original assumption was wrong, but research revealed a better opportunity.

### Stop

The problem or solution isn't valuable enough.

Don't run experiments simply to collect data.

Run them to make decisions.

---

# 45. Discovery Anti-Pattern: HiPPO

**HiPPO** stands for:

> Highest Paid Person's Opinion.

Sometimes product decisions are made because:

> "The CEO thinks customers want it."

That's not discovery.

A good PM asks:

> "What evidence supports this assumption?"

Leadership input matters, but opinions should not replace customer evidence.

---

# 46. Discovery Anti-Pattern: Feature Factory

A **feature factory** is an organization that continuously produces features without sufficiently measuring whether they create value.

The process becomes:

```text
Request
 ↓
Requirement
 ↓
Development
 ↓
Release
 ↓
Next Request
 ↓
Development
 ↓
Release
```

There is little learning.

Discovery introduces:

```text
Problem
 ↓
Hypothesis
 ↓
Evidence
 ↓
Solution
 ↓
Experiment
 ↓
Measure
 ↓
Learn
```

---

# 47. Discovery Anti-Pattern: Solution First

A stakeholder says:

> "We need a mobile app."

The team immediately starts designing it.

But the real problem might be:

> Customers need faster access to information.

Maybe a responsive website would solve it.

Maybe SMS would solve it.

Maybe an API integration would solve it.

Starting with the solution limits your options.

---

# 48. Discovery Anti-Pattern: Confirmation Bias

Confirmation bias happens when you look for evidence that supports your existing belief.

For example:

You believe:

> "Customers want AI."

You interview five customers.

They mention AI once.

You conclude:

> "Customers want AI."

But you ignore the fact that:

> Four customers primarily complained about slow search.

A good PM actively looks for evidence that could **disprove** their hypothesis.

---

# 49. Discovery Anti-Pattern: Vanity Research

Another mistake is conducting research that doesn't influence decisions.

For example:

> 30 interviews are completed.

But nobody knows:

> What decision will change based on the findings?

Before research, define:

> **What will we do differently depending on the result?**

This makes discovery actionable.

---

# 50. Continuous Discovery

A strong Product Team develops a habit of continuously talking to customers and testing assumptions.

A practical cadence might be:

> Interview several customers every week.

> Review product analytics regularly.

> Run usability tests when needed.

> Test prototypes before major development.

> Run experiments after launch.

The exact frequency depends on the organization and product.

---

# 51. Discovery in a Small Team

You don't need a large research department.

For a small product team, a lightweight process can work:

```text
Monday
Review data
   ↓
Tuesday
Customer interviews
   ↓
Wednesday
Analyze findings
   ↓
Thursday
Prototype / experiment
   ↓
Friday
Review evidence + decide next step
```

You can adapt this based on your team's capacity.

---

# 52. Discovery With Engineering

Engineers should not necessarily wait until discovery is finished.

They can help answer:

> Is this technically feasible?

For example:

PM:

> "We want real-time personalized recommendations."

Engineer:

> "We don't currently have the required event data."

This is valuable discovery information.

Cross-functional discovery can reduce wasted effort.

---

# 53. Discovery With Design

Designers can help test:

* User flows
* Information architecture
* Prototypes
* Interaction models
* Content
* Usability

A designer can often create a prototype in hours or days that allows the team to test assumptions before development.

---

# 54. Discovery With Data

Data can identify unexpected behavior.

For example:

You believe:

> Users don't complete onboarding because it's too long.

Analytics shows:

> Most users abandon specifically at identity verification.

Now discovery can focus on that step.

Data helps narrow the question.

---

# 55. A Complete Discovery Loop

A practical Product Discovery loop:

```text
1. Identify an opportunity
        ↓
2. Define assumptions
        ↓
3. Prioritize risky assumptions
        ↓
4. Gather evidence
        ↓
5. Understand the problem
        ↓
6. Generate solutions
        ↓
7. Test solutions
        ↓
8. Evaluate evidence
        ↓
9. Decide
        ↓
10. Build or continue learning
```

This is the core process you should internalize.

---

# 56. Example: Insurance Claim Experience

Suppose your hypothesis is:

> "Customers abandon insurance claims because the process is too complicated."

### Step 1 — Data

Analytics shows:

> 40% abandon during document upload.

### Step 2 — Interviews

Customers say:

> "I don't know which documents are required."

### Step 3 — Hypothesis

> We believe unclear document requirements are causing claim abandonment.

### Step 4 — Prototype

Create:

> A personalized document checklist.

### Step 5 — Usability test

Give customers the task:

> "Prepare the documents required for your claim."

### Step 6 — Measure

Measure:

> Task completion rate.

### Step 7 — Decision

If the prototype performs well:

> Build an MVP.

This is Product Discovery in practice.

---

# 57. Example: AI Feature

Suppose stakeholders request:

> "Build an AI chatbot for customer support."

Instead of immediately building it:

### Problem

Identify what customers struggle with.

Maybe:

> Customers can't find answers quickly.

### Evidence

Support data shows:

> 30% of support tickets are repetitive questions.

### Hypothesis

> If customers can get reliable answers instantly, support contacts will decrease.

### Solution options

* Better FAQ
* Search
* RAG assistant
* Chatbot
* Guided flows

### Experiment

Prototype a RAG assistant using existing knowledge-base content.

### Metric

> Successful self-service resolution rate.

Now the AI feature is connected to a real problem.

---

# 58. Product Discovery Framework

You can remember the following framework:

**Problem → Evidence → Hypothesis → Experiment → Learning → Decision**

Ask:

### Problem

What problem are we solving?

### Evidence

What do we know?

### Hypothesis

What do we believe?

### Experiment

How can we test it cheaply?

### Learning

What did we discover?

### Decision

What should we do next?

This framework is extremely useful in PM interviews and real product work.

---

# 59. Day 34 Exercise

Use **LinkedIn** again.

Imagine LinkedIn's team wants to build:

> **AI-powered job recommendations.**

Your job is to conduct Product Discovery before deciding whether to build it.

Answer the following.

## Step 1 — Define the Problem

What problem are you trying to solve?

Avoid:

> "Users need AI recommendations."

Instead identify the underlying customer problem.

---

## Step 2 — Define the Target User

Who specifically has this problem?

For example:

> Professionals actively looking for a new job.

Be more specific if possible.

---

## Step 3 — Define the Hypothesis

Complete:

> "We believe that __________ because __________."

---

## Step 4 — Identify Assumptions

List at least five assumptions.

For example:

* Users struggle to find relevant jobs.
* Users trust personalized recommendations.
* Better recommendations will increase applications.

---

## Step 5 — Prioritize Risk

Which assumption is:

> **High importance + High uncertainty?**

Test that assumption first.

---

## Step 6 — Choose a Research Method

Choose the most appropriate method for each question:

| Question                                    | Method |
| ------------------------------------------- | ------ |
| Do users experience the problem?            | ?      |
| Why does the problem happen?                | ?      |
| Can users understand our proposed solution? | ?      |
| How many users experience the problem?      | ?      |
| Will users actually use the solution?       | ?      |

Possible methods:

* Interview
* Survey
* Analytics
* Prototype test
* Experiment

---

## Step 7 — Design an Experiment

Suppose you believe:

> Personalized recommendations will increase relevant job applications.

Design a simple experiment.

Define:

* Hypothesis
* Target users
* Control
* Experiment
* Primary metric
* Expected result
* Decision rule

---

# 60. Advanced Exercise

Choose one product you know well.

It could be:

* Trading platform
* Insurance platform
* Banking app
* LinkedIn
* E-commerce platform
* SaaS product

Find one important product problem.

Then complete:

### Problem

What is happening?

### Customer

Who experiences it?

### Evidence

What evidence do you have?

### Assumption

What are you assuming?

### Risk

What happens if you're wrong?

### Research Method

How will you test it?

### Hypothesis

What do you believe?

### Experiment

What is the cheapest way to test it?

### Metric

What will you measure?

### Decision

What result would make you:

* Continue?
* Iterate?
* Pivot?
* Stop?

---

# 61. PM Interview Questions

## Question 1: What is Product Discovery?

### Strong Answer

Product Discovery is the process of understanding customer problems, identifying opportunities, evaluating potential solutions, and reducing product risks before making significant investments in development.

---

## Question 2: What's the difference between Discovery and Delivery?

### Strong Answer

Discovery focuses on determining what problem we should solve and which solution is most likely to create value. Delivery focuses on building and shipping the chosen solution reliably and efficiently.

---

## Question 3: How do you validate a product idea?

### Strong Answer

I would first identify the key assumptions behind the idea and prioritize the riskiest ones. Then I would choose the cheapest reliable research method, such as interviews, analytics, prototypes, usability testing, or experiments. I would define measurable success criteria beforehand and use the evidence to decide whether to continue, iterate, pivot, or stop.

---

## Question 4: What is an MVP?

### Strong Answer

An MVP is the smallest product version that can deliver meaningful value while allowing the team to learn about important product assumptions through real usage. The goal isn't simply to build something small; it's to maximize learning and value while minimizing unnecessary investment.

---

## Question 5: What would you do if the CEO asked you to build a feature immediately?

### Strong Answer

I would first understand the underlying problem and business objective. If the problem is already well validated, I might move quickly. If there is significant uncertainty, I would propose a lightweight discovery step to validate the most important assumptions before committing substantial engineering resources.

---

## Question 6: How do you know when you've done enough discovery?

### Strong Answer

I would stop when the major value, usability, feasibility, and viability risks have been reduced enough that the team can make a confident investment decision. The goal isn't perfect certainty; it's enough evidence to make a good decision relative to the cost of further research.

---

# 62. Key Takeaways

1. **Product Discovery is about reducing uncertainty before making significant product investments.**
2. Discovery asks **what problem to solve** and **how best to solve it**.
3. Delivery focuses on building and shipping the chosen solution.
4. Discovery should be continuous rather than a one-time phase.
5. The four major product risks are **value, usability, feasibility, and viability**.
6. Every product idea contains assumptions.
7. High-impact and highly uncertain assumptions should be tested first.
8. Customer interviews are useful for understanding motivations and problems.
9. Observation reveals actual behavior.
10. Surveys help quantify known questions.
11. Usability testing helps identify problems with a proposed solution.
12. Prototypes allow teams to test ideas before building them.
13. Fake-door tests can measure initial interest.
14. Concierge MVPs test value through manual delivery.
15. Wizard-of-Oz experiments test experiences that appear automated.
16. An MVP should maximize learning and value, not simply minimize development effort.
17. Strong evidence comes from observed behavior rather than opinions alone.
18. Discovery experiments should lead to decisions.
19. Good Product Managers actively try to disprove their assumptions.
20. Discovery is not about proving that your idea is correct; it is about **learning whether it is worth pursuing**.
21. The core discovery loop is:

**Problem → Evidence → Hypothesis → Experiment → Learning → Decision**

---

# Preview of Day 35

## Product Requirements & Writing Effective PRDs

Topics:

* What product requirements are
* Why requirements matter
* PRD structure
* Problem statement
* Product context
* Goals and non-goals
* User stories
* Functional requirements
* Non-functional requirements
* Acceptance criteria
* Edge cases
* Business rules
* Dependencies
* Constraints
* Assumptions
* Success metrics
* MVP scope
* Out of scope
* Writing requirements for engineers and designers
* Common PRD mistakes
* Example PRD
* PRD review process
* Keeping requirements flexible without being ambiguous