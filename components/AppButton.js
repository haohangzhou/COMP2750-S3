import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import AppColor from "../config/AppColor";

function AppButton({ title, style, onPress }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.primary,
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        height: 60,
        borderRadius: 10,
    },
    text: {
        fontSize: 26,
        color: AppColor.white,
        padding: 10,
    },
});
export default AppButton;
