import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Html from 'react-native-render-html';

import styles from './DevotionalDetail.style';
import { font } from './../../utils/font';

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
    const { fontSize, fontFamily } = this.props.setting;

    return (
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={{ fontSize: fontSize + 5, fontFamily, fontWeight: 'bold' }}>{title}</Text>
        </View>
        <View style={styles.verseWrapper}>
          <Text style={{ fontSize, fontFamily }}>{verseParsed.body}</Text>
          <Text style={{ fontSize, fontFamily, fontWeight: 'bold' }}>{verseParsed.number}</Text>
        </View>
        <View style={styles.body}>
          <Html baseFontStyle={{ fontSize, fontFamily }} html={body}/>
        </View>
      </ScrollView>
    );
  };
}
