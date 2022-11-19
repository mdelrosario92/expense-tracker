import { StyleSheet, ScrollView, Text, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

function GraphsOutput() {
  return (
    <ScrollView style={[styles.container, styles.scrollview]}>
      <BarChart data={data} />
      <LineChart data={data} />
      <PieChart data={data} />
    </ScrollView>
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
  }
});
