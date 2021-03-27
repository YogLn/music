import React, { memo } from 'react'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRank from './c-cpns/recommend-rank'
import TopBanner from './c-cpns/top-banner'
import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
} from './style'

function Recommend (props) {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum />
          <RecommendRank />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}
export default memo(Recommend)

// function Recommend (props) {
//   const { getBanners, topBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>Recommend</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
