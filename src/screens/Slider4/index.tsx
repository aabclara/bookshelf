import { FlatList, ImageBackground, View, TouchableOpacity, Text } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';

import { styles } from './styles';

export function Slider4({ setPageI }: IPage){
    const slide1 = require("../../assets/slide2.png")
    const slide1Texts = [
        { id: '1', text: 'Utilize a camêra para identificar uma obra' },
        { id: '2', text: 'Ajuda' },
        { id: '3', text: 'Saiba mais...' }
    ]
    return (
        <View style={styles.container} >
           <View style={styles.panel}>
                <ComponentTitleSlider titleI='Outros' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                       <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity style={styles.buttonEntrar} onPress={
                    () => setPageI(5)
                }>
                    <Text style={styles.buttonEntrarText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} page={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} page={false}/>
            </View>
        </View>
    );
}