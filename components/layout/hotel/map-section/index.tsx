import { useEffect } from "react";
import { Section, MapBox, LocationDetails } from "./styles";
import mapboxgl, { Map } from "mapbox-gl";
import TextGroup from "@components/text-group";
import HeadingPrimary from "@components/headings/heading-primary";
import HeadingSecondary from "@components/headings/heading-secondary";
import Paragraph from "@components/paragraph";
import HeadingTertiary from "@components/headings/heading-tertiary";
import ButtonPrimary from "@components/buttons/button-primary";
import ButtonLink from "@components/buttons/button-link";

interface Props {
  hotel: Hotel;
}

const MapSection: React.FC<Props> = ({ hotel }: Props): JSX.Element => {
  // load mapbox map once the component is mounted
  useEffect(() => {
    mapboxgl.accessToken = process.env.MAP_BOX_API_KEY as string;
    const map: Map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [hotel.location.coords.lng, hotel.location.coords.lat],
      zoom: 10,
      minZoom: 8,
    });

    const markerElement: HTMLDivElement = document.createElement("div");

    // styling the element
    // styles will be added in the google styles file
    markerElement.className = "marker-element";

    new mapboxgl.Marker(markerElement)
      .setLngLat({
        lat: hotel.location.coords.lat,
        lng: hotel.location.coords.lng,
      })
      .addTo(map);
  });

  return (
    <Section id="location">
      <MapBox id="map-container" />
      <LocationDetails>
        <TextGroup>
          <HeadingSecondary>{hotel.name}</HeadingSecondary>
          <Paragraph>{hotel.location.address}</Paragraph>
        </TextGroup>
        <TextGroup>
          <HeadingTertiary>+94 71 688 0657</HeadingTertiary>
          <Paragraph>reservations@loutseaterasia.com</Paragraph>
        </TextGroup>
        <TextGroup>
          <ButtonLink link="/public/assets/pdf/casa-heliconia-covid-19-guidelines.pdf">
            View Covid-19 Policy
          </ButtonLink>
          <ButtonLink link="/public/assets/pdf/casa-heliconia-covid-19-guidelines.pdf">
            {`View ${hotel.name}'s Fact Sheet`}
          </ButtonLink>
          <ButtonLink link="/public/assets/pdf/casa-heliconia-covid-19-guidelines.pdf">
            Get Directions
          </ButtonLink>
        </TextGroup>
      </LocationDetails>
    </Section>
  );
};

export default MapSection;
