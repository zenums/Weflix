import Bestof from "../features/topRated/bestof"
import SwiperTopRated from "../features/topRated/swiperTopRated"
import '../features/topRated/topRated.css'

export default function topRated() {
  return (
    <div>
         <SwiperTopRated />   
         <Bestof />
    </div>
  )
}