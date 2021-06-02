import { useEffect, useState } from "react";
import { fetchTemp } from "@utils";
import HeadingSecondary from "@components/headings/heading-secondary";
import HeadingSub from "@components/headings/heading-sub";

import {
  Section,
  SummeryContainer,
  SummeryItem,
  TitleContainer,
} from "./styles";

interface Props {
  hotel: Hotel;
}

const HotelOverviewSection: React.FC<Props> = ({
  hotel,
}: Props): JSX.Element => {
  let baseRoom: Room | undefined;

  // state
  // using 27 as the default temp of sri lanka
  const [temp, setTemp] = useState<number>(27);

  if (hotel.rooms.length > 1) {
    baseRoom = hotel.rooms.reduce((prev, curr) =>
      prev.bar < curr.bar ? prev : curr
    );
  }

  useEffect(() => {
    fetchTemp(hotel.location.coords.lng, hotel.location.coords.lat).then(
      (result) => setTemp(result)
    );
  }, []);

  return (
    <Section id="overview">
      <SummeryContainer>
        <SummeryItem>
          <HeadingSecondary>{hotel.rooms.length}</HeadingSecondary>
          <HeadingSub small>Rooms</HeadingSub>
        </SummeryItem>
        <SummeryItem>
          <HeadingSecondary>{hotel.location.place}</HeadingSecondary>
          <HeadingSub small>Location</HeadingSub>
        </SummeryItem>
        <SummeryItem>
          <HeadingSecondary>{`${temp} °C`}</HeadingSecondary>
          <HeadingSub small>Current Temperature</HeadingSub>
        </SummeryItem>
        {baseRoom && (
          <SummeryItem>
            <HeadingSecondary>{`${baseRoom.currency} ${baseRoom.bar}`}</HeadingSecondary>
            <HeadingSub small>Starting From</HeadingSub>
          </SummeryItem>
        )}
      </SummeryContainer>
      <TitleContainer>
        <HeadingSecondary alignment="left">
          {hotel.description}
        </HeadingSecondary>
      </TitleContainer>
    </Section>
  );
};

export default HotelOverviewSection;
