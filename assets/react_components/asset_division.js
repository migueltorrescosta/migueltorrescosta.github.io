'use strict';

const e = React.createElement;

class AssetDivision extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            new_item: { id: 0, description: '', price: 0 },
            people: [],
            new_person: { id: 0, name: '' },
            initialized: false, // If true the user can't edit Items nor People
            group: [],
            group_price_difference: 0,
            focus_person: 0,
            individual_prices: Array(),
            iterations: 0,
            current_experiment_result: true, // true if the focus_person selects group1, false otherwise
            formatter: Intl.NumberFormat('pt-PT', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0
            })
        }
    }

    renderHeader() {
        let headerElement = ['Description', 'Estimated Price']
        if (this.state.initialized) {
            headerElement.push('Suggested Owner')
        }
        return headerElement.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    renderItemsTableData() {
        let item_favourites;
        if (this.state.initialized) {
            const transposed_array = this.transposeMatrix(this.state.individual_prices);
            item_favourites = transposed_array.map(arr => arr.indexOf(Math.max(...arr)));
            console.log(transposed_array);
            console.log(item_favourites)
        }
        return [...this.state.items].sort((a, b) => a.price < b.price ? 1 : -1).map((item, index) => {
            const { id, description, price } = item
            let third_column;
            if (this.state.initialized) {
                third_column = (
                    <td>
                        {this.state.people[item_favourites[id]].name}
                    </td> )
            } else {
                third_column = (
                    <td className='delete_button' width='40px'>
                        <form>
                            <button className='button' onClick={() => this.handleItemDelete(id)}>Delete</button>
                        </form>
                    </td>
                )
            }
            return (
                <tr key={id}>
                    <td>{description}</td>
                    <td>{this.state.formatter.format(Math.round(price))}</td>
                    {third_column}
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
        let price = parseInt(e.target.value);
        if (isNaN(price)) {
            price = 0
        }
        this.setState({
            new_item: {
                id: this.state.new_item.id,
                description: this.state.new_item.description,
                price: price,
            }
        })
    }

    handleItemSubmit(e) {
        e.preventDefault();
        const price = this.state.new_item.price;
        const description = this.state.new_item.description;
        if (!isNaN(price) && price > 0 && description != '') {
            this.setState({
                items: this.state.items.concat(this.state.new_item),
                new_item: {
                    id: this.state.new_item.id + 1,
                    description: '',
                    price: '',
                }
            })
        }

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
                        {!this.state.initialized && this.renderNewItemForm()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderNewPersonForm() {
        return (
            <form id="add-person" onSubmit={this.handlePersonSubmit.bind(this)}>
                <input form="add-person" type="submit" value="Add Person" />
                <input form="add-person" align="right" type="text" value={this.state.new_person.name} name="name" onChange={this.handlePersonChange.bind(this)} />
            </form>
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
                <div class="flex-box">
                    {this.renderPeopleData()}
                </div>
                {!this.state.initialized && this.renderNewPersonForm()}
                {this.state.initialized && this.renderAllocationDeltas()}

            </div>
        )
    }

    renderPeopleData() {
        return this.state.people.map((item, index) => {
            const { id, name } = item
            const delete_cell = <button className='button' onClick={() => this.handlePersonDelete(id)}>Del</button>
            return (
                <div key={id}>
                    {!this.state.initialized && delete_cell} {name}
                </div>
            )
        })
    }

    startAlgorithm(e) {
        e.preventDefault();
        this.setState({ initialized: true })
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
            string += "Pay " + this.state.formatter.format(money)
        } else {
            string += "Get " + this.state.formatter.format(money)
        };
        if (return_items.length) {
            string = return_items.reduce((prev, curr) => prev + " , " + curr, string)
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
        let individual_prices = this.state.individual_prices;
        let multiplicative_factor = 1 + (1 / (.1 * this.state.iterations + 10));
        for (var i = 0; i < this.state.items.length; i++) {
            const item = this.state.items[i];
            const to_increase = !result ^ this.state.group.includes(item.id);
            const factor = (to_increase) ? multiplicative_factor : 1 / multiplicative_factor;
            individual_prices[this.state.focus_person][i] *= factor;
            for (var p = 0; p < individual_prices.length; p++) {
                individual_prices[p][i] *= factor
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
                individual_prices: individual_prices,
                items: items
            },
            this.setupExperiment)
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
            if (group_price <= non_group_price) {
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

    renderFocusPersonSelector() {
        return (
            <form id="person-selector">
                <select name="personSelector" onChange={this.changeFocusPerson.bind(this)}>
                    { this.state.people.map((item, index) => {
                        const { id, name } = item;
                        return <option key={id} value={id}>{name}</option>
                    })}
                </select>, what is your group preference?
            </form>
        )
    }

    changeFocusPerson(e) {
        this.setState({focus_person: e.target.value});
    }

    renderExperiment() {
        return (
            <div>
                <h1>Round {this.state.iterations}</h1>
                <div align="center">
                    {this.renderFocusPersonSelector()}
                </div>
                <div class="flex-box">
                    <input form="experiment" type="button" value="Left Group" name="name" onClick={() => this.handleExperimentRun(true)}></input>
                    <input form="experiment" type="button" value="Right Group" name="name" onClick={() => this.handleExperimentRun(false)}></input>
                </div>
                <div class="flex-box">                    
                    <div>{this.getItemsList(this.state.group, false)}</div>
                    <div>{this.getItemsList(this.state.group, true)}</div>
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

    renderAllocationDeltas() {
        const transposed_array = this.transposeMatrix(this.state.individual_prices);
        const item_favourites = transposed_array.map(arr => arr.indexOf(Math.max(...arr)));
        const average_value = this.state.items.map(x => x.price).reduce((a, b) => a + b, 0) / this.state.people.length;
        const allocation_deltas = this.state.people.map((item, index) => {
            const { id, name } = item
            const preferred_items = this.getIndices(item_favourites, index);

            let value_delta = -average_value;
            if (preferred_items) {
                value_delta += preferred_items.map(i => this.state.items[i].price).reduce((a, b) => a + b, 0)
            }

            let string = "";
            if (value_delta > 0) {
                string += "Pay " + this.state.formatter.format(Math.round(Math.abs(value_delta)))
            } else {
                string += "Get " + this.state.formatter.format(Math.round(Math.abs(value_delta)))
            }
            return (
                <div>{string}</div>
            )});
        return <div class="flex-box">{allocation_deltas}</div>
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
                string += "Pay " + this.state.formatter.format(Math.round(Math.abs(value_delta)))
            } else {
                string += "Get " + this.state.formatter.format(Math.round(Math.abs(value_delta)))
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

    render() {
        return <div>
            {this.renderPeople()}
            {this.renderItems()}
            {!this.state.initialized && this.renderStartAlgorithmButton()}
            {this.state.initialized && this.renderExperiment()}
        </div>
    }
}

const domContainer = document.querySelector('#asset_division');
ReactDOM.render(e(AssetDivision), domContainer);