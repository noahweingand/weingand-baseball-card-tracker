import { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from '../helpers/axiosConfig';
class MyCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    async getAllCards() {
        const response = await axios.get('/cards');
        const cards = response.data;
        this.setState({cards: cards});
    }

    async componentDidMount() {
        await this.getAllCards();
        console.log(this.state.cards)
    }

    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Card Number</th>
                        <th>Serial Number</th>
                        <th>Sport</th>
                        <th>Team</th>
                        <th>Year</th>
                        <th>Fabric</th>
                        <th>Refractor</th>
                        <th>Relic</th>
                    </thead>
                    <tbody>
                    {this.state.cards.map((card, idx) =>
                        <tr id={`card-${idx}`}>
                            <td>{Number(idx) + 1}</td>
                            <td>{card.first_name} {card.last_name}</td>
                            <td>{card.brand}</td>
                            <td>{card.card_number}</td>
                            <td>{card.serial_number}</td>
                            <td>{card.sport}</td>
                            <td>{card.team}</td>
                            <td>{card.year}</td>
                            <td>{card.isFabric}</td>
                            <td>{card.isRefractor}</td>
                            <td>{card.relic}</td>
                            <td>Delete Button</td>
                        </tr>
                    )} 
                    </tbody>
                </Table>
                <Button></Button>
            </div>
        )
    }
}

export default MyCards;