import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLayout } from '../actions'

class AddLayout1 extends Component {
  render (){
  let input

  return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.add(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Layout
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // user: state.user,
    // page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // pageActions: bindActionCreators(pageActions, dispatch)
    
    add: image => {
      dispatch(addLayout(image))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLayout1)