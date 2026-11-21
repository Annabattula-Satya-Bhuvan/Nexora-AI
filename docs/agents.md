# NEXORA AI — Specialist Agent Documentation

## 1. Overview

NEXORA AI uses specialist agents with distinct responsibilities. The orchestration engine assigns work according to task requirements and agent capabilities.

## 2. Specialist Agents

### 1. Research Agent
**Purpose:** Research information and discover useful insights.

Responsibilities:
- Gather information from permitted sources.
- Identify relevant findings.
- Organize research results.
- Provide source references where available.

### 2. Coding Agent
**Purpose:** Assist with software development.

Responsibilities:
- Generate and explain code.
- Identify potential code issues.
- Suggest fixes and improvements.
- Assist with development tasks.

### 3. Planning Agent
**Purpose:** Organize projects and create execution plans.

Responsibilities:
- Break complex goals into smaller tasks.
- Identify dependencies.
- Recommend task priorities.
- Coordinate task sequencing.

### 4. Fact-Checking Agent
**Purpose:** Check information and validate important claims.

Responsibilities:
- Identify claims requiring verification.
- Compare claims against available evidence.
- Highlight uncertainty and conflicting information.
- Produce verification reports.

### 5. Writing Agent
**Purpose:** Produce and improve written content.

Responsibilities:
- Draft documents and reports.
- Rewrite and edit content.
- Improve clarity and structure.
- Follow requested writing styles.

### 6. Data Analyst Agent
**Purpose:** Analyze structured information and identify insights.

Responsibilities:
- Examine datasets.
- Calculate relevant metrics.
- Identify patterns and trends.
- Prepare analytical summaries.

### 7. Security Agent
**Purpose:** Review security-related risks.

Responsibilities:
- Identify potential security weaknesses.
- Review permissions and access patterns.
- Highlight exposed secrets or unsafe configurations.
- Recommend security improvements.

### 8. Testing Agent
**Purpose:** Support quality assurance.

Responsibilities:
- Design test cases.
- Identify possible failure scenarios.
- Review application behavior.
- Report defects and test results.

## 3. Agent Lifecycle

A typical agent lifecycle:

1. Registered
2. Available
3. Assigned
4. Executing
5. Awaiting review, if required
6. Completed or failed

These are proposed lifecycle states; the backend must enforce and persist them.

## 4. Agent Execution Principles

- Each agent must have a defined role.
- Each agent must receive only the context needed for its task.
- Agents must use authorized tools.
- Important actions must be recorded.
- Outputs should be reviewable.
- Unverified claims must not be presented as confirmed facts.
- High-impact actions should follow configured approval rules.

## 5. Orchestration

The Planning Agent may help decompose a request. The orchestration engine remains responsible for assigning tasks, managing dependencies, tracking execution, handling failures, and collecting results.

Agents should not independently bypass platform permissions.

## 6. Agent Configuration

A future agent configuration should support:

- Unique agent ID
- Name and role
- Description
- Capabilities
- System instructions
- Permitted tools
- Model-provider configuration
- Status
- Execution limits
- Output format

## 7. Implementation Status

The JavaScript agent files currently define specialist configurations and a registry. Real AI responses require a working backend execution endpoint, configured AI provider, authorized tools, and appropriate credentials. Agent definitions alone do not execute AI tasks.
