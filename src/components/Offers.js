import Header from "./Header";
import SideBar from "./SideBar";
import '../App.css'
function Offers(){
    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-10"><br/><br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card shadow bg-warning">
                                <div className="card-body">
                                    <img src="data:image/png;base64,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" 
                                    style={{width:"200px",height:"150px"}}></img>
                                    <h4>Term Life Insurance</h4>
                                    <p>Get cover till age 85 & Protection against Income Loss. Now secure your family & also cover yourself against 64 critical illnesses</p>                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="card shadow bg-warning">
                                <div className="card-body">
                                    <img src="https://t3.ftcdn.net/jpg/03/05/66/84/360_F_305668486_3jWYdS9STzQVuTgyCMRspLHgdkxioeDh.jpg" 
                                    style={{width:"200px",height:"150px"}}></img>
                                    <h4>Car Loan</h4>
                                    <p>With interest rates as low as 7.00% p.a. and a repayment tenure of up to 8 years, you can find the most suitable car loan for your needs at Bank.</p><br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card shadow bg-warning">
                                <div className="card-body">
                                    <img src="http://www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_5.gif" 
                                    style={{width:"200px",height:"150px"}}></img>
                                    <h4>Credit Card</h4>
                                    <p>Apply for a credit card by comparing the best credit card online MasterCard. You can find credit cards offered by Top banks along with their features, benefits, and fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card shadow bg-warning">
                                <div className="card-body">
                                    <img src="data:image/png;base64,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" 
                                    style={{width:"200px",height:"150px"}}></img>
                                    <h4>Home Loan</h4>
                                    <p>Be it for your big move or an investment option find the perfect loan with Bank. Zero processing fees and low interest rates . Doorstep Service. T&C apply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Offers;