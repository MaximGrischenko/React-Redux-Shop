import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import styles from '../catalog.style.css';

const ProductCard = ({ id, title, price, image, description, isAdmin, onDeleteProduct }) => {
  return (
    <Card className={styles.card}>
      { isAdmin ? (
          <div className={styles.cardControls}>
            <IconButton
              onClick={() => onDeleteProduct(id)}>
              <ClearIcon/>
            </IconButton>
          </div>
        ) : (
          null
        )
      }
      <CardActionArea className={styles.actionArea}>
      <div className={styles.imageContainer}>
        <img className={styles.imagePreview} src={ image } alt={title} />
      </div>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            { title }
          </Typography>
          <Typography variant="title" gutterBottom component="h3">
            Price: { price } UAH
          </Typography>
          <Typography component="p">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;