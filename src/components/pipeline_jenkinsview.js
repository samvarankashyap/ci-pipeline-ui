import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import { fetchPipelineJenkinsview }  from '../actions';

var CONFIG = require("../constants/config")


class PipelineJenkinsview extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    //console.log(id);
    this.props.fetchPipelineJenkinsview(id);
  }

  renderLabel(labelState) {
    if (labelState == "SUCCESS") {
      return (
        <span className="label label-info">Success</span>
      );
    }
    else if (labelState == "FAILURE") {
      return (
        <span className="label label-danger">Failure</span>
      );
    }
    else if (labelState == "FAILED") {
      return (
        <span className="label label-danger">Failed</span>
      );
    }
    else if (labelState == "FINISHED") {
      return (
        <span className="label label-default">Finished</span>
      );
    }
    return (
      <span className="label label-default" >{labelState}</span>
    );
  }

  renderTime(duration){
    var date = new Date(duration);

    console.log(duration);
    var str = '';
    let hrs = date.getUTCHours();
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()
    let mills = date.getUTCMilliseconds()
    if (hrs > 0){
      str += hrs + "hr ";
    }
    if (mins > 0){
      str += mins + "m ";
    }
    if (secs > 0){
      str += secs + "s ";
    }
    else if (mills > 0){
      str += mills + "ms ";
    }
    return (
      <span>{str}</span>
    );
  }

  renderSteps(stages){
    //console.log("stages reached");
    //console.log(stages);
    return _.map(stages, stage  => {
      //console.log(stage);
      let duration = stage.dirationMillis/1000
      if (stage.status == 'SUCCESS'){
        return(
          <td key={stage.id}>
            <div className="jcard greencolordiv">
              <div className="jcardcontainer">
                {this.renderTime(stage.durationMillis)}
              </div>
            </div>
          </td>
        );
      }
      else if (stage.status == 'FAILED'){
        return(
        <td key={stage.id}>
          <div className="jcard redcolordiv">
            <div className="jcardcontainer">
              {this.renderTime(stage.durationMillis)}
            </div>
          </div>
      </td>
      );
      }
      });
  }

  renderRows(){
    return _.map(this.props.pipelines.pipelinejenkinsview, node  => {
      //console.log(node);
        return(
          <tr key={node.id}>
          <td>{node.id}</td>
          <td className="wordwrap">{node.name}</td>
          {this.renderSteps(node.stages)}
          </tr>
        );
      });
  }

  getMaxRows(workflows){
    //console.log("inside the workflows");
    //console.log(workflows);
    var maxrows = 0;
    var rowHeaders = [];
    for (var ri in workflows){
      var r = workflows[ri];
      if (r["stages"].length > maxrows){
        maxrows = r["stages"].length;
        rowHeaders = r["stages"];
      }
    }
    //console.log("rowHeaders are :: ");
    //console.log(rowHeaders);

    return rowHeaders;
  }
  renderHeaders(rowHeaders){

    var headers = _.map(rowHeaders, rh => {
      //console.log(rh);
      return (
        <th key={rh.id} className="wordwrap textcenter">
          <div className="">
            <div className="jcardcontainer">
              {rh.name}
            </div>
          </div>
        </th>
      );
    });
    return headers;
  }

  renderColGroups(rowHeaders){
    let headerLength = rowHeaders.length;
    let percentage = 80/headerLength;
    var colgroups = _.map(rowHeaders, rh => {
      return (
        <col key={rh.id} style={{width: percentage}}></col>
      );
    });
    return colgroups;
  }

  render(){
    //console.log(this.props.pipelines.pipelinejenkinsview);
    if(this.props.pipelines.pipelinejenkinsview){
      //console.log("inside render jenkinsview");
      var workflows = this.props.pipelines.pipelinejenkinsview;
      //console.log(workflows);
      var rowHeaders = this.getMaxRows(workflows);
      return (
          <div className="table-responsive">
            <table className="table-bordered table-hover">
              <colgroup>
              <col style={{width: '2%'}}></col>
              <col style={{width: '15%'}}></col>
              {this.renderColGroups(rowHeaders)}
              </colgroup>
              <thead className="table-info">
                <tr>
                  <th> # </th>
                  <th> Name </th>
                  {this.renderHeaders(rowHeaders)}
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
          </div>
      );
    }
  else{
    return (
      <div>
        Loading ...
        <img src="/static/loading.gif" alt="Smiley face" height="42" width="42">
        </img>
      </div>
    );
  }
  }
}

function mapStateToProps({ pipelines }, ownProps){
  return { pipelines };
}

export default connect(mapStateToProps, { fetchPipelineJenkinsview })(PipelineJenkinsview);
