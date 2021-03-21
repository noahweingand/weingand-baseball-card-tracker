import { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../helpers/axiosConfig';

class LogCard extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeSerialNumber = this.onChangeSerialNumber.bind(this);
        this.onChangeSport = this.onChangeSport.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeRelic = this.onChangeRelic.bind(this);
        this.onChangeIsRefractor = this.onChangeIsRefractor.bind(this);
        this.onChangeIsFabric = this.onChangeIsFabric.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeForSale = this.onChangeForSale.bind(this);
        this.onChangeSoldAmount = this.onChangeSoldAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            brand: '',
            card_number:'',
            serial_number: '',
            sport: '',
            team: '',
            year: '',
            relic: '',
            isRefractor: false,
            isFabric: false,
            price: '',
            for_sale: false,
            sold_amount: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({ first_name: e.target.value })
    }
    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
    }
    onChangeBrand(e) {
        this.setState({ brand: e.target.value })
    }
    onChangeCardNumber(e) {
        this.setState({ card_number: e.target.value })
    }
    onChangeSerialNumber(e) {
        this.setState({ serial_number: e.target.value })
    }
    onChangeSport(e) {
        this.setState({ sport: e.target.value })
    }
    onChangeTeam(e) {
        this.setState({ team: e.target.value })
    }
    onChangeYear(e) {
        this.setState({ year: e.target.value })
    }
    onChangeRelic(e) {
        this.setState({ relic: e.target.value })
    }
    onChangeIsRefractor(e) {
        this.setState({ isRefractor: e.target.checked })
    }
    onChangeIsFabric(e) {
        this.setState({ isFabric: e.target.checked })
    }
    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }
    onChangeForSale(e) {
        this.setState({ for_sale: e.target.checked })
    }
    onChangeSoldAmount(e) {
        this.setState({ sold_amount: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const submitParams = {
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
            sold_amount: this.state.sold_amount
        }

        axios.post('/cards', submitParams)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
            })

        this.setState({
            first_name: '',
            last_name: '',
            brand: '',
            card_number: '',
            serial_number: '',
            sport: '',
            team: '',
            year: '',
            relic: '',
            isRefractor: false,
            isFabric: false,
            price: '',
            for_sale: false,
            sold_amount: ''
        })
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstNameForm">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstName" value={this.state.first_name} onChange={this.onChangeFirstName} placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastNameForm">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lastName" value={this.state.last_name} onChange={this.onChangeLastName} placeholder="Enter last name" />
                    </Form.Group> 
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="brandForm">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="brand" value={this.state.brand} onChange={this.onChangeBrand} placeholder="Enter a brand" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="cardNumForm">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="cardNumber" value={this.state.card_number} onChange={this.onChangeCardNumber} placeholder="Enter a card number" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="serialNumForm">
                        <Form.Label>Serial Number</Form.Label>
                        <Form.Control type="serialNumber" value={this.state.serial_number} onChange={this.onChangeSerialNumber} placeholder="Enter a serial number" />
                    </Form.Group> 
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="sportForm">
                        <Form.Label>Sport</Form.Label>
                        <Form.Control type="sport" value={this.state.sport} onChange={this.onChangeSport} placeholder="Enter a sport" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="teamForm">
                        <Form.Label>Team</Form.Label>
                        <Form.Control type="team" value={this.state.team} onChange={this.onChangeTeam} placeholder="Enter a team" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="yearForm">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="year" value={this.state.year} onChange={this.onChangeYear} placeholder="Enter a year" />
                    </Form.Group> 
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="relicForm">
                        <Form.Label>Relic</Form.Label>
                        <Form.Control type="relic" value={this.state.relic} onChange={this.onChangeRelic} placeholder="Enter a relic" />
                        <Form.Text className="text-muted">
                        This can be left blank.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} style={{paddingTop: "38px"}} as={Col} controlId="refractorForm">
                        <Form.Check type="checkbox" onChange={this.onChangeIsRefractor} label="Refractor?" />
                    </Form.Group>
                    <Form.Group as={Col} style={{paddingTop: "38px"}} controlId="fabricForm">
                        <Form.Check type="checkbox" onChange={this.onChangeIsFabric} label="Fabric?" />
                    </Form.Group> 
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="priceForm">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="price" value={this.state.price} onChange={this.onChangePrice} placeholder="Enter a price" />
                    </Form.Group>
                    <Form.Group as={Col} style={{paddingTop: "38px"}} controlId="forSaleForm">
                        <Form.Check type="checkbox" onChange={this.onChangeForSale} label="For Sale?" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="soldAmountForm">
                        <Form.Label>Sold Price</Form.Label>
                        <Form.Control type="year" value={this.state.sold_amount} onChange={this.onChangeSoldAmount} placeholder="Enter an amount the card sold for" />
                        <Form.Text className="text-muted">
                        This can be left blank.
                        </Form.Text>
                    </Form.Group> 
                </Form.Row>

                <Button style={{float: "center"}} variant="primary" type="submit">Log</Button>
            </Form>
        )
    }
}

export default LogCard;