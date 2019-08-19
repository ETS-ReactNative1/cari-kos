import React, { Component } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Appbar, Button, Checkbox, RadioButton } from "react-native-paper";
import Modal from "react-native-modal";

const { width } = Dimensions.get('window');
const features = require('../../data/fitur.json');
let minBillings = ["Opsional"];
for (let i = 2; i < 13; i++) {
  minBillings.push(i.toString());
}

class Filter extends Component {
  constructor() {
    super();
    featuresWithStatus = [];
    features.map((fitur, index) => {
      featuresWithStatus.push({...fitur, status: false});
    })
    this.state = {
      modalVisible: "",
      types: "Campur",
      gender: [
        { type: "Campur", status: true },
        { type: "Putra", status: false },
        { type: "Putri", status: false }
      ],
      bilingType: "Bulanan",
      minPrice: 1000000,
      maxPrice: 20000000,
      features: featuresWithStatus,
      minBilling: "Opsional"
    }
  }

  showModal = (type) => () => {
    this.setState({
      modalVisible: type
    });
  }

  closeModal = () => {
    this.setState({ modalVisible: "" })
  }

  handleGenderChange = type => {
    const index = this.state.gender.findIndex(gender => gender.type === type);
    const { gender } = this.state;
    gender[index].status = !gender[index].status;
    this.setState({
      gender
    });
    this.fetchingGender();
  }

  handleFeaturesChange = fiturName => {
    const index = this.state.features.findIndex(fitur => fitur.name === fiturName );
    const { features } = this.state;
    features[index].status = !features[index].status;
    this.setState({
      features
    });
  }

  fetchingGender = () => {
    let types = "";
    this.state.gender.map((item) => {
      if (item.status) {
        types += `${item.type}, `
      }
    });
    this.setState({ types })
  }

  render() {
    let featI = 0;
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={styles.headerStyle}>
          <Appbar.Content title="Filter" />
          <Appbar.Action icon="close" onPress={() => this.props.navigation.goBack()} />
        </Appbar.Header>
        <ScrollView style={[styles.mainContainer]}>
          <View>
            <Text style={styles.textLabel}>Tipe Kost (Gender)</Text>
            <TouchableOpacity style={[styles.inputStyle, styles.buttonInput]} color="#03a9f4" uppercase={false} onPress={this.showModal("gender")}>
              <Text style={{ color: "#03a9f4" }}>{this.state.types}</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.modalVisible === "gender"} style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Appbar.Header style={styles.modalHeader}>
                  <Appbar.Content title="Pilih tipe kost" />
                  <Appbar.Action icon="close" onPress={() => this.setState({ modalVisible: "" })} />
                </Appbar.Header>
                <View style={[styles.floatLeft]}>
                  <View style={{ flex: 1 }}>
                    <Text>Campur</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end"}}>
                    <Checkbox
                      color="#03a9f4"
                      status={this.state.gender[0].status ? 'checked' : 'uncheck'}
                      onPress={() => this.handleGenderChange("Campur")}
                    />
                  </View>
                </View>
                <View style={[styles.floatLeft]}>
                  <View style={{ flex: 1 }}>
                    <Text>Putra</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end"}}>
                    <Checkbox
                      color="#03a9f4"
                      status={this.state.gender[1].status ? 'checked' : 'uncheck'}
                      onPress={() => this.handleGenderChange("Putra")}
                    />
                  </View>
                </View>
                <View style={[styles.floatLeft]}>
                  <View style={{ flex: 1 }}>
                    <Text>Putri</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end"}}>
                    <Checkbox
                      color="#03a9f4"
                      status={this.state.gender[2].status ? 'checked' : 'uncheck'}
                      onPress={() => this.handleGenderChange("Putri")}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View>
            <Text style={styles.textLabel}>Jangka Waktu</Text>
            <TouchableOpacity style={[styles.inputStyle, styles.buttonInput]} color="#03a9f4" uppercase={false} onPress={this.showModal("range")}>
              <Text style={{ color: "#03a9f4", width }}>{this.state.bilingType}</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.modalVisible === "range"} style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Appbar.Header style={styles.modalHeader}>
                  <Appbar.Content title="Pilih Jangka Waktu" />
                  <Appbar.Action icon="close" onPress={() => this.setState({ modalVisible: "" })} />
                </Appbar.Header>
                <RadioButton.Group
                  onValueChange={bilingType => this.setState({ bilingType })}
                  value={this.state.bilingType}
                >
                  <View style={styles.floatLeft}>
                    <View style={{flex: 1}}>
                      <Text>Harian</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                      <RadioButton value="Harian" color="#03a9f4" />
                    </View>
                  </View>
                  <View style={styles.floatLeft}>
                    <View style={{flex: 1}}>
                      <Text>Mingguan</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                      <RadioButton value="Mingguan" color="#03a9f4" />
                    </View>
                  </View>
                  <View style={styles.floatLeft}>
                    <View style={{flex: 1}}>
                      <Text>Bulanan</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                      <RadioButton value="Bulanan" color="#03a9f4" />
                    </View>
                  </View>
                  <View style={styles.floatLeft}>
                    <View style={{flex: 1}}>
                      <Text>Tahunan</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                      <RadioButton value="Tahunan" color="#03a9f4" />
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
            </Modal>
          </View>
          <View>
            <Text style={styles.textLabel}>Harga</Text>
            <View style={styles.floatLeft}>
              <View style={{ flex: 8 }}>
                <TextInput onFocus={this.onFocusChange} keyboardType="numeric" style={styles.inputStyle} value={this.state.minPrice.toString()} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 30, textAlign: "center", marginTop: 5 }}>-</Text>
              </View>
              <View style={{ flex: 8 }}>
                <TextInput onFocus={this.onFocusChange} keyboardType="numeric" style={styles.inputStyle} value={this.state.maxPrice.toString()} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textLabel}>Minimal Pembayaran</Text>
            <TouchableOpacity style={[styles.inputStyle, styles.buttonInput]} color="#03a9f4" uppercase={false} onPress={this.showModal("minBilling")}>
              <Text style={{ color: "#03a9f4", width }}>{this.state.minBilling !== 'Opsional' ? `Min. ${this.state.minBilling} bulan` : this.state.minBilling}</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.modalVisible === "minBilling"} style={styles.modalContainer} propagateSwipe={true}>
              <View style={styles.modalContent}>
                <Appbar.Header style={styles.modalHeader}>
                  <Appbar.Content title="Pilih Minimal Pembayaran" />
                  <Appbar.Action icon="close" onPress={() => this.setState({ modalVisible: "" })} />
                </Appbar.Header>
                <ScrollView>
                  <RadioButton.Group
                    onValueChange={minBilling => this.setState({ minBilling })}
                    value={this.state.minBilling}
                  >
                    {minBillings.map((item, index) => (
                      <View key={index} style={styles.floatLeft}>
                        <View style={{flex: 1}}>
                          <Text>{(item !== "Opsional") ? `Min. ${item} bulan` : item}</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "flex-end"}}>
                          <RadioButton value={item} color="#03a9f4" />
                        </View>
                      </View>
                    ))}
                  </RadioButton.Group>
                </ScrollView>
              </View>
            </Modal>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.textLabel}>Fasilitas</Text>
            {features.map((fitur, index) => (
              <View key={index} style={styles.floatLeft}>
                <Checkbox
                  status={this.state.features[index].status ? 'checked' : 'unchecked'}
                  onPress={() => this.handleFeaturesChange(fitur.name)}
                  color="#03a9f4"
                />
                <Text style={{ paddingTop: 8, }}>{fitur.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={[styles.footerContainer, styles.floatLeft]}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text style={styles.textUppercase}>Simpan</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text style={styles.textUppercase}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text style={[styles.textUppercase, { color: "#03a9f4" }]}>Cari</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  mainContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 20
    // paddingTop: 15
    // marginBottom: 50
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: width / 1.3,
    borderRadius: 10
  },
  modalHeader: {
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  floatLeft: {
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#03A9F4',
  },
  buttonInput: {
    paddingTop: 10,
    paddingHorizontal: 0,
    color: "#333",
    flex: 1,
  },
  textLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10
  },
  footerContainer: {
    padding: 15,
    borderTopColor: "#ddd",
    borderTopWidth: 1
  },
  textUppercase: {
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center"
  }
})

export default Filter;