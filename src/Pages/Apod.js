//React
import { Author } from "../Components/Author/Author";
import { Content } from "../Components/Content/Content";
import { Error } from "../Components/Error/Error";
import { Spinner } from "../Components/Spinner/Spinner";
import { Date } from "../Components/Date/Date";

//CustomHook
import useFetch from "../Hooks/useFetch";

//Components
import { AstroPic } from "../Components/AstroPic/AstroPic";
import { AstroFrame } from "../Components/AstroFrame/AstroFrame";
import { Title } from "../Components/Title/Title";

//ENV 
const APIKEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_BASE_URL;

export const Apod = ({ show, setShow }) => {
  const { data, error, loading } = useFetch(`${URL}${APIKEY}`);

  return (
    <>
      {loading ? <Spinner loading={loading} /> : null}
      {error ? <Error error={error} /> : null}
      {data && (
        <div className="flex flex-col m-auto my-10 text-white w-11/12">
          <Title>{data.title}</Title>
          <div className="h-full ">
            <div className="object-fill">
              {data.media_type === "image" ? (
                <AstroPic pic={data.url} />
              ) : (
                <AstroFrame dataUrl={data.url} />
              )}
            </div>

            <div className="object-contain mb-4">
              <Author>{data.copyright}</Author>
              <Date>{data.date}</Date>
              <Content>{data.explanation}</Content>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
