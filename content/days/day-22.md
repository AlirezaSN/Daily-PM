# Day 22: Experimentation & A/B Testing

## Learning Objectives

By the end of this lesson, you should understand:

- Why experimentation is important in Product Management
- What A/B testing is
- How to design product experiments
- How to create experiment hypotheses
- The difference between control and variant groups
- Experiment metrics
- Statistical significance basics
- Common A/B testing mistakes
- How PMs make decisions from experiments

---

# Introduction: Decision Making With Evidence

Product Managers constantly make decisions:

- Should we change onboarding?
- Should we add a new feature?
- Should we redesign a page?
- Should we change pricing?

There are usually multiple opinions.

A weak approach:

```text
Opinion
 ↓
Decision
 ↓
Build
 ↓
Hope
```

A stronger approach:

```text
Hypothesis
 ↓
Experiment
 ↓
Measure Results
 ↓
Learn
 ↓
Decision
```

Experimentation helps reduce uncertainty.

---

# What Is Product Experimentation?

Product experimentation is a structured process of testing assumptions by changing something in the product and measuring the impact.

Examples:

- Changing onboarding flow
- Testing a new button design
- Trying different pricing plans
- Testing recommendation algorithms

---

# Why Experimentation Matters

## 1. Reduces Risk

Instead of fully building a feature:

Test the idea first.

---

## 2. Improves Decision Quality

Decisions are based on evidence instead of opinions.

---

## 3. Helps Understand Users

Experiments reveal:

- What users prefer
- What motivates behavior
- What creates value

---

## 4. Encourages Learning Culture

Failed experiments are not failures.

They are learning opportunities.

---

# What Is an A/B Test?

An A/B test compares two versions of something.

Users are randomly divided into groups.

---

## Control Group (A)

The existing version.

Example:

Current onboarding flow.

---

## Variant Group (B)

The new version.

Example:

New improved onboarding flow.

---

The team compares results.

Example:

```text
Version A:
10,000 users
1,000 completed signup

Conversion:
10%

----------------

Version B:
10,000 users
1,500 completed signup

Conversion:
15%
```

Result:

Version B performs better.

---

# A/B Testing Process

A typical experiment follows:

```text
Identify Problem
       ↓
Create Hypothesis
       ↓
Design Experiment
       ↓
Select Metrics
       ↓
Run Test
       ↓
Analyze Results
       ↓
Make Decision
```

---

# Step 1: Identify the Problem

Start with a user or business problem.

Example:

Problem:

> Many users abandon account creation.

Data:

Signup completion rate is low.

---

# Step 2: Create a Hypothesis

A hypothesis explains what you believe will happen.

Template:

> We believe that [change] will improve [metric] because [reason].

---

Example:

> We believe that reducing signup steps will increase registration completion because users experience less friction.

---

# Good Hypothesis Characteristics

A good hypothesis is:

## Specific

Bad:

> Users will like this.

Good:

> Reducing signup steps from five to three will increase completion rate by 10%.

---

## Measurable

You need a metric.

Example:

Conversion rate.

---

## Testable

You should be able to prove or disprove it.

---

# Step 3: Choose Experiment Type

Not every experiment requires A/B testing.

---

# A/B Test

Best for:

Comparing two alternatives.

Example:

Two onboarding designs.

---

# Prototype Test

Best for:

Early design validation.

Example:

Testing a new user flow before development.

---

# Fake Door Test

Best for:

Measuring interest.

Example:

Adding a button for a feature that does not exist yet.

---

# Before/After Analysis

Compare performance before and after a change.

Less reliable because other factors may influence results.

---

# Step 4: Define Metrics

Every experiment needs success metrics.

---

# Primary Metric

The main measurement.

Example:

Signup completion rate.

---

# Secondary Metrics

Additional measurements.

Example:

Time to complete signup.

---

# Guardrail Metrics

Metrics that prevent negative impact.

Example:

A new onboarding flow increases signup but decreases retention.

Retention is a guardrail metric.

---

# Example: Trading Platform Experiment

Goal:

Increase first-time investors.

---

Hypothesis:

> We believe that adding a guided investment tutorial will increase first-trade completion.

---

Experiment:

Control:

Current onboarding.

Variant:

New guided onboarding.

---

Primary Metric:

First-trade completion rate.

---

Secondary Metrics:

- Tutorial completion
- Time to first trade

---

Guardrail:

- User complaints
- Drop-off rate

---

# Statistical Significance (Basic Concept)

A common question:

> Is the result real or just random chance?

Example:

Version A:

10% conversion

Version B:

11% conversion

Is B actually better?

Maybe.

Maybe not.

---

Statistical significance helps determine whether the difference is meaningful.

---

# Sample Size Matters

Small experiments can be misleading.

Example:

10 users:

8 succeed

Looks impressive.

But:

The sample is too small.

---

100,000 users:

8,000 succeed

More reliable.

---

# Experiment Duration

Run experiments long enough to:

- Collect enough users
- Avoid unusual behavior
- Capture normal patterns

---

# Common Experiment Metrics

## Conversion Rate

Percentage completing an action.

Example:

Signup completion.

---

## Activation Rate

Percentage reaching first value.

Example:

First investment.

---

## Retention Rate

Percentage returning later.

---

## Engagement

Frequency of usage.

Example:

Weekly active users.

---

## Revenue Impact

Effect on business outcomes.

Example:

Subscription purchases.

---

# Example: LinkedIn Experiment

Problem:

Users do not complete profiles.

---

Hypothesis:

> Adding profile completion suggestions will increase profile completion.

---

Experiment:

A:

Current profile page.

B:

Profile page with recommendations.

---

Metrics:

Primary:

Profile completion rate.

Secondary:

- Time spent editing profile
- Number of connections created

---

Decision:

If B performs better:

Launch to all users.

---

# Example: Fintech Experiment

Problem:

Users create accounts but do not deposit money.

---

Possible Hypothesis:

> Showing trust information during deposit flow will increase deposit completion.

---

Experiment:

A:

Current deposit page.

B:

Deposit page with:

- Security explanation
- Customer protection information
- FAQ

---

Measure:

- Deposit conversion
- User abandonment
- Support requests

---

# Experiment Prioritization

Not every experiment is worth running.

Prioritize based on:

---

# Impact

How much improvement could happen?

---

# Confidence

How strong is the evidence?

---

# Effort

How difficult is the experiment?

---

A simple framework:

```text
Priority = Impact × Confidence
            ----------------
                 Effort
```

---

# Common A/B Testing Mistakes

## Mistake #1

Testing without a hypothesis.

Bad:

> Let's test a new design.

Good:

> Let's test whether a new design improves activation.

---

## Mistake #2

Changing too many things.

If everything changes, you don't know what caused the result.

---

## Mistake #3

Stopping too early.

Early results can be misleading.

---

## Mistake #4

Ignoring negative results.

A failed experiment still provides learning.

---

## Mistake #5

Optimizing only one metric.

Example:

Increasing clicks but reducing customer satisfaction.

---

# When NOT to A/B Test

A/B testing is not always appropriate.

Avoid when:

## Low User Volume

Not enough users for meaningful results.

---

## High Risk Changes

Example:

Security changes.

---

## Early Discovery

When you do not understand the problem yet.

Use research first.

---

# Interview Question

## Question

How would you decide whether to launch a new feature?

## Strong Answer

I would define the expected customer and business impact, identify key assumptions, and run appropriate experiments where possible. I would evaluate results using success metrics, guardrail metrics, and qualitative feedback before deciding whether to scale, iterate, or stop the feature.

---

# Mini Case Study

You are the PM of an investment app.

Problem:

Only 15% of verified users make their first trade.

Your team suggests:

> "Add educational videos before trading."

Design an experiment.

Answer:

## Hypothesis

What do you believe?

---

## Control Group

What is the current experience?

---

## Variant Group

What changes?

---

## Primary Metric

What defines success?

---

## Guardrail Metrics

What negative impact should you monitor?

---

## Decision

What happens if the experiment succeeds?

What happens if it fails?

---

# Key Takeaways

1. Experiments help PMs make evidence-based decisions.
2. A/B tests compare alternatives using real user behavior.
3. Every experiment needs a clear hypothesis.
4. Choose metrics before running tests.
5. Consider both positive and negative impacts.
6. Failed experiments create valuable learning.
7. Great PMs reduce uncertainty through experimentation.

---

# Day 22 Exercise

Choose a product:

- LinkedIn
- Spotify
- Uber
- Amazon
- Banking app
- Stock trading platform

Create an experiment.

## Step 1

Identify a problem.

---

## Step 2

Write a hypothesis:

> We believe that ______ will improve ______ because ______.

---

## Step 3

Define:

### Control Group

Current experience.

### Variant Group

New experience.

---

## Step 4

Choose metrics:

- Primary metric
- Secondary metrics
- Guardrail metrics

---

## Step 5

Make a decision rule:

Example:

"If conversion improves by 10% without hurting retention, we will launch."

---

# PM Reflection

Think about your current product.

Ask:

- How often do we validate decisions with experiments?
- Are we measuring outcomes or opinions?
- What assumptions are still untested?
- What is the cheapest way to learn?

Great Product Managers do not try to predict the future.

They design experiments to discover it.

---

# Preview of Day 23

## Product Strategy Fundamentals

Topics:

- What product strategy means
- Vision vs strategy vs roadmap
- Defining product direction
- Market and customer understanding
- Strategic goals
- Competitive positioning
- Strategic decision making