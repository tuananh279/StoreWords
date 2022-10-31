import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./home.style";

const Home = () => {

    const handleAddNewWord = () => {
        console.log("handle add new word")
    }

    const handleRandomTest = () => {
        console.log("handle random test")
    }

    return (
        <SafeAreaView style={[styles.container, styles.main]}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    Welcome to Store Words
                </Text>
                <TouchableOpacity style={[styles.button, styles.btnAddNewWord]} onPress={handleAddNewWord}>
                    <View>
                        <Text style={styles.btnText}>Add new word</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.btnRandomTest]} onPress={handleRandomTest}>
                    <View>
                        <Text style={styles.btnText}>Random test</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;