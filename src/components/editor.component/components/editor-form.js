import React, { Component } from "react";

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import UploadIcon from '@material-ui/icons/CloudUpload';
import TextField from "@material-ui/core/TextField";

import styles from '../editor.style.css';

const IDgenerator = ()=> {
  return '_' + Math.random().toString(36).substr(2, 4);
};

class EditorForm extends Component {
  constructor(props) {
    super(props);

    this.onSelectFile = this.onSelectFile.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onSelectFile(event) {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.props.onStoreFormFields('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  onHandleSubmit(event) {
    event.preventDefault();

    this.props.onAddProduct({id: IDgenerator(), ...this.props.formData});
    this.props.onClearFormFields();
  }

  render() {
    const inputFileStyle = {display: 'none'};
    const { title, price, description, image } = this.props.formData;
    const { onStoreFormFields } = this.props;
    return (
      <Card className={styles.card}>
        <CardActionArea
          className={styles.actionArea}
          onClick={() => {
            this.inputFile.click()
          }}>
          <input name='file' type='file' style={inputFileStyle}
                 accept="image/png, image/jpeg, image/jpg"
                 ref={(input) => this.inputFile = input}
                 onChange={this.onSelectFile}/>
          <Paper className={styles.uploadArea}>
            { image ? (
                <img className={styles.imagePreview} src={image}  alt=""/>
              ) : (
                <UploadIcon />
              )
            }
          </Paper>
        </CardActionArea>
        <CardContent className={styles.cardContent}>
          <form className={styles.grow} noValidate autoComplete="off" onSubmit={this.onHandleSubmit}>
            <TextField
              label="Title"
              placeholder="Title"
              value={title}
              margin="normal"
              fullWidth
              variant="outlined"
              onChange={(event) => onStoreFormFields('title', event.target.value)}
            />
            <TextField
              className={styles.grow}
              label="Description"
              placeholder="Description"
              value={description}
              multiline
              margin="normal"
              variant="outlined"
              onChange={(event) => onStoreFormFields('description', event.target.value)}
            />
            <TextField
              id="outlined-number"
              label="Price"
              placeholder="UAH"
              value={price}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
              onChange={(event) => onStoreFormFields('price', +(event.target.value))}
            />
            <div className={styles.formControls}>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default EditorForm;