import { connect } from 'react-redux'
import TestResult from '../components/TestResult'

const mapStateToProps = state => {
    return {
        testResult: state.testResultFetch.testResult
    }
}

const TestResultContainer = connect(
    mapStateToProps,
)(TestResult)

export default TestResultContainer
