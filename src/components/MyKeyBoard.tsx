import Button from "./Button"
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import {useState} from "react";

export default function MyKeyBoard() {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState<Number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (number1.length < 10) {
            setNumber1(number1 + buttonValue);  //handles 2 digit numbers
        }
    };

    const handleOperatorPress = (buttonValue: string) => {
        setOperator(buttonValue);
        setNumber2(number1);
        setNumber1('');
    };

    const clear = () => {
        setNumber1('');
        setNumber2('');
        setOperator('');
        setResult(null);
    };

    const displayNumber1 = () => {
        if (result !== null) {
            return (
                <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>
                    {result?.toString()}
                </Text>
            );
        }

        if (number1 && number1.length < 6) {
            return (
                <Text style={Styles.screenFirstNumber}>
                    {number1}
                </Text>
            );
        }

        if (number1 === '') {
            return (
                <Text style={Styles.screenFirstNumber}>
                    {'0'}
                </Text>
            );
        }

        if (number1.length > 5 && number1.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {number1}
                </Text>
            );
        }

        if (number1.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {number1}
                </Text>
            );
        }
    };

    const getResult = () => {
        switch (operator) {
            case "+":
                clear();
                setResult(parseInt(number2) + parseInt(number1));
                break;
            case "-":
                clear();
                setResult(parseInt(number2) - parseInt(number1));
                break;
            case "*":
                clear();
                setResult(parseInt(number2) * parseInt(number1));
                break;
            case "/":
                clear();
                setResult(parseInt(number2) / parseInt(number1));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    };

    return(
        <View style={Styles.viewBottom}>

            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {number2}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>
                        {operator}
                    </Text>
                </Text>

                {displayNumber1()}
            </View>


            <View style={Styles.row}>
                <Button title='C' isGray onPress={clear} />
                <Button title='+/-' isGray onPress={() => handleOperatorPress('+/-')} />
                <Button title='%' isGray onPress={() => handleOperatorPress('%')} />
                <Button title='÷' isBlue onPress={() => handleOperatorPress('/')} />
            </View>

            <View style={Styles.row}>
                <Button title='7' isGray onPress={() => handleNumberPress('7')} />
                <Button title='8' isGray onPress={() => handleNumberPress('8')} />
                <Button title='9' isGray onPress={() => handleNumberPress('9')} />
                <Button title='X' isBlue onPress={() => handleOperatorPress('*')} />
            </View>

            <View style={Styles.row}>
                <Button title='4' isGray onPress={() => handleNumberPress('4')} />
                <Button title='5' isGray onPress={() => handleNumberPress('5')} />
                <Button title='6' isGray onPress={() => handleNumberPress('6')} />
                <Button title='-' isBlue onPress={() => handleOperatorPress('-')} />
            </View>

            <View style={Styles.row}>
                <Button title='1' isGray onPress={() => handleNumberPress('1')} />
                <Button title='2' isGray onPress={() => handleNumberPress('2')} />
                <Button title='3' isGray onPress={() => handleNumberPress('3')} />
                <Button title='+' isBlue onPress={() => handleOperatorPress('+')} />
            </View>

            <View style={Styles.row}>
                <Button title='.' isGray onPress={() => handleNumberPress('.')} />
                <Button title='0' isGray onPress={() => handleNumberPress('0')} />
                <Button title='⌫' isGray onPress={() => setNumber1(number1.slice(0, -1))} />
                <Button title='=' isBlue onPress={() => getResult()} />
            </View>
        </View>
    );
};

