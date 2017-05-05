import React, {Component} from 'react';
import Properties from './Properties';
import { bindActionCreators } from 'redux';
import propertiesActions from '../actions';
import { connect } from 'react-redux';
import DetaildInfo from './DetaildInfo';



class selProp extends Component {
  render() {
    let { id } = this.props.routeParams,
        propList = this.props.propList,
        elem;

    for (let ind = 0; ind < propList.length; ind++) {
      if (propList[ind].id === +id) {
        elem = propList[ind];
        break;
      }
    }

    return (
          <DetaildInfo elem={elem}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    propList: state.propertiesReducer.properties
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    propertiesActions: bindActionCreators(propertiesActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (selProp);
