
// import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import ContactForm from '../components/ContactForm.js'



class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }
       }
      ></div>
      
    )
    
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flow-root' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>A technological revolution : Blockchain</h3>
          <p>
          During the last decade, Bitcoin with its underlying Blockchain technology has paved the way to new financial peer to peer models. 
          A new class of Digital Assets has appeared : the Crypto Assets. 
          </p>
          <p>
          Copy-protected by the network itself, this unique assets which can be fungible, doesn't require any central authority for settlement, enabling their instantly and non-stop tradability. 
          </p>
          <p>
          Crypto Assets may represent all forms of traditionnal assets like commodities, company's shares, bonds and more over sound money like Bitcoin. 
          </p>
          <p>
          Traditionnal assets are progressively shifting to Crypto Assets, unleashing the speed and access to exchange value worldwide at a fraction of the current cost.
          World reknown institutions have already invested massively in this major financial innovation and are building the next infrastucture of tomorrow.
          </p>
          <p>
          It's critical to understand how the financial system evolves to benefit from this changes.
          We are to here help you to thrive with this new technologies that can unleash your business opportunities.
          </p>
          
        </article>

        <article
          id="work"
className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          Blockchain and cryptoassets are intrinscly tied. One cannot be valuable without the other. 
					This ecosystem is becoming more connected to traditional finance due to the growth of gateways bridging both worlds, as well as regulatory environment is evolving positively.
          </p>
          <h3>Cryptomarkets</h3>	
          <p>
          Investing and storing cryptocurrencies can be difficult and hasardous. We assist financial advisors, wealth managers, funds and family offices thanks to our solid network of crypto-exchanges and banking partners.
          </p>
          <h3>Cryptoassets</h3>
          <p>
          We advise companies on Digital Assets. From risk assessment to design or to integrate into an existing infrastructure, we always taking account of the regulatory framework and existing business organisation to optimise processus progressively. 
          </p>
          <h3>Technology Developments</h3>
          <p>
          We turn your ideas into products. We use agile methodologies and work mostly with advanced technologies for web and finance decentralization. 
          </p>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Working in the blockchain industry since 2013, Romain Braud has developped strong skills in blockchain technologies and its businesses applications. He works closely with banking industry leaders and asset management companies.	
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          
          <section id="contactUs" className="main special">
          <header className="major">
          <ContactForm action="https://www.flexyform.com/f/370c455a0d294de6d3e5e4a65eababa469349bed"></ContactForm>       

           
    </header>
</section>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/romainbraud"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/romainbraud/" className="icon fa-linkedin">
                <span className="label">Facebook</span>
              </a>  
            </li>
            <li>
              <a
                href="https://github.com/romainbraud/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

export default Main
