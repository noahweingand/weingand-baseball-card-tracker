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

    async deleteCard(cardId) {
        await axios.delete('/cards/' + cardId);
        this.getAllCards();
    }

    async componentDidMount() {
        await this.getAllCards();
        console.log(this.state.cards)
    }

    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
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
                        <th>Price</th>
                        <th>For Sale</th>
                        <th>Sold Price</th>
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
                            <td>{(card.isFabric) ? "Yes" : "No"}</td>
                            <td>{(card.isRefractor) ? "Yes" : "No"}</td>
                            <td>{card.relic}</td>
                            <td>{card.price}</td>
                            <td>{(card.for_sale) ? "Yes" : "No"}</td>
                            <td>{card.sold_amount}</td>
                            <td>
                                <Button onClick={() => this.deleteCard(card.id)} variant="danger" size="sm">X</Button>
                            </td>
                        </tr>
                    )} 
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MyCards;