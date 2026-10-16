# Day 84: Product Reliability & Site Reliability Fundamentals

# Learning Objectives

By the end of this lesson, you will be able to:

- Explain product reliability and why it is a core part of customer value.
- Distinguish reliability, availability, resilience, fault tolerance, and recoverability.
- Understand the fundamentals of Site Reliability Engineering (SRE) and how it supports product teams.
- Define Service-Level Indicators (SLIs), Service-Level Objectives (SLOs), Service-Level Agreements (SLAs), and error budgets.
- Identify reliability risks across customer journeys and technical dependencies.
- Use incident data and reliability metrics to guide product decisions.
- Understand observability, monitoring, alerting, incident response, and post-incident reviews.
- Balance feature delivery with reliability improvements.
- Collaborate effectively with Engineering, QA, Operations, Security, and Customer Support on reliability.
- Apply reliability concepts to a fintech product where service failures can affect money, trust, and regulatory obligations.

---

# 1. What Is Product Reliability?

Product reliability is the ability of a product to perform its intended functions correctly and consistently under expected conditions.

A reliable product does not merely remain online. It helps customers accomplish their goals without unacceptable errors, delays, data loss, or unexpected behavior.

Consider a digital wallet.

A customer expects to:

1. Open the application.
2. View an accurate balance.
3. Transfer money.
4. Receive confirmation.
5. See the correct transaction history.

The product can technically be available while still failing this customer.

For example:

- The app opens, but the balance is outdated.
- A transfer request times out even though the money was moved.
- The payment succeeds, but the transaction history is not updated.
- The customer retries a request and accidentally creates a duplicate transaction.
- The application is responsive, but identity verification is unavailable.

From the customer's perspective, these are reliability problems even if the application server is running.

**The central principle is that reliability should be measured around the customer's ability to complete important tasks, not only around the health of technical infrastructure.**

## 1.1 Reliability is part of the product experience

Customers rarely distinguish between a frontend defect, a backend outage, a third-party API failure, and a data synchronization problem.

They experience the result.

If a customer cannot buy insurance, complete a payment, or access an investment account, the product has failed to deliver its intended value.

Reliability influences:

- Customer trust.
- Conversion.
- Retention.
- Customer support costs.
- Revenue.
- Reputation.
- Regulatory exposure.
- The cost of operating the product.

For this reason, reliability should be part of product strategy, roadmap planning, and launch decisions.

## 1.2 Reliability expectations depend on the use case

Not every feature needs the same reliability target.

For example:

| Product capability | Reliability consideration |
|---|---|
| Marketing blog | A short outage may have limited impact |
| Product search | Slow or unavailable search can reduce conversion |
| Insurance quote calculator | Incorrect calculations can mislead customers |
| Digital wallet transfer | Failure can create financial loss and customer anxiety |
| Crypto exchange order placement | Failure can affect time-sensitive financial decisions |
| Internal reporting dashboard | Delayed data may be acceptable if clearly labeled |
| Account security controls | Failures can create serious security risks |

Reliability requirements should reflect the consequences of failure, not simply the technology involved.

---

# 2. Reliability, Availability, Resilience, and Related Concepts

These concepts overlap, but they describe different aspects of system behavior.

## 2.1 Availability

Availability describes whether a system or capability is usable when needed.

A service might have an availability target of 99.9% over a defined period.

However, availability depends on what the team measures.

A service can return successful HTTP responses while failing to complete the business operation the customer requested.

For example, an API may return a response saying that a transfer request was accepted, while the actual transfer remains unresolved.

Therefore, teams should measure availability at the right level: infrastructure, API, business transaction, or customer journey.

## 2.2 Reliability

Reliability concerns whether a system performs correctly and consistently over time.

A service may be available but unreliable if it frequently returns incorrect results or produces inconsistent transaction states.

For example, a cryptocurrency exchange might be reachable all day but occasionally display inaccurate portfolio balances.

The service has high technical availability but poor reliability for an important customer task.

## 2.3 Resilience

Resilience is the ability to withstand failures, adapt, and continue providing acceptable service.

Examples include:

- Using a backup provider when the primary provider fails.
- Degrading nonessential functionality during high load.
- Retrying transient errors safely.
- Isolating failures so they do not affect unrelated services.
- Preserving transaction state during a temporary outage.

Resilience does not mean that failures never happen. It means the system is designed to handle them.

## 2.4 Fault tolerance

Fault tolerance is the ability to continue operating despite certain component failures.

Examples include:

- Redundant service instances.
- Replicated data stores.
- Multiple network paths.
- Failover mechanisms.

Redundancy alone does not guarantee fault tolerance. Shared dependencies, configuration errors, or incorrect failover behavior can still cause a complete failure.

## 2.5 Recoverability

Recoverability describes how effectively a system can return to an acceptable state after a failure.

It includes restoring service, recovering data, reconciling incomplete operations, and resolving inconsistent states.

For financial products, recovery must address both technical availability and business correctness.

Restarting a service may restore connectivity, but it does not necessarily resolve transactions that were left in an unknown state.

## 2.6 Durability

Durability is the ability to preserve committed data.

For example, after a transfer has been successfully recorded, the transaction record should not disappear because a server restarts.

Durability is particularly important for payments, financial ledgers, orders, customer records, and audit logs.

## 2.7 A practical comparison

Imagine a payment service that becomes unavailable for five minutes.

- **Availability:** The service could not accept or process requests during that interval.
- **Resilience:** A backup mechanism may have kept some payment operations working.
- **Fault tolerance:** Other service instances may have continued operating when one instance failed.
- **Recoverability:** The team restored service and resolved transactions left pending.
- **Durability:** Transactions already committed remained safely recorded.
- **Reliability:** The overall payment experience is judged by whether the intended operations complete correctly and consistently.

These concepts should be considered together rather than treated as interchangeable metrics.

---

# 3. What Is Site Reliability Engineering?

Site Reliability Engineering, commonly called SRE, is an engineering discipline that applies software engineering and operational practices to building and operating reliable systems.

SRE emphasizes:

- Measurable reliability objectives.
- Automation.
- Observability.
- Incident management.
- Capacity planning.
- Safe deployment practices.
- Learning from failures.
- Reducing repetitive operational work.

SRE is often associated with dedicated reliability engineers, but its principles are useful even when an organization has no formal SRE team.

## 3.1 Traditional operations versus SRE

In a traditional operating model, a team may respond to operational problems manually and repeatedly.

Examples:

- Restarting services after failures.
- Checking logs manually.
- Deploying fixes through repetitive procedures.
- Responding to alerts without improving the underlying system.

An SRE-oriented approach asks whether these activities can be automated, prevented, or made less frequent.

For example, rather than repeatedly responding to a service becoming overloaded, the team might improve capacity management, autoscaling, load shedding, or resource limits.

The objective is not to eliminate human judgment. It is to reserve human attention for problems that genuinely require it.

## 3.2 What is toil?

Toil is repetitive operational work that tends to be manual, automatable, reactive, and of limited lasting value.

Examples include:

- Repeatedly clearing the same queue.
- Manually reconciling routine operational failures.
- Performing identical deployment steps by hand.
- Responding to recurring alerts that do not require investigation.

Not all operational work is toil. Investigating a novel incident or making a difficult reliability decision can be valuable work.

From a PM's perspective, recurring toil is a signal that the product's operating model may need investment.

If engineers spend a substantial portion of their time resolving recurring operational issues, less capacity remains for customer-facing improvements.

## 3.3 Reliability is a shared responsibility

Reliability should not belong exclusively to an Operations or SRE team.

Different roles contribute in different ways:

- **Product Management:** Defines customer expectations, business priorities, acceptable risk, and trade-offs.
- **Engineering:** Designs and implements reliable systems.
- **SRE/Operations:** Improves service operation, observability, automation, and recovery.
- **QA:** Helps validate critical workflows, failure cases, and regression behavior.
- **Security:** Identifies threats and safeguards against security-related failures.
- **Data:** Ensures that important data pipelines and reporting remain dependable.
- **Customer Support:** Detects customer-facing problems and communicates their impact.

A PM does not need to design failover mechanisms personally. The PM does need to understand the consequences of reliability decisions and ensure they are considered in planning.

---

# 4. Understanding SLI, SLO, and SLA

Three terms are fundamental to reliability management.

## 4.1 Service-Level Indicator (SLI)

An SLI is a quantitative measure of a service's behavior.

Examples:

- Percentage of eligible payment requests completed successfully.
- Percentage of requests completed within 500 milliseconds.
- Percentage of customers who complete a critical workflow without a technical error.
- Percentage of account-balance requests returning sufficiently fresh data.

An SLI should have a clear definition.

For example, "payment success rate" is ambiguous until the team defines:

- Which payment types are included.
- What counts as an eligible request.
- Which outcomes count as successful.
- How timeouts and pending transactions are handled.
- Whether customer cancellations are included.
- Which time window is used.

Poorly defined indicators can create misleading conclusions.

## 4.2 Service-Level Objective (SLO)

An SLO is a target for an SLI over a defined period.

Example:

"At least 99.9% of eligible payment-status requests should complete successfully over a rolling 30-day window."

An SLO helps teams make explicit decisions about reliability.

It answers questions such as:

- How reliable does this capability need to be?
- What level of failure is acceptable?
- When should the team prioritize reliability improvements?
- How should the team evaluate a proposed release?

SLOs should reflect customer needs and business risk.

A generic target should not be applied to every product component without considering its purpose.

## 4.3 Service-Level Agreement (SLA)

An SLA is a formal commitment to a customer or another party about a service level, often with specified remedies or consequences if the commitment is not met.

For example, a B2B platform might contractually commit to a certain availability level for its customers.

An SLA may be informed by internal SLOs, but they are not identical.

A company might set a more demanding internal SLO to provide a safety margin before reaching the contractual SLA threshold.

## 4.4 A practical example

Suppose a digital wallet uses these definitions:

- **SLI:** Percentage of eligible transfer requests that reach a defined terminal state correctly.
- **SLO:** At least 99.95% of eligible transfer requests reach that state correctly over a rolling 30-day period.
- **SLA:** A contractual availability commitment for a specific service, with defined exclusions and remedies.

Notice that the SLI focuses on correct transfer outcomes, while the SLA may concern availability.

They answer different questions. A service can meet an availability commitment and still have a transfer-correctness problem.

For critical financial operations, teams should not rely on a single availability indicator.

## 4.5 Choosing meaningful SLIs

A useful SLI should be:

- Relevant to the customer.
- Clearly defined.
- Measurable from reliable data.
- Actionable by the team.
- Stable enough to support meaningful comparisons.
- Resistant to misleading interpretations.

For a product with multiple critical journeys, one SLI may not be sufficient.

A crypto exchange might need separate indicators for:

- Login and authentication.
- Market-data freshness.
- Order placement.
- Order-status updates.
- Withdrawals.
- Balance accuracy.
- Account security.

Each capability has different failure modes and customer consequences.

---

# 5. Availability Mathematics and Error Budgets

Availability targets are often expressed as percentages.

Although percentages look similar, small differences can represent substantial changes in allowable downtime.

## 5.1 What does 99.9% availability mean?

Suppose a service targets 99.9% availability over a 30-day month.

For a simplified calculation:

- A 30-day month has 43,200 minutes.
- 0.1% of 43,200 minutes is 43.2 minutes.

Therefore, 99.9% availability corresponds to approximately 43.2 minutes of unavailability during that 30-day period, assuming a simple time-based definition and a full 30-day window.

## 5.2 Comparing availability targets

Approximate maximum downtime in a 30-day period:

| Availability target | Approximate downtime |
|---|---:|
| 99% | 7 hours, 12 minutes |
| 99.5% | 3 hours, 36 minutes |
| 99.9% | 43.2 minutes |
| 99.95% | 21.6 minutes |
| 99.99% | 4.32 minutes |
| 99.999% | 25.9 seconds |

These figures illustrate the mathematics, not a recommendation that every service should target a particular percentage.

Actual calculations depend on the measurement method, window, exclusions, and whether the SLI measures time-based availability or request success.

## 5.3 Why higher availability becomes more expensive

Improving availability may require:

- Redundant infrastructure.
- Additional regions or providers.
- More sophisticated failover.
- Stronger monitoring.
- More extensive testing.
- Better incident response.
- More careful release procedures.
- Additional engineering and operational capacity.

Moving from 99% to 99.9% may be relatively straightforward in some systems. Moving from 99.99% to 99.999% may require substantially more investment.

The relationship is not always linear.

The PM's job is to help the team determine whether the added reliability justifies its cost and complexity.

## 5.4 What is an error budget?

An error budget is the amount of unreliability permitted by an SLO during its measurement period.

If an SLO allows a 0.1% failure rate, the corresponding budget represents the remaining allowance for failures under that SLO's measurement method.

For a request-based SLO:

- Eligible requests: 1,000,000.
- Target success rate: 99.9%.
- Allowed unsuccessful requests: 1,000.

If 700 requests fail, 300 unsuccessful requests remain within the simple budget calculation for that window.

The calculation assumes that each request is weighted equally and that the SLO defines unsuccessful requests consistently.

For some products, a weighted or customer-journey-based measure may be more meaningful.

## 5.5 How error budgets guide product decisions

An error budget provides a way to discuss release risk using evidence.

When reliability is comfortably within its target, the team may have more room to introduce changes.

When the budget is being consumed rapidly, the team may need to:

- Investigate the underlying cause.
- Reduce risky releases.
- Improve automated testing.
- Prioritize reliability fixes.
- Reassess the launch scope.
- Improve rollback and recovery procedures.

This should not become a mechanical rule without judgment.

For example, a financial correctness issue may require immediate remediation even when an availability SLO remains healthy.

Conversely, an error-budget breach may require analysis before the team can identify the appropriate response.

## 5.6 Error budgets are not permission to harm customers

An error budget does not mean that any failure is acceptable as long as the percentage remains within target.

Some failures have disproportionate consequences.

A single unauthorized transfer, serious data leak, or materially incorrect financial calculation may require urgent action even if overall service metrics look excellent.

Reliability objectives should coexist with non-negotiable security, integrity, and compliance requirements.

---

# 6. Measuring Reliability at the Customer-Journey Level

A service-level metric is useful, but it may not tell the whole product story.

Consider a customer trying to complete a bank transfer.

The journey might involve:

1. Authentication.
2. Retrieving account information.
3. Entering the destination account.
4. Validating the amount.
5. Submitting the request.
6. Receiving a processing result.
7. Updating the transaction history.

Every step may depend on a different component.

A healthy login service does not compensate for a broken transfer-confirmation service.

## 6.1 Identify critical journeys

Start by identifying the customer jobs that must work reliably.

Examples include:

- Registering and verifying an account.
- Completing a payment.
- Placing a trading order.
- Withdrawing funds.
- Purchasing an insurance policy.
- Viewing a correct account balance.
- Recovering access to an account.

For each journey, define the expected outcome and the most important failure conditions.

## 6.2 Measure successful completion

A journey-completion indicator might measure the percentage of eligible attempts that reach a defined successful outcome.

For example:

"At least 99.5% of eligible, valid transfer attempts should reach a correct terminal state within the agreed processing window."

The exact target depends on the system, transaction type, and customer expectations.

The definition must distinguish:

- A successfully completed transfer.
- A rejected transfer for a valid business reason.
- A pending transfer.
- A failed transfer.
- A request with an unknown outcome.

Not every rejected request represents a technical failure.

## 6.3 Measure freshness and correctness

Some product capabilities depend on accurate, current information.

Examples include:

- Account balances.
- Portfolio values.
- Market prices.
- Insurance eligibility.
- Order status.
- Transaction history.

A system can respond quickly while returning stale data.

Therefore, reliability may require separate indicators for freshness, correctness, and response time.

For a crypto exchange, for example, the team might measure market-data freshness independently from order-placement success.

## 6.4 Avoid averaging away serious failures

Suppose a payment platform handles 10 million requests per month and has a 99.99% success rate overall.

That could still mean approximately 1,000 unsuccessful requests.

If those failures are concentrated among one payment provider, one region, or one type of high-value transfer, the average can hide a serious issue.

Segment reliability metrics by dimensions that help identify meaningful differences, such as:

- Payment provider.
- Customer platform.
- Region.
- Transaction type.
- Application version.
- Critical workflow.

Segmentation should support diagnosis while respecting privacy and data-access controls.

---

# 7. The Four Golden Signals of Monitoring

A common SRE approach is to monitor four important signals.

## 7.1 Latency

Latency measures how long a request or operation takes.

Examples:

- API response time.
- Search latency.
- Payment-status retrieval time.
- Time to complete an onboarding step.

Track percentiles such as p50, p95, and p99 when appropriate.

An average may look healthy even when a small but important group of customers experiences very slow responses.

## 7.2 Traffic

Traffic measures demand on a system.

Examples:

- Requests per second.
- Orders per minute.
- Payment attempts.
- Active sessions.
- Messages processed per second.

Traffic helps the team understand whether performance problems are associated with changes in demand.

## 7.3 Errors

Errors measure failed requests or operations.

Examples:

- Failed API requests.
- Payment-processing failures.
- Exceptions.
- Invalid responses.
- Timeouts.

Teams should distinguish technical failures from expected business outcomes.

A declined card, for example, is not automatically a technical error.

## 7.4 Saturation

Saturation indicates how close a system is to exhausting a resource or capacity limit.

Examples:

- CPU utilization.
- Memory pressure.
- Database connection-pool usage.
- Queue depth.
- Disk capacity.
- Rate-limit consumption.

Saturation can provide early warning that the system may become unreliable under continued load.

## 7.5 How PMs can use the four signals

Suppose customers report that checkout is slow.

The four signals help frame the investigation:

- **Latency:** Are checkout requests taking longer?
- **Traffic:** Has demand increased?
- **Errors:** Are requests timing out or failing?
- **Saturation:** Are databases, queues, or other resources approaching capacity?

These signals do not automatically identify the root cause, but they help the team narrow the investigation.

---

# 8. Observability, Monitoring, and Alerting

These concepts are closely related but not identical.

## 8.1 Monitoring

Monitoring tracks predefined measures of system behavior.

Examples include:

- Error rate.
- CPU utilization.
- Payment success rate.
- Queue depth.
- Database response time.

Monitoring is useful when the team knows which conditions indicate a problem.

## 8.2 Observability

Observability is the ability to understand a system's internal behavior from the information it exposes.

It commonly uses three complementary forms of telemetry:

**Metrics:** Aggregated numerical measurements over time.

**Logs:** Records of events and application behavior.

**Traces:** Information showing how a request moves through multiple services.

For example, if a payment request is slow, a distributed trace can help reveal whether the delay occurred in the wallet service, a database query, or an external payment provider.

## 8.3 Alerting

An alert notifies the appropriate person or system when a condition requires attention.

A useful alert should be actionable.

For example:

"Payment success rate for Provider A has dropped below the agreed threshold for five minutes."

This is generally more useful than an alert that says:

"CPU usage is 82%."

The CPU alert might be relevant, but it does not necessarily indicate a customer-impacting problem.

## 8.4 Avoid alert fatigue

Too many low-value alerts can overwhelm responders.

Common causes include:

- Alerts triggered by harmless fluctuations.
- Duplicate alerts for the same underlying problem.
- Alerts without clear ownership.
- Alerts that require no action.
- Missing escalation rules.
- Thresholds that are not reviewed.

The goal is not to alert on everything. It is to detect meaningful problems quickly and direct them to people who can respond.

## 8.5 Correlate technical and business signals

For a financial product, a useful dashboard might combine:

- Payment success rate.
- Payment latency.
- External-provider error rates.
- Pending transaction count.
- Reconciliation discrepancies.
- Related support contacts.

This makes it easier to connect system behavior to customer outcomes.

Telemetry should not expose unnecessary sensitive data. Logging and tracing need appropriate privacy, security, and retention controls.

---

# 9. Incident Management

An incident is an event that disrupts or threatens the normal operation of a service or product.

Incidents vary in severity.

Examples include:

- A minor degradation in a noncritical report.
- A payment provider outage affecting some customers.
- A widespread login failure.
- Incorrect account balances.
- Unauthorized transactions.
- A security incident involving sensitive customer information.

The response should reflect the actual and potential impact.

## 9.1 Incident severity

Organizations often define severity levels using dimensions such as:

- Number of affected customers.
- Financial impact.
- Security implications.
- Regulatory obligations.
- Duration.
- Availability of a workaround.
- Criticality of the affected workflow.

For example:

- **SEV 1:** Critical customer harm, widespread outage, or serious security or financial-integrity issue.
- **SEV 2:** Significant degradation affecting an important workflow or customer segment.
- **SEV 3:** Limited impact with a viable workaround.
- **SEV 4:** Minor issue with little immediate customer impact.

These labels are illustrative. Every organization should define its own severity model, ownership, and response expectations.

## 9.2 Incident response lifecycle

A typical lifecycle includes:

1. **Detection:** Identify that something is wrong.
2. **Triage:** Determine severity, scope, and likely impact.
3. **Containment:** Limit further harm.
4. **Mitigation:** Restore acceptable service or provide a safe workaround.
5. **Recovery:** Restore normal operation and reconcile affected state.
6. **Communication:** Inform stakeholders and customers as appropriate.
7. **Review:** Identify contributing factors and improvements.
8. **Follow-through:** Complete the corrective actions.

These steps may overlap during a real incident.

## 9.3 The PM's role during an incident

A PM can help by:

- Clarifying customer and business impact.
- Helping establish the priority of competing issues.
- Coordinating with Support, Operations, Compliance, and leadership.
- Ensuring customer communication is accurate.
- Supporting decisions about feature suspension or rollback.
- Tracking decisions and unresolved questions.
- Helping define when normal operations can resume.

The PM should not distract responders with unnecessary status requests or take over technical diagnosis from the responsible engineers.

An agreed incident lead and communication channel can help keep work coordinated.

## 9.4 Communicating with customers

Customer communication should be accurate, timely, and proportionate to the incident.

It should explain, when appropriate:

- What functionality is affected.
- What customers should expect.
- Whether action is required.
- Whether transactions may be delayed or unresolved.
- When the next update will be provided.

Avoid claiming that funds are safe, transactions are complete, or data is unaffected before the team has evidence to support those statements.

For financial products, ambiguous communication can increase anxiety and lead customers to repeat actions that worsen the situation.

---

# 10. Incident Reviews and Learning

Restoring service is not the end of incident management.

The organization also needs to understand what happened and reduce the likelihood or impact of recurrence.

## 10.1 Blameless post-incident reviews

A blameless review focuses on the conditions, decisions, system behavior, and safeguards that contributed to an incident.

It does not mean that accountability disappears.

It means that the organization investigates why the system allowed the incident to occur instead of stopping at the question of who made a mistake.

For example, if an engineer deploys a configuration that causes a service failure, the review might investigate:

- Why the configuration was not validated automatically.
- Whether the release process allowed an unsafe change.
- Whether the monitoring detected the issue quickly.
- Whether rollback was available.
- Whether ownership was clear.

This often produces more durable improvements than simply instructing the engineer to be more careful.

## 10.2 What a post-incident review should contain

A useful review includes:

- A concise incident summary.
- Timeline of key events.
- Customer and business impact.
- Detection method.
- Root causes and contributing factors.
- What worked well.
- What did not work well.
- Corrective actions.
- Owners and due dates.
- Follow-up measures.

Avoid filling the document with details that do not help explain the incident or improve the system.

## 10.3 Track corrective actions to completion

An incident review creates value only if important improvements are implemented.

Corrective actions may include:

- Adding a missing alert.
- Improving automated testing.
- Fixing a retry mechanism.
- Introducing safer deployment procedures.
- Clarifying ownership.
- Updating recovery documentation.
- Improving customer messaging.

The PM can help ensure that high-impact actions are visible in planning and that unresolved risks are escalated appropriately.

---

# 11. Reliability Engineering Practices PMs Should Understand

PMs do not need to implement these techniques, but understanding their purpose improves product decisions.

## 11.1 Redundancy

Redundancy provides additional components or capacity so a single failure does not necessarily interrupt the service.

Examples include:

- Multiple application instances.
- Replicated databases.
- Multiple network paths.
- Backup service providers.

Redundancy introduces cost and complexity. It must be designed and tested to work when needed.

## 11.2 Failover

Failover moves operations from a failed component to a backup.

For example, a system may route requests to a secondary provider when the primary provider becomes unavailable.

Failover requires careful handling of:

- State consistency.
- Duplicate requests.
- Provider capabilities.
- Switching criteria.
- Recovery to the primary provider.

In financial products, automatic switching should not introduce duplicate transactions or violate business rules.

## 11.3 Timeouts

A timeout limits how long a system waits for an operation.

Without appropriate timeouts, slow dependencies can cause requests to remain open and consume resources.

However, a timeout does not necessarily mean that the underlying operation failed.

A payment request may time out after the provider has already processed it.

The product must distinguish "confirmed failure" from "outcome unknown" where appropriate.

## 11.4 Retries

Retries repeat an operation after a failure or timeout.

They can help recover from transient problems, but poorly designed retries can amplify load or create duplicate actions.

Useful practices include:

- Bounded retry attempts.
- Exponential backoff.
- Randomized jitter where appropriate.
- Clear retryable-error rules.
- Idempotency for operations that may be repeated safely.

Retries should not be treated as a universal solution.

## 11.5 Idempotency

An operation is idempotent when repeating it produces the same intended effect as performing it once.

For example, a transfer API may accept an idempotency key so that repeating the same logical request does not create multiple transfers.

This is especially important when a client cannot determine whether an earlier request completed.

Idempotency design needs to define key scope, retention, request matching, and behavior when repeated requests have different parameters.

## 11.6 Circuit breakers

A circuit breaker temporarily stops sending requests to a dependency that is failing repeatedly.

This can prevent a failing dependency from consuming resources and causing wider system problems.

The system may later allow controlled attempts to determine whether the dependency has recovered.

Circuit breakers can improve resilience, but their configuration and fallback behavior need careful testing.

## 11.7 Graceful degradation

Graceful degradation means preserving important functionality when some nonessential capabilities are unavailable.

Examples include:

- Allowing customers to view cached information while clearly labeling its freshness.
- Keeping account access available when a recommendation service fails.
- Disabling nonessential analytics widgets during a traffic spike.
- Showing a clear pending state when a downstream confirmation service is delayed.

For financial information, stale data must not be presented as current. A degraded experience must remain safe and understandable.

## 11.8 Backpressure and load shedding

Backpressure prevents overloaded components from accepting work faster than they can process it.

Load shedding deliberately rejects or drops some work to preserve critical functionality.

For example, a system might limit low-priority reporting tasks during a traffic spike so that payment processing retains capacity.

These mechanisms should reflect business priorities and avoid silently losing important customer operations.

---

# 12. Capacity Planning and Performance Risk

A system can operate reliably at today's traffic level and fail when demand increases.

Capacity planning estimates whether infrastructure and dependencies can support expected workloads.

## 12.1 Identify demand patterns

Consider:

- Average traffic.
- Peak traffic.
- Sudden spikes.
- Seasonal patterns.
- Campaign-driven demand.
- Large batch jobs.
- Third-party rate limits.

A fintech application may experience unusual load during market volatility, salary-payment periods, tax deadlines, or promotional campaigns.

Historical averages alone may not predict these conditions.

## 12.2 Understand bottlenecks

Potential bottlenecks include:

- CPU and memory.
- Database throughput.
- Connection pools.
- External APIs.
- Message queues.
- Network bandwidth.
- Lock contention.
- Rate limits.

The team should identify the actual bottleneck rather than scaling unrelated infrastructure.

## 12.3 Plan for failure conditions

Capacity planning should also ask:

- What happens if one service instance fails?
- Can the remaining instances handle the load?
- What if a provider slows down?
- What if a queue grows faster than it can be drained?
- How long will recovery take?
- Which operations should receive priority?

A system that works only when every component is healthy may be fragile under realistic operating conditions.

## 12.4 Use load and resilience testing

Different tests answer different questions.

- **Load testing:** How does the system perform under expected demand?
- **Stress testing:** At what point does performance deteriorate or the system fail?
- **Spike testing:** How does the system respond to sudden demand increases?
- **Soak testing:** Does performance degrade during prolonged operation?
- **Resilience testing:** How does the system behave when components or dependencies fail?

Testing should use realistic scenarios and appropriate safeguards, especially when production systems or real financial transactions could be affected.

---

# 13. Reliability and Product Roadmap Decisions

Reliability competes with features for engineering capacity, but the two are not always separate investments.

## 13.1 Reliability can unlock growth

Suppose an exchange has a fragile order-placement service.

The business wants to introduce advanced order types and expand into additional markets.

Improving the service may enable:

- More order types.
- Safer release frequency.
- Better handling of market volatility.
- Reduced incident response costs.
- Faster integration of new capabilities.

The investment may be both a reliability improvement and a strategic product enabler.

## 13.2 Understand the cost of inaction

The cost of postponing reliability work may include:

- Expected customer losses.
- Increased support demand.
- Delayed releases.
- Manual operational effort.
- Higher incident-response costs.
- Lost conversion or retention.
- Regulatory and reputational risk.

Some costs can be estimated quantitatively; others require a qualitative risk assessment.

Avoid inventing financial benefits simply to make infrastructure work appear more attractive.

## 13.3 Evaluate reliability investments like product investments

For a significant reliability initiative, define:

**Problem:** What is failing or becoming expensive?

**Evidence:** What incidents, metrics, or workflow observations support the concern?

**Customer impact:** Who is affected, and how?

**Business impact:** What costs, risks, or opportunities are involved?

**Proposed investment:** What capability or system improvement is needed?

**Success measures:** How will the team determine whether the investment worked?

**Trade-offs:** What customer-facing work may be delayed?

**Risks:** What uncertainty remains in the diagnosis or implementation?

## 13.4 Use reliability as a launch criterion

A launch decision should consider more than feature completeness.

Depending on the risk profile, readiness may include:

- Critical journey testing.
- Acceptable error rates.
- Monitoring and alerts.
- Capacity validation.
- Rollback procedures.
- Incident ownership.
- Customer communication.
- Recovery and reconciliation procedures.
- Security and compliance approval.

A product does not need perfect reliability to launch, but the team should understand the remaining risks and ensure they are acceptable.

For high-risk financial capabilities, some safeguards are prerequisites rather than optional roadmap improvements.

---

# 14. A Practical Reliability Review Framework

When evaluating an important feature or service, a PM can use the following review.

## A. Customer impact

- What customer job does this capability support?
- What happens when it fails?
- How many customers could be affected?
- Is the failure recoverable?
- Could it create financial, security, or regulatory harm?

## B. Measurement

- What are the critical SLIs?
- What SLOs apply?
- How are business failures distinguished from technical failures?
- Are metrics segmented enough to reveal concentrated problems?
- Is the data trustworthy?

## C. Detection

- How will the team detect a failure?
- Will customers discover the problem before the team does?
- Are alerts actionable?
- Is the appropriate owner clear?

## D. Containment

- Can the failure be isolated?
- Can nonessential functionality be disabled safely?
- Are retries bounded and safe?
- Can the system prevent a local problem from becoming a broader outage?

## E. Recovery

- Can the team restore service?
- Can it identify affected transactions or customers?
- Is data reconciliation required?
- Are recovery steps documented and tested?

## F. Release safety

- Are critical scenarios covered by automated tests?
- Is a gradual rollout possible?
- Can the change be rolled back?
- Are there dependencies or migrations that make rollback difficult?
- Who decides whether to stop a rollout?

## G. Operating model

- Who owns the service?
- Who responds to incidents?
- Who communicates with customers?
- How are reliability improvements prioritized?
- How are incident actions tracked?

This framework can be adapted to feature reviews, architecture discussions, launch readiness, and quarterly planning.

---

# 15. Practical Case Study: A Cryptocurrency Exchange During Market Volatility

## Scenario

You are the PM for order placement at a cryptocurrency exchange.

During periods of high market volatility:

- Order submissions become slower.
- Some customers receive timeout messages.
- Support contacts increase.
- Customers are unsure whether their orders were placed.
- Engineers observe rising queue depth.
- The market-data service remains mostly available.
- Leadership wants to launch advanced order types next month.

## Step 1: Define the actual customer problem

The main problem is not simply "the system is slow."

Customers need to know whether an order was accepted, rejected, or remains unresolved.

A timeout can create a particularly confusing experience if the backend may have processed the request.

The team should determine whether the issue is primarily:

- Request latency.
- Order-processing capacity.
- A downstream dependency.
- Incorrect retry behavior.
- Delayed status updates.
- An unclear customer-facing state.

## Step 2: Choose appropriate SLIs

Potential indicators include:

- Percentage of valid order requests reaching a correct terminal state within the target time.
- p95 and p99 order-submission latency.
- Rate of unresolved order outcomes.
- Rate of duplicate-order incidents.
- Queue depth and processing delay.
- Time required to reconcile uncertain order states.

A simple HTTP success rate is insufficient if it does not reflect the order's actual outcome.

## Step 3: Investigate the system

Engineering might examine:

- Traffic spikes.
- Queue saturation.
- Database contention.
- Downstream service latency.
- Rate limits.
- Retry amplification.
- Order-state transitions.
- Capacity under degraded conditions.

The PM should help establish customer impact and prioritize investigation, not prescribe a specific technical fix without evidence.

## Step 4: Consider immediate mitigations

Depending on the root cause, possible mitigations might include:

- Limiting nonessential workloads.
- Reducing unnecessary retries.
- Improving the status experience for unresolved requests.
- Introducing temporary rate limits.
- Disabling an affected feature.
- Increasing capacity where it is an appropriate and safe solution.

Any mitigation must preserve order correctness and applicable trading rules.

## Step 5: Decide what to do about the launch

The advanced order types launch may need to be delayed, narrowed, or staged if the current service cannot safely support additional complexity.

Alternatively, engineering may establish that the problem is isolated and can be mitigated without blocking the entire release.

The decision should be based on:

- Evidence of the root cause.
- Severity and frequency of failures.
- The risks introduced by the new order types.
- The effectiveness of mitigations.
- The ability to monitor and roll back the release.

## Step 6: Establish measurable improvements

Examples include:

- Reduce the rate of unresolved order outcomes.
- Improve p99 submission latency under a defined load.
- Reduce queue recovery time.
- Prevent duplicate orders during retries.
- Reduce support contacts caused by ambiguous order status.

Targets should be set using observed baselines and agreed business requirements.

## Key lesson

Reliability is not just about keeping the exchange online. It is about preserving correct, predictable customer outcomes when the system is under pressure.

---

# 16. Practical Exercise: Create a Reliability Plan

Choose one product or critical feature, such as:

- Digital wallet transfers.
- Cryptocurrency order placement.
- Insurance checkout.
- Account registration.
- Investment portfolio reporting.
- Subscription billing.

Complete the following exercise.

## Part A: Define the critical journey

Describe the customer's goal and the steps required to complete it.

Identify the step where failure would have the greatest consequence.

## Part B: Identify failure modes

List at least five possible failures.

Examples:

- Slow response.
- Third-party outage.
- Incorrect data.
- Duplicate request.
- Stuck transaction.
- Failed notification.
- Database saturation.
- Missing confirmation.

For each failure, describe the customer impact and potential business risk.

## Part C: Define three SLIs

Choose three indicators that cover different aspects of the journey.

For example:

1. Correct completion rate.
2. p95 or p99 latency.
3. Percentage of transactions reaching a known terminal state within the expected processing window.

Write a precise definition for each indicator.

## Part D: Propose SLOs

Set realistic target values and a measurement window.

Explain why the targets are appropriate for the use case.

If you do not have historical data, state that the targets are provisional and identify the baseline you would need to establish.

## Part E: Design an incident response

Define:

- What should trigger an alert.
- Who owns the initial response.
- How severity is determined.
- How the team limits customer harm.
- How customer communication is coordinated.
- How recovery is verified.
- How the team learns from the incident.

## Part F: Plan a reliability improvement

Choose one high-priority problem.

Describe the proposed improvement, expected outcome, implementation risks, and success metrics.

Consider whether the appropriate response is prevention, detection, containment, recovery, or a combination.

## Part G: Make a roadmap trade-off

Assume the team has capacity for either:

- One additional customer-facing feature.
- One reliability improvement that addresses a recurring failure.

Explain what evidence you would need to choose between them.

Identify any non-negotiable reliability or safety constraints.

---

# 17. Final Challenge: The Fintech Reliability Roadmap

## Scenario

You are the Senior Product Manager for a financial platform offering wallet transfers, payments, and investment accounts.

The company is preparing to launch in two new markets.

The current system has several issues:

- Core APIs usually respond successfully, but some customer journeys fail.
- Payment-status updates can be delayed.
- Support contacts increase during traffic spikes.
- Engineers manually investigate recurring incidents.
- Monitoring focuses mainly on infrastructure health.
- There are no clearly documented SLOs for important customer journeys.
- The team has limited capacity for the next quarter.
- Commercial leadership wants to keep the market-expansion launch date.

Your task is to prepare a reliability strategy for the next quarter.

## Task 1: Identify critical customer journeys

Select three journeys that require explicit reliability goals.

For each, define:

- The customer goal.
- The expected successful outcome.
- The most serious failure modes.
- The potential customer and business impact.

## Task 2: Define SLIs and SLOs

For each journey:

- Propose at least one meaningful SLI.
- Define the numerator and denominator where applicable.
- Specify the measurement window.
- Propose a provisional SLO.
- Explain how the team will validate the target.

Avoid using generic infrastructure availability as the only measure of success.

## Task 3: Design a monitoring strategy

Define the key metrics, logs, traces, and alerts required to detect failures.

Include both technical and business indicators.

Explain how the team will prevent alert fatigue and protect sensitive customer data.

## Task 4: Prioritize reliability investments

Choose the first three investments for the quarter.

Potential options include:

- Improving transaction-state handling.
- Adding critical journey monitoring.
- Automating recovery procedures.
- Improving capacity planning.
- Reducing repeated manual operations.
- Introducing safer deployment practices.
- Strengthening data reconciliation.
- Improving incident ownership.

For each investment, explain the expected impact, effort, and cost of delay.

## Task 5: Establish an incident model

Define:

- Severity levels.
- Incident ownership.
- Escalation rules.
- Customer communication responsibilities.
- Recovery verification.
- Post-incident review practices.
- Follow-up ownership.

Include how the team will handle transactions whose outcomes remain uncertain after a timeout or outage.

## Task 6: Define error-budget policies

Explain how the team should respond when an SLO is being breached or its error budget is being consumed rapidly.

Distinguish ordinary availability degradation from severe financial-integrity, security, or compliance issues.

Describe when new releases should be restricted, narrowed, or delayed.

## Task 7: Make the launch decision

Decide whether the market-expansion launch should proceed as planned, be staged, or be delayed.

State the evidence and guardrails required for your decision.

Do not automatically delay the launch simply because some reliability work remains, and do not proceed merely because the deadline is commercially important.

## Task 8: Present the executive recommendation

Write a concise recommendation covering:

- The most important reliability risks.
- The first three investments.
- The expected customer and business outcomes.
- The implications for the launch.
- The measurements leadership should review.
- The risks that will remain after the quarter.

## Evaluation criteria

A strong answer will:

- Define reliability in terms of correct customer outcomes.
- Use measurable and clearly defined SLIs and SLOs.
- Recognize the difference between availability and business correctness.
- Prioritize risks according to customer impact and severity.
- Include detection, containment, recovery, and learning.
- Connect reliability investments to business outcomes.
- Make realistic roadmap trade-offs.
- Treat financial integrity, security, and compliance as explicit constraints.
- Establish ownership and an ongoing operating model rather than relying on one-time fixes.

---

# Key Takeaways

1. Product reliability means that customers can complete important tasks correctly and consistently, not merely that a service is online.
2. Availability, reliability, resilience, fault tolerance, recoverability, and durability describe different aspects of system behavior.
3. Site Reliability Engineering applies engineering principles, automation, measurement, and operational learning to reliability.
4. An SLI measures service behavior, an SLO defines a target, and an SLA establishes a formal commitment.
5. Error budgets help teams discuss the trade-off between release speed and reliability, but they do not justify unacceptable security, financial-integrity, or compliance failures.
6. Customer-journey metrics are often more meaningful than infrastructure metrics alone.
7. Latency, traffic, errors, and saturation are useful signals for understanding service health.
8. Observability combines metrics, logs, and traces to help teams investigate system behavior.
9. Effective incident management includes detection, triage, containment, mitigation, recovery, communication, and follow-through.
10. Blameless incident reviews help organizations improve system safeguards and reduce recurring failures.
11. Retries, timeouts, idempotency, failover, and graceful degradation can improve resilience when designed appropriately.
12. Reliability expectations should reflect the consequences of failure, customer needs, and business context.
13. Reliability investments should have clear objectives, evidence, owners, and success measures.
14. A PM helps connect reliability decisions to customer outcomes, commercial priorities, and acceptable risk.
15. The objective is not to eliminate every failure. It is to prevent unacceptable failures, detect problems quickly, contain their impact, and recover safely.

# Preview of Day 85

**Day 85 — APIs, Integrations & Technical Ecosystems**

Tomorrow, we will explore how APIs enable products and services to communicate, how integrations shape product capabilities, and how PMs should evaluate API contracts, authentication, versioning, rate limits, webhooks, third-party dependencies, and integration risks. We will use practical examples from payment providers, identity verification, insurance systems, and cryptocurrency exchanges.