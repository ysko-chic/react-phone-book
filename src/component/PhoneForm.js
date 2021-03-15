import React, {Component} from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        console.error(e.target.value);
        this.setState({
            [e.target.name] : e.target.value // Computed property names [ 이 안의 값에 ] : 이 값을 넣는다 ex) [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange} // input 태그의 입력이 있을 때 실행되는 함수
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;