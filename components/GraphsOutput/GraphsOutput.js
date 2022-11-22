import { StyleSheet, ScrollView, View, Text, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import ExpensesSummary from "../ExpensesOutput/ExpensesSummary";
import GraphsLegend from "./GraphsLegend";
import { toMonthName } from "../../util/toMonth";
/*
<BarChart data={expensesContext.expenses} />
<LineChart data={expensesContext.expenses} />
<PieChart data={expensesContext.expenses} /> 
*/

function GraphsOutput({ expenses }) {
  const mapped = expenses.map((expenses) => ({
    amount: expenses.amount,
    date: expenses.date,
  }));

  const res = mapped.reduce(
    (p, c) => {
      let mes = new Date(c.date).getMonth() + 1;

      let idx = p[0].indexOf(mes);

      if (idx < 0) {
        p[0].push(mes);
        p[1].push({
          mes: mes,
          label: toMonthName(mes),
          value: c.amount,
        });
      } else {
        p[1][idx].value += c.amount;
      }

      return p;
    },
    [[], []]
  );

  const ordenado = [...res[1]].sort((a, b) => a.mes - b.mes);
  console.log(ordenado);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <BarChart
          barWidth={25}
          noOfSections={5}
          barBorderRadius={4}
          frontColor="lightblue"
          data={ordenado}
          yAxisThickness={0}
          xAxisThickness={2}
        />
        {/* TODO: volver a agregar leyendas
      <GraphsLegend legends={res[1].label} />
     */}
      </ScrollView>
    </View>
  );
}

export default GraphsOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalStyles.colors.background,
  },
  scrollview: {
    backgroundColor: "white",
    padding: 20,
  },
});
