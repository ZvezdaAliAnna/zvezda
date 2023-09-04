import React, {useEffect, useState} from 'react';
import {commerce} from "../../lib/commerce";
import styled from "styled-components";
import Product from "./components/Product";
import Pagination from '@mui/material/Pagination';
import {Grid} from "@mui/material";
import ProductLoader from "../../components/ProductLoader/ProductLoader";
import i18next from "../../lib/i18n" ;
import {useTranslation} from "react-i18next";

const CSSCatalog = styled.div`
  background: url("/images/bg/bg-catalog.jpg") center no-repeat;
  background-size: cover;
  height: 100%;
  color: var(--white);
  padding: 230px 0 100px;

  @media only screen and (max-width: 993px) {
    padding: 130px 0 50px;
  }

  h1 {
    margin-bottom: 70px;
    
    @media only screen and (max-width: 993px) {
      font-size: 50px;
      line-height: 70px;
    }
  }
`

const Catalog = () => {
    let [products, setProducts] = useState([]);
    let [isLoading, setLoading] = useState(true);
    const {t, i18n} = useTranslation();


    const fetchProducts = async () => {
        const {data} = await commerce.products.list({
            limit: 200
        });

        setProducts(data);
        setLoading(false);

    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const loaders = [];
    for (let i = 0; i < 8; i++) {
        loaders.push(
            <Grid item xs={12} sm={6} md={3} key={i}>
                <ProductLoader/>
            </Grid>
        );
    }

    const langCode = `[${i18n.language}]`

    let productLang: any = [];

    products.map((item: any) => {
        if (item.name.indexOf(langCode) !== -1) {
            productLang.push(item)
        }
        return productLang;
    })


    return (
        <CSSCatalog>
            <div className="container">
                <>
                    <h1>{t('catalog.title')}</h1>
                    <Grid container spacing={{xs: 2, md: 3}}>
                        {isLoading && loaders}

                        {
                            productLang.map((item: any) => (
                                <Grid item xs={12} sm={6} md={3} key={item.id}>
                                    <Product product={item}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </>
            </div>
        </CSSCatalog>
    );
};

export default Catalog;