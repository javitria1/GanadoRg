import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const SearchBar = () => {

    const redirectUrl="/search-results";
  
    return (
    <DropdownButton
      id="dropdown-item-button"
      title="¿Que finca quieres atender?"
      variant="secondary"
    >
      <Dropdown.ItemText>Ubicada en:</Dropdown.ItemText>
      <Dropdown.Item href = {redirectUrl}>Aipe - Huila</Dropdown.Item>
      <Dropdown.Item href = {redirectUrl} >Villa de Leyva - Boyacá</Dropdown.Item>
      <Dropdown.Item href = {redirectUrl} >Espinal - Tolima</Dropdown.Item>
    </DropdownButton>
  );
};

export default SearchBar;
