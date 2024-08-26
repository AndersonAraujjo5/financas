import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type TransationProps = {
    color?: string
    value: string
    dateTime?: string
    installments?: string // parcelas
    icon?: any
    id: string | number
    transation: string
    description: string
}

export function List({ description, color, value, dateTime, installments, icon: Icon, id }: TransationProps) {

    const handlePress = () => {
        alert(id)
    }
    return (
        <TouchableOpacity
            onPress={handlePress}
        >
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
                        {
                            !Icon ?
                                <View/>
                                : <Icon />
                        }
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }}>{description}</Text>
                        {
                            dateTime &&
                            <Text style={{ fontSize: 10, color: 'white' }}>{dateTime}</Text>
                        }
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: 'white' }}>R$ {value}</Text>
                    {
                        installments &&
                        <Text style={{ fontSize: 10, color: 'white', textAlign: 'right' }}>{installments}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

