import * as React from "react";
import * as redux from "react-redux";
const connect = redux.connect;

interface IProfileProps extends React.Props<any> {
 projectList: any,
 getCEOProjectList: () => void;
}

class ProfileContainer extends React.Component<IProfileProps, {}> {
  public constructor() {
    super();
  }
  public render() {
    console.log('ProfileContainer')
    return (
      <div>
       <span>ProfileContainer</span>
      </div >
    );
  };
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return { };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
