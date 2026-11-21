import researchAgent from "./research-agent.js";
import codingAgent from "./coding-agent.js";
import planningAgent from "./planning-agent.js";
import factCheckingAgent from "./fact-checking-agent.js";
import writingAgent from "./writing-agent.js";
import dataAnalystAgent from "./data-analyst-agent.js";
import securityAgent from "./security-agent.js";
import testingAgent from "./testing-agent.js";

export const AGENTS = [
  researchAgent,
  codingAgent,
  planningAgent,
  factCheckingAgent,
  writingAgent,
  dataAnalystAgent,
  securityAgent,
  testingAgent
];

export function getAgent(agentId) {
  return AGENTS.find(agent => agent.id === agentId) || null;
}

export function getAllAgents() {
  return AGENTS.map(agent => ({ ...agent }));
}

export async function executeAgent(agentId, input, context = {}) {
  const agent = getAgent(agentId);

  if (!agent) {
    throw new Error(`Unknown NEXORA agent: ${agentId}`);
  }

  if (typeof input !== "string" || !input.trim()) {
    throw new Error("Please provide a task for the agent.");
  }

  const apiBase = window.NEXORA_CONFIG?.API_BASE_URL;

  if (!apiBase) {
    throw new Error(
      "NEXORA backend is not configured yet. Set API_BASE_URL when the backend is deployed."
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000);

  try {
    const response = await fetch(
      `${apiBase.replace(/\/$/, "")}/api/agents/execute`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agent_id: agent.id,
          input: input.trim(),
          context
        }),
        signal: controller.signal
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        data.detail || data.message || `Agent request failed (${response.status}).`
      );
    }

    if (!data.result) {
      throw new Error("The backend returned no agent result.");
    }

    return {
      agentId: agent.id,
      agentName: agent.name,
      result: data.result,
      executionId: data.execution_id || null,
      status: data.status || "completed"
    };
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Agent request timed out after 60 seconds.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export default AGENTS;
