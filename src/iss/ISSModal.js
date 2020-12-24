import React, {useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import { Modalize } from "react-native-modalize";

import ISSstats from "./ISSstats";
import { useTheme } from "../theme/ThemeProvider";

const ISSModal = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef}>...your content</Modalize>
    </>
  );
};
export default ISSModal;

const s = StyleSheet.create({
  content: {
    padding: 20,
  },

  content__modal: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: "600",
    color: "#919",
  },

  content__heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: "200",
    lineHeight: 22,
    color: "#666",
  },
});
