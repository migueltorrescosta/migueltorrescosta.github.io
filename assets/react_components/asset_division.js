'use strict';

const e = React.createElement;

class AssetDivision extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { id: -3, description: 'Sofa', price: 300 },
                { id: -2, description: 'PC', price: 700 },
                { id: -1, description: 'Piano', price: 500 }],
            new_item: { id: 0, description: '', price: '' },
            people: [
                { id: -2, name: 'Miguel' },
                { id: -1, name: 'Ricardo' }],
            new_person: { id: 0, name: '' },
            frozen: false, // If true the user can't edit Items nor People
            group: [-1],
            group_price_difference: 0,
            focus_person: 0,
            individual_prices: Array(),
            iterations: 0,
            current_experiment_result: true, // true if the focus_person selects group1, false otherwise
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
                    <form>
                        <button className='button' onClick={() => this.handleItemDelete(id)}>Delete</button>
                    </form>
                </td>
            )
            return (
                <tr key={id}>
                    <td>{description}</td>
                    <td>{Math.round(price)}€</td>
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
                    <input form="add-item" type="submit" value="Add Item" />
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
                    <input form="add-person" type="submit" value="Add Person" />
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
                <h1 id='people-title'>People</h1>
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

    startAlgorithm(e) {
        e.preventDefault();
        this.setState({ frozen: true })
        const item_prices = this.state.items.map(x => x.price);
        let individual_prices = Array(this.state.people.length).fill(item_prices);
        individual_prices = individual_prices.map(x => [...item_prices]); // Makes a deep copy of item values
        for (var i = 0; i < this.state.people.length; ++i) {
            for (var j = 0; j < this.state.items.length; ++j) {
                individual_prices[i][j] = individual_prices[i][j] + Math.random() - .5;
            }
        }
        const new_focus_person = (this.state.focus_person + 1) % this.state.people.length;
        this.setState(
            {
                individual_prices: individual_prices,
                new_focus_person: new_focus_person,
            },
            this.setupExperiment);
    }

    sortedIndices(arr) {
        var len = arr.length;
        var indices = new Array(len);
        for (var i = 0; i < len; ++i) indices[i] = i;
        indices.sort(function (a, b) { return arr[a] > arr[b] ? -1 : arr[a] < arr[b] ? 1 : 0; });
        return indices;
    }

    setupExperiment() {
        let price_deltas = Array(this.state.items.length);
        for (var i = 0; i < this.state.items.length; i++) {
            price_deltas[i] = this.state.individual_prices[this.state.focus_person][i] - this.state.items[i].price
        }
        const sorted_indices = this.sortedIndices(price_deltas);
        let group = [];
        let group_price = 0;
        let non_group_price = 0;
        for (var i = 0; i < price_deltas.length; i++) {
            const item_position = sorted_indices[i];
            const item_price = this.state.individual_prices[this.state.focus_person][item_position];
            if (group_price < non_group_price) {
                group.push(this.state.items[item_position].id);
                group_price += item_price;
            } else {
                non_group_price += item_price;
            }
        }
        this.setState({
            group: group,
            group_price_difference: Math.round(group_price - non_group_price),
        });
    }

    renderStartAlgorithmButton() {
        return (
            <div align="center">
                <form id="start-algorithm" onSubmit={this.startAlgorithm.bind(this)}>
                    <input type="submit" value="Start" />
                </form>
            </div>
        )
    }

    getItemsList(group_items, complement) {
        const custom_filter = complement ? (x => !group_items.includes(x.id)) : (x => group_items.includes(x.id));
        const return_items = this.state.items.filter(custom_filter).map(x => x.description);
        let string = "";
        const group_1_receiving = complement ^ this.state.group_price_difference > 0;
        const money = Math.round(Math.abs(this.state.group_price_difference / 2));
        if (group_1_receiving) {
            string += "Pay " + money.toString() + "€"
        } else {
            string += "Get " + money.toString() + "€"
        };
        if (return_items.length) {
            string = return_items.reduce((prev, curr) => prev + ", " + curr, string)
        }
        return string;
    }

    transposeMatrix(arr) {
        return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
    }

    getPriceAverage(arr) {
        const transposed_array = this.transposeMatrix(arr);
        const price_average = transposed_array.map(col => col.reduce((a, b) => a + b, 0) / this.state.people.length);
        return price_average
    }

    handleExperimentRun(result) {
        result.preventDefault;
        const new_focus_person = (this.state.focus_person + 1) % this.state.people.length;
        let individual_prices = this.state.individual_prices;
        const multiplicative_factor = 1 + (1 / (this.state.iterations + 5));
        for (var i = 0; i < this.state.items.length; i++) {
            const item = this.state.items[i];
            const to_increase = !result ^ this.state.group.includes(item.id);
            if (to_increase) {
                individual_prices[this.state.focus_person][i] *= multiplicative_factor;
            } else {
                individual_prices[this.state.focus_person][i] /= multiplicative_factor;
            }
        }
        const price_average = this.getPriceAverage(individual_prices);
        let items = this.state.items;
        for (var i = 0; i < items.length; i++) {
            items[i].price = price_average[i]
        }
        this.setState(
            {
                iterations: this.state.iterations + 1,
                focus_person: new_focus_person,
                individual_prices: individual_prices,
                items: items
            },
            this.setupExperiment)
    }

    renderExperiment() {
        const focus_person_name = this.state.people[this.state.focus_person].name;
        return (
            <div>
                <h1>Round {this.state.iterations}/12</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Group 1</td>
                            <td>Group 2</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="50%">
                                {this.getItemsList(this.state.group, false)}
                            </td>
                            <td width="50%">
                                {this.getItemsList(this.state.group, true)}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div align="center">
                    <div>{focus_person_name}</div>
                    <div><small>which group do you prefer?</small></div>
                    <input form="experiment" type="button" value="Group 1" name="name" onClick={() => this.handleExperimentRun(true)}></input>
                    <input form="experiment" type="button" value="Group 2" name="name" onClick={() => this.handleExperimentRun(false)}></input>
                </div>
            </div>
        )
    }

    getIndices(arr, person_position) {
        let indices = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == person_position) { indices.push(i) }
        };
        return indices
    }

    renderSuggestedAllocationData() {
        const transposed_array = this.transposeMatrix(this.state.individual_prices);
        const item_favourites = transposed_array.map(arr => arr.indexOf(Math.max(...arr)));
        const average_value = this.state.items.map(x => x.price).reduce((a, b) => a + b, 0) / this.state.people.length;
        return this.state.people.map((item, index) => {
            const { id, name } = item

            const preferred_items = this.getIndices(item_favourites, index);

            let value_delta = -average_value;
            if (preferred_items) {
                value_delta += preferred_items.map(i => this.state.items[i].price).reduce((a, b) => a + b, 0)
            }

            let string = "";
            if (value_delta > 0) {
                string += "Get " + Math.round(Math.abs(value_delta).toString()) + "€"
            } else {
                string += "Pay " + Math.round(Math.abs(value_delta).toString()) + "€"
            }

            if (preferred_items.length) {
                string = preferred_items.map(i => this.state.items[i].description).reduce((prev, curr) => prev + ", " + curr, string)
            }

            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{string}</td>
                </tr>
            )
        })
    }

    renderSuggestedAllocation() {
        console.log("================");
        console.log(this.state.iterations);
        console.log(this.state.individual_prices);
        console.log(this.state.group_price_difference);
        return (
            <div>
                <h1>Suggested Split</h1>
                <table>
                    <thead>
                        <tr>
                            <th width="30%">People</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSuggestedAllocationData()}
                    </tbody>
                </table>


            </div>
        )

    }

    renderItemValuation() {

    }

    render() {
        return <div>
            {this.renderPeople()}
            {this.renderItems()}
            {!this.state.frozen && this.renderStartAlgorithmButton()}
            {this.state.frozen && this.renderExperiment()}
            {this.state.frozen && this.renderSuggestedAllocation()}
        </div>
    }
}

const domContainer = document.querySelector('#asset_division');
ReactDOM.render(e(AssetDivision), domContainer);