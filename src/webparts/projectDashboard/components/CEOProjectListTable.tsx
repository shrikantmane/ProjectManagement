import * as React from "react";
import { Link } from 'react-router-dom';

import { DataTable } from "primereact/components/datatable/DataTable";
import { Column } from "primereact/components/column/Column";
import { CEOProjects } from "../model/CEOProjectList";

export interface ICEOProjectListTableProps extends React.Props<any> {
  projectList: Array<CEOProjects>,
}
export default class CEOProjectListTable extends React.Component<ICEOProjectListTableProps, {}> {
  constructor() {
    super();
  }
 
  statusTemplate(rowData : CEOProjects, column){
    return(<span>{rowData.Status0 ? rowData.Status0.Status : ""}</span>)
  }

  public render() {    
    console.log('CEOTable', this.props.projectList)
    return (
     <div>
       {/* <Link to="/profile"></Link> */}
      <DataTable value={this.props.projectList} responsive={true}>          
          <Column field="Project_x0020_ID" header="ID" />  
          <Column field="Project" header="Name" />
          <Column field="Priority" header="Priority" />
          <Column
          field="Status"
          header="Status"
          body={this.statusTemplate}
        />            
      </DataTable>
    </div>
    );
  }
}