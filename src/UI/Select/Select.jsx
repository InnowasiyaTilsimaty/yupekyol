import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/vars";
import icons from "../../assets/icons/arrowDown.svg";
import { ReactSVG } from "react-svg";

const Select = ({ initialValue, onSelect, items, onEdit }) => {

  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialValue);

  

  const handleItemClick = (item) => {
    setSelectedItem(item.label);
    setIsActive(false);
    onEdit(item.value); // Pass selected language code
  };

  const arrowIconStyle = {
    transform: isActive ? "rotate(180deg)" : "rotate(0)",
    transition: "transform 0.3s ease",
    marginLeft: "5px"
  };
  return (
    <SliderStyled >
      <div className="dropdown">
        <div className="dropdownBtn" onClick={() => setIsActive(!isActive)}>
          {selectedItem || "Выберите пункт"}
          <div style={arrowIconStyle}>
            <ReactSVG className="dropDownIcon" src={icons}/>
            
          </div>
        </div>
        {isActive && (
          <div className="dropdownContent">
            <div className="sideBarMain">
            {items.map((item, index) => (
                <div
                  key={index}
                  className="dropdownItem"
                  onClick={() => handleItemClick(item)}
                >
                 {item.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  .dropdown {
    width: 100%;
    position: relative;
    user-select: none;
    .dropdownBtn {
      background-color: ${colors.accentColor};
      padding: 15px 24px;
      border: 1px solid ${colors.accentColor};
      border-radius: 12px;
      cursor: pointer;
      color: ${colors.white};
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease;
      &:hover{
        border: 1px solid ${colors.hoverColor};
      }
    }
    .dropdownContent {
      position: absolute;
      transition: all 0.3s ease;
      border-radius: 12px;
      padding: 10px;
      background-color: ${colors.accentColor};
      z-index: 100;
      color: ${colors.white};
      width: 100%;
      margin-top: 10px;

      .dropdownItem {
        text-align: left;
        padding: 10px;
        border-radius: 12px;
        color: ${colors.gray800};
        cursor: pointer;
        &:hover{
            color: ${colors.white};
            background-color: ${colors.additionalColor};
        }
      }
    }
    .dropDownIcon{
      margin-left: 5px;
        line-height: 0px;
        svg{
            path{
                stroke: ${colors.gray800};
            }
        }
    }
  }
  .sideBarMain{
    margin-bottom: 0px;
  }
`;

export default Select;
