import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type TransationProps = {
    name: string
    value: string
}

export function Transation({ name, value }: TransationProps) {
    let color = setColor(name)

    return (
        <View style={{
            marginVertical: 8, paddingHorizontal: 12, paddingVertical: 8,
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center', borderBottomWidth: 1,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: color?.replace(')', ',0.5)'), borderRadius: 999, width: 38,
                    height: 38, justifyContent: "center", alignItems: 'center', marginBottom: 4,
                    marginEnd: 8,
                }} >
                    <TypeTransation name={name} color={color} />
                </View>
                <Text style={{ fontSize: 16, color:color }}>{name}</Text>
            </View>
            <Text style={{ fontSize: 16, color:color }}>R$ {value}</Text>
        </View>
    )
}

const setColor = (value) => {
    if(value.toLowerCase().includes('credito')) return 'rgb(255,255,0)'
    if(value.toLowerCase().includes('debito')) return 'rgb(0,255,255)'
    if(value.toLowerCase().includes('dinheiro')) return 'rgb(255,165,0)'
    if(value.toLowerCase().includes('pix')) return 'rgb(0,128,0)'
}

const TypeTransation = ({ name, color }: { name: string, color: string }) => {
    if (name.toLowerCase().includes('credito')) {
        return (
            <AntDesign name="creditcard" size={18} color={color} />
        )
    }
    if (name.toLowerCase().includes('debito')) {
        return (
            <AntDesign name="creditcard" size={18} color={color} />
        )
    }
    if (name.toLowerCase().includes('dinheiro')) {
        return (
            <FontAwesome5 name="coins" size={18} color={color} />
        )
    }
    if (name.toLowerCase().includes('pix')) {
        return (
            <MaterialIcons name="pix" size={18} color={color} />
        )
    }
}