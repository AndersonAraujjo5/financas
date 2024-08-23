import Card from "@/components/Card";
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Transation } from "@/components/Transation";

const navbar = Constants.statusBarHeight;

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <View>
                    <View style={{
                        width: '100%', height: 38, backgroundColor: 'white', marginTop: navbar,
                        borderRadius: 8, paddingHorizontal: 4
                    }}>
                        <TextInput placeholder="Pesquisa" style={{ width: '100%', height: 38 }} />
                    </View>
                </View>
                <View style={{
                    marginVertical: 52,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: "white" }}>
                        Divida total
                    </Text>
                    <Text style={{ color: "white", fontSize: 32, fontWeight: 'bold' }}>
                        R$ 1.293,00
                    </Text>
                    <Pressable style={{
                        borderWidth: 2,
                        padding: 8,
                        borderRadius: 9999,
                        marginTop: 16,
                        marginBottom: 24,
                        borderColor: 'white'
                    }}>
                        <Text style={{ color: "white" }}>Add movimentação</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{
                padding: 12, marginTop: -60
            }}>
                <View style={{
                    backgroundColor: 'white', padding: 32,
                    borderRadius: 8, display: 'flex',
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <View>
                        <View style={{
                            backgroundColor: "#304FFF", borderRadius: 999, width: 32,
                            height: 32, justifyContent: "center", alignItems: 'center', marginBottom: 4
                        }} >
                            <MaterialIcons name="attach-money" size={24} color="white"
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>Recebido</Text>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: "#304FFF", borderRadius: 999, width: 32,
                            height: 32, justifyContent: "center", alignItems: 'center', marginBottom: 4
                        }} >
                            <MaterialIcons name="attach-money" size={24} color="white"
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>Enviado</Text>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: "#304FFF", borderRadius: 999, width: 32,
                            height: 32, justifyContent: "center", alignItems: 'center', marginBottom: 4
                        }} >
                            <MaterialIcons name="attach-money" size={24} color="white"
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>Enviado</Text>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: "#304FFF", borderRadius: 999, width: 32,
                            height: 32, justifyContent: "center", alignItems: 'center', marginBottom: 4
                        }} >
                            <MaterialIcons name="attach-money" size={24} color="white"
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>Enviado</Text>
                    </View>
                </View>

            </View>

            <View style={styles.container} >
                <View style={styles.card}>
                    <View style={{ width: "49%" }}>
                        <Card
                            textBody="R$ 290,92"
                            textHead="Saldo"
                            textFooter="Mês atual" />
                    </View>
                    <View style={{ width: "49%" }}>
                        <Card
                            textBody="R$ 1.290,92"
                            textHead="Fatura"
                            textFooter="Dezembro" />
                    </View>

                </View>
            </View>

            <View style={{ padding: 12 }}>
                <Text style={{ color: 'white', fontSize: 16,
                    marginVertical: 8
                 }}>Transações</Text>
                <ScrollView style={{
                    backgroundColor: 'white',
                    borderRadius: 8
                }}>
                   <Transation name="Cartão de credito" value="1.293,00" />
                   <Transation name="Cartão de debito" value="1.293,00" />
                   <Transation name="Dinheiro" value="1.293,00" />
                   <Transation name="Pix" value="1.293,00" />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    header: {
        width: '100%',
        backgroundColor: "#304FFF",
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    card: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})