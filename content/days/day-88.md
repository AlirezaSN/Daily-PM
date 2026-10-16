# Day 88: Generative AI Product Design

## Introduction

Generative AI has made it possible to create products that write, summarize, explain, analyze, translate, generate images, and interact with users through natural language. But turning a capable model into a successful product requires much more than connecting an API to a chat interface.

A generative AI model is a component, not a complete product.

A successful product must understand the user's task, provide the right context, produce useful outputs, handle uncertainty, protect sensitive information, and fit into the customer's workflow. It must also operate within acceptable cost, latency, quality, and risk constraints.

Consider an insurance comparison platform. Customers struggle to understand differences between insurance plans, including deductibles, coverage limits, exclusions, and reimbursement conditions.

A generic chatbot might produce fluent explanations of insurance terminology. A well-designed generative AI product would go further:

- Retrieve information from the correct policy documents.
- Compare the relevant conditions across selected plans.
- Distinguish documented facts from interpretation.
- Show the sources behind important claims.
- Ask clarifying questions when customer intent is unclear.
- Admit when the available information is insufficient.
- Direct customers to an appropriate expert when necessary.

The difference is product design.

In this lesson, you will learn how to turn generative AI capabilities into practical product experiences, choose an appropriate technical approach, design interactions, reduce unsupported outputs, evaluate quality, and make responsible trade-offs.

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain the main capabilities and limitations of generative AI.
- Design generative AI experiences around specific customer tasks.
- Understand prompts, context windows, structured outputs, and tool use.
- Explain retrieval-augmented generation (RAG) and when it is useful.
- Decide when to use prompting, retrieval, fine-tuning, or deterministic software.
- Design conversational and non-conversational AI interfaces.
- Reduce hallucinations through grounding, validation, and workflow design.
- Build human-review and fallback mechanisms.
- Define quality, product, safety, and economic metrics.
- Scope a practical generative AI MVP.
- Create a product evaluation plan before launch.

# 1. Understand Generative AI as a Product Component

Generative AI creates new content based on learned patterns and the information provided to the model.

Depending on the model, outputs may include:
- Text.
- Images.
- Audio.
- Video.
- Code.
- Structured data.
- Summaries, classifications, or transformations of existing information.

Large language models (LLMs) are particularly useful for tasks involving language, reasoning-like behavior, and structured interaction. Their outputs are generated from learned patterns and the context supplied to them.

They can produce useful answers without following a separately written rule for every possible input. However, they do not guarantee factual correctness simply because an answer is fluent.

## 1.1 Common product use cases

Generative AI can support several broad categories of tasks.

### Creation

Generate new content.

Examples:
- Drafting marketing copy.
- Writing customer support responses.
- Creating product descriptions.
- Generating code.
- Producing first drafts of reports.

### Transformation

Convert existing information into another form.

Examples:
- Summarizing long documents.
- Rewriting technical content in plain language.
- Translating text.
- Converting unstructured information into structured fields.
- Turning meeting notes into action items.

### Information access

Help users find and understand information.

Examples:
- Answering questions about company policies.
- Explaining insurance coverage.
- Summarizing financial statements.
- Searching internal knowledge bases.
- Finding relevant information in product documentation.

### Analysis and assistance

Help users interpret information and work through a task.

Examples:
- Comparing alternatives.
- Identifying unusual patterns for human review.
- Suggesting follow-up questions.
- Explaining differences between scenarios.
- Helping employees navigate complex workflows.

### Interaction and execution

Use AI to coordinate a workflow or invoke other software capabilities.

Examples:
- Creating a support ticket.
- Preparing a payment instruction for approval.
- Retrieving an order status.
- Updating a record after confirmation.
- Generating a report from authorized data.

These categories overlap. A single product may retrieve information, analyze it, generate an explanation, and prepare an action.

The Product Manager must define which tasks the system is allowed and expected to perform.

## 1.2 Capability is not reliability

A model may successfully complete a task in a demonstration but fail on other inputs.

For example, it may correctly summarize a typical insurance policy while omitting an important exclusion in an unusual document.

This is why product teams must distinguish between:

- **Capability:** Can the model perform the task at all?
- **Reliability:** Does it perform the task consistently across relevant cases?
- **Usability:** Can customers understand and use the result?
- **Safety:** Are failures and harmful outcomes controlled?
- **Value:** Does the result improve the customer or business outcome?
- **Viability:** Can the product operate economically and sustainably?

A strong generative AI product needs all six.

# 2. Start With the User's Task, Not a Chatbot

A frequent design mistake is assuming that every generative AI product needs a conversational interface.

Chat is useful for open-ended exploration, but it is not always the best way to complete a task.

A customer who wants to compare three insurance plans may benefit more from a structured comparison table with AI-generated explanations than from a long conversation.

A support agent may benefit from a suggested response displayed beside a customer record rather than a separate chatbot.

A product manager may benefit from an AI-generated summary embedded directly in an analytics dashboard.

## 2.1 Identify the job to be done

Define the user's task before choosing the interface.

Ask:

- Who is the user?
- What are they trying to accomplish?
- What information do they have?
- What information is missing?
- What makes the task difficult?
- What does a successful outcome look like?
- What happens if the AI is wrong?
- How often does the task occur?

Example:

"We believe customers need help comparing insurance coverage because policy language makes it difficult to understand the practical differences between plans."

This is a better starting point than:

"We should build an AI insurance chatbot."

## 2.2 Choose the right interaction pattern

Different tasks benefit from different interaction patterns.

### Conversational assistant

Useful when the user has an open-ended question or needs to refine a request over several turns.

Example: "Explain how these two plans differ for outpatient treatment."

### Inline assistance

Useful when AI improves a task already being performed.

Example: A customer support agent receives a suggested response inside the support interface.

### Guided workflow

Useful when the task requires specific inputs or a sequence of decisions.

Example: The system asks which coverage categories matter to the customer before preparing a comparison.

### Structured generation

Useful when the expected output has a defined format.

Example: Generating a table of coverage limits, deductibles, exclusions, and source references.

### Background automation

Useful when AI can process information without requiring a conversational interaction.

Example: Extracting key fields from uploaded insurance documents for review.

### Human-in-the-loop assistance

Useful when AI can prepare or recommend an outcome but a person must verify or approve it.

Example: Drafting a customer-facing explanation of a disputed claim for review by an authorized specialist.

The interface should reflect the nature of the task, not the popularity of chat interfaces.

## 2.3 Design around completion, not conversation length

A long conversation is not necessarily a successful interaction.

For a product designed to answer insurance questions, useful outcomes might include:
- The customer understands the relevant policy condition.
- The customer can compare available plans.
- The customer knows which information remains uncertain.
- The customer completes the next step with fewer errors.

A product that answers a question in one accurate interaction may be more valuable than one that generates ten engaging but unnecessary messages.

# 3. Understand Prompts and Context

A prompt is the information and instructions supplied to a generative model to guide its output.

Prompt design matters, but it should not be treated as a substitute for reliable data, appropriate architecture, or product-level safeguards.

## 3.1 Common components of a prompt

A well-designed prompt may include:

- **Role or purpose:** What the system is intended to do.
- **Task:** What the model should produce.
- **Context:** Relevant information about the current situation.
- **Constraints:** What the model must or must not do.
- **Output format:** The required structure.
- **Examples:** Illustrations of acceptable outputs.
- **Fallback instructions:** What to do when information is insufficient.

Consider an insurance assistant.

A weak instruction might be:

"Explain insurance plans to the customer."

A more useful instruction could specify that the assistant should:
- Explain only the plans supplied in the current context.
- Use plain language.
- Distinguish coverage limits from deductibles.
- Identify exclusions when relevant.
- Avoid inventing missing policy conditions.
- State when the available information does not answer the question.
- Include references to the supplied source material.
- Return a structured comparison when asked to compare plans.

The second instruction defines a narrower and more testable task.

However, instructions alone cannot guarantee that the model will always comply. Important requirements should also be supported by system design, validation, and evaluation.

## 3.2 Context windows

A model's context window is the amount of input and conversation information it can process in a request, subject to the model's limits.

Context may include:
- Instructions.
- User messages.
- Conversation history.
- Retrieved documents.
- Tool results.
- Examples.
- Other relevant information.

A larger context window can accommodate more information, but it does not guarantee that every detail will be used correctly.

Providing too much irrelevant context can make the system more expensive and can make important details harder to use reliably.

The product challenge is to provide the **right context**, not simply the largest possible amount.

## 3.3 Context management

Consider a customer asking:

"Does this plan cover outpatient diagnostic tests?"

The product may need:
- The selected plan.
- The applicable policy version.
- The relevant outpatient coverage section.
- The applicable exclusions and conditions.
- The customer's market or jurisdiction, if relevant.
- The previous conversation, if it changes the meaning of the question.

It probably does not need the entire history of unrelated conversations or every available insurance document.

Good context management improves relevance, cost, and control.

## 3.4 Prompt iteration

Prompt development should be treated as an empirical process.

A useful workflow is:

1. Define the task and expected output.
2. Collect representative examples.
3. Write an initial prompt.
4. Test the prompt against those examples.
5. Identify failure patterns.
6. Revise instructions or context.
7. Re-run the same evaluation set.
8. Test against new cases to check for unintended regressions.

Do not optimize a prompt only against the example that initially failed. A change that fixes one case may break another.

# 4. Structured Outputs and Validation

Many product workflows need more than free-form text.

A product may require a model to return specific fields, such as:

- Plan name.
- Deductible.
- Coverage limit.
- Exclusion summary.
- Source reference.
- Whether information is missing.

A structured output format can make it easier for software to consume the result.

## 4.1 Example output structure

A conceptual output for an insurance comparison might look like this:

```json
{
  "plan_name": "Plan A",
  "deductible": {
    "value": 10,
    "unit": "percent",
    "source_reference": "policy_section_4"
  },
  "outpatient_limit": {
    "value": null,
    "status": "not_found"
  },
  "exclusions": [
    {
      "summary": "Coverage is subject to stated exclusions",
      "source_reference": "policy_section_8"
    }
  ]
}
```

This is an illustrative schema, not a claim about a particular insurance policy.

The important distinction is that missing information is represented explicitly rather than replaced with an invented value.

## 4.2 Structured output is not proof of correctness

A response can be valid JSON and still contain incorrect information.

Validation should occur at multiple levels.

**Format validation**
- Are all required fields present?
- Are data types correct?
- Are enumerated values allowed?

**Business validation**
- Is the deductible expressed in the expected unit?
- Is the coverage limit within a plausible range?
- Are required fields populated when the source provides them?

**Source validation**
- Does the referenced document exist?
- Does the source support the extracted value?
- Is the document version correct?

**Workflow validation**
- Is the output sufficient for the next step?
- Does the case require human review?
- Is the system authorized to proceed?

For consequential fields, use deterministic validation and source checks wherever feasible.

## 4.3 Separate generation from calculation

Generative AI is useful for interpreting natural language and producing explanations. Deterministic software is usually preferable for exact calculations when the underlying inputs and formula are known.

For example, if a customer asks how much of an eligible expense remains after a deductible, the system should retrieve the relevant values and apply verified business logic rather than relying on the language model to perform an unchecked calculation.

The AI can explain the result in plain language after the calculation has been verified.

This separation reduces avoidable errors.

# 5. Retrieval-Augmented Generation (RAG)

Retrieval-augmented generation, or RAG, is an approach that supplies relevant external information to a generative model at answer time.

It is useful when an AI product must answer questions using a specific body of information, such as company documentation, policy documents, product catalogs, or customer records.

Instead of relying only on information learned during training, the system retrieves relevant material and uses it as context for generating a response.

## 5.1 Why RAG is useful

A general-purpose language model may not know:
- The latest product pricing.
- The current terms of a particular insurance plan.
- A customer's latest transaction status.
- An organization's internal policies.
- A recently updated support procedure.

RAG can help provide current, task-specific information without requiring the model to memorize every source.

However, RAG does not guarantee correctness. The system may retrieve the wrong information, omit a critical passage, or generate a conclusion unsupported by the retrieved material.

## 5.2 Conceptual RAG workflow

A typical RAG pipeline contains the following stages.

### Stage 1: Prepare the source material

Documents are collected, parsed, cleaned, and divided into useful passages or chunks.

Metadata may identify:
- Document type.
- Version.
- Publication date.
- Product or plan.
- Region.
- Access permissions.

### Stage 2: Index the material

The system prepares the information for retrieval. This may involve keyword search, vector embeddings, or a combination of methods.

An embedding represents information as a numerical vector so that semantic similarity can be used to identify potentially relevant passages.

### Stage 3: Retrieve relevant information

When the user asks a question, the system searches the available material and selects relevant passages.

Retrieval may use:
- Keyword matching.
- Semantic similarity.
- Metadata filters.
- Reranking models.
- Hybrid retrieval.

### Stage 4: Construct the context

The system combines the relevant passages with the task instructions and user question.

It should preserve important source metadata and respect access permissions.

### Stage 5: Generate the answer

The model produces an answer using the retrieved information and the task constraints.

### Stage 6: Validate and present the result

The product checks required formats, source references, and relevant business rules before displaying the answer.

A simplified flow:

```text
User question
     |
     v
Understand the task
     |
     v
Retrieve relevant sources
     |
     v
Filter and rank evidence
     |
     v
Construct model context
     |
     v
Generate answer
     |
     v
Validate claims and format
     |
     v
Display answer with sources
```

The precise architecture depends on the use case. Not every generative AI product needs RAG.

## 5.3 RAG failure modes

RAG introduces its own set of risks.

**Retrieval failure**

The relevant passage is never retrieved.

**Ranking failure**

The system retrieves relevant material but prioritizes a less important or outdated passage.

**Version failure**

The system uses an obsolete document.

**Context failure**

Important qualifications are lost when documents are divided into chunks or assembled into the model's context.

**Generation failure**

The model misinterprets the retrieved material or adds unsupported claims.

**Citation failure**

The response cites a source that does not actually support the claim.

**Permission failure**

The retrieval system returns information the current user is not authorized to access.

A strong RAG product must evaluate the retrieval pipeline and the generated answer separately.

## 5.4 When RAG is appropriate

RAG is a strong candidate when:
- The answer depends on specific documents.
- The source information changes regularly.
- Users need traceability to source material.
- The knowledge base is too large to include in every request.
- The system must use information not reliably available in the model's general knowledge.

RAG may be unnecessary when the task is a simple transformation of user-provided text or when the answer can be computed reliably from structured data.

For example, summarizing a paragraph pasted by the user may not require retrieval infrastructure.

# 6. Choose Between Prompting, RAG, Fine-Tuning, and Deterministic Software

Product teams often debate which AI technique to adopt before clearly identifying the failure they need to solve.

The better approach is to match the technique to the requirement.

## 6.1 Prompting

Prompting changes the instructions and context supplied to an existing model.

Use it when:
- The task is already within the model's capabilities.
- The output needs a clearer structure.
- The model needs more explicit constraints.
- You want to test an idea quickly.

Prompting is usually a good starting point because it can be inexpensive to experiment with.

However, it cannot reliably provide facts that are unavailable in the context or make a fundamentally unsuitable model capable of a task it cannot perform.

## 6.2 RAG

Use RAG when the model needs relevant external information at answer time.

Examples:
- Answering questions about current policy documents.
- Retrieving company support procedures.
- Explaining product terms using an approved knowledge base.

RAG is particularly valuable when traceability and up-to-date information matter.

## 6.3 Fine-tuning

Fine-tuning adjusts a model using additional training examples.

Depending on the model and method, it may help with:
- Consistent task behavior.
- Specialized output formats.
- Domain-specific patterns.
- Particular styles or classification behaviors.

Fine-tuning is not automatically the best way to teach a model frequently changing facts.

If the problem is missing or outdated source information, retrieval or a data integration may be more appropriate.

Fine-tuning also requires suitable training data, evaluation, maintenance, and additional cost.

## 6.4 Deterministic software and business rules

Use conventional software when the outcome can be specified precisely and reliably.

Examples:
- Calculating a deductible.
- Validating mandatory fields.
- Checking transaction limits.
- Applying eligibility rules.
- Enforcing authorization.
- Performing a fixed calculation.

These operations should not depend on a language model's interpretation when correctness can be guaranteed through explicit logic.

## 6.5 Tool use

A generative model can be connected to software tools that retrieve information or perform actions.

For example, an assistant might:
- Retrieve a customer's order status.
- Search a product catalog.
- Query an authorized account balance.
- Prepare a support ticket.
- Draft a payment instruction.

Tool use allows a model to work with current data and external capabilities rather than generating every answer from its own context.

However, tool access must be designed with permissions, validation, error handling, and appropriate user confirmation.

## 6.6 A practical decision table

| Requirement | Starting approach |
|---|---|
| Improve the wording or structure of an answer | Prompting |
| Answer from current, approved documents | RAG |
| Enforce exact business rules | Deterministic software |
| Perform calculations with known inputs | Deterministic software |
| Retrieve current account or order information | Authorized tool or API integration |
| Improve consistent behavior on a specialized task | Evaluate prompting first, then consider fine-tuning |
| Produce a result that needs expert approval | AI-assisted workflow with human review |
| Execute a consequential action | Controlled tools, explicit permissions, validation, and appropriate confirmation |

These approaches can be combined. A production system often uses deterministic rules, retrieval, prompting, and tool use together.

# 7. Design Tool Use and AI-Assisted Workflows

A model connected to tools can do more than answer questions. It can coordinate a sequence of operations.

This introduces additional design considerations.

## 7.1 The model should not have unrestricted authority

Suppose a banking assistant can retrieve account information and initiate transfers.

There is a meaningful difference between:
- Explaining how transfers work.
- Retrieving the status of an existing transfer.
- Preparing a transfer instruction.
- Executing a transfer.

Each step has different consequences and permission requirements.

A product should define which actions the AI can initiate, which require explicit customer approval, and which are never permitted.

## 7.2 Separate intent, decision, and execution

A robust workflow can separate three stages.

**Intent interpretation**

What is the user trying to do?

**Decision and validation**

Is the request allowed, complete, and consistent with business rules?

**Execution**

Perform the approved action through a controlled system.

The model can help interpret natural language, but deterministic authorization and business controls should remain outside the model where appropriate.

For example, a model should not be the sole authority deciding whether a user has permission to transfer funds.

## 7.3 Handle tool failures

A tool may:
- Time out.
- Return incomplete data.
- Return an error.
- Produce an unexpected format.
- Be unavailable.
- Complete an action but fail to return a response.

The product must account for these cases.

For high-impact actions, a timeout does not necessarily mean the action failed. The system may need to check the authoritative transaction status before attempting another action.

This is especially important for payments, where blindly retrying a request can create duplicate transactions unless the underlying operation supports appropriate idempotency controls.

## 7.4 Confirm consequential actions

Confirmation requirements should be proportional to the risk.

Examples:
- Generating a draft email may require no confirmation to produce the draft.
- Sending that email may require explicit approval.
- Preparing a payment may be allowed before confirmation.
- Executing a payment requires stronger authorization and validation.

Do not confuse the model's confidence with the user's authorization.

# 8. Reduce Hallucinations Through Product Design

A hallucination is an output that presents unsupported or incorrect information as if it were true.

Hallucinations are not solved by one prompt instruction. They require a combination of model selection, context design, validation, evaluation, and workflow controls.

## 8.1 Ground answers in authoritative information

When a task depends on specific facts, provide relevant source information.

For an insurance assistant, this might include:
- The current policy document.
- The correct plan version.
- Relevant clauses.
- Applicable limits and exclusions.

The product should make it clear which sources support the answer.

## 8.2 Constrain the task

A broad instruction such as "Answer all insurance questions" creates a much larger problem than a defined task such as "Explain the supplied policy clauses in plain language."

Narrower scope can make behavior easier to evaluate and control.

## 8.3 Allow the system to abstain

A useful AI product should sometimes decline to provide a substantive answer.

For example:
- The source document does not contain the requested information.
- Two authoritative sources conflict.
- The customer has not specified which plan they mean.
- The question requires an authorized decision-maker.
- The request falls outside the product's supported scope.

Abstention is not necessarily failure. In some contexts, it is the correct product behavior.

However, excessive abstention can also make the product useless. Measure both unsupported answers and unnecessary refusals.

## 8.4 Validate important claims

For structured tasks, verify outputs against source data or business rules.

Examples:
- Confirm a coverage limit against the policy record.
- Recalculate a financial figure using deterministic logic.
- Check that a cited document version matches the selected plan.
- Verify that a tool action succeeded before telling the customer it completed.

Validation should focus on the failure modes that matter for the task.

## 8.5 Use a risk-based approach

Not all errors have equal consequences.

A minor wording issue in a draft may be acceptable. A fabricated coverage condition or an incorrect payment status can cause substantial harm.

Classify tasks by their potential impact and define safeguards accordingly.

For high-impact use cases, use stricter evidence requirements, stronger validation, narrower permissions, and more conservative fallback behavior.

# 9. Design Human-in-the-Loop Experiences

Human review can improve quality and provide a way to handle difficult cases.

However, it is not a universal solution. Review has costs, introduces latency, and can fail if reviewers are overloaded or do not have enough information.

## 9.1 Common review patterns

**Review before action**

The AI prepares a result, and a human approves it before execution.

**Review after action**

The AI completes a low-risk task, and a human reviews selected outputs or samples.

**Exception-based review**

The system automatically handles routine cases and routes ambiguous or high-risk cases to a human.

**Continuous quality review**

Reviewers evaluate a sample of outputs to identify systematic failures and improve the system.

## 9.2 Decide when review is necessary

Review may be triggered by:
- Missing information.
- Conflicting sources.
- Low-quality retrieval.
- A high-impact decision.
- An unusual customer situation.
- An output outside the supported scope.
- A failed validation check.

A model-generated confidence score should not be treated as a reliable trigger without validating what that score means.

## 9.3 Measure the operational impact

Track:
- Percentage of cases requiring review.
- Review time per case.
- Reviewer agreement.
- Error rate after review.
- Review backlog.
- Escalation completion time.
- Cost per resolved case.

If a feature sends 60% of requests to human review, its economics may be very different from a feature that safely resolves 95% of routine requests automatically.

The correct threshold depends on the task and the consequences of errors.

# 10. Evaluate Generative AI Products Systematically

Generative AI evaluation requires more than trying a few prompts and deciding whether the answers look good.

A structured evaluation process helps teams compare approaches, detect regressions, and make launch decisions based on evidence.

## 10.1 Create an evaluation dataset

Collect representative examples of the intended task.

Include:
- Typical user requests.
- Different input formats.
- Common edge cases.
- Ambiguous requests.
- Missing information.
- Contradictory information.
- Adversarial or unexpected inputs.
- High-risk cases.
- Examples from important customer segments.

Where appropriate, define a reference answer, expected fields, acceptable answer criteria, or required source references.

The evaluation dataset should reflect real usage rather than only the easiest examples.

## 10.2 Define a task-specific rubric

For an insurance explanation assistant, possible dimensions include:

**Correctness**
- Are the stated facts supported by the applicable policy?

**Completeness**
- Does the answer include material conditions, limitations, or exclusions?

**Grounding**
- Can important claims be traced to the correct source?

**Clarity**
- Can the intended customer understand the explanation?

**Relevance**
- Does the answer address the actual question?

**Appropriate uncertainty**
- Does the system identify missing or conflicting information?

**Safety**
- Does the answer avoid misleading or unauthorized conclusions?

Each dimension needs clear evaluation criteria.

## 10.3 Use multiple evaluation methods

Possible methods include:

**Deterministic checks**

Useful for schemas, required fields, arithmetic, and other objective conditions.

**Reference-based evaluation**

Compare outputs with trusted answers or expected fields.

**Human expert review**

Useful when correctness requires domain knowledge or nuanced judgment.

**Automated model-based evaluation**

A separate model can help assess qualities such as relevance or clarity, but its judgments should be validated against human evaluation, especially for high-impact use cases.

**Real-world product experiments**

Determine whether the feature improves customer outcomes in actual workflows.

No single method is sufficient for every task.

## 10.4 Evaluate the complete system

For a RAG-based assistant, evaluate at least two levels.

**Retrieval quality**
- Was the correct source found?
- Was the relevant passage included?
- Was the current version selected?

**Answer quality**
- Did the response accurately reflect the retrieved evidence?
- Were important qualifications preserved?
- Did the response introduce unsupported claims?

A poor answer can originate from retrieval, generation, source quality, or the product workflow. Diagnosing the failure matters because each requires a different fix.

## 10.5 Regression testing

When a prompt, model, retrieval strategy, or tool changes, rerun relevant evaluations.

A change that improves one metric can degrade another.

For example, making a response more concise might improve readability but remove important qualifications. Switching models might improve latency while reducing performance on a particular language or document format.

Maintain a stable evaluation set and add new cases when real-world failures reveal missing coverage.

# 11. AI Product Economics

Generative AI products may have costs that increase with each interaction.

The economic model depends on the architecture, model, usage patterns, and required quality.

## 11.1 Common cost components

- Model input and output usage.
- Retrieval and reranking.
- Embedding generation.
- Data storage and processing.
- Tool or API calls.
- Hosting and infrastructure.
- Monitoring and evaluation.
- Human review.
- Customer support.
- Development and maintenance.

Different providers and models use different pricing structures, so use actual estimates or measured usage rather than assuming a universal cost.

## 11.2 Cost per successful task

Cost per request is useful, but it can hide differences in usefulness.

Suppose two approaches are available.

**Approach A**
- Average cost per request: $0.02.
- Successful task completion: 60%.

**Approach B**
- Average cost per request: $0.04.
- Successful task completion: 90%.

Assuming the same definition of success and comparable requests:

Approach A:

$0.02 / 0.60 = approximately $0.033 per successful task.

Approach B:

$0.04 / 0.90 = approximately $0.044 per successful task.

Approach A is cheaper per successful task under these assumptions, but the team must also consider error consequences, customer satisfaction, rework, and downstream costs.

If Approach A's failures require expensive human intervention, the apparent advantage may disappear.

## 11.3 Improve economics carefully

Possible approaches include:
- Using smaller or less expensive models for simple tasks.
- Keeping prompts concise.
- Retrieving only relevant context.
- Avoiding unnecessary model calls.
- Caching suitable results.
- Using deterministic software for calculations.
- Routing difficult requests to a more capable model.
- Limiting repeated or excessive requests.
- Improving first-attempt task success.

Optimization should not be based on inference cost alone.

A cheaper model that produces more errors may increase total cost and reduce customer trust.

## 11.4 Define economic guardrails

Depending on the business model, monitor:
- Cost per successful task.
- Cost per active user.
- Cost per paying customer.
- Revenue or margin per AI-assisted workflow.
- Human-review cost.
- Failure and retry cost.
- Usage concentration among heavy users.

For a subscription product, unlimited AI usage can create a mismatch between predictable revenue and variable usage costs. The product may need usage limits, tiered access, or a different pricing model.

# 12. Common Generative AI Design Mistakes

## Mistake 1: Treating a prompt as the entire product

A well-written prompt cannot compensate for poor source data, missing permissions, weak retrieval, or inadequate monitoring.

**Better approach:** Design the complete system and workflow.

## Mistake 2: Making every interaction conversational

Chat can add unnecessary steps to simple tasks.

**Better approach:** Use structured interfaces when they help users complete work more efficiently.

## Mistake 3: Showing fluent text without supporting evidence

Users may trust a confident-sounding answer even when it is incorrect.

**Better approach:** Ground important claims, show sources where useful, and make uncertainty visible.

## Mistake 4: Using fine-tuning to solve every knowledge problem

Fine-tuning is not a universal replacement for current data access.

**Better approach:** Determine whether the problem is model behavior, missing context, or unavailable data before choosing a technique.

## Mistake 5: Ignoring failure and recovery

An AI product may fail silently or leave the user unsure what to do next.

**Better approach:** Define fallback behavior, error messages, correction mechanisms, and escalation paths.

## Mistake 6: Evaluating only average quality

Strong average performance can conceal severe failures in a specific customer segment or high-risk scenario.

**Better approach:** Evaluate important segments, edge cases, and harmful failure modes separately.

## Mistake 7: Optimizing engagement instead of outcomes

Long conversations and repeated use do not necessarily mean the user received value.

**Better approach:** Measure successful task completion and relevant business outcomes.

## Mistake 8: Ignoring source permissions

Retrieval systems may expose information that a user should not be able to access if authorization is applied only at the interface layer.

**Better approach:** Enforce access controls in the data and retrieval path, not merely in the prompt.

# 13. Case Study: Designing an AI Insurance Comparison Assistant

## Business context

A digital platform sells individual supplementary health insurance. Customers compare plans with different premiums, deductibles, coverage limits, and exclusions.

The team wants to introduce an AI assistant that answers customer questions and explains differences between plans.

The platform has access to policy documents and plan data, but those sources may contain inconsistencies or outdated versions.

## Step 1: Define the customer outcome

The goal is not simply to increase chatbot usage.

A more useful objective is:

"Help customers understand material differences between available plans so they can make more informed purchasing decisions with less confusion."

## Step 2: Define the initial scope

The MVP could support:
- Explaining common insurance terminology.
- Comparing specified plan attributes.
- Summarizing relevant exclusions.
- Answering questions using approved policy documents.
- Identifying information that is missing or ambiguous.

It could initially exclude:
- Guaranteeing claim approval.
- Making unsupported medical judgments.
- Interpreting ambiguous contractual conditions as definitive coverage decisions.
- Taking actions on behalf of customers without appropriate authorization.

## Step 3: Choose a technical approach

A plausible architecture combines:

- Structured plan data for premiums, limits, and deductibles.
- Retrieval from approved policy documents.
- Generative AI for plain-language explanations.
- Deterministic comparison logic.
- Source references for important claims.
- Explicit fallback and escalation behavior.

The model should not be responsible for inventing or estimating the premium or coverage limit. Those values should come from authoritative data.

## Step 4: Define the experience

A customer asks:

"Which of these two plans is better for outpatient care?"

The assistant should first establish which plans are being compared and what information is available.

It could then:
1. Retrieve relevant outpatient benefits and exclusions.
2. Compare the stated limits, deductibles, and conditions.
3. Present the differences in a structured table.
4. Explain the practical implications in plain language.
5. Identify missing information.
6. Ask a clarifying question if the customer's priorities are unclear.

It should not assume that one plan is universally better. Suitability depends on the customer's circumstances, preferences, eligibility, and the applicable product terms.

## Step 5: Define the evaluation plan

Create a test set covering:
- Questions about common coverage categories.
- Comparisons involving different deductibles.
- Questions about exclusions.
- Ambiguous policy wording.
- Missing source information.
- Conflicting document versions.
- Questions that require escalation.

Measure source accuracy, completeness, clarity, appropriate abstention, and task completion.

## Step 6: Define the business metrics

Potential metrics include:
- Successful completion of plan comparisons.
- Time required to understand plan differences.
- Customer confidence and comprehension.
- Conversion among eligible users.
- Support requests caused by confusion.
- Cost per successfully completed comparison.

Guardrails should include unsupported coverage claims, misleading comparisons, privacy incidents, and complaints.

## Step 7: Make a scaling decision

Scale only if the assistant improves customer understanding or another meaningful outcome, meets the required quality threshold, and can operate within acceptable cost and risk limits.

If users still misunderstand key exclusions despite engaging with the assistant, the team should investigate whether the problem is model quality, document quality, interface design, or the suitability of the use case itself.

The best solution may require better source data or a redesigned comparison interface rather than a more sophisticated model.

# 14. Practical Exercise: Design a Generative AI Feature

## Scenario

You are the Product Manager of a customer support platform used by a fintech company.

Support agents spend substantial time reading long customer conversations and preparing responses to routine questions.

The company wants to use generative AI to improve agent productivity without reducing answer quality.

## Your tasks

### Task 1: Define the problem

Write a concise problem statement that does not assume AI is the solution.

Identify the users, their current workflow, and the expected business impact.

### Task 2: Choose the interaction pattern

Compare these approaches:
- A separate chatbot.
- Inline response suggestions.
- Conversation summarization.
- Automatic response generation with human approval.

Choose one initial approach and explain why it fits the workflow.

### Task 3: Design the information flow

Specify what information the AI needs, such as conversation history, customer context, approved support documentation, and relevant transaction information.

Explain how you would protect access to sensitive customer data.

### Task 4: Define output constraints

Specify:
- The required output format.
- The approved knowledge sources.
- The types of claims the system must not make.
- When the system should abstain.
- When a human must review the result.

### Task 5: Create an evaluation plan

Include:
- Typical support questions.
- Ambiguous requests.
- Missing customer information.
- Outdated documentation.
- High-impact account or payment issues.
- Cases that require escalation.

Define how outputs will be evaluated.

### Task 6: Measure product impact

Choose metrics for:
- Answer quality.
- Agent productivity.
- Customer outcomes.
- Operational costs.
- Safety and compliance.

Explain how you would determine whether the AI feature actually improves the workflow compared with the current process.

### Task 7: Design the pilot

Describe the initial rollout, success criteria, failure conditions, and decision process for expanding the feature.

# 15. Final Challenge: Build an AI-Powered Insurance Comparison Experience

## Business context

You are the Product Manager of an online platform that helps customers purchase individual supplementary health insurance.

Customers find it difficult to compare multiple insurance plans. The differences include:
- Premiums.
- Deductibles.
- Coverage limits.
- Exclusions.
- Waiting periods.
- Conditions that apply to specific services.

The company wants to launch an AI-powered comparison assistant in 90 days.

You have a small engineering team, limited AI experience, and access to structured plan data and policy documents.

## Your challenge

Prepare a product design and launch plan.

### Part A: Define the user problem

Identify the main customer segment and the most important problem to solve.

Describe the current journey, the pain points, and the expected improvement.

### Part B: Scope the MVP

Choose three to five tasks that the initial assistant should support.

Define:
- What is included.
- What is excluded.
- Which tasks require structured software rather than generative AI.
- Which tasks require human review.

Explain how the MVP can provide value without attempting to answer every possible insurance question.

### Part C: Design the architecture conceptually

Describe the role of:
- Structured plan data.
- Policy document retrieval.
- Prompt instructions.
- Generative AI.
- Deterministic validation.
- Source references.
- Monitoring and logging.
- Human escalation.

Explain how the system will identify the correct plan and policy version.

### Part D: Design the user experience

Create a sample flow for a customer asking:

"Which plan is better if I care most about outpatient treatment?"

Your flow should handle:
- Missing information.
- Different customer priorities.
- Comparison of relevant coverage conditions.
- Source references.
- Uncertain or conflicting information.
- A request for a recommendation that the system cannot safely make.

### Part E: Build the evaluation framework

Design a test set of at least 30 representative questions, grouped by:
- Common factual questions.
- Plan comparisons.
- Exclusions and limitations.
- Ambiguous requests.
- Missing information.
- Conflicting sources.
- High-risk questions.

Define the evaluation rubric and the conditions that must be met before launch.

### Part F: Define success metrics

Specify:
- Three AI quality metrics.
- Three customer experience metrics.
- Two business metrics.
- Three safety or operational guardrails.

Explain how each metric influences the launch decision.

### Part G: Create a 90-day roadmap

Organize the work into three phases.

For each phase, specify:
- The objective.
- The main activities.
- The responsible stakeholders.
- The deliverables.
- The exit criteria.

Include checkpoints for source-data quality, AI evaluation, security, and operational readiness.

### Part H: Make the launch recommendation

Write an executive summary explaining:
1. Why generative AI is appropriate for this problem.
2. Why the chosen scope is the right starting point.
3. How the system will reduce unsupported answers.
4. What risks remain.
5. How the team will measure success.
6. What evidence would justify expanding or stopping the investment.

Your objective is to create a useful, trustworthy, and economically sustainable product—not merely a chatbot that can discuss insurance.

# Key Takeaways

1. **Generative AI is a component, not a complete product.** The overall experience includes data, workflows, interfaces, validation, and operational processes.

2. **Start with the customer's task.** Choose a conversational, structured, inline, or automated experience based on what helps users succeed.

3. **Prompting is only one part of system design.** Good instructions cannot replace accurate data, proper permissions, reliable retrieval, and evaluation.

4. **Use RAG when the task depends on external, changing, or authoritative information.** Evaluate retrieval quality and generated answers separately.

5. **Use deterministic software for exact calculations and mandatory business rules.** Generative AI can explain verified results without being responsible for calculating or inventing them.

6. **Structured outputs make integration easier but do not guarantee correctness.** Validate the schema, business logic, source evidence, and downstream workflow.

7. **Design for uncertainty and failure.** Clarifying questions, abstention, source references, human review, and safe fallbacks are important product capabilities.

8. **Evaluate real tasks, not just impressive examples.** Use representative test cases, expert review, objective checks, and real-world product experiments.

9. **Measure successful outcomes rather than engagement alone.** A short, correct interaction can be more valuable than a long conversation.

10. **Include the full cost of delivering value.** Inference, retrieval, integration, review, support, and error-related costs all affect product economics.

11. **Protect customer data throughout the system.** Authorization and access controls must be enforced in the data and tool layers, not left to prompt instructions.

12. **Keep the scope narrow enough to validate.** A focused product that reliably solves a real problem is usually a better starting point than a broad assistant with unverified capabilities.

# Preview of Day 89

**Topic: AI Product Discovery & Evaluation**

Tomorrow, we will focus on discovering, validating, and evaluating AI product opportunities before investing heavily in development.

You will learn about:
- AI-specific problem discovery.
- Evaluating whether AI is necessary.
- Model feasibility and data readiness.
- Building evaluation datasets.
- Defining quality rubrics and acceptance thresholds.
- Offline evaluation versus real-world experiments.
- Testing edge cases and high-risk scenarios.
- Comparing models and approaches.
- Estimating uncertainty and operational effort.
- Making evidence-based go/no-go decisions.

The central question will be: **How can a Product Manager establish that an AI solution is sufficiently useful, reliable, and safe before scaling it to real customers?**
