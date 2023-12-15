import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker } from "react-native";
import axios from "axios";

const IncomeScreen = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`);
        setExchangeRates(response.data.rates);
        convertAmount(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [fromCurrency, toCurrency]);

  const convertAmount = (rates) => {
    const converted = (parseFloat(amount) * rates[toCurrency]).toFixed(2);
    setConvertedAmount(converted);
  };

  const handleAmountChange = (input) => {
    setAmount(input);
    convertAmount(exchangeRates);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Divisas</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Monto en {fromCurrency}:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={handleAmountChange}
        />
      </View>

      <View style={styles.currencyPickerContainer}>
        <Text style={styles.currencyPickerLabel}>De:</Text>
        <Picker
          style={styles.currencyPicker}
          selectedValue={fromCurrency}
          onValueChange={(itemValue) => setFromCurrency(itemValue)}
        >
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Dólar Estadounidense (USD)" value="USD" />
          <Picker.Item label="Libra Esterlina (GBP)" value="GBP" />
          <Picker.Item label="Yen Japonés (JPY)" value="JPY" />
          <Picker.Item label="Dólar Australiano (AUD)" value="AUD" />
          {/* Agrega más monedas según sea necesario */}
        </Picker>
      </View>

      <View style={styles.currencyPickerContainer}>
        <Text style={styles.currencyPickerLabel}>A:</Text>
        <Picker
          style={styles.currencyPicker}
          selectedValue={toCurrency}
          onValueChange={(itemValue) => setToCurrency(itemValue)}
        >
          <Picker.Item label="Dólar Estadounidense (USD)" value="USD" />
          <Picker.Item label="Libra Esterlina (GBP)" value="GBP" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Yen Japonés (JPY)" value="JPY" />
          <Picker.Item label="Dólar Australiano (AUD)" value="AUD" />
          {/* Agrega más monedas según sea necesario */}
        </Picker>
      </View>

      <Text style={styles.convertedAmount}>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </Text>

      <TouchableOpacity style={styles.nextButton} onPress={() => {}}>
        <Text style={styles.nextButtonText}>Realizar Otra Acción</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  exchangeRateContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    elevation: 5,
    marginBottom: 20,
  },
  exchangeRate: {
    fontSize: 16,
    marginBottom: 10,
  },
  convertedAmount: {
    fontSize: 16,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default IncomeScreen;
