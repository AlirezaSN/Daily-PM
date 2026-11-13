# How Would You Increase the Number of Successful Transactions on an Online Marketplace?

**Interview Question:**

Imagine you are the Product Manager of an online marketplace connecting buyers and sellers. Over the past six months, the number of registered users has continued to grow, but the number of completed transactions has remained almost unchanged.

How would you investigate the problem and improve the marketplace's performance?

*Note: This is an intentionally ambiguous question. You are expected to clarify the business objective, make reasonable assumptions, identify potential bottlenecks, and propose a structured solution.*

## 1. Start with Clarifying Questions

I would not immediately assume that the problem is related to conversion or user experience. First, I would clarify the context.

### Business Objective

- What is the primary business goal: increasing completed transactions, GMV, revenue, or overall marketplace liquidity?
- Are we optimizing for short-term transaction growth or sustainable marketplace growth?
- Is there a specific target we are expected to achieve?

### Marketplace Model

- Is this a B2C, C2C, or B2B marketplace?
- Does the platform sell its own products, or does it connect independent buyers and sellers?
- Does the marketplace handle payments and delivery, or are those managed externally?

### Users and Market

- Are we seeing growth in both buyers and sellers, or only one side?
- Are we targeting a specific product category or geographic market?
- Have competitors or market conditions changed during the last six months?

### Data and Constraints

- Do we have access to user journey analytics and transaction data?
- Have there been any major product, pricing, or operational changes?
- Are there limitations related to budget, engineering capacity, or operations?

### Assumptions for This Exercise

To proceed, I will make the following assumptions:

- The platform is a multi-category marketplace connecting independent buyers and sellers.
- The marketplace supports product discovery, checkout, payment, and delivery.
- Registered users have increased, but completed transactions have remained nearly flat.
- Our primary objective is to increase the number of successful transactions while maintaining a healthy experience for both buyers and sellers.
- We have access to product analytics, transaction data, and customer feedback.

## 2. Understand the Marketplace Growth Problem

The first thing I would investigate is whether the problem is caused by insufficient buyer activity, insufficient seller supply, or friction in the transaction process.

A marketplace has two interconnected sides:

- **Demand side:** Buyers who want to discover and purchase products.
- **Supply side:** Sellers who list products and fulfill orders.

Growth on only one side does not necessarily create marketplace growth.

For example:

- More buyers without enough relevant products can lead to poor discovery experiences.
- More sellers without sufficient buyer demand can lead to low seller engagement.
- More product views without successful purchases may indicate pricing, trust, or checkout problems.

Therefore, I would avoid treating registered user growth as evidence of marketplace health.

## 3. Analyze the Marketplace Funnel

I would break down the user journey into measurable stages.

A simplified buyer funnel could look like this:

1. User registration.
2. Marketplace visit.
3. Product search or discovery.
4. Product detail page view.
5. Add to cart or purchase intent.
6. Checkout initiation.
7. Payment completion.
8. Order confirmation.
9. Successful delivery.

I would measure conversion between each stage to identify where the biggest drop-off occurs.

For example, consider this hypothetical data:

| Funnel Stage | Number of Users | Conversion from Previous Stage |
|---|---:|---:|
| Registered users | 100,000 | - |
| Active marketplace visitors | 60,000 | 60% |
| Product detail views | 36,000 | 60% |
| Add to cart | 12,000 | 33.3% |
| Checkout initiated | 8,000 | 66.7% |
| Payment completed | 6,000 | 75% |
| Successfully delivered orders | 5,400 | 90% |

These numbers are illustrative, not actual marketplace data.

This funnel suggests that the largest conversion drop occurs between product detail views and adding items to the cart.

However, I would not immediately conclude that product pages are the problem. I would investigate the reasons behind this behavior.

For example:

- Are product prices competitive?
- Are shipping costs unexpectedly high?
- Is product information incomplete?
- Are delivery estimates unattractive?
- Are buyers concerned about seller credibility?
- Are products unavailable despite being listed?

I would also analyze the seller-side funnel, including seller registration, product listing, inventory availability, order acceptance, and fulfillment.

## 4. Identify the Root Causes

After identifying the problematic funnel stages, I would combine quantitative and qualitative research.

### Quantitative Analysis

I would investigate:

- Buyer-to-seller ratio.
- Number of active sellers.
- Number of active product listings.
- Product availability rate.
- Search-to-product-view conversion.
- Product-view-to-cart conversion.
- Cart abandonment rate.
- Checkout completion rate.
- Payment failure rate.
- Order cancellation rate.
- Successful delivery rate.
- Repeat purchase rate.

I would segment these metrics by:

- Product category.
- Geographic location.
- New versus returning users.
- Buyer and seller cohorts.
- Traffic source.
- Device and platform.

This would help identify whether the problem is concentrated in specific categories, regions, or user segments.

### Qualitative Research

I would also:

- Interview buyers who abandoned their carts.
- Interview users who browsed products but never purchased.
- Talk to sellers with low order volumes.
- Analyze customer support tickets and complaints.
- Conduct usability tests on search, product pages, and checkout.

The objective is to understand not only where users drop off, but why.

## 5. Prioritize the Biggest Opportunities

Once I have a clearer understanding of the root causes, I would prioritize opportunities based on:

1. Potential impact on successful transactions.
2. Number of affected users.
3. Confidence in the identified problem.
4. Implementation effort.
5. Operational and business risks.

For this exercise, assume the analysis reveals three major problems:

| Problem | Evidence | Potential Impact |
|---|---|---|
| Poor product availability | Many searches return irrelevant or unavailable products | High |
| Lack of buyer trust | Users abandon purchases from sellers with limited ratings or reviews | High |
| Unexpected delivery costs | Cart abandonment increases after shipping fees are displayed | Medium to High |

I would validate the relative impact of these problems before committing resources.

For example, if unavailable products account for a significant share of unsuccessful searches, improving product availability and search relevance may have more impact than redesigning the checkout page.

## 6. Propose Solutions

I would organize solutions around the identified problems rather than starting with a list of features.

### A. Improve Product Discovery

Potential improvements:

- More relevant search results.
- Better category navigation and filtering.
- Recommendations based on user preferences and behavior.
- Clearer product availability information.
- Better handling of empty search results.

The objective is to help buyers find relevant products with less effort.

### B. Improve Marketplace Trust

Potential improvements:

- Verified seller badges.
- More transparent seller profiles.
- Customer ratings and reviews.
- Clear return and refund policies.
- Buyer protection mechanisms.
- More transparent delivery and fulfillment information.

Trust is particularly important in marketplaces because buyers often interact with sellers they do not know.

### C. Improve Pricing and Delivery Transparency

Potential improvements:

- Display shipping costs earlier in the journey.
- Show estimated delivery dates on product pages.
- Provide clearer information about additional fees.
- Offer multiple delivery options where possible.
- Improve coordination between sellers and delivery partners.

Unexpected costs and delivery uncertainty can discourage buyers from completing purchases.

### D. Improve Seller Performance

Potential improvements:

- Simplify product listing.
- Improve seller onboarding.
- Provide inventory management tools.
- Notify sellers about pending orders.
- Monitor seller response and fulfillment times.
- Introduce seller performance insights.

A marketplace cannot provide a reliable buyer experience without reliable sellers.

## 7. Define the MVP and Rollout Strategy

I would not implement every improvement simultaneously.

Suppose the strongest opportunity is improving product availability and search relevance.

The MVP could include:

- Better search indexing.
- Removal or deprioritization of unavailable listings.
- Improved search filters.
- Clearer availability information.
- Basic search analytics.

I would initially release these improvements in selected categories or to a limited user segment.

After evaluating the results, I would expand the solution and address the next most important bottleneck.

This approach allows us to learn quickly without introducing unnecessary complexity.

## 8. Define Success Metrics

I would define a primary metric and supporting metrics across marketplace health.

### North Star Metric

**Number of Successfully Completed Transactions**

This directly measures the primary business objective.

However, I would define a successful transaction carefully. Depending on the marketplace model, an order that is paid for but subsequently canceled or never delivered should not necessarily count as successful.

### Supporting Metrics

| Category | Metrics |
|---|---|
| Marketplace growth | Active buyers, active sellers, active listings |
| Discovery | Search-to-product-view conversion, search success rate |
| Conversion | Product-view-to-cart conversion, checkout conversion |
| Transaction quality | Payment success rate, order cancellation rate, successful delivery rate |
| Retention | Repeat purchase rate, buyer retention |
| Seller performance | Order acceptance rate, fulfillment time, seller retention |
| Financial performance | GMV, revenue per transaction, average order value |

### Guardrail Metrics

Increasing transaction volume should not come at the expense of marketplace quality.

I would monitor:

- Refund and return rates.
- Fraud and dispute rates.
- Customer complaints.
- Seller churn.
- Delivery failures.
- Buyer and seller satisfaction.

For example, increasing transactions through aggressive discounts might improve short-term GMV while reducing profitability and attracting users who do not return.

## 9. Measure Impact and Iterate

After releasing the improvements, I would compare the results against the baseline.

For example, suppose we improve search relevance and product availability in one category.

I would evaluate:

- Did more searches lead to relevant product views?
- Did product-view-to-cart conversion improve?
- Did completed transactions increase?
- Did the number of unavailable-product complaints decrease?
- Did buyers return and make additional purchases?
- Did seller performance improve?

Where appropriate, I would use A/B testing to compare the new experience with the existing one.

For marketplace changes that affect multiple participants or operational processes, I would also consider controlled rollouts and cohort analysis.

Most importantly, I would monitor both sides of the marketplace. An improvement that benefits buyers but creates unsustainable costs or operational problems for sellers may not be a successful long-term solution.

## 10. Summarize Your Answer in the Interview

"I would first clarify the marketplace model, the business objective, and whether the problem is related to demand, supply, or transaction conversion.

Then I would map the buyer and seller journeys and analyze the marketplace funnel to identify where the biggest drop-offs occur. I would combine quantitative data with buyer and seller interviews to understand the root causes.

Based on the findings, I would prioritize the highest-impact problems, such as poor product availability, insufficient buyer trust, or unexpected delivery costs.

I would then define an MVP targeting the most significant bottleneck, launch it gradually, and measure its impact through successfully completed transactions, conversion, retention, and marketplace health metrics.

Throughout the process, I would make sure that improvements benefit both buyers and sellers, because sustainable marketplace growth requires a healthy balance between supply and demand."

---

## What Can Make Your Answer Stand Out?

This question tests whether you understand the dynamics of a two-sided marketplace.

A strong answer should demonstrate:

- **Two-sided marketplace thinking:** Buyers and sellers have different needs, and improvements must consider both.
- **Funnel analysis:** Registered users are not the same as active users, and active users are not the same as transacting users.
- **Liquidity:** A marketplace needs enough relevant supply and demand to enable successful transactions.
- **Root cause analysis:** Identify why transactions are not happening before proposing features.
- **Transaction quality:** A completed payment does not always mean a successfully completed marketplace transaction.
- **Sustainable growth:** Avoid optimizing short-term transaction volume at the expense of profitability, trust, or seller experience.

One particularly useful concept is **marketplace liquidity**.

Marketplace liquidity describes how effectively the platform connects available supply with relevant demand. A marketplace with many registered users and thousands of listings can still perform poorly if buyers cannot find relevant products or sellers cannot reach potential customers.

## Follow-up Interview Question

Imagine that you successfully increase the number of completed transactions by 30% through promotional discounts and free shipping.

However, the marketplace is now losing money on every transaction.

Would you consider this a successful product improvement? How would you investigate the situation, and what would you do next?

---