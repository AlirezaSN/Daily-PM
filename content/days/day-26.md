# Day 26: Prioritization Frameworks

## Learning Objectives

By the end of this lesson, you should understand:

- Why prioritization is difficult
- What Product Managers are actually prioritizing
- The difference between impact, value, effort, and urgency
- The RICE framework
- The ICE framework
- MoSCoW prioritization
- Value vs Effort
- Opportunity Scoring
- How to choose the right framework
- Common prioritization mistakes
- How to prioritize under uncertainty

---

# Introduction: You Can't Build Everything

A Product Manager almost always has more ideas than resources.

You may have:

- 50 feature requests
- 20 customer problems
- 10 strategic opportunities
- 5 engineers
- Limited time

You cannot do everything.

Therefore, Product Management requires making choices.

The real question is:

> **What should we do first, and what should we deliberately not do?**

---

# What Is Prioritization?

Prioritization is the process of deciding:

> Which problems, opportunities, features, or initiatives deserve resources and attention first?

Good prioritization considers:

- Customer value
- Business impact
- Strategic alignment
- Effort
- Risk
- Confidence
- Urgency

---

# Prioritization Is About Trade-offs

Imagine you have three opportunities:

| Initiative | Impact | Effort |
|---|---:|---:|
| A | High | Low |
| B | High | High |
| C | Low | Low |

You probably want:

1. A
2. B
3. C

But real product decisions are rarely this simple.

You also need to consider:

- Confidence
- Strategic importance
- Dependencies
- Timing
- Risk

---

# Why Prioritization Is Difficult

## 1. Limited Resources

You have limited:

- Engineering capacity
- Design capacity
- Budget
- Time

---

## 2. Uncertainty

You often don't know:

- How many users will adopt a feature
- How much revenue it will generate
- How difficult it will be
- Whether customers actually care

---

## 3. Conflicting Stakeholders

Different people want different things.

Sales:

> We need this feature for an important customer.

Engineering:

> We need to fix technical debt.

Marketing:

> We need this campaign feature.

Customers:

> We need better support.

The PM must balance these needs.

---

# The Four Basic Prioritization Questions

For every initiative ask:

### 1. How valuable is it?

### 2. How important is it strategically?

### 3. How difficult is it?

### 4. How confident are we?

---

# Framework 1: Value vs Effort

One of the simplest frameworks.

Plot initiatives on two dimensions:

```text
        HIGH VALUE
            │
     Quick  │   Big
     Wins   │   Bets
            │
────────────┼────────────
            │
    Small   │   Avoid
    Tasks   │   / Delay
            │
        LOW VALUE

     LOW EFFORT → HIGH EFFORT
```

---

# Quadrant 1: High Value + Low Effort

## Quick Wins

These are highly attractive.

Example:

Improve a confusing button label.

---

# Quadrant 2: High Value + High Effort

## Big Bets

Worth considering carefully.

Example:

Rebuild the entire onboarding system.

---

# Quadrant 3: Low Value + Low Effort

## Small Tasks

Can be done if capacity exists.

---

# Quadrant 4: Low Value + High Effort

## Avoid / Delay

Usually poor investments.

---

# Advantages

- Simple
- Easy to explain
- Good for workshops

---

# Disadvantages

- Subjective
- Does not account for confidence
- Does not quantify impact

---

# Framework 2: RICE

RICE is one of the most useful prioritization frameworks.

RICE stands for:

- Reach
- Impact
- Confidence
- Effort

Formula:

```text
RICE Score =
Reach × Impact × Confidence
---------------------------
Effort
```

---

# 1. Reach

How many users will be affected during a specific period?

Example:

> 10,000 users per quarter.

---

# 2. Impact

How much will each user be affected?

A common scale:

```text
3 = Massive
2 = High
1 = Medium
0.5 = Low
0.25 = Minimal
```

---

# 3. Confidence

How confident are we in our estimates?

Example:

```text
100% = High confidence
80% = Medium confidence
50% = Low confidence
```

---

# 4. Effort

How much work is required?

Could be measured in:

- Person-months
- Engineer-weeks
- Story points

---

# RICE Example

Suppose we have:

### Initiative A

Reach:

10,000 users

Impact:

2

Confidence:

80%

Effort:

4

RICE:

```text
10,000 × 2 × 0.8
----------------
4

= 4,000
```

---

### Initiative B

Reach:

5,000 users

Impact:

3

Confidence:

90%

Effort:

2

RICE:

```text
5,000 × 3 × 0.9
---------------
2

= 6,750
```

Therefore:

Initiative B has the higher RICE score.

---

# Why RICE Is Useful

RICE forces you to consider:

- How many users benefit
- How much they benefit
- How confident you are
- How much work is required

---

# Limitations of RICE

RICE can create a false sense of precision.

Example:

You calculate:

> RICE = 4,327

Does that mean the initiative is objectively correct?

No.

Your inputs are estimates.

RICE is a decision-support tool, not a decision-making machine.

---

# Framework 3: ICE

ICE stands for:

- Impact
- Confidence
- Ease

Formula:

```text
ICE =
Impact × Confidence × Ease
```

Usually each factor is scored on a simple scale such as 1–10.

---

# Example

Feature A:

Impact = 8

Confidence = 9

Ease = 7

ICE:

```text
8 × 9 × 7 = 504
```

---

# When ICE Is Useful

ICE is useful when:

- You need a quick prioritization
- Reach is difficult to estimate
- You want a lightweight framework

---

# RICE vs ICE

| RICE | ICE |
|---|---|
| More detailed | Simpler |
| Includes Reach | No Reach |
| Includes Effort | Uses Ease |
| Good for larger backlogs | Good for quick decisions |

---

# Framework 4: MoSCoW

MoSCoW divides items into four categories.

## M — Must Have

Critical.

Without it, the product cannot succeed.

---

## S — Should Have

Important but not essential.

---

## C — Could Have

Useful but lower priority.

---

## W — Won't Have

Not included for now.

---

# Example: Banking App MVP

### Must Have

- Login
- Account balance
- Transfers

### Should Have

- Spending insights

### Could Have

- Custom themes

### Won't Have

- Social banking features

---

# Advantages of MoSCoW

- Very simple
- Easy for stakeholder discussions
- Useful for MVPs

---

# Disadvantages

Teams often classify everything as:

> Must Have

If everything is "Must Have," the framework becomes useless.

---

# Framework 5: Opportunity Scoring

Opportunity scoring focuses on customer needs.

A simple concept:

> How important is this outcome to customers, and how satisfied are they with current solutions?

---

# Example

Customer need:

> "I want to understand investment risk before buying."

Importance:

9/10

Current satisfaction:

4/10

This represents a strong opportunity.

---

# Why Opportunity Scoring Is Useful

It focuses on:

> Customer problems

rather than:

> Feature requests.

This can be especially useful during Product Discovery.

---

# Framework 6: Kano Model

The Kano Model categorizes features based on how they affect customer satisfaction.

Common categories:

- Basic needs
- Performance needs
- Delighters

---

# Basic Needs

Customers expect them.

If missing:

Strong dissatisfaction.

Example:

A banking app must show account balances accurately.

---

# Performance Needs

More is usually better.

Example:

Faster transaction processing.

---

# Delighters

Unexpected features that create extra satisfaction.

Example:

A surprisingly useful personalized financial insight.

---

# Why Kano Is Useful

It helps PMs understand that:

> Not every feature creates value in the same way.

---

# Strategic Prioritization

Frameworks are useful, but strategy should come first.

Imagine your strategy is:

> Become the best platform for beginner investors.

You have two opportunities:

### Feature A

Advanced options trading.

### Feature B

Beginner investment guidance.

Even if Feature A has a slightly higher RICE score, Feature B may be strategically more important.

---

# Strategic Alignment

Before prioritizing, ask:

> Does this initiative support our strategic goals?

A simple scoring model:

```text
Strategic Alignment:
High
Medium
Low
```

An initiative with low strategic alignment may not deserve investment.

---

# Prioritization Should Consider Risk

Some initiatives have high potential but high uncertainty.

Example:

AI investment advisor.

Questions:

- Will users trust it?
- Will recommendations be accurate?
- Are there regulatory concerns?
- Will users actually use it?

Instead of immediately building it:

> Run an experiment first.

---

# Prioritization Under Uncertainty

When confidence is low, consider:

> Prioritize learning before building.

Example:

Instead of:

6-month development project

Run:

2-week prototype experiment.

The experiment reduces uncertainty.

Then reprioritize.

---

# Opportunity Cost

One of the most important concepts in prioritization.

Opportunity cost means:

> Choosing one option means giving up another.

Example:

If engineers spend three months building Feature A, they cannot spend those three months building Feature B.

Therefore, ask:

> What is the best alternative we are giving up?

---

# Example: Product Backlog

Suppose you have:

| Initiative | Value | Effort |
|---|---|---|
| Improve onboarding | High | Medium |
| New dark mode | Low | Low |
| AI assistant | High | Very High |
| Fix payment failures | Very High | Medium |
| Social feed | Medium | Very High |

A good PM might prioritize:

1. Fix payment failures
2. Improve onboarding
3. Validate AI assistant
4. Dark mode
5. Social feed

Why?

Because prioritization is not simply:

> "Build the most exciting feature."

It is:

> "Create the most important impact with our available resources."

---

# Common Prioritization Mistakes

## Mistake #1: HiPPO

HiPPO means:

> Highest Paid Person's Opinion.

Example:

CEO says:

> "We need this feature."

Team immediately prioritizes it.

A PM should instead ask:

- What problem does it solve?
- What evidence supports it?
- What is the expected impact?
- Does it align with strategy?

---

# Mistake #2: Treating Customer Requests as Priorities

Customers may request:

> "Add feature X."

The underlying need may be different.

Ask:

> What problem are they trying to solve?

---

# Mistake #3: Prioritizing Only by Effort

Cheap does not mean valuable.

A 1-day feature that nobody uses is still waste.

---

# Mistake #4: Prioritizing Only by Impact

A massive idea may require years of work.

Effort matters.

---

# Mistake #5: Ignoring Technical Debt

Technical debt can reduce:

- Development speed
- Reliability
- Scalability

Sometimes technical work should be prioritized even when customers don't directly see it.

---

# Mistake #6: Using One Framework for Everything

Different situations require different tools.

Use judgment.

---

# How to Choose a Prioritization Framework

## Use Value vs Effort when:

- You need a quick discussion
- You have limited data
- You're working with stakeholders

---

## Use RICE when:

- You have a large backlog
- You can estimate reach
- You need more structured comparison

---

## Use ICE when:

- Speed matters
- You want a lightweight approach

---

## Use MoSCoW when:

- Defining MVP scope
- Working under a deadline

---

## Use Opportunity Scoring when:

- You are doing customer discovery
- You want to prioritize customer needs

---

## Use Kano when:

- Evaluating customer satisfaction
- Deciding between basic features and delighters

---

# A Practical PM Prioritization Process

Instead of blindly applying a framework:

### Step 1

Start with strategy.

> What are we trying to achieve?

---

### Step 2

Identify customer problems.

> What problems matter most?

---

### Step 3

Estimate impact.

> What happens if we solve them?

---

### Step 4

Estimate effort.

> What will it cost?

---

### Step 5

Assess confidence.

> How much evidence do we have?

---

### Step 6

Consider risk and urgency.

> What could happen if we wait?

---

### Step 7

Prioritize.

> What should we do now?

---

### Step 8

Validate assumptions.

> Can we learn before building?

---

# Interview Question

## Question

How do you prioritize features?

## Strong Answer

I start with the product strategy and business goals, then identify the customer problem each initiative addresses. I evaluate expected impact, reach, effort, confidence, strategic alignment, and risk. Depending on the situation, I may use frameworks such as RICE or Value vs Effort, but I treat them as decision-support tools rather than automatic answers.

---

# Mini Case Study

You are the PM of a stock trading platform.

Your team has five potential initiatives:

| Initiative | Expected Impact | Effort | Confidence |
|---|---:|---:|---:|
| Improve onboarding | High | Medium | High |
| AI investment advisor | High | Very High | Low |
| Dark mode | Low | Low | High |
| Reduce payment failures | Very High | Medium | High |
| Advanced charts | Medium | High | Medium |

Your strategic goal is:

> Increase the number of successful beginner investors.

Think about:

- Which initiative should be first?
- Which should be tested?
- Which should be delayed?
- Which may not support the strategy?

---

# Key Takeaways

1. Product Managers constantly make trade-offs.
2. Prioritization is about maximizing impact with limited resources.
3. RICE considers Reach, Impact, Confidence, and Effort.
4. ICE is a simpler alternative.
5. MoSCoW is useful for scope decisions.
6. Opportunity Scoring focuses on customer needs.
7. Kano helps understand different types of customer expectations.
8. Strategy should guide prioritization.
9. Frameworks support judgment; they do not replace it.
10. Sometimes the best thing to prioritize is learning.

---

# Day 26 Exercise

Choose one product:

- LinkedIn
- Spotify
- Uber
- Amazon
- Banking app
- Stock trading platform

Create a prioritization exercise.

## Step 1: Create 8 Initiatives

Write eight potential features or product improvements.

---

## Step 2: Score Them

For each initiative, estimate:

- Impact
- Effort
- Confidence
- Strategic alignment

---

## Step 3: Apply RICE

Calculate a RICE score for each initiative.

---

## Step 4: Create a Value vs Effort Matrix

Put each initiative into one of four groups:

- Quick Win
- Big Bet
- Small Task
- Avoid / Delay

---

## Step 5: Compare the Results

Ask:

> Did the RICE ranking match my judgment?

If not:

> Why?

This is an important PM skill.

Numbers can inform your decision, but they should not replace critical thinking.

---

# PM Reflection

Think about your current product.

Ask:

- How are priorities currently decided?
- Are decisions driven by evidence or opinions?
- Do we consider opportunity cost?
- Are we prioritizing outcomes or features?
- Which low-confidence initiatives should we validate first?
- What important work are we saying "no" to?

Remember:

> **Prioritization is not about deciding what is good.**

Almost everything on a product backlog may be good.

The real question is:

> **What is most important right now?**

---

# Preview of Day 27

## Product Roadmapping

Topics:

- What a product roadmap is
- Roadmap vs backlog
- Strategic vs feature roadmaps
- Now / Next / Later
- Outcome-based roadmaps
- Roadmap time horizons
- Communicating roadmaps
- Managing roadmap changes
- Common roadmap mistakes