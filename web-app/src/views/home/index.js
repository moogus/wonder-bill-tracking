import { connect } from 'react-redux';
import HomeView from './home';

const mapStateToProps = ({ payments }) => ({ payments });

export default connect(mapStateToProps)(HomeView);
