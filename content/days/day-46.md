# Day 46: Product Growth, Retention & Lifecycle Management

## Learning Objectives

By the end of this lesson, you should understand:

- What the customer lifecycle is
- The difference between acquisition, activation, engagement, and retention
- Different stages of the user lifecycle
- Why retention is critical to product growth
- What customer retention means
- What churn means
- How to measure retention
- Cohort analysis
- Retention curves
- User engagement
- Product stickiness
- Habit formation
- Churn prediction
- Reactivation and win-back strategies
- Lifecycle messaging
- Customer health
- Engagement segmentation
- Retention experiments
- Product adoption
- Lifecycle metrics
- How to build a retention strategy

---

# 1. What Is the Customer Lifecycle?

The **customer lifecycle** describes the stages a customer goes through in their relationship with a product.

A simplified lifecycle looks like:

```text
Acquisition
    ↓
Activation
    ↓
Engagement
    ↓
Retention
    ↓
Expansion
    ↓
Advocacy
````

Customers don't necessarily move through these stages linearly.

For example:

```text
New user
   ↓
Activated
   ↓
Inactive
   ↓
Reactivated
   ↓
Engaged
```

The Product Manager's job is to understand:

> **What causes users to move forward, stop progressing, or leave?**

---

# 2. Acquisition

**Acquisition** is the process of bringing new users into the product.

Examples:

* Search
* Advertising
* Referrals
* Social media
* Content marketing
* Partnerships
* Sales
* App stores

A common acquisition metric is:

```text
New users acquired
```

But acquisition alone doesn't indicate product success.

You can acquire thousands of users who never experience meaningful value.

---

# 3. Activation

Activation happens when a new user experiences meaningful value.

For example, in a project management product:

```text
Signup
   ↓
Create project
   ↓
Invite teammate
   ↓
Assign first task
```

The company might define:

> Creating a project and inviting at least one teammate

as its activation event.

Activation is important because users who experience value are generally more likely to continue using a product.

---

# 4. Engagement

**Engagement** describes how actively users interact with a product.

Possible engagement signals include:

* Sessions
* Frequency of use
* Actions completed
* Features used
* Content consumed
* Transactions
* Projects created

For example:

```text
User A:
Uses product once per month

User B:
Uses product 4 times per week
```

User B demonstrates higher engagement.

But engagement should always be interpreted in the context of customer value.

More activity is not necessarily better.

---

# 5. Retention

**Retention** means customers continue using the product over time.

For example:

```text
100 users start in January

January → 100
February → 60
March → 45
April → 35
```

The product retained a portion of the original cohort.

Retention answers:

> **Do customers continue receiving enough value to keep using the product?**

---

# 6. Retention vs. Churn

Retention and churn describe opposite sides of customer behavior.

### Retention

Customers continue using the product.

### Churn

Customers stop using or paying for the product.

Simplified:

```text
Starting customers
        ↓
     ┌──┴──┐
     ↓     ↓
 Retained Churned
```

A product with high churn will constantly need new customers just to maintain its customer base.

---

# 7. Why Retention Matters

Suppose two products acquire:

```text
10,000 users/month
```

Product A retains 80%.

Product B retains 20%.

Even if both have identical acquisition, Product A can build a much larger active customer base.

This is why:

> **Retention is one of the foundations of sustainable growth.**

---

# 8. The Growth Equation

A simplified growth model is:

```text
Growth
=
New Customers
+
Reactivated Customers
+
Expansion
-
Churn
```

This highlights an important point:

> Growth is not only about acquiring new customers.

You can also grow by:

* Keeping existing users
* Bringing inactive users back
* Increasing usage
* Expanding existing accounts

---

# 9. Customer Lifecycle Stages

A practical lifecycle model could be:

```text
Prospect
   ↓
New User
   ↓
Activated User
   ↓
Engaged User
   ↓
Retained User
   ↓
Loyal User
   ↓
Advocate
```

Some users may instead move toward:

```text
Inactive
   ↓
At Risk
   ↓
Churned
```

The purpose of lifecycle stages is not to create arbitrary labels.

The purpose is to:

> **Understand user behavior and determine the appropriate product action.**

---

# 10. New Users

A new user has recently entered the product.

The main questions are:

* Did they complete onboarding?
* Did they experience value?
* Did they understand the product?
* Did they encounter friction?
* Did they perform the activation event?

The primary objective is usually:

> **Move the user toward activation.**

---

# 11. Activated Users

An activated user has experienced meaningful value.

The next objective becomes:

> Turn activation into repeated value.

For example:

```text
First successful experience
        ↓
Second successful experience
        ↓
Regular usage
        ↓
Habit
```

Activation is the beginning of the customer relationship, not the end.

---

# 12. Engaged Users

Engaged users interact with the product regularly.

They may:

* Use important features
* Return frequently
* Complete meaningful tasks
* Invite others
* Create content
* Perform transactions

The Product Manager should understand:

> Which behaviors indicate genuine engagement?

---

# 13. Loyal Users

A loyal user repeatedly chooses the product over alternatives.

They may:

* Use it frequently
* Depend on it
* Have integrated it into workflows
* Recommend it to others
* Purchase additional functionality

Loyalty is often a result of:

```text
Consistent value
+
Low friction
+
Habit
+
Trust
```

---

# 14. At-Risk Users

An at-risk user is showing signs that they may stop using the product.

Possible signals:

* Usage frequency declining
* Important features no longer used
* Fewer sessions
* Lower transaction volume
* Unfinished workflows
* Support complaints
* Approaching contract renewal

For example:

```text
Weekly usage:
8 → 7 → 5 → 2 → 0
```

This trend may indicate risk.

---

# 15. Dormant Users

A dormant user has stopped using the product but has not necessarily formally churned.

For example:

```text
Last active:
60 days ago
```

Dormant users may still be recoverable.

The product can investigate:

* Why did they stop?
* Was value lost?
* Did their situation change?
* Did they encounter a problem?

---

# 16. Churned Users

A churned user has left the product according to a defined churn rule.

For a subscription:

> Subscription cancellation may define churn.

For a consumer app:

> No meaningful activity for 90 days might define churn.

The exact definition depends on the product.

---

# 17. Defining Churn

Churn needs a clear operational definition.

Examples:

### Subscription product

```text
Customer cancels subscription
```

### Marketplace

```text
No transaction for 180 days
```

### Consumer app

```text
No meaningful activity for 60 days
```

The definition should reflect the natural usage cycle.

A weekly product and an annual product should not use the same inactivity threshold.

---

# 18. Customer Retention Rate

A simple customer retention formula is:

```text
Retention Rate
=
(Customers at End - New Customers)
----------------------------------- × 100
Customers at Start
```

Example:

```text
Starting customers = 1,000
New customers = 200
Ending customers = 1,050
```

Therefore:

```text
Retention
=
(1,050 - 200) / 1,000
=
85%
```

---

# 19. User Retention

For a product, retention can be defined using user activity.

Suppose:

```text
1,000 users signed up on January 1
```

On January 8:

```text
400 users were active
```

Then:

```text
Day-7 retention = 40%
```

The exact activity definition matters.

For example:

> "Opened the app"

may be less meaningful than:

> "Completed a core action."

---

# 20. Cohort Analysis

A **cohort** is a group of users who share a common characteristic.

The most common example is:

> Users who signed up during the same period.

For example:

```text
January cohort
February cohort
March cohort
April cohort
```

Then you compare their behavior over time.

---

# 21. Why Cohorts Matter

Imagine total monthly active users are increasing.

That sounds positive.

But suppose:

```text
New users ↑
Retention ↓
```

The product may simply be replacing churned users with new users.

Cohort analysis can reveal this.

For example:

| Cohort   | Week 1 | Week 4 | Week 8 |
| -------- | -----: | -----: | -----: |
| January  |    60% |    35% |    25% |
| February |    65% |    40% |    30% |
| March    |    70% |    45% |    35% |

This suggests retention is improving across cohorts.

---

# 22. Retention Curve

A retention curve shows how the percentage of a cohort changes over time.

Example:

```text
Retention
100% |\
     | \
 80% |  \
     |   \
 60% |    \
     |     \
 40% |      \__
     |          \__
 20% |              \____
     |
     +----------------------
       Time
```

The shape can tell you a lot.

A steep initial drop may indicate:

* Poor onboarding
* Weak product value
* Wrong acquisition
* Poor activation

A curve that stabilizes may indicate a core group of loyal users.

---

# 23. Retention Curve Shapes

### Shape A: Continuous decline

```text
100%
 |
 |\
 | \
 |  \
 |   \
 |    \
 +---------
```

Potential problem:

> Users continue leaving.

### Shape B: Stabilization

```text
100%
 |
 |\
 | \
 |  \______
 |
 +---------
```

This may indicate:

> A retained core user base.

The shape is often more informative than a single retention number.

---

# 24. Retention by Segment

Retention should not always be analyzed for the entire customer base.

You can compare:

* Geography
* Device
* Acquisition channel
* Customer type
* Plan
* Industry
* User role
* Behavior

For example:

```text
Organic users → 45% retention
Paid ads → 20% retention
```

This could suggest that acquisition source affects user quality.

---

# 25. Behavioral Cohorts

Instead of grouping users only by signup date, you can group them by behavior.

For example:

```text
Users who invited teammates
Users who did not invite teammates
```

Then compare retention.

Suppose:

```text
Invited teammates → 70% retention
Didn't invite → 30% retention
```

This can help identify potentially important product behaviors.

Again:

> Correlation does not automatically mean causation.

---

# 26. Product Stickiness

**Stickiness** describes how frequently users return to a product.

A commonly used measure is:

```text
DAU
---
MAU
```

Where:

* DAU = Daily Active Users
* MAU = Monthly Active Users

Example:

```text
DAU = 20,000
MAU = 100,000
```

Then:

```text
Stickiness = 20%
```

This can be useful for products expected to be used frequently.

---

# 27. Don't Overuse Stickiness

DAU/MAU isn't appropriate for every product.

Imagine a tax filing product.

Customers may use it:

> Once or twice per year.

Low DAU/MAU doesn't mean the product is bad.

The correct metric depends on:

> **Expected usage frequency.**

---

# 28. Engagement Frequency

Different products have different natural usage cycles.

| Product Type       | Possible Natural Frequency |
| ------------------ | -------------------------- |
| Messaging          | Multiple times/day         |
| Project management | Daily/weekly               |
| Banking            | Weekly/monthly             |
| Tax software       | Yearly                     |
| Travel booking     | Occasional                 |

The Product Manager should define healthy engagement based on customer behavior.

---

# 29. Habit Formation

A product becomes habit-forming when users repeatedly perform a behavior because it provides meaningful value.

A simplified loop:

```text
Trigger
   ↓
Action
   ↓
Reward
   ↓
Repeated behavior
```

For example:

```text
Notification
   ↓
Open application
   ↓
Check team activity
   ↓
Take action
   ↓
Return later
```

But:

> Habit should be built around value, not addiction or manipulation.

---

# 30. Product Habit vs. Dependency

A healthy habit means:

> The product reliably helps users accomplish something important.

For example:

> Checking project status every morning.

A harmful dependency might involve:

> Repeatedly opening an app without meaningful value.

Product managers should optimize for:

> **Useful recurring behavior.**

---

# 31. Churn Analysis

When users churn, ask:

> Why?

Possible reasons:

### Product

* Missing features
* Bugs
* Poor UX
* Low performance

### Customer

* Business closed
* Need disappeared
* Budget changed

### Competition

* Better alternative
* Lower price
* Better functionality

### Experience

* Poor support
* Billing problems
* Difficult onboarding

Churn analysis should distinguish between:

> **Controllable vs. uncontrollable churn.**

---

# 32. Voluntary vs. Involuntary Churn

### Voluntary churn

The customer intentionally leaves.

Examples:

* Cancels subscription
* Stops using product
* Switches to competitor

### Involuntary churn

The customer leaves because of operational issues.

Examples:

* Payment failure
* Expired card
* Billing issue

These require different solutions.

---

# 33. Churn Rate

A simplified customer churn formula:

```text
Churn Rate
=
Customers Lost During Period
---------------------------- × 100
Customers at Start of Period
```

Example:

```text
Starting customers = 1,000
Lost customers = 50

Churn = 5%
```

Churn should be analyzed alongside:

* Retention
* Acquisition
* Revenue
* Expansion

---

# 34. Revenue Churn

Customer churn and revenue churn are different.

Suppose:

```text
10 small customers leave
```

but:

```text
1 large customer leaves
```

The number of churned customers might be small, while the revenue impact is large.

Revenue churn helps answer:

> How much revenue are we losing?

This is particularly important in B2B SaaS.

---

# 35. Net Revenue Retention

**Net Revenue Retention (NRR)** measures how revenue from an existing customer base changes over time, including expansion, contraction, and churn.

A simplified formula:

```text
NRR
=
(Start Revenue
- Churn
- Contraction
+ Expansion)
-------------------------
Start Revenue
× 100
```

Example:

```text
Starting revenue = $100,000

Churn = $10,000
Contraction = $5,000
Expansion = $20,000

Ending revenue from same customers
= $105,000

NRR = 105%
```

An NRR above 100% means the existing customer base expanded overall.

---

# 36. Why NRR Matters

Consider two SaaS companies.

### Company A

```text
NRR = 85%
```

### Company B

```text
NRR = 110%
```

Company B is generating more revenue from its existing customer base despite churn and contraction.

This can be a powerful growth engine.

---

# 37. Reactivation

**Reactivation** means bringing inactive users back.

Example:

```text
Active
  ↓
Inactive
  ↓
Re-engagement
  ↓
Active again
```

Reactivation can be cheaper than acquiring a completely new customer.

Possible mechanisms:

* Product improvements
* Personalized messages
* New features
* Relevant reminders
* Offers
* Completing unfinished tasks

---

# 38. Win-Back Strategies

A win-back campaign targets users who have churned.

For example:

```text
Churned customer
       ↓
Identify reason
       ↓
Address problem
       ↓
Communicate improvement
       ↓
Offer return path
```

The key is:

> Don't simply say "Come back."

Instead:

> Give the customer a reason to return.

---

# 39. Lifecycle Messaging

Different lifecycle stages may require different messages.

| Stage     | Possible Objective       |
| --------- | ------------------------ |
| New user  | Activate                 |
| Activated | Encourage repeated usage |
| Engaged   | Deepen adoption          |
| At risk   | Prevent churn            |
| Dormant   | Reactivate               |
| Churned   | Win back                 |
| Loyal     | Encourage advocacy       |

One generic notification for everyone is rarely optimal.

---

# 40. Personalization

Lifecycle messaging can be personalized based on:

* User behavior
* Features used
* Customer segment
* Lifecycle stage
* Previous activity
* Preferences

Example:

Instead of:

> "Come back and use our app!"

You might send:

> "Your project still has 3 unfinished tasks."

The second message is more relevant because it connects to actual user context.

---

# 41. Notification Fatigue

More messages do not necessarily create more engagement.

Too many notifications can lead to:

* Annoyance
* Muting
* Uninstalls
* Reduced trust
* Notification blindness

A good lifecycle strategy considers:

* Frequency
* Relevance
* Timing
* Channel
* User preferences

The goal is:

> **Useful communication, not maximum communication.**

---

# 42. Customer Health

Customer health is an assessment of how likely a customer is to remain successful with the product.

Possible signals:

```text
Usage
+
Feature adoption
+
Engagement
+
Support activity
+
Payment status
+
Customer sentiment
```

You can create a health score:

```text
Healthy
At Risk
Critical
```

---

# 43. Example Customer Health Score

Imagine:

```text
Usage frequency       → 30 points
Core feature adoption → 25 points
Team activity         → 20 points
Support sentiment     → 15 points
Payment health        → 10 points
```

Total:

```text
90–100 → Healthy
60–89  → At Risk
0–59   → Critical
```

The exact scoring system should be validated rather than assumed.

---

# 44. Predicting Churn

You can use behavioral signals to identify customers likely to churn.

For example:

```text
Usage ↓
Feature adoption ↓
Support complaints ↑
Login frequency ↓
```

Together these may indicate risk.

However:

> Prediction should lead to useful action.

If you can identify risk but cannot meaningfully intervene, the prediction may have limited product value.

---

# 45. Retention Experiments

Retention can be improved through experiments.

Examples:

### Onboarding

Hypothesis:

> A guided setup will improve early retention.

### Feature adoption

Hypothesis:

> Introducing users to Feature X will improve week-4 retention.

### Notifications

Hypothesis:

> A relevant reminder will increase weekly return rate.

### Product experience

Hypothesis:

> Reducing setup time will improve first-month retention.

Every experiment should have:

* Hypothesis
* Target segment
* Control
* Treatment
* Success metric
* Guardrail metrics

---

# 46. Retention Experiment Example

Suppose:

```text
Control:
Standard onboarding

Variant:
Guided onboarding
```

You measure:

```text
Day-7 retention
Day-30 retention
Activation rate
```

Suppose:

```text
Control → 30% Day-30 retention
Variant → 36% Day-30 retention
```

The variant appears promising.

But you should also check:

* Activation
* User quality
* Support volume
* Long-term retention

---

# 47. Retention Isn't Always a Messaging Problem

A common mistake is:

> "Users aren't returning, so let's send more notifications."

Sometimes the real problem is:

> **The product isn't delivering enough value.**

For example:

```text
Poor product value
       ↓
Low engagement
       ↓
Churn
```

Sending reminders may temporarily increase sessions without solving the underlying problem.

The Product Manager should ask:

> **Why would the customer want to return?**

---

# 48. Retention Strategy

A strong retention strategy can follow:

```text
Understand why users leave
          ↓
Identify valuable recurring behavior
          ↓
Improve activation
          ↓
Improve product value
          ↓
Strengthen adoption
          ↓
Reduce friction
          ↓
Identify at-risk users
          ↓
Reactivate users
          ↓
Measure retention
          ↓
Experiment
```

---

# 49. Retention and Product Value

The strongest retention strategy is usually:

> **Create more sustained customer value.**

For example:

```text
Customer problem
      ↓
Product solves problem
      ↓
Customer gets recurring value
      ↓
Customer continues using product
```

Retention is therefore often an outcome of product value.

---

# 50. Retention and Switching Costs

Switching costs can influence retention.

Examples:

* Data stored in the product
* Team workflows
* Integrations
* Custom configurations
* Learning investment

However:

> High switching costs are not a substitute for product value.

A strong product should retain customers because it continues to be useful, not simply because leaving is difficult.

---

# 51. Product Adoption and Retention

Feature adoption can influence retention.

Suppose:

```text
Users adopting Feature X
        ↓
50% retention

Users not adopting Feature X
        ↓
20% retention
```

This suggests Feature X may be important.

The next question is:

> Why?

Possibilities include:

* Feature X creates meaningful value
* Highly engaged users naturally discover Feature X
* Feature X is part of a successful workflow

Further research is required.

---

# 52. Lifecycle Segmentation

A useful lifecycle segmentation could be:

```text
New
Activated
Engaged
Loyal
At Risk
Dormant
Churned
```

Then define an objective for each.

| Segment   | Objective            |
| --------- | -------------------- |
| New       | Activation           |
| Activated | Repeat usage         |
| Engaged   | Deeper adoption      |
| Loyal     | Expansion / advocacy |
| At Risk   | Retention            |
| Dormant   | Reactivation         |
| Churned   | Win-back             |

This creates a more systematic lifecycle strategy.

---

# 53. Retention Metrics Dashboard

A lifecycle dashboard might include:

### Acquisition

* New users
* CAC
* Acquisition channel

### Activation

* Activation rate
* Time to value

### Engagement

* DAU
* WAU
* MAU
* Core actions

### Retention

* Day-1 retention
* Day-7 retention
* Day-30 retention
* Monthly retention

### Churn

* Customer churn
* Revenue churn

### Expansion

* Upgrade rate
* Expansion revenue
* NRR

### Reactivation

* Reactivation rate

---

# 54. Retention by Lifecycle Stage

You can analyze where users are lost.

Example:

```text
100,000 visitors
       ↓
20,000 signups
       ↓
10,000 activated
       ↓
5,000 engaged
       ↓
3,000 retained
```

Possible problem areas:

```text
Signup → Activation
```

or:

```text
Activation → Engagement
```

or:

```text
Engagement → Retention
```

Each requires a different strategy.

---

# 55. Leading vs. Lagging Retention Indicators

### Lagging indicators

These tell you what already happened:

* Churn
* Retention
* Revenue loss

### Leading indicators

These may predict future outcomes:

* Reduced usage
* Declining feature adoption
* Fewer sessions
* Unfinished workflows
* Reduced team activity

Leading indicators can help you act before churn happens.

---

# 56. Retention Isn't One Metric

There is no single universal retention metric.

Depending on the product, you may need:

* User retention
* Account retention
* Revenue retention
* Feature retention
* Cohort retention
* Behavioral retention

The Product Manager should choose metrics that reflect:

> **How customers receive ongoing value from the product.**

---

# 57. Example: Banking Product

Imagine a banking application.

A useful lifecycle might be:

```text
Signup
 ↓
Identity verification
 ↓
First deposit
 ↓
First transaction
 ↓
Recurring usage
 ↓
Multiple financial products
```

Retention could be measured through:

* Monthly active customers
* Transactions
* Deposits
* Recurring usage

Simply opening the app may not be the best indicator of value.

---

# 58. Example: B2B SaaS Product

For a project management platform:

```text
Signup
 ↓
Create workspace
 ↓
Create project
 ↓
Invite teammates
 ↓
Complete project tasks
 ↓
Weekly usage
 ↓
Team expansion
```

Important lifecycle metrics could include:

* Activation
* Weekly active teams
* Projects completed
* Team retention
* Seat expansion
* Revenue retention

---

# 59. Example: E-Commerce Product

For an e-commerce platform:

```text
Visit
 ↓
Signup
 ↓
First purchase
 ↓
Second purchase
 ↓
Repeat purchase
 ↓
Loyal customer
```

Important metrics might include:

* First purchase conversion
* Repeat purchase rate
* Purchase frequency
* Customer retention
* Average order value
* Customer lifetime value

Retention should reflect the natural purchasing cycle.

---

# 60. Building a Retention Strategy

When facing a retention problem, use this framework:

### Step 1 — Define retention

What does "retained" mean for this product?

### Step 2 — Analyze cohorts

Which cohorts retain better or worse?

### Step 3 — Segment users

Which customer groups behave differently?

### Step 4 — Identify valuable behavior

What actions correlate with long-term retention?

### Step 5 — Understand churn

Why do users leave?

### Step 6 — Identify friction

What prevents users from receiving value?

### Step 7 — Build hypotheses

What product changes could improve retention?

### Step 8 — Experiment

Test the highest-value hypotheses.

### Step 9 — Measure

Track short-term and long-term outcomes.

### Step 10 — Iterate

Keep improving the retention system.

---

# Key Takeaways

1. The customer lifecycle describes how customers interact with a product over time.
2. Acquisition brings users into the product, but acquisition alone does not create sustainable growth.
3. Activation is the point where users experience meaningful value.
4. Engagement measures how users interact with the product.
5. Retention measures whether customers continue receiving value over time.
6. Churn represents customers who stop using or paying for a product.
7. Retention is one of the foundations of sustainable product growth.
8. Customer lifecycle stages can include new, activated, engaged, loyal, at-risk, dormant, and churned users.
9. Different lifecycle stages require different product strategies.
10. Cohort analysis helps reveal how groups of users behave over time.
11. Retention curves provide more insight than a single retention percentage.
12. Retention should often be analyzed by customer segment and behavior.
13. DAU/MAU can be a useful stickiness metric for products with frequent usage.
14. Stickiness metrics are not appropriate for every product.
15. Healthy product habits are based on recurring customer value.
16. Churn analysis should distinguish between voluntary and involuntary churn.
17. Customer churn and revenue churn measure different things.
18. Net Revenue Retention captures churn, contraction, and expansion within an existing customer base.
19. Reactivation can recover inactive users.
20. Win-back strategies should provide a genuine reason for customers to return.
21. Lifecycle messaging should reflect the customer's current stage and context.
22. More notifications do not automatically produce better retention.
23. Customer health scores can help identify accounts that need attention.
24. Churn prediction is valuable only when it leads to useful intervention.
25. Retention experiments should be measured with meaningful success and guardrail metrics.
26. Retention problems are not always communication problems; they may indicate insufficient product value.
27. Feature adoption can provide useful signals about retention, but correlation does not prove causation.
28. Leading indicators can help identify churn risk before customers actually leave.
29. Retention should be defined according to the natural usage cycle of the product.
30. A strong retention strategy starts with understanding why customers stay and why they leave.
31. The best retention strategy is usually to create sustained customer value.
32. Retention, engagement, activation, monetization, and expansion should be considered as interconnected parts of the product lifecycle.

---

# Practical Exercise

Imagine you are the Product Manager of a B2B project management platform.

Current monthly data:

```text
100,000 website visitors
20,000 new signups
10,000 activated users
6,000 users active after 30 days
3,000 paying accounts
```

You discover:

```text
Users who invite teammates:
65% Day-30 retention

Users who don't invite teammates:
25% Day-30 retention
```

You also discover that many users stop using the product after creating their first project.

Analyze the situation.

Answer the following:

1. How would you define activation?
2. What might be the most important retention behavior?
3. Why might inviting teammates correlate with higher retention?
4. How would you determine whether the relationship is causal?
5. What would you investigate about users who create a project but don't return?
6. How would you segment the users?
7. What cohorts would you analyze?
8. What would you look for in the retention curve?
9. What leading indicators might predict churn?
10. How would you define an at-risk customer?
11. What could a customer health score include?
12. What lifecycle messages would you send to new users?
13. What would you send to dormant users?
14. How would you approach win-back?
15. What retention experiment would you run first?
16. What would be your primary success metric?
17. What guardrail metrics would you monitor?
18. How would you avoid improving retention through manipulative notifications?
19. What product changes could increase the frequency of valuable usage?
20. What would your overall retention strategy look like?

The goal is not simply to answer:

> "How do we stop users from leaving?"

Instead, think about:

> **"What value causes customers to stay, and how can the product consistently deliver more of that value?"**

---

# Preview of Day 47

## Product Growth Loops, Virality & Network Effects

Topics:

* Growth loops
* Growth loops vs. funnels
* Viral loops
* Referral loops
* Collaboration loops
* Content loops
* User-generated content loops
* Paid growth loops
* Product invitations
* Referral programs
* Viral coefficient
* Viral cycle time
* Organic growth
* Word of mouth
* Network effects
* Direct network effects
* Indirect network effects
* Marketplace network effects
* Data network effects
* Economies of scale
* Two-sided networks
* Chicken-and-egg problems
* Cold-start problem
* Network effects vs. virality
* Growth loop measurement
* Designing growth loops
* Common growth loop mistakes
* Sustainable viral growth
