import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetRate } from "../../admin/hooks/api/rate/useRate";
import { useGetProductById } from "../hooks/api/useProduct";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductImages from "./ProductImages";
import Stars from "./Stars";

const ProductDisplay = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data, isLoading, isError } = useGetProductById(id);
  const [totalRate, setTotalRate] = useState(0);
  const { data: rateData } = useGetRate();

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [isError]);
  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error</>;
  }

  const {
    name,
    weight,
    description,
    countInStock: stock,
    _id: sku,
    image,
  } = data;

  const calculateGold = () => {
    let total;
    total = weight * (rateData?.rates[0].rate / 10);
    setTotalRate(total);
    alert(`Your Total Rate for this product is: Rs. ${total}`);
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="section section-center page">
          <Button variant="contained" onClick={()=>history.push("/")} style={{marginTop:"5px",marginLeft:"5px"}}>

            Back To Home
          </Button>
          <div className="product-center">
            <ProductImages images={image} />
            <section className="content">
              <h3>Today Gold Rate: Rs {rateData?.rates[0].rate}</h3>
              <h2>{name}</h2>
              <Stars stars={5} reviews={5} />

              <h5 className="price">Weight: {weight}gm</h5>
              <p className="desc">Description: {description}</p>
              <p className="info">
                <span>Available : </span>
                {stock > 0 ? "In stock" : "out of stock"}
              </p>
              <p className="info">
                <span>SKU :</span>
                {sku}
              </p>
              {totalRate > 0 && (
                <p className="info">
                  <span>Total Rate :</span>
                  Rs. {totalRate}
                </p>
              )}
              <Button variant="contained" onClick={() => calculateGold()}>
                Calculate
              </Button>
            </section>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default ProductDisplay;
