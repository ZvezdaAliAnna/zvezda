import React from "react"
import ContentLoader from "react-content-loader"
import styled from "styled-components";


const CSSProduct = styled.div`
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.45);
  padding: 30px 20px 10px;
  display: flex;
  justify-content: center;
`

const ProductLoader = () => (
    <CSSProduct>
        <ContentLoader
            speed={2}
            width={268}
            height={419}
            viewBox="0 0 268 419"
            backgroundColor="#3a3131"
            foregroundColor="#89876c"
        >
            <rect x="44" y="379" rx="20" ry="20" width="181" height="40" />
            <rect x="18" y="219" rx="10" ry="10" width="52" height="44" />
            <rect x="18" y="219" rx="10" ry="10" width="52" height="44" />
            <rect x="78" y="219" rx="10" ry="10" width="53" height="44" />
            <rect x="78" y="219" rx="10" ry="10" width="53" height="44" />
            <rect x="139" y="219" rx="10" ry="10" width="52" height="44" />
            <rect x="139" y="219" rx="10" ry="10" width="52" height="44" />
            <rect x="199" y="219" rx="10" ry="10" width="52" height="44" />
            <rect x="199" y="219" rx="10" ry="10" width="52" height="44" />
            <rect x="0" y="0" rx="25" ry="25" width="268" height="204" />
            <rect x="0" y="0" rx="25" ry="25" width="268" height="204" />
            <rect x="66" y="298" rx="10" ry="10" width="135" height="38" />
        </ContentLoader>
    </CSSProduct>
)

export default ProductLoader