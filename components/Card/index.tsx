import { AntDesign } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/AntDesign";
import { Text, View } from "react-native";


type CardProps = {
    textBody: string
    textHead?: string
    textFooter?: string
    color?: string
    bg?: string
}

export default function Card({
    color = 'white',
    textBody,
    textFooter,
    textHead,
    bg,
}: CardProps) {
    return (
        <View style={{
            width: '100%',
            backgroundColor: !bg ? '#304FFF': bg,
            borderRadius: 12, 
            paddingHorizontal: 18,
            paddingVertical: 12
        }}>
            
            <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 4}}>
                <AntDesign size={14} name='creditcard' color={'white'}/>
                <Text style={{color: color, marginStart: 4}}>{textHead}</Text>
            </View>
            <Text style={{fontSize: 18, fontWeight: 'bold',color: color,
                marginVertical: 4
            }}>{textBody}</Text>
            <Text style={{color: color}}>{textFooter}</Text>
        </View>
    )
}



