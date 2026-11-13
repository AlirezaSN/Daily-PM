# How Would You Improve the User Experience of an Airport?

**Interview Question:**

Imagine you are a Product Manager responsible for improving the passenger experience at a major international airport. How would you approach this problem?

*Note: This is an intentionally open-ended question. There is no single correct answer. The goal is to demonstrate how you clarify ambiguity, identify the right problem, prioritize opportunities, and design a solution.*

## 1. Start with Clarifying Questions

I would avoid jumping directly into solutions. The first step is to understand what the interviewer means by "improving the airport experience."

I would ask a few clarifying questions:

**About the objective:**
- Are we trying to improve passenger satisfaction, reduce waiting times, increase airport revenue, or achieve a combination of these goals?
- Is there a specific business objective or KPI that leadership wants to improve?

**About the target users:**
- Are we focusing on all passengers or a particular group, such as business travelers, families, international passengers, or passengers with reduced mobility?
- Are we considering departing passengers, arriving passengers, or both?

**About the scope:**
- Are we responsible for the entire airport experience, from arrival at the airport to boarding, or only specific touchpoints?
- Are we allowed to change physical infrastructure and operational processes, or should we focus on digital solutions?

**About constraints:**
- Do we have access to passenger feedback, operational data, and existing airport systems?
- Are there any budget, regulatory, or implementation constraints?

These questions help establish the boundaries of the problem before investing time in solution design.

### Assumptions for This Exercise

To make progress, I will assume the following:

- Our primary objective is to improve passenger satisfaction.
- We are focusing on departing passengers.
- The airport serves both domestic and international travelers.
- We can propose improvements to both digital experiences and operational processes, but major infrastructure changes are outside our initial scope.
- We have access to passenger surveys, operational data, and customer support records.

With these assumptions, I can now structure the problem.

## 2. Break Down the Passenger Journey

I would map the end-to-end passenger journey to identify the main interactions and potential pain points.

A typical departing passenger journey includes:

1. Planning the trip and checking flight information.
2. Traveling to the airport.
3. Finding the correct terminal and check-in area.
4. Checking in and dropping off luggage.
5. Passing through security.
6. Completing passport control, if applicable.
7. Finding the departure gate.
8. Waiting for boarding.
9. Boarding the aircraft.

At each stage, I would identify possible sources of friction.

| Journey Stage | Potential Pain Points |
|---|---|
| Before arrival | Unclear flight information, uncertainty about arrival time |
| Airport arrival | Traffic, parking difficulties, confusing terminal entrances |
| Check-in | Long queues, unclear procedures |
| Security | Unpredictable waiting times, confusing requirements |
| Passport control | Long queues and insufficient guidance |
| Finding the gate | Poor navigation and unclear signage |
| Waiting | Limited seating, poor facilities, lack of updates |
| Boarding | Unclear announcements, delays, crowded boarding areas |

This journey map gives us a structured view of the experience rather than focusing on isolated features.

## 3. Identify and Prioritize the Biggest Problems

Not every pain point deserves equal attention.

I would combine qualitative research and quantitative analysis to identify the most significant problems.

### Qualitative Research

I would:

- Interview passengers from different segments.
- Analyze customer complaints and feedback.
- Observe passenger behavior at busy airport areas.
- Talk to airport employees and operational teams.
- Understand which parts of the journey create the most stress or confusion.

### Quantitative Analysis

I would investigate:

- Average waiting time at check-in and security.
- Percentage of passengers missing flights.
- Passenger satisfaction scores by journey stage.
- Number of complaints by category.
- Average time required to reach departure gates.
- Frequency of flight information changes.
- Passenger flow and congestion during peak hours.

### Prioritization Framework

I would prioritize opportunities using four factors:

1. **Customer impact:** How many passengers experience the problem, and how painful is it?
2. **Business impact:** Does solving it improve satisfaction, operational efficiency, or airport revenue?
3. **Frequency:** How often does the problem occur?
4. **Implementation effort:** How difficult and expensive is the solution?

For example, if research reveals that passengers frequently experience uncertainty about security waiting times, this could be a high-priority opportunity because it affects many passengers and creates unnecessary stress.

For this exercise, I will assume that **lack of reliable, real-time information throughout the airport journey is one of the most significant problems**.

## 4. Define the Product Opportunity

Based on this assumption, I would define the opportunity as follows:

"Passengers need better visibility into what is happening during their airport journey so they can make informed decisions, reduce uncertainty, and avoid unnecessary stress."

This problem statement is more useful than immediately deciding to build an airport mobile application.

It describes the user need without prematurely committing to a particular solution.

## 5. Design the Solution

I would explore a solution that helps passengers navigate their airport journey with timely and relevant information.

One possible solution is a digital airport companion.

### Core Features

**1. Personalized Flight Dashboard**

- Flight status and departure time.
- Terminal and gate information.
- Boarding time and relevant announcements.
- Notifications about gate changes or delays.

**2. Real-Time Waiting Information**

- Estimated waiting times at security checkpoints.
- Estimated waiting times at passport control.
- Recommendations for less crowded checkpoints, where operationally possible.

**3. Airport Navigation**

- Interactive airport map.
- Walking directions to gates, lounges, restaurants, and other facilities.
- Estimated walking time to the departure gate.

**4. Contextual Notifications**

Instead of sending generic notifications, the product should provide information based on the passenger's current journey.

For example:

- "Your gate has changed from B12 to B18."
- "Security checkpoint A currently has an estimated waiting time of 15 minutes."
- "Boarding for your flight starts in 25 minutes."
- "It takes approximately 12 minutes to walk to your departure gate."

**5. Accessibility Support**

- Accessible navigation for passengers with reduced mobility.
- Clear information about elevators and accessible routes.
- Additional assistance information for families and passengers who need support.

## 6. Define the MVP

I would avoid building all these features at once.

For the first version, I would focus on three capabilities:

1. Personalized flight information.
2. Real-time or regularly updated waiting-time estimates.
3. Basic airport navigation.

These features directly address the main problem: reducing uncertainty during the airport journey.

I would initially launch the MVP in one terminal or a limited passenger segment, depending on data availability and operational readiness.

Features such as restaurant reservations, loyalty programs, shopping recommendations, and advanced personalization could be considered later.

## 7. Define Success Metrics

Since our primary objective is improving passenger satisfaction, I would define a combination of outcome and supporting metrics.

### Primary Metric

**Passenger Satisfaction Score (CSAT)**

Measured specifically across the journey stages that the product aims to improve.

### Supporting Metrics

| Category | Metrics |
|---|---|
| Product adoption | App adoption rate, active users, feature adoption |
| Passenger experience | CSAT, NPS, passenger complaints |
| Operational efficiency | Average waiting time, missed-flight rate |
| Information quality | Flight information accuracy, waiting-time prediction accuracy |
| Engagement | Notification interaction rate, navigation usage |

I would also define guardrail metrics.

For example, sending too many notifications could reduce passenger satisfaction rather than improve it. Similarly, inaccurate waiting-time estimates could damage trust.

Therefore, notification opt-out rates and information accuracy should be monitored closely.

## 8. Plan the Launch and Iterate

I would launch the MVP in a controlled environment and evaluate its impact.

A possible rollout plan:

1. Select one terminal and establish baseline metrics.
2. Integrate available flight and operational data.
3. Launch the experience to a limited passenger group.
4. Monitor adoption, information accuracy, and passenger feedback.
5. Compare satisfaction and operational metrics against the baseline.
6. Identify the most valuable improvements.
7. Expand to other terminals once the solution demonstrates measurable value.

I would also work closely with airport operations, IT, security, airlines, and customer service teams because the success of this product depends heavily on the quality and availability of operational information.

## 9. Summarize Your Answer in the Interview

"I would first clarify what improving the airport experience means in terms of business objectives, target passengers, and scope. For this exercise, I would assume our main objective is improving satisfaction among departing passengers.

I would map the passenger journey from airport arrival to boarding and combine passenger interviews, feedback analysis, and operational data to identify the most painful parts of the experience.

Assuming that uncertainty and lack of real-time information are major pain points, I would explore a digital airport companion that provides personalized flight updates, waiting-time estimates, and airport navigation.

I would start with an MVP focused on these essential capabilities, launch it in a controlled environment, and measure its impact through passenger satisfaction, information accuracy, waiting times, and adoption.

Throughout the process, I would collaborate with airport operations and other stakeholders to ensure that the solution is technically feasible and operationally reliable."

---

## What Can Make Your Answer Stand Out?

This question is not primarily about designing an airport application. It is about demonstrating how you approach an ambiguous problem.

A strong answer should demonstrate the following:

- **Clarifying before solving:** Don't assume what "improve the experience" means.
- **Defining the scope:** Establish which users and journey stages you are addressing.
- **Making assumptions explicit:** If you cannot get all the information you need, state your assumptions and move forward.
- **Journey-based thinking:** Understand the complete experience rather than isolated touchpoints.
- **Problem-first thinking:** Define the opportunity before proposing features.
- **Prioritization:** Focus on the most impactful problems rather than building everything.
- **Cross-functional collaboration:** Recognize that product outcomes often depend on teams outside Product and Engineering.

One particularly important distinction: a digital product may help passengers understand waiting times, but it cannot necessarily reduce the actual queue. If the underlying problem is insufficient security staff or inefficient airport operations, a mobile application alone will not solve it.

A good Product Manager identifies the real problem and chooses the right intervention, even when that intervention is not purely software.

## Follow-up Interview Question

Imagine that after launching the digital airport companion, you discover that only 8% of departing passengers use it, despite positive feedback from those who do.

What would you investigate first? Would you focus on increasing adoption, improving the product, or reconsidering the original problem?

---