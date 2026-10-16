# Day 86: Build vs Buy vs Partner Decisions

## Introduction

One of the most consequential decisions a Product Manager makes is deciding how a product capability should be delivered.

When a business identifies a new opportunity, the team usually has several options:

- **Build:** Develop the capability internally.
- **Buy:** Acquire an existing product or license a third-party solution.
- **Partner:** Collaborate with another company to deliver the capability.
- **Combine:** Build some components, buy others, and partner for distribution or specialized capabilities.

These decisions affect more than engineering effort. They influence time to market, customer experience, differentiation, operating costs, security, regulatory compliance, organizational complexity, and long-term strategic flexibility.

Consider a digital wallet that wants to introduce international money transfers. The company could build its own international payment infrastructure, integrate with an existing provider, or partner with a financial institution that already operates in the target markets.

Each option solves the same customer problem differently, with different trade-offs.

The Product Manager's responsibility is not to automatically favor building because it offers control, buying because it seems faster, or partnering because it reduces initial development effort. The responsibility is to determine which approach creates the greatest sustainable value for the business and its customers.

This lesson provides a structured framework for making and communicating these decisions.

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain the differences between building, buying, partnering, and hybrid approaches.
- Determine which capabilities should be differentiated from competitors and which should be treated as commodities.
- Evaluate strategic fit, total cost of ownership, time to value, risk, and opportunity cost.
- Build a weighted decision matrix without relying on arbitrary scores.
- Compare vendor proposals and identify hidden costs.
- Evaluate partnership economics, dependencies, and exit risks.
- Design a phased approach when the long-term decision is uncertain.
- Communicate a defensible recommendation to executives, engineering, finance, security, and legal stakeholders.

# 1. Understand the Four Strategic Options

## 1.1 Build

Building means developing and operating a capability using your organization's own resources, technology, and processes.

Examples include:

- Developing a proprietary fraud detection engine.
- Creating a custom portfolio analytics experience for an investment platform.
- Building an internal pricing engine.
- Developing a unique recommendation algorithm.
- Creating a specialized underwriting workflow for an insurance product.

### Advantages

**Greater control**

Your team controls the roadmap, architecture, prioritization, and release schedule.

**Potential differentiation**

You can create experiences or capabilities that competitors cannot easily reproduce.

**Customization**

The solution can reflect your specific business model, workflows, customer needs, and regulatory requirements.

**Knowledge accumulation**

Your organization develops technical and operational expertise that may become strategically valuable.

**Reduced vendor dependence**

You are less exposed to external pricing changes, product discontinuation, or vendor-specific limitations.

### Disadvantages

**Longer time to market**

Discovery, architecture, development, testing, security reviews, and deployment can take months or years.

**High initial investment**

You must fund engineering, infrastructure, maintenance, monitoring, and operational support.

**Opportunity cost**

Every engineer working on a commodity capability is unavailable for a potentially more differentiated product opportunity.

**Execution risk**

Your team may underestimate complexity or lack the necessary expertise.

**Ongoing responsibility**

Building a solution does not eliminate operational costs. It makes your organization responsible for them.

### When building makes sense

Building is attractive when:

- The capability is central to your competitive advantage.
- Your customers have needs that existing solutions cannot satisfy.
- You require significant control over performance, behavior, or the roadmap.
- The capability is strategically important over a long period.
- Your organization has, or can reasonably develop, the necessary expertise.
- The expected long-term benefits justify the investment.

### Example

A crypto exchange wants to differentiate itself through a sophisticated risk engine that detects unusual trading behavior in milliseconds.

If existing products cannot satisfy its latency, explainability, and risk-management requirements, building a proprietary engine may be justified.

However, developing an internal employee expense-management system probably does not deserve the same strategic investment.

The distinction is not whether a capability is technically interesting. It is whether owning that capability creates meaningful business value.

## 1.2 Buy

Buying means using an existing third-party product, software platform, or licensed service.

Examples include:

- Purchasing a customer support platform.
- Licensing identity verification software.
- Using a cloud-based analytics platform.
- Buying a fraud screening solution.
- Adopting a commercial customer relationship management system.

Buying may involve a subscription, usage-based fees, a perpetual license, implementation charges, or a combination.

### Advantages

**Faster time to value**

The provider has already developed a solution that can often be configured and deployed relatively quickly.

**Lower initial development burden**

Your engineers can focus on product-specific problems instead of recreating standard capabilities.

**Established expertise**

A mature provider may have years of experience, operational processes, documentation, and customer feedback.

**Predictable functionality**

You can evaluate existing features and performance before committing, although actual results still require validation.

**Shared investment**

The provider distributes development costs across multiple customers.

### Disadvantages

**Limited customization**

Your product may have to adapt to the vendor's workflows or product limitations.

**Vendor lock-in**

Migration can become expensive when the solution uses proprietary data models, APIs, or workflows.

**Recurring and variable costs**

Subscription fees, usage charges, implementation costs, and premium support can grow significantly.

**Roadmap dependence**

The provider decides which features to prioritize and when to release them.

**Data and compliance concerns**

Sensitive information may be processed or stored outside your infrastructure.

**Uncertain long-term economics**

A product that is inexpensive during a pilot may become costly as transaction volume grows.

### When buying makes sense

Buying is attractive when:

- The capability is widely available and not a major differentiator.
- A mature solution meets most requirements.
- Time to market matters more than deep customization.
- The vendor has stronger expertise than your team.
- The economics remain favorable at realistic scale.
- Integration, security, compliance, and exit requirements are acceptable.

### Example

A fintech startup needs customer identity verification before allowing users to open accounts.

Instead of immediately building document recognition, liveness detection, and identity verification infrastructure, it may use a specialist provider.

This can accelerate launch and leverage existing expertise. However, the team must still evaluate false rejection rates, local document support, data residency, regulatory obligations, and per-verification costs.

Buying a capability does not transfer every legal or operational responsibility to the vendor.

## 1.3 Partner

Partnering means collaborating with another organization to create or deliver value that neither party would necessarily achieve as effectively alone.

Partnerships may include:

- Technology partnerships.
- Distribution partnerships.
- Strategic alliances.
- Revenue-sharing agreements.
- Joint ventures.
- Banking-as-a-service or embedded finance arrangements.
- Co-development agreements.

Examples include:

- A fintech partnering with a bank to provide regulated financial infrastructure.
- An insurance distribution platform partnering with insurers.
- A marketplace partnering with logistics companies.
- An investment application partnering with a brokerage.
- A software company partnering with a reseller to reach enterprise customers.

Partnerships differ from ordinary purchases because value creation, commercial incentives, operational responsibilities, or strategic capabilities are shared across organizations.

### Advantages

**Access to capabilities you do not possess**

A partner may provide licenses, networks, distribution, infrastructure, expertise, or market access.

**Faster market entry**

A partner may already have relationships, customers, and operational capacity.

**Shared investment and risk**

The parties may divide implementation costs, marketing expenses, and operational responsibilities.

**Complementary strengths**

One company may contribute customer relationships while another provides specialized technology.

**Potential network effects**

A partnership can connect your product to a larger ecosystem of customers, suppliers, or complementary services.

### Disadvantages

**Reduced control**

Your roadmap and customer experience may depend on another organization's priorities.

**Misaligned incentives**

A partner may optimize for its own revenue, customer relationships, or strategic objectives rather than yours.

**Coordination overhead**

Joint decisions, approvals, contracts, and cross-company delivery can slow execution.

**Revenue sharing**

You may sacrifice part of the economic value generated by the product.

**Reputational and operational exposure**

A partner's failures can become your customers' problems.

**Relationship concentration**

If one partner provides a critical capability, losing that relationship may threaten the product itself.

### When partnering makes sense

Partnering is attractive when:

- The opportunity requires capabilities or access your company lacks.
- A partner can materially accelerate distribution or market entry.
- Both parties have complementary strengths.
- Shared economics are attractive to both organizations.
- The relationship can be governed through clear responsibilities and agreements.
- You can manage the risks of dependency and potential separation.

### Example

An insurance technology platform wants to offer individual supplementary health insurance.

The platform could become an insurer, develop underwriting capabilities, build claims operations, and assume substantial regulatory responsibilities. Alternatively, it could partner with an established insurer while owning the digital customer experience, comparison process, and distribution channel.

The partnership may allow the platform to focus on customer acquisition and product usability while the insurer supplies insurance products and performs its contractual responsibilities.

The precise division of responsibilities must be established through legal and operational agreements.

## 1.4 Hybrid approaches

The choice does not have to be binary.

A hybrid approach combines options according to their strategic value.

For example, a cryptocurrency exchange might:

- Buy cloud infrastructure.
- Buy a standard identity verification service.
- Partner with a licensed payment provider.
- Build its trading interface.
- Build proprietary risk controls.
- Use external analytics software while developing its own product-specific metrics.

This is often the most practical answer because product capabilities have different strategic importance.

The question becomes: **Which parts should we own, which should we source, and which require a strategic relationship?**

# 2. Start With the Capability, Not the Solution

A common mistake is beginning with a proposed implementation:

"We need to build a new fraud engine."

"We should purchase this vendor's platform."

"We should partner with Company X."

These statements assume the solution before establishing the underlying problem.

Instead, begin with the capability the business needs.

## 2.1 Separate the customer outcome from the implementation

Consider these two problem statements:

**Solution-oriented statement**

"We need to integrate with a third-party identity verification provider."

**Outcome-oriented statement**

"We need to verify eligible customers accurately, securely, and quickly enough to complete account opening while satisfying applicable regulatory requirements."

The second statement creates room for multiple approaches.

It also makes success measurable.

Potential measures include:

- Verification completion rate.
- False acceptance and false rejection rates.
- Median and 95th-percentile verification time.
- Cost per successfully verified customer.
- Manual review rate.
- Fraud losses.
- Compliance exceptions.

The same principle applies to non-financial products.

Instead of saying, "We need to build a recommendation engine," define the desired customer outcome, such as helping users find suitable products with less effort and increasing qualified conversion.

## 2.2 Decompose the capability

A broad capability often contains multiple components with different sourcing requirements.

Suppose an investment platform wants to launch automated portfolio rebalancing.

The capability could include:

1. Portfolio analysis.
2. Rebalancing rules.
3. Market data.
4. Order execution.
5. Regulatory controls.
6. Customer notifications.
7. Performance reporting.
8. Audit records.

These components do not necessarily require the same strategy.

The platform might buy market data, partner with a brokerage for execution, build its own portfolio optimization logic, and develop customer-facing reporting internally.

Capability decomposition prevents a false choice between building everything and buying everything.

## 2.3 Distinguish requirements from preferences

Create three categories.

**Must-have requirements**

Conditions that cannot be compromised, such as regulatory compliance, required security controls, supported markets, or a critical latency threshold.

**Important requirements**

Conditions that strongly influence customer value or business performance, such as workflow flexibility, integration quality, or reporting capabilities.

**Preferences**

Desirable characteristics that may be traded off against cost or delivery time, such as a particular administrative interface or a minor customization.

This distinction helps avoid overengineering and makes vendor evaluation more objective.

A solution that violates a critical requirement should not win merely because it has the highest total score elsewhere.

# 3. Strategic Importance: Differentiation vs. Commoditization

One of the most useful principles in sourcing decisions is to distinguish between capabilities that differentiate your product and those that simply enable it to operate.

## 3.1 Differentiating capabilities

A capability is potentially differentiating when it helps customers choose your product over alternatives.

Examples include:

- A unique financial planning experience.
- A superior trading experience for a specialized customer segment.
- A proprietary underwriting approach.
- A highly effective fraud prevention capability.
- A unique workflow that solves a difficult industry problem.

Building may be attractive when the capability is central to the product's positioning and the organization can deliver it effectively.

However, a capability is not automatically differentiating because it contains complex technology. Complexity is not the same as customer value.

## 3.2 Commodity capabilities

Commodity capabilities are widely available and rarely influence a customer's purchase decision by themselves.

Examples might include:

- Standard employee expense management.
- Generic email delivery.
- Routine file storage.
- Common customer support workflows.
- Standardized identity verification, when providers meet your specific requirements.

For these capabilities, buying can free up resources for more important work.

Yet even a generally commoditized capability can become strategically important in a particular context. For example, identity verification may be a key source of differentiation for a product serving customers whose documents are poorly supported by mainstream vendors.

## 3.3 Use a capability portfolio

A practical starting point is a two-dimensional matrix.

| | Low strategic importance | High strategic importance |
|---|---|---|
| Low differentiation | Buy or standardize | Evaluate carefully; build, partner, or buy based on the source of strategic value |
| High differentiation | Validate whether differentiation is real | Consider building or tightly controlling the capability |

This matrix is a starting point, not a final decision rule.

Strategic importance, differentiation, feasibility, risk, and economics must still be evaluated.

### Questions to assess strategic importance

- Does this capability materially affect customer choice?
- Does it influence revenue, retention, or unit economics?
- Is it central to our product positioning?
- Does it enable future capabilities?
- Would competitors gain a meaningful advantage if they had access to the same solution?
- Is owning the capability necessary, or can we achieve the same customer outcome through a well-managed provider?

The final question is especially important. A product can deliver differentiated value through an excellent integration even if it does not own the underlying technology.

# 4. Evaluate the Main Decision Criteria

A good decision considers multiple dimensions rather than just development cost or delivery speed.

## 4.1 Time to value

Time to value is the time required to deliver meaningful business or customer outcomes.

It is not necessarily the same as time to launch.

A vendor may be available immediately but require six months of integration and operational adaptation. An internal team may need longer to develop a complete solution but deliver a valuable first version earlier.

Estimate the entire path:

- Discovery and requirements.
- Vendor evaluation or architecture.
- Contracting and procurement.
- Development or configuration.
- Integration.
- Security and compliance reviews.
- Testing and migration.
- Training and operational readiness.
- Post-launch stabilization.

Also consider the cost of delaying the opportunity.

If a solution can generate significant contribution margin earlier, faster delivery may have substantial economic value.

## 4.2 Total cost of ownership (TCO)

Initial cost is only one component of the investment.

For a purchased solution, include:

- Subscription or license fees.
- Usage-based fees.
- Implementation and integration.
- Internal engineering effort.
- Vendor management.
- Support and premium service charges.
- Data migration.
- Security and compliance work.
- Contractual price increases.
- Exit and replacement costs.

For a built solution, include:

- Discovery and development.
- Infrastructure and tooling.
- Security reviews.
- Monitoring and incident response.
- Maintenance and upgrades.
- Technical debt.
- On-call and operational staffing.
- Compliance and audit work.
- Future enhancements.
- Opportunity cost of engineering capacity.

For a partnership, include:

- Integration and implementation.
- Revenue sharing.
- Minimum commitments.
- Joint marketing or operational expenses.
- Contract and governance costs.
- Coordination overhead.
- Dependency management.
- Exit or transition costs.

A simple five-year comparison can be useful:

**TCO = Initial costs + cumulative operating costs + expected risk-related costs + exit costs**

Use consistent assumptions and the same time horizon for each option.

Do not compare the initial cost of building with only the subscription fee of buying.

## 4.3 Opportunity cost

Opportunity cost is the value of the best alternative you give up.

Suppose an engineering team has capacity for one major initiative.

- Initiative A: Build a generic notification service.
- Initiative B: Improve payment authorization, potentially increasing successful transactions and revenue.

Even if building the notification service is affordable, it may be a poor use of capacity if an adequate external service already exists.

The relevant question is not only, "Can we build this?"

It is also, "What valuable work will we delay by building it?"

This is especially important for smaller product teams.

## 4.4 Quality and control

Assess whether each option can meet the required standards for:

- Performance and latency.
- Availability and reliability.
- Security and privacy.
- Accessibility.
- Customization.
- Data ownership and portability.
- Auditability.
- Observability.
- Recovery and business continuity.

A provider may have stronger infrastructure than your team but weaker customization or less control over incident resolution.

An internal solution may offer greater control but perform worse if the team lacks operational maturity.

Control should be evaluated in terms of the specific outcomes that matter, not as an abstract preference for ownership.

## 4.5 Scalability and future requirements

Estimate how costs and complexity change as the product grows.

For example, a third-party service may charge a small amount per transaction. At low volume, this is attractive. At high volume, the cost could become substantial.

But high volume alone does not justify building.

You must also account for the investment and operating costs of an internal replacement.

Ask:

- What happens at 10 times the current volume?
- What happens if usage grows 100 times?
- Does pricing scale linearly?
- Will new markets or customer segments require unsupported features?
- Can we negotiate volume discounts?
- Can we migrate without disrupting customers?

Model realistic growth scenarios rather than assuming either constant volume or unlimited growth.

## 4.6 Strategic flexibility

Strategic flexibility is the ability to change direction when market conditions or business priorities change.

Building can provide flexibility if you own the architecture and can change it efficiently. It can also reduce flexibility if your system becomes complex and expensive to maintain.

Buying can provide flexibility through configuration and rapid feature adoption, but proprietary interfaces can create lock-in.

Partnering can provide access to new markets, but contractual restrictions or relationship dependence may constrain future choices.

The relevant measure is the cost and difficulty of changing direction.

## 4.7 Risk and uncertainty

Evaluate risks such as:

- Delivery failure.
- Vendor financial instability.
- Regulatory changes.
- Security incidents.
- Service outages.
- Uncertain adoption.
- Cost escalation.
- Partner conflicts.
- Integration complexity.
- Loss of key expertise.

For each major risk, estimate:

1. The probability of occurrence.
2. The potential impact.
3. The ability to detect it early.
4. The ability to mitigate or recover from it.

Where numerical estimates are meaningful, expected loss can be approximated as:

**Expected loss = Probability of event × Financial impact**

This is a simplification. Low-probability, high-impact events and regulatory constraints may require explicit risk limits rather than being reduced to a single expected-value figure.

# 5. Compare the Economics With a Worked Example

Imagine a fintech company needs an identity verification capability for a new digital product.

It expects to process 100,000 verification attempts per year.

The company is comparing an internal solution with a third-party provider.

The following figures are illustrative, not market benchmarks.

## Option A: Build

- Initial development and launch: $300,000.
- Annual maintenance and operations: $120,000.
- Five-year operating costs: $600,000.

Five-year total:

$300,000 + (5 × $120,000) = **$900,000**

## Option B: Buy

- Initial integration and launch: $80,000.
- Provider fee: $1.20 per verification attempt.
- Annual internal administration and integration maintenance: $30,000.
- Annual volume: 100,000 attempts.

Annual variable fees:

100,000 × $1.20 = $120,000

Annual recurring cost:

$120,000 + $30,000 = $150,000

Five-year total:

$80,000 + (5 × $150,000) = **$830,000**

<text>At this assumed volume, buying costs $70,000 less over five years.</text>

But the comparison is incomplete unless it considers other factors.

The third-party provider might support new identity documents more quickly, reducing manual reviews. Alternatively, it might have poor coverage for the company's target market, causing more customers to fail verification.

Those differences could matter more than the nominal cost.

## 5.1 Sensitivity analysis

Suppose annual volume increases to 250,000 attempts.

Annual provider fees become:

250,000 × $1.20 = $300,000

Annual total recurring cost becomes $330,000.

Five-year total:

$80,000 + (5 × $330,000) = **$1,730,000**

The original build estimate remains $900,000 only if its operating costs remain unchanged. That assumption is unlikely to hold perfectly, so the internal model should also account for increased capacity, infrastructure, and support.

This scenario illustrates why PMs should model multiple volume levels rather than relying on one forecast.

It does not automatically prove that building is better. The team must estimate the internal solution's actual scaling costs and compare quality, risk, and opportunity cost.

## 5.2 Break-even analysis

Under the simplified assumptions above, let annual verification volume be \(V\).

Five-year build cost:

\[
C_{\text{build}} = 300{,}000 + 5(120{,}000)
\]

\[
C_{\text{build}} = 900{,}000
\]

Five-year buy cost:

\[
C_{\text{buy}} = 80{,}000 + 5(30{,}000 + 1.20V)
\]

\[
C_{\text{buy}} = 230{,}000 + 6V
\]

Set the two costs equal:

\[
900{,}000 = 230{,}000 + 6V
\]

\[
V \approx 111{,}667
\]

The simplified break-even volume is approximately 111,667 verification attempts per year.

Above that volume, the model favors building on direct five-year cost alone; below it, the model favors buying.

However, this calculation assumes the same annual volume each year and ignores the time value of money, cost uncertainty, internal scaling, differing quality, and opportunity cost.

Use it as a decision aid, not as the final decision.

# 6. Build a Decision Matrix

A decision matrix helps teams compare options consistently.

Start by choosing criteria based on the product's actual context. Avoid using a generic list without considering the business problem.

A possible matrix:

| Criterion | Weight |
|---|---:|
| Strategic differentiation | 20% |
| Time to value | 15% |
| Five-year total cost | 20% |
| Customer experience and quality | 15% |
| Security and regulatory fit | 15% |
| Flexibility and exit options | 10% |
| Internal capability fit | 5% |
| **Total** | **100%** |

Score each option from 1 to 5:

- 1 = Very poor.
- 2 = Poor.
- 3 = Acceptable.
- 4 = Good.
- 5 = Excellent.

Calculate the weighted score:

**Weighted score = Sum of (criterion weight × option score)**

Use weights as decimals in the calculation. For example, a score of 4 on a criterion weighted at 20% contributes 0.80 points.

The matrix helps reveal trade-offs, but it should not replace judgment.

### Important safeguards

**First, apply hard constraints.**

If an option cannot satisfy a mandatory security or regulatory requirement, eliminate it or identify the gap that must be resolved before it can be considered.

**Second, explain each score.**

A score of 5 for time to value should be supported by a credible implementation plan, not simply a vendor's promise.

**Third, use uncertainty ranges where appropriate.**

If implementation cost is highly uncertain, compare plausible scenarios rather than pretending the estimate is exact.

**Fourth, challenge the weights.**

If the decision changes dramatically when a weight changes slightly, the recommendation may be fragile.

**Fifth, document the assumptions.**

A matrix is only as reliable as the evidence behind it.

**Finally, separate the score from the recommendation.**

A slightly higher score does not necessarily justify a choice if it carries a major unmitigated risk or creates unacceptable strategic dependence.

# 7. Evaluate Vendors and Partners Properly

A compelling demo is not sufficient evidence that a solution will work in production.

## 7.1 Product and technical evaluation

Assess:

- Functional coverage.
- Integration effort.
- API quality and documentation.
- Sandbox availability.
- Performance under realistic loads.
- Reliability and incident history.
- Monitoring and support.
- Data export capabilities.
- Customization options.
- Versioning and backward compatibility.
- Migration and exit support.

Ask for evidence of performance under conditions similar to your own.

A vendor's advertised uptime or average response time may not reflect your specific integration, region, workload, or usage pattern.

## 7.2 Security and compliance evaluation

For fintech products, security and regulatory fit may be decisive.

Evaluate:

- Data processing and storage locations.
- Encryption and access controls.
- Authentication and authorization.
- Data retention and deletion.
- Audit logging.
- Incident notification commitments.
- Subprocessors and subcontractors.
- Applicable certifications and independent assessments.
- Business continuity and disaster recovery.
- Regulatory responsibilities and contractual obligations.

A provider's certification does not automatically make your product compliant. The team must understand the specific responsibilities that remain with its own organization.

Involve security, legal, compliance, and relevant operational teams before making a final commitment.

## 7.3 Commercial evaluation

Look beyond the headline price.

Review:

- Minimum annual commitments.
- Usage-based pricing.
- Volume discounts.
- Price escalation clauses.
- Implementation fees.
- Support tiers.
- Contract duration.
- Renewal and termination provisions.
- Service-level commitments and remedies.
- Data export and transition costs.
- Restrictions on competing providers.
- Revenue-sharing and exclusivity provisions.

Ask the vendor to model costs at several plausible usage levels.

## 7.4 Strategic evaluation

A vendor may be technically excellent but strategically unsuitable.

Ask:

- Is this capability part of the vendor's core business?
- Does the vendor serve direct competitors?
- Could the provider become a competitor?
- Will our roadmap depend on features it may not prioritize?
- Can we switch providers if necessary?
- Does the vendor's business model align with ours?
- Will the vendor support our target markets and future expansion?

A good vendor relationship is not merely a procurement decision. It is a long-term dependency that should be actively managed.

# 8. Partnership Design: Align Incentives Before Launch

Partnerships often fail for reasons unrelated to technical feasibility.

The integration works, but the commercial arrangement does not.

Or both companies agree on the initial opportunity, but their priorities diverge as the product grows.

## 8.1 Identify the value exchange

Clearly define what each party contributes and receives.

For example:

| Dimension | Fintech platform | Banking partner |
|---|---|---|
| Customer acquisition | Leads and digital distribution | Potential existing customer base |
| Product experience | App and customer journey | Required banking interfaces and services |
| Financial infrastructure | Product-specific workflows | Banking capabilities |
| Revenue | Agreed share of product economics | Agreed share of product economics |
| Operational responsibilities | Defined platform responsibilities | Defined banking responsibilities |

This is illustrative; actual responsibilities depend on the product, agreement, and applicable regulation.

The partnership should create a meaningful benefit for each party. If one party captures most of the value while the other bears most of the cost, the relationship may not be sustainable.

## 8.2 Define responsibilities explicitly

Use a responsibility framework such as RACI where useful:

- **Responsible:** Performs the work.
- **Accountable:** Owns the outcome.
- **Consulted:** Provides input.
- **Informed:** Receives updates.

Apply it to critical processes:

- Customer onboarding.
- Identity verification.
- Transaction processing.
- Customer support.
- Fraud investigation.
- Incident response.
- Regulatory reporting.
- Data correction.
- Refunds or reversals.
- Product changes.

Avoid ambiguous arrangements such as "the partner will handle operations" without defining exactly which operations, response times, escalation paths, and accountability boundaries are included.

## 8.3 Define commercial incentives

A partnership should have clear economics.

For example:

- Is revenue shared per transaction or per customer?
- Are there minimum commitments?
- Who funds promotions?
- How are refunds and fraud losses allocated?
- What happens when the customer is acquired by one party but retained by the other?
- Can pricing change during the contract?
- What happens if one party changes its business model?

The contract should reflect the intended economic relationship rather than leaving critical assumptions unresolved.

## 8.4 Plan for disagreement and separation

Before launch, establish:

- Escalation and dispute-resolution mechanisms.
- Service and support expectations.
- Change management procedures.
- Data ownership and access rights.
- Termination rights.
- Transition assistance.
- Data portability and deletion.
- Customer communication responsibilities.
- Business continuity arrangements.

A partnership without a credible exit plan can become a strategic trap.

# 9. Avoid Vendor Lock-In

Vendor lock-in occurs when changing providers becomes prohibitively expensive, risky, or operationally difficult.

It can result from technical, commercial, organizational, or data dependencies.

## 9.1 Common sources of lock-in

- Proprietary APIs.
- Provider-specific data models.
- Complex custom integrations.
- Long-term minimum commitments.
- High migration costs.
- Inaccessible historical data.
- Internal expertise concentrated in a vendor's technology.
- Contractual exclusivity.
- Customer workflows tightly coupled to a single provider.

## 9.2 Reduce lock-in proportionately

Possible approaches include:

**Data portability**

Ensure that essential customer and transaction data can be exported in usable formats.

**Clear contracts**

Negotiate termination rights, transition support, and reasonable data retrieval terms.

**Modular architecture**

Separate vendor-specific implementation details from core business logic where the benefits justify the added complexity.

**Standard interfaces**

Use well-defined internal interfaces so a provider can be replaced without rewriting the entire product.

**Documentation**

Document integration assumptions, operational procedures, and failure-handling behavior.

**Migration readiness**

Maintain a realistic understanding of the time, cost, and operational risk involved in switching.

**Multiple providers**

For critical capabilities, consider multiple providers when redundancy or bargaining power justifies the additional complexity.

However, abstraction layers and multi-provider designs are not free. They require development, testing, monitoring, and ongoing maintenance.

Do not build elaborate portability infrastructure for every minor dependency. Focus on capabilities whose failure or replacement would have material business consequences.

# 10. Build, Buy, or Partner Under Uncertainty

Sometimes the team does not have enough evidence to make a confident long-term decision.

This is common when:

- Customer demand is unproven.
- Future transaction volume is uncertain.
- Vendor capabilities are difficult to evaluate.
- Regulatory conditions may change.
- The company is entering a new market.
- The organization has not yet developed relevant technical expertise.

In these situations, the best answer may be a staged decision.

## 10.1 Use a pilot

A pilot can validate assumptions before committing to a large investment.

For example, a digital wallet could integrate with one payment provider in one market before expanding to several markets.

The pilot should test specific hypotheses:

- Can the integration support the required customer journey?
- Does the provider meet reliability and latency requirements?
- What is the actual cost per successful transaction?
- Can operations resolve failures effectively?
- Are customers satisfied with the experience?
- Can the model scale economically?

Define success criteria and stop conditions before the pilot begins.

## 10.2 Buy time while learning

Buying or partnering initially can be rational even when building may eventually become attractive.

For example, a new investment platform may use a third-party market-data provider while it validates customer demand and trading volume.

Later, it can reconsider building a specialized data capability if:

- Usage has reached a meaningful scale.
- Provider costs materially affect unit economics.
- The company has a clear differentiated use case.
- Internal ownership offers a measurable advantage.

Do not assume that the company must eventually build. Reevaluate the decision when evidence changes.

## 10.3 Use real options thinking

An option has value because it preserves the ability to make a larger decision later.

A small initial investment may allow the team to learn before committing substantial resources.

For example:

1. Run a limited pilot with an external provider.
2. Measure actual demand and quality.
3. Validate internal development estimates.
4. Reassess the strategic value of ownership.
5. Expand, renegotiate, replace, or build based on evidence.

The value of this approach comes from reducing uncertainty and preserving future choices.

However, pilots can create sunk costs and accidental dependencies. Define the decision point and the conditions for continuing before the pilot becomes the default production architecture.

# 11. Make the Decision Reversible Where Possible

Not all decisions have the same reversibility.

A reversible decision can be changed with relatively low cost and limited customer disruption.

An irreversible or difficult-to-reverse decision may create substantial commitments, dependencies, or organizational consequences.

Examples:

- Choosing a configurable analytics tool may be relatively reversible.
- Building an entire product around a proprietary financial infrastructure provider may be difficult to reverse.
- Signing an exclusive, long-term distribution agreement may limit future market options.

For high-impact, difficult-to-reverse decisions:

- Gather stronger evidence.
- Involve relevant experts early.
- Evaluate alternative scenarios.
- Negotiate protections.
- Define a transition plan.
- Document the rationale and assumptions.

For low-cost, reversible decisions, avoid excessive analysis that delays learning.

A useful principle is to match the rigor of evaluation to the potential consequences and reversibility of the decision.

# 12. Common Decision-Making Mistakes

## Mistake 1: Building because the team can

Technical capability does not establish strategic value.

A team may enjoy building an internal platform even when an existing product would meet customer needs more efficiently.

**Better approach:** Compare the expected value of the capability with the opportunity cost of developing it.

## Mistake 2: Buying because the vendor promises faster delivery

A vendor may demonstrate a working product but underestimate integration, migration, and compliance effort.

**Better approach:** Evaluate the full implementation path and validate assumptions with a realistic pilot.

## Mistake 3: Treating the lowest price as the best economics

The cheapest solution may have poor conversion, high failure rates, expensive support, or significant switching costs.

**Better approach:** Compare total cost of ownership and customer outcomes.

## Mistake 4: Assuming partnerships are easy because costs are shared

Partnerships can introduce slow approvals, conflicting incentives, and complex operational dependencies.

**Better approach:** Model coordination costs, decision rights, commercial incentives, and exit risks.

## Mistake 5: Ignoring opportunity cost

A team may spend six months recreating standard infrastructure while a higher-value customer problem remains unresolved.

**Better approach:** Compare each option against the best alternative use of scarce resources.

## Mistake 6: Overweighting short-term speed

A fast solution can create unacceptable long-term dependence or prevent essential product differentiation.

**Better approach:** Evaluate both immediate time to value and the long-term consequences of the decision.

## Mistake 7: Assuming a vendor owns the entire risk

Outsourcing a technical capability does not necessarily outsource regulatory, customer, or business accountability.

**Better approach:** Define the responsibilities that remain with your organization and verify them with the relevant experts.

## Mistake 8: Never revisiting the decision

A solution that was sensible at launch may become uneconomic at scale or unsuitable after market changes.

**Better approach:** Establish review triggers such as transaction volume, cost thresholds, quality deterioration, new regulations, or a major change in strategy.

# 13. Case Study: A Cryptocurrency Exchange Expanding Its Fraud Capabilities

## Situation

A cryptocurrency exchange wants to improve fraud detection and transaction monitoring.

The current system relies on basic rules and manual review. The business has observed:

- Increasing suspicious transaction volume.
- Delays in manual investigation.
- Friction for legitimate customers.
- Pressure from Compliance to improve monitoring.
- Limited internal machine-learning expertise.

Leadership wants an improved solution within four months.

The team considers three options.

### Option A: Build internally

Develop a proprietary detection and monitoring platform.

Potential benefits:

- Greater control over detection logic.
- Better integration with internal trading and account data.
- More flexibility to develop exchange-specific signals.
- Long-term ownership of specialized capabilities.

Potential disadvantages:

- Significant engineering investment.
- Limited internal machine-learning expertise.
- Longer validation and deployment effort.
- Responsibility for ongoing model quality, monitoring, and maintenance.

### Option B: Buy a specialist solution

Integrate a third-party fraud detection or transaction monitoring platform.

Potential benefits:

- Access to established detection capabilities.
- Potentially faster implementation.
- Vendor expertise and ongoing product development.

Potential disadvantages:

- Subscription and usage-based costs.
- Possible gaps in crypto-specific detection.
- Integration and data-sharing complexity.
- Less control over detection logic and roadmap.

### Option C: Partner with a specialist

Collaborate with a company that provides detection technology and domain expertise, potentially through a tailored integration or co-development arrangement.

Potential benefits:

- Access to specialized expertise.
- Opportunities to customize important workflows.
- Shared investment in a differentiated capability.

Potential disadvantages:

- More complex commercial and governance arrangements.
- Potential dependence on the partner.
- Unclear ownership of improvements and intellectual property.
- Risk of conflicting priorities.

## Analysis

The team should first distinguish between standard and differentiating requirements.

Some baseline monitoring capabilities may be available from established providers. Meanwhile, the exchange's proprietary trading behavior, account relationships, and internal risk signals may be important sources of differentiation.

A hybrid strategy may therefore be preferable:

1. Use an external provider for capabilities that meet baseline requirements.
2. Integrate the provider with internal data and investigation workflows.
3. Retain internal ownership of business-specific risk policies and critical decision logic where feasible.
4. Validate detection performance against historical cases and carefully controlled live traffic.
5. Reassess ownership as transaction volume, expertise, and strategic needs evolve.

The team should not assume that external technology automatically satisfies every regulatory obligation. Compliance and legal experts must verify applicable requirements and responsibilities.

## Success metrics

Measure the solution using a balanced set of metrics:

**Risk effectiveness**
- Confirmed fraud loss.
- Detection rate on known cases.
- False positive rate.
- Time from suspicious activity to detection.

**Customer experience**
- Legitimate transaction approval rate.
- Unnecessary account restrictions.
- Time required to resolve customer reviews.

**Operational efficiency**
- Manual investigation volume.
- Average investigation time.
- Analyst productivity.
- Cost per reviewed case.

**Technical performance**
- Detection latency.
- Service availability.
- Integration failure rate.
- Data freshness.

**Economics**
- Total operating cost.
- Cost per monitored transaction.
- Financial loss avoided, with assumptions clearly stated.

The team should evaluate the overall impact rather than optimizing detection rate alone. A system that flags every transaction may detect more suspicious activity but also block legitimate customers and overwhelm investigators.

# 14. Communicating the Recommendation to Executives

Executives generally need a clear recommendation, evidence, trade-offs, and an implementation plan—not an exhaustive description of every possible vendor.

Use a concise decision memo.

## Recommended decision memo structure

### 1. Decision required

What decision needs approval, and by when?

### 2. Business outcome

What customer or business problem are we solving?

### 3. Options considered

Summarize the most viable build, buy, partner, and hybrid alternatives.

### 4. Recommendation

State the preferred option and why it best supports the business strategy.

### 5. Evidence

Include the most important findings:

- Expected time to value.
- Total cost of ownership.
- Strategic differentiation.
- Quality and performance.
- Security and compliance fit.
- Key assumptions.

### 6. Trade-offs and risks

Explain what the company gives up, what could go wrong, and how the team will mitigate it.

### 7. Implementation plan

Identify milestones, owners, dependencies, and decision gates.

### 8. Reassessment triggers

Explain what new evidence would cause the team to revisit the decision.

## Example executive summary

"We recommend initially purchasing the baseline identity verification capability and retaining internal ownership of the customer onboarding experience and verification decision workflow.

This approach is expected to accelerate launch while avoiding a substantial investment in standard verification infrastructure. The recommendation is conditional on the provider meeting our mandatory security, regulatory, document-coverage, and performance requirements.

We will run a controlled pilot, measure successful verification rate, false rejection rate, latency, and cost per verified customer, and validate five-year economics at multiple volume levels. We will revisit the sourcing strategy if costs exceed the agreed threshold, the provider fails our quality requirements, or a differentiated internal capability becomes economically justified."

This format makes the recommendation understandable and gives executives a clear basis for approving or challenging it.

# 15. Practical Exercise: Evaluate Three Sourcing Options

## Scenario

You are the Product Manager of a growing digital investment platform.

The company wants to introduce automated portfolio rebalancing within six months.

The capability must:

- Analyze customers' current portfolios.
- Calculate proposed portfolio changes.
- Support the required customer authorization and execution flow.
- Provide a clear explanation of proposed changes.
- Meet applicable security and regulatory requirements.

The team has limited engineering capacity. An external brokerage partner already supports order execution, and several vendors offer portfolio analytics products.

Consider three alternatives.

**Option A — Build**

Develop the portfolio analysis and rebalancing engine internally, using the existing brokerage integration for execution.

**Option B — Buy**

Purchase a portfolio analytics and rebalancing product, then integrate it into the customer experience.

**Option C — Hybrid**

Buy standard market and portfolio data capabilities, use the brokerage partner for execution, and build the proprietary rebalancing rules and customer explanation layer.

## Your tasks

### Task 1: Define the outcome

Write a problem statement that describes the customer and business outcome without prematurely selecting an implementation.

Identify at least three measurable success metrics.

### Task 2: Identify differentiating capabilities

Which components are likely to influence customer choice?

Which components are likely to be standardized?

Explain why.

### Task 3: Build the comparison

Score each option from 1 to 5 against these criteria:

- Time to value.
- Total cost of ownership.
- Strategic differentiation.
- Customer experience.
- Security and regulatory fit.
- Flexibility.
- Internal capability fit.

Choose weights that reflect the scenario. Explain why your most important criteria deserve their weights.

### Task 4: Identify hidden costs

List at least five costs or risks that would not be visible in a vendor's headline price.

### Task 5: Define the decision gate

Suppose the hybrid approach launches first.

What evidence would cause you to:

- Continue with the hybrid approach?
- Build more capabilities internally?
- Replace the vendor?
- Expand the partnership?

Be specific about thresholds or evidence wherever practical.

### Task 6: Write the recommendation

Write a short executive recommendation covering:

1. Your preferred approach.
2. The key reason for choosing it.
3. The main trade-off.
4. The biggest risk.
5. The evidence you need before scaling.

# 16. Final Challenge: Choosing a Strategy for an Individual Insurance Platform

## Business context

You are the Product Manager of a digital platform that helps customers discover and purchase individual supplementary health insurance.

The company wants to expand its product offering while maintaining a simple online customer experience.

The team is considering three initiatives:

- Developing a proprietary insurance recommendation engine.
- Buying a customer communication and lead-management platform.
- Establishing partnerships with additional insurers to expand product coverage.

The company has limited engineering capacity and wants to launch improvements within three months.

The current platform already has an insurance distribution relationship with one insurer. Customers need help understanding plan differences, deductibles, coverage limits, exclusions, and the suitability of available plans.

## Your challenge

Prepare a sourcing strategy for the next 12 months.

### Part A: Decompose the capabilities

Break the opportunity into at least six distinct capabilities.

For each capability, identify whether it is a candidate for building, buying, partnering, or a hybrid approach.

### Part B: Prioritize the capabilities

Rank the capabilities by:

- Customer impact.
- Strategic importance.
- Implementation urgency.
- Risk of delaying the decision.

Explain which capabilities should receive immediate attention and which can wait.

### Part C: Design the insurance recommendation strategy

Decide which elements of the recommendation experience should be owned internally and which could rely on insurer data or external services.

Consider:

- Customer eligibility.
- Coverage comparisons.
- Deductibles and limits.
- Exclusions.
- Price transparency.
- Suitability explanations.
- Product availability.
- Data accuracy.
- Regulatory and legal review.

How will you avoid presenting a recommendation that is misleading, unsuitable, or based on outdated product information?

### Part D: Evaluate insurer partnerships

Define the commercial, operational, and technical criteria for adding another insurer.

Consider:

- Product breadth.
- Data quality.
- Pricing and commission structure.
- Quote and purchase integration.
- Service reliability.
- Responsibilities for customer support and claims inquiries.
- Contractual restrictions.
- Customer data handling.
- Exit options.

### Part E: Develop a 90-day plan

Create a phased plan with milestones.

For each phase, define:

- The objective.
- The activities.
- The responsible teams.
- The expected deliverable.
- The success criteria.
- The decision to be made at the end of the phase.

### Part F: Present your recommendation

Prepare a five-minute executive presentation that answers:

1. What should the company build, buy, and partner for?
2. Why is this the best allocation of limited resources?
3. What are the expected customer and business benefits?
4. What risks remain?
5. How will the team know whether the strategy is working?
6. Under what circumstances would you change the decision?

Your goal is not to select the most sophisticated technology. It is to build the most effective combination of capabilities to deliver customer value, support business strategy, and preserve the organization's ability to adapt.

# Key Takeaways

1. **Start with the business outcome, not the proposed solution.** Define the capability and the customer problem before deciding how to deliver it.

2. **Build where ownership creates meaningful value.** Technical complexity alone is not a reason to build.

3. **Buy proven capabilities when ownership provides little advantage.** Evaluate the entire cost and implementation path, not just the subscription price.

4. **Partner when complementary capabilities or market access matter.** Clear incentives, responsibilities, governance, and exit provisions are essential.

5. **Decompose broad capabilities.** Different components of the same product can require different sourcing strategies.

6. **Evaluate total cost of ownership.** Include ongoing operations, integration, opportunity cost, and exit costs.

7. **Treat strategic dependencies as product risks.** Vendor lock-in, partner concentration, and roadmap dependence can constrain future choices.

8. **Use evidence to manage uncertainty.** Pilots, sensitivity analysis, and decision gates help prevent premature long-term commitments.

9. **Apply hard constraints before weighted scoring.** A high average score cannot compensate for an unacceptable security or regulatory gap.

10. **Revisit decisions when conditions change.** Volume, economics, customer needs, market conditions, and internal capabilities evolve.

11. **Optimize for the overall product, not individual components.** The best solution may combine internal ownership, external technology, and strategic partnerships.

12. **Make the trade-offs explicit.** A strong recommendation explains why the chosen option is preferable, what it sacrifices, and what evidence could change the decision.

# Preview of Day 87

**Topic: AI Product Management Fundamentals**

Tomorrow, we will explore how managing AI-powered products differs from managing traditional software products.

You will learn about:

- The differences between traditional software and AI-driven behavior.
- AI product opportunities and the problems AI is suited to solve.
- Predictive AI, generative AI, and other AI approaches.
- Data quality, model capabilities, and evaluation.
- Managing probabilistic outputs and user trust.
- Human-in-the-loop workflows.
- AI product discovery, feasibility, and risk.
- Defining measurable outcomes for AI features.
- Deciding when AI is necessary—and when simpler approaches are better.

The central question will be: **How should a Product Manager determine whether AI creates enough customer and business value to justify its cost, uncertainty, and operational complexity?**
