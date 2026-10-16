# Day 92: AI Product Economics & Infrastructure

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain the main cost drivers of AI-powered products.
- Calculate inference costs, cost per request, and cost per successful task.
- Understand the relationship between tokens, context windows, latency, and cost.
- Compare large language models, smaller models, and traditional software approaches.
- Evaluate caching, model routing, retrieval optimization, and prompt compression.
- Understand throughput, concurrency, rate limits, and infrastructure capacity.
- Make informed build-versus-buy and model-provider decisions.
- Forecast AI usage, operating costs, and unit economics.
- Optimize AI economics without compromising critical quality or safety requirements.
- Create an infrastructure and economics plan for a fintech AI product.

# 1. Why AI Economics Matter to Product Managers

Traditional software products often have relatively low marginal costs: after a system is built, serving one additional user may add little expense until the system needs more infrastructure or support capacity.

AI products can behave differently.

Each request may consume paid model inference, retrieval services, external API calls, storage, and additional computing resources. Some workflows require multiple model calls before completing a single user task.

As usage grows, costs can grow with it.

Imagine a cryptocurrency exchange launches an AI support assistant. The assistant helps customers understand deposits, withdrawals, fees, and account restrictions.

The product initially serves 10,000 requests per month. Adoption grows rapidly, and within six months it serves 1 million requests per month.

If the team has not modeled its economics, the feature could become popular while creating unexpectedly high operating costs.

The Product Manager needs to answer five questions:

1. Does the AI feature create measurable customer and business value?
2. What does each request and successfully completed task cost?
3. How will costs change as usage grows?
4. Which technical choices have the greatest economic impact?
5. How can the product become more efficient without degrading quality or safety?

AI economics is not simply a matter of choosing the cheapest model. It is the discipline of balancing product outcomes, quality, performance, risk, and cost.

# 2. Understand the AI Cost Stack

The cost of an AI product is usually distributed across several components.

## 2.1 Model inference

Inference is the process of running a trained model to produce an output.

Depending on the provider and deployment model, costs may depend on:
- Input tokens.
- Output tokens.
- Cached input tokens.
- Number of model calls.
- Model size or class.
- Reserved capacity or provisioned throughput.
- Hardware usage for self-hosted models.

For a hosted model API, input and output token pricing are often different.

A request with a large conversation history and a short answer may have a very different cost from a request with a short input and a long generated answer.

## 2.2 Retrieval and search

Retrieval-augmented generation (RAG) can introduce costs for:
- Embedding generation.
- Vector database queries.
- Keyword search.
- Reranking.
- Document parsing.
- Storage and indexing.
- Retrieval infrastructure.

Some costs are incurred during ingestion, while others occur each time a user asks a question.

For example, a large insurance policy library may require substantial initial processing, but the resulting documents can support many customer queries.

## 2.3 Tool and external API calls

AI workflows may call:
- Transaction APIs.
- Customer account services.
- Payment providers.
- Search APIs.
- Document-processing services.
- Third-party verification systems.

Some calls are inexpensive. Others have per-request charges or usage tiers.

A model can be cheap while the overall workflow is expensive because it repeatedly calls external services.

## 2.4 Infrastructure and operations

Additional costs may include:
- Application servers.
- Queues and orchestration.
- Databases and storage.
- Monitoring and observability.
- Logging.
- Security controls.
- Evaluation infrastructure.
- Human review.
- Support and incident response.

The full product cost should include the resources required to operate the workflow safely and reliably, not only the model bill.

## 2.5 Development and maintenance

AI products also require ongoing engineering and product investment.

Examples:
- Evaluation dataset maintenance.
- Prompt and workflow updates.
- Retrieval tuning.
- Model migrations.
- Quality investigations.
- Compliance reviews.
- Vendor integration work.

These costs may not appear on the inference invoice, but they matter when deciding whether a feature is economically worthwhile.

# 3. Understand Tokens and Context Windows

Tokens are units of text or other content processed by a model. They do not correspond exactly to words.

The number of tokens depends on the language, text, formatting, and tokenizer. Some languages or unusual strings may consume more tokens than an English-language estimate would suggest.

## 3.1 Input tokens

Input tokens may include:
- System instructions.
- Developer instructions.
- User messages.
- Conversation history.
- Retrieved documents.
- Tool results.
- Structured data.
- Output-format requirements.

A common mistake is to estimate cost using only the user's latest message.

In a multi-turn assistant, the full context sent to the model may be much larger.

## 3.2 Output tokens

Output tokens include the content generated by the model.

Output generation can be expensive because the model must produce each token sequentially in many common inference setups.

Long responses may also increase latency and create more content that must be evaluated or reviewed.

## 3.3 Context-window trade-offs

A context window is the amount of content a model can process in a single interaction, subject to the model's specific limits.

Larger context can be useful when the task requires extensive evidence. However, providing more context is not automatically better.

Excessive context can:
- Increase input costs.
- Increase processing time.
- Include irrelevant information.
- Make important details harder to identify.
- Introduce conflicting or outdated information.

The product team should supply the information needed for the task rather than automatically sending every available document or the entire conversation history.

## 3.4 A practical context-budget example

Suppose an insurance comparison assistant sends the following information for a typical request:

| Component | Approximate input tokens |
|---|---:|
| System and task instructions | 700 |
| Recent conversation | 500 |
| Retrieved policy excerpts | 2,000 |
| Customer question and context | 200 |
| **Total** | **3,400** |

The assistant generates an answer of approximately 500 tokens.

These figures are illustrative. Actual token usage depends on the model, prompt, retrieved material, and output.

If the team can reduce irrelevant retrieved content while preserving answer quality, it may reduce both cost and latency.

The goal is not to minimize tokens at all costs. It is to provide sufficient context for reliable task completion.

# 4. Calculate Model Inference Costs

Let's work through a basic example.

Suppose a hosted model has the following illustrative pricing:

- Input tokens: $2 per million tokens.
- Output tokens: $8 per million tokens.

Assume a typical request uses:
- 3,000 input tokens.
- 500 output tokens.

The input cost is:

3,000 / 1,000,000 × $2 = $0.006

The output cost is:

500 / 1,000,000 × $8 = $0.004

Total model cost per request:

$0.006 + $0.004 = $0.010

The model inference cost is approximately **one cent per request**.

This example uses hypothetical prices for learning purposes, not current provider quotations.

## 4.1 Monthly inference cost

If the product handles 100,000 requests per month:

100,000 × $0.010 = $1,000

At 1 million requests per month:

1,000,000 × $0.010 = $10,000

At 5 million requests per month:

5,000,000 × $0.010 = $50,000

This simple projection assumes that average token consumption and pricing remain constant.

In practice, request complexity, retries, caching, model routing, and provider pricing can change the result.

## 4.2 Add other per-request costs

Suppose each request also incurs:
- Retrieval: $0.002.
- External tools: $0.001.
- Allocated infrastructure: $0.003.

The total estimated variable cost per request becomes:

$0.010 + $0.002 + $0.001 + $0.003 = $0.016

At 1 million requests, the estimated variable cost is $16,000.

If the product also has $4,000 in monthly fixed operating costs, the total monthly cost would be approximately $20,000.

Be careful to avoid double-counting. For example, if an infrastructure estimate already includes the retrieval service, do not add that same expense again.

# 5. Cost per Request Is Not Cost per Successful Task

This distinction is one of the most important concepts in AI product economics.

A request is an interaction with the system. A successful task is an outcome that satisfies the intended user goal and applicable quality requirements.

A workflow may generate several requests, retry failed calls, or require human review before completing one task.

## 5.1 Example

Suppose an AI assistant receives 100,000 customer requests.

The average total variable cost per request is $0.016.

Total variable cost:

100,000 × $0.016 = $1,600

Suppose 80,000 requests lead to successfully completed tasks.

Cost per successful task:

$1,600 / 80,000 = $0.020

The cost per successful task is **two cents**, even though the cost per request is 1.6 cents.

Now imagine the team chooses a cheaper model.

The new workflow costs $0.012 per request, but only 65% of requests lead to successful tasks.

For 100,000 requests:

Total cost = 100,000 × $0.012 = $1,200

Successful tasks = 65,000

Cost per successful task:

$1,200 / 65,000 ≈ $0.0185

The cheaper model still has a lower cost per successful task in this example. But the team must also consider the impact of the 15-percentage-point decline in success.

If the additional failures create financial harm, customer dissatisfaction, or substantial support rework, the lower unit cost may not justify the change.

## 5.2 Include rework and human review

A more complete calculation is:

Cost per successful task = Total attributable workflow cost / Number of successfully completed tasks

Total attributable cost may include:
- Model inference.
- Retrieval.
- Tool calls.
- Failed attempts and retries.
- Human review.
- Rework.
- Support escalation.
- Allocated infrastructure.

Define what counts as a successful task before comparing alternatives. Otherwise, teams may appear to improve economics by changing the success definition.

# 6. Model Selection: Bigger Is Not Always Better

Different models have different strengths, prices, latencies, context limits, and operational characteristics.

A larger model may perform better on complex reasoning but be unnecessarily expensive for a simple classification or formatting task.

A smaller model may be sufficient for some tasks but unreliable for others.

## 6.1 Match the model to the task

Consider a fintech assistant that processes several kinds of requests.

| Task | Possible approach |
|---|---|
| Classify a support request | Rules or a small model |
| Format structured transaction data | Deterministic software |
| Explain a simple fee from approved data | Small model with grounded context |
| Compare complex policy exclusions | Stronger model with retrieval and evaluation |
| Calculate a transaction fee | Deterministic calculation |
| Decide whether a user may access an account | Server-side authorization logic |

The best solution may combine traditional software, small models, and larger models rather than using one model for every step.

## 6.2 Build a model-selection scorecard

Evaluate candidates on:

- Task success rate.
- Critical error rate.
- Cost per successful task.
- Latency.
- Reliability.
- Context requirements.
- Supported languages.
- Structured-output reliability.
- Privacy and data-handling requirements.
- Availability and operational constraints.
- Integration and maintenance cost.

Do not choose a model solely because it achieves the highest score on a generic benchmark.

A benchmark may not reflect your actual customer questions, documents, language, or business rules.

## 6.3 Use task-specific evaluation

Create a representative evaluation dataset for each important workflow.

For example, an exchange support assistant might require:
- Accurate transaction-status explanations.
- Correct fee calculations.
- Appropriate handling of missing account data.
- Safe escalation for restricted accounts.
- Resistance to unauthorized data requests.

Compare model candidates on those cases, then estimate their cost and performance under realistic traffic.

# 7. Model Routing and Cascades

Model routing sends different requests to different models or processing paths based on the task.

A cascade may start with a cheaper method and use a stronger model only when necessary.

## 7.1 Example routing strategy

For an AI support assistant:

1. Detect whether the question can be answered by deterministic logic.
2. Use approved retrieval and a small model for routine questions.
3. Route complex or ambiguous questions to a stronger model.
4. Escalate high-risk or unresolved cases to a human.
5. Avoid using a model when a required source or permission check has failed.

This approach can reduce cost while preserving quality for difficult tasks.

## 7.2 Estimate the economic benefit

Suppose:
- 80% of requests use a small model costing $0.004 per request.
- 20% use a stronger model costing $0.020 per request.

Average model cost:

(0.80 × $0.004) + (0.20 × $0.020)

= $0.0032 + $0.004

= $0.0072 per request.

If every request used the stronger model, the cost would be $0.020 per request.

The routed approach reduces estimated model cost by 64% in this example.

However, routing adds complexity and may introduce classification errors. The team must evaluate the complete workflow, including routing failures and escalation costs.

## 7.3 When routing is inappropriate

Avoid routing solely by price if:
- The classifier is unreliable.
- Incorrect routing creates material harm.
- The cost of maintaining the system exceeds the savings.
- The product cannot explain or monitor routing decisions adequately.
- The task requires consistent handling for policy or governance reasons.

Use routing when the performance difference is measurable and the additional complexity is justified.

# 8. Prompt, Retrieval, and Output Optimization

Reducing unnecessary model work can improve economics.

The objective is to remove waste without removing information necessary for reliable task completion.

## 8.1 Prompt optimization

Potential improvements include:
- Removing duplicate instructions.
- Reducing unnecessary examples.
- Simplifying output requirements.
- Avoiding repeated context.
- Keeping instructions relevant to the specific task.
- Using structured inputs instead of long prose where appropriate.

Do not remove critical safety constraints simply because they consume tokens.

## 8.2 Retrieval optimization

Potential improvements include:
- Retrieving fewer but more relevant passages.
- Removing duplicate documents.
- Improving metadata filters.
- Using appropriate chunk sizes.
- Improving search quality.
- Avoiding irrelevant historical content.
- Prioritizing authoritative, current sources.

Retrieving fewer documents is beneficial only if the system still obtains the evidence required to answer correctly.

## 8.3 Output optimization

A product may not need a long answer for every task.

For example, a transaction-status assistant may need:
- Current status.
- Last-updated time.
- A short explanation.
- The next appropriate action.

Generating a long generic explanation can increase cost and confuse the customer.

Define the appropriate response length from the user task, not from a general desire to minimize output tokens.

## 8.4 Measure before and after

For every optimization, compare:
- Input tokens.
- Output tokens.
- Latency.
- Task success.
- Critical error rate.
- Cost per successful task.
- User outcomes.

A reduction in token usage is an intermediate result. The actual goal is a better economic and product outcome.

# 9. Caching and Reuse

Caching avoids repeating work when the same or sufficiently similar result can be reused safely.

## 9.1 Common caching approaches

**Exact-response caching**

Reuse a response for an identical request under appropriate conditions.

**Prompt-prefix caching**

Some model providers can reduce processing costs for repeated prompt prefixes. The pricing and eligibility rules depend on the provider.

**Retrieval caching**

Reuse search results or retrieved document sets when the query and underlying content permit it.

**Embedding caching**

Reuse embeddings for content that has already been processed.

## 9.2 Example: Repeated questions

Suppose 30% of 1 million monthly questions are identical, low-risk questions about published fees and general procedures.

If a safe cache serves those requests without a model call, the potential inference savings depend on the cache hit rate and the cost of cache operations.

If each avoided model request would cost $0.010, then 300,000 avoided requests would represent up to $3,000 in gross model-cost savings before accounting for cache costs and invalidation failures.

This is only an illustrative upper-bound calculation. The actual savings depend on whether those requests can safely be cached and whether cache hits really avoid the assumed work.

## 9.3 Cache invalidation and personalization

Caching can create risk if the underlying information changes or the response depends on the user.

Never reuse personalized account information across users.

For financial products, avoid serving cached transaction status when the customer expects current information.

Use suitable expiration, versioning, authorization, and invalidation mechanisms.

A stale answer can cost far more than the inference it saves.

# 10. Latency, Throughput, and Concurrency

Cost is only one part of AI infrastructure. The product must also respond within an acceptable time and handle traffic reliably.

## 10.1 Latency

Latency is the time required to return a response.

It may include:
- Request validation.
- Retrieval.
- Model inference.
- Tool calls.
- Output validation.
- Network delays.
- Human review.

Track:
- Median latency.
- 95th percentile latency.
- 99th percentile latency where appropriate.
- Time to first token for streaming interfaces.
- Latency by workflow and model.

A fast model call does not guarantee a fast end-to-end experience if the workflow requires multiple sequential calls.

## 10.2 Throughput

Throughput measures how much work a system can process over time.

Examples:
- Requests per second.
- Tokens per second.
- Completed tasks per minute.

Throughput may be limited by:
- Provider rate limits.
- Available model capacity.
- Application servers.
- Database capacity.
- Retrieval infrastructure.
- Tool APIs.
- Queue processing.

## 10.3 Concurrency

Concurrency is the number of requests being processed at the same time.

A product with a moderate daily request volume may still experience peak-load problems if many users arrive simultaneously.

For example, a trading platform may receive a surge in support requests during a market disruption.

Capacity planning should consider peak traffic, not only monthly averages.

## 10.4 Queueing and overload

When incoming requests exceed processing capacity, queues grow and users wait longer.

Possible responses include:
- Rate limiting.
- Queue prioritization.
- Backpressure.
- Graceful degradation.
- Reduced context or response length where safe.
- Routing eligible requests to lower-cost capacity.
- Clear fallback messages.

Do not allow overload to turn into silent quality degradation or unauthorized shortcuts.

# 11. Reliability and Fallback Economics

AI products often depend on external model providers and several internal services.

Any dependency can fail.

The product should have a clear strategy for handling:
- Model provider outages.
- Rate-limit errors.
- Retrieval failures.
- Tool API timeouts.
- Invalid model output.
- Temporary capacity shortages.

## 11.1 Retries have costs

Retries may improve reliability but increase latency and cost.

Repeatedly retrying a request that cannot succeed may waste resources and amplify an outage.

Define:
- Which failures are retryable.
- Maximum retry attempts.
- Appropriate backoff.
- Timeout budgets.
- Idempotency requirements for actions.
- When to use a fallback or escalate.

For consequential actions, retry logic must not create duplicate execution.

## 11.2 Fallbacks should preserve correctness

Examples:
- If the model is unavailable, show approved static guidance.
- If account data is unavailable, explain that current status cannot be retrieved.
- If retrieval fails, do not invent a factual answer.
- If the output is invalid, reject it and use a safe alternative.

A fallback can have lower functionality while preserving the customer's trust.

## 11.3 Measure the economics of reliability

A cheaper configuration may cause more timeouts, retries, or escalations.

Compare the total cost of successfully completed tasks, including recovery work, rather than evaluating inference cost in isolation.

# 12. Hosted APIs Versus Self-Hosted Models

Product teams may choose between using a hosted model API and operating their own model infrastructure.

Neither approach is universally cheaper.

## 12.1 Hosted APIs

Potential advantages:
- Faster initial integration.
- Less infrastructure management.
- Access to managed model updates.
- Easier initial scaling.
- Usage-based pricing in many offerings.

Potential disadvantages:
- Vendor dependence.
- Usage costs that grow with demand.
- Rate limits or capacity constraints.
- Data-handling and contractual considerations.
- Limited control over some model behavior or deployment details.

## 12.2 Self-hosted models

Potential advantages:
- Greater control over deployment and configuration.
- Potentially favorable economics at sufficiently high, predictable utilization.
- More options for specialized infrastructure and operational controls.
- Greater control over where processing occurs, depending on deployment.

Potential disadvantages:
- Hardware and capacity costs.
- Infrastructure and model-serving expertise.
- Scaling and reliability responsibilities.
- Model optimization and deployment maintenance.
- Underutilized capacity.
- Security and operational overhead.

## 12.3 Compare total cost of ownership

Do not compare only the hosted API price with the cost of a GPU.

Include:
- Hardware or cloud compute.
- Idle capacity.
- Storage and networking.
- Model serving.
- Engineering and operations.
- Monitoring and incident response.
- Security and compliance requirements.
- Scaling and redundancy.
- Evaluation and migration work.

Self-hosting may make sense at high, stable usage when the team can operate the infrastructure efficiently. A hosted API may be preferable when demand is uncertain or the team wants to focus on product differentiation.

Estimate both options using realistic traffic and workload assumptions.

# 13. AI Product Unit Economics

Unit economics connects the cost of operating a product to the value it creates.

For AI features, useful units may include:
- Cost per request.
- Cost per completed task.
- Cost per active customer.
- Cost per resolved support case.
- Cost per completed insurance comparison.
- Cost per retained customer.

Choose a unit that matches the product's intended value.

## 13.1 Example: AI support assistant

Suppose the existing support process costs $1.20 per successfully resolved request.

The AI-assisted process has:
- Model and retrieval cost: $0.08 per attempted request.
- Human review and rework: $0.12 per attempted request.
- Other allocated variable cost: $0.05 per attempted request.
- Successful resolution rate: 85%.

Total variable cost per attempted request:

$0.08 + $0.12 + $0.05 = $0.25

Cost per successfully resolved request:

$0.25 / 0.85 ≈ $0.294

The AI-assisted process costs approximately $0.29 per successful resolution before fixed costs and any other costs not included in the example.

The apparent savings versus $1.20 are substantial.

However, the team must also compare:
- Customer satisfaction.
- Repeat-contact rate.
- Resolution quality.
- Critical errors.
- Fixed operating costs.
- The share of requests still requiring human support.

The AI product is attractive only if the overall outcome remains acceptable.

## 13.2 Contribution margin

For a monetized AI product, contribution margin can be expressed as:

Contribution margin = Revenue − Variable costs

Contribution margin percentage:

Contribution margin percentage = Contribution margin / Revenue × 100%

If a paid AI feature generates $100,000 in monthly revenue and has $35,000 in attributable variable costs, its contribution margin is $65,000, or 65%, before fixed costs and other expenses.

For an internal productivity feature, direct revenue may not exist. The value might instead come from support savings, increased throughput, improved retention, or reduced operational risk.

Avoid treating estimated time saved as realized financial benefit unless the organization can actually capture that value.

# 14. Forecast AI Costs Before Scaling

Forecasting helps teams anticipate cost changes before usage increases.

A useful forecast should model:
- Eligible users.
- Adoption rate.
- Requests per active user.
- Average input tokens.
- Average output tokens.
- Number of model calls per task.
- Retry rate.
- Retrieval and tool costs.
- Success rate.
- Human review rate.
- Fixed operating costs.

## 14.1 Build a basic demand model

Suppose:
- 200,000 eligible customers.
- 20% monthly adoption.
- 10 requests per active customer per month.

Expected monthly requests:

200,000 × 20% × 10 = 400,000 requests

If the average variable cost is $0.015 per request:

400,000 × $0.015 = $6,000 per month

If adoption grows to 50%, monthly requests become:

200,000 × 50% × 10 = 1,000,000 requests

Estimated variable cost:

1,000,000 × $0.015 = $15,000 per month

This is a basic scenario, not a complete forecast. Higher adoption may also change the mix of requests, average context length, and support workload.

## 14.2 Model multiple scenarios

Create at least three scenarios:

**Conservative**
- Slower adoption.
- Lower request frequency.
- More limited use cases.

**Expected**
- Most likely adoption and usage.
- Realistic request mix.
- Planned optimization.

**High usage**
- Faster adoption.
- More frequent use.
- Larger context or longer outputs.
- Higher peak traffic.

For each scenario, estimate monthly costs, quality, latency, and capacity needs.

## 14.3 Identify the major assumptions

A forecast is only as useful as its assumptions.

Validate:
- Average token usage from actual logs.
- Provider pricing from current contracts or published rates.
- Model-call counts from real workflow traces.
- Success rates from evaluation and production data.
- Human-review rates from the pilot.
- Adoption and request frequency from product analytics.

Update the forecast as real usage data becomes available.

# 15. Common AI Economics Mistakes

## Mistake 1: Optimizing the cheapest model

A lower inference price may produce more errors, retries, human review, and customer dissatisfaction.

**Better approach:** Compare cost per successful task and enforce quality guardrails.

## Mistake 2: Ignoring multi-step workflows

A single user task may involve classification, retrieval, generation, verification, and multiple tool calls.

**Better approach:** Measure the full workflow cost, not only the final generation call.

## Mistake 3: Treating average traffic as peak capacity

Monthly averages do not reveal traffic spikes or provider limits.

**Better approach:** Model concurrency, burst traffic, and overload behavior.

## Mistake 4: Overusing context

Sending every available document may increase cost without improving answer quality.

**Better approach:** Optimize retrieval relevance and validate that critical evidence remains available.

## Mistake 5: Caching dynamic or personalized answers

A cached response may become outdated or leak information across users.

**Better approach:** Cache only where data freshness, authorization, and response reuse can be safely controlled.

## Mistake 6: Ignoring fixed and operational costs

A low API bill can hide substantial engineering, monitoring, and human-review costs.

**Better approach:** Calculate total cost of ownership.

## Mistake 7: Assuming AI automatically reduces labor costs

Time saved does not necessarily translate into fewer employees or lower expenditure. Teams may instead use the time for more complex work.

**Better approach:** Define how the business will capture the expected benefit.

## Mistake 8: Optimizing costs without quality monitoring

A prompt or model change may reduce tokens but introduce subtle factual errors.

**Better approach:** Run regression tests and compare quality, safety, and economics before deployment.

# 16. Case Study: Economics of an AI Assistant for a Crypto Exchange

## Business context

A cryptocurrency exchange wants to use AI to answer questions about deposits, withdrawals, transaction fees, and account restrictions.

The existing support team resolves 100,000 requests per month.

The current fully allocated variable cost per successful resolution is $1.20.

Leadership expects AI to reduce operating costs while maintaining acceptable service quality.

## Step 1: Define the operating model

The assistant:
- Uses deterministic logic for simple calculations.
- Retrieves transaction status from authoritative APIs.
- Uses a model to explain retrieved information.
- Escalates ambiguous or high-risk cases.
- Does not initiate financial transfers.

## Step 2: Estimate AI cost

Assume:
- Model inference: $0.06 per attempted request.
- Retrieval and tools: $0.02.
- Allocated variable infrastructure: $0.02.
- Human review and rework: $0.10.

Total variable cost per attempted request:

$0.06 + $0.02 + $0.02 + $0.10 = $0.20

Assume an 85% successful resolution rate.

Cost per successful resolution:

$0.20 / 0.85 ≈ $0.235

The estimated AI-assisted variable cost per successful resolution is approximately $0.24.

These numbers are illustrative assumptions, not industry benchmarks.

## Step 3: Evaluate operational impact

Suppose the assistant handles 60,000 requests and successfully resolves 51,000 of them.

The remaining requests are escalated or otherwise unresolved.

At an 85% success rate:
- Successfully resolved requests: 51,000.
- AI workflow variable cost: 60,000 × $0.20 = $12,000.
- AI cost per successful resolution: $12,000 / 51,000 ≈ $0.235.

If the 9,000 unsuccessful requests require human handling, those additional costs must be included when evaluating the full support operation.

The team should not compare the AI cost per successful resolution with the old support cost while ignoring the cost of failures.

## Step 4: Identify optimization opportunities

Potential improvements:
- Use deterministic handling for simple fee calculations.
- Reduce irrelevant retrieved documents.
- Route routine questions to a smaller model.
- Improve first-attempt task success.
- Reduce unnecessary retries.
- Cache suitable static explanations.
- Improve escalation quality to reduce repeated work.

Each optimization should be evaluated against quality and safety requirements.

## Step 5: Define rollout conditions

Expand only when:
- Critical errors remain below approved limits.
- Transaction facts are grounded in authoritative data.
- Unauthorized access controls are effective.
- Customer satisfaction remains acceptable.
- Cost per successful resolution meets the business target.
- Peak traffic can be handled reliably.
- Incident response and rollback procedures are ready.

## Step 6: Make the decision

The assistant may be economically attractive, but the final decision should be based on the complete workflow and real pilot results.

The team should account for successful and failed requests, escalation costs, quality, reliability, and fixed operating costs before committing to a broad rollout.

# 17. Practical Exercise: Build an AI Cost Model

## Scenario

You are the Product Manager of an online insurance platform.

The platform is introducing an AI assistant that compares individual supplementary health insurance plans and explains coverage differences.

The assistant uses a model API, retrieval from approved policy documents, and occasional human review.

## Task 1: Map the cost stack

Identify costs for:
- Model inference.
- Retrieval and embeddings.
- Document processing.
- External services.
- Infrastructure.
- Monitoring and evaluation.
- Human review.
- Development and maintenance.

Separate recurring fixed costs from usage-dependent costs.

## Task 2: Calculate unit economics

Assume the following hypothetical costs per attempted comparison:

| Component | Cost |
|---|---:|
| Model inference | $0.025 |
| Retrieval | $0.008 |
| Other variable infrastructure | $0.007 |
| Average human review and rework | $0.020 |

The successful comparison rate is 80%.

Calculate:
1. Total variable cost per attempted comparison.
2. Cost per successful comparison.
3. Monthly variable cost for 50,000 attempted comparisons.
4. Monthly variable cost for 200,000 attempted comparisons.
5. The additional cost if the success rate falls to 65%, assuming the same cost per attempt.

Explain why the last scenario may be worse than the arithmetic alone suggests.

## Task 3: Compare two models

Model A:
- Cost per attempted request: $0.020.
- Success rate: 75%.

Model B:
- Cost per attempted request: $0.035.
- Success rate: 92%.

Calculate cost per successful task for both.

Then discuss:
- Whether the cheaper model is preferable.
- How critical error severity changes the decision.
- Whether a routing strategy could improve economics.

## Task 4: Propose optimization experiments

Design three experiments involving:
- Retrieval optimization.
- Model routing.
- Prompt or output-length optimization.

For each, specify:
- Hypothesis.
- Primary metric.
- Quality guardrails.
- Expected economic impact.
- Potential failure modes.

## Task 5: Create a scale forecast

Estimate monthly costs under conservative, expected, and high-usage scenarios.

Document assumptions about:
- Adoption.
- Requests per user.
- Average tokens.
- Model-call count.
- Success rate.
- Human-review rate.
- Peak traffic.

Explain which assumptions have the greatest impact on the forecast.

# 18. Final Challenge: Design the Economics of a Scalable AI Product

You are the Product Manager of a digital investment platform.

The company wants to launch an AI assistant that explains transaction history, summarizes portfolio performance, and answers common investment questions.

The assistant uses a hosted model API and retrieves account data from internal services.

Leadership expects rapid adoption but has not established an AI operating budget.

Your task is to create a complete economic and infrastructure strategy.

## Part A: Define the product workload

Identify:
- Supported tasks.
- Expected request types.
- Typical and complex request sizes.
- Average number of model calls per task.
- Retrieval and tool dependencies.
- Tasks requiring human review.

Explain how workload characteristics affect cost and latency.

## Part B: Build the cost model

Estimate:
- Input and output tokens.
- Model inference.
- Retrieval and tool calls.
- Infrastructure.
- Retries and failures.
- Human review.
- Monitoring and evaluation.
- Fixed development and operational costs.

Calculate cost per request and cost per successful task.

State all assumptions clearly.

## Part C: Compare architecture options

Evaluate:
1. One general-purpose model.
2. A small-model and large-model routing strategy.
3. A hybrid approach using deterministic logic, retrieval, and models.
4. Hosted APIs versus self-hosted models.

Compare cost, quality, latency, reliability, maintenance, and risk.

Recommend the most appropriate initial architecture.

## Part D: Design an optimization plan

Prioritize potential investments in:
- Prompt simplification.
- Retrieval quality.
- Context reduction.
- Model routing.
- Caching.
- Retry control.
- Output-length management.
- Human-review efficiency.

Estimate potential savings and explain how you will prevent quality regressions.

## Part E: Define capacity and reliability requirements

Specify:
- Expected peak request rate.
- Concurrency assumptions.
- Latency targets.
- Provider rate-limit strategy.
- Queueing and overload behavior.
- Fallback behavior.
- Monitoring and alerting.
- Rollback requirements.

Explain how the product will behave during a market disruption when support traffic increases sharply.

## Part F: Build a financial forecast

Create conservative, expected, and high-usage scenarios.

For each scenario, estimate:
- Monthly active users.
- Requests per user.
- Total requests.
- Cost per successful task.
- Total monthly operating cost.
- Human-review workload.
- Expected business value.

Identify the assumptions that could materially change the decision.

## Part G: Define economic decision gates

Determine:
- The maximum acceptable cost per successful task.
- The minimum acceptable task success rate.
- The quality and safety guardrails.
- The required latency and reliability.
- The conditions for expanding the rollout.
- The conditions for narrowing scope or stopping investment.

Explain how these thresholds should be derived from business economics and customer outcomes rather than arbitrary targets.

## Part H: Present your executive recommendation

Deliver a concise recommendation covering:
- The initial use cases.
- The proposed architecture.
- The expected cost structure.
- The major economic uncertainties.
- The optimization roadmap.
- The operational risks.
- The evidence required before scaling.

Your recommendation should show that AI economics is not just about reducing inference costs. It is about building a product whose customer value, quality, reliability, and operating costs remain sustainable as usage grows.

# Key Takeaways

1. **Understand the complete cost stack.** Model inference is only one component of AI product economics.

2. **Track cost per successful task.** The cheapest request is not necessarily the cheapest successful outcome.

3. **Manage context deliberately.** Excessive or irrelevant context increases cost and may reduce answer quality.

4. **Choose models for the workload.** Different tasks may justify deterministic logic, smaller models, larger models, or a combination.

5. **Use routing when it is measurable and justified.** A hybrid architecture can reduce cost, but routing complexity and errors must be evaluated.

6. **Optimize retrieval and prompts carefully.** Reduce waste without removing information required for correct answers.

7. **Cache only when safe.** Freshness, authorization, and invalidation are essential for financial and personalized information.

8. **Plan for peak demand.** Concurrency, rate limits, latency, and provider capacity can matter more than average monthly usage.

9. **Include retries, escalation, and rework.** Failed attempts can make an apparently cheap workflow expensive.

10. **Compare hosted and self-hosted options using total cost of ownership.** Hardware prices alone do not determine the better option.

11. **Forecast several scenarios.** Adoption, usage frequency, model-call count, and task success can significantly change operating costs.

12. **Treat quality as an economic variable.** Poor quality creates rework, support demand, customer harm, and lost trust.

13. **Scale only when economics and product outcomes work together.** Sustainable AI products balance customer value, safety, reliability, and cost.

# Preview of Day 93

**Topic: Product Strategy Under Uncertainty**

Tomorrow, we will return to broader product strategy and examine how Product Managers make strategic choices when markets, technology, competition, and customer behavior are uncertain.

You will learn about:
- Strategic uncertainty versus execution uncertainty.
- Scenario planning.
- Strategic options and reversibility.
- Leading indicators and market signals.
- Investment under uncertainty.
- Assumption mapping.
- Strategic bets and portfolio balance.
- Decision triggers and contingency plans.
- Communicating strategy when outcomes are not guaranteed.
- Applying uncertainty management to fintech and AI products.

The central question will be: **How can a Product Manager commit to a clear strategic direction while preserving the ability to adapt when important assumptions change?**
