import React, {Component} from 'react';
// import Hello from '../../components/Hello/Hello';
import Card from '../../components/UI/Card/Card';
import Aux from '../../hoc/Au/Au';
import Modal from '../../components/UI/Modal/Modal';
import './Welcome.css';

class Welcome extends Component {
    state = {
        clicked: false,
        node: 0
    }

    clicked1 = () => {
        this.setState({
            clicked: true,
            node: 1
        });
    }
    
    clicked2 = () => {
        this.setState({
            clicked: true,
            node: 2
        });
    }

    clicked3 = () => {
        this.setState({
            clicked: true,
            node: 3
        });
    }

    cancel = () => {
        this.setState({
            clicked: false,
            node: 0
        })
    }

    render () {

        let message = null;
        let node = this.state.node;
        if (node==1) {
            message = <p>Make your own Todo list just by clicking on "NEW" button</p>
        } else if (node==2) {
            message = <p>Keep a track of all the work done, and upon finishing a work change the status of work to "COMPLETED"</p>
        } else if (node==3) {
            message = <p>Manage your Todos, delete the unwanted ones to keep your dashboard clean</p>
        } else {
            message = null;
        }

        return(
            <Aux>
                <Modal show={this.state.clicked}
                    modalClosed={this.cancel}>
                    {message}
                </Modal>
                <div className="Hello">
                    <Card clicked={this.clicked1}><h1>Make Todo</h1></Card>
                    <Card clicked={this.clicked2}><h1>Complete the Task</h1></Card>
                    <Card clicked={this.clicked3}><h1>Manage your Todos</h1></Card>
                </div>
            </Aux>
        )
    }
}

export default Welcome;