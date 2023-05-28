import { Component } from 'react'

export default class Animal extends Component {
    state = {
        image: 'https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1'
    }
    changeAnimal = () => {
        let dogURL = 'https://th.bing.com/th/id/OIP.ZJOUSHF99nSg1V6JG_R9lAHaFj?pid=ImgDet&rs=1'
        let catURL = 'https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1'
        let image = this.state.image === catURL ? dogURL : catURL
        this.setState({image})
    }
  render() {
    // accessing the state value
    // const count = this.state.count
    return (
        <div className='Animal'>
            <h1>30 Days Of React</h1>
            <div className='animal'>
                <img src={this.state.image} alt="animal" />
            </div>
            <button onClick={this.changeAnimal} className='btn btn-add'> Change</button>
        </div>
    )
  }
}
