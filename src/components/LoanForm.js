import React, { Component } from 'react'
import { Form, Input, Dropdown, Button } from 'semantic-ui-react'
import { FormBody } from './styles'
import axios from 'axios'

const termOptions = [
  {
    key: 'week',
    value: 'week',
    text: 'week'
  },
  {
    key: 'months',
    value: 'months',
    text: 'months'
  },
  {
    key: 'year',
    value: 'year',
    text: 'year'
  }
]

class LoanForm extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      loanpurpose: '',
      submittedon: new Date().toLocaleDateString(),
      amount: '',
      loanterm: '',
      totalRepayments: '',
      repaid: '1'
    }
    this.state = this.initialState
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    axios
      .post('http://localhost:3000/newloan', {
        approved: false,
        loanpurpose: this.state.loanpurpose,
        submittedon: this.state.submittedon,
        loanterm: this.state.loanterm,
        totalRepayments: this.state.totalRepayments,
        repaid: this.state.repaid
      })
      .then(response => {
        alert('Submitted Sucessfully')
        this.setState(this.initialState)
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <FormBody>
        <h1>Loan Application Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              id="loanpurpose"
              control={Input}
              value={this.state.loanpurpose}
              label="Loan Purpose"
              placeholder="Loan Purpose"
              onChange={this.handleChange}
              required
            />
            <Form.Field
              id="submittedon"
              control={Input}
              value={this.state.submittedon}
              label="Submitted On"
              onChange={this.handleChange}
            />
          </Form.Group>
          <h3>Terms</h3>
          <Form.Group widths="equal">
            <Form.Field
              id="amount"
              control={Input}
              value={this.state.amount}
              label="Amount"
              placeholder="Principal Amount"
              onChange={this.handleChange}
              required
            />
            <Form.Field
              id="loanterm"
              control={Input}
              label="Loan term"
              value={this.state.loanterm}
              placeholder="Loan term"
              onChange={this.handleChange}
              required
            />
            <Dropdown
              placeholder="Select"
              search
              id="term"
              selection
              options={termOptions}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              label="No of repayments"
              id="totalRepayments"
              control={Input}
              value={this.state.totalRepayments}
              placeholder="Number of repayments"
              onChange={this.handleChange}
              required
            />
            <Form.Field
              label="Repaid every"
              id="repaid"
              control={Input}
              value={this.state.repaid}
              onChange={this.handleChange}
            />
            <Dropdown
              placeholder="Select"
              id="term"
              selection
              options={[{ key: 'week', value: 'week', text: 'week' }]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button secondary>Submit</Button>
        </Form>
      </FormBody>
    )
  }
}

export default LoanForm
