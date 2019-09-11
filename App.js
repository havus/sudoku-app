import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import refactor from './helper';

const App = () => {

  // const [board, setBoard] = useEffect([]);

  const generateBoard = _ => {
    const soal = '300200000000107000706030500070009080900020004010800050009040301000702000000008006';

    const board = [];
    let row = [];
    for (let i = 0; i < soal.length; i++) {
      row.push(soal[i]);
      if (row.length % 9 === 0) {
        board.push(row);
        row = [];
      }
    }

    const boardMaster = [];
    let rowMaster = [];
    board.map((el, i) => {
      el.map((el2, j) => {
        let key = `${i}-${j}`;
        if (el2 === '0') {
          rowMaster.push(
            <View style={styles.box} key={key}>
              <TextInput
                clearTextOnFocus={true}
                keyboardType={'number-pad'}
                style={styles.textInput}
                maxLength={1}
                onChangeText={_ => console.log(key)}
              />
            </View>
          )
        } else {
          rowMaster.push(
            <View style={styles.box} key={key}>
              <Text>{el2}</Text>
            </View>
          )
        }
        if (rowMaster.length % 9 === 0) {
          boardMaster.push(
            <View style={styles.inline} key={key}>
              {rowMaster}
            </View>
          )
          rowMaster = [];
        }
      });
    });

    const border3 = [];
    let borderBox3 = [];
    let borderBox = [];
    for (let i = 0; i < 9; i++) {
      borderBox.push(
        <View style={{ height: 90, width: 90, borderWidth: 1, borderColor: 'black' }} key={i}/>
      )
      if (borderBox.length % 3 === 0) {
        borderBox3.push(
          <View style={{ flexDirection: 'row' }} key={i}>
            {borderBox}
          </View>
        );
        borderBox = [];
      }
      
      if (borderBox3.length % 3 === 0) {
        border3.push(
          <View key={i}>
            {borderBox3}
          </View>
        );
        borderBox3 = [];
      }
    }

    return (
      <View>
        {border3}
        <View style={{ marginTop: -30 * 9 }}>
          {boardMaster}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {generateBoard()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 30,
    width: 30,
    borderColor: 'grey',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inline: {
    flexDirection: 'row',
  },
  block: {
    borderColor: 'black',
    borderWidth: 1,
  },
  textInput: {
    backgroundColor: 'rgba(0, 0, 255, .1)',
    width: '100%',
    textAlign: 'center',
  },
  borderBox: {

  }
});

export default App;

// const boardMaster = refactor(soal);

//     const puzzle = []
//     let rowLg = [];
//     let blockMd = [];
//     let count = 0;
//     boardMaster.map(el3 => {
//       let rowSm = [];
//       el3.map((el, i) => {
//         if (el === '0') {
//           let key = `${count} - ${i}`;
//           rowSm.push(
//             <View style={styles.box} key={key}>
//               <TextInput
//                 clearTextOnFocus={true}
//                 keyboardType={'number-pad'}
//                 style={styles.textInput}
//                 maxLength={1}
//                 onChangeText={_ => console.log(key)}
//               />
//             </View>
//           )
//         } else {
//           rowSm.push(
//             <View style={styles.box} key={`${count} - ${i} `}>
//               <Text>{el}</Text>
//             </View>
//           )
//         }
//       });
//       count++;

//       blockMd.push(
//         <View style={styles.inline} key={`${count}`}>
//           {rowSm}
//         </View>
//       );

//       if (blockMd.length % 3 === 0) {
//         rowLg.push(
//           <View style={styles.block} key={`${count}`}>
//             {blockMd}
//           </View>
//         );
//         blockMd = [];
//       }

//       if (rowLg.length % 3 === 0) {
//         puzzle.push(
//           <View style={styles.inline} key={`${count}`}>
//             {rowLg}
//           </View>
//         );
//         rowLg = [];
//       }

//     });
//     return (
//       <View key={`${count}`}>
//         {puzzle}
//       </View>
//     )