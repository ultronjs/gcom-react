import React from 'react'

function Filter() {
  return (
    <aside className="filter">
            <div className="flex flex-jc-space-between flex-ai-center px-x-small flex-wrap column-gap-small">
                <h3>Filter</h3>
                <div>Clear All</div>
            </div>
            <ul className="non_bullet_list">
                <h3>Price</h3>
                <li><input type="radio" name="price" />Price Low to High</li>
                <li><input type="radio" name="price" />Price High to Low</li>
            </ul>
            <ul className="non_bullet_list">
                <h3>Category</h3>
                <li><input type="radio" />Category-1</li>
                <li><input type="radio" />Category-2</li>
                <li><input type="radio" />Category-3</li>
                <li><input type="radio" />Category-4</li>
            </ul>
            <ul className="non_bullet_list">
                <h3>Rating</h3>
                <input className="rating" type="range" min="1" max="5" />
            </ul>
        </aside>
  )
}

export default Filter