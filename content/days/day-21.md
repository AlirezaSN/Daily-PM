# Day 21: Product Analytics Deep Dive

## Learning Objectives

By the end of this lesson, you should understand:

- What product analytics means
- How user behavior is tracked
- The importance of event tracking
- Funnels and conversion analysis
- Cohort analysis
- Retention analysis
- Feature adoption analysis
- How to use analytics for product decisions
- Common analytics mistakes

---

# Introduction: From Metrics to Insights

In Day 20, we learned:

> Metrics tell us what is happening.

Today, we learn:

> Analytics helps us understand why it is happening.

Example:

A trading app sees:

> First-trade completion dropped by 20%.

A basic metric tells us the problem.

Analytics helps answer:

- Where are users leaving?
- Which step causes friction?
- Which users are affected?
- What changed?

---

# What Is Product Analytics?

Product analytics is the process of collecting and analyzing user behavior data to understand:

- How users interact with a product
- Where users experience problems
- Which features create value
- How product changes impact outcomes

---

# Product Analytics vs Business Analytics

These concepts overlap but have different focuses.

---

# Business Analytics

Focus:

Overall company performance.

Examples:

- Revenue
- Profit
- Market share

---

# Product Analytics

Focus:

User behavior inside the product.

Examples:

- Feature usage
- User journeys
- Activation
- Retention

---

# Why Product Analytics Matters

## 1. Understand User Behavior

Analytics reveals what users actually do.

Important principle:

> What users do is often different from what users say.

---

## 2. Identify Problems

Example:

Users say:

> "The app is easy to use."

Analytics shows:

> 70% abandon onboarding.

There is a hidden problem.

---

## 3. Measure Product Impact

After launching a feature:

Question:

> Did this create value?

Analytics provides evidence.

---

# Event Tracking

The foundation of product analytics is:

# Events

An event represents an action performed by a user.

Examples:

- Open app
- Click button
- Search
- Create account
- Complete purchase
- Make investment

---

# Example: Trading Platform Events

User journey:

```text
Open App
    ↓
Login
    ↓
Complete Verification
    ↓
Deposit Money
    ↓
Search Stock
    ↓
Place Order
    ↓
Complete Trade
```

Each step can be tracked as an event.

---

# Event Properties

Events usually include additional information.

Example:

Event:

"Purchase Completed"

Properties:

- Product category
- Amount
- User type
- Location
- Device type

---

# Why Event Design Matters

Poor tracking creates poor decisions.

Example:

Tracking only:

> Button clicked

is not enough.

You need context:

- Which user?
- When?
- From which screen?
- What happened afterward?

---

# User Funnels

A funnel represents the steps users take to achieve a goal.

Example:

E-commerce purchase funnel:

```text
Visit Website
      ↓
View Product
      ↓
Add to Cart
      ↓
Checkout
      ↓
Purchase
```

---

# Funnel Analysis

Funnel analysis helps answer:

- Where do users drop?
- Which steps create friction?
- What should we improve?

---

# Example: Stock Trading Funnel

```text
Download App
      ↓
Create Account
      ↓
Verify Identity
      ↓
Deposit Money
      ↓
Make First Trade
```

Data:

100,000 downloads

↓

50,000 accounts

↓

30,000 verified

↓

10,000 deposits

↓

5,000 first trades

---

# Insight:

The biggest problem may not be trading.

The biggest problem may be verification.

---

# Conversion Rate

Conversion measures how many users complete an action.

Formula:

```text
Conversion Rate =

Users Completing Action
-----------------------
Users Starting Process
```

---

Example:

10,000 users visit signup page.

2,000 create accounts.

Conversion:

20%

---

# Improving Funnels

A PM should ask:

## Where is the biggest drop?

Example:

Signup:

90% completion

Verification:

40% completion

Problem:

Verification.

---

## Why are users dropping?

Possible reasons:

- Too complicated
- Lack of trust
- Technical issues
- Missing information

---

# Cohort Analysis

One of the most valuable analytics techniques.

A cohort is a group of users who share a common characteristic.

Examples:

- Users who signed up in January
- Users who came from ads
- Users using Android devices

---

# Why Cohorts Matter

Overall numbers can hide problems.

Example:

Total retention:

50%

Looks good.

But:

January users:

70%

February users:

30%

Something changed.

---

# Example: Trading App Cohort

Compare users by signup month.

| Cohort | Day 30 Retention |
|-|-|
| January Users | 40% |
| February Users | 25% |
| March Users | 20% |

Insight:

Recent users have worse retention.

Possible causes:

- New onboarding problem
- Product change
- Marketing quality issue

---

# Retention Analysis

Retention measures whether users continue receiving value.

---

# Types of Retention

## Day N Retention

Example:

Day 7 retention:

How many users return after 7 days?

---

## Rolling Retention

Measures whether users return anytime after a period.

---

## Revenue Retention

Measures whether customers continue generating revenue.

---

# Example

1000 users sign up.

After 30 days:

300 return.

30-day retention:

30%

---

# Feature Adoption Analysis

Launching a feature does not mean success.

You need to know:

- Do users discover it?
- Do they use it?
- Does it create value?

---

# Feature Adoption Funnel

```text
Feature Released
        ↓
Users Discover Feature
        ↓
Users Try Feature
        ↓
Users Repeat Usage
        ↓
Feature Creates Value
```

---

# Example: LinkedIn Premium Feature

Feature:

Profile views analytics.

Measure:

- Number of users viewing analytics
- Repeat usage
- Conversion to premium

---

# Activation Analysis

Activation focuses on the first valuable experience.

Example:

Spotify:

First song played.

LinkedIn:

Profile completed.

Trading app:

First successful investment.

---

# Time to Value

A very important product metric.

Question:

> How quickly does a user experience value?

---

Example:

Bad onboarding:

Create account → 7 days → First value

Better onboarding:

Create account → 5 minutes → First value

---

# Behavioral Analytics Tools

Common categories:

---

# Product Analytics Platforms

Examples:

- [Amplitude](https://amplitude.com?utm_source=chatgpt.com)
- [Mixpanel](https://mixpanel.com?utm_source=chatgpt.com)

Used for:

- Funnels
- Cohorts
- Retention
- User behavior

---

# Web Analytics

Example:

- [Google Analytics](https://analytics.google.com?utm_source=chatgpt.com)

Used for:

- Website traffic
- Acquisition
- Marketing performance

---

# Session Recording Tools

Used to observe user interactions.

Examples:

- Heatmaps
- User recordings

---

# Analytics and Product Decisions

Good analytics answers:

## Should we build this feature?

Look for:

- User demand
- Existing behavior
- Expected impact

---

## Did the feature work?

Measure:

Before vs after.

---

## What should we improve?

Find:

- Drop-off points
- User frustration
- Low adoption areas

---

# Example: LinkedIn Analytics

Goal:

Increase job applications.

Analytics:

Users view many jobs but apply rarely.

Possible insight:

Problem is not job discovery.

Problem is application confidence.

Possible solutions:

- Better job matching
- Resume improvement
- Application guidance

---

# Example: Fintech Analytics

Goal:

Increase active investors.

Data:

Many users complete signup.

Few users make deposits.

Insight:

The problem is between onboarding and funding.

Potential improvements:

- Better education
- Trust signals
- Simplified deposit process

---

# Common Analytics Mistakes

## Mistake #1

Tracking everything.

More data does not always mean better decisions.

---

## Mistake #2

Looking only at averages.

Averages hide user differences.

Use cohorts.

---

## Mistake #3

Confusing correlation with causation.

Example:

Users who watch tutorials invest more.

Does the tutorial cause investment?

Maybe experienced users watch tutorials.

---

## Mistake #4

Ignoring qualitative research.

Analytics tells:

"What happened?"

Research tells:

"Why?"

---

## Mistake #5

Measuring activity instead of outcomes.

Bad:

Number of clicks.

Better:

Successful customer outcomes.

---

# Interview Question

## Question

How would you analyze a feature that has low adoption?

## Strong Answer

I would first analyze the feature funnel to understand where users drop off. I would look at discovery, usage, repeat engagement, and user segments. Then I would combine quantitative data with qualitative research to understand why adoption is low and decide whether to improve, reposition, or remove the feature.

---

# Mini Case Study

You are the PM of a banking app.

A new budgeting feature was launched.

After one month:

- 100,000 users saw the feature.
- 20,000 opened it.
- 5,000 created budgets.
- 500 used it again.

Analyze:

## Funnel

Where is the biggest problem?

---

## Possible Causes

Why might users stop?

---

## Data Needed

What additional analytics would you collect?

---

## Improvements

What experiments would you run?

---

# Key Takeaways

1. Analytics helps PMs understand user behavior.
2. Events are the foundation of product analytics.
3. Funnels reveal where users drop.
4. Cohorts reveal hidden patterns.
5. Retention is one of the strongest product health indicators.
6. Feature adoption requires measurement.
7. Combine analytics with customer research.

---

# Day 21 Exercise

Choose one product:

- LinkedIn
- Spotify
- Uber
- Amazon
- Banking app
- Stock trading platform

Create an analytics plan.

## Step 1: Define the Main User Journey

Example:

Signup → First Value → Repeat Usage

---

## Step 2: Define Events

List 10 important user events.

---

## Step 3: Create a Funnel

Identify:

- Starting point
- Steps
- Conversion rates

---

## Step 4: Create a Cohort Analysis

Choose:

- Signup month
- User type
- Acquisition source

---

## Step 5: Identify One Improvement Opportunity

Use analytics evidence.

---

# PM Reflection

Think about your product.

Ask:

- Do we know where users struggle?
- Are we tracking important events?
- Which user behaviors indicate success?
- Are we using data to make decisions?

Great Product Managers do not just collect data.

They turn data into insights and insights into action.

---

# Preview of Day 22

## Experimentation & A/B Testing

Topics:

- Experiment design
- A/B testing fundamentals
- Hypothesis creation
- Statistical significance
- Experiment metrics
- Common testing mistakes
- Making decisions from experiments