import React, {Component} from 'react';
import PhoneForm from './component/PhoneForm';
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {

  id = 2;
  state = {
      information: [
          {
              id: 0,
              name: '김민준',
              phone: '010-1111-1111'
          },
          {
              id: 1,
              name: '홍길동',
              phone: '010-2222-2222'
          }
      ],
      namekeyword: '',
      phonekeyword: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(info => info.id === id ? {...info, ...data} : info)
    })
  }

  render() {
    const {information, namekeyword, phonekeyword} = this.state;
    const filteredList = information.filter(
      namekeyword !== '' ? info => info.name.indexOf(namekeyword) !== -1 : info => info.phone.indexOf(phonekeyword) !== -1
    );

    return(
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <p>
          <input 
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={namekeyword}
            name="namekeyword"
          />
          <input
            placeholder="검색 할 전화번호를 입력하세요.."
            onChange={this.handleChange}
            value={phonekeyword}
            name="phonekeyword"
          />
        </p>
        <hr />
        <PhoneInfoList 
          data={filteredList} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;