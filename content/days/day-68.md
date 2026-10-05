# Day 68: Product Lifecycle Management

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain the Product Lifecycle and its major stages.
- Understand how product strategy changes across lifecycle stages.
- Distinguish Product-Market Fit from product maturity.
- Identify the right metrics for different lifecycle stages.
- Understand when to invest, optimize, reposition, harvest, or retire a product.
- Manage products that are growing, mature, declining, or strategically important.
- Understand cannibalization and portfolio effects.
- Build lifecycle-based roadmaps.
- Make product sunset and retirement decisions.
- Apply lifecycle thinking to fintech and digital products.
- Explain Product Lifecycle Management in a Senior Product Manager interview.

---

# 1. What Is Product Lifecycle Management?

A product is rarely static.

Customer needs change.

Markets change.

Competitors change.

Technology changes.

Business models change.

As a result, the product itself evolves over time.

**Product Lifecycle Management (PLM)** is the process of managing a product's strategy, investment, development, growth, optimization, and eventual retirement throughout its lifecycle.

A simplified lifecycle looks like:

```text
                    PRODUCT LIFECYCLE

                        Maturity
                       /--------\
                      /          \
        Growth       /            \      Decline
          /---------/              \---------\
         /                                    \
Introduction                                  Retirement
````

The traditional stages are:

1. Introduction
2. Growth
3. Maturity
4. Decline
5. Retirement

However, real products do not always follow this smooth curve.

A product may:

* Re-enter growth after repositioning.
* Stay mature for many years.
* Decline rapidly.
* Be revived through innovation.
* Be replaced by another product.
* Remain strategically important despite declining usage.

Therefore:

> Product lifecycle is a strategic model, not a deterministic law.

---

# 2. Why Lifecycle Thinking Matters

A common product management mistake is using the same strategy throughout the product's life.

For example:

A company launches a product and continues aggressively acquiring users even after the market becomes saturated.

Or:

A mature product continues receiving new features while basic usability and reliability deteriorate.

Or:

A declining product keeps receiving engineering resources simply because it has historically been important.

Lifecycle thinking helps answer:

> What should we optimize for at this stage of the product's life?

The answer changes over time.

---

# 3. The Five Lifecycle Stages

A useful simplified model is:

| Stage        | Primary Question                      |
| ------------ | ------------------------------------- |
| Introduction | Does anyone want this?                |
| Growth       | How do we scale it?                   |
| Maturity     | How do we maximize and defend value?  |
| Decline      | How do we manage declining economics? |
| Retirement   | How do we safely exit or migrate?     |

Each stage requires different:

* Goals
* Metrics
* Investments
* Roadmap decisions
* Organizational focus

---

# 4. Stage 1 — Introduction

The product has recently launched.

The primary objective is usually:

> Validate whether the product solves a meaningful customer problem.

Typical characteristics:

* Low awareness
* Small customer base
* High uncertainty
* Unproven economics
* Frequent product changes
* High learning velocity

The team should prioritize:

* Customer feedback
* Product usability
* Activation
* Retention
* Product-market fit
* Experimentation

Not:

> "How many features can we ship?"

---

# 5. Introduction Metrics

Important metrics can include:

### Acquisition

How many relevant users are discovering the product?

### Activation

Do users experience the product's core value?

### Retention

Do they come back?

### Engagement

Do they meaningfully use the product?

### Conversion

Do users take the desired business action?

### Qualitative signals

What are customers saying?

At this stage, absolute numbers may be less important than learning velocity.

For example:

10,000 users with 2% retention may be worse than:

1,000 users with 40% retention.

---

# 6. Product-Market Fit

One of the major goals during Introduction is achieving Product-Market Fit (PMF).

A simple interpretation is:

> A meaningful group of customers consistently chooses the product because it solves an important problem for them.

PMF is not simply:

* Lots of downloads
* High traffic
* Media attention
* Revenue
* Positive feedback

A product can have:

* High acquisition
* Low retention

and still lack strong product-market fit.

A stronger PMF signal is:

> Customers continue using or paying for the product because they receive meaningful value.

---

# 7. Introduction Strategy

Typical priorities:

```text
Problem validation
       ↓
Solution validation
       ↓
MVP
       ↓
Early users
       ↓
Activation
       ↓
Retention
       ↓
Product-Market Fit
       ↓
Repeatable growth
```

The biggest mistake is scaling before validating.

If the product does not retain users, pouring more acquisition into it may simply create:

> More users who leave.

---

# 8. Stage 2 — Growth

Once the product demonstrates strong demand, attention shifts toward scaling.

Typical characteristics:

* Increasing adoption
* Stronger retention
* Growing revenue
* More competitors
* Increasing operational complexity
* Larger teams
* More customers with different needs

The core question becomes:

> How do we scale the product without destroying its economics or customer experience?

---

# 9. Growth Strategy

Growth can come from:

### Acquisition

Get more customers.

### Activation

Convert more acquired users into active users.

### Retention

Keep existing users.

### Monetization

Increase revenue per customer.

### Expansion

Sell additional products or services.

A useful growth equation is:

```text
Growth
  =
Acquisition
× Activation
× Retention
× Monetization
× Expansion
```

The exact mathematical relationship depends on the business model, but the framework reminds PMs that growth is not simply acquisition.

---

# 10. Growth-Stage Product Strategy

During Growth, PMs often need to:

* Improve onboarding
* Optimize conversion
* Expand product capabilities
* Improve reliability
* Build scalable infrastructure
* Develop growth loops
* Expand distribution
* Improve monetization
* Segment customers
* Build defensibility

The product shifts from:

> "Can this work?"

toward:

> "Can this work at scale?"

---

# 11. Scaling Creates New Problems

A product that works for 10,000 users may not work for 10 million.

Growth can create:

* Infrastructure bottlenecks
* Customer support overload
* Fraud
* Operational complexity
* Performance problems
* Data quality problems
* Organizational bottlenecks
* Regulatory challenges

Therefore:

> Growth is not simply a marketing problem.

It is also a product, technology, operations, and organizational problem.

---

# 12. Stage 3 — Maturity

Eventually growth slows.

The product has:

* Large customer base
* Established competitors
* Stable demand
* Strong brand awareness
* Mature infrastructure
* More predictable economics

The primary question becomes:

> How do we maximize and defend the value of the product?

This does not mean:

> Stop innovating.

It means innovation becomes more selective.

---

# 13. Mature Product Strategy

A mature product may focus on:

* Retention
* Monetization
* Efficiency
* Reliability
* Customer experience
* Differentiation
* Cross-sell
* Upsell
* Operational excellence
* Cost optimization

Instead of shipping many features, the team may focus on:

> Making the core product significantly better.

---

# 14. The Feature Factory Problem in Mature Products

Mature products often accumulate features.

Over time:

```text
Feature
   ↓
Feature
   ↓
Feature
   ↓
Feature
   ↓
Feature
   ↓
Complexity
```

The result can be:

* Confusing UX
* Higher maintenance costs
* More bugs
* More support tickets
* Slower development
* Feature discoverability problems

A mature PM should ask:

> Does this feature create enough value to justify its ongoing complexity?

Sometimes the best roadmap item is:

> Remove something.

---

# 15. Mature Product Metrics

Important metrics may include:

### Retention

Are existing customers staying?

### Revenue per customer

Is monetization improving?

### Gross margin

Is the product economically healthy?

### Cost to serve

How expensive is each customer?

### Customer satisfaction

Is the experience deteriorating?

### Reliability

Is the product stable?

### Churn

Are customers leaving?

### Expansion

Are customers buying more?

The emphasis shifts from pure growth toward:

> Sustainable value creation.

---

# 16. Stage 4 — Decline

Products may decline because:

* Customer needs change
* Technology becomes obsolete
* Competitors create better alternatives
* Market size shrinks
* Economics deteriorate
* Regulation changes
* The company shifts strategy
* A new internal product replaces the old one

Decline does not necessarily mean failure.

A product may be declining while still generating significant profit.

For example:

```text
Usage ↓
Revenue ↓
But
Profitability remains strong
```

The appropriate strategy may be:

> Harvest rather than immediately retire.

---

# 17. Harvesting a Product

Harvesting means reducing new investment while continuing to extract value from the existing customer base.

For example:

* Minimal feature development
* Focus on reliability
* Reduce operating costs
* Maintain critical support
* Avoid major new investments
* Migrate customers gradually

This can be rational when:

> The product still generates positive economic value, but growth opportunities are limited.

---

# 18. Decline Does Not Always Mean Retirement

Consider four situations:

### A — Declining usage, high profitability

Possible strategy:

**Harvest**

### B — Declining usage, poor profitability

Possible strategy:

**Retire**

### C — Declining usage, strategic importance

Possible strategy:

**Reposition**

### D — Declining usage due to temporary issue

Possible strategy:

**Recover**

Therefore:

> Lifecycle stage alone does not determine the strategy.

You must combine lifecycle signals with economics and strategy.

---

# 19. Stage 5 — Retirement

Eventually a product may no longer justify continued investment.

Retirement means:

* Stop new development
* Migrate customers
* Disable functionality
* Shut down infrastructure
* Terminate contracts
* Archive data
* Provide customer communication
* Manage regulatory obligations

Product retirement is itself a product management problem.

---

# 20. Product Sunset

A **sunset** is the planned process of ending a product, feature, or service.

A good sunset usually includes:

```text
Decision
   ↓
Customer impact analysis
   ↓
Alternative solution
   ↓
Migration plan
   ↓
Communication
   ↓
Migration
   ↓
Final shutdown
   ↓
Data / operational cleanup
```

The goal is not simply:

> "Turn it off."

The goal is:

> Move customers safely from the old experience to the best available alternative.

---

# 21. Why Product Sunsets Are Difficult

Customers may depend on the product.

Employees may have emotional attachment.

Sales teams may depend on the revenue.

Executives may remember the product's historical success.

Engineering may have invested heavily in it.

This creates a psychological problem:

> Historical importance is not the same as future value.

A product should be evaluated based on its future economics and strategic role.

---

# 22. Sunk Cost and Product Retirement

Suppose a company spent:

$10M

building a product.

Today:

* Annual revenue = $1M
* Annual operating cost = $2M
* Customer migration is possible

Someone says:

> "We can't shut it down after spending $10M."

This is sunk-cost thinking.

The correct question is:

> "From today forward, is continuing to operate this product better than the alternatives?"

Past investment cannot be recovered by continuing to spend money.

---

# 23. Repositioning

A declining product does not always need to be retired.

Sometimes the product can be repositioned.

For example:

```text
Old Product
    ↓
New customer segment
    ↓
New use case
    ↓
New value proposition
    ↓
New product-market fit
```

Repositioning can involve:

* New target customers
* New pricing
* New distribution
* New positioning
* New use case
* New business model

This can effectively restart the lifecycle.

---

# 24. Product Lifecycle Is Not Always Linear

A product may experience:

```text
Introduction → Growth → Maturity → Decline
                         ↓
                    Repositioning
                         ↓
                       Growth
```

Or:

```text
Growth → Maturity → New Innovation → New Growth
```

For example, a mature platform may launch a new business model that creates a new growth curve.

This is sometimes called:

> **Second-order growth.**

---

# 25. Lifecycle vs Product-Market Fit

These concepts are related but different.

### Product-Market Fit

Describes the relationship between:

> Product and customer demand.

### Product Lifecycle

Describes:

> The product's evolution over time.

A product can be:

* Early lifecycle + weak PMF
* Early lifecycle + strong PMF
* Mature lifecycle + strong PMF
* Mature lifecycle + declining PMF
* Declining lifecycle + still profitable

Therefore:

> PMF is not a lifecycle stage.

---

# 26. Lifecycle Metrics Change Over Time

The same metric can mean different things at different stages.

Consider Monthly Active Users (MAU).

### Introduction

Increasing MAU may indicate early traction.

### Growth

Increasing MAU may indicate successful scaling.

### Maturity

Stable MAU may be perfectly healthy if revenue and retention are strong.

### Decline

Declining MAU may be acceptable if low-value users are leaving while high-value customers remain.

Therefore:

> Never evaluate a metric without understanding the lifecycle stage and business model.

---

# 27. Lifecycle-Based KPI Framework

A useful model:

| Lifecycle Stage | Primary Focus      | Example Metrics                               |
| --------------- | ------------------ | --------------------------------------------- |
| Introduction    | Validation         | Activation, retention, PMF signals            |
| Growth          | Scaling            | Acquisition, retention, conversion, revenue   |
| Maturity        | Optimization       | Profitability, retention, ARPU, efficiency    |
| Decline         | Value preservation | Contribution, churn, cost-to-serve            |
| Retirement      | Migration          | Migration rate, support volume, residual cost |

The exact metrics depend on the product.

---

# 28. Lifecycle-Based Roadmapping

Roadmaps should change as products mature.

### Introduction roadmap

Focus:

* Core value
* Usability
* Validation
* Critical missing capabilities

### Growth roadmap

Focus:

* Scaling
* Growth
* Monetization
* Reliability
* Expansion

### Maturity roadmap

Focus:

* Optimization
* Retention
* Efficiency
* Differentiation
* Platform leverage

### Decline roadmap

Focus:

* Reliability
* Cost reduction
* Migration
* Risk management

### Retirement roadmap

Focus:

* Customer migration
* Communication
* Data
* Compliance
* Shutdown

This is much better than treating the roadmap as an endless list of features.

---

# 29. Lifecycle-Based Resource Allocation

Resource allocation should also change.

For example:

```text
Introduction
High uncertainty
→ High learning investment

Growth
High opportunity
→ High scaling investment

Maturity
Stable economics
→ Optimization + selective innovation

Decline
Lower opportunity
→ Cost control + migration

Retirement
Minimal future value
→ Controlled shutdown
```

The objective is:

> Match investment intensity to expected future value.

---

# 30. Product Portfolio Lifecycle

Companies rarely have only one product.

They may have:

* New products
* Growth products
* Mature products
* Declining products

This creates a portfolio.

For example:

| Product | Stage        | Strategy |
| ------- | ------------ | -------- |
| A       | Introduction | Validate |
| B       | Growth       | Scale    |
| C       | Maturity     | Optimize |
| D       | Decline      | Harvest  |
| E       | Retirement   | Exit     |

This is important because a company needs a balanced portfolio.

If every product is mature:

> Future growth may be weak.

If every product is experimental:

> Financial stability may be weak.

A healthy portfolio balances:

* Current cash generation
* Near-term growth
* Future opportunities

---

# 31. The Product Portfolio Flywheel

A useful portfolio model is:

```text
Mature Products
      ↓
Generate Cash
      ↓
Fund Growth Products
      ↓
Growth Products Mature
      ↓
Fund New Innovation
      ↓
New Products Grow
      ↓
Portfolio Renews
```

This is one reason lifecycle management is not only about individual products.

It is also about:

> Continuous renewal of the company's product portfolio.

---

# 32. Cannibalization

One product can reduce demand for another product.

This is called:

> **Cannibalization.**

Example:

A company has:

### Product A

$10/month

The company launches:

### Product B

$15/month

Some existing A customers move to B.

Revenue might increase.

But some of B's revenue is not incremental.

It came from A.

Therefore, when evaluating a new product, ask:

> How much revenue is truly incremental?

Suppose:

New product revenue:

$2M

But:

$1.2M comes from existing customers moving from the old product.

The incremental revenue is not simply $2M.

You need to consider the economic effect on the old product.

---

# 33. Cannibalization Can Be Good

Cannibalization is not automatically negative.

Suppose:

Old product:

$5/month

New product:

$10/month

Customers migrate from old to new.

Even though old revenue declines, total economics may improve.

Cannibalization can also be strategically useful when:

> You would rather cannibalize yourself than allow a competitor to do it.

This is known as:

> **Self-cannibalization.**

---

# 34. Product Replacement

Sometimes a company deliberately replaces one product with another.

For example:

```text
Legacy Platform
       ↓
Migration
       ↓
New Platform
       ↓
Legacy Retirement
```

This creates a difficult product management problem:

* When should migration begin?
* How much should be invested in the legacy product?
* What features must the new product have?
* How should customers be segmented?
* How long should both products coexist?

A common mistake is maintaining both products indefinitely.

That can double:

* Engineering complexity
* Support costs
* Infrastructure
* Analytics
* Operational processes

---

# 35. Dual-Running Cost

When replacing a product, companies often have a period where both systems operate.

For example:

```text
New Platform ──────────────→
Old Platform ──────────────→ Retirement
              ↑
        Dual-running period
```

During this period, the company pays for:

* Two systems
* Two support models
* Data synchronization
* Migration
* Additional operational complexity

Therefore:

> Migration speed has an economic value.

But moving too quickly can create customer risk.

The PM must balance:

> Migration speed vs migration safety.

---

# 36. Lifecycle Management in Fintech

Fintech products are especially interesting because lifecycle decisions interact with:

* Regulation
* Compliance
* Risk
* Trust
* Financial economics
* Operational reliability

Imagine an old trading feature.

Usage has declined 40%.

But the feature:

* Generates little revenue
* Has high maintenance cost
* Requires regulatory reporting
* Creates operational risk

The correct decision may be:

> Retire it.

However, retirement must account for:

* Existing positions
* Customer obligations
* Historical data
* Legal requirements
* Support
* Regulatory reporting

This makes lifecycle management more complex than simply turning off a feature.

---

# 37. Example: Cryptocurrency Exchange Product

Imagine a crypto exchange launched a feature:

> "Advanced Trading Interface"

Lifecycle:

### Introduction

Goal:

Validate whether advanced traders need it.

Metrics:

* Activation
* Repeat usage
* Trading volume
* Retention

### Growth

Goal:

Scale adoption.

Metrics:

* Active traders
* Trading volume
* Revenue
* Retention

### Maturity

Goal:

Defend market position.

Metrics:

* Market share
* Trading volume
* Revenue
* Reliability
* Customer satisfaction

### Decline

Suppose a new competitor offers a superior interface.

Usage drops.

Strategy could become:

* Reduce feature investment
* Improve only critical issues
* Migrate users to a new experience

### Retirement

Eventually:

* Announce sunset
* Provide replacement
* Migrate users
* Archive required data
* Disable old interface

This is Product Lifecycle Management in practice.

---

# 38. Product Lifecycle and Unit Economics

Lifecycle stage affects economics.

For example:

### Introduction

CAC may be high.

Support costs may be high.

Economics may be uncertain.

### Growth

Economies of scale may improve margins.

### Maturity

CAC may increase because the market becomes saturated.

Retention may become the major economic lever.

### Decline

Revenue decreases while fixed costs remain.

This can compress margins.

Therefore:

> Lifecycle management and unit economics should be analyzed together.

---

# 39. Lifecycle and Cost Structure

A declining product can become dangerous when:

```text
Revenue ↓
Customers ↓
Usage ↓

but

Fixed Costs remain
```

For example:

Revenue:

$5M → $3M → $2M

Infrastructure + engineering + support:

$2M → $2M → $2M

Profit:

$3M → $1M → $0M

At some point, continuing may destroy value.

This is why PMs should monitor:

> Cost-to-serve relative to remaining product value.

---

# 40. Product Sunset Decision Framework

Before retiring a product, ask:

### Customer

* How many customers depend on it?
* How valuable are they?
* What alternatives exist?
* What migration friction exists?

### Economics

* Revenue?
* Contribution?
* Cost-to-serve?
* Future investment required?

### Strategic

* Does it support strategic positioning?
* Does it enable other products?
* Does it create ecosystem value?

### Technology

* Maintenance cost?
* Technical debt?
* Security risk?
* Infrastructure dependencies?

### Regulation

* Data retention?
* Contractual obligations?
* Regulatory requirements?

### Migration

* Is there a viable replacement?
* How long will migration take?
* What incentives are needed?

---

# 41. Sunset Success Metrics

A sunset should have measurable outcomes.

Examples:

### Migration rate

$$
Migration\ Rate =
\frac{Customers\ Migrated}{Customers\ Targeted}
$$

### Residual usage

How many customers still use the legacy product?

### Support volume

How many support requests are generated?

### Churn

How many customers leave because of the sunset?

### Cost reduction

How much operating cost is removed?

### Revenue retention

How much revenue survives migration?

The goal is not:

> "Shut down the product."

The goal is:

> "Successfully transition customers while improving economic and strategic outcomes."

---

# 42. Common Lifecycle Management Mistakes

## Mistake 1 — Treating Every Product as a Growth Product

Not every product needs aggressive growth.

---

## Mistake 2 — Confusing Maturity With Failure

A mature product can be highly successful.

---

## Mistake 3 — Ignoring Decline

Teams sometimes react too late.

By the time retirement is considered, migration becomes expensive.

---

## Mistake 4 — Retiring Too Quickly

Declining usage does not automatically mean the product should disappear.

It may still be profitable or strategically important.

---

## Mistake 5 — Using the Same KPIs Forever

The correct metrics change across lifecycle stages.

---

## Mistake 6 — Feature Accumulation

Mature products can become unnecessarily complex.

---

## Mistake 7 — Ignoring Cannibalization

New-product revenue may simply replace old-product revenue.

---

## Mistake 8 — Ignoring Migration Cost

Replacing a product is itself an investment.

---

## Mistake 9 — Sunk Cost Bias

Past investment should not dictate future investment.

---

## Mistake 10 — No Exit Criteria

Teams need to know what evidence would cause them to reduce investment or retire a product.

---

# 43. A Product Lifecycle Management Framework

A practical framework:

## 1. Identify lifecycle stage

Ask:

* Is the product validating?
* Scaling?
* Optimizing?
* Declining?
* Being retired?

## 2. Define the strategic objective

Examples:

* Validate
* Grow
* Monetize
* Defend
* Harvest
* Replace
* Retire

## 3. Select stage-appropriate metrics

Do not use generic KPIs.

## 4. Assess economics

Evaluate:

* Revenue
* Contribution
* Cost-to-serve
* Investment requirements

## 5. Evaluate customer health

Understand:

* Retention
* Satisfaction
* Usage
* Customer dependency

## 6. Evaluate strategic importance

Does the product:

* Enable other products?
* Defend market position?
* Provide strategic data?
* Support ecosystem growth?

## 7. Evaluate alternatives

Could you:

* Improve it?
* Reposition it?
* Replace it?
* Consolidate it?
* Retire it?

## 8. Allocate resources

Match investment to expected future value.

## 9. Define transition criteria

What evidence would trigger:

* More investment?
* Reduced investment?
* Repositioning?
* Retirement?

---

# 44. Lifecycle Management Canvas

For an important product, you can create this simple canvas:

```text
Product:
Lifecycle Stage:

Customer:
- Primary segments
- Customer need
- Retention
- Satisfaction

Business:
- Revenue
- Contribution
- Growth
- Cost-to-serve

Product:
- Adoption
- Engagement
- Reliability
- Competitive position

Strategic:
- Strategic importance
- Ecosystem role
- Future potential

Investment:
- Current investment
- Required future investment
- Expected return

Alternatives:
- Improve
- Reposition
- Replace
- Consolidate
- Retire

Decision:
- Invest
- Maintain
- Harvest
- Reposition
- Replace
- Retire

Success Criteria:

Exit Criteria:
```

This can be used during roadmap planning and portfolio reviews.

---

# 45. Senior Product Manager Perspective

A junior PM might ask:

> "What feature should we build next?"

A more experienced PM asks:

> "What should we invest in next?"

A Senior PM should ask:

> "What should we invest in, maintain, reduce, replace, or retire given this product's lifecycle stage?"

At the portfolio level, the question becomes:

> "How should we allocate resources across products at different lifecycle stages to maximize long-term company value?"

That is the essence of Product Lifecycle Management.

---

# Key Takeaways

1. Products evolve over time and require different strategies at different lifecycle stages.
2. The traditional lifecycle includes Introduction, Growth, Maturity, Decline, and Retirement.
3. Lifecycle stage is a strategic model, not a rigid prediction.
4. Introduction is primarily about learning and validating demand.
5. Growth is about scaling adoption, economics, operations, and infrastructure.
6. Maturity is about maximizing and defending value.
7. Decline requires deliberate decisions about harvesting, repositioning, replacement, or retirement.
8. Retirement is itself a product management process involving migration, communication, operations, and economics.
9. Product-Market Fit and Product Lifecycle are different concepts.
10. Product metrics should change as the product matures.
11. Mature products often need simplification, not endless feature expansion.
12. Cannibalization must be considered when launching replacement or adjacent products.
13. Product replacement creates migration and dual-running costs.
14. Lifecycle decisions should combine customer, product, economic, technological, and strategic considerations.
15. Sunk costs should not determine future investment.
16. A healthy portfolio balances new opportunities, growth products, mature cash generators, and declining products.
17. Great PMs know not only when to build, but also when to maintain, reposition, replace, harvest, or retire.

---

# Practical Exercise

Choose a product you know well.

It can be:

* A fintech product
* A trading platform
* A mobile application
* A SaaS product
* A marketplace
* A consumer product

Analyze it using the following framework:

### Step 1 — Identify the lifecycle stage

Choose:

* Introduction
* Growth
* Maturity
* Decline
* Retirement

Explain why.

### Step 2 — Identify the primary objective

Choose one:

* Validate
* Grow
* Optimize
* Defend
* Harvest
* Reposition
* Replace
* Retire

### Step 3 — Identify five relevant metrics

Make sure they fit the lifecycle stage.

### Step 4 — Evaluate economics

Estimate:

* Revenue
* Contribution
* Cost-to-serve
* Required future investment

### Step 5 — Evaluate the roadmap

Ask:

> What should the product team stop doing?

Then:

> What should the team invest more heavily in?

### Step 6 — Evaluate lifecycle risk

Identify:

* Customer risk
* Competitive risk
* Technology risk
* Economic risk
* Strategic risk

### Step 7 — Define the next decision

Choose:

> Invest / Maintain / Harvest / Reposition / Replace / Retire

Explain why.

---

# Final Challenge

You are the Senior Product Manager of a large fintech company.

The company has four products:

| Product | Stage        | Revenue | Growth | Margin | Strategic Importance |
| ------- | ------------ | ------: | -----: | -----: | -------------------- |
| A       | Introduction |   $0.5M |    80% |   -40% | High                 |
| B       | Growth       |     $8M |    35% |    25% | High                 |
| C       | Maturity     |    $30M |     5% |    45% | Medium               |
| D       | Decline      |     $7M |   -20% |     5% | Low                  |

The CEO asks:

> "Where should we invest next year?"

You have a limited product budget.

Your job is to recommend a portfolio strategy.

Consider:

### Product A

Should you aggressively invest despite negative margins?

What evidence would justify continued investment?

### Product B

Should you maximize growth?

What happens if growth increases costs disproportionately?

### Product C

Should you continue investing heavily?

Could optimization and profitability be more valuable than growth?

### Product D

Should you maintain, harvest, reposition, replace, or retire it?

What would you need to know?

Your final recommendation should include:

1. Lifecycle stage
2. Strategic objective
3. Investment level
4. Primary KPIs
5. Major risks
6. Decision criteria
7. Kill/continue/scale logic
8. Portfolio-level rationale

The key challenge is:

> **Do not allocate resources based only on revenue or growth. Allocate them based on the future value each product can create relative to the resources required.**

---

# Interview Questions to Practice

1. What is Product Lifecycle Management?
2. What are the major stages of the Product Lifecycle?
3. How does product strategy change between Growth and Maturity?
4. How do you know when a product is mature?
5. How do you know when a product is declining?
6. What metrics would you use for a newly launched product?
7. What metrics would you use for a mature product?
8. When should a company retire a product?
9. How would you convince stakeholders to sunset a successful legacy product?
10. How do you handle customers who do not want to migrate?
11. What is cannibalization?
12. Is cannibalization always bad?
13. How would you evaluate whether to replace an existing product?
14. How do you decide how much to invest in a mature product?
15. How would you manage a declining product that is still profitable?
16. How do you distinguish Product-Market Fit from product maturity?
17. How should a product roadmap change across lifecycle stages?
18. How would you allocate resources across products at different lifecycle stages?
19. How do you avoid sunk-cost bias in product retirement decisions?
20. Tell me about a time you had to decide whether to continue or stop investing in a product.
21. What signals would trigger a product repositioning?
22. How would you design a product sunset plan?
23. How would you measure whether a sunset was successful?
24. How would you manage a product portfolio containing new, growth, mature, and declining products?
25. How would you explain Product Lifecycle Management to an executive?

---

# Mental Model

When thinking about any product, ask:

```text
Where are we?
     ↓
Introduction / Growth / Maturity / Decline / Retirement
     ↓
What is the strategic objective?
     ↓
Validate / Grow / Optimize / Defend / Harvest / Reposition / Replace / Retire
     ↓
What evidence supports the decision?
     ↓
Customer + Product + Economics + Strategy + Technology
     ↓
How much should we invest?
     ↓
What would make us change our decision?
```

The ultimate lifecycle question is not:

> "How do we keep this product alive?"

It is:

> **"Given where this product is today and where the market is going, what should we do next to maximize its future value?"**

That is Product Lifecycle Management.

# Preview of Day 69

## Product Portfolio Strategy & Resource Allocation

Tomorrow we will move from managing the lifecycle of a single product to managing an entire portfolio of products.

We will cover:

* Product portfolio strategy
* Portfolio health
* Resource allocation across products
* Growth vs profitability trade-offs
* Product portfolio matrices
* Strategic fit vs financial attractiveness
* Portfolio balancing
* Investment concentration and risk
* Product cannibalization at portfolio level
* Portfolio-level prioritization
* Managing competing products
* Resource allocation under constraints
* Product portfolio reviews
* Kill / invest / maintain decisions across multiple products
* Portfolio strategy case study
