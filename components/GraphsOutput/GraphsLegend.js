import {  View, Text } from "react-native";

const GraphsLegend = (legends) => {
  const legend = (text, color) => {
    return (
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <View
          style={{
            height: 18,

            width: 18,

            marginRight: 10,

            borderRadius: 4,

            backgroundColor: color || "white",
          }}
        />

        <Text style={{ color: "white", fontSize: 16 }}>{text || ""}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        marginVertical: 100,

        marginHorizontal: 30,

        borderRadius: 10,

        paddingVertical: 50,

        backgroundColor: "#414141",

        justifyContent: "center",

        alignItems: "center",
      }}
    >
      {/*********************    TODO: Agregar leyendas dinámicamente     ********************/}

      <View
        style={{
          width: "100%",

          flexDirection: "row",

          justifyContent: "space-evenly",

          marginTop: 20,
        }}
      >
        {legend("Jan", "rgb(84,219,234)")}
        
      </View>
    </View>
  );
};


export default GraphsLegend;
