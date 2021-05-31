import { AnimatePresence } from "framer-motion";
import { Icon, iconVariant } from "./styles";

interface Props {
  small?: boolean;
  show?: boolean;
}

const MouseScrollIndicator: React.FC<Props> = ({
  small = false,
  show = true,
}: Props): JSX.Element => {
  return (
    <AnimatePresence>
      {show && (
        <Icon
          viewBox="0 0 133 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          small={small}
          variants={iconVariant}
          initial="start"
          animate="enter"
          exit="exit"
          key="icon"
        >
          <g id="mouse">
            <rect
              id="mouse-shell"
              x="1.5"
              y="1.5"
              width="130"
              height="203"
              rx="65"
              stroke="black"
              stroke-width="3"
            />
            <rect
              id="mouse-wheel"
              x="56"
              y="49"
              width="21"
              height="35"
              rx="10.5"
              fill="black"
            />
          </g>
        </Icon>
      )}
    </AnimatePresence>
  );
};

export default MouseScrollIndicator;
