import { connect } from 'react-redux'
import {
    setAlgorithm,
    setMaxAllowableContextSize,
    setMaxAllowableNumericalDomainWidth,
    setMaxAllowableCategoricalDomainSize,
    setTimeout,
    setEpsilon,
} from '../actions'
import AlgorithmConfigPanelComponent from '../components/AlgorithmConfigPanelComponent'

const mapStateToProps = state => {
    return {
        algorithm: state.algorithm,
        maxAllowableContextSize: state.maxAllowableContextSize,
        maxAllowableNumericalDomainWidth: state.maxAllowableNumericalDomainWidth,
        maxAllowableCategoricalDomainWidth: state.maxAllowableCategoricalDomainWidth,
        timeout: state.timeout,
        epsilon: state.epsilon,
        options: ['naive', 'greedy-FANTOM', 'hybrid']
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAlgorithm: algorithm => {
            dispatch(setAlgorithm(algorithm))
        },
        setMaxAllowableContextSize: mS => {
            dispatch(setMaxAllowableContextSize(mS))
        },
        setMaxAllowableNumericalDomainWidth: mW => {
            dispatch(setMaxAllowableNumericalDomainWidth(mW))
        },
        setMaxAllowableCategoricalDomainSize: mC => {
            dispatch(setMaxAllowableCategoricalDomainSize(mC))
        },
        setTimeout: timeout => {
            dispatch(setTimeout(timeout))
        },
        setEpsilon: epsilon => {
            dispatch(setEpsilon(epsilon))
        }
    }
}

const AlgorithmConfigPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlgorithmConfigPanelComponent)

export default AlgorithmConfigPanel
