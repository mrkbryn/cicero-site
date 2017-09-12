import { connect } from 'react-redux';
import { setAlgorithm } from '../actions';
import AlgorithmConfigPanelComponent from '../components/AlgorithmConfigPanelComponent';

const mapStateToProps = state => {
    return {
        algorithm: state.algorithm,
        options: ['naive', 'greedy-FANTOM', 'hybrid']
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAlgorithm: algorithm => {
            dispatch(setAlgorithm(algorithm));
        }
    }
}

const AlgorithmConfigPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlgorithmConfigPanelComponent);

export default AlgorithmConfigPanel;
