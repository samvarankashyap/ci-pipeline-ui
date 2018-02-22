import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPipelineRuns }  from '../actions';


class PipelineRuns extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.fetchPipelineRuns(id);
  }
  renderPipelineRuns(){
    return _.map(this.props.pipelines.pipelineruns, pipelinerun => {
      return (
        <tr key={pipelinerun.id}>
          <td>
            {pipelinerun.id}
          </td>
          <td>
            {pipelinerun.name}
          </td>
          <td>
            {pipelinerun.result}
          </td>
          <td>
            <button className="btn btn-default btn-sm">
              Artifacts
            </button>
            <button className="btn btn-default btn-sm">
              Nodes
            </button>
          </td>
        </tr>
      )
    })
  }
  render(){
    const { pipelines } = this.props;
    if (Object.keys(pipelines).length == 0){
      return (
        <div>
          <h3> Loading ... </h3>
          <img src="/static/loading.gif" alt="Smiley face" height="42" width="42">
          </img>
        </div>
      )
    }
    else{
      return (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
            {this.renderPipelineRuns()}
          </tbody>
          </table>
        </div>
      );
    }
  }
}

function mapStateToProps({ pipelines }, ownProps){
  return { pipelines };
}

export default connect(mapStateToProps, { fetchPipelineRuns })(PipelineRuns);
