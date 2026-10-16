# Day 90: AI Product Metrics & Experimentation

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain why measuring AI products requires more than traditional product analytics.
- Distinguish business outcomes, user outcomes, task success, model quality, and system performance.
- Select meaningful metrics for different AI product types.
- Design an AI evaluation framework with primary metrics and guardrails.
- Understand offline evaluation, online experiments, A/B testing, and human evaluation.
- Handle variability in AI outputs when comparing product changes.
- Measure hallucinations, grounding, abstention, tool-use accuracy, and task completion.
- Understand common statistical pitfalls in AI experimentation.
- Monitor AI products after launch and detect quality regressions.
- Build an experimentation plan for an AI-powered fintech product.

# 1. Why AI Product Metrics Are Different

Traditional product analytics often measure user behavior and business outcomes.

For example, a product manager for a cryptocurrency exchange might track:

- Registration conversion.
- KYC completion.
- First deposit rate.
- First trade conversion.
- Trading volume.
- Retention.
- Revenue per active customer.

These metrics help determine whether the product is creating business value.

However, they do not necessarily reveal whether an AI feature is performing well.

Imagine an exchange launches an AI assistant that explains transaction fees. After launch:

- Feature adoption increases.
- Session duration increases.
- Customer questions increase.
- Trading activity increases.

Are these positive results?

Not necessarily.

Customers may be spending more time because the assistant is confusing. More questions could indicate that users are engaging with the feature, but they could also indicate that its answers are incomplete. Increased trading activity might have nothing to do with the assistant's quality.

AI products need a measurement framework that connects technical behavior to customer outcomes and business value.

## 1.1 The five layers of AI product measurement

A useful framework contains five layers.

### Layer 1: Business outcomes

Does the product create value for the business?

Examples:
- Revenue.
- Customer retention.
- Support cost reduction.
- Conversion.
- Cost per successful task.
- Customer lifetime value.

### Layer 2: User outcomes

Does the product help users achieve their goals?

Examples:
- Time saved.
- Successful task completion.
- Reduced confusion.
- Improved comprehension.
- Fewer repeated attempts.
- Greater confidence in a decision.

### Layer 3: Task and output quality

Does the AI perform the intended task correctly?

Examples:
- Factual correctness.
- Groundedness.
- Completeness.
- Relevance.
- Appropriate uncertainty.
- Correct tool execution.

### Layer 4: System performance

Can the product deliver the experience reliably and efficiently?

Examples:
- Latency.
- Error rate.
- Availability.
- Timeout rate.
- Token consumption.
- Cost per request.
- Retrieval failures.

### Layer 5: Safety and risk

Does the product avoid unacceptable harm?

Examples:
- Unauthorized data disclosure.
- Critical factual errors.
- Incorrect financial actions.
- Unsafe recommendations.
- Failure to escalate high-risk cases.
- Policy violations.

These layers are related, but they are not interchangeable.

A system can have excellent availability and still produce incorrect answers. It can produce correct answers but fail to improve the user experience. It can improve conversion while introducing unacceptable risk.

A strong measurement framework connects all five layers.

# 2. Start With the Product Outcome

Before selecting AI metrics, define what the product is supposed to accomplish.

Consider three different AI features:

1. An assistant that explains transaction fees.
2. An AI tool that drafts support responses.
3. An assistant that helps customers compare supplementary health insurance plans.

Although all three use AI, they require different definitions of success.

## 2.1 Define the intended user task

For a transaction-fee assistant:

"The customer can understand the applicable fee and why it applies to their transaction."

For a support-response drafting tool:

"The support agent can produce an accurate, appropriate response with less effort."

For an insurance comparison assistant:

"The customer can compare relevant plan differences and make a better-informed purchasing decision."

These task definitions are more useful than generic goals such as "increase AI engagement."

## 2.2 Build a metric tree

A metric tree connects the business objective to measurable intermediate outcomes.

Example: AI support assistant for a crypto exchange.

**Business objective:** Reduce the cost of handling routine support requests without reducing customer satisfaction or answer quality.

Supporting metrics:

- **Task success:** Percentage of requests resolved correctly.
- **Efficiency:** Median handling time.
- **Quality:** Percentage of responses requiring material correction.
- **Customer outcome:** Customer satisfaction and repeat-contact rate.
- **Economics:** Cost per successfully resolved request.
- **Risk:** Critical error rate and privacy incidents.

The primary metric should reflect the outcome that matters most.

For this use case, cost per successfully resolved request may be a useful primary metric, provided that quality and safety requirements are treated as mandatory guardrails.

A cheaper process is not a success if it creates more incorrect answers or unresolved customer problems.

# 3. Traditional Product Metrics Still Matter

AI metrics complement traditional product metrics; they do not replace them.

## 3.1 Adoption metrics

These describe whether users discover and use the feature.

Examples:
- Feature adoption rate.
- Eligible users who activate the feature.
- Weekly active users.
- Percentage of relevant tasks routed through AI.
- Repeat usage.
- Feature abandonment rate.

Define the denominator carefully.

For example:

AI adoption rate = Users who use the AI feature / Eligible users

Using all users as the denominator can distort the result if only a subset of customers has access to the feature.

Adoption shows reach, not quality or value.

## 3.2 Engagement metrics

Examples:
- Sessions per user.
- Questions per session.
- Follow-up rate.
- Conversation length.
- Feature retention.

These metrics require interpretation.

A high follow-up rate could indicate that customers find the assistant useful for exploration. It could also indicate that the first answer failed to resolve the problem.

A long conversation could indicate deeper engagement or unnecessary back-and-forth.

Whenever possible, interpret engagement alongside task completion, quality, and user feedback.

## 3.3 Conversion and retention metrics

Depending on the use case, AI may influence:

- Registration completion.
- Purchase conversion.
- First transaction completion.
- Subscription renewal.
- Repeat purchase.
- Retention.
- Churn.

Be careful about attribution.

Customers who voluntarily use an AI feature may already be more engaged than customers who do not. A simple comparison between users and non-users cannot reliably establish that the feature caused higher retention.

Controlled experiments can help isolate the feature's effect.

# 4. Measure AI Task Success

Task success is often more useful than counting generated answers.

A system can produce an answer for nearly every request without actually solving the user's problem.

## 4.1 Define success explicitly

Consider an AI assistant that explains a delayed cryptocurrency deposit.

A successful task may require:
- Retrieving the correct transaction status.
- Using current and authorized data.
- Explaining the relevant processing state.
- Avoiding unsupported promises.
- Providing an appropriate next step.
- Escalating when the case requires human intervention.

A fluent response that incorrectly states that the deposit has been credited is not successful.

## 4.2 Task success rate

A basic formula is:

Task success rate = Successfully completed tasks / Eligible attempted tasks

The important work is defining "successfully completed."

Possible evidence includes:
- A deterministic system check.
- A verified final outcome.
- A qualified human review.
- A user confirming completion, supported by other evidence where needed.

User confirmation alone may be insufficient for high-impact tasks. A customer might believe an incorrect answer.

## 4.3 Measure partial success

Some tasks have multiple steps.

For example, an insurance comparison assistant may need to:
1. Identify the customer's priorities.
2. Retrieve the relevant plan information.
3. Compare coverage and exclusions.
4. Explain important trade-offs.
5. Help the customer identify suitable next steps.

A single binary success metric can hide where the workflow fails.

Consider measuring completion at important stages and identifying the most common point of abandonment or failure.

## 4.4 Separate attempt success from user success

An AI response can pass an internal quality check without helping the user accomplish the task.

Conversely, a user might complete a task despite an imperfect AI response because they already know the answer.

Where feasible, measure both:
- **System-level success:** Did the AI meet the defined quality and execution criteria?
- **User-level success:** Did the user accomplish the intended goal?

This distinction is especially important for complex tasks.

# 5. Core AI Quality Metrics

AI quality metrics should be selected based on the task rather than adopted as a universal checklist.

## 5.1 Factual correctness

Measures whether the claims in the output are accurate.

Example:

A customer asks whether a particular insurance plan covers outpatient diagnostic tests.

The assistant says that the plan covers the service up to a stated limit.

The answer is correct only if that statement matches the applicable policy terms and conditions.

Possible measurement approaches:
- Comparison against authoritative data.
- Deterministic checks for structured values.
- Human domain-expert review.
- A validated automated evaluator.

For high-impact facts, prioritize authoritative verification over a model's confidence in its own answer.

## 5.2 Groundedness

Groundedness measures whether factual claims are supported by the information available to the system.

A response can be factually correct by coincidence but still be unsupported by the retrieved evidence.

For a retrieval-augmented generation system, assess whether:
- The relevant source was retrieved.
- The source supports the answer.
- The answer introduces unsupported claims.
- Citations identify the correct source passages.

Groundedness does not guarantee truth. A source can itself be outdated or incorrect.

Therefore, grounding must be evaluated alongside source quality and factual correctness.

## 5.3 Completeness

Measures whether the response includes all information required to satisfy the task.

For an insurance comparison, completeness may require mentioning:
- Premium.
- Deductible.
- Relevant coverage limits.
- Important exclusions.
- Waiting periods, when applicable.

A concise answer can still be incomplete if it omits a critical qualification.

## 5.4 Relevance

Measures whether the response addresses the actual question.

A response may contain correct information but fail to answer the user's concern.

For example, a customer asks why a withdrawal is delayed. A generic explanation of blockchain technology may be accurate but irrelevant if the system has access to the customer's actual withdrawal status.

## 5.5 Consistency

Measures whether similar cases receive appropriately similar treatment.

Consistency does not require identical wording.

It requires that equivalent situations receive compatible factual answers and that meaningful differences in inputs lead to appropriate differences in outputs.

Test consistency using repeated runs, paraphrased questions, and equivalent scenarios where appropriate.

## 5.6 Appropriate abstention

Sometimes the correct behavior is not to answer.

An assistant should recognize when:
- The required data is missing.
- Sources conflict.
- The question is outside the supported scope.
- The request requires a human decision.
- The system cannot verify a critical claim.

Measure whether the system abstains when it should and answers when it has sufficient evidence.

Two useful concepts are:

**Coverage:** The proportion of requests for which the system provides a substantive answer.

**Selective accuracy:** The accuracy among requests the system chooses to answer.

Increasing coverage may lower accuracy if the system begins answering more difficult questions. Reducing coverage may improve accuracy but make the product less useful.

The product manager must balance these measures according to the task's risk.

# 6. Metrics for AI Tool Use and Agents

Some AI products do more than generate text. They retrieve records, call APIs, update information, or execute workflows.

These products need execution metrics in addition to language-quality metrics.

## 6.1 Tool selection accuracy

Did the system select the appropriate tool for the task?

For example, did a transaction-status assistant call the authoritative transaction-status API rather than trying to infer the status from general documentation?

## 6.2 Argument correctness

Were the correct parameters supplied?

For example:
- Correct transaction identifier.
- Correct account context.
- Correct date range.
- Correct currency.
- Correct amount.

A valid tool call with incorrect arguments can still produce a dangerous result.

## 6.3 Execution success

Did the tool complete successfully?

Track:
- API success rate.
- Timeout rate.
- Invalid argument rate.
- Authorization failures.
- Retry rate.
- Duplicate execution rate.

## 6.4 End-to-end task completion

A successful API call does not necessarily mean the user's task is complete.

For example, a tool might successfully retrieve a transaction record while the assistant misinterprets the result.

Measure the entire workflow, including data retrieval, interpretation, action, and final communication.

## 6.5 Action safety

For systems capable of changing records or initiating transactions, measure whether actions were:
- Authorized.
- Within policy.
- Properly confirmed where required.
- Executed only once when appropriate.
- Correctly recorded and auditable.

For high-impact operations, use deterministic validation and explicit authorization controls rather than relying on the model alone.

# 7. Latency, Reliability, and Cost

A high-quality answer can still create a poor product experience if it arrives too late or costs too much.

## 7.1 Latency

Measure:
- Time to first response or first token.
- Total response time.
- Median latency.
- 95th percentile latency.
- 99th percentile latency, where appropriate.
- Tool and retrieval latency.
- Time spent waiting for human review.

Average latency can hide a long tail of very slow requests.

For interactive assistants, the 95th percentile may be particularly useful because it shows the experience of slower requests rather than only the average.

Choose latency targets according to the workflow. A simple FAQ answer and a complex document analysis task may require different expectations.

## 7.2 Reliability

Track:
- Successful request rate.
- Timeout rate.
- Model provider errors.
- Retrieval failures.
- Tool failures.
- Malformed outputs.
- Fallback activation rate.
- Availability of critical dependencies.

Operational reliability and AI quality are different dimensions.

A system may be available 99.9% of the time while producing incorrect answers. Both must be measured.

## 7.3 Cost per request

Cost per request may include:
- Input and output tokens.
- Model calls.
- Retrieval.
- Reranking.
- Embedding generation.
- External API usage.
- Infrastructure.
- Human review, when applicable.

Some requests require multiple model calls or retries, so the cost of one user task can vary considerably.

## 7.4 Cost per successful task

A more decision-useful metric is:

Cost per successful task = Total attributable cost / Number of successfully completed tasks

Suppose an AI support workflow costs $4,000 per month and completes 80,000 tasks successfully.

Cost per successful task:

$4,000 / 80,000 = $0.05

If the team reduces model usage but task success falls, cost per successful task could increase.

For this reason, optimize economics and quality together.

# 8. Safety and Risk Metrics

Safety metrics should be specific to the product's possible harms.

For a financial product, an incorrect explanation of a fee is different from an unauthorized transfer or a misleading investment recommendation.

## 8.1 Critical error rate

Measure the rate of errors classified as critical under a predefined rubric.

Examples:
- Incorrectly reporting that a transaction is complete.
- Fabricating an insurance coverage guarantee.
- Disclosing another customer's information.
- Initiating an unauthorized financial action.

A useful metric is:

Critical error rate = Critical failures / Evaluated opportunities

The denominator must be clearly defined. It could be evaluated tasks, action attempts, or another relevant unit.

Do not compare critical error rates across teams or releases if their denominators and case distributions differ.

## 8.2 Escalation quality

An AI assistant should recognize when a human is needed.

Measure:
- Correct escalation rate.
- Missed escalation rate.
- Unnecessary escalation rate.
- Time to reach a human.
- Outcome after escalation.

A low escalation rate is not automatically good. The assistant might simply be failing to recognize difficult cases.

Likewise, excessive escalation may eliminate the product's economic benefit.

## 8.3 Privacy and authorization

Track:
- Unauthorized data access attempts.
- Confirmed disclosure incidents.
- Permission-check failures.
- Sensitive-data leakage in outputs.
- Inappropriate logging or retention of sensitive information.

Some events should be treated as incident triggers rather than averaged into a normal quality score.

## 8.4 Distributional performance

Overall quality can conceal uneven performance across customer groups, languages, task types, or document formats.

Where relevant and lawful, examine performance by:
- Language.
- User segment.
- Task category.
- Input format.
- Accessibility needs.
- Risk level.

Use appropriate privacy protections and avoid collecting sensitive information without a justified purpose.

# 9. Design an AI Metric Hierarchy

A practical metric hierarchy connects the product goal to operational behavior.

Consider an AI assistant for support agents.

## North Star metric

**Successfully resolved support requests per unit of total handling cost**, subject to mandatory quality and risk requirements.

Supporting metrics:

**Customer outcome**
- Resolution rate.
- Repeat-contact rate.
- Customer satisfaction.

**Agent productivity**
- Median handling time.
- Time spent reviewing AI drafts.
- Material correction rate.

**AI quality**
- Factual correctness.
- Groundedness.
- Completeness.
- Appropriate escalation.

**System performance**
- Latency.
- Tool success rate.
- Failure rate.
- Cost per task.

**Risk guardrails**
- Critical error rate.
- Unauthorized disclosure.
- Incorrect action rate.

The North Star metric provides direction, while the supporting metrics explain why the result changed.

Do not collapse every metric into one composite score unless there is a defensible reason. A weighted average can conceal a critical failure.

# 10. Offline Evaluation Versus Online Experimentation

These approaches answer different questions.

## 10.1 Offline evaluation

Offline evaluation tests a candidate system against a fixed dataset.

It is useful for:
- Comparing prompts.
- Comparing model versions.
- Testing retrieval approaches.
- Checking structured outputs.
- Detecting regressions.
- Evaluating rare but important cases.

Advantages:
- Fast iteration.
- Repeatable comparisons.
- Lower exposure to customer risk.
- Easier diagnosis of specific failures.

Limitations:
- The dataset may not represent real traffic.
- Evaluation criteria may be incomplete.
- Offline quality may not predict user behavior.
- The system may perform differently in production.

## 10.2 Online experimentation

Online experiments measure behavior and outcomes in a live product environment.

They can help answer:
- Does the feature improve task completion?
- Does it reduce total handling time?
- Do customers understand the result?
- Does the new version affect retention or conversion?
- Does the feature create additional support work?

Online experiments should not be used as an excuse to expose users to unacceptable risks.

For high-impact cases, evaluate the system offline and use controlled, human-reviewed, or otherwise appropriately constrained pilots before wider deployment.

## 10.3 Use both approaches

A practical sequence is:

1. Define the user outcome.
2. Establish a baseline.
3. Build a representative offline dataset.
4. Evaluate the candidate system.
5. Fix critical weaknesses.
6. Run a controlled pilot.
7. Measure real-world outcomes and guardrails.
8. Investigate failures.
9. Update the evaluation dataset.
10. Repeat before expanding the rollout.

Offline evaluation helps establish whether the system is technically ready. Online experimentation helps determine whether it creates value in actual use.

# 11. A/B Testing AI Products

A/B testing compares two product experiences using an appropriate assignment method and outcome measurement.

For example:

- **Control:** Existing support-agent workflow.
- **Treatment:** Support-agent workflow with AI-generated drafts.

The goal is to estimate the effect of offering the AI-assisted workflow, not merely to compare the people who choose to use it with those who do not.

## 11.1 Define the hypothesis

A good hypothesis identifies the expected effect and the constraints.

Example:

"Providing AI-generated drafts to eligible support agents will reduce median handling time by at least 15% without increasing material correction rates or critical errors."

This is better than "AI will make support more efficient."

## 11.2 Choose the experimental unit

Possible units include:
- Individual users.
- Support agents.
- Teams.
- Customer accounts.
- Sessions.
- Transactions.

The correct unit depends on how the feature affects behavior and whether participants influence one another.

If agents share answers or change their behavior after using AI, randomizing individual tickets may create contamination. Randomizing by agent or team may be more appropriate, though it may require a larger sample.

## 11.3 Define the primary metric

Choose one primary outcome for the experiment.

Examples:
- Median handling time.
- Successfully resolved tasks per agent-hour.
- Task completion rate.
- Customer comprehension score.

Secondary metrics help explain the result, but the primary metric should be selected before the experiment begins.

## 11.4 Define guardrails

For the support assistant:
- Critical error rate.
- Material correction rate.
- Repeat-contact rate.
- Customer satisfaction.
- Cost per successful resolution.

The experiment should not be considered successful if the primary metric improves while a mandatory guardrail is breached.

## 11.5 Account for AI variability

AI outputs can vary across runs, even with identical inputs.

There may also be variability in:
- User questions.
- Context retrieved.
- Tool responses.
- Model provider behavior.
- Latency.
- Human review.

A good experimental design should account for the variation that matters to the intended decision.

Where possible:
- Use a stable evaluation dataset for pre-launch comparisons.
- Record model, prompt, configuration, and data versions.
- Preserve the same evaluation criteria across candidates.
- Repeat runs for important nondeterministic cases.
- Use sufficient sample sizes for online tests.
- Analyze outcomes with methods appropriate to the experimental unit.

Repeatedly testing until a desired result appears can produce misleading conclusions.

# 12. Statistical Thinking for AI Experiments

AI experimentation introduces uncertainty at several levels: user behavior, model output, evaluation judgments, and system performance.

Product managers do not need to become statisticians, but they should understand the most important pitfalls.

## 12.1 Distinguish statistical significance from practical significance

Suppose an experiment detects a statistically significant improvement in task completion from 80.0% to 80.3%.

The result may be statistically detectable with enough data, but the improvement might be too small to justify the cost and complexity of the new system.

Evaluate:
- The size of the effect.
- The uncertainty around the estimate.
- The business value of the effect.
- The implementation and operating cost.
- Any changes in risk.

## 12.2 Understand confidence intervals

A confidence interval expresses uncertainty around an estimated effect under the assumptions of the statistical method.

A narrow interval indicates greater precision than a wide interval.

When evaluating an experiment, consider whether the plausible range of outcomes supports the decision.

For example, an estimated reduction in handling time of 12% with a wide interval might be less convincing than an estimated 10% reduction with a narrow interval, depending on the required threshold and cost of being wrong.

## 12.3 Avoid peeking and stopping too early

Repeatedly checking results and stopping as soon as they look favorable can increase the probability of a false positive when the analysis does not account for repeated looks.

Use a predefined experiment duration or a valid sequential testing approach.

Do not keep extending an experiment only because the current result is disappointing, without a defensible analysis plan.

## 12.4 Beware of selection bias

Suppose customers who voluntarily use an AI assistant have higher retention than those who do not.

That does not prove the assistant increases retention.

More engaged customers may be more likely to try new features in the first place.

Randomized assignment can help estimate the effect of offering the feature, while observational analyses require careful adjustment and more cautious interpretation.

## 12.5 Use the right denominator

For example:
- Error rate per request.
- Critical error rate per high-risk request.
- Successful task rate per eligible task.
- Cost per completed task.
- Repeat-contact rate per resolved case.

A metric can appear to improve simply because the mix of requests changed.

Always define the denominator and segment results where meaningful.

# 13. Evaluating Model-as-Judge Systems

Some AI products use one model to evaluate the output of another.

This can be useful for scalable evaluation, but it introduces a measurement system that also requires validation.

## 13.1 Where model-based evaluation helps

A model-based evaluator may help assess:
- Relevance.
- Completeness.
- Instruction adherence.
- Writing clarity.
- Similarity to an acceptable answer.
- Whether an answer appears supported by supplied context.

## 13.2 Where it can fail

An evaluator may:
- Prefer fluent answers over correct ones.
- Miss subtle financial or legal inaccuracies.
- Penalize valid alternative wording.
- Judge outputs inconsistently.
- Share biases with the model being evaluated.

## 13.3 Validate the evaluator

Compare evaluator judgments with qualified human judgments on a representative sample.

Measure:
- Agreement.
- False acceptance of unacceptable outputs.
- False rejection of acceptable outputs.
- Performance by task category.
- Stability across evaluation runs.

For critical criteria, use deterministic checks or qualified human review wherever appropriate.

A model evaluator should not be treated as an unquestionable source of truth.

# 14. Production Monitoring and Regression Detection

Evaluation does not end when a feature launches.

Performance can change as the product, data, models, and user population evolve.

## 14.1 What can cause regression?

Examples include:
- A new model version.
- A prompt change.
- Modified retrieval settings.
- Updated source documents.
- Changes to an API.
- New user behavior.
- Higher traffic.
- A change in language or request distribution.
- An upstream system failure.

## 14.2 Version important components

For each evaluated output, record appropriate metadata such as:
- Model or provider version.
- Prompt version.
- Retrieval configuration.
- Knowledge-base version.
- Tool and API version.
- Evaluation rubric version.
- Timestamp.
- Relevant latency and cost measures.

Do not log unnecessary personal or sensitive information. Apply data minimization, access controls, and retention policies.

Versioning helps the team identify which change may have caused a regression.

## 14.3 Use regression suites

Whenever the team discovers a failure, consider adding a representative test case to the evaluation suite.

For example, if the assistant incorrectly interprets a specific fee exception, add a test case that checks the correct handling of that exception.

Before releasing a new prompt or model, run the regression suite to ensure previously solved problems have not returned.

## 14.4 Monitor real-world signals

Potential monitoring signals include:
- User correction or rejection of an answer.
- Repeated reformulation of the same question.
- Escalation.
- Abandonment.
- Support complaints.
- Human reviewer disagreement.
- Changes in task success.
- Latency and cost spikes.

These signals are useful, but none is a perfect measure of quality by itself.

For example, low user correction rates may mean the answers are excellent—or that customers cannot recognize errors.

Combine behavioral signals with direct evaluation and outcome measurement.

# 15. Case Study: An AI Insurance Comparison Assistant

## Business context

An online insurance platform wants to help customers compare individual supplementary health insurance plans.

The assistant explains differences in:
- Premiums.
- Deductibles.
- Coverage limits.
- Exclusions.
- Waiting periods.

The business objective is to help customers make informed decisions and improve purchase completion without creating misleading coverage expectations.

## Step 1: Define the outcome

The primary customer outcome is successful completion of a comparison with an accurate understanding of the material differences between relevant plans.

Potential business outcomes include:
- Higher purchase conversion among eligible users.
- Fewer support contacts caused by comparison confusion.
- Lower abandonment.
- Reduced time to complete a comparison.

Conversion alone is not sufficient because an inaccurate explanation could increase purchases while harming customers.

## Step 2: Select quality metrics

The team defines:
- Factual correctness of policy details.
- Completeness of important comparison dimensions.
- Grounding in current policy sources.
- Appropriate handling of missing information.
- Correct escalation for questions requiring human judgment.

Critical coverage errors and unauthorized disclosures are mandatory guardrails.

## Step 3: Create the evaluation dataset

The dataset includes common comparison questions, deductible calculations, exclusion questions, conflicting policy versions, missing details, and requests for definitive claim approval.

The team separates development examples from holdout cases.

## Step 4: Run offline evaluation

The candidate assistant is tested against the evaluation dataset.

Results are broken down by question category rather than relying only on the overall score.

If the assistant performs well on routine questions but fails on exclusions, the team investigates the source documents and retrieval process before considering a broader rollout.

## Step 5: Run a limited pilot

Eligible customers receive access to the assistant under appropriate safeguards.

The team measures:
- Comparison completion.
- Customer comprehension.
- Support contacts.
- Purchase conversion.
- Critical factual errors.
- Escalation quality.
- Cost per successful comparison.

The team also collects feedback about confusing or missing explanations.

## Step 6: Interpret the results

Suppose conversion increases but comprehension does not improve and customers increasingly misunderstand exclusions.

The feature should not be declared successful.

The team may need to redesign the comparison interface, make limitations more visible, improve source grounding, or narrow the assistant's scope.

The objective is not simply to help customers purchase more quickly. It is to help them make informed decisions while achieving sustainable business value.

# 16. Practical Exercise: Design an AI Measurement Framework

## Scenario

You are the Product Manager of a crypto exchange.

The company has introduced an AI support assistant that answers questions about deposits, withdrawals, transaction fees, and account restrictions.

Leadership wants to know whether the assistant should be rolled out to all customers.

## Task 1: Define the outcome

Write a clear product objective.

Distinguish:
- The business goal.
- The customer outcome.
- The AI task.
- The operational requirement.

## Task 2: Build the metric hierarchy

Define:
- One primary metric.
- Three supporting metrics.
- Three quality metrics.
- Three system performance metrics.
- At least three safety guardrails.

Explain why each metric is necessary.

## Task 3: Define success

Write explicit acceptance criteria for:
- Correct transaction-status explanations.
- Fee explanations.
- Requests requiring current account data.
- Questions requiring escalation.
- Unauthorized information requests.

Identify which failures should block rollout.

## Task 4: Design the experiment

Choose an appropriate comparison:
- Existing workflow.
- AI-assisted workflow.
- A different AI approach.

Specify:
- Experimental unit.
- Assignment method.
- Primary outcome.
- Guardrails.
- Duration or stopping rule.
- Sample-size considerations.
- Potential sources of bias.

## Task 5: Analyze hypothetical results

Suppose a pilot produces the following results:

| Metric | Existing workflow | AI-assisted workflow |
|---|---:|---:|
| Median handling time | 6.0 min | 4.5 min |
| Material correction rate | 3% | 5% |
| Customer satisfaction | 84% | 82% |
| Task success rate | 92% | 91% |
| Cost per handled request | $0.42 | $0.31 |

Answer the following:
1. What improved?
2. What deteriorated?
3. Is the experiment successful?
4. What additional evidence do you need?
5. What changes would you test next?
6. Would you expand, iterate, narrow the scope, or stop?

Do not treat lower cost or faster handling as sufficient evidence of success.

## Task 6: Define the monitoring plan

Specify:
- Which metrics require real-time monitoring.
- Which metrics can be evaluated daily or weekly.
- How critical incidents are handled.
- How new failures become regression tests.
- Which changes require re-evaluation before release.

# 17. Final Challenge: AI Metrics for a Fintech Product

You are the Product Manager of an investment platform introducing an AI assistant that explains portfolio performance and answers questions about transaction history.

The assistant can retrieve account data, summarize transactions, and explain common investment concepts. It is not intended to execute trades or make autonomous investment decisions.

Leadership expects improved engagement and lower support costs.

Your challenge is to create a complete measurement and experimentation strategy.

## Part A: Define the product outcome

Specify:
- The target customer segment.
- The primary customer task.
- The intended customer benefit.
- The business outcome.
- The limitations of the assistant.

Explain why engagement alone is not an adequate measure of success.

## Part B: Build the metric hierarchy

Create a metric tree covering:

**Business**
- Retention or support cost.
- Cost per successful task.
- Any relevant conversion or revenue impact.

**Customer**
- Task completion.
- Comprehension.
- Time to obtain an answer.
- Customer satisfaction.

**AI quality**
- Factual correctness.
- Groundedness.
- Completeness.
- Appropriate uncertainty.
- Correct use of account data.

**Operations**
- Latency.
- Tool success.
- Availability.
- Cost per task.

**Risk**
- Unauthorized disclosure.
- Incorrect financial information.
- Failure to escalate.
- Unsupported recommendations.

Choose one primary metric and justify your choice.

## Part C: Design the evaluation dataset

Create at least 50 test cases covering:
- Routine transaction-history questions.
- Portfolio performance explanations.
- Questions requiring calculations.
- Missing or conflicting data.
- Questions involving multiple transactions.
- Ambiguous time ranges.
- Outdated information.
- Unauthorized account requests.
- Requests for investment recommendations.
- Cases where the system should abstain.

Specify how expected behavior will be evaluated.

## Part D: Design offline evaluation

Define:
- The quality rubric.
- Minimum acceptance thresholds.
- Human review requirements.
- Automated checks.
- Failure categories.
- Holdout evaluation strategy.

Explain how you will avoid relying on one aggregate score.

## Part E: Design the online experiment

Compare the existing experience with the AI-assisted experience.

Define:
- The experimental unit.
- The primary metric.
- Secondary metrics.
- Guardrails.
- Assignment method.
- Required sample-size analysis.
- Experiment duration or stopping rule.
- How you will avoid selection bias.

Explain how the experiment will distinguish actual customer benefit from increased interaction.

## Part F: Define rollout and monitoring

Create a rollout plan with:
- Internal testing.
- A limited pilot.
- Controlled expansion.
- Broader release.

Specify the conditions required to move between stages.

Define how you will respond to:
- A sudden increase in incorrect answers.
- A model or prompt update.
- A retrieval outage.
- A privacy incident.
- A rise in cost per successful task.

## Part G: Evaluate economics

Estimate the total cost of a successfully completed task.

Include:
- Model usage.
- Data retrieval.
- Infrastructure.
- Human review.
- Support and rework.
- Monitoring and evaluation.

Compare this with the existing process and define what level of improvement would justify continued investment.

## Part H: Present your executive recommendation

Prepare a concise recommendation answering:

1. Is the assistant ready to launch?
2. Which customer tasks should be supported first?
3. What evidence demonstrates product value?
4. Which guardrails are mandatory?
5. What are the principal risks?
6. What should trigger rollback?
7. What evidence is needed before scaling?

The goal is to demonstrate that the assistant creates measurable customer value while maintaining acceptable quality, safety, and economics.

# Key Takeaways

1. **Measure outcomes, not just activity.** Adoption and engagement do not prove that an AI product solves a customer problem.

2. **Connect five measurement layers.** Business outcomes, user outcomes, task quality, system performance, and safety must be considered together.

3. **Define task success explicitly.** A generated response is not necessarily a successfully completed task.

4. **Choose task-specific AI metrics.** Correctness, groundedness, completeness, consistency, and appropriate abstention matter differently across products.

5. **Measure tool execution end to end.** A successful API call does not guarantee that the user's task was completed correctly.

6. **Use cost per successful task.** This captures the relationship between operating cost and actual output quality.

7. **Combine offline and online evaluation.** Offline tests identify technical weaknesses; online experiments establish real-world product impact.

8. **Predefine primary metrics and guardrails.** This reduces biased interpretation of experimental results.

9. **Account for variability and statistical uncertainty.** AI output variation, selection bias, insufficient sample sizes, and repeated statistical testing can mislead teams.

10. **Treat critical safety requirements as gates.** Improvements in conversion, speed, or cost cannot compensate for unacceptable high-impact failures.

11. **Monitor after launch.** Model, prompt, data, and user changes can introduce regressions.

12. **Turn failures into regression tests.** Every important failure should improve the team's ability to detect similar problems in the future.

13. **Make scaling evidence-based.** Expand only when the product meets its quality, risk, customer outcome, and economic requirements.

# Preview of Day 91

**Topic: Responsible AI & AI Product Risk**

Tomorrow, we will examine how Product Managers identify and manage risks throughout the AI product lifecycle.

You will learn about:
- Responsible AI principles and product accountability.
- Bias, fairness, and unequal outcomes.
- Privacy, data protection, and consent.
- Hallucinations and high-impact decision risks.
- Human oversight and escalation design.
- Transparency and user expectations.
- Threat modeling and adversarial inputs.
- Risk classification and mitigation planning.
- Governance, documentation, and auditability.
- Launch reviews and ongoing risk monitoring.

The central question will be: **How can a Product Manager build AI products that are useful and commercially viable without exposing customers or the business to unacceptable harm?**
