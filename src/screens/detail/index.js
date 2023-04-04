import { View, Text, StyleSheet } from 'react-native'

export function Detail() {
    return (
        <View style={styles.container}>
            <Text> Details Page </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    }
})