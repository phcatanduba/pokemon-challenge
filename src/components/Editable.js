import { useState } from "react";
import styled from "styled-components";

import { RiPencilFill } from "react-icons/ri";

export default function Editable({ text, setText }) {
  const [isEditing, setEditing] = useState(false);
  const placeholder = "My Team";

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }

  return (
    <Section>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          <Input
            type="text"
            maxLength="25"
            value={text}
            autoFocus
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      ) : (
        <div className="container">
          <Text>{text || placeholder || "Editable content"}</Text>
          <RiPencilFill onClick={() => setEditing(true)} />
        </div>
      )}
    </Section>
  );
}

const Section = styled.section`
  .container {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Text = styled.span`
  color: #333652;
  font-size: 13px;
  font-weight: 800;
  line-height: 48px;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: #333652;
  height: 13px;
  width: 100px;
  font-size: 13px;
  font-weight: 800;
  line-height: 48px;
`;
