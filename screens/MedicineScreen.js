import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import NavTop from "../components/NavTop";

const MedicineScreen = () => {
  const [medications, setMedications] = useState([]);
  const [filteredMedications, setFilteredMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.fda.gov/drug/label.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setMedications(data.results);
        setFilteredMedications(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = medications.filter(
        (item) =>
          item.openfda?.brand_name?.some((name) =>
            name.toLowerCase().includes(text.toLowerCase())
          ) ||
          item.openfda?.generic_name?.some((name) =>
            name.toLowerCase().includes(text.toLowerCase())
          )
      );
      setFilteredMedications(filtered);
    } else {
      setFilteredMedications(medications);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavTop />
      <View style={styles.medicinesContainer}>
        <Text style={styles.title}>Medication List</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search drugs"
          value={search}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredMedications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>
                Name: {item.openfda?.brand_name?.join(", ") || "N/A"}
              </Text>
              <Text style={styles.itemText}>
                Generic name: {item.openfda?.generic_name?.join(", ") || "N/A"}
              </Text>
              <Text
                numberOfLines={4}
                ellipsizeMode="tail"
                style={styles.itemText}
              >
                Indications of use:{" "}
                {item.indications_and_usage?.join("\n") || "N/A"}
              </Text>
              <Text
                numberOfLines={4}
                ellipsizeMode="tail"
                style={styles.itemText}
              >
                Side effects: {item.adverse_reactions?.join("\n") || "N/A"}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  medicinesContainer:{
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 25,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginTop: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop:5
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#B72424",
  },
  itemText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default MedicineScreen;
