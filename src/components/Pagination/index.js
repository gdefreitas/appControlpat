import React, { useState } from "react";
import PaginationDot from "react-native-animated-pagination-dot";
import { TouchableOpacity, View, Text } from "react-native";
import { Azul } from "../../styles";
import styles from "./styles";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = 20;

    function prev(){
        if(currentPage > 0) setCurrentPage(currentPage-1);
    }

    function next(){
        if(currentPage < maxPage-1) setCurrentPage(currentPage+1);
    }

  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.menu}>
        <TouchableOpacity onPress={prev}>
          <Text style={styles.menuText}>Prev</Text>
        </TouchableOpacity>
        <PaginationDot
          activeDotColor={Azul}
          curPage={currentPage}
          maxPage={maxPage}
          sizeRatio={1.5}
        />
        <TouchableOpacity onPress={next}>
          <Text style={styles.menuText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Pagination;
