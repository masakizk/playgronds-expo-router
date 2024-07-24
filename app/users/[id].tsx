import { useLocalSearchParams, router } from 'expo-router';
import { Text, View, Button } from 'react-native';

export default function UserPage() {
    const { id } = useLocalSearchParams();

    return <View>
        <Text>Hello, {id}!</Text>
        <Button title="Go back" onPress={() => router.back()} />
    </View>
}