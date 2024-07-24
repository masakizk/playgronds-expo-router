import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function UserPage() {
    const { id } = useLocalSearchParams();

    return <Text>Hello, { id }!</Text>;
}