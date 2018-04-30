import React from 'react';

class Next extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      name: ''
    };
  }
  add(){
    var arr = this.state.data.slice();
    arr.push({id:new Date()).getTime(), 'name':this.state.name})
    this.setState({data:arr})
  }
}