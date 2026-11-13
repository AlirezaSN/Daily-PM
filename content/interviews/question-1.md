# How Would You Design a BNPL Product?

**Interview Question:**

Imagine you are a Product Manager at DigiPay, and you have been asked to design a Buy Now, Pay Later (BNPL) product. How would you approach the problem, what solution would you propose, and how would you measure its success?

## 1. Define the Business Goal

Before designing a solution, I would first clarify why we want to build this product and what business problem we are trying to solve.

A BNPL product could serve several business objectives:

- Increase the number of active users and overall engagement.
- Increase transaction volume and Gross Merchandise Value (GMV).
- Help merchants increase sales and conversion rates.
- Create new revenue streams through credit services.
- Improve customer loyalty and retention.

For this exercise, I will assume the primary objective is to **increase merchant sales and credit product adoption while maintaining an acceptable level of credit risk**.

This assumption is important. If we focus only on GMV growth, we might encourage users to borrow more than they can repay. Higher transaction volume does not necessarily translate into a healthier or more profitable business.

## 2. Identify and Segment Target Users

Next, I would identify the potential customer segments and understand which ones have the strongest need for a BNPL solution.

Some possible segments include:

| User Segment | Primary Need | Product Opportunity |
|---|---|---|
| Salaried employees | Managing monthly expenses and essential purchases | Credit limits and predictable repayment schedules |
| Families | Managing larger or unexpected expenses | Installment-based purchases |
| Young digital consumers | Fast and convenient purchasing experiences | Simple credit application and checkout |
| Merchants and retailers | Increasing sales and average order value | Offering credit as an additional payment method |

For the initial target segment, I would consider salaried employees with relatively stable income. Their repayment capacity may be more predictable, making them a potentially suitable starting point for a credit product.

However, this is only an initial hypothesis. I would validate it through customer research, internal data, and credit risk analysis before making a final decision.

## 3. Discover and Validate Customer Needs

Before defining the solution, I need to make sure the problem is real and significant for the target users.

I would combine qualitative research with quantitative data analysis.

### Qualitative Research

I would interview potential customers and users who have recently used credit services to understand:

- In what situations do they need short-term credit?
- How do they currently finance purchases when they cannot afford to pay upfront?
- What prevents them from applying for credit?
- What concerns do they have about fees, installments, and repayment terms?
- How important are transparency and predictability in the credit experience?

### Quantitative Research

I would also analyze DigiPay's existing data to answer questions such as:

- How many users are eligible for credit?
- What percentage of users complete the credit application process?
- What is the credit approval rate?
- Which merchant categories receive the most credit-based purchases?
- What is the on-time repayment rate?
- At which stages do users abandon the application or payment journey?

Combining these two approaches helps me understand the problem from both the customer and business perspectives.

## 4. Define the Value Proposition

The product should create value for both sides of the marketplace: customers and merchants.

### For Customers

- Purchase products without paying the full amount upfront.
- Access credit through a simple and fast process.
- Clearly understand their credit limit, fees, and repayment schedule.
- Track outstanding balances and upcoming installments.
- Enjoy a seamless payment experience across partner merchants.

### For Merchants

- Increase checkout conversion rates.
- Increase average order value.
- Reach customers who may not have sufficient cash available at the time of purchase.
- Reduce friction in the payment process.

The core value proposition could be summarized as:

**"Making purchases more accessible for customers while helping merchants increase sales through transparent and convenient short-term credit."**

## 5. Design the User Journey

With the problem and value proposition defined, I would design the primary user journey.

A possible flow would look like this:

1. The user opens the credit section in the DigiPay app.
2. The user reviews the eligibility requirements.
3. The user completes identity verification and the credit assessment process.
4. Based on the credit policy, the system determines the user's available credit limit.
5. The user reviews the credit amount, fees, installment options, and due dates.
6. The user accepts the terms and activates the credit.
7. During checkout at a partner merchant, the user selects BNPL as the payment method.
8. The purchase amount is deducted from the user's available credit.
9. The user can track purchases, outstanding balances, and repayment schedules.
10. The user repays the installments according to the agreed schedule.

### Don't Forget Failure Scenarios

For financial products, designing the happy path is not enough. I would also define how the system handles failure scenarios.

Examples include:

- A credit application is submitted, but the credit assessment service does not respond.
- Credit is approved, but the user's available balance is not updated.
- The user's credit is deducted, but the merchant payment fails.
- A payment request is submitted multiple times because of a network issue.
- A repayment succeeds, but the outstanding balance is not updated.
- A customer misses an installment payment.

For each scenario, we need to define the expected system behavior, transaction status, customer communication, and recovery or reconciliation process.

## 6. Evaluate the Business Model and Manage Risk

BNPL is not just a payment feature. It is a financial product that must be economically sustainable and properly managed from a credit risk perspective.

### Revenue Model

Potential revenue sources include:

- Merchant fees.
- Customer service fees, where legally permitted and compliant with applicable regulations.
- Partnerships with financial institutions or credit providers.

### Key Risks

| Risk | Potential Mitigation |
|---|---|
| Credit default | Credit scoring, credit limits, and repayment controls |
| Fraud | Identity verification and fraud detection systems |
| Customer over-indebtedness | Affordability assessment and responsible credit limits |
| Payment failures | Transaction state management and duplicate prevention |
| Financial discrepancies | Transaction reconciliation and settlement processes |

Close collaboration with Risk, Finance, Operations, Legal, and Engineering teams is essential.

I would also clarify several fundamental business questions:

- Where does the credit funding come from?
- Which party carries the credit default risk?
- At what point is the customer's credit considered consumed?
- How and when are merchants settled?
- How are failed transactions reversed?

These questions directly affect the product's business model, operational processes, and technical architecture.

## 7. Define the MVP and Prioritize Features

For the MVP, I would focus on the minimum set of capabilities required to deliver the core value proposition.

### Essential MVP Features

- Identity verification and credit assessment.
- Credit limit allocation and display.
- Transparent presentation of terms, fees, and installments.
- Credit-based payments at partner merchants.
- Purchase and outstanding balance history.
- Installment repayment.
- Payment and repayment status tracking.
- Installment due-date notifications.
- Payment failure and financial reconciliation handling.

### Features for Later Releases

- Automatic credit limit increases for reliable customers.
- Personalized credit offers.
- Promotional campaigns and targeted incentives.
- Advanced personal financial management features.
- Loyalty and rewards programs.

One important consideration is that financial correctness, security, transaction traceability, and failure handling cannot be postponed simply to reduce MVP development time. These are foundational requirements, not optional enhancements.

## 8. Define Success Metrics

I would measure product performance across four main dimensions.

### Acquisition and Activation

- Number of credit applications.
- Credit application completion rate.
- Credit approval rate.
- Percentage of approved users who make their first credit purchase.

### Engagement

- Monthly active credit users.
- Number of credit purchases per user.
- Average transaction value.
- Credit utilization rate.

### Financial Performance and Risk

- Gross Merchandise Value (GMV).
- Net product revenue.
- Funding and operational costs.
- On-time repayment rate.
- Default rate.
- Outstanding overdue balance.

### Reliability and Operations

- Payment success rate.
- Failed transaction rate.
- Duplicate transaction rate.
- Number of financial discrepancies.
- Average issue resolution time.

### North Star Metric

A potential North Star Metric could be:

**The number of users who complete a successful credit purchase and repay according to the agreed schedule within a given period.**

This metric connects product adoption with responsible credit usage.

However, it should always be evaluated alongside profitability and credit risk metrics. Increasing the number of successful borrowers does not automatically mean the product is profitable.

## 9. Plan the Go-to-Market Strategy

I would recommend a gradual rollout rather than making the product available to everyone immediately.

A possible launch plan would be:

1. Launch the product to a limited group of eligible users.
2. Start with a selected group of partner merchants.
3. Monitor customer behavior, credit utilization, and repayment performance.
4. Identify technical, financial, and operational issues.
5. Improve the product experience and credit policies based on actual results.
6. Expand availability once the product demonstrates operational stability and acceptable risk levels.

This approach allows us to validate our core business assumptions and identify potential risks before scaling the product.

## 10. Summarize Your Answer in the Interview

After explaining the details, I would summarize my approach as follows:

"To design a BNPL product, I would first clarify the business objective and identify the main customer problem. Then, I would segment the market, conduct customer research, and analyze existing data to identify the most promising initial segment.

Based on those insights, I would define the value proposition and design the end-to-end customer journey, including both successful and failure scenarios.

Since BNPL is a financial product, I would pay particular attention to funding sources, credit risk, settlement, reconciliation, and repayment processes. I would then define an MVP focused on the essential capabilities and measure its performance through adoption, engagement, financial, risk, and reliability metrics.

Finally, I would launch the product gradually, evaluate the results, and continuously improve the experience and business model based on actual data."

---

## What Can Make Your Answer Stand Out?

Many candidates approach this question primarily from a user experience or feature design perspective. To make your answer stronger, demonstrate that you understand the financial and operational complexity behind a BNPL product.

Pay particular attention to these topics:

- **Funding source:** Where does the money come from?
- **Credit risk ownership:** Who is responsible if the customer fails to repay?
- **Credit consumption:** At what exact point is the customer's credit considered used?
- **Failed transactions:** What happens if credit is deducted but the merchant payment fails?
- **Settlement and reconciliation:** How does the merchant receive the money, and how are discrepancies handled?
- **Unit economics:** Does the revenue cover funding costs, operational expenses, and potential defaults?

These considerations demonstrate that you understand product management beyond designing screens and defining features. You are thinking about money flows, operational processes, risk, and long-term business sustainability.

## Follow-up Interview Question

Imagine that three months after launching the BNPL product:

- GMV has increased by 40%.
- The default rate has doubled.

As the Product Manager, what would you do?

Would you consider the product successful? What data would you investigate, and what actions would you take?

---