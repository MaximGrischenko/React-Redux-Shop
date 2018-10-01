import React from "react";

import EditorMenu from './components/editor-menu';
import EditorForm from './components/editor-form';

import styles from './editor.style.css';

const EditorComponent = ({ form, addProduct, storeFormFields, clearFormFields }) => {
  return (
    <section className={styles.root}>
      <EditorMenu />
      <EditorForm formData={ form }
                  onStoreFormFields={ storeFormFields }
                  onAddProduct ={ addProduct }
                  onClearFormFields={ clearFormFields }/>
    </section>
  )
};

export default EditorComponent;