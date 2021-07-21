import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import YouTube from "react-youtube";
import get from "lodash/get";

import "./styles.scss";

const RenderContent = ({ data }) => {
  if (data.type === "image") {
    return <img className="image" src={get(data, "value.url")} alt="content" />;
  }
  if (data.type === "youtube") {
    return <YouTube className={"youtube-video"} videoId={data.value} />;
  }
  if (data.type === "markdown") {
    return (
      <ReactMarkdown
        className="table-content"
        children={data.value}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[gfm]}
      />
    );
  }
  if (data.type === "python" || "javascript") {
    return (
      <code className="language-python code-block">
        {" "}
        <br />
        {get(data, "value.code")} <br />
      </code>
    );
  }
  if (data.type === "bash") {
    return (
      <code className="language-bash code-block">
        {" "}
        {get(data, "value.code")}{" "}
      </code>
    );
  }
  return "";
};

function ExerciseContent(props) {
  const { content = [] } = props;

  if (!content) {
    return "";
  }

  return (
    <div className="ng-exercise-content">
      {content.map((contentItem, index) => (
        <RenderContent data={contentItem} key={index} />
      ))}
    </div>
  );
}

ExerciseContent.propTypes = {
  content: PropTypes.array,
};

export default ExerciseContent;
