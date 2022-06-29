import Thumbnail from './Thumbnail'

const Result = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result} />
      })}
    </div>
  )
}

export default Result
