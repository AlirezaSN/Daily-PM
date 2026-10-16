# Day 99: End-to-End Product Management Case Study

# Learning Objectives

By the end of this lesson, you should be able to:

- Solve an ambiguous product management problem from discovery through post-launch optimization.
- Connect customer problems, business strategy, product decisions, and measurable outcomes.
- Evaluate market opportunities and validate customer needs before committing to a solution.
- Define a product vision, strategy, MVP, and roadmap.
- Prioritize initiatives using customer value, business impact, risk, and implementation effort.
- Collaborate effectively with engineering, design, data, legal, compliance, and operations.
- Develop a business case with unit economics and realistic assumptions.
- Define product metrics, experimentation plans, and launch criteria.
- Communicate product decisions clearly to executives and stakeholders.
- Apply an end-to-end product management framework to a realistic fintech case.

# 1. The End-to-End Product Management Mindset

Product Management is not simply the process of collecting requirements and delivering features.

It is the process of identifying valuable problems, deciding which problems are worth solving, designing solutions that work, delivering them reliably, and measuring whether they create meaningful outcomes.

An end-to-end Product Manager connects six dimensions:

1. **Customer value:** Does the product solve a real problem?
2. **Business value:** Does solving the problem support the organization's objectives?
3. **Product quality:** Is the solution understandable, usable, and reliable?
4. **Technical feasibility:** Can the team build and operate it effectively?
5. **Risk and responsibility:** Is the solution safe, compliant, and sustainable?
6. **Evidence:** Can we demonstrate that the product creates the intended outcomes?

A feature can succeed in one dimension and fail in another.

For example, a crypto exchange might successfully launch a new trading feature. Engineering delivers it on time, and adoption is high. However, if the feature creates little incremental revenue, confuses customers, or increases operational risk, the overall product outcome may still be poor.

The PM's responsibility is to evaluate the whole system.

## 1.1 The end-to-end lifecycle

A useful high-level model is:

**Business context → Discovery → Opportunity assessment → Strategy → Validation → Delivery → Launch → Measurement → Iteration**

These stages are connected, but they are not always strictly sequential.

New evidence may require a team to revisit its assumptions. A technical constraint may change the proposed solution. A launch experiment may reveal that the original problem was misunderstood.

Good Product Managers make decisions progressively as evidence improves.

## 1.2 Separate outputs from outcomes

An output is something the team delivers.

Examples:
- A mobile application.
- A new onboarding flow.
- An API integration.
- A dashboard.
- A recommendation engine.

An outcome is a meaningful change resulting from the delivery.

Examples:
- More eligible customers complete onboarding.
- Customers complete a task with fewer errors.
- Customer acquisition cost decreases.
- Retention improves.
- Operational costs decline.
- Customers better understand a financial product.

A product team should measure outputs to manage delivery and outcomes to assess success.

# 2. Case Study: A New Investment Product

Throughout this lesson, we will use one realistic case study.

## Business context

You are a Product Manager at a fintech company that operates a consumer financial application.

The company has an existing user base and wants to introduce a new investment product.

Leadership proposes building an investment marketplace that allows customers to discover, compare, and purchase investment products through the application.

The company has several goals:
- Increase revenue per active customer.
- Improve customer retention.
- Expand beyond its existing core product.
- Create a scalable new revenue stream.

However, several important questions remain unanswered:

- Do customers actually need another investment product?
- Which customer segment should the company target?
- Which investment products should be offered first?
- What is the appropriate business model?
- How will the company build trust?
- What regulatory, operational, and technical requirements apply?
- How will success be measured?

You have been asked to present a product proposal and lead the initiative from discovery to launch.

**Your first task is not to define features. It is to determine whether the opportunity is worth pursuing.**

# 3. Step One: Understand the Business Problem

Before conducting research, understand why the organization is considering this initiative.

## 3.1 Investigate the business context

Review:
- Company strategy and annual objectives.
- Current product performance.
- Existing customer segments.
- Revenue and cost structure.
- Customer acquisition and retention.
- Available technology and partnerships.
- Regulatory and operational constraints.
- Existing customer feedback.

Useful questions for leadership include:

- What business problem are we trying to solve?
- Why is this opportunity important now?
- Which strategic objective does it support?
- What evidence suggests the opportunity exists?
- What alternatives have already been considered?
- What would make this initiative unsuccessful?
- What resources and constraints should we account for?

Avoid interpreting a proposed solution as proof that a customer problem exists.

## 3.2 Translate business goals into testable assumptions

Suppose leadership says:

"We need an investment marketplace to increase revenue."

This statement contains several assumptions:

1. Existing customers want investment services.
2. Their needs are not adequately met by current alternatives.
3. The company can reach customers at an acceptable acquisition cost.
4. Customers will trust the company with investment-related decisions.
5. The company can offer suitable products and operate them economically.
6. The new service will create incremental value rather than simply moving activity from another product.

These assumptions should be tested before a large investment is made.

## 3.3 Define the problem without prescribing the solution

A weak problem statement:

"We need to build an investment marketplace."

A stronger problem statement:

"Some existing customers want to begin investing but find it difficult to understand available options, compare risks and fees, and complete the process through services they trust."

The second statement describes a customer need without assuming that a marketplace is the only solution.

## 3.4 Define the business hypothesis

Example:

"If we help eligible existing customers understand and access appropriate investment products through a trusted digital experience, we may increase investment adoption, improve retention, and create a sustainable revenue stream."

This hypothesis connects:
- Target customers.
- Customer value.
- Product intervention.
- Expected business outcomes.

It remains a hypothesis until validated.

# 4. Step Two: Conduct Product Discovery

Discovery helps determine whether the problem is real, important, and worth solving.

## 4.1 Identify the key unknowns

Organize assumptions into four categories.

### Desirability

Do customers want the product?

Questions:
- What are customers trying to accomplish?
- What difficulties do they experience?
- How frequently does the problem occur?
- What alternatives do they use?
- How important is the problem compared with other needs?

### Viability

Can the opportunity support the business?

Questions:
- Is there a viable revenue model?
- What are the expected acquisition and operating costs?
- Will the product cannibalize existing revenue?
- Does it support company strategy?
- Can it reach sufficient scale?

### Feasibility

Can the company deliver the experience?

Questions:
- Which APIs and integrations are required?
- Is the necessary data available?
- Can existing systems support the transaction flow?
- What operational capabilities are missing?
- What are the reliability and security requirements?

### Risk and compliance

Can the product operate responsibly?

Questions:
- Which permissions or licenses are required?
- What customer eligibility requirements apply?
- How must risk information be disclosed?
- How will identity verification and fraud prevention work?
- What happens when a transaction fails?
- Which parties are accountable for customer support and disputes?

The exact requirements depend on the jurisdiction, product type, and business model.

## 4.2 Conduct customer interviews

Interview customers from different segments, including:
- People who already invest.
- People who want to invest but have not started.
- People who tried and abandoned the process.
- People who use competing services.
- People who do not consider investing a current priority.

Ask about past behavior rather than relying only on hypothetical intentions.

Useful questions:
- Tell me about the last time you considered investing.
- What triggered your interest?
- What did you do next?
- Which options did you compare?
- What was difficult or confusing?
- How did you decide which service to trust?
- What costs or risks did you consider?
- Did you eventually invest? Why or why not?

Avoid leading questions such as:

"Would you use our easy-to-use investment marketplace?"

Positive answers to hypothetical questions do not reliably predict actual behavior.

## 4.3 Combine qualitative and quantitative evidence

Interviews explain motivations and problems. Quantitative data helps estimate scale and prevalence.

Potential quantitative sources:
- Existing product analytics.
- Customer surveys.
- Search behavior.
- Support tickets.
- Funnel data.
- Competitor and market research.
- Transaction patterns, where appropriate and permitted.

For example, interviews might reveal that customers find investment fees confusing. Funnel analytics might show that many users abandon the process immediately after reaching the fee disclosure screen.

Together, these findings create a stronger hypothesis than either source alone.

## 4.4 Map the customer journey

A simplified investment journey might look like this:

1. Recognize a financial goal.
2. Learn about investment options.
3. Compare products.
4. Evaluate risk and fees.
5. Complete eligibility and identity checks.
6. Fund an account.
7. Make an investment.
8. Monitor performance.
9. Decide whether to continue investing.

For each stage, identify:
- Customer goals.
- Questions and concerns.
- Current behaviors.
- Friction points.
- Emotional factors.
- Opportunities for improvement.

The most valuable opportunity may not be the transaction itself. It could be helping customers understand their options before they reach the transaction screen.

## 4.5 Distinguish symptoms from root causes

Suppose the data shows that customers abandon onboarding.

Possible causes include:
- Too many steps.
- Unexpected verification requirements.
- Unclear eligibility rules.
- Poor performance.
- Insufficient trust.
- Confusing product information.
- A mismatch between the product and the customer's needs.

Reducing the number of screens may help if the problem is friction. It may not help if customers are concerned about risk or do not understand the product.

**Do not optimize a funnel until you understand why customers leave it.**

# 5. Step Three: Evaluate the Opportunity

Discovery can produce several possible opportunities. You must decide which one deserves investment.

## 5.1 Segment customers by needs

Avoid segmenting only by age or income.

Potential segments include:

**Investment beginners**
- Need understandable explanations.
- Want to learn about risk and fees.
- May require more guidance.

**Experienced investors**
- Want efficient access to products.
- May prioritize breadth, pricing, and transaction reliability.

**Goal-oriented savers**
- Want to understand how investment options relate to specific financial goals.
- May value planning and progress tracking.

**Existing customers with idle balances**
- May be interested in alternatives, but their actual goals and risk tolerance require investigation.

These are initial hypotheses, not established facts about the market.

## 5.2 Evaluate segment attractiveness

Consider:
- Problem severity.
- Frequency of the problem.
- Reachable audience size.
- Willingness and ability to pay.
- Competitive alternatives.
- Cost to acquire and serve customers.
- Strategic fit.
- Regulatory and operational complexity.

A large market is not necessarily the best starting point.

A smaller segment with a clear problem and accessible distribution may be a better entry point.

## 5.3 Estimate the addressable opportunity

Use transparent assumptions rather than unsupported market-size claims.

An illustrative model:

- 200,000 existing customers are potentially eligible.
- 20% may have a relevant investment need.
- 25% of those customers may activate within the modeled period.
- Average annual revenue per activated customer is 1,200,000 toman.

Estimated activated customers:

200,000 × 20% × 25% = 10,000 customers.

Estimated annual revenue:

10,000 × 1,200,000 = 12,000,000,000 toman.

This produces an illustrative annual revenue estimate of 12 billion toman.

These are hypothetical inputs, not market facts. The model also excludes costs, churn, revenue-sharing arrangements, taxes, and possible cannibalization.

Run sensitivity analysis to understand how the result changes when the assumptions are less favorable.

## 5.4 Compare strategic alternatives

The investment marketplace is only one possible response to the customer problem.

Alternatives might include:
- Improving education and product comparison.
- Partnering with an existing investment provider.
- Adding one carefully selected product.
- Building a referral experience.
- Offering a financial planning tool.
- Improving an existing financial product rather than launching a new category.

Evaluate alternatives based on customer value, strategic fit, time to learn, cost, risk, and reversibility.

# 6. Step Four: Define Product Strategy

Once the opportunity is sufficiently attractive, establish a clear strategic direction.

## 6.1 Write the product vision

Example:

"Help customers make more informed financial decisions by making suitable investment options easier to understand and access."

A vision describes the intended future, not the implementation details.

## 6.2 Define the target segment

For the initial release, suppose research indicates that eligible existing customers who want to start investing are underserved by current comparison and onboarding experiences.

The initial target could be:

"Existing customers who want to make their first investment and need a clear, trustworthy way to understand product differences, fees, and risks."

This focus helps the team avoid trying to serve every investor at once.

## 6.3 Define the value proposition

A possible value proposition:

"Compare selected investment options, understand their key differences, and complete the next steps through a familiar digital experience."

The value proposition should be supported by the actual product. Do not promise suitability, returns, or protection unless the product can substantiate those claims.

## 6.4 Establish strategic choices

A strategy should state what the team will and will not prioritize.

Example:

**We will:**
- Start with a narrow customer segment.
- Make fees and material risks understandable.
- Prioritize a small number of validated investment options.
- Use established partners when they reduce time to market and risk.
- Measure customer understanding alongside adoption.

**We will not initially:**
- Launch every investment category.
- Build a complex personalized recommendation engine.
- Optimize primarily for trading frequency.
- Expand to segments with materially different needs before validating the initial proposition.

Strategic exclusions protect the team from uncontrolled scope growth.

## 6.5 Connect strategy to measurable outcomes

Possible objectives:

**Customer outcome:** Increase the percentage of eligible customers who successfully complete an informed first investment.

**Business outcome:** Establish a sustainable source of incremental revenue from investment services.

**Trust and quality outcome:** Reduce avoidable confusion, failed transactions, and complaints.

The exact targets should be established using baseline data, research, and financial constraints rather than arbitrary percentages.

# 7. Step Five: Define the MVP

An MVP is the smallest credible solution that allows the team to test important assumptions and deliver meaningful customer value.

It is not simply a smaller version of the full product.

## 7.1 Define the riskiest assumptions

For this case, the riskiest assumptions may be:

1. Customers value guided comparison.
2. Customers trust the company enough to begin the process.
3. The company can access suitable investment products through partners.
4. Customers can understand the material differences among options.
5. The unit economics can support the business.

Test the riskiest assumptions before committing to expensive capabilities.

## 7.2 Proposed MVP scope

An initial MVP might include:

- A landing page explaining the service.
- A limited set of verified investment options.
- A clear comparison of fees, risks, eligibility, and key terms.
- Basic eligibility checks.
- A partner integration or clearly defined referral flow.
- A transparent transaction or application status.
- Basic customer support and issue escalation.
- Event tracking and operational monitoring.

Features that may be deferred:
- Advanced AI recommendations.
- A large investment catalog.
- Complex portfolio analytics.
- Automated rebalancing.
- Social investing.
- Sophisticated personalization.

The MVP must still meet appropriate security, legal, compliance, and operational requirements. Those are not optional merely because the release is small.

## 7.3 Choose the right validation method

Different assumptions require different tests.

| Assumption | Potential test |
|---|---|
| Customers have the problem | Interviews and behavioral research |
| Customers understand the comparison | Usability testing |
| Customers will engage with the proposition | Landing-page test with honest messaging |
| Customers will complete onboarding | Prototype or limited pilot |
| Partner integration is feasible | Technical discovery or proof of concept |
| Unit economics are viable | Financial model and partner negotiations |
| Customers can make informed decisions | Comprehension testing and customer feedback |

A prototype can validate usability, but it cannot establish that a production transaction system is reliable or compliant.

## 7.4 Define MVP success criteria

Before the test begins, define:
- Who is eligible.
- What behavior counts as success.
- What minimum evidence is sufficient to proceed.
- Which risks must remain below acceptable thresholds.
- Which results would cause the team to change direction.

This prevents the team from redefining success after seeing the results.

# 8. Step Six: Prioritize Features and Work

A Product Manager must translate the strategy into a sequence of decisions and deliverables.

## 8.1 Build an opportunity backlog

Potential initiatives:

- Simplify investment education.
- Improve comparison and disclosure.
- Build a partner integration.
- Improve identity verification.
- Add application status tracking.
- Build customer support tooling.
- Develop personalized recommendations.
- Add portfolio analytics.
- Improve post-purchase communication.

Do not prioritize features solely because stakeholders requested them or competitors already have them.

## 8.2 Use a structured prioritization framework

One possible model is:

Priority score = (Customer impact × Business impact × Confidence) ÷ Effort

For example, rate each dimension from 1 to 5.

| Initiative | Customer impact | Business impact | Confidence | Effort | Score |
|---|---:|---:|---:|---:|---:|
| Improve fee and risk comparison | 5 | 4 | 4 | 2 | 40 |
| Add advanced portfolio analytics | 2 | 3 | 2 | 5 | 2.4 |
| Improve application status tracking | 4 | 4 | 4 | 2 | 32 |
| Build AI recommendations | 3 | 4 | 2 | 5 | 4.8 |

The scores are illustrative. They do not replace judgment or account for every dependency and risk.

The fee and risk comparison and application status tracking appear attractive under this model because they offer substantial impact with relatively low effort.

However, security, compliance, technical dependencies, and operational requirements may be mandatory constraints rather than factors that can simply be traded off against impact.

## 8.3 Consider dependencies and sequencing

For example:
- Product comparison depends on accurate product information.
- Transaction status depends on reliable partner events or reconciliation.
- Personalized recommendations depend on sufficient data, appropriate methodology, and additional risk review.
- Customer support depends on clear operational ownership.

A roadmap must reflect these dependencies.

## 8.4 Make trade-offs explicit

If the team has capacity for only three initiatives, explain:
- Why those initiatives are selected.
- Which assumptions they validate.
- What is deferred.
- What risk is created by deferral.
- What evidence could change the decision.

Prioritization is not simply ranking a list. It is allocating limited resources to maximize expected outcomes.

# 9. Step Seven: Develop the Business Case

A product can create customer value and still fail financially.

The business case should connect customer behavior to revenue, costs, and investment requirements.

## 9.1 Build a funnel model

Illustrative assumptions for one year:

- Eligible customers reached: 100,000.
- Landing-page engagement rate: 20%.
- Engaged customers who begin onboarding: 30%.
- Onboarding completion rate: 50%.
- Completed applicants who make a first investment: 60%.

The modeled funnel is:

| Stage | Calculation | Customers |
|---|---|---:|
| Reached | Given | 100,000 |
| Engaged | 100,000 × 20% | 20,000 |
| Start onboarding | 20,000 × 30% | 6,000 |
| Complete onboarding | 6,000 × 50% | 3,000 |
| Make first investment | 3,000 × 60% | 1,800 |

These figures are hypothetical planning inputs, not forecasts.

The funnel highlights potential bottlenecks. For example, if many customers start onboarding but fail to complete it, the team should investigate verification, trust, usability, and eligibility.

## 9.2 Calculate contribution

Suppose:
- 1,800 customers make a first investment.
- Average annual net revenue per activated customer is 1,200,000 toman.
- Variable servicing and partner-related costs average 350,000 toman per activated customer.

Illustrative annual net revenue:

1,800 × 1,200,000 = 2,160,000,000 toman.

Illustrative variable costs:

1,800 × 350,000 = 630,000,000 toman.

Illustrative contribution before fixed costs:

2,160,000,000 − 630,000,000 = 1,530,000,000 toman.

This is contribution before fixed operating expenses, development investment, acquisition costs, taxes, and any other omitted costs. It is not net profit.

## 9.3 Include acquisition and retention

If customers are acquired through paid channels, acquisition costs can materially change the economics.

Track:
- Customer acquisition cost (CAC).
- Activation rate.
- Contribution margin.
- Retention.
- Payback period.
- Lifetime value (LTV).
- Incremental revenue.
- Cannibalization.

A customer who makes one small transaction may not generate enough lifetime contribution to justify the cost of acquisition and servicing.

## 9.4 Use scenarios

Build at least three scenarios:

**Conservative:** Lower activation, lower revenue, higher costs.

**Base:** Most reasonable assumptions given current evidence.

**Optimistic:** Better conversion or retention, supported by identifiable drivers.

Evaluate which assumptions dominate the result. Then prioritize validation of the assumptions that have the greatest financial impact and uncertainty.

# 10. Step Eight: Define Product Metrics

Metrics translate strategy into observable outcomes.

## 10.1 Choose a North Star Metric carefully

A possible North Star Metric is:

**Monthly customers completing a successful first investment after viewing the required product information.**

This combines customer adoption with a meaningful product action.

However, a North Star Metric is a simplifying measure, not a complete definition of product success.

It should be balanced by metrics that reveal whether customers understand their decisions and whether the business is sustainable.

## 10.2 Define the metric hierarchy

### Business outcomes
- Incremental contribution.
- Revenue per eligible customer.
- Customer retention.
- Return on investment.

### Customer outcomes
- Successful activation.
- Time to complete the intended task.
- Understanding of fees and material risks.
- Customer satisfaction.
- Repeat usage when appropriate to the product.

### Funnel metrics
- Landing-page engagement.
- Comparison completion.
- Onboarding start rate.
- Onboarding completion rate.
- First-investment conversion.

### Quality and risk guardrails
- Failed transactions.
- Incorrect or stale product information.
- Complaints about misunderstood terms.
- Fraud losses.
- Privacy and security incidents.
- Partner integration failures.
- Disparities in completion rates that require investigation.

## 10.3 Define metrics precisely

For example:

**Onboarding completion rate**

Numerator: Eligible users who complete onboarding within the defined observation window.

Denominator: Eligible users who started onboarding during the defined cohort period.

The team should also define:
- The observation window.
- How duplicate users are handled.
- How ineligible users are excluded.
- How failed or abandoned sessions are treated.
- Whether the measure is cohort-based.

Ambiguous metrics create misleading comparisons.

## 10.4 Distinguish correlation from causation

Suppose customers who use the comparison feature have higher activation.

This does not prove that the feature caused the increase. Customers who are already motivated may be more likely to use the comparison feature.

Use experiments or appropriate analytical methods to estimate incremental impact when feasible.

# 11. Step Nine: Design an Experimentation Plan

Before scaling the product, validate the most important uncertainties.

## 11.1 Example hypothesis

"If we provide a clear comparison of fees, risks, and eligibility before onboarding, more eligible customers will complete an informed first investment."

This hypothesis includes:
- An intervention.
- A target audience.
- A measurable outcome.
- An intended customer benefit.

## 11.2 Define the experiment

A controlled test might compare:

**Control:** The existing product discovery experience.

**Treatment:** A redesigned comparison experience with clearer disclosures and a more structured decision flow.

Primary metric:
- Successful first-investment completion among eligible users.

Secondary metrics:
- Comparison completion.
- Onboarding completion.
- Time to complete the process.
- Customer understanding.

Guardrails:
- Complaint rate.
- Misunderstanding of fees or risks.
- Incorrect product selections.
- Failed transactions.
- Material differences in outcomes across relevant customer groups.

## 11.3 Avoid optimizing for conversion alone

Suppose the treatment increases investment conversion but customers misunderstand important risks more frequently.

The experiment should not automatically be declared successful.

Investigate the trade-off, improve the experience, and define acceptable conditions before scaling.

## 11.4 Know when A/B testing is inappropriate

An A/B test may be inappropriate when:
- The intervention could cause significant harm.
- The feature affects legal eligibility or essential access.
- The sample is too small to detect important problems.
- Randomization creates unacceptable unequal treatment.
- The risk cannot be adequately monitored.

In those cases, use usability research, staged rollout, simulation, expert review, or other validation methods.

# 12. Step Ten: Plan Delivery and Cross-Functional Collaboration

Once the concept has sufficient evidence, turn it into a deliverable product.

## 12.1 Break the work into capabilities

Possible workstreams:

**Customer experience**
- Discovery and comparison.
- Onboarding.
- Disclosure and consent.
- Application status.
- Support and recovery flows.

**Technical platform**
- Partner APIs.
- Authentication and authorization.
- Data validation.
- Transaction handling.
- Event tracking.
- Monitoring and alerting.

**Operations**
- Exception handling.
- Reconciliation.
- Customer support processes.
- Partner escalation.
- Incident response.

**Risk and compliance**
- Eligibility requirements.
- Product disclosures.
- Identity verification.
- Fraud prevention.
- Data protection.
- Required approvals.

## 12.2 Clarify ownership

A practical ownership model might look like this:

| Function | Primary responsibility |
|---|---|
| Product Manager | Outcomes, scope, priorities, trade-offs |
| Product Designer | User research, interaction design, usability |
| Engineering | Architecture, implementation, reliability |
| Data/Analytics | Instrumentation, analysis, experimentation |
| Legal/Compliance | Applicable obligations and required controls |
| Security/Risk | Threats, fraud controls, risk mitigation |
| Operations/Support | Exception handling and customer assistance |
| Leadership | Strategic alignment and major investment decisions |

Actual accountability should follow the organization's operating model. The PM should not assume that legal, security, or operational responsibilities belong solely to Product.

## 12.3 Define delivery milestones

A possible roadmap:

**Phase 1: Discovery**
- Validate customer needs.
- Evaluate partners and constraints.
- Estimate business potential.
- Define launch criteria.

**Phase 2: Validation**
- Test prototypes.
- Validate technical integrations.
- Confirm operational and compliance requirements.
- Refine the business case.

**Phase 3: MVP delivery**
- Build core customer journeys.
- Integrate the selected partner.
- Implement analytics and monitoring.
- Prepare support processes.

**Phase 4: Controlled launch**
- Release to a limited eligible audience.
- Monitor customer outcomes and operational health.
- Investigate failures and complaints.
- Decide whether to expand.

**Phase 5: Optimization and scaling**
- Improve the highest-impact bottlenecks.
- Validate retention and economics.
- Expand only when evidence supports doing so.

Do not invent delivery dates before understanding dependencies, team capacity, and required reviews.

## 12.4 Manage scope changes

Stakeholders may request advanced analytics, more investment products, or AI recommendations during delivery.

Evaluate each request against:
- The validated customer problem.
- The current strategic objective.
- The MVP hypothesis.
- Delivery dependencies.
- Risk.
- Opportunity cost.

A request can be valuable without being appropriate for the current release.

# 13. Step Eleven: Prepare for Launch

A launch is not complete merely because the software has been deployed.

## 13.1 Define launch readiness

Review:
- Functional acceptance criteria.
- Security and privacy requirements.
- Required legal and compliance approvals.
- Data quality.
- Monitoring and alerting.
- Performance and reliability.
- Partner readiness.
- Support training.
- Customer communication.
- Incident response.
- Rollback or disablement mechanisms.

## 13.2 Use staged rollout where appropriate

A controlled launch can reduce uncertainty.

For example:
1. Internal testing.
2. Limited pilot with eligible customers.
3. Expanded rollout after evaluating early evidence.
4. Broader release after operational and customer guardrails remain acceptable.

The sequence should match the product's risk and the organization's obligations.

## 13.3 Define operational scenarios

Before launch, ask:
- What if a partner API is unavailable?
- What if a transaction times out?
- What if a customer is charged but the investment is not confirmed?
- What if product information becomes outdated?
- What if identity verification fails incorrectly?
- What if customers cannot access their application status?

Each scenario needs an owner and a response plan.

## 13.4 Plan customer communication

Customers should understand:
- What the product does.
- Who provides the underlying investment service.
- What fees and material risks apply.
- What happens after an application is submitted.
- How to find status updates.
- Where to seek help.

Communication is part of the product experience, not merely a marketing activity.

# 14. Step Twelve: Measure, Learn, and Iterate

The launch begins the next stage of product management.

## 14.1 Compare results with the original hypothesis

Review:
- Did the target segment adopt the product?
- Did customers complete the intended task?
- Did the intervention solve the identified problem?
- Did the business outcomes improve?
- Were the guardrails maintained?
- Which assumptions were disproven?

Do not judge success only by whether the team shipped on time.

## 14.2 Diagnose the funnel

Suppose:
- Many customers view the product comparison.
- Fewer begin onboarding.
- A large percentage abandon identity verification.

Potential explanations include:
- Customers do not understand the next step.
- The product is not compelling enough.
- Verification requirements are unexpected.
- The process is too slow.
- Customers do not trust the service.
- Eligibility requirements exclude a significant portion of the audience.

Investigate before selecting a fix.

## 14.3 Build a learning backlog

Possible next opportunities:
- Improve comparison clarity.
- Reduce unnecessary onboarding friction.
- Improve transaction status updates.
- Expand the product catalog.
- Improve support workflows.
- Introduce appropriate personalization.
- Improve partner reliability.

Rank these opportunities based on the evidence collected after launch.

## 14.4 Make explicit scale, iterate, or stop decisions

**Scale** when evidence supports customer value, sustainable economics, operational readiness, and acceptable risk.

**Iterate** when the problem is valid but the solution or experience needs improvement.

**Stop or pivot** when the problem is weak, the economics are unattractive, material risks cannot be mitigated, or the evidence contradicts the original assumptions.

Stopping an unsuccessful initiative early can be a product management success if it prevents larger losses and frees resources for better opportunities.

# 15. Communicating the Product Proposal to Executives

A strong proposal tells a coherent story.

Executives need to understand why the opportunity matters, what evidence supports it, what the company will invest, and how success will be evaluated.

## 15.1 A practical executive presentation

### Slide 1: Executive summary
- Customer problem.
- Business opportunity.
- Proposed direction.
- Expected outcomes.
- Main risks and decisions needed.

### Slide 2: Evidence
- Customer research.
- Existing behavioral data.
- Market context.
- Key validated and unvalidated assumptions.

### Slide 3: Target segment and problem
- Who the product serves.
- What problem they experience.
- Why current alternatives are insufficient.

### Slide 4: Strategy and differentiation
- Product vision.
- Value proposition.
- Strategic choices.
- Why this approach is preferable to alternatives.

### Slide 5: MVP and validation
- Initial scope.
- Key experiments.
- Deferred capabilities.
- Launch criteria.

### Slide 6: Business case
- Funnel assumptions.
- Revenue model.
- Costs and contribution.
- Conservative, base, and optimistic scenarios.

### Slide 7: Roadmap and resources
- Delivery phases.
- Dependencies.
- Team needs.
- Partner and operational requirements.

### Slide 8: Metrics and risks
- North Star Metric.
- Business and customer outcomes.
- Guardrails.
- Major risks and mitigations.

### Slide 9: Decision requested
- Investment or resources needed.
- Approvals required.
- Open questions.
- Immediate next steps.

## 15.2 Present uncertainty honestly

Separate:
- Facts supported by evidence.
- Estimates based on assumptions.
- Hypotheses that remain untested.
- Decisions that depend on additional information.

For example:

"We estimate that 10,000 customers could activate under our current assumptions. We have not yet validated the activation rate. We propose a limited pilot to measure demand before committing to a broader rollout."

This is more credible than presenting the estimate as a guaranteed outcome.

# 16. Practical Exercise: Write Your Product Proposal

Use the investment product case study and complete the following sections.

## Part A: Problem definition

Write:
- The business problem.
- The target customer.
- The customer problem.
- The evidence available.
- The most important unknowns.

## Part B: Discovery plan

Define:
- Three customer segments to investigate.
- Five interview questions.
- Three quantitative data sources.
- The riskiest assumptions.
- The evidence required to continue.

## Part C: Opportunity assessment

Estimate:
- Reachable customer population.
- Potential activation.
- Revenue per activated customer.
- Variable costs.
- Acquisition costs.
- Major risks.

Use conservative, base, and optimistic scenarios.

## Part D: Product strategy

Write:
- A one-sentence vision.
- A target segment.
- A value proposition.
- Three strategic choices.
- Three explicit exclusions.

## Part E: MVP

Define:
- The minimum valuable experience.
- The key assumptions it will validate.
- What will be deferred.
- The required technical and operational capabilities.
- Launch-readiness criteria.

## Part F: Prioritization

Create a list of at least eight opportunities.

Score them using a consistent framework and explain:
- Your top three priorities.
- Your most important dependency.
- What you would defer.
- What evidence could change the order.

## Part G: Metrics and experimentation

Define:
- A North Star Metric.
- Three business metrics.
- Three customer metrics.
- Three guardrails.
- One experiment.
- The conditions that would cause you to stop or modify it.

## Part H: Roadmap

Create a phased roadmap covering:
- Discovery.
- Validation.
- MVP delivery.
- Controlled launch.
- Post-launch optimization.

Explain the key dependencies and decision gates.

## Part I: Executive recommendation

Write a one-page proposal summarizing:
- The opportunity.
- The evidence.
- The solution.
- The business case.
- The risks.
- The roadmap.
- The decision required.

# 17. Final Challenge: Launch a New Product at a Crypto Exchange

You are the Senior Product Manager at a cryptocurrency exchange.

The company wants to increase customer retention and revenue. Leadership suggests launching an AI-powered portfolio assistant that explains portfolio movements, helps customers understand market information, and suggests possible next steps.

The company has:
- An established exchange platform.
- A mobile application.
- Historical transaction and portfolio data.
- A data science team.
- Limited experience deploying generative AI to customers.
- Regulatory, security, and operational obligations.

You have 12 weeks to present and validate an initial product proposal. This is a planning constraint, not a guarantee that a production launch is feasible within that period.

## Challenge 1: Define the opportunity

Explain:
- Which customer segment you would investigate first.
- Which problem the assistant should solve.
- Why the problem matters.
- What customers currently do instead.
- Why the exchange is positioned to solve it.

Avoid assuming that AI is necessary simply because the company has AI capabilities.

## Challenge 2: Conduct discovery

Design a research plan containing:
- Customer interviews.
- Behavioral analysis.
- Competitor research.
- Technical feasibility assessment.
- Risk and compliance review.

Identify the three assumptions that could most seriously invalidate the opportunity.

## Challenge 3: Compare solution alternatives

Evaluate at least three options:

1. Improved portfolio analytics without generative AI.
2. An AI assistant that explains verified account and market information.
3. An AI assistant that also suggests personalized financial actions.

Compare them on:
- Customer value.
- Differentiation.
- Feasibility.
- Cost.
- Reliability.
- Privacy.
- Potential customer harm.
- Time to learn.

Explain which option you would test first and why.

## Challenge 4: Define the MVP

Specify:
- The first customer segment.
- The supported use cases.
- The data sources.
- The boundaries of the assistant.
- The fallback behavior.
- The human-support escalation path.
- The features that will be excluded initially.

Include controls against fabricated account information, misleading financial claims, and unauthorized disclosure of customer data.

## Challenge 5: Build the business case

Estimate:
- Eligible customers.
- Expected activation.
- Cost per active customer.
- Infrastructure and model costs.
- Support costs.
- Potential incremental revenue or retention value.
- Payback period.

Clearly label assumptions and show how the result changes under less favorable conditions.

## Challenge 6: Define metrics

Choose:
- One primary customer outcome.
- One business outcome.
- Three supporting metrics.
- At least three guardrails.

Potential guardrails include factual error rates, unsafe recommendations, customer complaints, privacy incidents, and differences in performance across relevant customer groups.

Do not use increased trading frequency as the sole measure of success.

## Challenge 7: Build a 12-week plan

Organize the work into phases.

For each phase, specify:
- The objective.
- Key activities.
- Deliverables.
- Dependencies.
- Exit criteria.
- The decision that follows.

Distinguish a validated prototype from a production-ready financial product.

## Challenge 8: Make the final recommendation

Choose one of the following:
- Proceed with a limited MVP.
- Run additional discovery.
- Build a non-AI alternative first.
- Defer the initiative.
- Reject the opportunity.

Justify your recommendation using customer evidence, strategic value, economics, technical feasibility, and risk.

Your proposal should make it clear what the company will learn, what it will invest, and what evidence would cause you to change direction.

# Key Takeaways

1. **Start with the problem, not the requested feature.** Business proposals are hypotheses, not proof of customer demand.

2. **Connect discovery to strategy.** Research should influence the target segment, value proposition, scope, and investment decision.

3. **Validate the riskiest assumptions early.** Avoid spending heavily before establishing that the opportunity is desirable, viable, feasible, and responsible.

4. **An MVP is designed to learn and deliver value.** It is not simply a feature-reduced version of the final product.

5. **Prioritization is resource allocation.** Account for impact, confidence, effort, dependencies, and non-negotiable risks.

6. **Understand the economics.** Adoption alone does not establish that a product can support a sustainable business.

7. **Measure customer outcomes alongside business results.** Revenue, conversion, and engagement can be misleading without quality and risk guardrails.

8. **Delivery includes operations.** Integrations, support, monitoring, reconciliation, and incident response are part of the product.

9. **A launch is the beginning of learning.** Measure outcomes, investigate unexpected results, and adjust the roadmap.

10. **Communicate evidence and uncertainty clearly.** Distinguish facts from estimates and assumptions.

11. **Know when to stop.** A responsible decision not to scale an unsuccessful or unsafe initiative can be more valuable than shipping additional features.

12. **End-to-end Product Management is outcome ownership.** The goal is not merely to deliver software; it is to create measurable customer and business value sustainably.

# Preview of Day 100

**Topic: Product Management Masterclass — From Problem to Scalable Product**

The final lesson will consolidate the entire curriculum into one comprehensive product management framework.

You will practice:
- Moving from business strategy to customer discovery.
- Validating problems and opportunities.
- Developing product vision and strategy.
- Defining an MVP and prioritizing a roadmap.
- Working with engineering, design, data, and stakeholders.
- Building business cases and unit economics.
- Measuring outcomes and running experiments.
- Managing technical, operational, regulatory, and ethical risks.
- Launching, learning, and scaling a product.
- Presenting a complete product case in an interview or executive review.

The final goal is to integrate the curriculum into a repeatable approach you can use in real product decisions, from ambiguous problems to measurable and sustainable outcomes.
