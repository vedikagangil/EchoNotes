import React from "react";

interface InfoProps {
    isCollapsed: boolean;
}

const Info = React.forwardRef<HTMLButtonElement, InfoProps>(({ isCollapsed }, ref) => {
  // Return an empty fragment - this component will render nothing
  return null;
});

Info.displayName = "Info";

export default Info;