export const FETCH_PIPELINE_VIEWS = 'fetch_pipeline_views';
export const FETCH_PIPELINES = 'fetch_pipelines';
export const FETCH_PIPELINE = 'fetch_pipeline';
export const FETCH_PIPELINE_RUNS = 'fetch_pipeline_runs';
export const FETCH_PIPELINE_RUN = 'fetch_pipeline_run';
export const FETCH_PIPELINE_RUNVIEW = 'fetch_pipeline_runview';
export const FETCH_PIPELINE_LATESTRUN = 'fetch_pipeline_latestrun';
export const FETCH_PIPELINE_JENKINSVIEW = 'fetch_pipeline_jenkinsview';
export const FETCH_PIPELINE_RUN_ARTIFACTS = 'fetch_pipeline_run_artifacts';
export const FETCH_PIPELINE_VIEW_BY_NAME = 'fetch_pipeline_view_by_name';
export const FETCH_PIPELINE_BY_NAME = 'fetch_pipeline_by_name';
export const FETCH_PIPELINE_DETAIL = 'fetch_pipeline_detail';
export const FETCH_PIPELINE_RUN_NODES = 'fetch_pipeline_run_nodes';
export const FETCH_PIPELINE_RUN_NODE_STEPS = 'fetch_pipeline_run_node_steps';


const HEADERS = {}
var CONFIG = require("../constants/config")
import axios from 'axios';

export function fetchPipelineRunNodeSteps(name, runid, nodeid) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${name}/runs/${runid}/nodes/${nodeid}/steps`);
  return {
    type: FETCH_PIPELINE_RUN_NODE_STEPS,
    payload: request
  };
}

export function fetchPipelineRunNodes(name, runid) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${name}/runs/${runid}/nodes`);
  return {
    type: FETCH_PIPELINE_RUN_NODES,
    payload: request
  };
}

export function fetchPipelineDetail(name) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${name}`);
  return {
    type: FETCH_PIPELINE_DETAIL,
    payload: request
  };
}

export function fetchPipelineViewByName(name) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/views/${name}`);
  return {
    type: FETCH_PIPELINE_VIEW_BY_NAME,
    payload: request
  };
}

export function fetchPipelineViews() {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/views`);

  return {
    type: FETCH_PIPELINE_VIEWS,
    payload: request
  };
}

export function fetchPipelines() {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines`);

  return {
    type: FETCH_PIPELINES,
    payload: request
  };
}

export function fetchPipeline(id) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}`);
  return {
    type: FETCH_PIPELINE,
    payload: request
  };
}

export function fetchPipelineRuns(id) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}/runs`);
  return {
    type: FETCH_PIPELINE_RUNS,
    payload: request
  };
}

export function fetchPipelineRun(id, runId) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}/${runId}`);
  return {
    type: FETCH_PIPELINE_RUN,
    payload: request
  };
}

export function fetchPipelineRunview(id) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}/runview`);
  return {
    type: FETCH_PIPELINE_RUNVIEW,
    payload: request
  };
}

export function fetchPipelineLatestrun(id) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}/latestrun`);
  return {
    type: FETCH_PIPELINE_LATESTRUN,
    payload: request
  };
}

export function fetchPipelineRunArtifacts(id, runId) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}/runs/${runId}/artifacts`);
  return {
    type: FETCH_PIPELINE_RUN_ARTIFACTS,
    payload: request
  };
}

export function fetchPipelineJenkinsview(id) {
  const request = axios.get(`${CONFIG.getRESTURL()}/pipelines/${id}/wfapi`);
  return {
    type: FETCH_PIPELINE_JENKINSVIEW,
    payload: request
  };
}
