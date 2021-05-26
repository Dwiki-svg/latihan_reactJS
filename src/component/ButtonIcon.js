import React from 'react'

export default function ButtonIcon() {
    return (
        <div>
            <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
  <i className="fas fa-heart"></i> Large
</button>
        </div>
    )
}
