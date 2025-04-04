import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>

        <View style={{
          height: 100, justifyContent: 'center',
          paddingHorizontal: 16,
          elevation: 4, backgroundColor: '#D8B1F0',
        }}>
          <Text style={{
            color: 'black',
            fontSize: 24,
          }}>Sudoku for Kids</Text>
        </View>

        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        </View>

        <View style={{ flex: 0.5, marginLeft: 20, marginRight: 20, }}>

          <View style={styles.blockRow}>

            <View style={styles.block}>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>2</Text></View>
              </View>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>4</Text></View>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>2</Text></View>
              </View>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>2</Text></View>
              </View>
            </View>



          </View>


          <View style={styles.blockRow}>

            <View style={styles.block}>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>2</Text></View>
                <View style={styles.numberBox}><Text>2</Text></View>
              </View>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>4</Text></View>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>2</Text></View>
              </View>
              <View style={styles.numberRow}>
                <View style={styles.numberBox}><Text>1</Text></View>
                <View style={styles.numberBox}><Text>2</Text></View>
              </View>
            </View>


          </View>



        </View>

        <View style={{ flexDirection: 'row', flex: 0.2, justifyContent: 'space-around', alignItems: 'center' }}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
          <Text>Option 4</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',

  },
  blockRow: {
    flex: 0.5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#D8B1F0',
  },
  block: {
    flex: 0.5,
    margin: 2,
  },
  numberRow: {
    flex: 1,
    flexDirection: 'row',
  },
  numberBox: {
    flex: 1,
    margin: 2,
    borderWidth: 2,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D8B1F0',
  },
});
