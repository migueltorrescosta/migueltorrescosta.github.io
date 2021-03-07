'use strict';

const e = React.createElement;

class AssetDivision extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ id: -1, description: 'Example Item', price: 10 }],
            new_item: { id: 0, description: '', price: '' },
            people: [{ id: -1, name: 'Example Person' }],
            new_person: { id: 0, name: '' },
            frozen: false, // If true the user can't edit Items nor People
        }
    }

    renderHeader() {
        let headerElement = ['Description', 'Estimated Price']
        return headerElement.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    renderItemsTableData() {
        return this.state.items.map((item, index) => {
            const { id, description, price } = item
            const delete_cell = (
                <td className='delete_button' width='40px'>
                    <form onSubmit={this.handleItemDelete.bind(this)}>
                        <button className='button' onClick={() => this.handleItemDelete(id)}>Delete</button>
                    </form>
                </td>
            )
            return (
                <tr key={id}>
                    <td>{description}</td>
                    <td>{price}€</td>
                    {!this.state.frozen && delete_cell}
                </tr>
            )
        })
    }

    renderNewItemForm() {
        return (
            <tr>
                <td>
                    <form id="add-item" onSubmit={this.handleItemSubmit.bind(this)}></form>
                    <input form="add-item" type="text" value={this.state.new_item.description} name="description" onChange={this.handleDescriptionChange.bind(this)} />
                </td>
                <td>
                    <input form="add-item" type="text" value={this.state.new_item.price} name="price" onChange={this.handlePriceChange.bind(this)} />
                </td>
                <td>
                    <input form="add-item" type="submit" value="Add New" />
                </td>
            </tr>
        )
    }

    handleDescriptionChange(e) {
        this.setState({
            new_item: {
                id: this.state.new_item.id,
                description: e.target.value,
                price: this.state.new_item.price
            }
        })
    }

    handlePriceChange(e) {
        this.setState({
            new_item: {
                id: this.state.new_item.id,
                description: this.state.new_item.description,
                price: parseInt(e.target.value)
            }
        })
    }

    handleItemSubmit(e) {
        e.preventDefault();
        this.setState({
            items: this.state.items.concat(this.state.new_item),
            new_item: {
                id: this.state.new_item.id + 1,
                description: '',
                price: '',
            }
        })
    }

    handleItemDelete(id) {
        this.setState({ items: this.state.items.filter(item => item.id != id) })
    }

    renderItems() {
        return (
            <div>
                <h1 id='items-title' >Items</h1>
                <table id='students'>
                    <thead>
                        <tr>{this.renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.renderItemsTableData()}
                        {!this.state.frozen && this.renderNewItemForm()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderPeopleTableData() {
        return this.state.people.map((item, index) => {
            const { id, name } = item
            const delete_cell = (
                <td align="right" className='delete_button' width='40px'>
                    <button className='button' onClick={() => this.handlePersonDelete(id)}>Delete</button>
                </td>
            )
            return (
                <tr key={id}>
                    {!this.state.frozen && delete_cell}
                    <td>{name}</td>
                </tr>
            )
        })
    }

    renderNewPersonForm() {
        return (
            <tr>
                <td width="40px">
                    <form id="add-person" onSubmit={this.handlePersonSubmit.bind(this)}></form>
                    <input form="add-person" type="submit" value="Add New" />
                </td>
                <td>
                    <input form="add-person" align="right" type="text" value={this.state.new_person.name} name="name" onChange={this.handlePersonChange.bind(this)} />
                </td>
            </tr>
        )
    }

    handlePersonChange(e) {
        this.setState({
            new_person: {
                id: this.state.new_person.id,
                name: e.target.value
            }
        })
    }

    handlePersonSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        this.setState({
            people: this.state.people.concat(this.state.new_person),
            new_person: {
                id: this.state.new_person.id + 1,
                name: ''
            }
        })
    }

    handlePersonDelete(id) {
        this.setState({ people: this.state.people.filter(people => people.id != id) })
    }

    renderPeople() {
        return (
            <div>
                <h1 id='people-title' >People</h1>
                <table id='people'>
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        {this.renderPeopleTableData()}
                        {!this.state.frozen && this.renderNewPersonForm()}
                    </tbody>
                </table>
            </div>
        )
    }

    handleStartAlgorithm(e) {
        e.preventDefault();
        this.setState({ frozen: true })
    }

    renderStartAlgorithmButton() {
        return (
            <form align="center" id="start-algorithm" onSubmit={this.handleStartAlgorithm.bind(this)}>
                <input type="submit" value="Start Algorithm" />
            </form>
        )
    }

    render() {
        return <div>
            {this.renderItems()}
            {this.renderPeople()}
            {!this.state.frozen && this.renderStartAlgorithmButton()}
        </div>
    }
}

const domContainer = document.querySelector('#asset_division');
ReactDOM.render(e(AssetDivision), domContainer);