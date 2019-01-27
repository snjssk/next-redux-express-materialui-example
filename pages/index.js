import React from 'react'
import { connect } from 'react-redux'
import * as appAction from '../src/actions/appAction'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.props.appActionGet}>
          Click!
        </Button>
        <List component="nav">
          { this.props.app.data.payload.map(data => {
            return (
              <ListItem button key={data.id}>
                <ListItemText inset primary={data.name} />
              </ListItem>
            )
          }) }
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  }
}
const mapDispatchToProps = dispatch => {
  return {
    appActionGet: () => dispatch(appAction.appGet()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)