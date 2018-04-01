import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import Header from './Header'
import { FormBody } from './styles'

class Repay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 100
    }
  }
  render() {
    return (
      <div>
        <Header />
        <FormBody>
          <h2>Repayment</h2>
          <Form>
            <Form.Field
              control={Input}
              id="repayment"
              value={this.state.amount}
              required
            />
            <Button secondary>Repay</Button>
          </Form>
        </FormBody>
      </div>
    )
  }
}

export default Repay
