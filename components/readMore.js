import { useState } from "react";
import Paragraph from "./paragraph";
import { Button } from "@chakra-ui/react";
import React from "react";


const ReadMore = ({ children, maxCharCount = 100, }) => {
  const text = children.map((child) => child.props.children).join('\n')
  // const text = [children]
  //   .filter((child) => React.isValidElement(child))
  //   .map((child) => child.props.children)
  //   .join('\n');

  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxCharCount) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <div>
      <Paragraph>
        {resultString.split('\n').map((item, key) => (
          <React.Fragment key={key}>
            <p>{item}</p>
            <br />
          </React.Fragment>
        ))}
        <Button
          onClick={toggleIsTruncated}
          colorScheme="teal"
          h={"30px"}
        >
          {isTruncated ? " read more" : " show less"}
        </Button>
      </Paragraph>
    </div>
  )
}

export default ReadMore
