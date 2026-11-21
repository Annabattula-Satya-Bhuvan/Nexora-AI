# NEXORA AI — API Documentation

## 1. Overview

The NEXORA backend is planned as a Python FastAPI application.

The API connects the frontend to authentication, agents, missions, tasks, projects, workflows, memory, and platform services.

**Base URL:** `https://YOUR-BACKEND-DOMAIN/api/v1`

This is a proposed API structure, not a claim that these endpoints are already deployed.

## 2. API Conventions

- Protocol: HTTPS
- Data format: JSON
- Authentication: Secure user access token
- API version prefix: `/api/v1`
- Content type: `application/json`

## 3. Proposed Endpoints

### Health

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Check backend health |

### Agents

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/agents` | List available agents |
| GET | `/agents/{agent_id}` | Get agent details |
| POST | `/agents` | Register an agent |
| PATCH | `/agents/{agent_id}` | Update agent configuration |
| POST | `/agents/execute` | Execute an agent task |

### Missions

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/missions` | List missions |
| POST | `/missions` | Create a mission |
| GET | `/missions/{mission_id}` | Get mission details |
| PATCH | `/missions/{mission_id}` | Update mission |
| POST | `/missions/{mission_id}/cancel` | Cancel a mission |

### Tasks

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/tasks` | List tasks |
| POST | `/tasks` | Create a task |
| GET | `/tasks/{task_id}` | Get task details |
| PATCH | `/tasks/{task_id}` | Update task status |

### Projects

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/projects` | List projects |
| POST | `/projects` | Create a project |
| GET | `/projects/{project_id}` | Get project details |
| PATCH | `/projects/{project_id}` | Update project |

### Workflows

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/workflows` | List workflows |
| POST | `/workflows` | Create a workflow |
| POST | `/workflows/{workflow_id}/run` | Start workflow execution |

### Execution History

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/executions` | List execution records |
| GET | `/executions/{execution_id}` | Get execution details |

### Approvals

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/approvals` | List pending approvals |
| POST | `/approvals/{approval_id}/approve` | Approve an action |
| POST | `/approvals/{approval_id}/reject` | Reject an action |

## 4. Example Request

### Execute an Agent

`POST /api/v1/agents/execute`

Request body:

```json
{
  "agent_id": "research-agent",
  "task": "Research the latest AI automation trends",
  "project_id": "project-123"
}
```

Example response:

```json
{
  "execution_id": "execution-123",
  "agent_id": "research-agent",
  "status": "accepted",
  "message": "Execution request received"
}
```

These examples describe the proposed contract. Actual response fields and validation rules must be implemented by the backend.

## 5. Error Handling

Use consistent JSON error responses.

Example:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid data"
  }
}
```

Common HTTP status codes:

| Code | Meaning |
|---:|---|
| 200 | Successful request |
| 201 | Resource created |
| 202 | Request accepted for processing |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Resource not found |
| 422 | Validation error |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

## 6. Real-Time Communication

WebSockets may provide live updates for:

- Mission progress
- Agent status
- Task execution
- Approval requests
- Notifications

A WebSocket event contract must be defined and implemented by the backend before clients can consume it.

## 7. Security Requirements

- Authenticate protected requests.
- Verify user permissions on every protected resource.
- Validate request data.
- Apply rate limits.
- Keep provider API keys on the backend.
- Avoid logging passwords, tokens, or secrets.
- Audit sensitive operations.

## 8. API Implementation Status

All endpoints in this document are planned interfaces. They become usable only after implementation, testing, and backend deployment.
