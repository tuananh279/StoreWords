import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    main: {
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 32,
    },

    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        alignItems: "center",
        padding: 16,
        borderRadius: 16,
        minWidth: 200,
    },

    btnText: {
        fontSize: 16,
        fontWeight: "500"
    },

    btnAddNewWord: {
        backgroundColor: '#3498db',
        marginBottom: 16
    },

    btnRandomTest: {
        backgroundColor: '#1abc9c'
    }
})