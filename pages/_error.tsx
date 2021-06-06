import ErrorComponent from "@components/layout/error-component";
import { NextPage, NextPageContext } from "next";

interface Props {
  statusCode: number;
}

const Error: NextPage<Props> = ({ statusCode }: Props): JSX.Element => {
  return <ErrorComponent errorCode={statusCode} />;
};

Error.getInitialProps = async (context: NextPageContext): Promise<Props> => {
  const { res, err } = context;

  const statusCode: number = res
    ? res.statusCode
    : err && err.statusCode
    ? err.statusCode
    : 404;

  return {
    statusCode,
  };
};

export default Error;
