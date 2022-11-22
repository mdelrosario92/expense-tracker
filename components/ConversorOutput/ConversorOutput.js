import { Text, View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../../constants/styles";

function ConversorOutput({ expenses, expensesPeriod, fallbackText }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  const [cotizaciones, setCotzaciones] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://criptoya.com/api/dolar")
      .then((response) => response.json())
      .then((jsonResponse) => setCotzaciones(jsonResponse))
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerSummaryt}>
        <Text style={styles.period}>Total en pesos:</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${expensesSum.toFixed(0)}</Text>
        </View>
      </View>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>Oficial:</Text>
          <Text style={styles.textBase}>({cotizaciones.oficial})</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            ${(expensesSum / cotizaciones.oficial).toFixed(2)} USD
          </Text>
        </View>
      </View>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>Solidario:</Text>
          <Text style={styles.textBase}>({cotizaciones.solidario})</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            ${(expensesSum / cotizaciones.solidario).toFixed(2)} USD
          </Text>
        </View>
      </View>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>Blue:</Text>
          <Text style={styles.textBase}>({cotizaciones.blue})</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            ${(expensesSum / cotizaciones.blue).toFixed(2)} USD
          </Text>
        </View>
      </View>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>CCL:</Text>
          <Text style={styles.textBase}>({cotizaciones.ccl})</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            ${(expensesSum / cotizaciones.ccl).toFixed(2)} USD
          </Text>
        </View>
      </View>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>MEP:</Text>
          <Text style={styles.textBase}>({cotizaciones.mep})</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            ${(expensesSum / cotizaciones.mep).toFixed(2)} USD
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.exchangeFetchTime}>
          Cotización a las {cotizaciones.time}
        </Text>
      </View>
    </ScrollView>
  );
}

export default ConversorOutput;

const styles = StyleSheet.create({
  exchangeFetchTime: { 
    color: "white", 
    fontWeight: "light",
    fontSize: 12,
    textAlign: "center",
    padding: 20
},
  expenseItem: {
    padding: 13,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.header,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.text,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.text,
    left: 20,
  },
  description: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: "bold",
    left: 20,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.header,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    right: 10,
  },
  amount: {
    color: GlobalStyles.colors.text,
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.background,
  },
  containerSummaryt: {
    padding: 15,
    backgroundColor: GlobalStyles.colors.filter,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  period: {
    fontSize: 20,
    color: GlobalStyles.colors.text,
    left: 15,
  },
  sum: {
    fontSize: 22,
    fontWeight: "bold",
    color: GlobalStyles.colors.text,
    right: 15,
  },
});
