# Day 87: AI Product Management Fundamentals

## Introduction

Artificial intelligence is changing how products are built, how customers interact with software, and how companies create value. However, adding AI to a product does not automatically make it more useful, more competitive, or more profitable.

For Product Managers, the challenge is not simply to understand what AI can do. It is to determine **which customer problems benefit from AI, how to deliver that value reliably, and whether the resulting product is economically and operationally sustainable.**

Consider a fintech application that helps customers manage their money.

The team could introduce an AI chatbot that answers questions about transactions, an intelligent system that categorizes spending, a model that predicts cash-flow problems, or a recommendation system that suggests savings actions.

All four use AI-related techniques, but they solve different problems, require different data, introduce different risks, and need different evaluation methods.

A chatbot that generates convincing but incorrect financial information may damage trust. A spending categorization model that occasionally misclassifies a transaction may still be useful if users can correct it easily. A cash-flow prediction model may be valuable only if it predicts problems early enough for customers to act.

The technology is not the product strategy. The customer outcome is.

This lesson introduces the foundations of AI Product Management, including AI opportunities, feasibility, product discovery, evaluation, user experience, risk management, and economics. It prepares you for the more specialized topics covered in the following AI lessons.

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain how AI products differ from traditional software products.
- Distinguish between predictive AI, generative AI, recommendation systems, and rule-based automation.
- Identify customer problems that are appropriate for AI.
- Evaluate AI opportunities across customer value, technical feasibility, data availability, risk, and economics.
- Understand the roles of data scientists, machine-learning engineers, software engineers, designers, and domain experts.
- Define success metrics for AI-powered features.
- Design AI experiences that communicate uncertainty and preserve user trust.
- Recognize common AI product failure modes.
- Build a practical discovery and delivery plan for an AI feature.
- Decide when a simpler non-AI solution is preferable.

# 1. What Is an AI Product?

An AI product uses artificial intelligence to create or improve a customer or business outcome.

AI may be the central product capability, or it may operate behind the scenes to improve an existing workflow.

Examples include:

- A writing assistant that generates and revises content.
- A recommendation engine that personalizes a shopping experience.
- A fraud detection system that identifies suspicious transactions.
- A customer support assistant that retrieves information and drafts responses.
- A forecasting system that estimates future demand.
- A document processing system that extracts information from invoices.
- An insurance application that helps customers understand policy differences.

Not every AI product is a chatbot, and not every product containing AI is fundamentally an AI product.

A traditional e-commerce platform might use a machine-learning model to improve search ranking. AI enhances the product without defining the entire customer experience.

By contrast, an AI coding assistant may rely on generative AI for most of its core functionality.

## 1.1 AI as a feature versus AI as the product

**AI as a feature**

AI improves an existing workflow.

Examples:
- Automatically categorizing transactions.
- Suggesting email replies.
- Detecting unusual activity.
- Summarizing customer support conversations.

**AI as the product**

AI is central to the product's value proposition.

Examples:
- A conversational financial research assistant.
- An AI-powered document analysis application.
- A coding assistant.
- A system that generates personalized marketing campaigns.

This distinction matters because the evaluation and operating requirements may differ.

A categorization feature can be evaluated against known transaction labels. A conversational financial assistant may need to be evaluated across factual accuracy, relevance, consistency, safety, context handling, and the quality of the overall customer interaction.

The more central AI is to the experience, the more important it becomes to design around its strengths and limitations.

## 1.2 AI does not remove the need for product fundamentals

AI products still need:

- A clearly defined customer problem.
- A differentiated value proposition.
- A viable business model.
- A usable customer experience.
- Reliable execution.
- Distribution and adoption.
- Measurable outcomes.
- Security and privacy controls.

An AI product can fail for the same reasons as any other product: weak demand, poor positioning, difficult onboarding, insufficient distribution, or an unsustainable business model.

It can also fail for AI-specific reasons, such as unreliable outputs, inadequate evaluation, or changing model behavior.

A strong AI product strategy addresses both categories.

# 2. How AI Products Differ From Traditional Software

Traditional software usually follows explicitly programmed logic. Given the same inputs and state, the system generally produces the same defined result.

AI systems may infer patterns from data or generate outputs based on learned representations. Their behavior can be probabilistic, sensitive to context, and difficult to specify exhaustively through traditional requirements.

This difference affects product discovery, delivery, testing, and operations.

## 2.1 Deterministic versus probabilistic behavior

Consider a money-transfer form.

Traditional software can validate that:
- The amount is greater than zero.
- The recipient account field is populated.
- The user has completed required authorization steps.

These rules can be expressed explicitly.

Now consider an AI assistant answering, "Why was my transfer delayed?"

The answer may depend on transaction records, processing status, bank information, and the assistant's interpretation of that data.

Even when the underlying facts are correct, the model may misinterpret a record, omit an important qualification, or produce an unsupported explanation.

This means an AI feature cannot be evaluated solely by checking whether the software runs without errors.

The team must also assess the quality and appropriateness of the outputs.

## 2.2 Quality is multidimensional

For a traditional form, quality might focus on completion rate, error rate, and response time.

For an AI assistant, quality could include:

- Factual correctness.
- Relevance.
- Completeness.
- Consistency.
- Instruction following.
- Safety.
- Appropriate handling of uncertainty.
- User satisfaction.
- Task completion.

These dimensions may conflict.

For example, a more detailed answer may contain more useful context but also create more opportunities for unsupported claims. A conservative assistant may reduce risky outputs but decline too many legitimate requests.

The Product Manager must determine which dimensions matter most for the intended use case.

## 2.3 Data becomes part of the product capability

Traditional software often depends on data, but many AI systems depend on data quality and coverage in particularly direct ways.

A fraud detection model trained on historical transactions may perform poorly when transaction patterns change.

A document extraction model may work well with common invoices but struggle with unusual formats.

A recommendation system may perform poorly for new customers with little behavioral history.

Consequently, data availability, quality, freshness, permissions, and representativeness become central product considerations.

## 2.4 Product behavior may change without a conventional feature release

AI behavior can change when:
- A model provider updates a model.
- Training or evaluation data changes.
- A prompt or retrieval configuration changes.
- The customer population changes.
- The distribution of incoming data shifts.
- The system integrates new tools or information sources.

A third-party model upgrade may improve some tasks and degrade others.

Product teams therefore need version tracking, regression evaluation, monitoring, and change management.

## 2.5 AI introduces new cost structures

Traditional software often has substantial initial development costs and relatively low marginal costs for each additional user.

AI products may incur recurring inference costs, data processing costs, retrieval costs, and specialized infrastructure expenses.

A feature that becomes more popular can become less profitable if usage grows faster than revenue.

For example, a free assistant that generates lengthy responses for every user action may produce impressive engagement but create an unsustainable cost per active user.

AI product decisions must consider both the value created and the cost of producing that value.

# 3. Understand the Main Types of AI Capabilities

Different AI approaches are suited to different problems. Choosing the right approach starts with understanding what the system must do.

## 3.1 Predictive AI

Predictive AI estimates a future outcome or an unknown value from available data.

Examples:
- Predicting the likelihood of a payment default.
- Forecasting product demand.
- Estimating customer churn.
- Detecting potentially fraudulent transactions.
- Predicting which customers may need additional support.

Typical output:

A score, probability, classification, forecast, or estimated value.

### Product implications

Predictive models require appropriate historical data, meaningful target definitions, and evaluation against known outcomes.

They may need to be evaluated using precision, recall, calibration, ranking quality, or forecasting error, depending on the task.

A high-performing model is not automatically a good product. Its predictions must lead to useful actions.

For example, predicting that a customer may churn is less valuable than identifying an intervention that improves retention at an acceptable cost.

## 3.2 Generative AI

Generative AI creates new content, such as text, images, audio, video, or code.

Examples:
- Drafting customer support responses.
- Summarizing financial documents.
- Generating product descriptions.
- Explaining insurance coverage.
- Producing code suggestions.
- Creating conversational interfaces.

Large language models (LLMs) are commonly used for text-based generative AI.

### Product implications

Generative AI can handle flexible inputs and produce natural-language outputs, making it useful for tasks that are difficult to cover with fixed templates alone.

However, outputs may be inaccurate, inconsistent, incomplete, or inappropriate.

Evaluation usually requires more than a simple pass/fail test. It may combine reference-based checks, expert review, automated evaluations, user feedback, and real-world outcome measures.

## 3.3 Recommendation systems

Recommendation systems rank or suggest items based on customer preferences, context, behavior, or item characteristics.

Examples:
- Recommending products.
- Ranking relevant search results.
- Suggesting educational content.
- Recommending financial insights or next actions.
- Personalizing a marketplace experience.

Some recommendation systems use machine learning; others use rules or simpler statistical techniques.

### Product implications

Recommendations should be evaluated against the intended outcome, such as qualified conversion, customer satisfaction, retention, or successful task completion.

The team should also consider diversity, fairness, explainability, cold-start problems, and the risk of optimizing short-term clicks at the expense of long-term customer value.

## 3.4 Classification and extraction

These systems assign labels to information or extract structured fields from unstructured inputs.

Examples:
- Classifying transactions into spending categories.
- Extracting invoice totals and due dates.
- Identifying document types.
- Categorizing customer support tickets.
- Extracting information from insurance policy documents.

### Product implications

Define the expected output schema and what happens when information is missing, ambiguous, or unreliable.

For important fields, the product may require confidence thresholds, validation rules, or human review.

## 3.5 Rule-based automation

Rule-based automation uses explicitly defined conditions and actions.

Examples:
- Blocking transfers above a configured limit.
- Sending reminders before a payment deadline.
- Rejecting a form with missing mandatory fields.
- Routing a support request based on a known category.

Rule-based systems are not necessarily AI, and that is often an advantage.

They are generally easier to explain, test, and govern when the logic is well understood.

## 3.6 Choose the simplest approach that works

Consider a support team that receives 500 requests per day.

Possible solutions include:

1. Improve the support form and routing rules.
2. Add a keyword-based classifier.
3. Use a machine-learning model to categorize requests.
4. Introduce a generative AI assistant that summarizes requests and drafts responses.
5. Build an agent that retrieves information and executes approved actions.

Each option adds different levels of complexity and capability.

The correct choice depends on the actual problem, error tolerance, volume, data, workflow, and economics.

**Do not use AI just because AI is available. Use it when it provides a meaningful advantage over simpler alternatives.**

# 4. Find Problems That Are Suitable for AI

A common AI product mistake is starting with a technology demonstration and searching for a problem afterward.

A better approach is to start with customer pain and determine whether AI offers a compelling solution.

## 4.1 Look for the right problem characteristics

AI may be especially useful when a task involves:

- Large volumes of information.
- Unstructured text, images, audio, or documents.
- Patterns that are difficult to describe with fixed rules.
- Repetitive work requiring interpretation.
- Personalization across many users.
- Predictions based on historical patterns.
- Natural-language interaction.
- Complex information that users struggle to navigate.

These characteristics indicate possible opportunities, not proof that AI is the best solution.

For example, a document-heavy process may benefit from AI extraction, but ordinary optical character recognition and deterministic parsing may be sufficient if the document formats are standardized.

## 4.2 Assess the pain before the technology

Use these questions during discovery:

**Frequency**
- How often does the problem occur?
- How many customers or employees experience it?

**Severity**
- How much time, money, or effort does it cost?
- What happens when the problem is not solved?

**Current alternatives**
- How do users solve it today?
- What do existing tools fail to do?

**Willingness to change**
- Will customers trust an AI-assisted workflow?
- Will they change established behavior?

**Value**
- Does solving the problem increase revenue, reduce cost, improve quality, or reduce risk?

**Measurability**
- Can we determine whether the AI solution actually improves the outcome?

The last question is critical. If you cannot evaluate whether the system is useful, you cannot manage it responsibly.

## 4.3 Use a problem-value hypothesis

Write a testable hypothesis before building.

Example:

"We believe that helping customers understand differences between insurance plans using source-grounded explanations will reduce the time required to compare options and increase the percentage of customers who confidently select a suitable plan."

This hypothesis identifies:
- The target user.
- The problem.
- The proposed value.
- The expected behavioral outcome.

The team must still determine whether AI is necessary to deliver that value.

## 4.4 Separate the problem from the proposed feature

Suppose customers repeatedly ask, "Why is my payment pending?"

The initial proposal might be an AI chatbot.

But discovery could reveal that the real problem is missing transaction-status information.

A better solution might be:
- Clearer status labels.
- Estimated processing times.
- Proactive notifications.
- A structured explanation of common delays.

AI may still help with complex cases, but the majority of customer pain might be resolved through better product design.

This is an important PM discipline: avoid using an expensive, probabilistic capability to compensate for a basic product deficiency.

# 5. Evaluate AI Feasibility

Once a valuable problem has been identified, determine whether AI can solve it effectively in the intended context.

AI feasibility is not just a question for engineers. It affects scope, timelines, customer promises, and business viability.

## 5.1 Data feasibility

Ask:
- Do we have the required data?
- Are we permitted to use it for this purpose?
- Is it accurate and sufficiently representative?
- Is it current enough?
- Are important customer segments missing?
- Can we establish reliable reference answers or labels?
- Can the data be used safely in development and evaluation?

For example, a transaction categorization model needs suitable transaction information and reliable category labels.

An insurance explanation assistant needs accurate, current policy documents and a reliable way to identify which document and version applies to a particular plan.

More data does not automatically mean better data.

## 5.2 Model feasibility

Determine whether an existing model or approach can meet the requirements.

Possible approaches include:
- An existing third-party model.
- A model trained or fine-tuned for a specialized task.
- A conventional machine-learning model.
- A retrieval-based generative system.
- A combination of AI and deterministic business rules.

Start with the least complex approach that has a credible path to meeting the requirements.

You do not necessarily need to train a model from scratch. In many product contexts, using an existing model and combining it with appropriate data, workflow design, and evaluation is more practical.

## 5.3 Integration feasibility

An AI model is only one component of a product.

The solution may also need:
- Data pipelines.
- Authentication and authorization.
- Retrieval systems.
- Business rules.
- Application interfaces.
- Logging and monitoring.
- Human review workflows.
- Fallback behavior.
- Model version management.

The full system must work reliably within the existing product.

## 5.4 Operational feasibility

Consider who will maintain the feature after launch.

Questions include:
- Who monitors quality?
- Who investigates incorrect outputs?
- Who reviews difficult cases?
- Who handles model or provider changes?
- How will the team respond to degraded performance?
- What is the fallback when the model is unavailable?
- How will customer complaints be handled?

A feature that requires substantial manual intervention may still be viable, but those operational costs must be understood.

## 5.5 Economic feasibility

Estimate the cost of delivering a successful outcome.

Possible costs include:
- Model inference.
- Data storage and processing.
- Retrieval and search infrastructure.
- External APIs.
- Engineering and product development.
- Human review.
- Monitoring and evaluation.
- Security and compliance.
- Customer support.
- Rework caused by errors.

Compare these costs with the value created.

For a customer support assistant, the key question is not merely the cost per response. It is the cost per successfully resolved customer issue, compared with the existing workflow.

# 6. Understand the AI Product Team

AI product development often involves more specialized roles than a conventional feature team.

The exact structure depends on company size, technical maturity, and the type of AI system.

## 6.1 Product Manager

The PM owns the problem, product strategy, prioritization, business outcomes, and cross-functional alignment.

Typical responsibilities:
- Identify customer problems.
- Define success criteria.
- Prioritize use cases.
- Set product requirements.
- Balance quality, cost, speed, and risk.
- Coordinate stakeholders.
- Decide what evidence is sufficient for launch.
- Monitor product outcomes after release.

The PM does not need to be the most technical person on the team, but must understand enough to ask the right questions and make informed trade-offs.

## 6.2 Data scientist

A data scientist may focus on:
- Statistical analysis.
- Experiment design.
- Model selection.
- Feature engineering.
- Model evaluation.
- Understanding patterns in data.
- Estimating predictive performance.

The role varies by organization. Some data scientists focus more on research and experimentation; others build production models.

## 6.3 Machine-learning engineer

A machine-learning engineer typically focuses on:
- Training and deploying models.
- Inference infrastructure.
- Model serving.
- Performance and scaling.
- Model monitoring.
- Production reliability.
- Evaluation pipelines.

Some teams combine data science and machine-learning engineering responsibilities.

## 6.4 Software engineer

Software engineers integrate AI capabilities into the product.

They may build:
- APIs.
- Application workflows.
- Data access controls.
- User interfaces.
- Business logic.
- Fallback behavior.
- Logging and monitoring.
- Integration with existing systems.

## 6.5 Product designer and user researcher

These roles help ensure that AI capabilities solve genuine user problems and fit into understandable workflows.

They may investigate:
- User trust.
- Expectations about AI behavior.
- How uncertainty should be communicated.
- When human review is necessary.
- How customers recover from incorrect outputs.
- How to prevent confusing or overly complex experiences.

## 6.6 Domain experts and risk stakeholders

In regulated industries, subject-matter experts and risk stakeholders are especially important.

For fintech products, this may include:
- Compliance.
- Legal.
- Fraud and risk specialists.
- Information security.
- Data governance.
- Customer operations.
- Finance.

These stakeholders help define acceptable error rates, mandatory controls, and operational constraints.

The PM coordinates these perspectives without assuming that every stakeholder should make the same kind of decision.

# 7. Define Success Metrics for AI Products

AI products need metrics at multiple levels.

A model can perform well in testing while the product fails to improve customer outcomes. Conversely, a product may improve an important outcome even when the model is imperfect, because the workflow allows users to review and correct its outputs.

## 7.1 Model-level metrics

These measure the quality of the underlying AI behavior.

Depending on the task, examples include:
- Precision and recall.
- Classification accuracy.
- False positive and false negative rates.
- Forecasting error.
- Calibration.
- Factual correctness.
- Retrieval relevance.
- Instruction-following quality.

Not every metric applies to every AI system.

For example, classification accuracy can be misleading when fraud is rare. A model that labels every transaction as legitimate might appear accurate overall while missing nearly all fraud.

Metric selection should reflect the problem and the consequences of different errors.

## 7.2 Product-level metrics

These measure whether customers can successfully use the feature.

Examples:
- Task completion rate.
- Time to complete a task.
- Successful resolution rate.
- Adoption among eligible customers.
- Repeat usage.
- User correction rate.
- Escalation rate.
- Customer satisfaction.
- Abandonment rate.

For a customer support assistant, adoption alone is insufficient. Users may try the assistant and then contact a human because the answer was unhelpful.

## 7.3 Business-level metrics

These measure commercial or operational impact.

Examples:
- Revenue per active customer.
- Conversion rate.
- Customer retention.
- Cost per resolved issue.
- Fraud loss.
- Operational productivity.
- Support cost.
- Contribution margin.
- Return on investment.

A useful AI product should connect model behavior to product outcomes and then to business outcomes.

## 7.4 Guardrail metrics

Guardrails identify harmful trade-offs.

Examples:
- Incorrect financial explanations.
- Unauthorized data disclosure.
- Fraud losses.
- Unnecessary account restrictions.
- Customer complaints.
- Unfair performance differences across customer segments.
- Human-review backlog.
- Cost per active user.
- Latency and availability.

For an AI financial assistant, increased engagement is not a success if it comes with a material increase in misleading advice or privacy incidents.

## 7.5 Build a metric hierarchy

Consider an AI-powered support assistant.

**Business outcome**
- Reduce cost per successfully resolved customer issue.

**Product outcome**
- Increase the percentage of issues resolved without unnecessary human intervention.

**AI quality metrics**
- Correctness of answers.
- Relevance of retrieved information.
- Rate of unsupported claims.

**Operational guardrails**
- Escalation delay.
- Customer complaints.
- Privacy incidents.
- Response latency.
- Cost per successful resolution.

This hierarchy prevents the team from optimizing an isolated model metric without understanding whether the product is working.

# 8. Design AI Experiences Around Trust

Trust is not a decorative element in AI product design. It influences whether customers use the feature, accept its outputs, and return after an error.

Trust should be earned through product behavior rather than created through marketing claims.

## 8.1 Set appropriate expectations

Explain what the AI can do and where its limitations matter.

Avoid claims such as:
- "Always accurate."
- "Completely unbiased."
- "Guaranteed to make the best decision."
- "Understands every customer perfectly."

More credible explanations describe the supported use cases and the safeguards available.

For example:

"This assistant can explain the information in your available transaction history. It may not have access to all external bank processing details, so contact support if you need confirmation about a delayed transfer."

## 8.2 Make uncertainty visible when it matters

The product does not need to display a numerical confidence score for every AI output.

A confidence number may itself be misleading if it is not calibrated or meaningfully interpretable.

Instead, design uncertainty into the workflow.

Examples:
- Ask the user to clarify ambiguous information.
- Show the source documents behind an answer.
- Mark extracted fields that require verification.
- Offer a human review option for high-impact cases.
- Decline to provide an answer when essential information is unavailable.

The appropriate behavior depends on the risk of an incorrect output.

## 8.3 Preserve user agency

Users should understand what the AI has done and what happens next.

Depending on the use case, provide:
- Edit and correction controls.
- Confirmation before important actions.
- An explanation of key inputs.
- The ability to reject a recommendation.
- Clear escalation to human support.
- Undo or recovery options where possible.

For example, an AI assistant may draft a payment dispute message, but the customer should review it before submission.

## 8.4 Design for failure

AI systems will sometimes produce poor outputs or become unavailable.

A resilient product defines what happens next.

Possible behaviors include:
- Asking a clarifying question.
- Returning a partial result.
- Showing relevant source material without generating a conclusion.
- Switching to a deterministic workflow.
- Escalating to a human.
- Explaining that the request cannot be completed safely.

The right fallback depends on the task.

An imperfect product description may be editable. An incorrect high-value transaction instruction requires a much stricter response.

# 9. Common AI Product Failure Modes

## Failure 1: Building a demo instead of a product

A prototype may look impressive with carefully selected examples but fail on real customer inputs.

**Why it happens:** The team tests ideal cases rather than the diversity and messiness of actual usage.

**Better approach:** Build an evaluation set based on real workflows, edge cases, difficult inputs, and relevant customer segments.

## Failure 2: Confusing model capability with customer value

A model may generate impressive content without helping customers complete a meaningful task.

**Why it happens:** The team prioritizes novelty and technical performance.

**Better approach:** Define the customer outcome first and compare the AI solution against the current workflow.

## Failure 3: Ignoring the cost of quality

A cheap model may require extensive human review, corrections, and support.

**Why it happens:** The team measures inference cost rather than the total cost of successful task completion.

**Better approach:** Include rework, review, infrastructure, and error-related costs in the economic model.

## Failure 4: Using AI where rules are better

A probabilistic model may introduce unnecessary complexity into a workflow with clear, stable rules.

**Why it happens:** The team assumes AI is inherently more advanced and therefore more useful.

**Better approach:** Benchmark AI against the simplest credible alternative.

## Failure 5: Launching without monitoring

The feature works in a test environment but degrades as user behavior, source data, or provider models change.

**Why it happens:** The team treats launch as the end of development.

**Better approach:** Establish quality, reliability, cost, and safety monitoring before release.

## Failure 6: Overlooking human operations

A feature may send too many ambiguous cases to a small review team.

**Why it happens:** Human review is treated as an occasional exception rather than a measurable operational workflow.

**Better approach:** Model review volume, capacity, service levels, training, and escalation procedures.

## Failure 7: Treating AI as a substitute for domain expertise

A model can produce fluent explanations without understanding all the business, legal, or regulatory implications of a particular situation.

**Why it happens:** Language quality is mistaken for correctness.

**Better approach:** Ground outputs in authoritative information, validate important conclusions, and involve domain experts in defining acceptable behavior.

# 10. A Practical AI Product Discovery Framework

Use the following sequence to move from an initial idea to an evidence-based product decision.

## Step 1: Define the problem

Identify the target user, current workflow, source of pain, and business impact.

Avoid specifying a model or architecture too early.

## Step 2: Validate the problem

Use interviews, workflow observation, support-ticket analysis, product analytics, or other relevant evidence.

Determine whether the problem is frequent and important enough to justify solving.

## Step 3: Identify non-AI alternatives

List simpler approaches:
- Better information architecture.
- Clearer rules.
- Improved search.
- Structured forms.
- Workflow automation.
- Templates.
- Better data quality.

Establish a baseline against which the AI solution can be evaluated.

## Step 4: Form an AI value hypothesis

Explain why AI may improve the outcome.

For example:

"Using AI to extract key fields from insurance policy documents may reduce the time required to prepare structured comparisons, provided that extracted information can be verified against the source."

## Step 5: Assess feasibility

Evaluate data access, model capability, integration effort, quality requirements, operating model, and risk.

Identify assumptions that require testing.

## Step 6: Build an evaluation set

Collect representative examples of the task, including:
- Typical inputs.
- Difficult cases.
- Ambiguous cases.
- Missing information.
- High-risk cases.
- Important customer segments.

Define the expected outputs or evaluation criteria.

## Step 7: Prototype the workflow

Test not just the model but the full user experience.

Consider:
- How users provide information.
- How outputs are displayed.
- How errors are corrected.
- When human review is required.
- What happens when the model cannot answer.

## Step 8: Evaluate quality and economics

Compare the prototype with the baseline.

Measure task quality, user impact, latency, cost, error consequences, and operating effort.

## Step 9: Run a controlled pilot

Release to a limited audience or controlled workflow.

Monitor performance and gather feedback before scaling.

## Step 10: Decide whether to scale

Scale only when the evidence supports the expected value and the team has a credible plan for operating the feature safely and economically.

A technically impressive prototype is evidence of feasibility, not proof of product-market fit.

# 11. Case Study: AI-Powered Spending Insights in a Fintech App

## Context

A personal finance app helps users understand their spending.

The existing product shows transactions and monthly spending totals. Customer research reveals that some users struggle to understand why their expenses increased and what actions they could take.

The team proposes an AI-powered spending assistant.

Users could ask:
- "Why did I spend more this month?"
- "Which subscriptions have increased?"
- "How much did I spend on restaurants?"
- "What recurring expenses could I review?"

## Step 1: Define the customer problem

The problem is not simply that users lack a chatbot.

The problem is that users struggle to turn transaction data into understandable insights and practical actions.

The intended outcome might be:

"Help users understand important changes in their spending and identify relevant next steps with less manual analysis."

## Step 2: Identify the required capabilities

The product may require:

1. Reliable transaction categorization.
2. Recurring payment detection.
3. Period-over-period comparison.
4. Retrieval of relevant transaction records.
5. Natural-language question interpretation.
6. Explanation generation.
7. Privacy controls.
8. Clear handling of incomplete or ambiguous data.

Not all these capabilities require generative AI.

For example, calculating the difference between two monthly totals should be deterministic. AI may help interpret the question and explain the result, while the actual financial calculation should rely on verified data and explicit logic.

## Step 3: Define the product architecture conceptually

A potential workflow is:

1. The customer asks a question.
2. The system identifies the relevant intent and time period.
3. Authorized transaction data is retrieved.
4. Deterministic calculations produce verified figures.
5. The AI generates a concise explanation grounded in those results.
6. The product checks that the response follows the required format and safety rules.
7. The customer sees the answer with relevant supporting details.

This is an illustrative design, not the only valid architecture.

The important principle is to avoid relying on a language model to invent or estimate financial facts that can be retrieved and calculated precisely.

## Step 4: Define success metrics

**Customer outcomes**
- Percentage of questions successfully resolved.
- Time required to understand a spending change.
- User-reported usefulness.
- Repeat use for meaningful financial tasks.

**AI quality**
- Correctness of numerical claims.
- Relevance of retrieved transactions.
- Rate of unsupported explanations.
- Appropriate handling of missing data.

**Business outcomes**
- Retention among eligible users.
- Engagement with existing financial management features.
- Cost per successfully resolved question.

**Guardrails**
- Unauthorized data exposure.
- Misleading financial explanations.
- Incorrect calculations.
- Excessive inference costs.
- Customer complaints.

## Step 5: Define the pilot

Start with a narrow set of questions that can be answered from available transaction history.

For example:
- Spending by category.
- Changes between two periods.
- Identification of recurring payments.
- Summaries of large expense changes.

Avoid immediately expanding into complex financial advice or actions that require information the app does not possess.

## Step 6: Define the decision criteria

Expand the pilot only if:
- Answers are sufficiently accurate for the supported tasks.
- Customers complete those tasks more effectively than with the existing interface.
- The feature does not create unacceptable privacy or trust risks.
- The cost per successful interaction is sustainable.
- Operational monitoring and escalation are in place.

The key lesson is that AI can make the interaction more natural, but reliable data, verified calculations, and thoughtful workflow design create much of the product's real value.

# 12. Your First AI Product Opportunity Scorecard

Use this scorecard when comparing potential AI use cases.

Score each dimension from 1 to 5.

| Dimension | Key question |
|---|---|
| Customer pain | Is the problem frequent and important? |
| Business value | Could solving it materially improve revenue, cost, retention, or risk? |
| AI advantage | Is AI meaningfully better than simpler alternatives? |
| Data readiness | Is appropriate, authorized, high-quality data available? |
| Technical feasibility | Can the system plausibly meet the quality and latency requirements? |
| Evaluation readiness | Can we measure whether the output is good enough? |
| Operational readiness | Can we monitor, support, and improve the feature? |
| Risk acceptability | Can we manage the consequences of incorrect behavior? |
| Economic viability | Is the expected value greater than the full cost? |
| Strategic fit | Does the opportunity support our product strategy? |

You may assign weights to reflect the context, but do not rely on a total score alone.

For example, a use case with excellent customer value but unacceptable risk may be unsuitable. A low-risk feature with no measurable customer benefit may also be a poor investment.

Use the scorecard to structure discussion, identify gaps, and prioritize further investigation—not to manufacture certainty.

# 13. Practical Exercise: Prioritize AI Opportunities

## Scenario

You are the Product Manager for a fintech application with three proposed AI initiatives.

### Initiative A: AI customer support assistant

The assistant answers common questions about account activity, card payments, and transaction status.

Potential benefit:
- Reduce repetitive support requests.
- Improve access to information.
- Reduce customer waiting time.

Potential concerns:
- Incorrect explanations.
- Privacy risks.
- Escalation complexity.
- Model inference costs.

### Initiative B: AI spending insights

The system explains spending changes and identifies recurring expenses using customers' transaction history.

Potential benefit:
- Help users understand their finances.
- Improve engagement with the financial management product.
- Increase retention.

Potential concerns:
- Incomplete transaction data.
- Incorrect categorization.
- Misleading explanations.
- Uncertain willingness to pay.

### Initiative C: AI-generated financial recommendations

The system proposes personalized investment actions based on customer information and market data.

Potential benefit:
- Help customers make informed decisions.
- Create a differentiated premium product.
- Potentially increase revenue.

Potential concerns:
- High consequences of incorrect recommendations.
- Suitability and regulatory obligations.
- Data and model limitations.
- Customer trust.
- More demanding evaluation and governance requirements.

## Your tasks

### Task 1: Define the problem

For each initiative, write a one-sentence problem statement without mentioning AI.

### Task 2: Evaluate AI necessity

For each initiative, identify:
- What AI contributes.
- What could be solved with traditional software.
- What a hybrid solution might look like.

### Task 3: Score the opportunities

Use the scorecard in Section 12.

Explain which assumptions have the greatest influence on your scores.

### Task 4: Define the MVP

Choose one initiative and define the narrowest useful initial release.

Specify:
- Target user.
- Supported use cases.
- Explicit exclusions.
- Data requirements.
- User workflow.
- Fallback behavior.

### Task 5: Define evaluation criteria

Identify:
- Three quality metrics.
- Three product metrics.
- Two business metrics.
- Three guardrail metrics.

Explain why each metric matters.

### Task 6: Recommend a pilot

Describe how you would validate the feature with limited exposure before scaling it.

Include success criteria, failure conditions, and the evidence needed for a go/no-go decision.

# 14. Final Challenge: Design an AI Feature for an Insurance Platform

## Business context

You are the Product Manager of a digital platform that helps people compare and purchase individual supplementary health insurance.

Customers face several difficulties:

- They struggle to understand differences between plans.
- They find exclusions, deductibles, coverage limits, and reimbursement rules confusing.
- They may choose based on price without understanding the practical coverage differences.
- They are uncertain about which plan best matches their needs.

The company wants to introduce an AI-powered assistant that helps customers understand insurance options.

The product has access to plan information and associated policy documents, but the completeness and consistency of that information must be verified.

## Your challenge

Design a responsible, useful AI product experience.

### Part A: Define the customer problem

Identify the primary customer segment, the most important problem, and the expected outcome.

Explain how you would validate that the problem is significant before investing in AI.

### Part B: Define the scope

Decide which tasks the initial assistant should support.

Potential tasks include:
- Explaining insurance terminology.
- Comparing deductibles and coverage limits.
- Summarizing exclusions.
- Answering questions grounded in policy documents.
- Helping customers identify which information they need before choosing a plan.
- Recommending a specific plan.

Decide which tasks belong in the MVP and which should be deferred.

Explain the reasoning behind your scope.

### Part C: Design the information flow

Describe how the assistant should use authoritative policy information.

Consider:
- Identifying the correct plan and policy version.
- Retrieving relevant clauses.
- Distinguishing documented facts from interpretation.
- Showing source references.
- Handling contradictory or missing information.
- Preventing unsupported claims.
- Escalating questions that require an authorized expert.

### Part D: Define the user experience

Explain how the product should handle:
- Ambiguous customer questions.
- Incomplete information.
- Uncertainty.
- Incorrect or disputed answers.
- Comparisons involving multiple plans.
- Requests for personalized recommendations.

Determine where customers should see source information and how they can verify important claims.

### Part E: Build the evaluation framework

Create an evaluation set containing:
- Common insurance questions.
- Questions about exclusions.
- Questions involving deductibles and limits.
- Ambiguous questions.
- Questions for which the documents contain no answer.
- Questions where two documents appear to conflict.
- Questions that could lead to a consequential misunderstanding.

Define how the team will assess correctness, completeness, source grounding, and appropriate escalation.

### Part F: Define success metrics

Choose metrics across four levels:

1. AI answer quality.
2. Customer task completion.
3. Business outcomes.
4. Risk and safety guardrails.

Explain how you would distinguish a genuinely useful assistant from one that merely increases engagement.

### Part G: Define a 90-day roadmap

Organize the work into phases:

- Discovery and data audit.
- Prototype and evaluation.
- Controlled pilot.
- Review and scale decision.

For each phase, identify the main deliverables, responsible stakeholders, and exit criteria.

### Part H: Make the investment decision

Conclude by answering:

1. Why is AI appropriate—or inappropriate—for this problem?
2. What is the smallest valuable version?
3. What must be true before launch?
4. What risks cannot be eliminated completely?
5. What evidence would justify scaling the feature?
6. Under what conditions should the company stop investing in it?

Your goal is not to create the most impressive AI assistant. It is to help customers understand insurance options more accurately and confidently, while preserving trust and making the business sustainable.

# Key Takeaways

1. **Start with customer problems, not AI capabilities.** A useful product solves an important problem; using AI is only one possible means of doing so.

2. **Understand the task before choosing the technique.** Prediction, generation, classification, recommendation, and rule-based automation have different strengths and limitations.

3. **AI quality is part of product quality.** Correctness, relevance, consistency, safety, latency, and cost must be considered alongside usability.

4. **Data readiness is a product concern.** Access, quality, freshness, representativeness, and permission to use data can determine whether a use case is feasible.

5. **Evaluate the complete workflow.** The model, data, interface, business rules, human review, and operational processes collectively determine the customer outcome.

6. **Compare against simpler alternatives.** AI is justified when it provides meaningful additional value relative to the cost and complexity it introduces.

7. **Measure customer and business outcomes, not just model performance.** A technically strong model does not guarantee successful adoption or a sustainable product.

8. **Design for uncertainty and failure.** Clarification, source grounding, user correction, human escalation, and safe fallbacks can make AI more useful and trustworthy.

9. **Include the full economics.** Inference, integration, monitoring, review, support, and error-related costs all affect viability.

10. **Treat launch as the beginning of ongoing evaluation.** Model changes, new user behavior, changing data, and shifting costs require continuous monitoring.

11. **Match safeguards to consequences.** A creative writing assistant and a system influencing financial decisions should not be evaluated or governed identically.

12. **Keep the product outcome at the center.** The strongest AI products combine useful technology, excellent workflow design, reliable data, responsible controls, and a compelling reason for customers to use them.

# Preview of Day 88

**Topic: Generative AI Product Design**

Tomorrow, we will go deeper into designing products powered by generative AI.

You will learn about:

- Large language models and their practical capabilities.
- Prompt design and structured outputs.
- Retrieval-augmented generation (RAG).
- Tool use and AI-assisted workflows.
- Context management and conversation design.
- Human-in-the-loop interaction patterns.
- Reducing hallucinations and grounding outputs.
- Choosing between prompts, retrieval, fine-tuning, and conventional software.
- Designing useful generative AI MVPs.
- Evaluating generative AI experiences through real user tasks.

The central question will be: **How do you turn a generative AI model into a reliable, understandable, and valuable product experience?**
