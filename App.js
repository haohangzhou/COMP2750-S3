import React, { useState } from "react";
import {SafeAreaView, View, Text, StyleSheet,Picker, Button} from 'react-native';


export default function App() {

  const [food1SelectedValue, setFood1SelectedValue] = useState("Select A Food");
  const [food2selectedValue, setFood2SelectedValue] = useState("Quantity");

  const [drink1SelectedValue, setDrink1SelectedValue] = useState("Select A Drink");
  const [drink2selectedValue, setDrink2SelectedValue] = useState("Quantity");

  const [calculatedValue, setCalculatedValue] = useState("Press the above button to calculate");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}> Welcom to SFFS System </Text>
      </View>

      <View style={styles.row2}>
        <Picker 
          style={styles.picker1}
          selectedValue={food1SelectedValue}
          onValueChange={(itemValue, itemIndex) => setFood1SelectedValue(itemValue)}>
            <Picker.Item label="Select A Food" value="Select A Food" />
            <Picker.Item label="Fries-$10" value="Fries-$10" />
            <Picker.Item label="Burger-$15" value="Burger-$15" />
            <Picker.Item label="Tacos-$15" value="Tacos-$15" />
        </Picker>
        <Picker 
          style={styles.picker2}
          selectedValue={food2selectedValue}
          onValueChange={(itemValue, itemIndex) => setFood2SelectedValue(itemValue)}>
            <Picker.Item label="Quantity" value="Quantity" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.row2}>
        <Picker 
          style={styles.picker1}
          selectedValue={drink1SelectedValue}
          onValueChange={(itemValue, itemIndex) => setDrink1SelectedValue(itemValue)}>
            <Picker.Item label="Select A Drink" value="Select A Drink" />
            <Picker.Item label="Coke-$6" value="Coke-$6" />
            <Picker.Item label="Pepsi-$6" value="Pepsi-$6" />
            <Picker.Item label="Sprite-$5" value="Sprite-$5" />
        </Picker>
        <Picker 
          style={styles.picker2}
          selectedValue={drink2selectedValue}
          onValueChange={(itemValue, itemIndex) => setDrink2SelectedValue(itemValue)}>
            <Picker.Item label="Quantity" value="Quantity" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View>
        <Button
          title="CALCULATE"
          onPress={() => {
            const foodCost = parseInt(food1SelectedValue[food1SelectedValue.length - 1]);
            const foodQuantity = parseInt(food2selectedValue);

            const drinkCost = parseInt(drink1SelectedValue[drink1SelectedValue.length - 1]);
            const drinkQuantity = parseInt(drink2selectedValue);

            const totalCost = foodCost * foodQuantity + drinkCost * drinkQuantity;
            
            setCalculatedValue("Total Cost: $" + totalCost);
          }}
        />
        <Text style={styles.heading}> {calculatedValue} </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3E3'
  },
  heading: {
    fontSize:20,
    textAlign: 'center',
    marginTop: 30
  },
  row2:{
    flexDirection: 'row',
    marginTop: 7,
  },
  picker1:{
    flex:2
  },
  picker2:{
    flex:1
  },
});
