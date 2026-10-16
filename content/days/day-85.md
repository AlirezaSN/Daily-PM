# Day 85: APIs, Integrations & Technical Ecosystems

# Learning Objectives

By the end of this lesson, you will be able to:

- Explain what APIs are and how they enable products, services, and systems to communicate.
- Understand the main API types, including REST, GraphQL, SOAP, and event-driven interfaces.
- Distinguish synchronous APIs from asynchronous integrations.
- Understand API contracts, endpoints, requests, responses, authentication, authorization, and error handling.
- Evaluate API capabilities and limitations from a product-management perspective.
- Understand webhooks, polling, rate limits, versioning, idempotency, and backward compatibility.
- Identify the risks of depending on third-party services and external platforms.
- Make better build, buy, and partner decisions involving APIs.
- Plan and prioritize integrations based on customer value, cost, reliability, security, and strategic importance.
- Apply API and integration concepts to fintech products, including payments, insurance, identity verification, and cryptocurrency exchanges.

---

# 1. What Is an API?

API stands for Application Programming Interface.

An API defines how one software system can request capabilities or exchange information with another system.

Think of an API as an agreed communication interface between software components.

For example, a digital wallet application might need to retrieve a customer's account balance.

The mobile application does not necessarily connect directly to the database that stores the balance. Instead, it sends a request to a backend service through an API.

The backend processes the request, retrieves the appropriate information, and returns a response.

A simplified interaction looks like this:

1. The customer opens the wallet application.
2. The application requests the account balance.
3. The backend authenticates the request.
4. The backend retrieves the relevant account information.
5. The backend returns the balance.
6. The application displays it to the customer.

The API defines how the application requests the balance and what the response looks like.

## 1.1 Why APIs matter to Product Managers

APIs influence what a product can do, how quickly it can evolve, and how much it costs to maintain.

They determine how easily a product can:

- Integrate with payment providers.
- Retrieve market data.
- Verify customer identities.
- Issue insurance policies.
- Connect with external partners.
- Share capabilities across internal applications.
- Allow third-party developers to build extensions.
- Support multiple platforms using the same backend.

A product manager does not need to implement APIs personally, but should understand their capabilities, limitations, and implications.

For example, a payment provider might offer an API that supports payment initiation but not reliable transaction-status notifications. That limitation could affect the user experience, reconciliation process, and support workload.

The provider's API is therefore not just an engineering detail. It shapes the product.

## 1.2 APIs are contracts

An API is more than a URL that accepts requests.

It defines a contract between the system providing a capability and the system consuming it.

The contract may specify:

- Available operations.
- Required parameters.
- Response formats.
- Authentication requirements.
- Authorization rules.
- Error responses.
- Rate limits.
- Performance expectations.
- Versioning policies.
- Compatibility guarantees.

If the contract changes unexpectedly, the consuming application may break.

This is why API design and integration management require clear ownership and disciplined change management.

---

# 2. How an API Request Works

Consider a customer purchasing an individual supplementary health insurance policy.

The purchase journey may involve:

1. Selecting an insurance plan.
2. Entering customer information.
3. Checking eligibility.
4. Calculating the premium.
5. Creating a purchase application.
6. Completing payment.
7. Confirming the purchase.
8. Retrieving policy information.

Several systems may participate in this journey.

For example:

- The frontend application.
- The product's backend.
- An insurance provider's system.
- A payment gateway.
- An identity-verification service.
- A notification provider.

Each integration introduces a contract and a dependency.

## 2.1 Endpoints

An endpoint is a specific address through which an API exposes an operation or resource.

Examples:

```http
GET /v1/accounts/123/balance
POST /v1/payments
GET /v1/payments/pay_456
````

These examples illustrate common REST-style patterns. Actual endpoints depend on the API design.

An endpoint typically combines a URL path with an HTTP method.

## 2.2 HTTP methods

Common HTTP methods include:

| Method | Typical purpose                   | Example                                      |
| ------ | --------------------------------- | -------------------------------------------- |
| GET    | Retrieve information              | Get an account balance                       |
| POST   | Submit data or create a resource  | Create a payment                             |
| PUT    | Replace a resource representation | Replace a saved configuration                |
| PATCH  | Partially update a resource       | Update a customer's notification preferences |
| DELETE | Remove a resource                 | Delete a saved integration                   |

These are conventions rather than universal guarantees.

For example, some APIs use POST for operations that retrieve information or trigger business actions. A PM should understand the provider's documented behavior rather than assume that every API follows the same design.

## 2.3 Requests and responses

An API request may contain:

- A method.
- A URL.
- Headers.
- Query parameters.
- A request body.
- Authentication credentials.
- An idempotency key.

A response may contain:

- An HTTP status code.
- Response headers.
- Data.
- Error information.
- Request or correlation identifiers.

Example request:

```
POST /v1/payments
Authorization: Bearer <access_token>
Idempotency-Key: order-789-attempt-1
Content-Type: application/json
```

Example body:

```
{
  "amount": 250000,
  "currency": "IRR",
  "recipient_id": "recipient_123"
}
```

A simplified response might be:

```
{
  "payment_id": "pay_456",
  "status": "pending"
}
```

These examples are illustrative, not a real provider specification.

The important product detail is that a response with `status: pending` does not mean the payment is complete. The product needs a defined way to determine the final outcome.

## 2.4 Status codes

HTTP status codes communicate the general result of a request.

Common examples include:

- `200 OK`: The request succeeded.
- `201 Created`: A resource was created.
- `202 Accepted`: The request was accepted for processing, which may continue asynchronously.
- `400 Bad Request`: The request was invalid.
- `401 Unauthorized`: Authentication is missing or invalid.
- `403 Forbidden`: The caller is not permitted to perform the operation.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The request conflicts with the resource's current state.
- `429 Too Many Requests`: A rate limit was exceeded.
- `500 Internal Server Error`: The server encountered an unexpected problem.
- `503 Service Unavailable`: The service cannot currently handle the request.

These codes are useful signals, but the response body and API documentation matter too.

A payment request returning HTTP 200 might still describe a declined payment in its business-level response. Likewise, an HTTP 202 response might mean that a transaction has only entered a processing queue.

Always distinguish transport-level success from business-level success.

# 3. Common API Types

Different API styles offer different capabilities and trade-offs.

## 3.1 REST APIs

REST is a widely used architectural style for APIs that expose resources through standard HTTP mechanisms.

Example:

```
GET /v1/customers/123
GET /v1/customers/123/policies
POST /v1/policies
```

Advantages:

- Widely supported.
- Familiar to developers.
- Works well with standard HTTP infrastructure.
- Often straightforward to document and test.
- Suitable for many web and mobile applications.

Potential limitations:

- Multiple requests may be needed to retrieve related data.
- Response structures can sometimes contain more or less data than the client needs.
- Poorly designed endpoints can create tight coupling.

REST is not automatically the best choice for every integration, but it is a common default for many web services.

## 3.2 GraphQL

GraphQL allows a client to request specific fields from a graph of related data through a defined schema.

For example, a client might request:

- Customer name.
- Active policies.
- Policy status.
- Premium amount.

The response can contain the requested fields in a single structured result.

Advantages:

- Clients can request the fields they need.
- Related data can often be retrieved in one request.
- A schema provides a structured description of available data.
- Different clients can request different views of the same underlying information.

Potential limitations:

- Caching can be more complex.
- Query complexity needs to be controlled.
- Authorization must be enforced at the appropriate level.
- Poorly designed queries can create expensive backend operations.
- The schema and resolver architecture can require additional operational discipline.

GraphQL does not eliminate backend complexity. It changes how clients express their data requirements.

## 3.3 SOAP APIs

SOAP is a protocol for structured message exchange, commonly associated with XML-based messages and formal service contracts.

It remains relevant in some enterprise and legacy systems, including financial services, insurance, and government environments.

Advantages may include:

- Formal contracts.
- Established enterprise integration patterns.
- Support for certain mature security and transaction standards.

Potential limitations include:

- More verbose message formats.
- Greater complexity for some developers.
- Less convenient integration with certain modern frontend ecosystems.

A PM working with an insurer or bank may encounter SOAP even if the company's newer services use REST.

The practical question is whether the interface meets the product's requirements, not whether it uses the newest technology.

## 3.4 RPC and gRPC

Remote Procedure Call (RPC) styles let one system invoke operations exposed by another.

gRPC is an RPC framework that commonly uses Protocol Buffers for message definitions and supports efficient communication between services.

It can be useful for internal service-to-service communication where performance, strong contracts, and generated client code are important.

However, it may introduce additional requirements for tooling, browser compatibility, gateways, and debugging.

## 3.5 Event-driven interfaces

Not every integration works through a request followed by an immediate response.

In event-driven systems, a service publishes an event when something happens.

Examples:

- `PaymentCompleted`
- `PolicyIssued`
- `OrderFilled`
- `IdentityVerificationFailed`

Other systems subscribe to or consume these events.

For example, when an insurance policy is issued, the system might publish an event that triggers:

- A customer notification.
- An update to the purchase journey.
- An analytics event.
- An internal reporting update.

Event-driven integration can reduce tight coupling between systems, but it also introduces challenges involving delivery guarantees, duplicate events, ordering, and eventual consistency.

# 4. Synchronous vs. Asynchronous Integrations

One of the most important integration decisions is whether an operation must complete during the request-response interaction or can continue in the background.

## 4.1 Synchronous integration

In a synchronous interaction, the caller waits for the operation to return a response.

Example:

A mobile application requests an account balance, and the backend returns the result.

This is appropriate when the customer or calling service needs the response before continuing.

Advantages:

- Straightforward request-response behavior.
- Immediate feedback when the operation completes.
- Easier to reason about for simple interactions.

Risks:

- The caller may be blocked while waiting.
- A slow dependency can affect the entire journey.
- Timeouts create uncertainty when an operation may have completed remotely.
- Availability may depend on several services being healthy at once.

## 4.2 Asynchronous integration

In an asynchronous interaction, the initial request starts an operation that completes later.

Example:

A customer submits an insurance purchase application. The platform accepts the application and returns a reference number. The insurer processes the application later and sends a status update.

Advantages:

- Long-running work does not need to complete within a short request timeout.
- Services can operate with less direct coupling.
- Work can be queued and retried.
- The customer can be informed when processing completes.

Risks:

- Customers need a clear pending state.
- Operations may complete out of order.
- Events may be delayed or duplicated.
- Failed messages may require recovery.
- The product needs a way to track the operation's lifecycle.

## 4.3 Choosing the right model

Consider the operation's duration, customer expectations, and consequences of failure.

| Operation                 | Possible integration model                      | Key consideration                               |
| ------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| Retrieve account balance  | Synchronous                                     | Freshness and response time                     |
| Submit a payment          | Synchronous acceptance, asynchronous completion | Acknowledgment is not necessarily final success |
| Verify identity           | Synchronous or asynchronous                     | Provider latency and review states              |
| Issue an insurance policy | Often asynchronous                              | External processing and status updates          |
| Send a notification       | Usually asynchronous                            | Retries and duplicate prevention                |
| Process a large report    | Asynchronous                                    | Job status and completion time                  |

These are common patterns, not strict rules. The right design depends on the provider and product requirements.

# 5. API Contracts and Data Models

An API contract defines the expected interaction between a provider and a consumer.

It describes more than which endpoint to call.

## 5.1 Request and response schemas

A schema defines the structure and meaning of the data exchanged.

For example, a payment API might require:

- Amount.
- Currency.
- Recipient.
- Idempotency key.

It may return:

- Payment identifier.
- Status.
- Creation time.
- Error details.

A schema can also define:

- Data types.
- Required and optional fields.
- Allowed values.
- Length constraints.
- Nullability.
- Validation rules.

A small contract change can have a large impact if it changes the meaning or availability of a field.

## 5.2 Required versus optional fields

Suppose a provider changes a response so that `transaction_status` can be null while a transaction is being processed.

If the consuming application assumes the field always contains a final status, it may display an incorrect result or fail.

The PM should ensure that integration requirements explicitly cover intermediate states, missing fields, and unexpected responses.

## 5.3 Business semantics

Two APIs can use the same field name but mean different things.

For example, `completed_at` might mean:

- The time a payment was accepted.
- The time the payment was settled.
- The time the provider sent confirmation.
- The time the record was updated.

These differences matter for reconciliation, customer communication, and reporting.

A good integration contract defines business meaning, not only data types.

## 5.4 Schema evolution

APIs evolve over time.

Providers may add fields, introduce new states, deprecate operations, or change validation rules.

A robust consumer should handle changes according to the documented compatibility contract.

For example, adding a new payment status may break a consumer that assumes only three status values exist.

The consuming system should be designed to handle unexpected or newly introduced states safely where appropriate.

# 6. Authentication, Authorization, and API Security

Integrations often expose sensitive customer or business capabilities.

Security must be designed into the integration rather than added after implementation.

## 6.1 Authentication

Authentication verifies the identity of the caller.

Common mechanisms include:

- API keys.
- OAuth 2.0 access tokens.
- Mutual TLS certificates.
- Signed requests.
- Session-based credentials in certain application contexts.

The correct mechanism depends on the API and security requirements.

## 6.2 Authorization

Authorization determines what the authenticated caller is allowed to do.

For example, a service may be authenticated but only authorized to retrieve policy information, not issue a policy or initiate a refund.

The principle of least privilege means granting only the permissions needed for the intended task.

## 6.3 OAuth 2.0

OAuth 2.0 is a framework for delegated authorization.

It allows a client to obtain access tokens that represent specific permissions or scopes.

For example, an integration might receive permission to read customer account information but not initiate transfers.

The details depend on the authorization flow and provider implementation.

OAuth 2.0 is not, by itself, a complete authentication protocol for identifying end users. OpenID Connect adds an identity layer on top of OAuth 2.0 for that purpose.

## 6.4 API keys and secrets

API keys and client secrets should be protected.

Common risks include:

- Embedding private credentials in mobile applications.
- Committing secrets to source control.
- Logging credentials.
- Reusing the same key across unrelated environments.
- Giving keys excessive permissions.
- Failing to rotate compromised credentials.

A private server-side credential should not be treated as secret if it is distributed inside a public mobile or browser application.

## 6.5 Sensitive data

Integration payloads may contain:

- Personal identification details.
- Financial information.
- Insurance information.
- Authentication data.
- Account identifiers.

Product teams should consider:

- Data minimization.
- Encryption in transit.
- Access control.
- Logging restrictions.
- Retention policies.
- Consent and legal requirements.
- Regional data-transfer constraints.

A provider's API documentation may explain what data it accepts, but the product team still needs to decide what data it should send.

# 7. Error Handling and Failure Semantics

External services fail in different ways, and those failures require different product behavior.

## 7.1 Common failure categories

An integration can fail because of:

- Invalid input.
- Authentication failure.
- Insufficient permissions.
- Rate limiting.
- Network problems.
- Timeouts.
- Provider outages.
- Business-rule rejection.
- Unexpected response formats.
- Partial processing.
- Duplicate requests.
- Data inconsistency.

Treating all failures as "something went wrong" makes it harder to design safe behavior.

## 7.2 Technical failure versus business rejection

Consider a payment request.

Possible outcomes include:

- The request was invalid.
- The payment was declined.
- The provider is unavailable.
- The request timed out, and the outcome is unknown.
- The payment was accepted but is still processing.
- The payment completed successfully.

These outcomes require different customer messages and recovery behavior.

A declined payment may require a different payment method.

A provider outage may require the customer to wait or try again later.

An unknown outcome may require status verification before another attempt is allowed.

## 7.3 Timeouts

A timeout means the caller did not receive a response within the configured time.

It does not necessarily mean the operation failed.

Imagine that a customer submits a payment and receives a timeout.

The payment provider may already have processed the payment, but its response was delayed or lost.

If the application immediately submits a new payment without appropriate safeguards, the customer may be charged twice.

The product should distinguish between:

- Confirmed failure.
- Confirmed success.
- Pending processing.
- Unknown outcome.

The appropriate recovery path should be defined with engineering and the provider.

## 7.4 Retries

Retries can recover from temporary failures.

However, retries should be bounded and designed carefully.

Important questions include:

- Which errors are retryable?
- How many attempts are permitted?
- How long should the system wait?
- Can the request safely be repeated?
- Is there an idempotency mechanism?
- What happens if the provider remains unavailable?

Unbounded retries can amplify an outage by increasing load on an already struggling service.

## 7.5 Idempotency

Idempotency helps prevent repeated requests from producing unintended duplicate effects.

Suppose a client sends a payment request with an idempotency key. If it must retry the same logical request, the provider can recognize the repeated attempt and return the original result rather than creating a second payment.

The exact behavior depends on the provider's implementation.

PMs should clarify:

- Which operations support idempotency.
- How keys are generated.
- How long keys remain valid.
- Whether repeated requests must have identical parameters.
- How the system recovers when the original outcome is unknown.

Idempotency is especially important for payments, orders, refunds, and other operations where duplicate effects can cause harm.

## 7.6 Compensation and reconciliation

Some multi-step business processes cannot be completed atomically across all participating systems.

For example:

1. A customer submits an insurance purchase.
2. Payment succeeds.
3. The insurer's policy-issuance system becomes unavailable.
4. The policy is not yet issued.

The product must have a plan for this partial state.

Possible responses include:

- Retrying policy issuance safely.
- Tracking the purchase as pending.
- Reconciling payment and policy records.
- Refunding the payment when the business rules require it.
- Escalating unresolved cases for manual review.

The correct response depends on the business process and legal obligations.

A successful API call at one step does not guarantee that the overall customer journey is complete.

# 8. Rate Limits, Quotas, and API Capacity

API providers often restrict how many requests a consumer can make.

These limits protect infrastructure, manage costs, and ensure fair resource usage.

## 8.1 Rate limits

A rate limit might allow a certain number of requests per second, minute, or day.

For example, a provider could permit 100 requests per second for a particular endpoint.

That is only an illustrative limit; actual limits depend on the provider and contract.

Exceeding a limit may produce a response such as HTTP 429.

## 8.2 Quotas

A quota limits total usage over a longer period.

For example:

- A maximum number of identity verifications per month.
- A monthly limit on market-data requests.
- A maximum number of notifications.
- A usage cap tied to a subscription plan.

Rate limits and quotas are different. A system may be within its monthly quota but exceed a short-term rate limit.

## 8.3 Product implications

API limits can affect:

- Customer onboarding.
- Batch processing.
- Real-time updates.
- Market-data freshness.
- Search and reporting.
- Cost forecasts.
- Growth capacity.

Before committing to a product experience, verify that the provider can support the expected traffic and growth.

## 8.4 Capacity planning for integrations

Estimate expected usage using assumptions such as:

- Number of active customers.
- Requests per customer.
- Peak concurrent activity.
- Batch workloads.
- Retry behavior.
- Growth scenarios.

For example, a market-data integration might support current traffic but become insufficient when the exchange introduces additional trading pairs or more frequent price updates.

The team should identify whether the provider offers higher tiers, dedicated capacity, caching allowances, or alternative integration models.

# 9. Polling, Webhooks, and Event Delivery

Many integrations need to communicate changes that occur after the original request.

For example, a payment may complete several seconds after submission.

Two common approaches are polling and webhooks.

## 9.1 Polling

Polling means periodically asking a service whether something has changed.

Example:

```
GET /v1/payments/pay_456
```

The client might request the payment status every few seconds until the payment reaches a terminal state.

Advantages:

- Simple to understand.
- Useful when the provider has no webhook support.
- The consumer controls when to check.

Limitations:

- Creates repeated requests.
- Can waste capacity when nothing changes.
- May introduce delay between an event and its discovery.
- Can exceed rate limits if implemented poorly.

Polling should have sensible intervals, stopping conditions, and backoff behavior.

## 9.2 Webhooks

A webhook is an HTTP callback sent by one system to another when an event occurs.

For example, a payment provider might send a notification that a payment has completed.

A webhook payload might contain:

```
{
  "event_id": "evt_123",
  "event_type": "payment.completed",
  "payment_id": "pay_456",
  "occurred_at": "2026-10-15T12:00:00Z"
}
```

This is an illustrative payload.

Advantages:

- Updates can arrive without constant polling.
- Event-driven workflows can respond quickly.
- Unnecessary status requests may be reduced.

Limitations:

- The receiver must be reachable.
- Events may be delayed or duplicated.
- Events may arrive out of order.
- Delivery may fail and require retry.
- The receiver must verify that the event is authentic.

## 9.3 Webhook reliability

A robust webhook integration should address:

- Signature verification.
- Authentication.
- Duplicate event handling.
- Event ordering.
- Retry behavior.
- Acknowledgment rules.
- Delivery logs.
- Dead-letter handling where appropriate.
- Reconciliation when events are missed.

A receiver should generally acknowledge a webhook after safely accepting it for processing, not after performing an arbitrarily long chain of downstream work.

The exact acknowledgment and retry behavior should follow the provider's contract.

## 9.4 Webhooks are not always the source of truth

A webhook can be delayed, duplicated, or lost after exhausting retries.

For important financial operations, the system may need to query the provider or reconcile records periodically.

A robust approach often combines event-driven updates with a reliable method of checking the authoritative transaction state.

## 9.5 Example: Insurance policy issuance

Suppose a customer completes payment for an insurance policy.

The payment provider sends a payment-completed webhook. The platform then requests policy issuance from the insurer.

The insurer processes the request asynchronously and later sends a policy-issued webhook.

The purchase journey needs to handle:

- Payment completion before policy issuance.
- Duplicate payment events.
- Delayed policy issuance.
- Failed policy issuance.
- Duplicate policy-issued events.
- Missing notifications.
- Reconciliation between payment and policy records.

This illustrates why integration planning should include the entire business workflow, not just the initial API call.

# 10. API Versioning and Backward Compatibility

APIs evolve as products and providers change.

Versioning helps manage those changes without breaking existing consumers.

## 10.1 Why versioning matters

Imagine that a provider changes a payment response from:

```
{
  "status": "completed"
}
```

to a new representation with different field names and status values.

If an existing client depends on the old response structure, the change could break payment confirmation.

Versioning and compatibility policies help reduce this risk.

## 10.2 Common versioning approaches

Some APIs use version numbers in URLs:

```
/v1/payments
/v2/payments
```

Others use headers, media types, or a different contract-management approach.

The versioning method matters less than the provider's policy for changes, migration, and support.

## 10.3 Breaking versus non-breaking changes

Potentially breaking changes include:

- Removing a field.
- Renaming a field.
- Changing a field's meaning.
- Making an optional field mandatory.
- Changing an operation's behavior.
- Removing an accepted status value.
- Changing authentication requirements.

Potentially compatible changes include adding an optional response field, assuming the API's compatibility rules allow it and consumers tolerate unknown fields.

Even seemingly additive changes can break clients that make assumptions about response schemas or enum values.

## 10.4 Deprecation

Deprecation means a capability is scheduled for retirement or is no longer recommended, even if it remains available temporarily.

A provider may announce that an API version will be retired after a specified date.

The consuming product team should track:

- Deprecation notices.
- Migration deadlines.
- Required code changes.
- Testing needs.
- Vendor support windows.
- The consequences of missing the deadline.

An external provider's versioning policy can become a roadmap dependency.

# 11. API Documentation and Developer Experience

API documentation is a key part of an integration's usability.

Good documentation helps developers understand how to implement, test, and troubleshoot the interface.

## 11.1 What good documentation includes

Useful API documentation typically explains:

- Authentication.
- Available endpoints.
- Request and response schemas.
- Required and optional fields.
- Error codes.
- Rate limits.
- Webhook behavior.
- Versioning.
- Idempotency.
- Example requests.
- Sandbox environments.
- Testing procedures.
- Known limitations.

The documentation should explain business semantics as well as technical syntax.

For example, a payment API should clearly describe what each payment status means and which transitions are possible.

## 11.2 API sandbox

A sandbox is a non-production environment for testing an integration.

It can allow developers to simulate:

- Successful operations.
- Declined transactions.
- Invalid requests.
- Timeouts.
- Webhook delivery.
- Unusual status transitions.

A sandbox is useful, but it may not behave exactly like production.

Before launch, the team should understand differences in:

- Data.
- Traffic limits.
- Provider behavior.
- Latency.
- Supported scenarios.
- Operational reliability.

## 11.3 API quality as a product capability

For a company offering APIs to external developers, the API itself is a product.

Its quality includes:

- Clear documentation.
- Predictable behavior.
- Stable contracts.
- Useful error messages.
- Easy onboarding.
- Good sandbox support.
- Reliable performance.
- Clear support and deprecation policies.

A technically functional API can still provide a poor developer experience if it is difficult to discover, understand, test, or maintain.

# 12. Third-Party Integrations and Dependency Risk

External integrations allow products to offer capabilities without building every component internally.

However, every dependency introduces risk.

## 12.1 Common dependency risks

### Availability risk

The provider may experience outages or degraded performance.

### Capability risk

The provider may not support a required workflow, status, or business rule.

### Commercial risk

Pricing may change, usage limits may increase costs, or contract terms may become less favorable.

### Regulatory risk

The provider's operating model may not meet the product's legal or regulatory requirements.

### Security and privacy risk

The provider may process sensitive information or introduce new security exposure.

### Change risk

The provider may modify its API, deprecate functionality, or change behavior.

### Concentration risk

The product may depend heavily on one provider without a practical alternative.

### Exit risk

Replacing the provider may require substantial engineering effort, data migration, contract changes, or customer disruption.

## 12.2 Evaluate the dependency's strategic importance

Not all integrations deserve the same level of abstraction or contingency planning.

For a low-impact analytics widget, a simple integration may be sufficient.

For a payment provider responsible for a large share of revenue, the team may need:

- More extensive monitoring.
- Stronger contractual protections.
- Better recovery procedures.
- A tested fallback strategy.
- A clear exit plan.
- More rigorous reconciliation.

The appropriate investment depends on the cost and consequences of failure.

## 12.3 Avoid unnecessary coupling

A product can become tightly coupled to a provider's specific data model and business rules.

For example, if every internal component uses the provider's proprietary payment statuses directly, switching providers may require changes throughout the application.

A carefully designed internal interface can reduce this dependency by translating provider-specific behavior into a stable internal model.

However, excessive abstraction also has costs. It can hide useful provider capabilities or create a complex framework that is difficult to maintain.

The right level of abstraction depends on the likelihood of change and the consequences of being locked into a provider.

# 13. Build, Buy, or Partner: Integration Decisions

When a product needs a new capability, the team must decide whether to build it, buy a solution, or partner with an existing provider.

APIs often make the latter two options practical.

## 13.1 Build internally

Building may be appropriate when:

- The capability is strategically differentiating.
- The company needs substantial control.
- Existing providers do not meet critical requirements.
- Internal expertise is available.
- The long-term economics justify the investment.

Potential disadvantages include:

- Higher initial engineering cost.
- Longer time to market.
- Ongoing maintenance.
- Operational responsibility.
- Security and compliance obligations.

## 13.2 Buy or integrate with a provider

Buying or integrating may be appropriate when:

- The capability is relatively standardized.
- Time to market matters.
- A provider offers proven functionality.
- Building internally would create unnecessary complexity.
- The provider meets security and business requirements.

Potential disadvantages include:

- Vendor dependency.
- Usage-based costs.
- Limited customization.
- Contractual restrictions.
- Migration difficulty.
- Less control over the roadmap.

## 13.3 Partner

Partnerships may involve commercial, operational, and technical collaboration.

For example, an insurance distribution platform may partner with an insurer that exposes APIs for quotations, eligibility checks, purchases, and policy issuance.

The partnership's success depends on more than technical connectivity.

The parties may need to agree on:

- Customer ownership.
- Commercial terms.
- Service expectations.
- Support responsibilities.
- Data access.
- Incident communication.
- Product changes.
- Dispute resolution.

## 13.4 A practical decision framework

Evaluate:

1. Strategic differentiation.
2. Time to market.
3. Total cost of ownership.
4. Integration complexity.
5. Reliability.
6. Security and compliance.
7. Scalability.
8. Customization.
9. Vendor lock-in.
10. Exit options.
11. Internal expertise.
12. Long-term roadmap alignment.

Do not choose a provider based only on the number of endpoints it offers.

A smaller API with reliable behavior, clear documentation, and good support may be more valuable than a larger but fragile integration.

# 14. Product Management for API Products

Some products expose APIs as their primary interface.

Examples include:

- Payment platforms.
- Identity verification services.
- Market-data platforms.
- Messaging services.
- Financial infrastructure providers.
- Developer platforms.

For these businesses, the developer is often the direct user, while the ultimate value is delivered to another customer.

## 14.1 Identify the developer's job

A developer might need to:

- Integrate a payment method.
- Verify customer identities.
- Retrieve account information.
- Subscribe to events.
- Reconcile transactions.
- Build a new customer-facing feature.

The PM should understand the developer's full journey:

1. Discover the API.
2. Understand the documentation.
3. Obtain credentials.
4. Configure a sandbox.
5. Make the first successful request.
6. Handle errors.
7. Test edge cases.
8. Move to production.
9. Monitor usage.
10. Maintain the integration over time.

## 14.2 Useful API product metrics

Potential metrics include:

- Time to first successful API call.
- Time to production integration.
- Percentage of developers completing onboarding.
- API request success rate.
- Error rate by endpoint.
- p95 latency.
- Integration abandonment rate.
- Active developers.
- Usage by customer segment.
- Retention of API customers.
- Support contacts per integration.
- Revenue per active integration, where appropriate.

These metrics should be interpreted carefully.

For example, a high number of API requests does not necessarily mean developers are successful. Poorly designed integrations may generate excessive requests while creating little value.

## 14.3 Developer experience is part of product quality

An API product should make it easy to:

- Understand capabilities.
- Get started.
- Test safely.
- Diagnose errors.
- Track changes.
- Handle events.
- Scale usage.
- Contact support.

A successful API product is not simply an endpoint collection. It is a reliable, understandable, and maintainable way for developers to accomplish a task.

# 15. API Governance and Integration Management

As the number of integrations grows, an organization needs consistent practices.

Without governance, teams may create overlapping interfaces, inconsistent authentication methods, incompatible data models, and duplicated capabilities.

## 15.1 API ownership

Each important API should have clear ownership.

Ownership includes responsibility for:

- Contract design.
- Documentation.
- Reliability.
- Security.
- Versioning.
- Consumer communication.
- Deprecation.
- Incident response.

An API without a clear owner can become difficult to maintain as teams change.

## 15.2 API inventory

An API inventory records important interfaces and their dependencies.

Useful fields include:

- API or provider name.
- Business capability.
- Internal owner.
- Consumers.
- Environment.
- Authentication method.
- Version.
- Criticality.
- Rate limits.
- Data sensitivity.
- Known limitations.
- Deprecation status.

This inventory can help identify obsolete integrations, duplicated capabilities, and critical single-provider dependencies.

## 15.3 Contract testing

Contract testing verifies that a consumer and provider agree on the interface they depend on.

It can help detect incompatible changes before they affect production.

For example, if a payment service depends on a provider returning a particular field, a contract test can verify that the provider's sandbox or test implementation still satisfies the expectation.

Contract tests do not replace end-to-end testing, security validation, or production monitoring. They address a particular class of integration risk.

## 15.4 Environment management

Integrations often have separate development, testing, staging, and production environments.

The team should understand:

- Which credentials belong to each environment.
- Whether data is synthetic or real.
- How configuration changes are managed.
- How webhooks are routed.
- How production access is controlled.
- How test transactions are prevented from affecting real customers.

Environment mistakes can create serious problems, including accidental production transactions or exposure of sensitive information.

## 15.5 Change management

When an API changes, the owner should understand who may be affected.

A change-management process may include:

- Identifying consumers.
- Assessing compatibility.
- Communicating changes.
- Testing affected integrations.
- Providing migration guidance.
- Monitoring the rollout.
- Defining a deprecation schedule.

For a PM, this is especially important when an integration change can affect a launch commitment or a critical customer journey.

# 16. Practical Case Study: Integrating a Payment Provider

## Scenario

You are the PM for a digital wallet.

The business wants to introduce a new payment provider to improve payment success rates and reduce processing costs.

The provider offers APIs for:

- Payment initiation.
- Payment status.
- Refunds.
- Webhooks.
- Transaction reporting.

However, the initial review reveals:

- The provider's sandbox has limited failure scenarios.
- Payment completion is asynchronous.
- Rate limits apply to status requests.
- Refunds may take several business days.
- Some transaction statuses differ from the wallet's existing internal model.
- The provider has no confirmed service-level commitment for a key workflow.

## Step 1: Define the product outcome

Do not frame the initiative only as "integrate Provider B."

Instead, define the desired outcome.

For example:

"Improve successful payment completion for eligible customers while reducing processing cost and maintaining acceptable transaction correctness and support burden."

The exact target should be based on baseline performance and commercial analysis.

## Step 2: Map the complete journey

Document:

1. Payment initiation.
2. Provider acceptance.
3. Asynchronous processing.
4. Status notification.
5. Final status confirmation.
6. Wallet update.
7. Customer notification.
8. Reconciliation.
9. Refund or dispute handling.

Identify which system owns each step.

## Step 3: Assess the API contract

Clarify:

- Required request fields.
- Authentication.
- Payment statuses.
- Status transitions.
- Error responses.
- Idempotency behavior.
- Rate limits.
- Webhook verification.
- Retry policies.
- Refund behavior.
- Versioning.
- Sandbox limitations.

Pay particular attention to the difference between a request being accepted and a payment being completed.

## Step 4: Evaluate provider risk

Investigate:

- Historical availability and performance evidence.
- Support responsiveness.
- Contractual commitments.
- Security controls.
- Regulatory suitability.
- Data-handling practices.
- Expected transaction capacity.
- Migration and exit options.

If reliable evidence is missing, identify it as uncertainty rather than assuming the provider will perform well.

## Step 5: Plan a staged rollout

A possible rollout sequence:

1. Implement the integration in a test environment.
2. Validate expected and failure scenarios.
3. Test duplicate requests and uncertain outcomes.
4. Verify reconciliation.
5. Introduce the provider to a limited eligible segment.
6. Monitor payment outcomes, errors, latency, and support contacts.
7. Expand traffic if the evidence supports doing so.
8. Maintain a safe fallback or rollback strategy where feasible.

A staged rollout should not expose customers to unmitigated financial risk merely to collect performance data.

## Step 6: Define success measures

Possible measures include:

- Payment completion rate.
- Payment-processing latency.
- Cost per successful payment.
- Duplicate-payment incident rate.
- Unresolved transaction rate.
- Refund completion time.
- Payment-related support contacts.
- Reconciliation discrepancies.

Measure results against a comparable baseline, accounting for differences in customer mix and payment type.

## Step 7: Make the decision

The provider should not be selected solely because its fees are lower.

The decision should balance:

- Customer value.
- Commercial economics.
- Technical fit.
- Operational reliability.
- Security and compliance.
- Integration effort.
- Long-term flexibility.

A cheaper provider may increase total cost if it generates more failures, support contacts, reconciliation work, or operational risk.

# 17. Practical Exercise: Design an Integration Plan

Choose one integration relevant to a product you know.

Examples:

- Payment gateway.
- Identity verification provider.
- Insurance provider.
- Market-data API.
- Messaging service.
- Banking API.
- Analytics platform.

Complete the following steps.

## Part A: Define the business capability

Explain the customer problem the integration solves.

Identify why the product needs the external capability and what happens if it is unavailable.

## Part B: Map the systems

Identify:

- The customer-facing application.
- Your backend.
- The external provider.
- Any relevant databases, queues, or downstream services.

Describe which system owns each important piece of data.

## Part C: Define the contract

Document:

- Required operations.
- Inputs and outputs.
- Authentication.
- Error handling.
- Rate limits.
- Versioning.
- Idempotency.
- Webhook or polling behavior.

If you lack real documentation, state your assumptions explicitly.

## Part D: Design failure handling

Describe how the product should respond to:

- Invalid requests.
- Authentication failures.
- Rate limiting.
- Provider outages.
- Timeouts.
- Duplicate events.
- Delayed processing.
- Unknown transaction outcomes.

Explain which cases can be retried safely and which require status verification or reconciliation.

## Part E: Evaluate the provider

Assess:

- Functional fit.
- Reliability.
- Security.
- Compliance.
- Commercial terms.
- Documentation.
- Support.
- Scalability.
- Vendor lock-in.
- Exit options.

## Part F: Define success

Choose metrics for:

- Customer outcomes.
- Technical reliability.
- Operating cost.
- Integration effectiveness.

Define a baseline and target where possible.

## Part G: Create a launch plan

Describe:

- Testing.
- Monitoring.
- Staged rollout.
- Rollback.
- Customer communication.
- Ownership.
- Post-launch review.

Your plan should cover the entire customer journey rather than only the API call.

# 18. Final Challenge: Building an Insurance Distribution Ecosystem

## Scenario

You are the PM for a digital platform that helps customers compare and purchase individual supplementary health insurance.

The platform wants to integrate with multiple insurers and a payment provider.

The first insurer supports:

- Plan discovery.
- Premium quotation.
- Eligibility checks.
- Purchase applications.
- Policy issuance.
- Policy-status retrieval.

The second insurer supports fewer operations and relies on some manual processing.

The payment provider supports payment initiation, asynchronous confirmation, refunds, and webhooks.

The business wants to launch a new insurance purchase journey in eight weeks.

The challenges include:

- Each insurer uses different data models and policy statuses.
- Premium calculations have different inputs.
- Policy issuance is asynchronous.
- Payment completion does not guarantee immediate policy issuance.
- The second insurer has incomplete API documentation.
- The platform must maintain accurate purchase and payment records.
- The team has limited engineering capacity.
- Leadership wants the customer experience to look consistent across insurers.

## Task 1: Map the ecosystem

Identify the systems and their responsibilities.

Explain:

- Which system owns the quote.
- Which system owns the policy.
- Which system owns the payment record.
- Which system owns the purchase journey's overall status.
- How the systems communicate.

Distinguish authoritative records from cached or derived information.

## Task 2: Define the integration contracts

For each external system, identify the required operations, inputs, outputs, statuses, authentication, and error conditions.

List the questions that must be answered before implementation begins.

Do not assume that both insurers support identical capabilities.

## Task 3: Design a consistent internal model

Propose how the platform can present a consistent customer experience without pretending that all insurers have identical workflows.

Consider:

- Common plan information.
- Premium quotations.
- Eligibility outcomes.
- Purchase application states.
- Payment states.
- Policy-issuance states.
- Manual-review states.
- Failure and recovery states.

Explain which provider-specific differences must remain visible internally.

## Task 4: Design the asynchronous workflow

Describe the sequence from customer selection to policy issuance.

Explain how the system should handle:

- Payment success followed by delayed policy issuance.
- Duplicate payment notifications.
- Missing webhooks.
- Provider timeouts.
- Failed policy issuance.
- Refunds.
- Reconciliation discrepancies.

Make sure the customer is not shown a confirmed policy before the authoritative system confirms issuance.

## Task 5: Evaluate integration risks

Compare the two insurers.

Consider:

- Capability coverage.
- Documentation quality.
- Reliability evidence.
- Manual processing.
- Integration effort.
- Operational support.
- Commercial potential.
- Long-term scalability.

Explain whether both insurers should be included in the first release.

## Task 6: Define API and product metrics

Choose metrics covering:

- Quote success rate.
- Quote response time.
- Purchase completion.
- Payment outcome resolution.
- Policy-issuance time.
- Reconciliation discrepancies.
- Integration error rate.
- Support contacts caused by integration failures.

Define how the team will distinguish technical failures from valid business rejections.

## Task 7: Propose a launch strategy

Create an eight-week plan that includes:

- Contract clarification.
- Integration implementation.
- Test scenarios.
- Sandbox limitations.
- Failure testing.
- Security review.
- Monitoring.
- Staged rollout.
- Operational readiness.

Identify the minimum capabilities required for launch and which capabilities can wait.

## Task 8: Write an executive recommendation

Explain:

- Which integrations you recommend launching first.
- What customer value the integrations enable.
- Which risks remain.
- What the team must validate before launch.
- How you will measure success.
- Which trade-offs leadership must approve.

## Evaluation criteria

A strong response will:

- Connect integration decisions to customer outcomes.
- Identify system ownership and sources of truth.
- Understand asynchronous processing.
- Handle timeouts, retries, duplicate events, and reconciliation safely.
- Recognize that providers may offer different capabilities.
- Balance integration abstraction against unnecessary complexity.
- Consider security, reliability, cost, and vendor dependency.
- Define measurable launch criteria.
- Make realistic scope and timing trade-offs.

# Key Takeaways

1. An API is a contract that defines how software systems communicate and access capabilities.
2. API design influences product capabilities, integration cost, reliability, and strategic flexibility.
3. REST, GraphQL, SOAP, RPC, and event-driven interfaces offer different patterns and trade-offs.
4. Synchronous requests provide immediate responses, while asynchronous workflows allow processing to continue after the initial request.
5. HTTP success does not necessarily mean that the intended business operation succeeded.
6. Authentication establishes identity, while authorization determines which actions are permitted.
7. Timeouts create uncertainty; they do not prove that a remote operation failed.
8. Retries, idempotency, webhooks, and reconciliation are essential considerations for reliable integrations.
9. Rate limits and quotas can constrain growth, performance, and customer experience.
10. API versioning and compatibility policies help protect existing integrations as systems evolve.
11. Third-party integrations introduce availability, security, commercial, regulatory, and vendor-lock-in risks.
12. Build, buy, and partner decisions should consider total cost, strategic differentiation, reliability, and exit options.
13. API products need excellent documentation, predictable behavior, clear errors, and a good developer experience.
14. Integration planning must cover the complete business workflow, not just the initial API call.
15. A successful integration is one that reliably delivers the intended customer outcome while remaining maintainable, secure, and economically viable.

# Preview of Day 86

Day 86 — Build vs Buy vs Partner Decisions

Tomorrow, we will examine how Product Managers decide whether to build a capability internally, purchase an existing solution, or partner with another organization. We will cover total cost of ownership, strategic differentiation, opportunity cost, vendor lock-in, implementation risk, time to market, and decision frameworks, with practical examples from fintech and SaaS products.
