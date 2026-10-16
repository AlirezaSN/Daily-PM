# Day 91: Responsible AI & AI Product Risk

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain what responsible AI means from a Product Manager's perspective.
- Identify risks across the AI product lifecycle, from discovery through retirement.
- Distinguish fairness, privacy, security, transparency, accountability, and reliability.
- Assess AI risks based on likelihood, impact, exposure, and reversibility.
- Design human oversight and escalation mechanisms.
- Recognize hallucinations, bias, prompt injection, data leakage, and automation bias.
- Build a practical AI risk register and mitigation plan.
- Understand how risk classification affects product scope and launch decisions.
- Define monitoring, incident response, and rollback criteria for AI products.
- Apply responsible AI principles to fintech and insurance products.

# 1. What Is Responsible AI?

Responsible AI is the practice of designing, building, deploying, and operating AI systems in ways that are appropriate for their intended use, account for foreseeable harms, and establish clear accountability.

For Product Managers, responsible AI is not simply a compliance checklist or a review performed before launch. It is part of product discovery, design, engineering, experimentation, operations, and product strategy.

Consider a cryptocurrency exchange introducing an AI assistant that answers questions about deposits and withdrawals.

The assistant could create value by helping customers understand transaction status and reducing repetitive support requests.

However, it could also:
- Incorrectly claim that a withdrawal has been completed.
- Reveal information about another customer's account.
- Provide outdated information about fees.
- Misinterpret a transaction and recommend an inappropriate action.
- Give a convincing but incorrect explanation that delays a customer from contacting support.

The feature may work well in most cases while still creating unacceptable risks in a small number of cases.

Responsible AI means identifying these risks, deciding which ones are acceptable, implementing appropriate safeguards, and monitoring whether those safeguards work.

## 1.1 Six core principles

### 1. Safety and harm prevention

The system should not expose users or others to unacceptable harm.

Examples:
- Preventing unauthorized financial actions.
- Avoiding unsupported claims about insurance coverage.
- Escalating high-risk situations to qualified personnel.

### 2. Fairness

The system should not produce unjustified differences in outcomes for relevant user groups.

Examples:
- Evaluating answer quality across supported languages.
- Checking whether certain users receive systematically worse service.
- Ensuring accessibility needs do not create unnecessary barriers.

### 3. Privacy and data protection

The system should use personal and confidential information appropriately.

Examples:
- Limiting access to account data.
- Avoiding unnecessary retention of sensitive conversations.
- Preventing confidential information from appearing in unrelated responses.

### 4. Transparency

Users and internal stakeholders should understand important aspects of the system's capabilities, limitations, and role in a decision.

Examples:
- Explaining when content is AI-generated where that matters.
- Identifying the sources supporting a policy explanation.
- Making it clear when an answer is uncertain or requires human confirmation.

### 5. Accountability

Someone must be responsible for the system's behavior and its consequences.

Examples:
- Assigning ownership for AI quality.
- Establishing incident escalation paths.
- Recording important model, prompt, and policy changes.

### 6. Reliability and robustness

The system should behave appropriately under expected conditions and fail safely when it cannot complete a task.

Examples:
- Detecting unavailable source data.
- Avoiding invented transaction statuses.
- Handling malformed inputs and upstream outages.
- Falling back to a reliable alternative when necessary.

These principles overlap. A privacy failure can also be a security failure. An inaccurate answer can become a fairness issue if certain groups experience the errors more frequently.

The Product Manager's job is to turn broad principles into concrete product requirements, acceptance criteria, and operational controls.

# 2. Responsible AI Begins During Discovery

A common mistake is to validate an AI opportunity first and investigate risk only when the product is almost ready to launch.

This creates avoidable problems. The team may discover that the proposed use case requires data it cannot lawfully access, produces unacceptable outcomes, or cannot be made sufficiently reliable within the available budget.

Risk discovery should begin when the team is evaluating the problem.

## 2.1 Ask five questions before committing to an AI solution

**Question 1: Who could be affected?**

Consider direct users, customers who are discussed by the system, employees, third parties, and people who may be affected indirectly.

**Question 2: What could go wrong?**

Identify plausible failures, including those caused by correct system behavior being used in an inappropriate context.

**Question 3: How serious would the consequences be?**

An inaccurate explanation of a minor interface feature is different from an incorrect statement about a financial transaction or insurance exclusion.

**Question 4: Can the harm be detected and reversed?**

A draft response can be reviewed before sending. An unauthorized financial transaction may be difficult to reverse.

**Question 5: Is AI necessary for this use case?**

If a deterministic rules engine can reliably solve the problem, adding a generative model may introduce unnecessary risk.

## 2.2 Distinguish the problem from the proposed automation

Suppose a support team wants to automate account-restriction decisions.

The underlying problem may be that customers wait too long for explanations.

Possible solutions include:
- Showing clearer restriction reasons.
- Improving the status page.
- Providing an AI-generated explanation based on approved information.
- Helping support agents prepare responses.
- Automating the actual decision.

These options have very different risk profiles.

The team might achieve most of the customer benefit by improving explanations without allowing AI to make consequential account decisions.

A responsible product strategy looks for the lowest-risk approach that delivers the intended outcome.

# 3. Build an AI Risk Taxonomy

A structured taxonomy helps teams identify risks systematically rather than relying on general concerns about AI.

## 3.1 Accuracy and reliability risks

Examples:
- Hallucinated facts.
- Incorrect summaries.
- Missing qualifications.
- Inconsistent answers.
- Incorrect calculations.
- Misinterpretation of retrieved information.

Mitigations:
- Authoritative data sources.
- Deterministic calculations.
- Structured output validation.
- Evaluation datasets.
- Confidence-aware workflows.
- Human review for consequential cases.

## 3.2 Fairness and bias risks

Examples:
- Worse performance for certain languages.
- Inconsistent treatment of equivalent users.
- Biased historical data.
- Unequal access to the feature.
- Inaccessible interaction patterns.

Mitigations:
- Representative testing.
- Relevant subgroup analysis.
- Accessibility testing.
- Clear eligibility criteria.
- Human review of consequential decisions.

## 3.3 Privacy risks

Examples:
- Sensitive information included unnecessarily in prompts.
- Unauthorized access to account records.
- Personal information exposed in generated answers.
- Excessive retention of conversation logs.
- Confidential data used for unintended purposes.

Mitigations:
- Data minimization.
- Access controls.
- Purpose limitation.
- Appropriate retention and deletion policies.
- Sensitive-data filtering where appropriate.
- Privacy and security reviews.

## 3.4 Security risks

Examples:
- Prompt injection.
- Unauthorized tool execution.
- Data exfiltration.
- Malicious document content.
- Compromised API credentials.
- Abuse of model endpoints.

Mitigations:
- Treat retrieved content as untrusted input.
- Keep authorization outside model-generated decisions.
- Use least-privilege permissions.
- Validate tool arguments.
- Apply rate limits.
- Test adversarial scenarios.
- Monitor suspicious activity.

## 3.5 User trust and interaction risks

Examples:
- Users overestimating model capability.
- Users assuming AI output is guaranteed to be correct.
- Unclear distinction between generated text and verified facts.
- Excessive confidence in uncertain responses.
- Confusing or manipulative conversational design.

Mitigations:
- Appropriate capability disclosures.
- Source citations where useful.
- Clear uncertainty communication.
- Visible escalation options.
- Interface design that avoids implying certainty the system does not have.

## 3.6 Operational and economic risks

Examples:
- Unexpected inference costs.
- Model-provider outages.
- Changes in model behavior.
- Unreliable external dependencies.
- Increased human-review workload.
- Inability to investigate incidents.

Mitigations:
- Cost and latency monitoring.
- Fallback mechanisms.
- Version control.
- Rollback procedures.
- Defined ownership.
- Operational runbooks.

## 3.7 Legal and regulatory risks

Depending on the product, jurisdiction, and use case, relevant requirements may involve:
- Privacy and data protection.
- Consumer protection.
- Financial-services regulation.
- Insurance distribution and disclosure requirements.
- Recordkeeping and auditability.
- Rules concerning automated decisions.
- Requirements for transparency or human oversight.

These requirements vary by jurisdiction and context. Product Managers should involve qualified legal, compliance, privacy, and security specialists rather than assuming that one generic AI policy covers every situation.

# 4. Assess Risk by Impact, Likelihood, and Reversibility

Not every AI feature needs the same level of control.

A low-risk feature that rewrites internal meeting notes should not automatically receive the same treatment as a system that influences credit eligibility or initiates financial transactions.

A useful starting point is to evaluate:

- **Impact:** How serious could the harm be?
- **Likelihood:** How likely is the failure under realistic conditions?
- **Exposure:** How many people or decisions could be affected?
- **Reversibility:** Can the outcome be corrected easily?
- **Detectability:** How likely is the failure to be noticed before harm occurs?

## 4.1 A simple risk score

For an initial prioritization exercise, use a 1–5 scale for impact and likelihood.

Risk score = Impact × Likelihood

For example:

| Risk | Impact | Likelihood | Score |
|---|---:|---:|---:|
| Minor wording inconsistency | 1 | 3 | 3 |
| Incorrect fee explanation | 3 | 3 | 9 |
| Unauthorized account disclosure | 5 | 2 | 10 |
| Incorrect financial action | 5 | 3 | 15 |

These numbers are illustrative, not calibrated probabilities or a substitute for formal risk assessment.

A numerical score can also hide a severe but rare event. Therefore, define mandatory escalation rules for certain risks regardless of their calculated score.

## 4.2 Use risk tiers

A practical classification might look like this.

### Low risk

Examples:
- Rewriting non-sensitive text.
- Summarizing internal notes that contain no sensitive information.
- Generating draft marketing copy for review.

Typical controls:
- Basic quality checks.
- Human feedback.
- Standard privacy and security controls.
- Clear ownership.

### Moderate risk

Examples:
- Answering customer questions using approved documentation.
- Summarizing account information for authorized users.
- Drafting support responses.

Typical controls:
- Representative evaluation datasets.
- Source grounding.
- Access controls.
- Monitoring.
- Human review or escalation for defined cases.

### High risk

Examples:
- Influencing consequential financial decisions.
- Interpreting insurance eligibility or coverage in ways customers may rely on.
- Making decisions that materially affect customer access or outcomes.
- Executing financial actions.

Typical controls may include:
- Formal domain, legal, and compliance review.
- Strong evidence of task-specific performance.
- Human oversight where appropriate.
- Explicit authorization and deterministic validation.
- More extensive monitoring and auditability.
- Restricted scope and clear rollback criteria.

This is an internal product-management framework, not a universal legal classification. Applicable laws and organizational policies may define different categories.

# 5. Hallucinations and Factual Integrity

A hallucination occurs when a model generates information that is unsupported or incorrect while presenting it as if it were valid.

The term is broad, so Product Managers should identify the actual failure mode.

Examples:
- Inventing a transaction status.
- Misstating a fee.
- Combining details from two different insurance plans.
- Citing a document that does not support the answer.
- Inventing an explanation for an account restriction.

## 5.1 Why hallucinations happen

Possible causes include:
- Missing information.
- Ambiguous user input.
- Poor retrieval.
- Conflicting source documents.
- Incorrect assumptions in the prompt.
- Weak model capabilities.
- Excessive pressure to provide an answer.
- Failure to distinguish authoritative facts from generated explanation.

A prompt instruction such as "never hallucinate" is not a reliable control on its own.

## 5.2 Design layered controls

For a customer-facing fintech assistant:

**Layer 1: Authoritative sources**

Retrieve transaction facts from approved systems rather than asking the model to infer them.

**Layer 2: Explicit task boundaries**

Define what the assistant may explain and which decisions or actions are outside its scope.

**Layer 3: Structured data**

Use validated fields for critical values such as amount, currency, status, and timestamp.

**Layer 4: Deterministic validation**

Check critical values against authoritative systems.

**Layer 5: Appropriate abstention**

If required data is missing or contradictory, the assistant should explain the limitation or escalate.

**Layer 6: Monitoring and review**

Track critical errors and use them to improve the system.

The goal is not to eliminate every possible model error. It is to reduce the probability and impact of errors to an acceptable level for the intended use.

# 6. Privacy and Data Protection

AI products often combine user input, conversation history, retrieved documents, and data from external systems.

This can create privacy risks if information is collected or used beyond what the task requires.

## 6.1 Apply data minimization

Only provide the system with information necessary to perform the intended task.

For example, an assistant explaining a withdrawal may need:
- The authorized user's transaction status.
- The transaction amount and currency.
- Relevant processing information.

It may not need the user's complete transaction history, full identity documents, or unrelated personal details.

Reducing unnecessary data can improve privacy and reduce the consequences of accidental disclosure.

## 6.2 Separate authentication from authorization

Authentication answers: "Who is this user?"

Authorization answers: "What information or action is this user permitted to access?"

A model should not be responsible for deciding whether someone is entitled to access a particular account.

The application should enforce permissions through trusted system logic.

For example:
1. Authenticate the customer.
2. Check access permissions.
3. Retrieve only the permitted transaction data.
4. Provide the relevant data to the model.
5. Validate the generated response where necessary.
6. Return the result through the authorized session.

Do not rely on a prompt that says "only reveal the current user's data" as the primary access-control mechanism.

## 6.3 Define retention and logging policies

Conversation logs can help with debugging and quality evaluation, but they may also contain sensitive information.

Define:
- What is logged.
- Why it is logged.
- Who can access it.
- How long it is retained.
- Whether sensitive fields should be redacted.
- How data is deleted or restricted.
- Which third-party services receive the information.

Retention should be driven by legitimate operational and legal requirements rather than a default assumption that all conversations should be stored indefinitely.

## 6.4 Understand the full data flow

Map how information moves through:
- The user interface.
- Application servers.
- Model providers.
- Retrieval systems.
- Internal APIs.
- Logging and monitoring systems.
- Human review workflows.

A privacy review that examines only the model provider may miss the actual source of risk.

# 7. Security: Prompt Injection and Tool Abuse

Prompt injection occurs when malicious or untrusted content attempts to manipulate the model into ignoring intended instructions or performing unintended actions.

This can happen through direct user input or through retrieved content, such as a document or webpage.

For example, a malicious document might contain instructions telling the assistant to reveal confidential information or call a tool with unauthorized parameters.

## 7.1 Treat retrieved content as untrusted

A retrieved document is information to be evaluated, not an instruction that automatically overrides the system's intended behavior.

The system should distinguish between:
- Trusted application instructions.
- User requests.
- Retrieved content.
- Tool outputs.
- Authorization and policy rules.

The exact architecture varies, but the central principle is that untrusted content must not gain control over permissions or system behavior.

## 7.2 Apply least privilege

Give the AI workflow only the permissions it needs.

If an assistant only explains transactions, it should not automatically receive permission to initiate withdrawals.

If a workflow requires a consequential action, use explicit authorization checks and suitable confirmation steps.

## 7.3 Validate tool calls

Before executing an AI-requested action, validate:
- The user is authorized.
- The action is allowed.
- The parameters are valid.
- The requested resource belongs to the authorized context.
- The action is within applicable limits.
- Duplicate execution is handled safely where relevant.

The model can propose an action, but trusted application logic should enforce the rules.

## 7.4 Test adversarial scenarios

Include tests for:
- Attempts to access another user's data.
- Malicious instructions in uploaded documents.
- Requests to reveal hidden prompts or secrets.
- Invalid tool parameters.
- Repeated or duplicate actions.
- Attempts to bypass limits.
- Manipulated or malformed input.

Security testing should be ongoing because the product's data sources, tools, and attack surface may change.

# 8. Fairness, Bias, and Accessibility

AI systems can perform differently across users, languages, contexts, and task types.

The relevant fairness question depends on what the product does and who may be affected.

## 8.1 Identify meaningful groups and conditions

For a multilingual support assistant, relevant dimensions might include:
- Supported language.
- Formal versus informal wording.
- Common regional terminology.
- Input quality.
- Accessibility needs.
- Question category.

For a financial product, it may also be important to understand whether the system's behavior creates unjustified differences in the quality of information available to different customer groups.

Use only relevant and appropriately collected data, with suitable privacy protections.

## 8.2 Measure more than overall accuracy

Suppose an assistant achieves 95% accuracy overall.

That score might hide substantially lower performance for one supported language or one class of questions.

Evaluate:
- Task success by relevant group.
- Critical error rate by group.
- Escalation rate by group.
- Comprehension and completion.
- Differences in access to the feature.

Not every performance difference is unfair. Differences may arise from task complexity, sample size, or input quality.

Investigate the cause before deciding what intervention is appropriate.

## 8.3 Avoid proxy assumptions

A model may use correlations that are not appropriate for the product's intended decision.

Historical data can reflect existing disparities or past operational practices that should not automatically be reproduced.

For consequential decisions, teams should involve qualified specialists to determine which inputs are justified and how outcomes should be evaluated.

## 8.4 Design for accessibility

Consider:
- Clear and concise explanations.
- Screen-reader compatibility.
- Keyboard navigation.
- Alternatives to voice interaction.
- Appropriate language complexity.
- Graceful handling of speech-recognition errors.

Conversational interfaces can improve accessibility for some users while creating barriers for others. Offer alternatives where appropriate.

# 9. Transparency and Appropriate User Expectations

Users should not be led to believe the system has capabilities or certainty it does not possess.

Transparency does not mean displaying a long technical disclaimer in every response. It means communicating the information users need to make appropriate decisions.

## 9.1 Communicate limitations in context

For example, an insurance assistant might say:

"I can compare the coverage details listed in these policy documents, but I cannot confirm whether a specific future claim will be approved."

This is more useful than a generic statement that the AI may make mistakes.

## 9.2 Show sources where they help

For factual questions, provide links or references to the relevant authoritative information when useful.

A source citation helps the user verify the answer, but the citation itself is not proof that the answer accurately reflects the source.

## 9.3 Avoid false confidence

A fluent, authoritative tone can cause users to overestimate the system's reliability.

Design the product to:
- Communicate uncertainty when it matters.
- Identify missing information.
- Avoid unsupported guarantees.
- Explain important distinctions.
- Offer a path to human support.

## 9.4 Make human support discoverable

A user should not have to argue with the AI to reach a human when the issue requires escalation.

Provide clear escalation paths for:
- High-impact or disputed issues.
- Missing or conflicting information.
- Complaints.
- Sensitive account issues.
- Requests outside the supported scope.

# 10. Human Oversight and Automation Bias

Human review can reduce risk, but it is not a universal solution.

People may accept AI-generated answers too readily, especially when the output is fluent or when reviewers are under time pressure.

This is known as automation bias.

## 10.1 Choose the right oversight model

### Model A: Human-in-the-loop

A human reviews and approves an output or action before it takes effect.

Useful for:
- Consequential communications.
- Sensitive financial workflows.
- Cases requiring domain judgment.

### Model B: Human-on-the-loop

The system operates automatically within defined boundaries while a human monitors performance and can intervene.

Useful for:
- Lower-risk, well-understood tasks.
- Workflows with strong monitoring and recovery mechanisms.

### Model C: Human escalation

The AI handles routine cases and routes defined exceptions to qualified people.

Useful for:
- Customer support.
- Document interpretation.
- Complex cases requiring judgment.

### Model D: Fully automated bounded workflow

The system completes a narrow task without routine human approval, but within strict limits and deterministic controls.

Useful only when the task, risks, and failure handling justify that level of automation.

These models can be combined. A product may use automatic handling for routine questions and human review for exceptions.

## 10.2 Design effective review interfaces

Human review works best when reviewers can:
- See the source evidence.
- Understand which parts were generated.
- Identify uncertain or conflicting information.
- Correct outputs easily.
- Reject unsafe suggestions.
- Escalate unusual cases.
- Record the reason for rejection.

A simple "Approve" button is not enough if reviewers lack the information needed to judge the output.

## 10.3 Measure the quality of human oversight

Track:
- Reviewer agreement.
- Material correction rate.
- Critical errors missed by reviewers.
- Review time.
- Escalation outcomes.
- Reviewer workload.

If review becomes rushed or superficial as volume grows, a control that initially worked may no longer be effective.

# 11. Responsible AI Governance and Ownership

AI risk is cross-functional, but responsibility should not be so diffuse that no one acts.

The Product Manager should coordinate the product decision while respecting the expertise and authority of other functions.

## 11.1 Define responsibilities

A typical allocation may include:

**Product Management**
- Define intended use and scope.
- Identify user and business risks.
- Establish product requirements and success criteria.
- Coordinate launch and rollout decisions.

**Engineering and AI teams**
- Implement system controls.
- Build evaluation and monitoring capabilities.
- Investigate technical failures.
- Maintain versioning and rollback mechanisms.

**Security and privacy**
- Assess security threats and data handling.
- Review access controls and privacy requirements.
- Help define incident response procedures.

**Legal and compliance**
- Interpret applicable requirements.
- Review consequential use cases.
- Define required approvals and documentation.

**Operations and support**
- Handle escalations.
- Monitor real-world incidents.
- Provide feedback about recurring failure patterns.

**Leadership or designated risk owners**
- Approve material residual risks where appropriate.
- Allocate resources for mitigation.
- Resolve conflicts between commercial goals and risk requirements.

Actual responsibilities depend on the organization's governance structure. The important principle is to assign clear owners and decision rights.

## 11.2 Maintain an AI risk register

A risk register records risks, their potential consequences, and the actions required to manage them.

Useful fields include:
- Risk ID.
- Description.
- Affected users or stakeholders.
- Root cause.
- Likelihood.
- Impact.
- Existing controls.
- Planned mitigations.
- Risk owner.
- Residual risk.
- Monitoring signals.
- Escalation threshold.
- Review date.

Example:

| Field | Example |
|---|---|
| Risk | Incorrect explanation of a withdrawal status |
| Cause | Stale transaction data |
| Impact | Customer confusion or delayed action |
| Control | Retrieve current status from the authoritative API |
| Additional mitigation | Display last-updated time and escalate stale results |
| Owner | Product and engineering |
| Monitoring | Stale-data rate and status-related complaints |
| Trigger | Breach of the defined freshness threshold |

The risk register should change as the product evolves. It is not a document created once for a launch review and then forgotten.

# 12. Build Risk Into Product Requirements

Responsible AI principles become useful when translated into requirements that can be implemented and tested.

## 12.1 Convert vague requirements into testable statements

Vague requirement:

"The assistant should protect customer data."

Testable requirements might include:
- The system retrieves only records the authenticated user is authorized to access.
- Every account-specific tool call is checked against server-side authorization rules.
- Sensitive information is excluded from logs unless explicitly justified and appropriately protected.
- Evaluation tests include attempts to retrieve another customer's information.
- Confirmed unauthorized disclosure triggers the defined incident process.

Vague requirement:

"The assistant should be accurate."

Testable requirements might include:
- Critical transaction fields must match the authoritative source.
- Answers about fees must reference current approved documentation.
- Unsupported high-impact questions must be escalated or handled according to the approved fallback behavior.
- Critical error rates must meet defined release thresholds.

## 12.2 Define safe failure behavior

For every important failure mode, specify what the product should do.

Examples:
- If the transaction API is unavailable, do not invent a status.
- If policy documents conflict, identify the conflict and escalate.
- If the user is unauthorized, do not retrieve the requested record.
- If the model produces invalid structured output, reject it and use a safe fallback.
- If the system cannot answer reliably, offer an alternative route.

Safe failure behavior should be part of the product design rather than improvised after an incident.

# 13. Responsible AI Launch Readiness

Before launch, evaluate whether the product is ready to operate under realistic conditions.

## 13.1 Product scope

- Is the intended use clearly defined?
- Are unsupported tasks identified?
- Are high-risk actions excluded or appropriately controlled?
- Is the user experience clear about important limitations?

## 13.2 Evaluation

- Does the evaluation dataset represent realistic tasks?
- Have difficult and high-impact cases been tested?
- Are critical errors tracked separately?
- Have important failure modes been addressed?
- Are regression tests available?

## 13.3 Privacy and security

- Are data flows documented?
- Are access controls enforced by trusted systems?
- Are tool permissions limited?
- Are retention and logging policies defined?
- Have relevant security threats been tested?

## 13.4 Operations

- Are monitoring and alerts available?
- Is there a defined escalation process?
- Can the team disable or roll back the feature?
- Are model, prompt, and source changes versioned?
- Is there an incident owner?

## 13.5 Business and governance

- Are the expected benefits measurable?
- Are residual risks documented?
- Have the appropriate stakeholders reviewed the product?
- Are owners assigned for ongoing evaluation?
- Is there a clear decision rule for scaling?

A launch checklist is useful, but passing a checklist does not guarantee that the product is safe. The evidence must be relevant to the actual system and its intended use.

# 14. Incident Response and Rollback

AI incidents can arise from technical failures, model behavior, data problems, security vulnerabilities, or unintended use.

A responsible product team prepares for incidents before they happen.

## 14.1 Define incident categories

Examples include:
- Critical factual errors.
- Unauthorized data disclosure.
- Unauthorized tool execution.
- A sudden quality regression.
- A privacy or security vulnerability.
- An unexpected increase in operational cost.
- A model-provider or retrieval outage.

Not every quality defect is a major incident. Define severity levels based on impact and organizational policy.

## 14.2 Establish an incident workflow

A practical workflow is:

1. Detect the problem through monitoring, reporting, or evaluation.
2. Assess severity and affected users.
3. Contain the issue by restricting, disabling, or reverting the affected capability.
4. Notify the appropriate owners and stakeholders.
5. Investigate the root cause.
6. Correct the issue and validate the fix.
7. Restore the feature only after required checks.
8. Document lessons and add regression tests.

## 14.3 Define rollback triggers in advance

Examples:
- A confirmed unauthorized disclosure.
- An unauthorized consequential action.
- A critical error rate exceeding the approved threshold.
- Failure of a required authorization control.
- Loss of a required authoritative data source without a safe fallback.

Some incidents require immediate containment rather than waiting for a statistically meaningful sample.

## 14.4 Use layered fallback mechanisms

Depending on the product, fallbacks may include:
- Returning to the existing non-AI workflow.
- Disabling a particular tool.
- Restricting the assistant to lower-risk questions.
- Requiring human approval.
- Switching to an approved alternative model.
- Providing a clear service-unavailable message.

A fallback should not silently replace a failed authoritative source with model-generated guesses.

# 15. Case Study: An AI Insurance Comparison Assistant

## Business context

An online insurance platform wants to help customers compare individual supplementary health insurance plans.

The assistant summarizes premiums, deductibles, coverage limits, exclusions, and waiting periods.

The business expects improved conversion and reduced support workload.

However, customers may rely on the assistant when making financial decisions about healthcare coverage.

## Step 1: Define the permitted role

The assistant may:
- Explain approved plan information.
- Compare listed benefits.
- Highlight differences.
- Ask customers about their comparison priorities.
- Identify missing information.

It should not automatically:
- Guarantee that a future claim will be approved.
- Invent coverage details.
- Hide important exclusions.
- Treat incomplete policy information as definitive.
- Make unsupported promises about insurer decisions.

## Step 2: Identify the risks

Potential risks include:
- Using outdated policy documents.
- Omitting an important exclusion.
- Mixing details from two plans.
- Presenting a generated summary as a binding coverage determination.
- Exposing personal information.
- Failing to escalate ambiguous questions.

## Step 3: Define controls

Possible controls include:
- Retrieval from approved, versioned policy sources.
- Deterministic handling of premiums and other structured values.
- Explicit identification of missing information.
- Required display of relevant exclusions and limitations.
- Clear boundaries between explanation and claim approval.
- Human escalation for unresolved or consequential questions.
- Evaluation across representative policy scenarios.

## Step 4: Define metrics

Customer outcomes:
- Successful plan comparison.
- Comprehension of key differences.
- Reduced confusion.

AI quality:
- Correctness of policy facts.
- Completeness of material exclusions.
- Source grounding.
- Appropriate uncertainty and escalation.

Business:
- Purchase conversion.
- Support cost per successful comparison.
- Cost per completed task.

Guardrails:
- Critical coverage errors.
- Unauthorized disclosure.
- Unsupported coverage guarantees.

## Step 5: Make the launch decision

Suppose the assistant improves conversion but sometimes omits important exclusions.

The feature should not be considered ready simply because the business metric improves.

The team should investigate the failure, improve the comparison design or retrieval process, and verify that the relevant cases pass the required evaluation.

If the failure cannot be controlled within acceptable limits, the team should narrow the scope or stop the release.

The central lesson is that business value and responsible product behavior must be evaluated together.

# 16. Practical Exercise: Create an AI Risk Register

## Scenario

You are the Product Manager of a cryptocurrency exchange.

The company is introducing an AI assistant that answers customer questions about deposits, withdrawals, fees, and account restrictions.

The assistant can retrieve transaction records and approved support documentation. In a later phase, leadership wants it to initiate selected customer actions.

## Task 1: Define the intended use

Describe:
- What the assistant may do.
- What it must not do.
- Which tasks require a human.
- Which tasks should remain deterministic.

## Task 2: Identify at least ten risks

Include risks involving:
- Factual errors.
- Privacy.
- Security.
- Fairness.
- Tool execution.
- User trust.
- Operational reliability.
- Regulatory or compliance requirements.

## Task 3: Prioritize the risks

For each risk, estimate:
- Impact.
- Likelihood.
- Exposure.
- Reversibility.
- Detectability.

Identify risks that require mandatory controls regardless of their numerical score.

## Task 4: Define mitigations

For each high-priority risk, specify:
- Preventive controls.
- Detection mechanisms.
- Recovery procedures.
- Responsible owner.
- Residual risk.

## Task 5: Define launch criteria

Write testable requirements for:
- Transaction-status accuracy.
- Fee explanations.
- Account authorization.
- Escalation.
- Logging and data retention.
- Prompt-injection resistance.
- Rollback readiness.

## Task 6: Define incident response

Explain what the team should do if:
- The assistant exposes another customer's information.
- A model update increases critical errors.
- The transaction API becomes unavailable.
- The assistant repeatedly initiates duplicate actions.
- A previously supported language begins performing poorly.

For each scenario, define containment, investigation, communication, and recovery.

# 17. Final Challenge: Responsible AI for a Fintech Product

You are the Product Manager of a digital investment platform.

The company plans to launch an AI assistant that:
- Explains portfolio performance.
- Summarizes transaction history.
- Answers questions about investment concepts.
- Retrieves account-specific information.
- May eventually recommend actions based on a customer's portfolio.

Leadership wants to launch quickly because competitors are introducing AI features.

Your challenge is to create a responsible AI strategy that enables innovation without accepting uncontrolled risk.

## Part A: Define product scope

Separate the proposed capabilities into:
- Suitable initial use cases.
- Use cases requiring additional validation.
- Use cases requiring stronger controls or specialist review.
- Use cases that should not be included in the initial release.

Explain why each category is appropriate.

## Part B: Build a risk taxonomy

Identify risks involving:
- Accuracy.
- Privacy.
- Security.
- Fairness.
- User trust.
- Tool execution.
- Financial harm.
- Operational reliability.
- Applicable legal and regulatory obligations.

Identify the most important risks and explain how you prioritized them.

## Part C: Design safeguards

Specify how the product will handle:
- Incorrect or outdated account data.
- Missing or conflicting information.
- Unauthorized requests.
- Prompt injection.
- Unsupported investment claims.
- Sensitive customer information.
- Requests that require qualified human judgment.

Distinguish controls enforced by application logic from instructions given to the model.

## Part D: Define human oversight

Determine which tasks should be:
- Fully automated within a bounded scope.
- Automatically prepared but reviewed by a human.
- Escalated when specific conditions occur.
- Excluded from the product.

Explain how reviewers will access evidence and how review quality will be measured.

## Part E: Create a risk register

Build a risk register with at least ten entries.

For each entry, specify:
- Description.
- Impact.
- Likelihood.
- Preventive controls.
- Detection mechanism.
- Mitigation owner.
- Rollback or escalation trigger.
- Residual risk.

## Part F: Define launch gates

Specify the evidence required before:
- Internal testing.
- A limited customer pilot.
- Wider availability.
- Introducing additional capabilities.

Include minimum quality requirements, security and privacy reviews, monitoring readiness, and incident response preparation.

## Part G: Plan incident response

Create a response plan for:
1. A confirmed unauthorized disclosure.
2. A major increase in incorrect financial information.
3. A compromised or manipulated retrieval source.
4. An unexpected change in model behavior.
5. An operational outage.

Define when the feature should be restricted, disabled, or rolled back.

## Part H: Make the executive recommendation

Present:
- The initial product scope.
- The customer value.
- The major risks.
- The required safeguards.
- The launch conditions.
- The ongoing monitoring plan.
- The residual risks that require explicit acceptance.
- The criteria for expanding the product.

Your recommendation should show that responsible AI is not simply about preventing all possible risk. It is about understanding the risks, reducing them to an acceptable level, assigning accountability, and making deliberate decisions about which opportunities are worth pursuing.

# Key Takeaways

1. **Responsible AI is a product lifecycle responsibility.** Risk assessment should begin during discovery and continue after launch.

2. **Match controls to the consequences of failure.** A text-rewriting feature and a financial-action system require different levels of oversight.

3. **Do not rely on prompts as security boundaries.** Authorization, permissions, and critical business rules must be enforced by trusted application logic.

4. **Use authoritative data for important facts.** Models should not infer transaction status, coverage guarantees, or other consequential facts from incomplete context.

5. **Design for safe failure.** Missing data, conflicting sources, and uncertain answers should trigger a controlled fallback or escalation.

6. **Privacy and security require end-to-end thinking.** Review the complete data flow, including retrieval, tools, logs, external providers, and human review.

7. **Measure fairness in relevant contexts.** Overall quality scores may hide meaningful performance differences across languages, tasks, or customer groups.

8. **Transparency should improve user decisions.** Communicate limitations, uncertainty, and source evidence where they matter.

9. **Human oversight must be effective.** Reviewers need appropriate evidence, time, training, and authority to intervene.

10. **Assign clear ownership.** Product, engineering, security, privacy, compliance, and operations must understand their respective responsibilities.

11. **Define launch and rollback criteria in advance.** Critical incidents may require immediate containment even when the available sample is small.

12. **Treat incidents as learning opportunities.** Investigate root causes, improve safeguards, and add representative failures to regression tests.

13. **Responsible AI enables sustainable innovation.** The objective is to deliver valuable AI capabilities while keeping risk understood, controlled, and accountable.

# Preview of Day 92

**Topic: AI Product Economics & Infrastructure**

Tomorrow, we will examine the economic and technical foundations of operating AI products at scale.

You will learn about:
- Model pricing and inference costs.
- Token consumption and context-window trade-offs.
- Cost per request versus cost per successful task.
- Latency, throughput, and scalability.
- Model selection and routing.
- Caching and retrieval optimization.
- Small versus large models.
- Infrastructure and vendor trade-offs.
- Unit economics and financial forecasting.
- Cost optimization without unacceptable quality degradation.

The central question will be: **How can a Product Manager build an AI product that delivers reliable customer value while remaining economically sustainable as usage grows?**
