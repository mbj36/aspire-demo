import React, { Component } from 'react'
import Header from './Header'
import LoanForm from './LoanForm'
import LoanDetails from './Loans'

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoanForm />
        <LoanDetails />
      </div>
    )
  }
}

export default Main
