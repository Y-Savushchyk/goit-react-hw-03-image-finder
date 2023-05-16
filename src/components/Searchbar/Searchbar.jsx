import React, { Component } from "react";
import css from './Searchbar.module.css'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
      console.log(this.state.value);
      e.preventDefault();
    //   потом добавить this.props.handleSearch(value) когда допишу app
    this.setState({value: ''});
  }
    

  render() {
    return (
        <header className={css.searchbar}>
  <form className={css.form} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.button}>
      <span className={css.buttonLabel}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
                    placeholder="Search images and photos"
                    value={this.state.value}
onChange={this.handleChange}
    />
  </form>
</header>
    );
  }
}
export default Searchbar