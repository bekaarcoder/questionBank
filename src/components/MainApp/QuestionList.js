import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import {connect} from 'react-redux';
import {fetchQuestions} from '../Store/actions';
import QuestionListItem from './QuestionListItem';
import {Spinner} from '../common';

class QuestionList extends Component {
  componentDidMount() {
    this.props.fetchQuestions(this.props.param);
  }

  render() {
    console.log(this.props);
    const {questions, loading} = this.props.questions;
    let listContent;
    if(questions !== null && questions.length > 0 && loading === false) {
      /* listContent = questions.map(list => (
        <Text>{list.question}</Text>
      )); */
      listContent = (
        <FlatList
          data={questions}
          renderItem={({item}) => (
            <QuestionListItem item={item} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )
    } else if(questions === null || loading) {
      listContent = (
        <View style={styles.spinnerStyle}>
          <Spinner />
        </View>
      );
    }

    return (
      <View>
        {listContent}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  questions: state.questions,
  selectedItem: state.selectedItem
});

export default connect(mapStateToProps, {fetchQuestions})(QuestionList);
