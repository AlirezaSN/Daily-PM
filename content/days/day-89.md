# Day 89: AI Product Discovery & Evaluation

## Introduction

AI product discovery is the process of identifying valuable problems, determining whether AI is an appropriate solution, and gathering enough evidence to justify investment before building and scaling a product.

Traditional product discovery asks:

- Is this a real customer problem?
- Who experiences it?
- How important is it?
- What solution would deliver value?
- How will we know whether the solution works?

AI product discovery must answer these questions and several additional ones:

- Is AI actually necessary, or would conventional software solve the problem better?
- Can an available model perform the task at the required quality level?
- Do we have the data and context needed to support the task?
- How will we measure quality when answers are not always identical?
- What happens when the model is wrong?
- Can the solution meet our latency, cost, privacy, and reliability requirements?
- Is the expected business value sufficient to justify the additional complexity?

Consider a fintech company that wants to introduce an AI assistant to help customers understand their investment portfolios.

The idea sounds attractive. Customers could ask questions in natural language, receive explanations of portfolio changes, and explore investment concepts.

However, several uncertainties remain:

- Can the system accurately explain portfolio data?
- Can it distinguish factual explanations from investment recommendations?
- Will customers trust its answers?
- Will the feature reduce support costs or increase engagement?
- Can it operate within acceptable cost and regulatory constraints?

A successful AI product team does not assume these questions will resolve themselves during development. It investigates them deliberately.

The goal of this lesson is to build a repeatable process for discovering AI opportunities, testing feasibility, evaluating model quality, and making evidence-based product decisions.

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain how AI product discovery differs from traditional product discovery.
- Identify problems where AI offers a meaningful advantage.
- Distinguish customer desirability, technical feasibility, operational viability, and business viability.
- Design discovery experiments that reduce the most important uncertainties.
- Evaluate data readiness and model feasibility.
- Build an AI evaluation dataset and quality rubric.
- Understand offline evaluation, online experiments, and human review.
- Compare AI approaches using task-specific evidence.
- Define go/no-go thresholds and launch guardrails.
- Estimate AI product economics before scaling.
- Create an AI discovery plan for a real product opportunity.

# 1. What Makes AI Product Discovery Different?

AI introduces additional uncertainty because model behavior is often probabilistic, context-sensitive, and difficult to specify through a single set of deterministic rules.

In conventional software, a well-defined input usually produces an output according to explicitly implemented logic.

For example, a payment system may calculate a transaction fee using a fixed formula. Given the same valid inputs and business rules, the expected output is predictable.

A generative AI system may produce different wording for the same question, overlook a qualification, or interpret an ambiguous request differently across attempts.

This does not mean AI products cannot be reliable. It means reliability must be established through testing, architecture, constraints, and ongoing monitoring rather than assumed from the implementation.

## 1.1 Four dimensions of AI product discovery

A useful discovery framework evaluates four dimensions.

### Desirability

Do users have a meaningful problem that the proposed AI experience can solve?

Questions include:
- How frequently does the problem occur?
- How do users solve it today?
- What makes the current approach frustrating?
- Would users trust or adopt the proposed experience?
- Does the feature improve an outcome that matters?

### Technical feasibility

Can the proposed system achieve the required performance?

Questions include:
- Can the model perform the task?
- Is the necessary information available?
- Can relevant context be retrieved?
- Can important outputs be verified?
- Can the system meet latency and reliability requirements?

### Business viability

Can the product create sufficient economic value?

Questions include:
- Will customers pay for the feature, or will it support retention or acquisition?
- What is the expected cost per successful task?
- What additional infrastructure and support costs will arise?
- Will the feature improve a meaningful business metric?

### Operational and risk viability

Can the company operate the product responsibly and sustainably?

Questions include:
- Can failures be detected and handled?
- Is human review required?
- Are data access and privacy controls sufficient?
- Can the organization support the feature at scale?
- Are legal, regulatory, security, and reputational risks acceptable?

A product can succeed in one dimension and fail in another.

For example, users may love an AI feature that is too expensive to operate. A model may achieve high benchmark scores but fail on the company's actual documents. A technically excellent system may not solve a sufficiently important problem.

Discovery must address all four dimensions.

# 2. Start With the Problem, Not the AI Capability

AI tools often encourage teams to begin with a capability:

- We can summarize documents.
- We can generate personalized content.
- We can build an agent.
- We can create a conversational interface.
- We can automate customer support.

These are possible solutions, not validated product opportunities.

A capability becomes a product opportunity when it addresses a meaningful user problem better than the available alternatives.

## 2.1 Identify the underlying job

Suppose a crypto exchange team proposes an AI assistant that answers customer questions.

The initial idea is too broad to evaluate.

A better discovery process investigates the actual problems customers experience:

- Customers cannot understand why a deposit has not arrived.
- Customers do not understand withdrawal restrictions.
- Customers struggle to find the relevant fee information.
- Customers ask support agents repetitive questions about transaction status.
- Customers misunderstand the difference between a network fee and an exchange fee.

Each problem has different requirements.

For example, explaining a fee structure may require retrieving approved documentation and generating a clear explanation.

Explaining why a specific deposit has not arrived may require access to current transaction status, blockchain confirmation data, and internal processing states.

The first problem may be primarily a knowledge-access problem. The second may be a data integration and workflow problem.

The fact that both can be expressed as questions does not make them the same product opportunity.

## 2.2 Use problem statements

A useful problem statement identifies the user, the task, the difficulty, and the consequence.

Example:

"Crypto exchange customers who are waiting for deposits struggle to understand the current transaction status because information is distributed across several systems. This creates uncertainty and increases support contacts."

This statement does not assume AI is the answer.

Potential solutions might include:
- A better transaction status page.
- Improved notifications.
- A simpler explanation of blockchain confirmations.
- A deterministic status API.
- An AI-generated explanation based on verified transaction data.

Discovery determines which solution is appropriate.

## 2.3 Investigate the current workflow

Study how users and employees currently complete the task.

Look for:
- Repeated manual work.
- Long wait times.
- Frequent errors.
- Confusing decisions.
- Unnecessary handoffs.
- Information that is difficult to locate.
- Cases that require human judgment.

Observe real workflows where possible rather than relying entirely on what users say they do.

For internal products, examine actual support conversations, processing queues, spreadsheets, and handoffs, subject to appropriate privacy and access controls.

The goal is to identify the source of the problem before selecting a technology.

# 3. Determine Whether AI Is the Right Solution

AI should be selected because it provides an advantage, not because it is currently popular.

## 3.1 Compare alternative approaches

Suppose customers struggle to understand transaction fees.

Potential approaches include:

**Option A: Improve the existing interface**

Display the fee, calculation, and relevant explanation more clearly.

**Option B: Add deterministic calculations**

Show a transparent fee breakdown using known inputs and fixed business rules.

**Option C: Improve search**

Help users locate the relevant fee documentation.

**Option D: Add generative AI**

Allow users to ask questions about fees in natural language and receive contextual explanations.

**Option E: Combine approaches**

Use deterministic calculations for the exact amount and generative AI to explain the result in plain language.

The combined solution may be appropriate, but it should not be selected automatically. A simpler interface improvement could solve the problem at a lower cost and with less risk.

## 3.2 A practical decision framework

| Problem characteristic | Likely starting point |
|---|---|
| Exact calculations with known inputs | Deterministic software |
| Fixed business rules | Rules engine or conventional code |
| Repeated information retrieval | Search or retrieval system |
| Unstructured text transformation | Generative AI |
| Natural-language interaction across varied questions | Generative AI with suitable context |
| Changing facts stored in authoritative systems | Data integration or API |
| Complex judgment with high consequences | Human decision-making supported by appropriate tools |
| Mixed structured and unstructured information | Hybrid system |

These are starting points rather than absolute rules.

For example, a retrieval system may combine conventional search with generative AI. A high-impact workflow may use AI to prepare a recommendation while keeping the final decision with an authorized human.

## 3.3 Define the advantage over the baseline

Before testing an AI solution, define what it must improve.

A baseline might be:
- The existing support workflow.
- A conventional search interface.
- A rules-based assistant.
- A standard form.
- A simpler non-AI feature.

Potential advantages include:
- Faster task completion.
- Higher successful completion rates.
- Better comprehension.
- Lower support workload.
- Fewer manual steps.
- Improved accessibility.
- Better handling of diverse user questions.

If the AI solution does not meaningfully outperform the baseline, its additional complexity may not be justified.

# 4. Map the Key Uncertainties

AI discovery becomes more efficient when the team identifies the assumptions that could invalidate the opportunity.

Do not treat every unknown as equally important.

## 4.1 Five categories of uncertainty

### Problem uncertainty

Is the problem important enough to solve?

Example: Customers may say they want an AI investment assistant but rarely use it when offered.

### Model uncertainty

Can the model complete the task at the required quality level?

Example: The model may explain standard fee structures correctly but misunderstand unusual fee exceptions.

### Data uncertainty

Can the system access reliable, relevant, current, and authorized information?

Example: The exchange's support documentation may be outdated or inconsistent with the current application behavior.

### Workflow uncertainty

Can the AI fit into the user's actual workflow?

Example: Support agents may spend more time reviewing AI-generated responses than they previously spent writing responses themselves.

### Economic and risk uncertainty

Can the product create value at an acceptable cost and risk level?

Example: A feature may reduce response time but require extensive human review, eliminating the expected savings.

## 4.2 Prioritize assumptions by impact and uncertainty

Create a list of critical assumptions.

For each assumption, estimate:
- The impact if it is false.
- How uncertain it is.
- The cost of testing it.
- The time required to obtain evidence.

A practical prioritization score is:

**Priority = Impact × Uncertainty**

Use a consistent rating scale, such as 1–5, for both factors.

This score is not a scientific measurement. It is a way to make prioritization discussions more explicit.

Example:

| Assumption | Impact | Uncertainty | Priority |
|---|---:|---:|---:|
| Customers frequently misunderstand transaction fees | 4 | 3 | 12 |
| The model can explain fee exceptions accurately | 5 | 4 | 20 |
| Required fee documentation is accessible and current | 5 | 3 | 15 |
| The interface can be implemented in two weeks | 2 | 2 | 4 |

The highest-priority uncertainty may be whether the model can handle important fee exceptions safely, rather than whether the interface can be built.

## 4.3 Use evidence, not confidence alone

Teams sometimes rate an assumption as low-risk because stakeholders feel confident about it.

Confidence is not the same as evidence.

Record:
- What is known.
- What is assumed.
- What evidence supports the assumption.
- What evidence would disprove it.
- What decision depends on it.

This creates a traceable connection between discovery work and product decisions.

# 5. Design Discovery Experiments

Once the major uncertainties are identified, design experiments that produce useful evidence with minimal unnecessary investment.

A good experiment tests a specific assumption and has a defined decision rule.

## 5.1 Problem interviews

Use interviews to understand user behavior, context, and pain points.

Questions should focus on past experiences rather than hypothetical enthusiasm.

Useful questions include:
- "Tell me about the last time you had trouble understanding a transaction fee."
- "What did you do to resolve it?"
- "Which information was difficult to find?"
- "Did you contact support?"
- "How long did the process take?"
- "What happened when you could not find the answer?"

Less useful questions include:
- "Would you use an AI assistant?"
- "Do you think AI would make this easier?"
- "Would you pay for a smart chatbot?"

Hypothetical questions often produce positive answers without demonstrating actual demand.

## 5.2 Workflow observation

Observe users performing the task.

For internal support tools, compare:
- How agents search for information.
- How often they switch between systems.
- How they determine which source is authoritative.
- How much time is spent drafting responses.
- How often cases require escalation.

This can reveal whether AI is solving the actual bottleneck.

For example, if most support time is spent waiting for another department to confirm a transaction status, generating faster explanations will not remove the main delay.

## 5.3 Concierge experiments

A concierge experiment tests the value of a proposed service by delivering it manually or with limited automation.

Suppose you want to validate an AI-generated insurance comparison service.

You could:
1. Recruit a small group of eligible users.
2. Ask each user to identify the plans they want to compare.
3. Have a qualified team member prepare the comparison using approved information.
4. Observe how users interpret the results.
5. Measure whether they make progress toward their decision.
6. Identify which parts of the workflow could benefit from AI.

This tests the underlying customer value before investing in a complete AI system.

The experiment should be transparent about how the service is delivered and should not mislead users about automation or capabilities.

## 5.4 Wizard-of-Oz experiments

In a Wizard-of-Oz experiment, the user interacts with an experience that appears automated, while some of the underlying work is performed manually or through a limited prototype.

This can help test interaction patterns before full automation.

However, it requires careful ethical design. Users should not be misled about important aspects of the service, especially where privacy, financial decisions, safety, or consequential outcomes are involved.

For many AI products, a clearly disclosed human-assisted prototype is a better choice.

## 5.5 Prototype experiments

Build the smallest prototype needed to answer the next important question.

Possible prototypes include:
- A static interface with sample outputs.
- A prompt tested in a model playground.
- A small script using a limited dataset.
- A retrieval prototype using a handful of documents.
- A workflow that generates drafts for human review.

The prototype should be proportional to the uncertainty being tested.

Do not build a production-grade platform merely to determine whether users find an explanation useful.

## 5.6 Define the decision rule before running the experiment

Before testing, specify what outcomes would justify proceeding.

Example:

"We will continue with the AI support-response prototype if it reduces median drafting time by at least 20%, maintains the agreed answer-quality threshold, and does not increase critical errors."

The exact thresholds should be based on the use case, baseline performance, and business requirements.

Defining thresholds in advance reduces the temptation to reinterpret disappointing results as success.

# 6. Evaluate Data Readiness and Technical Feasibility

A promising use case may fail because the information required to perform the task is unavailable, unreliable, or difficult to use.

Data readiness should be investigated early, especially for products that answer factual questions about customers, transactions, policies, or internal operations.

## 6.1 Data readiness checklist

Evaluate the following dimensions.

### Availability

Does the required information exist?

### Quality

Is it accurate, complete, and consistent?

### Freshness

How quickly does the information become outdated?

### Accessibility

Can the system retrieve it with acceptable latency?

### Structure

Is the information structured, unstructured, or distributed across multiple systems?

### Permissions

Is the information available to the intended user and use case?

### Provenance

Can the system identify the source, version, and relevant context?

### Maintenance

Who owns the information and keeps it current?

A knowledge base with thousands of documents is not necessarily a useful AI knowledge base. If important pages contradict one another, the model may reproduce the inconsistency or select the wrong source.

## 6.2 Evaluate the complete task

A model benchmark may not reflect how the product will behave in production.

For example, an AI assistant may perform well on a standard benchmark but fail when:
- Customers use informal language.
- Documents contain tables.
- Multiple policy versions exist.
- Questions depend on account-specific information.
- The user asks several questions in one message.
- The relevant information is spread across different sources.

Test the actual task, data, and workflow.

## 6.3 Build a small technical spike

A technical spike is a limited investigation intended to reduce a specific feasibility uncertainty.

For a document-based assistant, a spike might test:
1. Whether the source documents can be parsed.
2. Whether relevant passages can be retrieved.
3. Whether the model uses those passages correctly.
4. Whether citations point to supporting evidence.
5. Whether the system can abstain when information is missing.
6. Whether latency and cost are acceptable.

The spike does not need production-grade infrastructure, but it should use representative data and realistic test cases.

## 6.4 Test failure modes deliberately

Do not evaluate only easy questions with clear answers.

Include:
- Missing information.
- Conflicting sources.
- Ambiguous questions.
- Incorrect assumptions in user input.
- Outdated documents.
- Unexpected file formats.
- Attempts to access unauthorized information.
- Questions outside the intended scope.

The purpose is not to prove that the model is intelligent. It is to determine whether the complete system can safely and effectively perform the intended task.

# 7. Build an AI Evaluation Dataset

A structured evaluation dataset is one of the most valuable assets in AI product development.

It allows the team to compare approaches, measure quality, detect regressions, and understand where the system fails.

## 7.1 What belongs in the dataset?

For each test case, consider recording:

- Test case ID.
- User input.
- Relevant context or source documents.
- Expected behavior.
- Reference answer or expected fields, where appropriate.
- Required source references.
- Risk category.
- Evaluation criteria.
- Actual output.
- Evaluation result.
- Failure classification.

The expected behavior does not always need to be a single exact sentence. Generative AI can produce different valid answers.

For example, a test case may specify that the response must:
- State the correct deductible.
- Identify a relevant exclusion.
- Cite the current policy section.
- Avoid making a claim about conditions not present in the source.
- Indicate that a requested detail is unavailable.

This is more useful than demanding one exact wording.

## 7.2 Create representative coverage

An evaluation dataset should represent the intended task and important failure modes.

For an insurance comparison assistant, include:
- Common coverage questions.
- Questions involving deductibles.
- Comparisons between plans.
- Questions about exclusions.
- Ambiguous customer priorities.
- Missing policy information.
- Conflicting source documents.
- Outdated plan versions.
- Unsupported requests for definitive coverage decisions.

For a fintech support assistant, include:
- Transaction status.
- Fees and limits.
- Account access.
- Deposit and withdrawal issues.
- Ambiguous or incomplete requests.
- Cases requiring access to current data.
- Potentially sensitive account information.
- Requests that require human escalation.

## 7.3 Use a balanced dataset

A dataset consisting entirely of routine questions can produce an overly optimistic impression of quality.

Include both frequent cases and lower-frequency, high-impact cases.

Where possible, distinguish between:
- A representative dataset for estimating typical performance.
- A challenge dataset designed to expose difficult failure modes.

Do not combine these datasets without considering how their different case distributions affect the results.

## 7.4 Keep evaluation data separate from development examples

If the team repeatedly adjusts prompts based on the same examples used to measure success, the evaluation can become overly optimistic.

Use separate datasets for:
- Development and debugging.
- Validation and model selection.
- Final holdout evaluation.

The exact split depends on the amount and diversity of data available. The important principle is to preserve some cases that were not used to optimize the solution.

For high-impact products, continue adding new real-world failure cases to the evaluation process while maintaining an appropriate holdout set.

# 8. Create a Quality Rubric

AI quality is multidimensional. A single score can hide important failure patterns.

A rubric defines what good performance means for a particular product task.

## 8.1 Common evaluation dimensions

### Correctness

Are the facts and conclusions accurate?

### Completeness

Does the response include the important information required by the task?

### Relevance

Does it answer the user's actual question?

### Grounding

Are factual claims supported by authorized, relevant sources?

### Clarity

Can the intended user understand the result?

### Consistency

Does the system behave appropriately across similar inputs?

### Appropriate uncertainty

Does the system identify missing, ambiguous, or conflicting information?

### Instruction following

Does it respect the intended task, output format, and constraints?

### Safety and policy compliance

Does it avoid prohibited or harmful behavior?

### Action correctness

If the system uses tools, does it perform the intended operation correctly and only when authorized?

Not every product needs all these dimensions. Select those that reflect the intended task and its risks.

## 8.2 Use task-specific acceptance criteria

Consider an AI-generated support response.

A rubric might require:
- No fabricated account or transaction facts.
- Correct use of the approved support documentation.
- No disclosure of another customer's information.
- Appropriate escalation for unresolved payment issues.
- Clear and relevant wording.
- No unsupported promises about resolution times.

A general "helpfulness" score would not adequately capture these requirements.

## 8.3 Avoid misleading averages

Suppose a system performs well on nine routine categories but fails badly on a category involving payment reversals.

An overall score might look acceptable while concealing a critical weakness.

Report performance by important category and risk level.

For high-impact failure modes, define separate acceptance thresholds rather than allowing excellent performance elsewhere to compensate for them.

# 9. Offline Evaluation

Offline evaluation tests a system against a prepared dataset without exposing the new experience to all real users.

It is often one of the fastest ways to compare prompts, models, retrieval approaches, and validation methods.

## 9.1 A typical workflow

1. Select a representative evaluation dataset.
2. Run the candidate system on each test case.
3. Apply deterministic checks where possible.
4. Evaluate outputs using the agreed rubric.
5. Review difficult cases with domain experts.
6. Categorize failures.
7. Compare results with the baseline.
8. Decide whether to revise, proceed, or stop.

## 9.2 Deterministic evaluation

Some properties can be checked automatically.

Examples:
- Required fields exist.
- Output follows a schema.
- A cited source ID is valid.
- A calculated value matches an authoritative result.
- A required status value belongs to an allowed set.

These checks are usually more reliable than asking a language model to judge an objective condition.

## 9.3 Human evaluation

Human review is valuable when quality requires domain expertise or nuanced judgment.

Reviewers can assess:
- Whether a financial explanation is misleading.
- Whether a policy summary omits an important qualification.
- Whether a response answers the user's real question.
- Whether an escalation is appropriate.

For important evaluations, use clear instructions and examples. Consider multiple reviewers for difficult or consequential cases and investigate disagreements.

## 9.4 Model-based evaluation

A separate model can help evaluate outputs for characteristics such as relevance, clarity, or adherence to a rubric.

This can make evaluation faster, but it introduces its own risks.

An evaluator model may:
- Prefer fluent but incorrect answers.
- Miss subtle domain-specific errors.
- Judge similar outputs inconsistently.
- Share weaknesses with the model being evaluated.

Validate automated evaluation against human judgments, especially for critical dimensions.

## 9.5 Failure classification

When a test fails, classify the cause.

Useful categories include:
- Poor source data.
- Retrieval failure.
- Incorrect interpretation.
- Unsupported generation.
- Missing context.
- Invalid structured output.
- Business-rule violation.
- Permission failure.
- Inappropriate tool use.
- Unacceptable latency or cost.

Classification matters because changing the prompt will not fix every failure.

If the source data is wrong, improve the source. If retrieval misses the relevant clause, improve retrieval. If a calculation is wrong, use deterministic calculation logic.

# 10. Online Experiments and Real-World Validation

Offline performance is necessary but not sufficient.

A system may perform well on a test dataset yet fail to improve the actual customer or employee experience.

Online evaluation measures how the feature performs in a real workflow.

## 10.1 Establish a baseline

Before launching, measure the existing process.

For a support-response assistant, the baseline might include:
- Median response drafting time.
- Resolution time.
- First-contact resolution.
- Reopen rate.
- Customer satisfaction.
- Escalation rate.
- Error or correction rate.

For an insurance comparison assistant, the baseline might include:
- Time to compare plans.
- Customer comprehension.
- Completion rate.
- Support contacts caused by confusion.
- Purchase conversion among eligible users.

The baseline must use consistent definitions.

## 10.2 Choose an appropriate experiment

Possible rollout methods include:

**Internal dogfooding**

Employees test the product before customers are exposed to it.

**Shadow evaluation**

The system generates outputs for evaluation without using them to make customer-facing decisions.

**Human-reviewed pilot**

The system prepares results that are reviewed before they are used.

**Limited release**

A small, eligible group receives the feature under defined controls.

**Controlled experiment**

Comparable groups are assigned different experiences to estimate the effect of the feature.

The right method depends on the product's risk, traffic, and ability to isolate effects.

For consequential financial or insurance decisions, a controlled experiment may require additional safeguards, and a less risky pilot may be more appropriate initially.

## 10.3 Define primary metrics and guardrails

A primary metric measures the intended improvement.

Examples:
- Reduction in agent drafting time.
- Increase in successful task completion.
- Improvement in customer comprehension.

Guardrails detect unacceptable side effects.

Examples:
- Critical error rate.
- Privacy incidents.
- Escalation rate.
- Customer complaints.
- Support rework.
- Latency.
- Cost per successful task.

A feature should not be considered successful simply because the primary metric improves if critical guardrails deteriorate.

## 10.4 Avoid misleading experiment conclusions

A before-and-after comparison can be affected by changes in customer mix, seasonality, staffing, or product usage.

When feasible, use an appropriate control group and a predefined analysis plan.

Check:
- Whether the groups are comparable.
- Whether the sample is large enough.
- Whether the metric definitions stayed consistent.
- Whether the result is practically meaningful.
- Whether the experiment introduced harmful side effects.

Statistical significance alone does not establish product value. The size and relevance of the effect matter too.

# 11. Compare Models and Approaches Fairly

AI teams may compare multiple models, prompts, or architectures.

A fair comparison requires consistent evaluation conditions.

## 11.1 Hold the task constant

Use the same:
- Evaluation dataset.
- Source information.
- User instructions.
- Success criteria.
- Tool permissions.
- Risk requirements.

If each candidate receives different context or is judged by a different rubric, the results may not be comparable.

## 11.2 Compare more than answer quality

Consider these dimensions:

| Dimension | Key question |
|---|---|
| Task quality | Does it meet the required quality threshold? |
| Reliability | Does performance remain acceptable across cases? |
| Latency | Is the response fast enough for the workflow? |
| Cost | What is the cost per successful task? |
| Data handling | Does the solution meet privacy and security requirements? |
| Integration | Can it work with the existing architecture? |
| Maintainability | Can the team operate and improve it? |
| Portability | How difficult would it be to change providers or models? |

The best model is not necessarily the one with the highest general benchmark score.

It is the approach that meets the product's requirements at an acceptable total cost and risk.

## 11.3 Establish minimum thresholds first

Avoid choosing a candidate solely because it ranks first among the tested options.

If every candidate fails the critical correctness requirement, the correct decision may be to redesign the task or stop the project.

For example:

- Model A: 96% on routine questions, but misses important exclusions.
- Model B: 93% on routine questions and reliably identifies cases requiring escalation.
- Model C: 98% on routine questions, but exceeds the latency budget.

The preferred option depends on the task's risk, acceptance thresholds, and operational requirements—not on one headline percentage.

# 12. Evaluate AI Product Economics

Technical feasibility does not guarantee economic viability.

AI products may incur costs for inference, retrieval, data processing, integrations, human review, monitoring, and support.

## 12.1 Estimate total cost

Consider a customer support assistant.

Suppose the product receives 100,000 requests per month.

For illustration, assume:
- Model and retrieval cost: $0.03 per request.
- Additional review and operational cost: $0.02 per request.

Total variable cost per request:

$0.03 + $0.02 = $0.05

Monthly variable cost:

100,000 × $0.05 = $5,000

This excludes fixed development and platform costs.

These figures are hypothetical. Actual costs depend on model pricing, input and output sizes, retrieval architecture, review requirements, and workload patterns.

## 12.2 Estimate cost per successful task

Suppose 85% of requests are completed successfully.

Expected successful tasks:

100,000 × 0.85 = 85,000

Cost per successful task:

$5,000 / 85,000 ≈ $0.059

This is more informative than cost per request because it accounts for unsuccessful attempts.

However, a full economic analysis should also consider:
- Repeat requests.
- Human rework.
- Error-related losses.
- Support escalations.
- Customer retention or conversion effects.
- The cost of the current workflow.

## 12.3 Compare against the baseline

Suppose the existing support process costs $0.40 per successfully handled request.

An AI-assisted process may reduce direct handling cost, but the team should not assume that every AI-generated response eliminates human work.

Measure the actual proportion of work avoided, the quality of completed cases, and the costs of reviewing failures.

The economic case is stronger when the product improves task outcomes while reducing total cost—not merely when it reduces model usage.

## 12.4 Evaluate unit economics under different scenarios

Estimate:
- Low usage.
- Expected usage.
- High usage.
- Higher-than-expected review rates.
- More expensive model routing.
- Lower task success.
- Increased retries.

A product that is economical only under optimistic assumptions may not be ready to scale.

# 13. Define Go/No-Go Decisions

Discovery should lead to a decision, not simply a demonstration.

A go/no-go framework defines the evidence required to continue investing.

## 13.1 Possible decision outcomes

### Go

The problem is meaningful, the system meets critical quality and risk requirements, and the expected value justifies the next stage.

### Iterate

The opportunity remains promising, but a specific problem needs to be addressed.

Examples:
- Retrieval quality is too low.
- The interface creates confusion.
- Review costs are too high.
- Certain user segments experience unacceptable failure rates.

### Narrow the scope

The broader use case is too difficult or risky, but a smaller task can be supported reliably.

For example, an investment assistant may not be ready to provide personalized recommendations but may be able to explain portfolio terminology and summarize verified account data.

### Stop

The task is not valuable enough, the required quality cannot be achieved, the data is unavailable, or the risk and cost are unacceptable.

Stopping is a valid product decision. Discovery is successful when it prevents investment in an unsuitable solution.

## 13.2 Separate mandatory gates from optimization metrics

Some requirements should be mandatory.

Examples:
- No unauthorized disclosure of customer information.
- Critical calculations must match authoritative values.
- High-risk cases must follow the required escalation process.
- The system must not execute prohibited actions.
- Performance must meet the minimum operational requirements.

Other metrics can be optimized over time, such as average response length or stylistic preferences.

Do not allow improvements in optional metrics to compensate for failures in mandatory safety or correctness requirements.

## 13.3 Use evidence-based stage gates

A practical progression is:

**Gate 1: Problem validation**

Evidence that the problem is real and important.

**Gate 2: Technical feasibility**

Evidence that the approach can perform the task on representative cases.

**Gate 3: Workflow validation**

Evidence that users can successfully incorporate the solution into their work.

**Gate 4: Operational and economic readiness**

Evidence that the product can operate within acceptable cost, latency, privacy, and risk constraints.

**Gate 5: Scale readiness**

Evidence that the feature maintains quality under real-world traffic and that monitoring, incident handling, and support are ready.

Not every project needs a long formal review process. The rigor should match the consequences of failure.

# 14. Common AI Discovery Mistakes

## Mistake 1: Starting with a model demonstration

A compelling demo does not prove that a meaningful customer problem exists.

**Better approach:** Validate the problem and compare AI with simpler alternatives.

## Mistake 2: Testing only easy examples

Routine questions can hide serious weaknesses.

**Better approach:** Include ambiguous, missing-information, and high-impact cases.

## Mistake 3: Using a single quality score

A high average can conceal critical failures.

**Better approach:** Evaluate by task category, risk, and failure type.

## Mistake 4: Treating benchmark performance as production readiness

General benchmarks may not represent the company's data, workflow, or customer population.

**Better approach:** Test the actual product task using representative data.

## Mistake 5: Optimizing the prompt before diagnosing the failure

A prompt change may not fix poor source data, weak retrieval, or incorrect business logic.

**Better approach:** Classify failures and address the underlying cause.

## Mistake 6: Ignoring the baseline

A system may appear useful without improving the current process.

**Better approach:** Compare it against an appropriate non-AI or existing workflow.

## Mistake 7: Launching without predefined thresholds

Teams may continue to justify the project even when evidence is weak.

**Better approach:** Agree on decision criteria before running the experiment.

## Mistake 8: Measuring only cost per request

Cheap requests can still create expensive failures and human rework.

**Better approach:** Measure total cost per successful task.

## Mistake 9: Ignoring ongoing evaluation

Model, prompt, source, and product changes can degrade performance over time.

**Better approach:** Maintain regression tests and monitor real-world outcomes.

## Mistake 10: Treating human review as free

Human review can improve quality but introduces latency and operating costs.

**Better approach:** Measure review rates, review time, disagreement, and the actual value of intervention.

# 15. Case Study: Discovering an AI Support Assistant for a Crypto Exchange

## Business context

A cryptocurrency exchange receives a large volume of customer questions about deposits, withdrawals, fees, account restrictions, and transaction status.

The company wants to reduce support costs and improve response times using generative AI.

The leadership team proposes launching a broad AI support assistant within two months.

As Product Manager, your task is to determine which parts of the opportunity are worth pursuing.

## Step 1: Validate the problem

Analyze support categories and interview support agents.

Suppose the initial evidence suggests:
- Many questions concern standard fee and limit information.
- Deposit-status questions require access to current transaction data.
- Account restrictions sometimes require confidential information and human judgment.
- Agents spend substantial time locating approved documentation.

The opportunity is not one uniform automation problem.

## Step 2: Identify the highest-value initial use case

Start with a narrower problem: helping agents find approved documentation and draft responses to routine fee and limit questions.

Why?

- The questions are relatively common.
- The required source material can be identified.
- The output can be reviewed by agents.
- The initial scope avoids automatically executing financial actions.
- The team can compare performance with the existing support workflow.

This is a hypothesis to validate, not a predetermined conclusion.

## Step 3: Identify critical assumptions

Examples:
1. Agents spend significant time searching for approved answers.
2. The documentation is accurate and sufficiently current.
3. The system can retrieve the correct source.
4. The model can draft responses without introducing unsupported claims.
5. Agents can review outputs efficiently.
6. The workflow can reduce total handling time.

## Step 4: Run discovery experiments

Conduct workflow observation and a small technical spike.

Use a representative sample of support questions and approved documents.

Test whether the system can:
- Retrieve the correct documentation.
- Generate a relevant draft.
- Cite supporting sources.
- Recognize missing information.
- Avoid unsupported claims about account-specific transactions.

Run the system in a human-reviewed setting before considering wider deployment.

## Step 5: Build the evaluation dataset

Include common fee and limit questions, ambiguous requests, conflicting documents, outdated information, and questions requiring escalation.

Evaluate correctness, source grounding, completeness, clarity, and appropriate abstention.

Critical factual errors should be tracked separately from minor wording issues.

## Step 6: Measure the workflow

Compare the AI-assisted process with the existing process.

Measure:
- Time to locate relevant information.
- Total response drafting time.
- Agent correction rate.
- Critical factual error rate.
- Escalation rate.
- Cost per successfully handled request.

If drafting time falls but correction rates rise sharply, the product may not be creating value.

## Step 7: Make the decision

Proceed to a limited pilot only if:
- The system meets the minimum quality requirements.
- Agents can review outputs efficiently.
- Critical failures are appropriately controlled.
- The feature improves the workflow.
- The economics remain acceptable.

If the system cannot reliably retrieve the correct information, improve the documentation and retrieval system before expanding the use case.

If routine questions work well but account-specific questions remain unreliable, retain the narrow scope instead of expanding simply because the prototype is popular.

# 16. Practical Exercise: Evaluate an AI Opportunity

## Scenario

You are the Product Manager of a digital investment platform.

The support team receives many questions about:
- Investment fees.
- Portfolio performance.
- Transaction status.
- Account restrictions.
- Basic investment concepts.

The company wants to introduce an AI assistant to reduce support workload.

## Task 1: Define the problem

Write a problem statement for one specific user segment.

Describe:
- The user's task.
- The current difficulty.
- The frequency or importance of the problem.
- The impact on customers and the business.

## Task 2: Compare solutions

Compare at least three alternatives:
- Improving the existing interface.
- Improving search or deterministic automation.
- Introducing generative AI.

Identify the circumstances under which each alternative would be preferable.

## Task 3: Map uncertainty

List at least six critical assumptions across desirability, feasibility, data readiness, workflow, economics, and risk.

Rank them by impact and uncertainty.

## Task 4: Design experiments

For the three highest-priority assumptions, specify:
- The hypothesis.
- The experiment.
- The evidence you will collect.
- The decision threshold.
- The next step if the hypothesis fails.

## Task 5: Build an evaluation plan

Create an evaluation dataset with at least 30 representative cases.

Include:
- Routine questions.
- Questions requiring current data.
- Ambiguous questions.
- Missing information.
- High-impact scenarios.
- Requests outside the supported scope.

Define a task-specific quality rubric.

## Task 6: Define success metrics

Select:
- Two customer outcome metrics.
- Two operational metrics.
- Two AI quality metrics.
- Three safety or risk guardrails.
- One economic metric.

Explain why each metric is important.

## Task 7: Make a go/no-go recommendation

Based on your hypothetical evidence, decide whether to:
- Proceed.
- Iterate.
- Narrow the scope.
- Stop.

Clearly distinguish actual evidence from assumptions.

# 17. Final Challenge: An AI-Powered Insurance Comparison Product

## Business context

You are the Product Manager of an online platform selling individual supplementary health insurance.

Customers struggle to compare plans because premiums, deductibles, coverage limits, exclusions, and waiting periods vary.

The company wants to launch an AI-powered comparison assistant.

Leadership believes it can improve conversion and reduce customer support costs, but there is limited evidence about technical feasibility or customer demand.

You have 90 days to determine whether the opportunity should be scaled.

## Your challenge

Prepare a complete discovery and evaluation plan.

### Part A: Validate the problem

Identify the main customer segment and the specific comparison problem.

Describe the research you would conduct to determine:
- How customers compare plans today.
- Which information is most confusing.
- How the confusion affects purchasing decisions.
- Which users are most likely to benefit.
- Whether a non-AI improvement could solve the problem.

### Part B: Prioritize uncertainties

Create an assumption map covering:
- Customer desirability.
- Data readiness.
- Model feasibility.
- Source grounding.
- User trust.
- Operational workflow.
- Economics.
- Privacy and risk.

Rank the assumptions and explain which must be tested first.

### Part C: Design the experiments

Propose at least four experiments, such as:
- Customer interviews.
- A prototype comparison interface.
- A concierge comparison service.
- A technical retrieval and generation spike.
- An evaluation of model outputs.
- A limited human-reviewed pilot.

For each experiment, define the hypothesis, method, evidence, and decision threshold.

### Part D: Build the evaluation dataset

Design a dataset of at least 50 test cases covering:
- Routine coverage questions.
- Comparisons involving deductibles.
- Coverage limits.
- Exclusions.
- Waiting periods.
- Missing information.
- Conflicting policy documents.
- Incorrect customer assumptions.
- Requests for definitive claim-approval decisions.
- Cases that require human escalation.

Specify how you would separate development examples from holdout evaluation cases.

### Part E: Define the quality rubric

Set measurable acceptance criteria for:
- Factual correctness.
- Completeness.
- Source grounding.
- Clarity.
- Appropriate uncertainty.
- Safe escalation.
- Unauthorized disclosure.

Explain which criteria are mandatory gates and which can be improved after the initial release.

### Part F: Design the online pilot

Specify:
- The initial user group.
- The baseline experience.
- The rollout method.
- The primary outcome metric.
- Guardrail metrics.
- How you will handle failures.
- How you will collect customer and reviewer feedback.

Explain how you will avoid interpreting increased engagement as proof of improved decision quality.

### Part G: Evaluate economics

Estimate the expected cost per successful comparison.

Include:
- Model usage.
- Retrieval.
- Infrastructure.
- Human review.
- Rework.
- Support.
- Ongoing evaluation and monitoring.

Compare the expected total cost with the current process and explain what evidence would justify the investment.

### Part H: Create a 90-day roadmap

**Days 1–30: Problem and data discovery**

Define the problem, research customers, audit data sources, and establish a baseline.

**Days 31–60: Feasibility and evaluation**

Build a limited prototype, create the evaluation dataset, test model approaches, and investigate failure modes.

**Days 61–90: Workflow validation and decision**

Run a controlled pilot if the minimum quality and risk requirements are met, measure real outcomes, and decide whether to scale, narrow, iterate, or stop.

For each phase, define deliverables, owners, and exit criteria.

### Part I: Present the executive recommendation

Summarize:
1. The customer problem.
2. The evidence supporting the opportunity.
3. Why AI is or is not the appropriate solution.
4. The proposed initial scope.
5. The evaluation results required for launch.
6. The main risks.
7. The expected economic value.
8. The decision criteria for scaling.

The goal is not to prove that AI can generate a plausible comparison. It is to establish whether the complete product helps customers make better-informed decisions, meets its quality and risk requirements, and creates enough value to justify ongoing investment.

# Key Takeaways

1. **Start with a real problem, not a model capability.** AI is a solution option, not a product strategy.

2. **Compare AI with simpler alternatives.** Deterministic software, better interfaces, search, and improved workflows may solve the problem more effectively.

3. **Identify the most important uncertainties early.** Test the assumptions that could invalidate the investment before spending heavily on implementation.

4. **Evaluate desirability, feasibility, viability, and risk together.** A technically impressive model does not guarantee a successful product.

5. **Use representative evaluation datasets.** Include routine tasks, edge cases, missing information, conflicting sources, and high-impact scenarios.

6. **Define quality for the actual task.** Correctness, grounding, completeness, uncertainty, and safe behavior may matter more than general fluency.

7. **Separate offline evaluation from real-world validation.** Test datasets reveal technical weaknesses; online pilots establish whether the product improves actual workflows.

8. **Compare candidates against the same criteria.** The best solution must meet minimum requirements for quality, latency, cost, privacy, and operational reliability.

9. **Measure total cost per successful task.** Include review, rework, infrastructure, and error-related costs—not only model usage.

10. **Set decision thresholds before experiments.** This reduces confirmation bias and makes go/no-go decisions more credible.

11. **Treat failure analysis as a product capability.** Determine whether failures originate in data, retrieval, generation, business logic, or workflow design.

12. **Narrowing scope is a legitimate success.** A focused AI product that reliably solves one important problem is often more valuable than a broad assistant that performs inconsistently.

13. **Continue evaluation after launch.** Changes to models, prompts, data, and user behavior can affect quality over time.

# Preview of Day 90

**Topic: AI Product Metrics & Experimentation**

Tomorrow, we will focus on measuring AI product performance after a prototype or product has been introduced.

You will learn about:
- AI quality metrics versus traditional product metrics.
- Task success, groundedness, factual correctness, and refusal quality.
- Offline evaluation versus online experimentation.
- Measuring customer and business outcomes.
- Defining guardrails for high-impact AI products.
- A/B testing AI experiences.
- Handling stochastic outputs and experiment variability.
- Monitoring quality, latency, and cost in production.
- Detecting regressions and model drift.
- Building an AI product measurement framework.

The central question will be: **How can a Product Manager demonstrate that an AI product is improving real customer outcomes without overlooking quality, safety, and economic trade-offs?**
