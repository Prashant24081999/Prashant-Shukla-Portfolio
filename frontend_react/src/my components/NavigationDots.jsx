import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
      {['home','about','work','contact','testimonials','skills'].map((item,index)=>(
                <a 
                  key={item+index}
                  className='app__navigation-dot'
                  href={`#${item}`} 
                  style={active===item?{backgroundColor:'#313BC'}:{ }}
                  />

        ))}
    </div>
  )
}

export default NavigationDots
