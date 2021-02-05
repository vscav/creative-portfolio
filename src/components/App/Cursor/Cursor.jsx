import * as React from "react";
import { useEventListener } from "hooks/useEventListener";
import IsDevice from "helpers/isDevice";
import IsBrowser from "helpers/isBrowser";

import { CursorInner, CursorOuter } from "./styles";

const CursorCore = ({
  innerSize = 8,
  innerScale = 0.7,
  outerSize = 8,
  outerScale = 5,
}) => {
  const cursorOuterRef = React.useRef();
  const cursorInnerRef = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveClickable, setIsActiveClickable] = React.useState(false);
  let endX = React.useRef(0);
  let endY = React.useRef(0);

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = clientY + "px";
    cursorInnerRef.current.style.left = clientX + "px";
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        cursorOuterRef.current.style.top = coords.y + "px";
        cursorOuterRef.current.style.left = coords.x + "px";
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef, coords.x, coords.y]
  );

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [animateOuterCursor]);

  const onMouseDown = React.useCallback(() => {
    setIsActive(true);
  }, []);

  const onMouseUp = React.useCallback(() => {
    setIsActive(false);
  }, []);

  const onMouseEnter = React.useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  useEventListener("mousemove", onMouseMove, document);
  useEventListener("mousedown", onMouseDown, document);
  useEventListener("mouseup", onMouseUp, document);
  useEventListener("mouseenter", onMouseEnter, document);
  useEventListener("mouseleave", onMouseLeave, document);

  React.useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `translateZ(0) scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `translateZ(0) scale(${outerScale})`;
    } else {
      cursorInnerRef.current.style.transform = "translateZ(0) scale(1)";
      cursorOuterRef.current.style.transform = "translateZ(0) scale(1)";
    }
  }, [innerScale, outerScale, isActive]);

  React.useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `translateZ(0) scale(${
        innerScale * 1.3
      })`;
      cursorOuterRef.current.style.transform = `translateZ(0) scale(${
        outerScale * 1.4
      })`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  React.useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = (1).toString();
      cursorOuterRef.current.style.opacity = (1).toString();
    } else {
      cursorInnerRef.current.style.opacity = (0).toString();
      cursorOuterRef.current.style.opacity = (0).toString();
    }
  }, [isVisible]);

  React.useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );
    clickables.forEach((el) => {
      el.style.cursor = "none";

      el.addEventListener("mouseover", () => {
        setIsActive(true);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  document.body.style.cursor = "none";

  return (
    <React.Fragment>
      <CursorOuter ref={cursorOuterRef} size={outerSize} />
      <CursorInner ref={cursorInnerRef} size={innerSize} />
    </React.Fragment>
  );
};

const AnimatedCursor = ({
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) => {
  if (
    typeof navigator !== "undefined" &&
    (IsDevice?.any() || IsBrowser?.Firefox() || IsBrowser?.Safari())
  ) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <CursorCore
      innerSize={innerSize}
      innerScale={innerScale}
      outerSize={outerSize}
      outerScale={outerScale}
    />
  );
};

export default AnimatedCursor;
