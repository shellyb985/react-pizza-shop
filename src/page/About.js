import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum euismod congue; commodo pulvinar pretium lacinia praesent. Arcu penatibus lorem ante nostra, porttitor hac. Suscipit vulputate lacinia bibendum diam hac. Orci at scelerisque, mi eu velit risus. Placerat habitant condimentum maecenas tempor amet ultrices potenti. Posuere orci eu feugiat placerat porta. Ut amet scelerisque praesent curabitur hac justo. Sagittis faucibus parturient nunc posuere, ornare nullam pretium. Habitant dolor dolor scelerisque massa pharetra ante. Conubia per tellus elementum, libero consequat etiam congue suscipit. Nostra auctor vitae luctus; fermentum platea potenti ex finibus! Sodales augue fusce molestie morbi litora cursus. Nam pellentesque dignissim euismod lobortis eleifend mollis aenean. Parturient nam orci vestibulum faucibus gravida, convallis himenaeos nulla. Nostra eros ullamcorper dignissim ullamcorper curabitur per. Interdum mattis massa hendrerit nostra quam.
            </p>
        </div>
    </div>
  )
}

export default About