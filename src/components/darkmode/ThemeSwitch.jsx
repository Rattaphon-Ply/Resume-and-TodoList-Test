import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = ({ isDark, onToggle }) => {
  return (
    <StyledWrapper>
      <div>
        <input
          type="checkbox"
          id="checkboxInput"
          checked={isDark}
          onChange={onToggle}
        />
        <label htmlFor="checkboxInput" className="toggleSwitch">
          <span className="icon moon"><Moon size={20} /></span>
          <span className="icon sun"><Sun size={20} /></span>
        </label>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  #checkboxInput {
    display: none;
  }

  .toggleSwitch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 60px;
    height: 30px;
    background-color: rgb(190, 236, 247);
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 0 6px;
    box-sizing: border-box;
  }

  .toggleSwitch::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.2s;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.26);
    z-index: 1;
  }

  .icon {
    font-size: 14px;
    z-index: 2;
    transition: opacity 0.2s;
  }

  .sun {
    opacity: 1;
  }

  .moon {
    opacity: 0;
  }

  #checkboxInput:checked + .toggleSwitch {
    background-color: hsl(200, 83%, 7%);
  }

  #checkboxInput:checked + .toggleSwitch::after {
    transform: translateX(30px);
  }

  #checkboxInput:checked + .toggleSwitch .sun {
    opacity: 0;
  }

  #checkboxInput:checked + .toggleSwitch .moon {
    opacity: 1;
  }
`;

export default ThemeSwitch