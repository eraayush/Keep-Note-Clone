import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const styleDeleteBtn = {
  width: '100%'
};

export default function Note(props) {
  function DeleteItem() {
    props.deleteItem(props.id);
  }
  return (
    <>
      <div className="note col border border-1 rounded me-3 mb-3 p-0">
        <div className="p-3 row">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
        </div>
        <div class="text-center">
          <Button
            style={styleDeleteBtn}
            color="error"
            startIcon={<DeleteIcon />}
            onClick={DeleteItem}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
