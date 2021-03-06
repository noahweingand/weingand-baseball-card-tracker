import { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import axios from '../helpers/axiosConfig';
import EditCard from './EditCard';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

const loaderStyle = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }

class MyCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            loading: true
        }
    }

    async getAllCards() {
        const response = await axios.get('/cards');
        const cards = response.data;
        this.setState({cards: cards});
        this.setState({loading: false});
    }

    async deleteCard(cardId) {
        await axios.delete('/cards/' + cardId, {headers: {Authorization: process.env.REACT_APP_AUTH_API_KEY}});
        this.getAllCards();
    }

    async componentDidMount() {
        await this.getAllCards();
    }

    render() {
        return (
            <div>
                { this.state.loading &&
                    <div style={loaderStyle}>
                        <Loader 
                        className="justify-items-center"
                        type="Grid"
                        color="#085cb4"
                        height={200}
                        width={200}
                        timeout={50000}
                        />
                        <h1 style={{textAlign: "center", paddingTop: "10px"}}>Loading...</h1> 
                    </div>
                }
                { !this.state.loading &&
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
                                <th>Location</th>
                            </thead>
                            <tbody>
                            {this.state.cards.map((card, idx) =>
                                <tr key={`row-${idx}`}>
                                    <td key={`idx-${idx}`}>{Number(idx) + 1}</td>
                                    <td key={`fn-${idx}`}>{card.first_name} {card.last_name}</td>
                                    <td key={`brand-${idx}`}>{card.brand}</td>
                                    <td key={`card#-${idx}`}>{card.card_number}</td>
                                    <td key={`serial-${idx}`}>{card.serial_number}</td>
                                    <td key={`sport-${idx}`}>{card.sport}</td>
                                    <td key={`team-${idx}`}>{card.team}</td>
                                    <td key={`year-${idx}`}>{card.year}</td>
                                    <td key={`fabric-${idx}`}>{(card.isFabric) ? "Yes" : "No"}</td>
                                    <td key={`refractor-${idx}`}>{(card.isRefractor) ? "Yes" : "No"}</td>
                                    <td key={`relic-${idx}`}>{card.relic}</td>
                                    <td key={`price-${idx}`}>{card.price}</td>
                                    <td key={`for_sale-${idx}`}>{(card.for_sale) ? "Yes" : "No"}</td>
                                    <td key={`sold_amount-${idx}`}>{card.sold_amount}</td>
                                    <td key={`location-${idx}`}>{card.location}</td>
                                    <td key={`edit-${idx}`}>
                                        <EditCard key={`edit-button-${idx}`} card={card} id={card.id} />
                                    </td>
                                    <td key={`delete-${idx}`}>
                                        <Button onClick={() => this.deleteCard(card.id)} variant="danger" size="sm">X</Button>
                                    </td>
                                </tr>
                            )} 
                            </tbody>
                        </Table>
                    </div>
                }
            </div>
        )
    }
}

export default MyCards;