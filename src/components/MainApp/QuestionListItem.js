import React, { Component } from 'react';
import { StyleSheet, View, Text , TouchableWithoutFeedback, LayoutAnimation, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection} from '../common';
import {selectItem} from '../Store/actions';

class QuestionListItem extends Component {
  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  }

  onSelect = (id) => {
    this.props.selectItem(id);
  }

  renderDescription() {
    const {item, selectedItem} = this.props;
    if(item.id === selectedItem) {
      return (
        <CardSection>
          <Text style={styles.answerStyle}>{item.answer}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const {item} = this.props;
    const {questionStyle} = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.onSelect(item.id)}>
        <View>
          <Card>
            <CardSection>
              <Text style={questionStyle} >{item.question}</Text>
            </CardSection>
            {this.renderDescription()}
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  questionStyle: {
    fontSize: 18,
    color: '#000000'
  },
  answerStyle: {
    fontSize: 16,
    color: '#333333'
  }
});

const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem
});

export default connect(mapStateToProps, {selectItem})(QuestionListItem);
