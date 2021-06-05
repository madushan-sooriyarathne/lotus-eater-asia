import HotelCard from "@components/hotel-card";
import { ReactNode } from "react";
import { GridSection } from "./styles";

interface Props {
  children: ReactNode;
}

const ItemGrid: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <GridSection>{children}</GridSection>;
};

export default ItemGrid;
