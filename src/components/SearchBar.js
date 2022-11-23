import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  componentDidMount() {
    this.props.doWhenSubmit("flower");
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.doWhenSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className="field">
            <label>Search Images</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
