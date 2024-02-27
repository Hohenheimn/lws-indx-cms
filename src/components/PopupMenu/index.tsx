import React, { useState } from "react";
import { usePopper } from "react-popper";

type Props = {
  buttonClassname?: string;
  menuContainerClassname?: string;
  buttonName: string | React.ReactNode;
  menuContent: React.ReactNode;
};

const PopupMenu = ({
  buttonClassname,
  menuContainerClassname,
  buttonName,
  menuContent,
}: Props) => {
  const [isToggle, setToggle] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  return (
    <>
      <button
        ref={setReferenceElement}
        className={buttonClassname}
        onClick={() => setToggle(!isToggle)}
      >
        {buttonName}
      </button>
      {isToggle && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={menuContainerClassname}
        >
          {menuContent}
        </div>
      )}
    </>
  );
};

export default PopupMenu;
