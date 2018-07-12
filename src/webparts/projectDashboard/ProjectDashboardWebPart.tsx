import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import * as Redux from "redux";
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ProjectDashboardWebPartStrings';
import ProjectDashboardContainer from "./containers/ProjectDashboardContainer";
import ProfileContainer from "./containers/ProfileContainer";

export interface IProjectDashboardWebPartProps {
  description: string;
}

const store: Redux.Store<any> = configureStore({});

const ProjectDashboard: React.StatelessComponent<any> = () => (
  <Provider store={store}>
    <ProjectDashboardContainer />
  </Provider>
);


export default class ProjectDashboardWebPart extends BaseClientSideWebPart<IProjectDashboardWebPartProps> {

  public render(): void {
  //   const element = (<Provider store={store}>
  //     <Router>
  //         <switch>
  //           <Route path="/" component={ProjectDashboardContainer}>                                
  //           </Route>            
  //           <Route>                
  //               <Route path="/profile" component={ProfileContainer}/>
  //           </Route>
  //          </switch>
  //     </Router>    
  //  </Provider>)
     ReactDom.render(ProjectDashboard(null), this.domElement);
   // ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  public onInit<T>(): Promise<T> {
  //  this.ldProps.PageContext = this.context.pageContext;
    return Promise.resolve(null);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
