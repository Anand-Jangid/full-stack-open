const Content = ({contents}) => {
    return (
      <div>
        {contents.map((content) => <Parts key={content.id} content={content} />)}
        <Total contents={contents} />
      </div>
    );
}

const Parts = ({content}) => {
    return (
      <p>
        {content.name} {content.exercises}
      </p>
    );
}

const Total = ({contents}) => {
  return (<p><strong>Number of exercises {contents.reduce((sum, content) => sum += content.exercises, 0)}</strong></p>);
}

export default Content