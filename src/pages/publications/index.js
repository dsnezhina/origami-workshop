import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import Origamis from '../../components/origamis'
import UserContext from '../../Context';

class Publications extends Component {

  static contextType = UserContext;

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <PageLayout>
        <Title title='Publications' />
        <Origamis />
      </PageLayout >
    )
  }
}

export default Publications;