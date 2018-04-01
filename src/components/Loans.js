import React, { Component } from 'react'
import axios from 'axios'
import { FormBody } from './styles'
import { List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LoanDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loanData: []
    }
    this.initialState = this.state
  }
  ShowLoans = () => {
    axios.get('http://localhost:3004/newloan').then(response => {
      const data = response.data
      this.setState({
        loanData: data
      })
    })
  }
  ApproveLoan = id => {
    axios
      .patch(`http://localhost:3004/newloan/${id}`, {
        approved: true
      })
      .then(() => {
        alert('Your loan is approved')
      })
  }
  componentDidMount() {
    this.ShowLoans()
  }
  render() {
    return (
      <FormBody>
        <h2>Loan Application Details</h2>
        {this.state.loanData.map(loan => (
          <List key={loan.id} divided verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                {loan.approved ? (
                  <Link to="/repay">
                    <Button>Repay</Button>
                  </Link>
                ) : (
                  <Button onClick={() => this.ApproveLoan(loan.id)}>
                    Approve
                  </Button>
                )}
              </List.Content>
              <List.Content>{loan.loanpurpose}</List.Content>
            </List.Item>
          </List>
        ))}
      </FormBody>
    )
  }
}

export default LoanDetails
