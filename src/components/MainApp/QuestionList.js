import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';
import {fetchQuestions} from '../Store/actions';

class QuestionList extends Component {
  componentDidMount() {
    this.props.fetchQuestions(this.props.param);
  }

  render() {
    const {questions} = this.props;
    let listContent;
    if(questions !== undefined && questions.length > 0) {
      listContent = questions.map(list => (
        <Text>{list.question}</Text>
      ));
    } else {
      listContent = (
        <Text>No Questions Found</Text>
      );
    }
    return (
      <View>
        {listContent}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions
});

export default connect(mapStateToProps, {fetchQuestions})(QuestionList);
