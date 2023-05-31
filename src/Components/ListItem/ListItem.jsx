import React from 'react'

const ListItem = ({listItem}) => {
    console.log(listItem);
  return (
    <li>{`Se ha agregado ${listItem} a la lista`}</li>
  )
}

export default ListItem