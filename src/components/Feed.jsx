import Destination from './Destination';
import data from '../data'
console.log(data)

export default function Feed() {
    const renderDestinationsData = data.map(item => {
        return (
          <Destination 
          key={item.id}
          {...item}
          />
        )
      })
      return (
        <>
        {renderDestinationsData}
        </>
      )
}