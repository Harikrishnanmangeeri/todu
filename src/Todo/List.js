
import React, { useState } from 'react';
import './Todo.css';

const List = ({ props, index, remtask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(props.title);
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <>
      <div className='ed-main'>
        {isEditing ? (
          <input
            type='text'
            value={editedTitle}
            onChange={handleChange}
            className='edit-input'
          />
        ) : (
          <div ed-todo>{props.title}</div>
        )}
        <div className='ed'>
          {isEditing ? (
            <>
              <button className='btn btn-success' type='button' onClick={handleSave}>
                Save
              </button>
              <button className='btn btn-secondary' type='button' onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className='btn btn-info' type='button' onClick={handleEdit}>
              Edit
            </button>
          )}
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => {
              remtask(index);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List;

