'use strict';

const e = React.createElement;

class Items extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ id: -1, description: 'Example Item', price: 10 }],
            new_item: { id: 0, description: '', price: '' }
        }
    }

    renderHeader() {
        let headerElement = ['Description', 'Approximate Price']
        return headerElement.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    renderItemsTableData() {
        return this.state.items.map((item, index) => {
            const { id, description, price } = item
            return (
                <tr key={id}>
                    <td>{description}</td>
                    <td>{price}€</td>
                    <td className='delete_button' width='40px'>
                        <button className='button' onClick={() => this.removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    renderNewItemForm() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group row">
                <label>
                    Description
                        </label>
                <input type="text" value={this.state.new_item.description} name="description" onChange={this.handleDescriptionChange.bind(this)} />
                <label>
                    Price
                </label>
                <input type="text" value={this.state.new_item.price} name="price" onChange={this.handlePriceChange.bind(this)} />
                <input type="submit" value="Add New Item" />
            </div>
        </form>
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

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        this.setState({
            items: this.state.items.concat(this.state.new_item),
            new_item: {
                id: this.state.new_item.id + 1,
                description: '',
                price: '',
            }
        })
    }

    removeData(id) {
        this.setState({ items: this.state.items.filter(item => item.id != id) })
    }

    render() {
        return (
            <div>
                <h1 id='title' >Items</h1>
                <table id='students'>
                    <thead>
                        <tr>{this.renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.renderItemsTableData()}
                    </tbody>
                </table>
                {this.renderNewItemForm()}
            </div>
        )
    }
}

const domContainer = document.querySelector('#asset_division');
ReactDOM.render(e(Items), domContainer);