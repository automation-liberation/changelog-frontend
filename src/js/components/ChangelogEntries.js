import React from "react";
import axios from 'axios';
import ChangelogServices from './ChangelogServices'
import _ from 'underscore'

class ChangelogEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get("https://api.johansson.tech/changelog/service-entries")
      .then(res => {
        return res.data
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.entries.sort((a, b) => {
              if (a.version > b.version) return -1;
              if (a.version < b.version) return 1;
              return 0;
            })
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ChangelogServices services={items}/>
      );
    }
  }
}

export default ChangelogEntries;