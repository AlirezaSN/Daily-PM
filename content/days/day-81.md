# Day 81: Software Architecture for Product Managers

# Learning Objectives

By the end of this lesson, you will be able to:

- Explain what software architecture is and why it matters to Product Managers.
- Understand the major components of a software system and how they interact.
- Distinguish monolithic, modular monolithic, microservices, and serverless architectures.
- Understand APIs, databases, event-driven systems, caching, and message queues.
- Evaluate architectural trade-offs involving scalability, reliability, security, flexibility, and cost.
- Recognize how architectural decisions influence product roadmaps, delivery speed, and customer experience.
- Collaborate more effectively with engineers and architects without attempting to replace their technical expertise.
- Identify architectural risks during discovery, prioritization, and product planning.
- Apply architectural thinking to practical fintech product scenarios.

---

# 1. What Is Software Architecture?

Software architecture describes the fundamental structure of a software system, the components that make it up, the relationships between those components, and the principles governing how the system evolves.

A software product is not simply a collection of screens and features. Behind every customer interaction, there may be mobile applications, APIs, business logic, databases, external services, authentication systems, analytics pipelines, and infrastructure.

Architecture determines how these parts work together.

Consider a customer transferring money through a mobile banking application.

From the customer's perspective, the experience may be simple:

1. Select a recipient.
2. Enter an amount.
3. Confirm the transfer.
4. Receive a success message.

Behind this interaction, the system may need to:

- Authenticate the customer.
- Validate account ownership.
- Check transfer limits.
- Verify available funds.
- Evaluate fraud risk.
- Record the transaction.
- Communicate with a payment provider or banking network.
- Update transaction status.
- Notify the customer.
- Record events for analytics and auditing.

The customer sees one flow, but the product depends on multiple interconnected components.

Software architecture defines how those components are organized and how they coordinate.

## 1.1 Why should Product Managers care about architecture?

Product Managers do not need to design every class, choose every database index, or determine every infrastructure configuration.

However, architectural decisions directly affect product decisions.

For example:

- A tightly coupled system may make new features slower to deliver.
- A poorly designed transaction system may create duplicate payments.
- A platform with clear service boundaries may allow teams to develop features independently.
- A system without appropriate observability may make it difficult to diagnose customer problems.
- An integration with a third-party provider may introduce external dependencies and unpredictable delivery timelines.
- An architecture that stores only current account balances may be insufficient for detailed historical reporting or financial reconciliation.

Understanding these implications helps PMs make better decisions about scope, sequencing, risk, and investment.

## 1.2 Architecture is a product decision, but not every technical decision belongs to the PM

The PM and engineering team have complementary responsibilities.

| Product Manager | Engineering / Architecture |
|---|---|
| Clarifies customer and business outcomes | Designs technical solutions |
| Defines functional requirements | Determines component responsibilities |
| Explains risk tolerance and business constraints | Evaluates technical risks and alternatives |
| Prioritizes capabilities and trade-offs | Recommends architecture and implementation approaches |
| Helps sequence investments | Estimates migration and implementation complexity |
| Makes product-level scope decisions with the team | Owns technical design quality and engineering standards |
| Ensures outcomes are measured | Establishes appropriate technical measurement and observability |

These responsibilities overlap through collaboration.

For example, engineering may recommend a more reliable transaction architecture. The PM helps determine which customer and business problems justify the investment, how the work should be prioritized, and how to evaluate its impact.

The PM should understand the decision well enough to challenge assumptions and explain trade-offs, without pretending to have expertise they do not possess.

---

# 2. The Main Components of a Software System

A useful starting point is to understand the common layers and components found in modern applications.

## 2.1 Client or presentation layer

The client is the software through which a user or another system interacts with the product.

Examples include:

- iOS and Android applications.
- Web applications.
- Administrative dashboards.
- Partner applications.
- Command-line tools.

The client is generally responsible for presenting information, collecting input, and communicating with backend services.

For example, a mobile banking application may display account balances and transaction history. It typically requests this information from backend APIs rather than directly connecting to the bank's primary database.

**Product implications:**

- Different clients may have different capabilities and constraints.
- Mobile releases may require app-store approval and user adoption.
- Slow networks can affect the customer experience.
- Client-side validation can improve usability but cannot replace server-side security and business-rule enforcement.

## 2.2 Backend or application layer

The backend implements much of the product's business logic.

It may handle:

- Authentication and authorization.
- Pricing calculations.
- Account operations.
- Order management.
- Eligibility checks.
- Workflow orchestration.
- Data validation.
- Integration with external services.

For a digital insurance product, backend logic might determine which insurance plans a customer can purchase based on eligibility, coverage selections, and insurer rules.

Product implications include business-rule complexity, integration dependencies, performance, and the ability to change workflows safely.

## 2.3 Data layer

The data layer stores and retrieves information.

It may include:

- Relational databases.
- Document databases.
- Object storage.
- Search indexes.
- Caches.
- Data warehouses.
- Event stores or logs.

Different data systems serve different needs.

A relational database may store customer accounts and financial transactions. Object storage may hold uploaded documents. A search engine may support fast searching across product catalogs. A data warehouse may support business analytics.

The important principle is that **different data requirements can justify different storage technologies**.

Adding another database, however, introduces operational complexity. A new technology should solve a real problem rather than merely make the architecture look more sophisticated.

## 2.4 Infrastructure layer

Infrastructure provides the computing, networking, storage, and operational capabilities required to run software.

Examples include:

- Virtual machines.
- Containers.
- Cloud services.
- Load balancers.
- Networking.
- Deployment pipelines.
- Monitoring systems.
- Backup and recovery systems.

Infrastructure choices influence operating costs, availability, deployment practices, and scalability.

For a PM, infrastructure becomes especially important when a product needs to support rapid growth, high transaction volumes, strict uptime requirements, or geographic expansion.

## 2.5 External services and integrations

Most products depend on systems they do not fully control.

Examples include:

- Payment gateways.
- Identity verification providers.
- SMS services.
- Banking networks.
- Credit bureaus.
- Insurance companies.
- Analytics platforms.
- Fraud detection services.

External dependencies introduce risks such as:

- API changes.
- Downtime.
- Rate limits.
- Latency.
- Inconsistent data.
- Contractual restrictions.
- Pricing changes.
- Regulatory requirements.

A product roadmap should account for these dependencies rather than treating every integration as an ordinary feature.

---

# 3. Understand System Boundaries and Responsibilities

One of the most important architectural questions is: **Which component is responsible for which behavior or data?**

Clear boundaries help teams change systems without unintentionally breaking unrelated functionality.

## 3.1 Separation of concerns

Separation of concerns means organizing software so that different responsibilities are handled by appropriate components.

Consider a digital marketplace.

Potential responsibilities include:

- Customer identity.
- Product catalog.
- Shopping cart.
- Order processing.
- Payment processing.
- Notifications.
- Reporting.

If all of these responsibilities are tangled together, changing one area may affect many others.

A more modular design aims to make responsibilities explicit and reduce unnecessary dependencies.

This does not necessarily require separate deployable services. A single application can have well-separated internal modules.

## 3.2 Coupling

Coupling describes how strongly one component depends on another.

High coupling means changes in one component frequently require changes elsewhere.

For example, suppose the checkout flow directly depends on the internal database structure of the inventory module. Changing the inventory representation might unexpectedly break checkout.

Lower coupling can allow components to evolve more independently.

However, reducing coupling is not free. Additional abstractions, interfaces, and communication mechanisms can introduce complexity.

The goal is not to eliminate every dependency. It is to manage dependencies so the system remains understandable and changeable.

## 3.3 Cohesion

Cohesion describes how closely related the responsibilities within a component are.

A component with high cohesion has a clear purpose.

For example, an order module that manages order creation, order status, and order-related business rules has a more coherent responsibility than a generic module that handles orders, marketing emails, account security, and reporting.

High cohesion often makes software easier to maintain, test, and understand.

## 3.4 Why boundaries matter for product delivery

Imagine that three teams own:

- Customer onboarding.
- Payments.
- Transaction history.

If the responsibilities and interfaces between these areas are unclear, even a seemingly small feature may require extensive coordination.

For example, adding a new payment status might require:

- Payments to introduce the status.
- Transaction history to interpret it.
- Onboarding to display it in a first-payment journey.
- Analytics to update event definitions.
- Customer support to understand the new state.

Clear ownership and well-defined interfaces can reduce these coordination costs.

**Product lesson:** Architectural boundaries and team boundaries should be considered together. They are not identical, but poorly aligned responsibilities can slow delivery and create operational risk.

---

# 4. Major Architectural Styles

Different architectural styles organize components and manage complexity in different ways.

There is no universally best architecture. The right choice depends on the product's requirements, team structure, operating capabilities, and expected evolution.

## 4.1 Monolithic architecture

A monolithic application is deployed as a single application unit, even if it contains many internal modules.

For example, one backend application might handle:

- Customer accounts.
- Product catalog.
- Payments.
- Notifications.
- Reporting.

These responsibilities may share a codebase and deployment process.

### Advantages

- Simpler initial development and deployment.
- Easier local testing in many situations.
- Fewer distributed communication problems.
- Lower operational overhead for small teams.
- Often easier to run when the product and organization are still small.

### Disadvantages

- Poor internal boundaries can make the codebase difficult to change.
- A deployment may affect the entire application.
- Different components may be difficult to scale independently.
- A large codebase may slow builds and testing.
- Multiple teams can interfere with one another if ownership is unclear.

A monolith is not inherently poorly designed. A well-structured monolith can support a substantial product for many years.

### Product example

A startup launching a basic insurance comparison and purchasing platform may reasonably begin with a monolithic backend.

The early priority is validating demand and delivering a reliable purchase experience. Introducing many independently deployed services before the product has sufficient complexity may add cost without creating corresponding value.

## 4.2 Modular monolithic architecture

A modular monolith is a single deployable application with clearly separated internal modules and controlled dependencies.

For example:

- Customer module.
- Insurance catalog module.
- Quote module.
- Policy module.
- Payment module.

Each module has a defined responsibility, and other modules interact through explicit interfaces rather than relying on internal implementation details.

### Advantages

- Simpler operations than a distributed microservices system.
- Stronger internal boundaries than an unstructured monolith.
- Easier testing and maintenance.
- A potential path toward extracting services later.

### Disadvantages

- Modules still share a deployment unit.
- Independent scaling and deployment are limited.
- Enforcing boundaries requires discipline.
- Some changes can still affect the application as a whole.

For many growing products, a modular monolith is a pragmatic middle ground.

## 4.3 Microservices architecture

Microservices organize an application as multiple independently deployable services, each responsible for a defined capability.

For example, a fintech platform might have separate services for:

- Customer identity.
- Account management.
- Payments.
- Fraud detection.
- Notifications.
- Reporting.

Services communicate through APIs, messages, or events.

### Advantages

- Services can often be deployed independently.
- Teams may own distinct services.
- Components can scale according to their own workloads.
- Different components can evolve at different rates.
- Failures can sometimes be isolated more effectively.

### Disadvantages

- Network communication introduces latency and failure modes.
- Distributed transactions and data consistency become harder.
- Observability and troubleshooting become more complex.
- Service contracts must be managed carefully.
- Infrastructure and operational costs can increase.
- Testing across multiple services can be more difficult.
- Poorly chosen boundaries can produce a distributed monolith.

### What is a distributed monolith?

A distributed monolith is a system split into multiple services that still depend heavily on one another.

For example, a checkout operation might require synchronous calls to seven services, and every release might require coordinated changes across several of them.

The system pays the operational cost of microservices without gaining much independence.

### Product example

A mature payment platform with multiple teams, distinct scaling requirements, and strict ownership boundaries may benefit from microservices.

A small team building its first product usually needs stronger evidence before accepting that complexity.

## 4.4 Serverless architecture

Serverless computing allows teams to run code or managed application components without directly managing the underlying servers.

Examples include event-triggered functions and managed services for databases, queues, and authentication.

### Advantages

- Less server administration.
- Automatic scaling for supported workloads.
- Pay-per-use pricing in many services.
- Useful for event-driven tasks and intermittent workloads.
- Faster access to certain infrastructure capabilities.

### Disadvantages

- Costs may become unpredictable at high or poorly controlled volumes.
- Execution limits may constrain some workloads.
- Cold starts can affect latency in certain configurations.
- Vendor-specific services can create switching costs.
- Observability and local testing can be challenging.
- Serverless does not remove the need for security, reliability, or architecture design.

Serverless is not the opposite of microservices. A system can use microservices implemented with serverless functions, containers, or other deployment approaches.

## 4.5 Architecture comparison

| Dimension | Monolith | Modular monolith | Microservices |
|---|---|---|---|
| Initial complexity | Usually low | Low to moderate | Usually high |
| Deployment | One unit | One unit | Multiple units |
| Internal boundaries | Can be weak or strong | Explicit modules | Service boundaries |
| Independent scaling | Limited | Limited | Often possible |
| Operational overhead | Lower | Lower to moderate | Higher |
| Distributed-system problems | Fewer | Fewer | More |
| Best fit | Many small or early products | Growing products with clear domains | Products with justified independent service needs |

Serverless is a separate deployment and operating model that can be combined with several of these styles.

### Product takeaway

Do not ask, "Which architecture is the most modern?"

Ask, "Which architecture enables the product and organization to achieve the required outcomes with acceptable cost and risk?"

---

# 5. APIs: How Software Components Communicate

An API, or Application Programming Interface, defines how one software component can request capabilities or data from another.

APIs allow applications to interact without needing direct knowledge of each other's internal implementation.

## 5.1 A simple example

A mobile application may request a customer's account information from a backend API.

Conceptually:

`GET /accounts/123`

The backend checks whether the caller is authorized, retrieves the appropriate data, and returns a response.

The exact endpoint and response format depend on the system design.

The important idea is that the client uses a defined interface rather than directly accessing the underlying database.

## 5.2 Common API styles

### REST

REST-style APIs commonly use HTTP methods and resource-oriented URLs.

Typical methods include:

- `GET` to retrieve information.
- `POST` to create a resource or initiate an operation.
- `PUT` or `PATCH` to update information.
- `DELETE` to remove a resource when appropriate.

REST is widely used for web and mobile backends.

### GraphQL

GraphQL allows clients to request specific fields from a schema.

It can be useful when different clients need different combinations of data, although it introduces its own design, performance, and governance considerations.

### gRPC

gRPC is a remote procedure call framework often used for communication between backend services.

It can be useful for strongly defined service contracts and efficient communication, but it is not automatically the best choice for public mobile or web APIs.

These styles solve overlapping but not identical problems.

## 5.3 API contracts and backward compatibility

An API contract defines expected inputs, outputs, errors, and behavior.

Changing a contract can break dependent clients or services.

For example, if a mobile application expects a field called `transaction_status`, removing or changing that field may break older application versions that remain in use.

A well-managed API strategy considers:

- Versioning where appropriate.
- Backward compatibility.
- Deprecation periods.
- Error behavior.
- Authentication and authorization.
- Rate limits.
- Documentation.
- Monitoring and ownership.

### Why this matters to PMs

Suppose your roadmap includes a new transaction history experience.

The design may be ready, but the backend API may not expose the information needed to show pending, completed, reversed, and failed transactions consistently.

The actual product scope therefore includes not only the screen but also the data contract and the business rules behind it.

## 5.4 Integration work is product work

Integrations often look small in a roadmap because the visible outcome is simple.

However, integrating a payment gateway may require:

- Authentication.
- Request signing.
- Error mapping.
- Retry behavior.
- Timeout handling.
- Duplicate-request protection.
- Reconciliation.
- Monitoring.
- Security review.
- Sandbox and production testing.

A PM should ask engineers to identify these requirements early enough to inform scope and sequencing.

---

# 6. Databases and Data Architecture

A database is not merely a storage location. Its design affects consistency, query performance, auditability, reporting, and the ability to evolve a product.

## 6.1 Relational databases

Relational databases store data in structured tables and support relationships and transactions.

Examples include PostgreSQL and MySQL.

They are often useful for:

- Customer accounts.
- Orders.
- Financial transactions.
- Insurance policies.
- Payments.
- Structured business records.

For financial operations, transactional guarantees are especially important.

For example, transferring money between two internal accounts may require updating multiple records while ensuring that the operation is handled consistently.

## 6.2 NoSQL databases

NoSQL is a broad category covering multiple non-relational data models, including document, key-value, wide-column, and graph databases.

They can be useful when the access patterns, scale, data structure, or operational needs fit the chosen model.

Examples include:

- Flexible document storage.
- High-volume key-value access.
- Certain distributed workloads.
- Graph relationship queries.

NoSQL does not automatically mean faster, cheaper, or more scalable. The correct choice depends on workload characteristics, consistency needs, query patterns, and operational constraints.

## 6.3 Data warehouses and analytical systems

Operational databases support the running product.

Analytical systems support questions such as:

- How many customers completed onboarding?
- Which payment methods have the highest failure rate?
- How does retention differ by customer segment?
- What is the profitability of each acquisition channel?

A data warehouse is designed to support analytical workloads without placing unnecessary pressure on operational systems.

Products may also use data lakes, streaming pipelines, and specialized analytical databases.

## 6.4 Consistency and correctness

Consider an exchange that displays a user's cryptocurrency balance.

If the balance displayed in the mobile application is stale or inconsistent with the authoritative transaction records, the customer may attempt to trade with an incorrect understanding of their available funds.

This creates both customer experience and financial risk.

Important questions include:

- Which system is authoritative for the balance?
- How quickly must updates become visible?
- Can stale data cause customer harm?
- How are concurrent transactions handled?
- How are discrepancies detected and reconciled?

A PM does not need to specify the database transaction mechanism. However, they must articulate the business consequences of incorrect or delayed data.

## 6.5 Eventual consistency

In distributed systems, data may not become consistent across all components immediately.

For example, after a payment succeeds, the payment service may record the result before a reporting system or notification service reflects it.

For some use cases, a short delay is acceptable.

For others, it can be dangerous.

A customer may tolerate a notification arriving a few seconds late. They should not be allowed to spend funds twice because different parts of the system disagree about the authoritative account state.

The product requirement should specify the acceptable behavior, and engineering should determine the appropriate technical approach.

---

# 7. Event-Driven Architecture, Message Queues, and Asynchronous Work

Not every operation needs to complete synchronously within a customer's request.

An event-driven system allows components to react to events or messages.

For example, when a customer completes a payment, the system may trigger:

- A receipt notification.
- Analytics processing.
- An audit event.
- A loyalty points calculation.
- A downstream reporting update.

These activities do not necessarily need to block the customer's payment confirmation.

## 7.1 Synchronous versus asynchronous communication

**Synchronous communication**

A component sends a request and waits for a response.

Example: The application requests a current account balance and waits for the backend to respond.

Advantages:
- Immediate response.
- Straightforward request-response flow.
- Easier to reason about for some operations.

Risks:
- Latency accumulates across dependent services.
- A slow dependency may delay the customer experience.
- Failures can propagate through the request chain.

**Asynchronous communication**

A component publishes a message or event and another component processes it later.

Example: A successful payment emits an event that a notification service processes independently.

Advantages:
- Work can be decoupled.
- Temporary processing delays may not block the main operation.
- Workloads can be processed independently.
- Some systems can absorb traffic spikes using queues.

Risks:
- Processing may be delayed.
- Messages may be delivered more than once.
- Ordering may not be guaranteed.
- Failures can be harder to diagnose.
- Customers may observe intermediate states.

## 7.2 Message queues

A message queue holds work until a consumer processes it.

For example, a queue may store notification requests during a traffic spike. Workers process the requests as capacity becomes available.

Queues can help smooth bursts of work, but they introduce operational requirements.

Teams need to consider:

- Queue depth.
- Processing delays.
- Failed messages.
- Retry policies.
- Duplicate processing.
- Dead-letter queues.
- Monitoring and alerting.

A queue does not make a system infinitely scalable. If messages arrive faster than they can be processed for an extended period, delays will continue to grow.

## 7.3 Idempotency

Idempotency means that repeating an operation has the same effective result as performing it once.

This is especially important when requests or messages may be retried.

Imagine that a customer submits a payment request, but the network times out before the application receives the response.

The customer retries.

Without suitable duplicate protection, the system might process the same payment twice.

An idempotency mechanism can allow repeated requests with the same operation identifier to return the existing result rather than creating another payment.

For a PM, this concept connects directly to customer trust, financial correctness, and incident prevention.

## 7.4 Exactly-once processing is not a simple guarantee

Distributed systems can make it difficult to guarantee that every message is processed exactly once under all failure conditions.

Many systems instead use a combination of:

- At-least-once delivery.
- Idempotent processing.
- Deduplication.
- Transactional records.
- Reconciliation.

The product outcome matters more than a simplistic claim that a message is "exactly once."

For a payment product, the essential requirement is that retries, timeouts, and failures do not cause duplicate financial effects.

---

# 8. Scalability and Performance

Scalability is the ability of a system to handle increased workload while maintaining acceptable performance, reliability, and cost.

Performance concerns how quickly and efficiently the system responds under a given workload.

These concepts are related, but they are not identical.

## 8.1 Vertical scaling

Vertical scaling means increasing the resources available to a single server or database instance.

Examples include adding CPU, memory, or faster storage.

Advantages:
- Relatively straightforward in many environments.
- May require fewer architectural changes.
- Useful for certain workloads.

Limitations:
- Hardware or service limits exist.
- Costs may rise substantially.
- A single instance can remain a bottleneck.
- It does not automatically eliminate a single point of failure.

## 8.2 Horizontal scaling

Horizontal scaling means adding more instances or machines to distribute the workload.

For example, a web application may run across several application servers behind a load balancer.

Advantages:
- Can increase total capacity.
- May improve resilience when designed correctly.
- Can allow independent scaling of components.

Challenges:
- Shared state must be managed.
- Databases may remain bottlenecks.
- Distributed coordination becomes more complex.
- Additional infrastructure increases operational requirements.

Adding servers does not guarantee linear performance improvements.

## 8.3 Load balancing

A load balancer distributes requests across available instances.

It can improve capacity and help route traffic away from unhealthy instances, depending on its configuration.

However, load balancing cannot solve every performance problem. If every request depends on a saturated database or a slow external provider, adding application servers may have little effect.

## 8.4 Caching

Caching stores reusable data in a faster location so it does not need to be recomputed or retrieved from a slower system every time.

Examples include:

- Product catalog data.
- Frequently accessed configuration.
- Static content.
- Some read-heavy account information.

Caching can improve latency and reduce load, but cached data can become stale.

A product team must consider whether stale data is acceptable for the use case.

Displaying a product description that is a few seconds old may be fine. Using a stale available-balance value to authorize a financial transaction may not be.

## 8.5 Performance metrics

Useful performance measures include:

- **Latency:** How long an operation takes.
- **Throughput:** How much work the system processes per unit of time.
- **Error rate:** How frequently requests fail.
- **Resource utilization:** How heavily CPU, memory, storage, or other resources are used.
- **Saturation:** How close a system is to its capacity limits.

Average latency can hide severe problems. Percentile measures such as p95 or p99 latency help reveal slower experiences affecting a portion of users.

For example, if the p95 latency for a payment-status request is four seconds, approximately 5% of measured requests take at least that long, subject to the measurement definition and dataset.

## 8.6 Capacity planning

A PM should work with engineering to understand expected demand and the consequences of exceeding capacity.

Questions include:

- How many users and transactions do we expect?
- What peak traffic should the system support?
- Are there predictable seasonal or campaign-driven spikes?
- Which component is likely to become the bottleneck?
- What happens if traffic exceeds expectations?
- What is the cost of additional capacity?
- How early will we know that capacity is becoming insufficient?

Capacity planning should reflect business scenarios, not only average daily traffic.

---

# 9. Reliability, Availability, and Failure Handling

A product can be functionally correct when everything works and still provide a poor experience when one dependency fails.

Architecture determines how a system behaves under partial failure.

## 9.1 Availability

Availability describes the proportion of time a service is usable according to a defined measurement.

A simplified calculation is:

Availability = Uptime / Total measured time

For a 30-day period, 99.9% availability corresponds to roughly 43 minutes of downtime, assuming a continuous 30-day window and that the entire unavailable period counts toward the metric.

Higher availability targets usually require additional engineering and operational investment.

## 9.2 Reliability is broader than uptime

Reliability includes the ability to perform correctly and consistently over time.

A payment service may be technically reachable while producing incorrect results, returning stale information, or failing to complete transactions properly.

Therefore, reliability should be evaluated through a combination of:

- Availability.
- Latency.
- Error rates.
- Data correctness.
- Recovery behavior.
- Successful completion of critical workflows.

## 9.3 Graceful degradation

Graceful degradation means preserving essential functionality when some components are unavailable.

For example, if a recommendation service fails, a marketplace might still allow customers to browse and purchase products using standard sorting.

If a payment provider is unavailable, the product might offer an alternative provider or clearly communicate that the payment is pending or temporarily unavailable.

The appropriate fallback depends on the operation and risk.

A system should not silently degrade in ways that compromise financial correctness, security, or customer trust.

## 9.4 Timeouts, retries, and circuit breakers

These are common techniques for managing dependency failures.

**Timeouts:** Stop waiting after an appropriate period.

**Retries:** Attempt an operation again when the failure may be temporary.

**Circuit breakers:** Temporarily stop sending requests to a failing dependency to avoid repeated failures and allow recovery.

Each technique has trade-offs.

Retries can worsen an overloaded system. A timeout can leave the caller uncertain whether an operation completed. A circuit breaker can temporarily prevent requests that might otherwise succeed.

For financial operations, retries must be designed carefully to avoid duplicate effects.

## 9.5 Recovery objectives

Two useful concepts are:

- **Recovery Time Objective (RTO):** The target time within which a service or capability should be restored after a disruption.
- **Recovery Point Objective (RPO):** The maximum tolerable amount of data loss measured in time, under the defined recovery scenario.

For example, a product might target restoring a critical service within one hour and limiting data loss to a few minutes.

These are business and technical decisions that depend on the product's risk profile, obligations, and cost constraints.

A PM should help clarify which product capabilities require stronger recovery guarantees.

---

# 10. Security and Privacy as Architectural Concerns

Security is not merely a final review before launch. It affects how a system is designed.

Architectural choices influence how data is collected, stored, accessed, transmitted, and protected.

Important concepts include:

- Authentication: Establishing who or what is making a request.
- Authorization: Determining what that identity is allowed to do.
- Encryption: Protecting data in transit or at rest.
- Secrets management: Protecting credentials, keys, and tokens.
- Least privilege: Giving each identity only the access it needs.
- Audit logging: Recording important actions for investigation and accountability.
- Data minimization: Collecting and retaining only what is justified.
- Isolation: Preventing one customer, tenant, or service from improperly accessing another's data.

## 10.1 Example: Multi-tenant SaaS

Imagine a SaaS platform serving hundreds of online sellers.

Each seller can manage products, orders, and customers.

A critical architectural requirement is ensuring that Seller A cannot access Seller B's private orders or customer information.

This must be enforced in the appropriate backend and data-access layers. Hiding another seller's information in the interface is not sufficient.

## 10.2 Security trade-offs require explicit decisions

Suppose a team proposes storing customer identity documents for future convenience.

Before accepting the proposal, the PM should ask:

- What customer problem does this solve?
- Is retaining the documents necessary?
- How sensitive is the information?
- Who can access it?
- How long must it be retained?
- What happens if it is exposed?
- Are there regulatory or contractual obligations?
- Could a less sensitive approach meet the same need?

Security and privacy requirements can change the architecture, project scope, delivery sequence, and ongoing operating cost.

---

# 11. Technical Debt and Architectural Evolution

Technical debt is a useful metaphor for the future cost created by technical shortcuts, design compromises, or outdated assumptions.

Not every shortcut is bad. Sometimes a fast, limited solution is appropriate for testing demand.

The problem arises when the future costs of a decision are ignored or when temporary compromises become permanent without reassessment.

## 11.1 Common forms of technical debt

- Duplicated business logic.
- Weak module boundaries.
- Missing automated tests.
- Unsupported software dependencies.
- Fragile deployment processes.
- Poor observability.
- Inadequate documentation.
- Unclear data ownership.
- Security weaknesses.
- Workarounds for unreliable integrations.

Technical debt does not always need to be eliminated immediately.

The relevant question is how it affects product outcomes and future options.

## 11.2 Distinguish debt from a deliberate trade-off

Consider a startup that launches with a simple monolithic backend.

This may be a reasonable decision because the team needs to validate customer demand before investing in a more complex system.

Later, several teams may need to develop independent capabilities, and deployments may become increasingly risky.

At that point, the original architecture may impose significant costs.

The architecture has not necessarily been wrong from the beginning. The product and organization have evolved, changing the economics of the decision.

## 11.3 Make technical debt visible in product planning

A PM can help engineering communicate technical debt through its consequences.

Instead of presenting a roadmap item as:

"Refactor the payment module."

Explain the expected outcomes:

- Reduce payment-related incidents.
- Shorten the time required to introduce new payment methods.
- Improve testability.
- Reduce deployment risk.
- Support higher transaction volume.
- Improve reconciliation accuracy.

Then discuss the evidence, expected benefits, implementation cost, and uncertainty.

This does not mean every technical improvement must promise an immediate revenue increase. Reliability, security, and risk reduction can justify investment on their own merits.

## 11.4 Use an explicit prioritization model

A technical investment can be evaluated using several dimensions:

- Customer impact.
- Business impact.
- Risk reduction.
- Future delivery acceleration.
- Operational cost.
- Implementation effort.
- Cost of delay.
- Uncertainty of the expected benefit.

The model should support discussion rather than replace engineering judgment.

For example, a security vulnerability may require immediate remediation regardless of its score in a standard feature-prioritization framework.

---

# 12. How Architecture Influences the Product Roadmap

Architecture is often an invisible dependency behind product initiatives.

A roadmap that ignores architectural constraints can create unrealistic commitments, surprise delays, and unnecessary conflict between product and engineering.

## 12.1 Feature delivery versus foundational investment

Imagine that a digital investment platform wants to introduce recurring purchases.

The customer-facing feature may appear simple: select an asset, choose an amount, and define a schedule.

However, the implementation may require:

- A reliable scheduling mechanism.
- Transaction execution safeguards.
- Sufficient account and balance checks.
- Retry and duplicate protection.
- Clear handling of failed executions.
- Notifications.
- Audit records.
- Monitoring and support tooling.

Some of these capabilities may already exist. Others may require foundational work.

The roadmap should reflect the actual system capabilities rather than only the visible interface.

## 12.2 Architecture creates dependencies and opportunities

An architecture investment may delay one feature but accelerate several later initiatives.

For example, introducing a reusable identity verification capability may initially require significant work. It could then support onboarding across several products.

This means the value of an architectural investment may be distributed across multiple future outcomes.

The PM should help the team articulate:

- Which future capabilities the investment enables.
- Which constraints it removes.
- How confident the team is in those benefits.
- What alternatives exist.
- Whether the investment should happen now or later.

## 12.3 Avoid two opposite mistakes

**Mistake A: Treat architecture as irrelevant.**

The result can be a roadmap that ignores technical constraints and creates unreliable commitments.

**Mistake B: Treat every architectural improvement as automatically urgent.**

The result can be endless infrastructure work without a clear relationship to customer or business needs.

The better approach is to make technical constraints and future capabilities explicit, then prioritize them according to risk, strategic value, and timing.

## 12.4 Ask about the cost of delay

Suppose a new payment method requires a foundational change to the payment service.

Delaying the change may mean:

- Losing a market opportunity.
- Missing a commercial partnership deadline.
- Continuing to pay higher provider fees.
- Increasing operational risk.
- Delaying several other roadmap initiatives.

The cost of delay helps the team compare architectural investment against other opportunities.

However, some requirements are mandatory. Regulatory deadlines, security fixes, and unacceptable reliability risks should not be treated as ordinary optional features.

---

# 13. Working with Engineers on Architecture Decisions

Product Managers can contribute significantly to architecture discussions by framing the problem, clarifying constraints, and helping evaluate consequences.

## 13.1 Ask outcome-oriented questions

Instead of asking, "Why don't we use microservices?" ask:

- What problem are we trying to solve with this architecture?
- Which current limitations affect our roadmap?
- What happens if we do nothing?
- Which future capabilities does this enable?
- What are the main alternatives?
- What operational complexity will this introduce?
- How will we know the investment worked?

These questions encourage evidence-based decisions without prescribing a technology prematurely.

## 13.2 Understand the alternatives

For a major architecture proposal, ask the team to explain the realistic alternatives.

For example, to address slow deployment and cross-team dependencies, the alternatives might include:

1. Improve modular boundaries in the existing application.
2. Improve automated testing and deployment pipelines.
3. Change team ownership and interfaces.
4. Extract one service that has a strong independent boundary.
5. Redesign several components.

The right solution may be a combination of organizational and technical changes.

## 13.3 Understand the consequences of failure

For critical workflows, ask:

- What happens if this component is unavailable?
- What happens if the response is delayed?
- What happens if a request is repeated?
- What happens if data is stale?
- How will we detect the failure?
- How will the system recover?
- What will customers see?

These questions are particularly important for payments, investments, identity, insurance, and other workflows where incorrect behavior can cause meaningful harm.

## 13.4 Record important architectural decisions

For significant decisions, teams often use an Architecture Decision Record (ADR).

An ADR commonly documents:

- Context.
- The decision.
- Alternatives considered.
- Reasons for the choice.
- Consequences and trade-offs.
- Risks or follow-up actions.

The PM does not need to author every ADR, but understanding the important decisions helps maintain alignment between architecture, product strategy, and the roadmap.

---

# 14. Practical Case Study: Scaling a Cryptocurrency Exchange

## Scenario

A cryptocurrency exchange has grown rapidly.

The platform initially used a single backend application. It now supports:

- Hundreds of thousands of customers.
- Spot trading.
- Deposits and withdrawals.
- Multiple blockchain networks.
- Price alerts.
- Customer verification.
- Fraud monitoring.
- Administrative and compliance tools.

The organization has several engineering teams, and the following problems have emerged:

1. Deployments are becoming riskier.
2. A problem in a non-critical feature occasionally affects trading.
3. Adding a new blockchain network takes longer than expected.
4. Reporting queries sometimes affect the performance of transactional workloads.
5. Teams disagree about whether the platform should migrate to microservices.
6. Leadership wants to launch additional trading features this quarter.

Your task as the PM is not to select the architecture alone. It is to help the organization understand the problem, evaluate options, and make a defensible product decision.

## 14.1 Step 1: Separate symptoms from root causes

Start by identifying what is known and what needs investigation.

| Symptom | Questions to investigate |
|---|---|
| Risky deployments | Are modules tightly coupled? Are tests sufficient? Is rollback reliable? |
| Trading affected by unrelated features | Is resource contention involved? Are failure boundaries weak? |
| Slow blockchain integration | Are integration interfaces inconsistent? Are provider-specific rules duplicated? |
| Reporting affects transactions | Are analytical and operational workloads competing for resources? |
| Disagreement about microservices | What problem does each proposed architecture actually solve? |

Do not assume that every symptom requires a new architectural style.

Some problems may be solved through better testing, modularization, workload separation, or operational practices.

## 14.2 Step 2: Clarify the product requirements

Work with engineering, operations, security, compliance, and business stakeholders to clarify:

- Which workflows are most critical?
- What level of trading availability is required?
- What transaction correctness guarantees are necessary?
- What are the expected transaction volumes and peaks?
- Which integration deadlines matter?
- Which customer problems are caused by the current architecture?
- What regulatory or audit requirements apply?
- What operational capacity does the organization have?

These answers help establish the constraints that the architecture must satisfy.

## 14.3 Step 3: Evaluate practical alternatives

Potential approaches include:

**Option A: Improve the existing monolith**

- Strengthen module boundaries.
- Improve test coverage.
- Separate analytical workloads.
- Improve deployment and rollback practices.

Potential benefit: Lower migration risk and faster improvement.

Potential limitation: Some components may remain difficult to scale or deploy independently.

**Option B: Extract selected services**

- Identify components with clear boundaries.
- Start with a component that has a strong reason to evolve independently.
- Define explicit interfaces and operational ownership.
- Measure the effects before expanding the approach.

Potential benefit: Targeted improvements without a full migration.

Potential limitation: The team must manage distributed communication and data consistency.

**Option C: Conduct a broader microservices migration**

- Redesign service boundaries.
- Establish deployment and observability capabilities.
- Define service ownership.
- Plan data ownership and migration.
- Build appropriate operational practices.

Potential benefit: Greater independence where service boundaries and team ownership are well designed.

Potential limitation: High implementation and operational cost, plus migration risk.

## 14.4 Step 4: Make the trade-offs explicit

A full migration may be justified, but the decision should not be based on architectural fashion.

Compare each option using:

- Customer impact.
- Trading reliability.
- Delivery speed.
- Integration flexibility.
- Migration cost.
- Operational complexity.
- Security and compliance risk.
- Time to realize benefits.
- Confidence in assumptions.

A targeted approach may create more value in the short term while preserving the option to evolve further.

## 14.5 Step 5: Define success measures

Possible measures include:

**Customer and product**
- Successful trade completion rate.
- Customer-visible service interruptions.
- Time to enable a new supported network.
- Frequency of failed deposits or withdrawals.

**Engineering and operations**
- Deployment frequency.
- Change failure rate.
- Mean time to restore service.
- p95 or p99 latency for critical workflows.
- Time spent coordinating cross-team changes.

**Financial and risk**
- Infrastructure and operational cost.
- Cost of incidents.
- Reconciliation discrepancies.
- Security or compliance findings.

Not every metric should be optimized simultaneously. Select the measures that reflect the specific problem being addressed.

## 14.6 Step 6: Make a staged decision

A reasonable recommendation might be:

1. Address immediate reliability risks.
2. Separate reporting workloads from critical transactional workloads where appropriate.
3. Improve modular boundaries and automated deployment safeguards.
4. Evaluate one service extraction based on a clearly defined bottleneck.
5. Measure the result.
6. Expand only if the evidence supports further investment.

This approach is not universally correct. The appropriate decision depends on the actual architecture, workload, risks, and team capabilities.

The important lesson is to connect architecture decisions to explicit product and operational outcomes.

---

# 15. Practical Exercise: Map the Architecture of a Product You Know

Choose a product you have worked on or understand well.

It could be a mobile banking application, cryptocurrency exchange, insurance platform, marketplace, or SaaS product.

Create a simple architecture map.

## Part A: Identify the components

List the major components:

- Web or mobile client.
- Backend application or services.
- Database systems.
- External integrations.
- Analytics systems.
- Authentication and security capabilities.
- Infrastructure and monitoring.

Do not attempt to document every technical detail.

## Part B: Map one critical user journey

Choose a journey such as:

- Completing a payment.
- Buying an insurance policy.
- Making a trade.
- Creating an online store.
- Verifying a customer identity.

Trace the sequence from the user's action to the final outcome.

Identify which components participate and which external dependencies are involved.

## Part C: Identify failure scenarios

Ask:

- What happens if the network fails?
- What happens if an external provider is unavailable?
- What happens if a request times out?
- What happens if the same request is submitted twice?
- What happens if the data is delayed?
- What happens if a deployment introduces a defect?

For each scenario, explain the customer and business consequences.

## Part D: Find the main constraint

Identify one architectural limitation that may affect:

- Customer experience.
- Delivery speed.
- Reliability.
- Security.
- Scalability.
- Cost.

Explain why it matters and what evidence would confirm the problem.

## Part E: Recommend an investigation

Propose the next step without jumping immediately to a technology choice.

Examples:

- Analyze production latency and error patterns.
- Map service dependencies.
- Review incident history.
- Examine deployment failure rates.
- Measure the time required to deliver cross-team changes.
- Review data consistency and reconciliation issues.

Your output should be a clear problem statement, an initial hypothesis, and a plan for gathering evidence.

---

# 16. Final Challenge: Make an Architecture Investment Decision

## Scenario

You are the Product Manager for a rapidly growing digital payments product.

The company wants to launch three capabilities over the next two quarters:

1. Support an additional payment provider.
2. Improve payment reliability during traffic spikes.
3. Launch a new merchant reporting experience.

The engineering team identifies three concerns:

- Payment-provider integrations share tightly coupled business logic.
- Reporting queries sometimes compete with transactional workloads.
- Deployments frequently require coordinated changes across multiple modules.

One engineer proposes migrating the entire backend to microservices.

Another recommends improving the current modular structure and extracting only the reporting workload and selected payment capabilities.

Leadership wants a clear recommendation.

## Your assignment

### Task 1: Define the problem

Write a concise problem statement that describes the customer and business consequences of the current architecture.

Separate confirmed facts from assumptions.

### Task 2: Identify the quality attributes

Rank the most important requirements:

- Reliability.
- Performance.
- Security.
- Scalability.
- Maintainability.
- Delivery speed.
- Cost efficiency.
- Data correctness.

Explain why your top three matter most.

### Task 3: Compare the alternatives

Evaluate:

- Improving the existing architecture.
- Extracting selected components.
- Migrating broadly to microservices.

Compare expected benefits, costs, risks, and time to value.

### Task 4: Consider failure scenarios

Explain how the design should handle:

- A payment-provider timeout.
- A duplicate payment request.
- A reporting workload spike.
- A failed deployment.
- Delayed transaction-status updates.

Identify which behaviors are product requirements and which implementation decisions belong primarily to engineering.

### Task 5: Make a recommendation

Choose an approach and explain:

- Why it best addresses the current problems.
- What you would do first.
- Which dependencies must be resolved.
- What you would deliberately postpone.
- What risks remain.

### Task 6: Define success metrics

Select a small set of measures for customer outcomes, reliability, delivery performance, and cost.

Explain how you would establish a baseline and evaluate improvement.

### Task 7: Communicate to leadership

Write a concise recommendation suitable for an executive review.

It should explain the problem, the options, the proposed investment, the expected benefits, the major risks, and the decision required.

## Evaluation criteria

A strong answer will:

- Start with business and customer problems rather than a preferred technology.
- Distinguish symptoms from root causes.
- Consider the operational cost of architectural complexity.
- Recognize transaction correctness and reliability as critical requirements.
- Make trade-offs explicit.
- Propose measurable outcomes.
- Recommend a proportionate and evidence-based investment.

---

# Key Takeaways

1. Software architecture defines the structure of a system, its components, their relationships, and the principles governing change.
2. Architecture directly affects product delivery, reliability, scalability, security, cost, and the customer experience.
3. Product Managers should understand architectural trade-offs without attempting to replace engineering expertise.
4. Monoliths, modular monoliths, microservices, and serverless approaches solve different problems; none is universally best.
5. APIs define how systems communicate, and API compatibility can affect mobile releases, integrations, and roadmap commitments.
6. Database choices influence correctness, consistency, reporting, and performance.
7. Event-driven systems and queues can decouple work but introduce delays, retries, duplicate processing, and operational complexity.
8. Scalability and performance require understanding workloads, bottlenecks, latency, throughput, and cost.
9. Reliability involves correct behavior and recovery, not merely keeping a service reachable.
10. Security, privacy, and data integrity must be considered in architectural decisions from the beginning.
11. Technical debt should be prioritized according to its effects on risk, customer outcomes, operating cost, and future delivery.
12. Architecture investments should connect to explicit product or operational outcomes.
13. The best architectural decision is the one that meets the product's requirements with acceptable cost and risk—not necessarily the most sophisticated design.
14. PMs add value by framing problems, clarifying constraints, evaluating alternatives, and helping teams make informed decisions.

# Preview of Day 82

**Day 82 — Data & Analytics Architecture for Product Managers**

Tomorrow, we will explore how product data moves through a modern technology stack. We will cover operational databases, event tracking, data pipelines, data warehouses, data lakes, metrics layers, data quality, governance, and how architectural choices affect product analytics, experimentation, reporting, and decision-making.