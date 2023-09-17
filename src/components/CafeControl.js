import React from 'react';
import PropTypes from "prop-types";


class CafeControl extends React.Component {

  constructor(props) {
    super(props);
  }



  render(){
    return null;
  }

}

CafeControl.propTypes = {
  mainTicketList: PropTypes.object
}; 


const mapStateToProps = state => {
  return {
    mainTicketList: state
  }
}

// Note: we are now passing mapStateToProps into the connect() function.

// CafeControl = connect(mapStateToProps)(CafeControl);
export default CafeControl;
