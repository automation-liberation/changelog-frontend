import React from "react";
import _ from 'underscore'

class ChangelogServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: _.groupBy(this.props.versions, "version")
    };
  }

  getVersions() {
    const versions = this.state.versions;
    let entries = [];
    var version;
    for (version in versions) {
      let parts = [];
      parts.push(<div className="version-indicator shaped">Eye</div>)
      parts.push(<div className="border"></div>)
      parts.push(<h3>{version}:</h3>)
      parts.push(versions[version].sort((a, b) => {
              if (a.header > b.header) return 1;
              if (a.header < b.header) return -1;
              return 0;
            }).map(entry => (
        <div className="entry" key={entry.version+entry.body}>
          <span className={entry.header.toLowerCase()+"-color entry-header"}>{entry.header}</span> {entry.body}
        </div>)
      ))
      entries.push(<div className="version">{parts}</div>)
    }
    return entries;
  }

  render() {
    return (
      <div className="service">{this.getVersions()}</div>
    );
  }
}

export default ChangelogServices;