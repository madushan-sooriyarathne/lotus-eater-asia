import { useEffect, useState } from "react";
import { CounterContainer, CountGroup, Number, Label } from "./Styles";

interface Props {
  toDate: Date;
}

const Counter: React.FC<Props> = ({ toDate }: Props): JSX.Element => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      const dif: number = toDate.getTime() - new Date().getTime();

      if (dif < 0) {
        return;
      } else {
        setDays(Math.floor(dif / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMins(Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((dif % (1000 * 60)) / 1000));
      }
    }, 1000);
  }, []);

  return (
    <CounterContainer>
      <CountGroup>
        <Number>{`${days < 10 ? "0" : ""}${days}`}</Number>
        <Label>Days</Label>
      </CountGroup>
      <CountGroup>
        <Number>{`${hours < 10 ? "0" : ""}${hours}`}</Number>
        <Label>Hours</Label>
      </CountGroup>
      <CountGroup>
        <Number>{`${mins < 10 ? "0" : ""}${mins}`}</Number>
        <Label>Minutes</Label>
      </CountGroup>
      <CountGroup>
        <Number>{`${seconds < 10 ? "0" : ""}${seconds}`}</Number>
        <Label>Seconds</Label>
      </CountGroup>
    </CounterContainer>
  );
};

export default Counter;
