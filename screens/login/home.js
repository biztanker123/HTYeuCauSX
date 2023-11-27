import React from "react";


class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate("Product")}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Home;