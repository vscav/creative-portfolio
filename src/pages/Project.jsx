import * as React from "react";

const Project = ({ match }) => {
  //   React.useEffect(() => {
  //     console.log(match.params);
  //   }, [match.params]);
  return <div>Page for the following project: {match.params.name}</div>;
};

export default Project;
