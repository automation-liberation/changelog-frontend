import React from "react";
import ChangelogEntries from "./ChangelogEntries"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Automation Liberation Changelog</h1>
        <ChangelogEntries/>
      </div>
    );
  }
}
export default App;