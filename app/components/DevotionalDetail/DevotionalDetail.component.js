import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Html from 'react-native-render-html';

import styles from './DevotionalDetail.style';

export default class DevotionalDetail extends Component {
  componentDidMount() {}

  verseBuilder = (verse = []) => {
    let verseBodyBuilder = '';
    let verseNumberBuilder = '';
  
    verse.forEach((verse, idx, array) => {
      let number = idx + 1;
      verseBodyBuilder += array.length > 1 ? `${number}. ${verse.verseBody}\n\n` : `${verse.verseBody}`;
      verseNumberBuilder += array.length > 1 ? (`${number}. ${verse.verseNumber}${idx === array.length - 1 ? ' ' : ', '}`)
                                             : `${verse.verseNumber}`;
    });
  
    return {
      body: verseBodyBuilder,
      number: verseNumberBuilder
    }
  };

  render() {
    const data = this.props.navigation.getParam('data');
    const { title, body, verse } = data;
    const verseParsed = this.verseBuilder(verse);
    return (
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.verseWrapper}>
          <Text>{verseParsed.body}</Text>
          <Text>{verseParsed.number}</Text>
        </View>
        <View style={styles.body}>
          <Html html={body}/>
        </View>
      </ScrollView>
    );
  };
}
