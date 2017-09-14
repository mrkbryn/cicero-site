import { connect } from 'react-redux'
import { setDataInputMethod } from '../actions'
import DataSelectionComponent from '../components/DataSelectionComponent'

const mapStateToProps = state => {
    return {
        dataInputMethod: state.dataInputMethod
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDataInputMethod: inputType => {
            dispatch(setDataInputMethod(inputType))
        }
    }
}

const DataSelectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataSelectionComponent)

export default DataSelectionContainer
