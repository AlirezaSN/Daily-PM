# Day 56: API & Developer Products / Technical Product Management

# Learning Objectives

By the end of this lesson, you should be able to:

* Understand what Technical Product Management means
* Distinguish a Technical PM from a traditional PM
* Treat APIs as products rather than technical interfaces
* Understand API-first product thinking
* Identify developer personas and their needs
* Map a developer product journey
* Understand API documentation, SDKs, webhooks, and developer portals
* Understand authentication and authorization at a product level
* Understand API versioning and backward compatibility
* Understand rate limiting and API usage policies
* Understand idempotency and why it matters for transactional APIs
* Design useful API error handling
* Understand sandbox environments
* Understand API lifecycle management
* Work effectively with engineering on technical decisions
* Understand architecture trade-offs without needing to become an architect
* Recognize scalability, reliability, observability, and technical debt as product concerns
* Define technical product metrics
* Prioritize technical initiatives
* Apply technical PM thinking to a fintech API case study

---

# 1. What Is Technical Product Management?

Technical Product Management is product management where a significant part of the product's value depends on technology, software architecture, APIs, infrastructure, data, or developer workflows.

A Technical PM does **not** need to be the best engineer on the team.

Instead, the Technical PM needs enough technical understanding to:

* Understand customer problems
* Communicate effectively with engineers
* Understand technical constraints
* Evaluate architectural trade-offs
* Identify technical risks
* Prioritize technical investments
* Translate technical capabilities into customer value
* Make informed product decisions

A useful mental model is:

```text
Traditional PM

Customer Problem
      ↓
Product Experience
      ↓
Customer Outcome
````

Technical PM:

```text
Customer Problem
      ↓
Product Experience
      ↓
Technical Capability
      ↓
Architecture / APIs / Data / Infrastructure
      ↓
Customer Outcome
```

The Technical PM needs to understand the middle layer.

---

# 2. Technical PM Does Not Mean "Engineer Who Became a PM"

A common misconception is:

> "A Technical PM should be able to design and implement the entire system."

That is not the role.

A Technical PM should understand enough to ask good questions.

For example, an engineer says:

> "We need to introduce asynchronous processing here."

A weak PM might say:

> "Okay."

A Technical PM might ask:

* Why do we need asynchronous processing?
* What problem does it solve?
* What changes for the user?
* What are the trade-offs?
* Does this introduce eventual consistency?
* How does the system behave if processing fails?
* Does the customer need to wait?
* What monitoring do we need?
* What is the migration risk?

The goal is not to dictate the implementation.

The goal is to understand the implications well enough to make a good product decision.

---

# 3. Technical PM vs Traditional PM

There is significant overlap between PM roles.

Both may own:

* Product strategy
* Customer problems
* Prioritization
* Roadmaps
* Metrics
* Stakeholder communication
* Product discovery

The difference is often in the type of product and the depth of technical decision-making required.

| Traditional PM           | Technical PM                               |
| ------------------------ | ------------------------------------------ |
| Customer-facing products | Technical products / platforms             |
| UX heavily visible       | Technical capabilities often invisible     |
| End users                | Developers, engineers, businesses, systems |
| Feature adoption         | API/platform adoption                      |
| UI/UX optimization       | API/DX optimization                        |
| Customer journey         | Developer/system journey                   |
| Product features         | APIs, infrastructure, data, platforms      |
| Business metrics         | Business + technical metrics               |

A Technical PM still needs strong product thinking.

Technical knowledge does not replace product knowledge.

---

# 4. The Technical PM's Core Responsibility

A Technical PM sits at the intersection of:

```text
             Business
                ▲
                │
                │
Product ◄───────┼───────► Technology
                │
                ▼
             Customers
```

The PM connects these dimensions.

For example:

```text
Business goal:
Increase partner integrations

Customer problem:
Integration takes too long

Technical problem:
API is difficult to consume

Product response:
Improve developer experience

Technical initiatives:
SDKs
Better documentation
Simplified authentication
Improved errors
Sandbox environment
```

The Technical PM turns technical work into product outcomes.

---

# 5. APIs as Products

An API is often described as:

> A mechanism that allows software systems to communicate.

Technically correct.

But product management needs a different perspective.

An API is a product when developers rely on it to accomplish a meaningful job.

For example:

```text
GET /accounts/123
```

Technically this is an endpoint.

Product-wise, it might represent:

> "Allow an authorized application to retrieve a customer's account information."

That means the PM needs to think about:

* Who calls the API?
* Why?
* How often?
* What data do they need?
* What permissions are required?
* How reliable must it be?
* What happens when it fails?
* How does the developer discover it?
* How does the developer test it?
* How is it monetized?
* How is it versioned?

The endpoint is only one part of the product.

---

# 6. API-First Thinking

API-first means designing the underlying capabilities and interfaces before building individual experiences around them.

Imagine a company wants to support:

* Mobile
* Web
* Partner applications
* Internal tools

Without API-first thinking:

```text
Mobile
  ↓
Custom backend

Web
  ↓
Custom backend

Partner
  ↓
Custom backend
```

This can lead to duplicated logic.

With a shared API layer:

```text
                  API Layer
              /      |      \
             /       |       \
        Mobile      Web    Partners
```

The API becomes a reusable capability.

However:

> API-first does not mean API-for-everything.

An API should exist when reuse, integration, or system boundaries justify it.

---

# 7. When Should Something Become an API?

Ask:

### 1. Will multiple consumers need the capability?

If only one internal screen needs it, an API may not need to be generalized.

### 2. Does another system need to interact with it?

APIs are useful at system boundaries.

### 3. Does the capability have a stable business meaning?

For example:

```text
Create Payment
Get Customer
Place Order
Get Portfolio
```

These represent meaningful business capabilities.

### 4. Does reuse create leverage?

If five applications need the same capability, centralizing it may make sense.

### 5. Can the interface remain stable?

If the underlying capability changes constantly, exposing it externally may create significant maintenance problems.

---

# 8. Developer Personas

When developers are your customers, traditional personas may not be enough.

Consider:

## The Explorer

They are evaluating your platform.

They care about:

* Documentation
* Examples
* Pricing
* Capabilities
* Ease of integration

## The Implementer

They are actively integrating.

They care about:

* APIs
* SDKs
* Authentication
* Error handling
* Testing

## The Maintainer

They already use your platform.

They care about:

* Reliability
* Version changes
* Monitoring
* Incident communication
* Support

## The Architect

They evaluate whether your platform should become a strategic dependency.

They care about:

* Scalability
* Security
* Architecture
* Compliance
* SLAs
* Long-term stability

A platform should serve all of these personas.

---

# 9. Developer Journey

A developer product has its own customer journey.

```text
Discover
   ↓
Evaluate
   ↓
Register
   ↓
Authenticate
   ↓
Read Documentation
   ↓
Build
   ↓
Test
   ↓
Debug
   ↓
Integrate
   ↓
Deploy
   ↓
Monitor
   ↓
Scale
```

Each stage can have friction.

For example:

```text
Discover
    ↓
"Looks useful."

Documentation
    ↓
"Where is the authentication example?"

Authentication
    ↓
"Why do I need three credentials?"

First request
    ↓
"Why did this return 403?"

Debugging
    ↓
"No explanation."

Result:
    ↓
Developer abandons integration
```

The technical product has lost a customer without a single UI conversion metric changing.

---

# 10. Developer Experience as Product Experience

For developer products:

> DX is UX.

A developer's interface might be:

* Documentation
* API requests
* CLI
* SDK
* Error messages
* Developer portal
* Dashboard
* Logs
* Sandbox

These are equivalent to product screens in many traditional products.

Consider two error messages.

### Poor

```text
Error 400
Invalid request
```

### Better

```text
Error 400

field: amount

reason:
amount must be greater than 0

received:
-10

request_id:
abc123
```

The second dramatically reduces debugging time.

That is a product improvement.

---

# 11. API Documentation

Documentation is one of the most important features of an API product.

Good documentation should answer:

* What does this API do?
* How do I authenticate?
* How do I make my first request?
* What parameters are required?
* What responses should I expect?
* What errors can occur?
* How do I handle failures?
* What are the limits?
* How do I move from sandbox to production?

A good developer journey should include:

```text
Quick Start
    ↓
Authentication
    ↓
First API Call
    ↓
Common Use Cases
    ↓
Reference Documentation
    ↓
Error Handling
    ↓
Production Guide
```

Do not force developers to read 100 pages before they can make their first successful request.

---

# 12. Quick Start vs Reference Documentation

These serve different purposes.

## Quick Start

Goal:

> Get the developer successful as quickly as possible.

Example:

```text
1. Create account
2. Get API key
3. Install SDK
4. Make request
5. See response
```

## Reference Documentation

Goal:

> Provide complete technical details.

It includes:

* Every endpoint
* Parameters
* Response schemas
* Error codes
* Limits
* Authentication details

Both are necessary.

A common mistake is having excellent reference documentation but a terrible quick-start experience.

---

# 13. SDKs

An SDK, or Software Development Kit, makes a platform easier to integrate.

Instead of:

```text
Developer
   ↓
HTTP
   ↓
API
```

the developer may use:

```text
Developer
   ↓
SDK
   ↓
API
```

For example:

```text
tradingClient.placeOrder(...)
```

instead of manually constructing an HTTP request.

SDKs can reduce:

* Boilerplate
* Authentication complexity
* Serialization errors
* Integration time

But SDKs also create maintenance costs.

Every supported language can require:

* Releases
* Documentation
* Bug fixes
* Versioning
* Testing

Therefore:

> Don't create an SDK simply because competitors have one.

Prioritize languages based on actual customer demand.

---

# 14. Developer Portal

A developer portal can be the central home for a technical product.

It may contain:

```text
Developer Portal
│
├── Documentation
├── API Reference
├── API Keys
├── Sandbox
├── Usage Dashboard
├── Logs
├── SDKs
├── Webhooks
├── Support
└── Status
```

A strong portal allows developers to self-serve.

This is especially important for platforms with many customers.

---

# 15. Authentication vs Authorization

These concepts are easy to confuse.

## Authentication

Answers:

> "Who are you?"

Examples:

* API key
* OAuth
* JWT
* mTLS

## Authorization

Answers:

> "What are you allowed to do?"

For example:

```text
Developer authenticated
        ↓
Can read portfolio?
        ↓
YES

Can place trades?
        ↓
NO
```

This distinction is especially important in fintech.

A developer being authenticated does not mean they should have access to every capability.

---

# 16. OAuth

OAuth is commonly used when one application needs delegated access to another system.

Imagine:

```text
User
 ↓
Third-party application
 ↓
Financial platform
```

The user might authorize:

> "Allow this application to view my portfolio."

The third-party application does not necessarily receive the user's password.

Instead, it receives an authorization token with defined permissions.

A PM does not need to implement OAuth.

But a Technical PM should understand the product implications:

* What permissions exist?
* How are permissions displayed?
* How can users revoke access?
* How long do tokens remain valid?
* What happens if access expires?
* What happens if permission is removed?

---

# 17. API Scopes

Scopes define what an application can access.

For example:

```text
accounts:read
portfolio:read
orders:read
orders:write
transactions:read
```

This allows fine-grained permissions.

A dangerous design might simply provide:

```text
full_access
```

for everything.

A better approach is:

```text
Minimum required permission
```

This is known as the principle of least privilege.

For a fintech API, this is particularly important.

---

# 18. Rate Limiting

An API cannot necessarily accept unlimited requests.

Suppose an API allows:

```text
100 requests / minute
```

A client that sends 10,000 requests per minute could:

* Consume excessive resources
* Degrade service
* Affect other customers
* Increase infrastructure costs
* Create abuse risk

Rate limiting controls this.

Common policies include:

```text
100 requests/minute
1,000 requests/hour
100,000 requests/day
```

The product decision is:

> What usage level provides a good customer experience while protecting the platform?

---

# 19. Rate Limiting as a Product Decision

Rate limits are not only technical.

They affect:

* Customer experience
* Pricing
* Infrastructure cost
* Fairness
* Monetization
* Abuse prevention

For example:

```text
Free:
100 requests/minute

Professional:
1,000 requests/minute

Enterprise:
Custom
```

This turns API capacity into part of the business model.

The PM should understand the consequences of different limits.

---

# 20. Webhooks

APIs are often request/response based.

A client asks:

```text
GET /order/123
```

The server responds.

But sometimes the platform needs to tell the customer that something happened.

For example:

```text
Order submitted
       ↓
Order processed
       ↓
Platform sends webhook
       ↓
Customer system receives event
```

A webhook is essentially:

> "Notify me when this event occurs."

Examples:

```text
payment.succeeded
payment.failed
order.filled
order.cancelled
account.updated
```

Webhooks are especially useful for asynchronous processes.

---

# 21. Polling vs Webhooks

Suppose a customer submits an order.

### Polling

The customer repeatedly asks:

```text
Is it complete?
Is it complete?
Is it complete?
Is it complete?
```

### Webhook

The customer says:

> "Tell me when it is complete."

Then:

```text
Order completed
       ↓
Webhook
       ↓
Customer system
```

Webhooks can reduce unnecessary requests and provide faster event delivery.

But they introduce their own product requirements:

* Retry behavior
* Duplicate events
* Security
* Event ordering
* Signature verification
* Failure handling

---

# 22. Idempotency

Idempotency is extremely important for transactional APIs.

Imagine a customer sends:

```text
POST /payments
```

The payment succeeds.

But the network connection fails before the customer receives the response.

The customer does not know whether the payment succeeded.

They retry.

Now you potentially have:

```text
Payment #1 → SUCCESS
Payment #2 → SUCCESS
```

The customer has been charged twice.

Idempotency helps prevent this.

The customer sends an idempotency key:

```text
Idempotency-Key: abc123
```

If the same operation is retried:

```text
Request 1 → abc123 → Payment created
Request 2 → abc123 → Return original result
```

The operation is treated as the same logical request.

For payment, trading, or order APIs, this can be critical.

---

# 23. Why Idempotency Is a Product Concern

A PM does not implement idempotency.

But the PM should understand the customer problem.

Without it:

```text
Network failure
     ↓
Retry
     ↓
Duplicate transaction
     ↓
Customer harm
```

With it:

```text
Network failure
     ↓
Retry
     ↓
Same operation recognized
     ↓
Safe result
```

Therefore, a seemingly technical capability can have enormous customer and business impact.

---

# 24. API Error Handling

Errors are inevitable.

The product question is:

> How can the customer recover from failure?

Useful error responses should communicate:

* What happened?
* Why?
* What can the developer do?
* Is retry appropriate?
* Is the request invalid?
* Is the problem temporary?
* What is the request ID?

For example:

```text
HTTP 429

code:
RATE_LIMIT_EXCEEDED

message:
Too many requests.

retry_after:
30

request_id:
xyz789
```

This is much more actionable than:

```text
Too many requests.
```

---

# 25. Error Categories

A useful conceptual distinction:

## Client Errors

The request is incorrect.

Examples:

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
```

Retrying the same request may not help.

## Server Errors

The platform failed.

Examples:

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

Retrying may sometimes be appropriate.

The API should communicate this clearly.

---

# 26. Retries

Network communication is unreliable.

A request can fail because of:

* Timeout
* Network failure
* Temporary server problem
* Rate limit
* Service dependency failure

Developers often retry.

But careless retries can create more problems.

For example:

```text
Request
 ↓
Timeout
 ↓
Retry
 ↓
Timeout
 ↓
Retry
 ↓
System overloaded
```

This can create a retry storm.

Therefore APIs should define:

* Which errors are retryable
* Retry timing
* Backoff behavior
* Idempotency requirements

A Technical PM should make sure these behaviors are documented.

---

# 27. API Versioning

APIs evolve.

Suppose you have:

```text
/v1/customers
```

and need to introduce breaking changes.

You might create:

```text
/v2/customers
```

Versioning allows existing customers to continue using the previous contract.

However, versioning creates costs.

Now the company may need to maintain:

```text
v1
v2
v3
```

Therefore:

> Versioning is a product lifecycle decision, not just a technical decision.

---

# 28. Backward Compatibility

Suppose the API originally returns:

```json
{
  "name": "John",
  "balance": 1000
}
```

Adding a new field:

```json
{
  "name": "John",
  "balance": 1000,
  "currency": "USD"
}
```

may be backward compatible for many clients.

But changing:

```text
balance
```

from:

```text
number
```

to:

```text
string
```

could break clients.

Breaking changes can include:

* Removing fields
* Renaming fields
* Changing data types
* Changing semantics
* Changing authentication
* Changing error behavior

Platform PMs must understand compatibility because customers may build critical systems on top of the API.

---

# 29. Deprecation

Eventually old versions need to be retired.

A responsible deprecation process might be:

```text
Announce
   ↓
Document migration
   ↓
Provide new version
   ↓
Monitor remaining users
   ↓
Send reminders
   ↓
Final deadline
   ↓
Retire old version
```

Do not surprise customers.

A good platform gives customers enough time to migrate.

---

# 30. Sandbox Environments

A sandbox lets developers test without affecting real production data or money.

For example:

```text
Production
→ Real accounts
→ Real money
→ Real orders

Sandbox
→ Test accounts
→ Fake money
→ Simulated orders
```

For fintech products, sandbox environments are particularly valuable.

A developer can test:

```text
Successful payment
Failed payment
Order rejected
Order filled
Insufficient funds
Expired token
```

without creating real-world consequences.

---

# 31. Good Sandbox Design

A sandbox should not merely exist.

It should support realistic testing.

Developers may need:

* Test accounts
* Test credentials
* Predictable responses
* Simulated failures
* Test data
* Webhook simulation
* Reset capability
* Clear differences from production

One common problem is:

> Sandbox behavior is so different from production that developers discover problems only after launch.

Therefore:

> The closer the sandbox is to production behavior, the more useful it becomes.

---

# 32. API Lifecycle

An API has a lifecycle just like a normal product.

```text
Idea
 ↓
Discovery
 ↓
Design
 ↓
Development
 ↓
Private Beta
 ↓
Public Launch
 ↓
Growth
 ↓
Maturity
 ↓
Deprecation
 ↓
Sunset
```

At each stage, different metrics matter.

### Beta

Focus on:

* Integration success
* Bugs
* Developer feedback

### Growth

Focus on:

* Adoption
* Usage
* Reliability
* Expansion

### Maturity

Focus on:

* Economics
* Reliability
* Compatibility
* Efficiency

### Sunset

Focus on:

* Migration
* Remaining customers
* Risk
* Communication

---

# 33. Technical Discovery

Technical discovery is about understanding what is possible, difficult, risky, or expensive.

Suppose the business asks:

> "Can we support real-time market data?"

The PM should not immediately promise:

> "Yes."

Instead, work with engineering to understand:

* Data sources
* Data volume
* Latency requirements
* Infrastructure
* Licensing
* Scalability
* Cost
* Reliability
* Security
* Regulatory considerations

Then translate those findings into product decisions.

---

# 34. Architecture Trade-offs

Technical decisions often involve trade-offs.

Consider:

### Option A

Simple architecture.

```text
Pros:
Low cost
Fast development
Easy to operate

Cons:
Limited scale
```

### Option B

Distributed architecture.

```text
Pros:
High scalability
Fault isolation

Cons:
More complexity
Higher operational cost
Harder debugging
```

The PM's job is not to choose architecture alone.

Instead ask:

> "What does the product actually require?"

If the product expects:

```text
100 requests/second
```

building infrastructure for:

```text
1,000,000 requests/second
```

may be unnecessary.

Architecture should be proportional to product requirements.

---

# 35. Scalability

Scalability means the system can handle increased demand without unacceptable degradation.

Imagine:

```text
10 users
   ↓
100 users
   ↓
10,000 users
   ↓
1,000,000 users
```

A system that works perfectly for 10 users may fail at 1 million.

PM questions include:

* What growth do we expect?
* What is our current capacity?
* Where are the bottlenecks?
* When do we need to scale?
* What does scaling cost?
* What happens during traffic spikes?

Scalability should be tied to business expectations.

---

# 36. Reliability

Reliability is the probability that a system performs correctly when needed.

Important concepts include:

* Availability
* Latency
* Error rate
* Recovery time
* Failure frequency

For a financial transaction API, reliability may be extremely important.

A useful question is:

> "What happens to the customer if this service is unavailable for 30 seconds?"

Compare:

```text
Recommendation API unavailable
```

with:

```text
Order Placement API unavailable
```

The business consequences are very different.

---

# 37. SLA and SLO

These concepts frequently appear in technical products.

## SLA — Service Level Agreement

A contractual commitment to a customer.

For example:

> 99.9% monthly availability.

## SLO — Service Level Objective

An internal or operational target.

For example:

> 99.95% availability.

A Technical PM should understand what reliability commitment the product makes.

Higher reliability usually costs more.

Therefore:

```text
Reliability
     ↕
Cost
```

The objective is not necessarily 100% availability.

It is:

> The right reliability level for the product's customer and business needs.

---

# 38. Observability

Observability means having enough information to understand what is happening inside a system.

Common components:

* Logs
* Metrics
* Traces
* Alerts
* Dashboards

Imagine:

```text
Customer:
"My order failed."

Bad system:
"No idea why."

Observable system:
Request ID
→ API logs
→ Service trace
→ Database event
→ Error reason
```

Observability reduces diagnosis time.

This directly affects customer experience.

---

# 39. MTTR and Incident Management

MTTR commonly refers to:

> Mean Time To Recovery/Resolve.

Suppose an API fails at:

```text
10:00
```

and service is restored at:

```text
10:20
```

MTTR for that incident is 20 minutes.

Reducing MTTR can be a major platform objective.

A PM should understand:

* Incident detection
* Alerting
* Ownership
* Communication
* Recovery
* Root-cause analysis
* Post-incident actions

For critical products, incident management is part of product management.

---

# 40. Technical Debt

Technical debt is accumulated cost from technical shortcuts, outdated architecture, or deferred improvements.

Example:

```text
Fast implementation
      ↓
Ship quickly
      ↓
Technical shortcut
      ↓
More complexity
      ↓
Future development becomes slower
```

Technical debt is not always bad.

Sometimes deliberately taking a shortcut is correct.

The problem is uncontrolled debt.

A PM should ask:

> "What future product cost does this shortcut create?"

---

# 41. Measuring Technical Debt Through Product Impact

Instead of saying:

> "Engineering wants to refactor."

Ask:

> "What product impact does the current architecture create?"

For example:

```text
Current architecture
       ↓
Every new feature takes 3 weeks
       ↓
Target architecture
       ↓
Feature delivery becomes 1 week
```

Now technical investment has a product outcome.

Other examples:

* Reduce deployment time
* Reduce incidents
* Reduce development cycle time
* Improve API latency
* Increase scalability
* Reduce infrastructure cost

---

# 42. Technical Product Metrics

Technical products often require a combination of technical and product metrics.

## Adoption

```text
Active API clients
```

## Activation

```text
% of developers reaching first successful API call
```

## Integration

```text
Median time to production
```

## Usage

```text
Requests per active customer
```

## Reliability

```text
Availability
Error rate
```

## Performance

```text
P95 latency
```

## Developer Experience

```text
Integration completion rate
Support tickets
Documentation success
```

## Business

```text
Revenue
Gross margin
Customer retention
```

---

# 43. Understanding Percentiles

Technical metrics often use percentiles rather than averages.

Suppose API response times are:

```text
10ms
20ms
25ms
30ms
40ms
50ms
100ms
500ms
2000ms
```

The average might hide poor experiences.

A percentile gives more insight.

For example:

> P95 latency = the latency below which approximately 95% of requests complete.

If:

```text
P95 = 300ms
```

it means roughly 95% of requests are faster than 300ms.

The remaining 5% are slower.

For user-facing or API products, tail latency can be important.

---

# 44. Technical PM Prioritization

Technical PMs often face competing requests.

Example:

```text
A. New API capability
B. Database migration
C. Reliability improvement
D. SDK
E. Technical debt
F. Security improvement
```

A simple framework:

| Initiative  | Customer Impact | Business Impact | Risk Reduction | Effort |
| ----------- | --------------: | --------------: | -------------: | -----: |
| New API     |            High |            High |            Low | Medium |
| Migration   |          Medium |          Medium |           High |   High |
| Reliability |            High |            High |      Very High | Medium |
| SDK         |            High |          Medium |            Low | Medium |
| Tech Debt   |          Medium |            High |         Medium |   High |
| Security    |            High |            High |      Very High | Medium |

Technical work should compete for resources based on expected product impact.

---

# 45. The "Why Now?" Question

Technical initiatives can easily become abstract.

Ask:

> "Why do we need this now?"

For example:

> "We need to migrate databases."

Why now?

Maybe:

```text
Current database capacity
       ↓
80% utilized
       ↓
Expected growth
       ↓
Capacity limit in 6 months
```

Now there is a clear reason.

Or:

> "We need better observability."

Why now?

```text
Incident diagnosis = 3 hours
Target = 30 minutes
Customer impact increasing
```

The technical initiative has a measurable product rationale.

---

# 46. Working With Engineers

A strong Technical PM does not tell engineers:

> "Implement this architecture."

Instead:

```text
PM:
Here is the customer/business problem.

Engineer:
Here are possible technical solutions.

PM + Engineer:
Let's evaluate trade-offs.

Together:
Choose the appropriate solution.
```

The PM should bring:

* Customer context
* Business priorities
* Product requirements
* Constraints
* Expected outcomes

Engineering brings:

* Technical feasibility
* Architecture options
* Implementation complexity
* Technical risks
* Operational considerations

Strong collaboration combines both.

---

# 47. Questions a Technical PM Should Ask Engineers

When reviewing a technical proposal:

### Problem

* What problem are we solving?
* Is this a product requirement or technical preference?

### Alternatives

* What alternatives did we consider?
* Why did we reject them?

### Complexity

* What makes this difficult?
* What is the main source of complexity?

### Scale

* What scale does this support?
* What is the expected bottleneck?

### Reliability

* What happens when a dependency fails?

### Security

* What new security risks are introduced?

### Operations

* How will we monitor it?
* How will we debug it?

### Migration

* How do we migrate existing customers?

### Future

* Does this constrain future product decisions?

These questions demonstrate technical maturity without pretending to be the architect.

---

# 48. Technical PM Anti-Patterns

## Anti-Pattern 1: Becoming the Architect

The PM starts dictating implementation details.

Result:

* Engineers lose ownership
* PM spends too much time in implementation
* Product perspective gets weaker

---

## Anti-Pattern 2: Ignoring Technology

The PM says:

> "Engineering will figure it out."

Result:

* Unrealistic promises
* Hidden dependencies
* Poor prioritization
* Surprise delays

---

## Anti-Pattern 3: Building for Hypothetical Scale

The team builds infrastructure for millions of users before reaching thousands.

Result:

* High cost
* Slow delivery
* Unnecessary complexity

---

## Anti-Pattern 4: Treating Technical Debt as Engineering's Problem

Technical debt eventually affects:

* Speed
* Quality
* Reliability
* Cost
* Product flexibility

Therefore PMs need visibility into it.

---

## Anti-Pattern 5: Measuring Only Business Metrics

A platform can look healthy while developers struggle.

You need both:

```text
Business Metrics
+
Technical Metrics
+
Developer Experience Metrics
```

---

# 49. Technical Product Strategy Framework

When managing a technical product, use this framework:

```text
1. Customer
   ↓
2. Job / Problem
   ↓
3. Business Outcome
   ↓
4. Technical Capability
   ↓
5. API / Interface
   ↓
6. Developer Experience
   ↓
7. Reliability & Security
   ↓
8. Adoption
   ↓
9. Business Impact
```

This prevents technology from becoming disconnected from product strategy.

---

# 50. Fintech Example: Trading API

Imagine a brokerage company wants to expose its trading infrastructure to third-party applications.

Capabilities:

```text
Account
Portfolio
Market Data
Orders
Transactions
Webhooks
```

A developer wants to build:

> An investment analytics application that lets customers view portfolios and execute trades.

The developer journey might be:

```text
Developer
   ↓
Register
   ↓
Create sandbox application
   ↓
Receive credentials
   ↓
Authorize test account
   ↓
Retrieve portfolio
   ↓
Display market data
   ↓
Submit test order
   ↓
Receive order event
   ↓
Handle webhook
   ↓
Request production access
```

---

# 51. Technical Requirements for the Trading API

The PM should consider:

## Authentication

How does the application authenticate?

## Authorization

Can it:

```text
Read portfolio?
Read transactions?
Place orders?
Cancel orders?
```

## Idempotency

What happens if an order request is retried?

## Rate Limits

How many requests can an application make?

## Market Data

What latency is required?

## Order Processing

Is order submission synchronous or asynchronous?

## Webhooks

How does the application know when an order is filled?

## Reliability

What availability is expected?

## Auditability

Can every trading action be traced?

## Security

How are credentials and tokens protected?

---

# 52. Product Trade-Off Example

Suppose engineering proposes two approaches for order processing.

### Option A — Synchronous

```text
Client
  ↓
API
  ↓
Order Engine
  ↓
Response
```

Advantages:

* Simple developer experience
* Immediate response

Disadvantages:

* Can become slow
* Difficult when processing takes time
* More sensitive to downstream failures

### Option B — Asynchronous

```text
Client
  ↓
API
  ↓
Queue
  ↓
Order Engine
  ↓
Webhook
```

Advantages:

* Better for long-running operations
* More resilient
* Scales well

Disadvantages:

* More complex developer experience
* Requires webhook handling
* Requires clear order-state modeling

The PM should ask:

> "Which model best fits the actual customer workflow?"

---

# 53. Technical Product Case Study

You are the PM for a fintech company's public API.

Current situation:

```text
1,000 registered developers
200 active applications
50 production integrations
```

Problems:

* Average integration takes 3 weeks
* Documentation is incomplete
* Developers frequently contact support
* API error messages are unclear
* API availability is 99.5%
* Competitors offer SDKs
* The company wants 200 production integrations within 12 months

Your team has limited capacity.

Potential initiatives:

```text
A. Build SDKs
B. Improve documentation
C. Improve API reliability
D. Add new trading endpoints
E. Improve error messages
F. Build better sandbox
G. Build developer analytics
H. Rewrite API architecture
```

---

# 54. Your Task

Prioritize the initiatives.

Do not simply rank them by technical difficulty.

Consider:

```text
Current problem
        ↓
Developer friction
        ↓
Production conversion
        ↓
Business impact
```

For each initiative answer:

### 1. What problem does it solve?

### 2. Which customer segment benefits?

### 3. What metric should improve?

### 4. What is the expected business impact?

### 5. What technical dependency exists?

### 6. What would you deliberately NOT build yet?

---

# 55. Example Prioritization

A possible strategy could be:

### Priority 1 — Reliability

Current availability:

```text
99.5%
```

If developers are building financial applications, reliability is foundational.

A platform that is difficult to trust will struggle to gain production adoption.

---

### Priority 2 — Documentation

Reducing integration friction can improve conversion quickly.

Target:

```text
Integration time:
3 weeks → 1 week
```

---

### Priority 3 — Error Handling

Better errors reduce debugging time and support demand.

---

### Priority 4 — Sandbox

A strong sandbox can improve developer activation and testing.

---

### Priority 5 — SDKs

Once core experience is stable, SDKs can further reduce integration effort.

---

### Priority 6 — New Trading Endpoints

New capabilities may create additional value, but improving the existing developer journey may produce greater adoption first.

---

### Priority 7 — Developer Analytics

Useful, but potentially less urgent than core reliability and activation.

---

### Priority 8 — Full Architecture Rewrite

A rewrite should not automatically become the priority.

Ask:

> "What measurable product problem requires the rewrite?"

If reliability and scale can be improved incrementally, a full rewrite may not be justified.

---

# 56. A Better Technical PM Mental Model

When an engineer proposes a technical initiative, translate it through four layers.

```text
Technical Initiative
        ↓
Technical Effect
        ↓
Product Effect
        ↓
Business Effect
```

Example:

```text
Caching
   ↓
Lower database load
   ↓
Lower API latency
   ↓
Better developer experience
   ↓
Higher integration success
```

Another:

```text
Database migration
   ↓
Higher capacity
   ↓
Fewer performance incidents
   ↓
Higher reliability
   ↓
Higher customer trust
```

This translation is one of the most valuable skills for a Technical PM.

---

# 57. Technical PM Interview Framework

If an interviewer asks:

> "How would you manage a technical product?"

A strong answer could follow:

```text
1. Understand the customer
2. Understand the business objective
3. Define the technical capability required
4. Work with engineering on solution options
5. Evaluate trade-offs
6. Define product and technical requirements
7. Prioritize based on impact and risk
8. Launch incrementally
9. Measure adoption and technical performance
10. Iterate based on evidence
```

This shows that you are neither:

> "a PM who ignores technology"

nor:

> "an engineer pretending to be a PM."

You are connecting technology to product outcomes.

---

# Key Takeaways

* Technical Product Management combines product thinking with deeper technical understanding.
* A Technical PM does not need to be the team's best engineer.
* APIs should be managed as products when developers depend on them to accomplish meaningful jobs.
* API-first thinking can create reusable capabilities across multiple products.
* Developer experience is product experience.
* Documentation, SDKs, sandboxes, developer portals, error messages, and authentication flows are product surfaces.
* Authentication answers "Who are you?" while authorization answers "What are you allowed to do?"
* Rate limits balance customer needs, infrastructure capacity, cost, and abuse prevention.
* Webhooks allow platforms to communicate events to customers without constant polling.
* Idempotency is particularly important for financial and transactional APIs because it prevents dangerous duplicate operations.
* API versioning and backward compatibility protect customers who depend on your product.
* Sandbox environments allow developers to safely test integrations.
* Technical products have lifecycles: discovery, design, beta, launch, growth, maturity, deprecation, and sunset.
* Scalability should be proportional to expected product demand.
* Reliability is a product characteristic, not merely an engineering metric.
* Observability helps teams understand and recover from failures.
* Technical debt becomes a product problem when it affects delivery speed, reliability, cost, or product flexibility.
* Technical initiatives should be connected to customer or business outcomes.
* The PM should understand architecture trade-offs without unnecessarily dictating implementation.
* A strong Technical PM translates technical work into product and business impact.
* The best Technical PMs create alignment between customers, business, and engineering.

---

# Preview of Day 57

## B2B Product Management & Enterprise Products

Topics:

* What B2B product management is
* B2B vs B2C products
* Enterprise product characteristics
* Business customers vs end users
* Buyer vs user vs decision maker
* Economic buyer
* Champions
* Procurement
* Enterprise sales cycles
* Stakeholder mapping
* Account-based product thinking
* Customer discovery in B2B
* Enterprise jobs-to-be-done
* Product requirements from multiple stakeholders
* Multi-tenancy
* Enterprise permissions and roles
* SSO
* Security and compliance requirements
* Enterprise integrations
* Configurability vs standardization
* Enterprise onboarding
* Implementation
* Customer success
* Enterprise pricing
* Contract value
* Expansion and upsell
* Retention
* Enterprise product metrics
* B2B product roadmap
* Managing large customer requests
* Avoiding one-customer product traps
* B2B product strategy
* Enterprise product case study
