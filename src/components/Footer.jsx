import Grid from './Grid'

import { Link } from 'react-router-dom'

import Logo from '../assets/images/logona.png'

const footerAboutLink = [
  {
    display: "Giới thiệu",
    path: "/about"
  },
  {
    display: "Liên hệ",
    path: "/contact"
  },
]

const footerCustomerLink = [
  {
    display: "Chính sách đổi trả",
    path: "/about"
  },
  {
    display: "Chính sách bảo hành",
    path: "/about"
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about"
  },
]


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            
            <div className="footer__title">
              Thông tin shop
            </div>
            <ul className="footer__content">
              {
                footerAboutLink.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <div className="footer__title">
              Chăm sóc khách hàng
            </div>
            <ul className="footer__content">
              {
                footerCustomerLink.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='footer__about'>
            <Link to='/'>
              <img src={Logo} className='footer__logo' />
            </Link>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer