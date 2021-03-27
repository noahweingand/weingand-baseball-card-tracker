import { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import axios from '../helpers/axiosConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

class EditCard extends Component {
    constructor(props) {
        super(props);

        this.onChangeIsRefractor = this.onChangeIsRefractor.bind(this);
        this.onChangeIsFabric = this.onChangeIsFabric.bind(this);
        this.onChangeForSale = this.onChangeForSale.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            show: false,

            first_name: this.props.card.first_name,
            last_name: this.props.card.last_name,
            brand: this.props.card.brand,
            card_number: this.props.card.card_number,
            serial_number: this.props.card.serial_number,
            sport: this.props.card.sport,
            team: this.props.card.team,
            year: this.props.card.year,
            relic: this.props.card.relic,
            isRefractor: this.props.card.isRefractor,
            isFabric: this.props.card.isFabric,
            price: this.props.card.price,
            for_sale: this.props.card.for_sale,
            sold_amount: this.props.card.sold_amount,
            location: this.props.card.location,
        };
    }

    handleModalShowHide() {
        this.setState({ show: !this.state.show })
    }

    onChangeIsRefractor(e) {
        this.setState({ isRefractor: e.target.checked })
    }
    onChangeIsFabric(e) {
        this.setState({ isFabric: e.target.checked })
    }
    onChangeForSale(e) {
        this.setState({ for_sale: e.target.checked })
    }

    handleChange = (e, stateName) => this.setState({ [stateName]: e.target.value });

    async onSubmit(e) {
        e.preventDefault();

        const updateParams = {
            id: this.props.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            brand: this.state.brand,
            card_number: this.state.card_number,
            serial_number: this.state.serial_number,
            sport: this.state.sport,
            team: this.state.team,
            year: this.state.year,
            relic: this.state.relic,
            isRefractor: this.state.isRefractor,
            isFabric: this.state.isFabric,
            price: this.state.price,
            for_sale: this.state.for_sale,
            sold_amount: this.state.sold_amount,
            location: this.state.location
        }

        console.log(updateParams);

        await axios.post('/cards/update', updateParams, {headers: {Authorization: process.env.REACT_APP_AUTH_API_KEY}})
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
        
        window.location.reload(true);
    }

    render() {

        const renderRefractorButtonState = () => {
            if (this.state.isRefractor) {
                return <Form.Check type="checkbox" onChange={this.onChangeIsRefractor} label="Refractor?" checked/>
            }
            else {
                return <Form.Check type="checkbox" onChange={this.onChangeIsRefractor} label="Refractor?" />
            }
        }

        const renderFabricButtonState = () => {
            if (this.state.isFabric) {
                return <Form.Check type="checkbox" onChange={this.onChangeIsFabric} label="Fabric?" checked/>
            }
            else {
                return <Form.Check type="checkbox" onChange={this.onChangeIsFabric} label="Fabric?" />
            }
        }

        const renderForSaleButtonState = () => {
            if (this.state.for_sale) {
                return <Form.Check type="checkbox" onChange={this.onChangeForSale} label="For Sale?" checked/>
            }
            else {
                return <Form.Check type="checkbox" onChange={this.onChangeForSale} label="For Sale?" />
            }
        }

        return(
            <div>
                <Modal show={this.state.show}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Edit a Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstNameForm">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="first_name" value={this.state.first_name} onChange={(e) => this.handleChange(e, "first_name")} placeholder="Enter first name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="lastNameForm">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastName" value={this.state.last_name} onChange={(e) => this.handleChange(e, "last_name")} placeholder="Enter last name" />
                            </Form.Group> 
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="brandForm">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control type="brand" value={this.state.brand} onChange={(e) => this.handleChange(e, "brand")} placeholder="Enter a brand" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="cardNumForm">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="cardNumber" value={this.state.card_number} onChange={(e) => this.handleChange(e, "card_number")} placeholder="Enter a card number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="serialNumForm">
                                <Form.Label>Serial Number</Form.Label>
                                <Form.Control type="serialNumber" value={this.state.serial_number} onChange={(e) => this.handleChange(e, "serial_number")} placeholder="Enter a serial number" />
                            </Form.Group> 
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="sportForm">
                                <Form.Label>Sport</Form.Label>
                                <Form.Control type="sport" value={this.state.sport} onChange={(e) => this.handleChange(e, "sport")} placeholder="Enter a sport" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="teamForm">
                                <Form.Label>Team</Form.Label>
                                <Form.Control type="team" value={this.state.team} onChange={(e) => this.handleChange(e, "team")} placeholder="Enter a team" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="yearForm">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="year" value={this.state.year} onChange={(e) => this.handleChange(e, "year")} placeholder="Enter a year" />
                            </Form.Group> 
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="relicForm">
                                <Form.Label>Relic</Form.Label>
                                <Form.Control type="relic" value={this.state.relic} onChange={(e) => this.handleChange(e, "relic")} placeholder="Enter a relic" />
                                <Form.Text className="text-muted">
                                This can be left blank.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} style={{paddingTop: "38px"}} controlId="refractorForm">
                                {renderRefractorButtonState()}
                                {renderFabricButtonState()}
                                {renderForSaleButtonState()}
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="priceForm">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="price" value={this.state.price} onChange={(e) => this.handleChange(e, "price")} placeholder="Enter a price" />
                                
                            </Form.Group>
                            <Form.Group as={Col} controlId="soldAmountForm">
                                <Form.Label>Sold Price</Form.Label>
                                <Form.Control type="year" value={this.state.sold_amount} onChange={(e) => this.handleChange(e, "sold_amount")} placeholder="Enter an amount the card sold for" />
                                <Form.Text className="text-muted">
                                This can be left blank.
                                </Form.Text>
                            </Form.Group> 
                            <Form.Group as={Col} controlId="locationForm">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="location" value={this.state.location} onChange={(e) => this.handleChange(e, "location")} placeholder="Enter the location" />
                            </Form.Group>
                        </Form.Row>

                        <Button style={{float: "center"}} variant="primary" type="submit">Update</Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Button onClick={() => this.handleModalShowHide()} variant="secondary" size="sm">Edit</Button>
            </div>
        );
    }
}

export default EditCard;