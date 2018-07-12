import * as React from "react";
// import {
//   MessageBar,
//   MessageBarType
// } from "office-ui-fabric-react";
import * as redux from "react-redux";
const connect = redux.connect;
import CEOProjectListTable from "../components/CEOProjectListTable";
import { getCEOProjectList } from "../actions/CEODashboardActions";
import {sp, ItemAddResult} from "@pnp/sp";
import { CEOProjects } from "../model/CEOProjectList";

interface ICEODashboardProps extends React.Props<any> {
 projectList: Array<CEOProjects>,
 getCEOProjectList: () => void;
}

class CEODashboardContainer extends React.Component<ICEODashboardProps, {}> {
  public constructor() {
    super();
  }
 componentDidMount(){
   this.props.getCEOProjectList();

  //  sp.web.lists.getByTitle("Projects")
  //  .items
  //  .select("Project_x0020_ID","Project", "StartDate", "DueDate", "AssignedTo/Title", "AssignedTo/ID","Status0/ID","Status0/Status","Status0/Status_x0020_Color","Priority").expand("AssignedTo", "Status0")
  //  .getAll()
  //  .then((response) => {
  //    console.log(response);
  //  //   dispatch({
  //  //         type: GET_CEO_PROJECT_LIST,
  //  //         payload: {
  //  //             projectList: items1
  //  //         }     
  //  //     });  
  //  }); 
 }
  public render() {
    console.log('CEODashboardContainer')
    return (
      <div>
        <CEOProjectListTable projectList = {this.props.projectList}>
        </CEOProjectListTable>
      </div >
    );
  };
}

function mapStateToProps(state) {
  console.log('mapStateToProps state',state.ceoDashbaord.projectList);
  return {
    projectList: state.ceoDashbaord.projectList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getCEOProjectList: (): void => {
      console.log('mapDispatchToProps, getList'),
      dispatch(getCEOProjectList(dispatch));
  },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CEODashboardContainer);
