import { connect } from 'react-redux'
import AlgorithmSelectionBarComponent from '../components/AlgorithmSelectionBar'
import { setAlgorithm } from '../actions'

const mapStateToProps = state => {
    return {
        algorithm: state.algorithm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAlgorithm: algorithm => {
            dispatch(setAlgorithm(algorithm))
        }
    }
}

const AlgorithmSelectionBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlgorithmSelectionBarComponent)

export default AlgorithmSelectionBar
