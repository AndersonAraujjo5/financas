import { StyleSheet,  Text,  View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Transation } from "@/components/Transation";
import { List } from "@/components/List";
import { AntDesign } from "@expo/vector-icons";
import FinancialCategories from "@/components/FinancialCategories";

const navbar = Constants.statusBarHeight;

export default function Home() {
    const sampleData = [
        // {x: 'jan', y: 100},
        // {x: 'fev', y:80},
        // {x: 'mar', y:1002.91},
        {x: 'abr', y:923.82},
        {x: 'mai', y: 733.20},
        {x: 'jun', y: 831.2},
        {x: 'jul', y:10.12},
        {x: 'ago', y: 100.93},
        // {x: 'set', y:493.02},
        // {x: 'out', y:0},
        // {x: 'nov', y: 0},
        // {x: 'dez', y: 0}
    ]
    return (
        <View style={{ flex: 1 }}>
           <View style={{
            backgroundColor: '#304FFF'
           }}>
           <VictoryChart
                theme={VictoryTheme.grayscale}
                domainPadding={10}
            >
                <VictoryBar
                    style={{ 
                        data: { fill: "white" },
                        labels: {fill: 'white'},
                    }}
                    data={sampleData}
                    labels={(item) => `R$${item.x.toFixed(2).replace('.',',')}`}
                />
            </VictoryChart>
           </View>
            
            <FinancialCategories />

           <View style={{ padding: 12 }}>
                <Text style={{ color: 'white', fontSize: 16,
                    marginVertical: 8
                 }}>Movimentações</Text>
                <ScrollView style={{
                    backgroundColor: '#121212',
                    borderRadius: 8
                }}>
                   <List description="Cartão de credito" value="1.293,00" 
                    icon={() => <AntDesign name="CodeSandbox" size={20} color={'white'} />} 
                    id={90}/>
                   <List description="Cartão de debito" value="1.293,00" 
                    icon={() => <AntDesign name="CodeSandbox" size={20} color={'white'} />} 
                    id={90}/>
                   <List description="Dinheiro" value="1.293,00" 
                    icon={() => <AntDesign name="CodeSandbox" size={20} color={'white'} />} 
                    id={90}/>
                   <List description="Pix" value="1.293,00" 
                   icon={() => <AntDesign name="CodeSandbox" size={20} color={'white'} />} 
                   id={90} 
                   />
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