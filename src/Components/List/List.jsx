import React from 'react'
import ListItem from '../ListItem/ListItem'
import * as ListStyles from './List.module.css'

const List = ({listItems}) => {
  return (
    <div>
        <ul className={ListStyles.list}>
            {listItems.map((listItem, index) => <ListItem key={index} listItem={listItem}/>)}
        </ul>
    </div>
  )
}

export default List