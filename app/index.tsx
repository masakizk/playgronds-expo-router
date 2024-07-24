import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return <View>
        <Text>Hello, world!</Text>
        <Link href="/users/alice">
            <Text>Visit Alice</Text>
        </Link>
    </View>;
}