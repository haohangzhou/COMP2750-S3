import React, { useState } from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Picker,
} from "react-native";

import Constants from "expo-constants";
import AppButton from "./components/AppButton";
import AppColor from "./config/AppColor";

export default function App() {
    const [food, setFood] = useState("Select A Food");
    const [foodQty, setFoodQty] = useState("Quantity");
    const [drink, setDrink] = useState("Select A Drink");
    const [drinkQty, setDrinkQty] = useState("Quantity");
    const [totalCost, setTotalCost] = useState(0);

    const getPrice = (item) => {
        const price = [
            { name: "fries", price: 10 },
            { name: "burger", price: 15 },
            { name: "tacos", price: 15 },
            { name: "coke", price: 6 },
            { name: "pepsi", price: 6 },
            { name: "sprite", price: 5 },
        ];

        return price.find((x) => x.name == item).price;
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Welcome to {"\n"}Sydney {"\n"}Food Festival
            </Text>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("./assets/street-food.png")}
            />
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.items}
                    selectedValue={food}
                    onValueChange={(itemValue, itemIndex) => setFood(itemValue)}
                >
                    <Picker.Item
                        color={AppColor.primary}
                        label="Select A Food"
                        value="Select A Food"
                    />
                    <Picker.Item
                        color={AppColor.primary}
                        label="Fries-$10"
                        value="fries"
                    />
                    <Picker.Item
                        color={AppColor.primary}
                        label="Burger-$15"
                        value="burger"
                    />
                    <Picker.Item
                        color={AppColor.primary}
                        label="Tacos-$15"
                        value="tacos"
                    />
                </Picker>
                <Picker
                    style={styles.quantity}
                    selectedValue={foodQty}
                    onValueChange={(itemValue, itemIndex) =>
                        setFoodQty(itemValue)
                    }
                >
                    <Picker.Item
                        color={AppColor.primary}
                        label="Quantity"
                        value=""
                    />
                    <Picker.Item color={AppColor.primary} label="1" value="1" />
                    <Picker.Item color={AppColor.primary} label="2" value="2" />
                    <Picker.Item color={AppColor.primary} label="3" value="3" />
                    <Picker.Item color={AppColor.primary} label="4" value="4" />
                    <Picker.Item color={AppColor.primary} label="5" value="5" />
                </Picker>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.items}
                    selectedValue={drink}
                    onValueChange={(itemValue, itemIndex) =>
                        setDrink(itemValue)
                    }
                >
                    <Picker.Item
                        color={AppColor.primary}
                        label="Select A Drink"
                        value="Select A Drink"
                    />
                    <Picker.Item
                        color={AppColor.primary}
                        label="Coke-$6"
                        value="coke"
                    />
                    <Picker.Item
                        color={AppColor.primary}
                        label="Pepsi-$6"
                        value="pepsi"
                    />
                    <Picker.Item
                        color={AppColor.primary}
                        label="Sprite-$5"
                        value="sprite"
                    />
                </Picker>

                <Picker
                    style={styles.quantity}
                    selectedValue={drinkQty}
                    onValueChange={(itemValue, itemIndex) =>
                        setDrinkQty(itemValue)
                    }
                >
                    <Picker.Item
                        color={AppColor.primary}
                        label="Quantity"
                        value="Quantity"
                    />
                    <Picker.Item color={AppColor.primary} label="1" value="1" />
                    <Picker.Item color={AppColor.primary} label="2" value="2" />
                    <Picker.Item color={AppColor.primary} label="3" value="3" />
                    <Picker.Item color={AppColor.primary} label="4" value="4" />
                    <Picker.Item color={AppColor.primary} label="5" value="5" />
                </Picker>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.result}>Order Total: ${totalCost}</Text>
            </View>
            <AppButton
                title="Calculate"
                style={styles.button}
                onPress={() => {
                    try {
                        const foodTotal = getPrice(food) * foodQty;
                        const drinkTotal = getPrice(drink) * drinkQty;
                        const totalCost = foodTotal + drinkTotal;
                        setTotalCost(totalCost);
                    } catch (err) {
                        alert("Please select something for every field.");
                    }
                }}
            />

            <Text style={styles.member}>
                Group 50: Haohang Zhou, Hasib Rahman, {"\n"}Irwan Derviskadic, Sabin
                Thapa
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.secondary,
        marginTop: Constants.statusBarHeight,
    },

    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 20,
        color: AppColor.primary,
    },

    image: {
        width: "100%",
        height: 200,
        marginTop: -30,
    },

    button: {
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    pickerContainer: {
        flexDirection: "row",
        marginTop: 7,
        marginHorizontal: 15,
    },

    items: {
        flex: 3,
        color: AppColor.primary,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantity: {
        flex: 2,
        color: AppColor.primary,
    },

    resultContainer: {
        flex: 1,
        width: "80%",
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: AppColor.primary,
    },

    result: {
        fontSize: 28,
        fontWeight: "bold",
        color: AppColor.primary,
        textTransform: "capitalize",
    },

    member: {
        fontSize: 12,
        alignSelf: "center",
        padding: 5,
        color: AppColor.primary,
        textAlign: 'center'
    },
});
