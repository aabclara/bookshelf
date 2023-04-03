import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage){
    const slide1 = require("../../assets/slide2.png")
    const slide1Texts = [
        { id: '1', text: 'Solicite o empréstimo de uma obra' },
        { id: '2', text: 'Renovar o empréstimo' },
        { id: '3', text: 'Cancelar o empréstimo' }
    ]
    return (
        <View style={styles.container} >
           <View style={styles.panel}>
                <ComponentTitleSlider titleI='Sistema de Empréstimo' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                       <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} page={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} page={false} />
                <ComponentButtonSlider onPressI={() => setPageI(5)} page={false}/>
            </View>
        </View>
    );
}