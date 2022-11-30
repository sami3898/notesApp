import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import { wp } from "../../common/ResponsiveLayout";
import { COLORS } from "../../common/colors";

const IconButton = (props) => {
    const { name, buttonStyle, onPress } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.iconContainer, buttonStyle]}
            onPress={() => onPress()}
        >
            <Icon name={name} size={wp(24)} color={COLORS.WHITE} />
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    iconContainer: {
        height: wp(50),
        width: wp(50),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.HIGHLIGHT_COLOR,
        borderRadius: 15,
    },
});
