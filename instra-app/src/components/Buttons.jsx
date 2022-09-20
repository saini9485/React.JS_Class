import React, { Component } from 'react'
export class Buttons extends Component {
  render() {
    return (
        <div className='post-button_area'>
            <div>
                <button><i class="fa-regular fa-heart"></i></button>
                <button><i class="fa-regular fa-comment"></i></button>
                <button><i class="fa-solid fa-share"></i></button>
           </div>
           <div>
                <button><i class="fa-regular fa-bookmark"></i></button>
          </div>
           
        </div>
      
    )
  }
}
