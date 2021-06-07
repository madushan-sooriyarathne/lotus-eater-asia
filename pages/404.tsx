import Container from "@components/layout/common/container";
import ErrorComponent from "@components/layout/error-component";

const NotFoundPage: React.FC = (): JSX.Element => {
  return <ErrorComponent errorCode={404} />;
};

export default NotFoundPage;
