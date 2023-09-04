import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {commerce} from "../../../lib/commerce";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const CSSProduct = styled.div`
  border-radius: 25px;
  background: #131111;
  padding: 30px 20px 30px;
  position: relative;

  .CSSProductDescroiptionn {
    height: 50px;
    max-height: 50px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    z-index: 2;
    border-radius: 0 0 25px 25px;
    background: #131111;
    width: 100%;
    bottom: -30px;
    left: 0;
    word-break: break-all;
    padding: 0 20px 20px 20px;
    display: none;
  }

  &:hover {
    .CSSProductDescroiptionn {
      display: block;

    }
  }

  @media only screen and (max-width: 993px) {
    .CSSProductDescroiptionn {
      position: static;
      padding: 10px 0 0 0;
      display: block;
    }
  }

`
const CSSProductTitle = styled.div`
  margin: 27px auto 15px;
  text-align: center;
  height: 67px;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;

`
const CSSProductImage = styled.div`
  height: 205px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid var(--white);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const CSSProductPrice = styled.div`
  display: block;
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid var(--white);
  background: transparent;
  font-size: 17px;
  font-weight: 400;
  color: var(--white);
  text-align: center;
  max-width: 180px;
  padding: 10px 20px;
  margin: 0 auto 8px;
  transition: var(--transition);

`

const CSSProductImages = styled.div`
  > div {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 15px;
  }


  .address {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: 1px solid #FFF;
    overflow: hidden;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`


const Product = ({product}: any) => {
    const {t, i18n} = useTranslation();
    const langCode = `[${i18n.language}]`
    let [currentProduct, setCurrentProduct] = useState([]);


    const fetchProducts = async () => {
        const response = await commerce.products.retrieve(product.id);

        setCurrentProduct(response);

    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <CSSProduct>

            <CSSProductImage><img src={product.image ? product.image.url : ('/images/no-image.jpg')}
                                  alt={product.name}/></CSSProductImage>
            {/* @ts-ignore*/}

                <CSSProductImages>
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        {    // @ts-ignore
                            currentProduct.assets && currentProduct.assets.map((item, key) => (
                                (key < 5) && (key !== 0) && (
                                    <a className="address" href={item.url} key={key}><img src={item.url} alt={product.name}/></a>)
                            ))
                        }
                    </LightGallery>

                </CSSProductImages>

            <CSSProductTitle>{product.name.replace(langCode, '')}</CSSProductTitle>
            <CSSProductPrice>{product.price.formatted_with_code}</CSSProductPrice>
            {product.description && (
                <div className="CSSProductDescroiptionn"
                     dangerouslySetInnerHTML={{__html: product.description}}></div>
            )}

        </CSSProduct>
    );
};

// @ts-ignore
export default Product;