import React, { Component } from 'react';


class Searchbar extends Component{

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const SerchImgName = form.elements.name.value
  //   form.reset()
  //   console.log(SerchImgName);
  //   return SerchImgName
    
  // }
 


  render() {
    return (
      <header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit}>
    <button type="submit" className="button" >
            <span className="button-label">Search</span>
    </button>

    <input
            className="input"
            name='name'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
  }
}


export default Searchbar