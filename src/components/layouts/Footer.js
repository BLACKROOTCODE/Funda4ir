import React from 'react';
import styled from 'styled-components'

 function footer() {
    return (
        <Footercontainer class="main-footer">
            <div class="footer-middle">
            <div class="container">
                <div class="row">
                    {/*Column 1*/}
                    <div class="col-md-3 col-sm-6" align="center">
                        <h4>Contaact Us</h4>
                        <ul class="list-unstyled">
                            <li><a href="/">List one</a></li>
                            <li><a href="/">List two</a></li>
                            <li><a href="/">List three</a></li>
                            <li><a href="/">List four</a></li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div class="col-md-3 col-sm-6" align="center"> 
                        <h4>Contaact Us</h4>
                        <ul class="list-unstyled">
                            <li><a href="/">List one</a></li>
                            <li><a href="/">List two</a></li>
                            <li><a href="/">List three</a></li>
                            <li><a href="/">List four</a></li>
                        </ul>
                    </div>
                    {/*Column 3*/}
                    <div class="col-md-3 col-sm-6" align="center">
                        <h4>Contaact Us</h4>
                        <ul class="list-unstyled">
                            <li><a href="/">List one</a></li>
                            <li><a href="/">List two</a></li>
                            <li><a href="/">List three</a></li>
                            <li><a href="/">List four</a></li>
                        </ul>
                    </div>
                    {/*Column 4*/}
                    <div class="col-md-3 col-sm-6" align="center">
                        <h4>Contaact Us</h4>
                        <ul class="list-unstyled">
                            <li><a href="/">List one</a></li>
                            <li><a href="/">List two</a></li>
                            <li><a href="/">List three</a></li>
                            <li><a href="/">List four</a></li>

                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div class="footer-bottom">
                    <p class="text-xs-center">
                        &copy;{new Date().getFullYear()} Funda4IR All rights Reserved  
                    </p>
                </div>
            </div>
            </div>
        </Footercontainer>
    );
}

export default footer;

const Footercontainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top:3rem;
    color:var(--mainWhite);

}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}

`;
