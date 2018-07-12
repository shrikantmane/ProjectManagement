import * as React from "react";
import * as redux from "react-redux";
const connect = redux.connect;
import CEODashboardContainer from "./CEODashboardContainer";
// import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface IProjectDashboardProps extends React.Props<any> {
}

class ProjectDashboardContainer extends React.Component<IProjectDashboardProps, {}> {
  public constructor() {
    super();
  }

  public render() {
    console.log('ProjectDashboardContainer')
    return (
      <div>
        <CEODashboardContainer>
        </CEODashboardContainer>
      </div >
    );
  };
}

function mapStateToProps(state) {
  return {
    // systemStatus: state.systemStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDashboardContainer);
