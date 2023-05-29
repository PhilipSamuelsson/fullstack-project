import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>OM OSS</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Om oss</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Lediga jobb</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Vår planet</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Våra medarbetare</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Frågor och svar</a></li>
                        <hr />
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>BOKA FLYG</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Boka flyg</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Resetjänster</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Transport</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Planera din resa</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Flygstatus</a></li>
                        <hr />
					</ul>
				</div>
                <div className="col-xs-12 col-sm-4 col-md-4">
					<h5>INNAN DU FLYGER</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Bagage</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Checka in</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Hantera bokning</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Passinformation</a></li>
						<li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-angle-double-right"></i>Hälsa</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr></hr>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="#">AirVenture</a></u> Trekantsvägen 1, 12059 Stockholm</p>
					<p className="h6">© All right Reversed.<a className="text-green ml-2" href="#"target="_blank" rel="noopener noreferrer">AirVenture</a></p>
				</div>
				<hr></hr>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Footer
