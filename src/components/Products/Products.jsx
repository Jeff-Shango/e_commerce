import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from './styles';

import Product from "./Product/Product";

const products = [
    { id: 1, name: '1:1', description: '1:1 Personal Training.', price: '$45', image: "src/assets/personaltraining.png"},
    { id: 2, name: 'Group', description: 'Group Training.', price: '$40', image: "src/assets/personaltraining.png"},
]
const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;