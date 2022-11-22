import { StyleSheet, ScrollView, View, Text, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import ExpensesSummary from "../ExpensesOutput/ExpensesSummary";
/*
<BarChart data={expensesContext.expenses} />
<LineChart data={expensesContext.expenses} />
<PieChart data={expensesContext.expenses} /> 
*/

function GraphsOutput({ expenses }) {
  const mapped = expenses.map((expenses) => ({
    id: expenses.id,
    value: expenses.amount,
  }));
  console.log(mapped);

  return <PieChart data={mapped} donut />;
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
  },
});
