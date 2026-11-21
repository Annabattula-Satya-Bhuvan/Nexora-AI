# NEXORA AI — System Architecture

## 1. Overview

NEXORA AI is a multi-agent AI workforce platform designed to organize intelligent agents, delegate tasks, coordinate execution, and review results in one workspace.

**Product vision:** One Command. An Entire Workforce.

## 2. System Architecture

NEXORA uses five primary layers:

1. **Frontend:** HTML, CSS, JavaScript, hosted on GitHub Pages.
2. **API and Backend:** Python and FastAPI for authentication, validation, permissions, and application services.
3. **Orchestration Engine:** Task planning, agent routing, execution management, and result review.
4. **AI and Tools:** Provider-independent language-model adapters and tools for search, code, files, and APIs.
5. **Data and Memory:** PostgreSQL, Supabase Storage, and pgvector.

## 3. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Styling | Custom CSS |
| Icons | Lucide |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| Authentication | Supabase Auth |
| File storage | Supabase Storage |
| Vector search | pgvector |
| Real-time communication | WebSockets |
| Agent orchestration | Custom NEXORA engine |
| Frontend hosting | GitHub Pages |
| Backend hosting | Render, Railway, or equivalent |
| Version control | GitHub |

## 4. Request and Execution Flow

1. A user submits a command through the frontend.
2. The frontend sends a request to the backend API.
3. The backend validates the request and user permissions.
4. The orchestration engine analyzes and decomposes the task.
5. The agent router selects suitable specialist agents.
6. Agents use permitted AI providers and tools.
7. Results are collected and reviewed.
8. The system requests human approval when required.
9. The final result and execution history are returned to the user.
10. Relevant information may be stored in project memory.

## 5. Core Backend Services

- Authentication and authorization
- Agent registry and configuration
- Task and mission management
- Agent orchestration
- AI provider adapters
- Tool execution
- Project and file management
- Knowledge and memory retrieval
- Verification and review
- Notifications and real-time events
- Analytics and audit logging

## 6. Security Principles

- Never expose private AI API keys in frontend JavaScript.
- Keep privileged database credentials on the backend.
- Validate all incoming requests.
- Enforce user and project permissions.
- Apply rate limits to sensitive endpoints.
- Record important agent actions.
- Require approval for configured high-impact actions.
- Protect uploaded files and stored knowledge.

## 7. Deployment Architecture

The frontend is deployed separately through GitHub Pages. The Python backend requires a separate hosting service.

The frontend communicates with the backend through HTTPS APIs. WebSockets may be used for live mission and agent updates.

## 8. Important Implementation Note

This document describes the target architecture. Components such as the backend, database, authentication, AI provider connections, and orchestration engine must be implemented and deployed before NEXORA can perform real multi-agent execution.
