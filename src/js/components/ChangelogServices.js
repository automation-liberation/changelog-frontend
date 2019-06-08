import React from "react";
import ChangelogService from './ChangelogService'
import _ from 'underscore'

class ChangelogServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: _.groupBy(this.props.services, "service")
    };
  }

  getServices() {
    const services = this.state.services;
    let entries = [];
    var service;
    for (service in services) {
      entries.push(<h2>{this.titleCase(service.replace("automation-liberation/","").replace("-", " "))}:</h2>);
      entries.push(<ChangelogService versions={services[service]}/>)
    }
    return entries;
  }

  titleCase(str){
   str = str.toLowerCase().split(' ');

   let final = [];

    for(let  word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }

  return final.join(' ')

}

  render() {
    return (
      <div className="services">{this.getServices()}</div>
    );
  }
}

export default ChangelogServices;