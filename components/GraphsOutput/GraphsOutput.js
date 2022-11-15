import { StyleSheet, View, Text, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
  
  const chartConfig={
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }

  const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, 
      },
    ],
  };

  const pieData = [
    {
      name: 'Entertainment',
      amount: 1234,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Food & Drink',
      amount: 5678,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Home',
      amount: 1357,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Life',
      amount: 8576,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Transportation',
      amount: 2468,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

function GraphsOutput(){
    return(
        <View style={styles.container}>
<Text>
    Total expenses by category:
  </Text>
  <PieChart
      data={pieData}
      width={Dimensions.get('window').width}
      height={200}
      chartConfig={chartConfig}
      accessor="amount"
      backgroundColor="transparent"
    />
    <Text>
    Expenses by month:
  </Text>
  <LineChart
    data={linedata}
    width={Dimensions.get('window').width}
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>

    )
}

export default GraphsOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: GlobalStyles.colors.background,
    }
});
