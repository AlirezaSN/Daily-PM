# Day 97: Product Crisis Management & Incident Response

# Learning Objectives

By the end of this lesson, you should be able to:

- Distinguish a product incident from a crisis.
- Classify incidents by severity, customer impact, and business risk.
- Understand the Product Manager's role during an incident.
- Coordinate engineering, design, operations, support, security, legal, and leadership teams during an incident.
- Make decisions under pressure when information is incomplete.
- Communicate clearly with customers and internal stakeholders.
- Balance rapid recovery against data integrity, security, and regulatory requirements.
- Use incident timelines, root-cause analysis, and blameless postmortems to prevent recurrence.
- Define incident response metrics and recovery objectives.
- Build a practical incident response playbook for a fintech or digital product.

# 1. What Is Product Crisis Management?

Product crisis management is the process of preparing for, responding to, and recovering from events that significantly threaten customers, business operations, product reliability, security, or organizational trust.

Examples include:
- A payment system stops processing transactions.
- A crypto exchange displays incorrect account balances.
- A production deployment prevents customers from logging in.
- A security incident exposes customer information.
- An insurance purchase flow issues incorrect policy details.
- An AI assistant provides materially incorrect financial guidance.
- A third-party provider experiences an outage that affects your product.

A crisis is not simply a difficult product decision or a missed delivery date. It is a situation where the consequences of an event require coordinated action, rapid decisions, and clear communication.

## 1.1 Incident versus crisis

An **incident** is an event that disrupts or threatens normal service, security, data integrity, or business operations.

A **crisis** is a more consequential situation in which the incident threatens broader business continuity, customer safety, regulatory obligations, financial stability, or public trust.

For example:

- A minor delay in loading a dashboard may be a routine incident.
- A prolonged outage affecting most customers may become a major incident.
- An outage that prevents customers from accessing funds during a market disruption may escalate into a business crisis.

Not every incident becomes a crisis. Effective incident response helps prevent escalation.

## 1.2 Why Product Managers matter

Engineering teams often lead technical diagnosis and remediation. However, many incident decisions are product and business decisions.

Examples include:
- Which customer workflows should be disabled?
- Should a feature be rolled back?
- Should the product temporarily stop accepting new transactions?
- What should customers be told?
- Which customer segments are affected?
- What work should be deprioritized to support recovery?
- When is the service safe to restore?
- What long-term improvements should be prioritized afterward?

The Product Manager helps ensure that incident decisions reflect customer impact, business priorities, and acceptable risk—not only technical convenience.

**The PM's goal during a serious incident is to help protect customers, support recovery, and ensure that the right people make timely decisions.**

# 2. The Incident Response Lifecycle

Incident management is easier to coordinate when teams share a common lifecycle.

A practical model has six stages:

1. Preparation.
2. Detection and assessment.
3. Containment.
4. Investigation and recovery.
5. Communication and monitoring.
6. Post-incident learning.

These stages may overlap. For example, customer communication can begin before the root cause is fully understood.

## 2.1 Preparation

Preparation includes:
- Defining incident severity levels.
- Establishing escalation paths.
- Assigning incident roles.
- Creating communication templates.
- Documenting rollback and recovery procedures.
- Identifying critical dependencies.
- Establishing monitoring and alerting.
- Practicing incident scenarios.

Preparation matters because a team under pressure should not need to invent its decision-making process from scratch.

## 2.2 Detection and assessment

The team determines:
- What is happening?
- When did it start?
- Which systems are affected?
- Which customers are affected?
- Is the issue ongoing?
- Is data integrity or security at risk?
- How quickly could the impact grow?

Initial information is often incomplete. The team should communicate what is known, what remains uncertain, and what it is doing next.

## 2.3 Containment

Containment limits additional damage.

Examples:
- Disable a faulty feature.
- Roll back a release.
- Stop processing potentially unsafe transactions.
- Revoke compromised credentials.
- Route traffic to a healthy service.
- Restrict a vulnerable integration.
- Pause a workflow that produces incorrect results.

Containment may temporarily reduce functionality. That can be appropriate when continuing normal operation would increase harm.

## 2.4 Investigation and recovery

The team identifies the likely cause, validates a fix, and restores service safely.

Recovery should consider:
- Data correctness.
- Outstanding or duplicated transactions.
- Customer access.
- System dependencies.
- Backlogs.
- Reconciliation.
- Monitoring.
- The possibility of recurrence.

A system appearing operational does not necessarily mean the product has recovered fully.

## 2.5 Communication and monitoring

Throughout the incident, stakeholders need timely, consistent updates.

After a fix is deployed, the team should monitor whether:
- Error rates have returned to normal.
- Transactions are processing correctly.
- Backlogs are shrinking.
- Customer complaints are declining.
- No secondary failures have appeared.

Communication continues until the incident is resolved and customers understand any remaining impact.

## 2.6 Post-incident learning

After the immediate pressure has passed, the team reviews:
- What happened.
- How the issue was detected.
- Which decisions were made.
- How customers were affected.
- What worked.
- What made the incident worse.
- What should change.

The purpose is not to find someone to blame. It is to improve the system and the organization's ability to respond.

# 3. Incident Severity and Classification

Teams need a shared way to determine how urgently an incident should be handled.

Without a common classification system, every issue can become an emergency—or a serious issue can be underestimated.

## 3.1 Common severity levels

The exact labels vary by organization. One practical model is:

| Severity | Description | Example |
|---|---|---|
| SEV-1: Critical | Severe customer harm, critical service failure, or major security/data-integrity risk | Customers cannot safely access or transact with critical financial services |
| SEV-2: High | Major functionality is impaired for a substantial customer group | Deposits fail for a significant percentage of customers |
| SEV-3: Moderate | A limited feature or segment is affected, with a viable workaround | A reporting dashboard is unavailable |
| SEV-4: Low | Minor issue with limited impact | A noncritical visual defect |

These are illustrative definitions. Each organization should define severity levels and escalation thresholds appropriate to its product and risk profile.

## 3.2 Severity is not just the number of affected users

A useful assessment considers several dimensions.

**Customer impact**
- How many customers are affected?
- How important is the affected workflow?
- Is there a workaround?
- Are customers losing access to important services?

**Financial impact**
- Are transactions failing?
- Could money be lost or duplicated?
- Is revenue materially affected?
- Could remediation costs grow?

**Security and privacy**
- Is customer information exposed?
- Are credentials compromised?
- Is unauthorized access possible?

**Data integrity**
- Are balances, records, or policy details incorrect?
- Could corrupted data spread to other systems?

**Duration and trajectory**
- How long has the issue persisted?
- Is the impact growing?
- Could the incident worsen quickly?

**Regulatory and reputational impact**
- Are reporting or notification obligations potentially triggered?
- Could the incident undermine customer trust?

A small number of affected customers may still justify critical severity if the potential harm is substantial.

## 3.3 Severity versus priority

Severity describes the impact and urgency of the incident.

Priority determines how the organization allocates attention and resources.

A severe incident usually receives the highest priority, but a team may have multiple concurrent incidents. Leadership may need to allocate people across them based on risk, dependencies, and available expertise.

The Product Manager should not downgrade a serious incident simply because it affects a small segment or conflicts with a business target.

## 3.4 Escalation triggers

Escalate quickly when:
- Critical customer workflows are unavailable.
- Financial records may be incorrect.
- Security or privacy may be compromised.
- The incident is expanding.
- There is no safe workaround.
- A third-party failure affects a critical dependency.
- A regulatory reporting deadline may apply.
- The team cannot establish the scope of potential harm.

When uncertain about a potentially serious incident, it is generally safer to escalate for assessment than to delay because the evidence is incomplete.

# 4. Incident Roles and Responsibilities

Incident response works best when people understand who is coordinating, who is diagnosing, who is communicating, and who has authority to make high-impact decisions.

## 4.1 Incident Commander

The Incident Commander coordinates the overall response.

Responsibilities may include:
- Declaring or coordinating incident status.
- Establishing priorities.
- Assigning workstreams.
- Managing escalation.
- Maintaining situational awareness.
- Coordinating decisions.
- Ensuring that actions and outcomes are recorded.

The Incident Commander does not need to perform every technical task.

For a severe technical incident, this role is often assigned to an engineering or operations leader with incident-response experience.

## 4.2 Technical lead

The technical lead coordinates diagnosis and remediation.

Responsibilities include:
- Investigating the failure.
- Evaluating possible fixes.
- Assessing rollback options.
- Coordinating engineering resources.
- Validating technical recovery.
- Identifying risks introduced by remediation.

## 4.3 Product Manager

The PM contributes customer and business context.

Responsibilities include:
- Clarifying the importance of affected workflows.
- Identifying impacted customer segments.
- Helping prioritize customer-impacting decisions.
- Coordinating product and business stakeholders.
- Supporting customer communication.
- Helping assess whether functionality can be safely disabled.
- Ensuring follow-up work is prioritized.

The PM should avoid becoming an additional source of noise by asking engineers for constant unstructured updates. Establish a predictable update cadence instead.

## 4.4 Communications lead

This person coordinates updates for customers, support teams, executives, and other stakeholders.

Depending on the organization, the role may be handled by support, communications, customer success, or a designated incident coordinator.

Responsibilities include:
- Maintaining consistent messaging.
- Publishing status updates.
- Coordinating customer notifications.
- Avoiding unsupported claims.
- Recording communication decisions.

## 4.5 Security, legal, compliance, and risk

These functions may need to assess:
- Potential unauthorized access.
- Privacy and data exposure.
- Reporting obligations.
- Financial exposure.
- Evidence preservation.
- Customer remediation.
- Required notifications.

For security and regulatory incidents, involve the appropriate specialists early. Product and engineering teams should not independently decide that an event has no reporting implications when the issue falls within specialist responsibilities.

## 4.6 One person can hold multiple roles

Smaller organizations may not have enough people to assign a separate owner to every role.

The important thing is to make responsibilities explicit.

Even if the PM coordinates stakeholder updates and the engineering lead manages technical remediation, everyone should know who has authority to make each decision.

# 5. Making Decisions Under Pressure

Incidents often require decisions before the full cause is known.

The objective is not to eliminate uncertainty before acting. It is to make safe, reversible decisions where possible and escalate high-consequence choices appropriately.

## 5.1 Separate facts, hypotheses, and unknowns

Consider a crypto exchange experiencing a sudden increase in failed withdrawals.

The team may know:
- Withdrawal failures increased at 14:05.
- A new release was deployed at 13:50.
- Failures affect one particular withdrawal route.

The team may hypothesize:
- The release caused the problem.
- A network provider is experiencing an outage.
- A configuration change is incorrect.

The team may not yet know:
- Whether any transactions were duplicated.
- Whether funds are at risk.
- Whether all affected requests can be safely retried.

Keep these categories separate.

Treating a plausible hypothesis as an established fact can lead to the wrong recovery action.

## 5.2 Use reversible actions where possible

Examples:
- Disable a feature flag.
- Roll back a recent deployment.
- Pause new requests to a failing integration.
- Route traffic to a healthy provider.
- Temporarily restrict a risky workflow.

A reversible action can reduce harm while the team investigates.

However, not every rollback is safe. Reverting software may not reverse database changes or external financial transactions.

Evaluate the actual consequences before acting.

## 5.3 Prioritize harm reduction

A useful decision sequence is:

1. Prevent additional customer harm.
2. Protect security and data integrity.
3. Preserve evidence when required.
4. Restore the safest viable service.
5. Verify correctness.
6. Restore full functionality gradually.
7. Investigate and prevent recurrence.

In a financial product, a temporarily unavailable transaction may be preferable to accepting requests that could produce incorrect balances or duplicate transfers.

## 5.4 Avoid premature certainty

Do not tell customers that:
- No data was affected.
- Funds are completely safe.
- The issue is permanently fixed.
- No further impact is expected.

unless the available evidence supports those statements.

A more responsible update explains what has been confirmed, what remains under investigation, and when the next update will be provided.

## 5.5 Maintain a decision log

Record:
- Time.
- Decision.
- Decision owner.
- Evidence available.
- Alternatives considered.
- Expected consequences.
- Follow-up actions.

A decision log helps teams coordinate and provides valuable context during the postmortem.

It also prevents the same question from being repeatedly debated without new information.

# 6. Customer Communication During an Incident

Customer communication is part of incident response, not an activity that begins after engineering finishes.

Silence can increase uncertainty, support volume, and reputational damage.

## 6.1 The four elements of an incident update

A useful update answers:

1. What is happening?
2. Who or what is affected?
3. What is the team doing?
4. When will the next update arrive?

When relevant, also explain what customers should or should not do.

## 6.2 Example: Payment outage

Weak message:

"We are experiencing technical difficulties. Please try again later."

This message does not explain the affected workflow or help customers avoid risky actions.

Better message:

"We are investigating an issue affecting payment processing. Some payments may be delayed or may not complete as expected. We are working to restore service and verify transaction status. If a payment appears pending, please avoid submitting repeated requests until its status is confirmed. We will provide another update at the next scheduled status update."

The exact wording should reflect the incident's known facts and the product's actual behavior.

## 6.3 Communicate before the full root cause is known

It is often appropriate to acknowledge a significant customer impact before identifying the precise technical cause.

You can communicate the symptoms and response without speculating about the cause.

For example:

"We are investigating an issue affecting access to account balances. We have not yet confirmed the cause. Our team is working to restore reliable access and verify data accuracy."

This is more useful than waiting silently until the investigation is complete.

## 6.4 Segment communication

Different audiences may need different information.

**Affected customers**
- What is affected?
- What should they do?
- Are their actions or transactions pending?
- When will the next update arrive?

**Support teams**
- What symptoms should they expect?
- Which troubleshooting steps are safe?
- What should be escalated?
- Which claims should they avoid making?

**Executives**
- Severity.
- Customer and business impact.
- Current containment.
- Main uncertainties.
- Decisions needed.
- Expected next update.

**Regulators and other external parties**
- Information required by applicable obligations.
- Appropriate channels and timelines.
- Verified facts and relevant documentation.

Communication should be coordinated so that different teams do not publish conflicting explanations.

## 6.5 Do not confuse transparency with speculation

Transparency does not mean sharing every unverified theory.

A responsible communication standard is:
- State known facts.
- Acknowledge uncertainty.
- Explain what is being done.
- Provide a realistic update cadence.
- Correct earlier statements when evidence changes.

# 7. Rollback, Degradation, and Recovery Decisions

A key incident-response question is whether to restore the previous state, disable functionality, or continue operating with reduced capability.

## 7.1 Rollback

Rollback returns the product or system to a previously working version or configuration.

It is useful when a recent change is strongly suspected to have caused the incident and reverting it is safe.

Potential complications:
- Database schema changes.
- Irreversible data migrations.
- External transactions already initiated.
- Incompatible client versions.
- Changes in third-party systems.

Rollback should be treated as a recovery strategy, not a universal solution.

## 7.2 Feature degradation

Sometimes the best option is to disable a noncritical feature while keeping essential functionality available.

Examples:
- Disable advanced analytics while preserving account access.
- Pause automated recommendations while retaining manual controls.
- Disable a new AI assistant while leaving standard support available.
- Suspend a failing external payment route while keeping other routes operational, if routing can be done safely.

This requires the team to understand dependencies and customer consequences.

## 7.3 Graceful degradation

Graceful degradation means the product continues providing a reduced but safe level of service when part of the system fails.

For example:
- A dashboard displays the last verified update time rather than pretending stale data is current.
- A search feature becomes temporarily unavailable while direct navigation still works.
- An AI feature is disabled while a conventional workflow remains available.

The key is to make the reduced capability clear to users.

## 7.4 Recovery is not complete until correctness is verified

Suppose an exchange restores its withdrawal service.

The system may still have:
- A backlog of pending requests.
- Transactions with unknown external status.
- Duplicate submission risks.
- Incorrect status messages.
- Reconciliation work remaining.

A service can be technically available while operational correctness remains unresolved.

Define recovery criteria before declaring the incident fully resolved.

# 8. Financial Products: Special Incident Considerations

Fintech incidents require particular care because failures can affect money, access, transaction integrity, and regulatory obligations.

## 8.1 Payment failures

Important questions:
- Was the payment initiated?
- Did the provider receive the request?
- Was the payment authorized, captured, rejected, or left in an unknown state?
- Could retrying create a duplicate?
- Can the status be reconciled?

Never assume that a timeout means a transaction failed. The request may have succeeded while the response was lost.

## 8.2 Incorrect balances

If account balances may be wrong:
- Determine the scope of the inconsistency.
- Identify the authoritative record.
- Prevent unsafe downstream actions where necessary.
- Reconcile affected transactions.
- Communicate carefully.
- Verify corrected balances before restoring dependent functionality.

A cosmetic display defect and an incorrect underlying ledger require different responses, even if customers initially see the same symptom.

## 8.3 Security incidents

Potential security incidents require rapid involvement from security specialists.

The response may include:
- Restricting access.
- Revoking credentials.
- Isolating affected components.
- Preserving logs and evidence.
- Assessing data exposure.
- Reviewing unauthorized actions.
- Determining required notifications.
- Coordinating customer protection and remediation.

Do not destroy evidence or broadly disclose sensitive technical details without appropriate guidance.

## 8.4 AI-generated errors

If an AI feature produces materially incorrect financial information:
- Determine the scope of affected outputs.
- Disable or restrict the risky behavior if needed.
- Preserve relevant logs in accordance with privacy and retention policies.
- Identify which customers may have relied on the output.
- Assess whether financial or other harm occurred.
- Correct misleading information.
- Improve evaluation, guardrails, or workflow design.

Do not assume that a disclaimer alone is sufficient when the product's behavior creates a foreseeable risk.

# 9. Incident Metrics and Recovery Objectives

Incident metrics help teams understand how quickly they detect, contain, and resolve failures.

They should support learning rather than encourage teams to hide incidents or close them prematurely.

## 9.1 Mean Time to Detect (MTTD)

MTTD measures the average time between an incident beginning and the team detecting it.

Lower MTTD may indicate better monitoring and alerting, although detection quality also matters.

## 9.2 Mean Time to Acknowledge

This measures the time between an incident being reported or detected and the responsible team acknowledging it.

Fast acknowledgement helps establish ownership and begin coordination.

## 9.3 Mean Time to Mitigate

This measures how long it takes to reduce the incident's impact.

Mitigation may involve disabling a feature or routing around a failing dependency before a permanent fix is available.

## 9.4 Mean Time to Recover or Resolve

Organizations use these terms differently.

Define the exact start and end points. For example:
- Recovery may mean restoring service to an acceptable level.
- Resolution may mean the incident is fully addressed, including remaining cleanup or corrective work.

Do not compare metrics across teams unless the definitions are consistent.

## 9.5 Customer impact metrics

Useful measures include:
- Number of affected customers.
- Failed transactions.
- Duration of critical workflow unavailability.
- Number of customers requiring remediation.
- Data inconsistencies.
- Support contacts attributable to the incident.
- Customer losses or other harm, where measurable.

## 9.6 Reliability targets

Teams may define service-level indicators and objectives.

Examples:
- Percentage of requests completed successfully.
- Latency at a selected percentile.
- Availability of a critical workflow.
- Rate of correct transaction processing.

For financial products, successful processing must mean more than returning a successful HTTP response. The transaction should reach the intended correct state.

## 9.7 Recovery Time Objective (RTO)

The Recovery Time Objective is the target time within which a service or process should be restored after disruption.

## 9.8 Recovery Point Objective (RPO)

The Recovery Point Objective describes the maximum acceptable data-loss window, usually expressed as time.

For systems with financial records, acceptable data loss may be extremely low or effectively zero for specific authoritative records, depending on the architecture and requirements.

RTO and RPO should be defined according to business impact and technical capabilities, not copied blindly from another organization.

# 10. Root-Cause Analysis and Blameless Postmortems

An incident may have an immediate technical trigger and several deeper contributing factors.

For example, a deployment might cause a failure, but the organization may also have lacked:
- Adequate testing.
- Safe rollout controls.
- Useful monitoring.
- A clear rollback process.
- Sufficient capacity planning.

A useful postmortem examines the whole system.

## 10.1 Build an incident timeline

Record key events such as:
- First observable symptom.
- Detection.
- Incident declaration.
- Containment.
- Key decisions.
- Customer communications.
- Recovery.
- Final verification.

A timeline helps reveal delays, missing information, and coordination problems.

## 10.2 Distinguish trigger from root causes

Suppose a new software release causes a payment integration to fail.

The trigger may be a change in request formatting.

Contributing factors may include:
- No contract test for the affected provider.
- No gradual rollout.
- Monitoring that tracks server availability but not successful payments.
- An unclear owner for provider compatibility.
- A rollback procedure that requires manual database work.

Fixing only the request format may resolve the immediate defect but leave the system vulnerable to similar failures.

## 10.3 Blameless does not mean consequence-free

A blameless postmortem does not mean that all decisions were correct or that accountability disappears.

It means the investigation focuses on understanding how the system, information, incentives, and decisions interacted.

Teams should still establish clear ownership for corrective actions and address deliberate misconduct where appropriate.

## 10.4 Five Whys

The Five Whys technique repeatedly asks why an event occurred to uncover deeper causes.

Example:

**Problem:** Customers could not complete a payment.

1. Why? The payment request was rejected.
2. Why? The request contained an unexpected field.
3. Why? A new release changed the request format.
4. Why? Compatibility tests did not cover the provider's expected format.
5. Why? The integration lacked a maintained contract-test process.

The fifth answer suggests a process improvement rather than simply instructing a developer to be more careful.

The technique is a prompt for investigation, not proof that every incident has one root cause.

## 10.5 Corrective actions

A strong postmortem creates specific actions.

Examples:
- Add provider contract tests.
- Alert on payment success rates.
- Implement gradual rollouts.
- Improve rollback automation.
- Clarify transaction-state handling.
- Add a customer-facing status page.
- Establish an incident escalation owner.

Each action should have an owner, a target date, and a way to verify completion.

# 11. Preparing an Incident Response Playbook

A playbook documents how to respond to known classes of incidents.

It should help the team act quickly without replacing judgment.

## 11.1 Essential components

A practical playbook includes:
- Incident categories.
- Severity definitions.
- Detection signals.
- Escalation paths.
- Incident roles.
- Containment options.
- Communication templates.
- Recovery criteria.
- Required approvals.
- Evidence-preservation guidance.
- Postmortem requirements.

## 11.2 Example: Payment processing incident

**Detection**
- Payment success rate drops below a defined threshold.
- Provider errors rise.
- Pending transactions accumulate.

**Initial assessment**
- Identify affected payment methods, regions, and customer segments.
- Determine whether the issue is internal or provider-related.
- Check whether requests are failing, delayed, or in an unknown state.

**Containment**
- Pause unsafe retries.
- Disable the affected route if appropriate.
- Use an alternate route only if it is approved and safe.
- Prevent duplicate submissions.

**Communication**
- Notify support and relevant stakeholders.
- Publish a customer update if the impact warrants it.
- Explain safe next steps for pending transactions.

**Recovery**
- Validate provider status.
- Reconcile outstanding requests.
- Restore processing gradually where possible.
- Monitor success rates and duplicate-transaction indicators.

**Postmortem**
- Identify technical and process contributors.
- Assign improvements.
- Review the incident's customer and financial impact.

## 11.3 Practice before a crisis

Teams can conduct tabletop exercises in which participants walk through a simulated incident.

Useful scenarios include:
- A major third-party provider outage.
- A production deployment that corrupts data.
- A compromised service credential.
- An unexpected surge in transaction failures.
- An AI feature producing unsafe outputs.
- A regional outage affecting critical services.

The goal is to uncover unclear ownership, missing information, and unsafe assumptions before a real incident occurs.

# 12. Common Incident Management Mistakes

## Mistake 1: Waiting for certainty before communicating

Customers may remain unaware of a serious disruption while the team investigates.

**Better approach:** Communicate confirmed impact and next steps without speculating about the root cause.

## Mistake 2: Treating every incident as an engineering problem

The technical fix may not resolve customer harm, financial exposure, or communication needs.

**Better approach:** Coordinate technical recovery with product, support, security, legal, and business stakeholders as appropriate.

## Mistake 3: Prioritizing uptime over correctness

A system may appear operational while producing incorrect balances or duplicate transactions.

**Better approach:** Define recovery in terms of safe, correct outcomes—not only service availability.

## Mistake 4: Making unsupported promises

Claims that an issue is fully resolved or that no data was affected can create additional damage if later disproven.

**Better approach:** Communicate what is known, what remains uncertain, and when new information will be available.

## Mistake 5: Fixing the symptom but not the system

A quick patch may address the immediate trigger while leaving monitoring, testing, or operational weaknesses unchanged.

**Better approach:** Conduct a blameless postmortem and prioritize systemic improvements.

## Mistake 6: Failing to assign corrective-action owners

Postmortems can become documentation exercises with no operational impact.

**Better approach:** Assign each action an owner, deadline, and verification method.

## Mistake 7: Restoring everything at once

A full restoration can reintroduce the incident if the underlying issue is not understood.

**Better approach:** Restore gradually where possible and monitor critical indicators.

## Mistake 8: Measuring speed without measuring quality

A team may reduce recovery time while creating more data errors or customer harm.

**Better approach:** Pair speed metrics with correctness, safety, and customer-impact measures.

# 13. Practical Exercise: A Health Insurance Purchase Incident

## Scenario

You manage an online supplementary health insurance platform.

After a production release, some customers can complete payment, but the purchase confirmation page fails to load.

Customers do not know whether their purchases succeeded. Some attempt to pay again.

The engineering team suspects a backend timeout, but the cause is not confirmed.

## Task 1: Classify the incident

Determine:
- The likely initial severity.
- The customer and financial risks.
- What additional information is required.
- Which conditions would justify escalation.

Explain why a confirmation-page error may create more risk than an ordinary page-loading issue.

## Task 2: Assign incident roles

Identify who should coordinate:
- Technical investigation.
- Product and business decisions.
- Customer communication.
- Payment reconciliation.
- Legal or compliance assessment, if required.

Clarify who owns the overall response.

## Task 3: Define containment

Propose immediate actions that reduce the chance of duplicate payments or inconsistent purchase records.

Consider whether to:
- Roll back the release.
- Disable part of the purchase flow.
- Show a pending status.
- Reconcile payment and policy records.
- Temporarily pause new purchases.

Explain the trade-offs.

## Task 4: Draft customer communication

Write a short update that:
- Acknowledges the problem.
- Explains what customers should do.
- Avoids unsupported claims.
- States when another update will arrive.

## Task 5: Define recovery criteria

Specify the evidence required before declaring the incident resolved.

Include:
- Payment correctness.
- Purchase status.
- Duplicate prevention.
- Confirmation delivery.
- Monitoring.
- Customer support readiness.

## Task 6: Prepare the postmortem

List the information you would collect and identify at least three systemic improvements that could prevent a similar incident.

# 14. Final Challenge: A Critical Crypto Exchange Incident

You are the Senior Product Manager at a cryptocurrency exchange.

At 14:05, monitoring detects a sudden increase in failed withdrawals.

Within ten minutes:
- Customers report that withdrawals remain pending.
- Some customers submit repeated withdrawal requests.
- The engineering team finds a recent release affecting withdrawal processing.
- The external blockchain network appears operational.
- It is not yet clear whether all pending transactions have been broadcast.
- Social media complaints are increasing.

Leadership wants a rapid resolution.

## Part A: Assess the incident

Determine:
- Initial severity.
- Customer impact.
- Potential financial exposure.
- Data-integrity risks.
- Security implications.
- Immediate escalation requirements.

Identify the most important unknowns.

## Part B: Establish incident coordination

Define the responsibilities of:
- Incident Commander.
- Technical lead.
- Product Manager.
- Customer communications lead.
- Security and risk teams.
- Operations and reconciliation teams.

Explain how you will prevent duplicated work and conflicting decisions.

## Part C: Contain the risk

Evaluate possible actions:
- Roll back the recent release.
- Pause new withdrawal requests.
- Disable a specific withdrawal route.
- Reconcile pending requests.
- Restore processing gradually.

State which actions you would consider first and what evidence would change your decision.

Do not assume a rollback is automatically safe or that a pending transaction has failed.

## Part D: Communicate with customers

Draft:
1. An initial public status update.
2. A follow-up update after containment.
3. A resolution announcement after verification.

Make sure each message distinguishes confirmed facts from remaining uncertainty.

## Part E: Define recovery criteria

Specify how you will verify:
- Transaction states.
- Duplicate withdrawal prevention.
- Correct balance handling.
- Processing success rates.
- Backlog clearance.
- Customer support readiness.

Explain why a green service-health dashboard is insufficient on its own.

## Part F: Conduct the postmortem

Identify plausible technical and organizational contributors.

Develop at least five corrective actions, each with:
- An owner.
- A target completion date.
- A measurable verification method.

Include monitoring, testing, rollback, transaction-state management, and communication improvements.

## Part G: Present the executive summary

Prepare a concise summary that covers:
- What happened.
- Who was affected.
- What the team did.
- Current status.
- Remaining risks.
- Customer remediation.
- Prevention measures.
- Decisions requiring leadership support.

Your goal is to demonstrate that effective incident management combines technical recovery, customer protection, transparent communication, and lasting operational improvement.

# Key Takeaways

1. **Incident response protects customers and the business.** It is not merely a process for fixing software defects.

2. **Severity depends on impact and risk.** A small number of affected customers can still justify critical escalation.

3. **Clear ownership speeds up response.** Incident coordination, technical diagnosis, and customer communication are distinct responsibilities.

4. **Containment comes before perfect understanding.** Reduce potential harm while investigating the cause.

5. **Separate facts from hypotheses.** Communicate uncertainty honestly and avoid unsupported claims.

6. **Customer communication is part of recovery.** Customers need timely information and safe next steps.

7. **Availability is not the same as correctness.** Financial systems must verify transaction and data integrity before declaring full recovery.

8. **Use reversible actions when appropriate.** But assess database, transaction, and external-system consequences before rolling back.

9. **Measure recovery quality as well as speed.** Fast remediation is not successful if it creates further customer harm.

10. **Blameless postmortems improve systems.** Investigate technical and organizational contributors instead of stopping at the immediate trigger.

11. **Corrective actions need owners and verification.** Lessons matter only when they lead to measurable improvements.

12. **Prepare before incidents happen.** Playbooks, monitoring, clear escalation paths, and tabletop exercises improve response under pressure.

# Preview of Day 98

**Topic: Product Ethics & Responsible Product Management**

Tomorrow, we will explore how Product Managers make responsible decisions when business goals, customer interests, fairness, privacy, and societal impact conflict.

You will learn about:
- Ethical decision-making frameworks.
- Responsible data collection and use.
- Privacy, consent, and transparency.
- Dark patterns and manipulative design.
- Fairness and unintended consequences.
- Responsible AI and automated decisions.
- Balancing growth targets with customer welfare.
- Ethical product metrics.
- Governance and escalation.
- Applying ethical reasoning to fintech and digital products.

The central question will be: **How can a Product Manager build successful products while protecting customers and maintaining trust—even when the easiest business decision is not the most responsible one?**
