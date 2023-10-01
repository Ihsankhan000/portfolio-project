import React from 'react'
import logo1 from './pic/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-center top">
            <div className="img">
                <img src={logo1} alt="" />
            </div>
            <p>© 2023. All right reserved by GorkCoder-Theme</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
