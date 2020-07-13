import React from 'react'

function AboutUs () {

    return (
        <React.Fragment>
            <div className="section-4">
                <div className="box-about">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="abt-top-border"> </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <p className="abt-title text-center">ABOUT US </p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="abt-top-border"> </div>
                        </div>
                    </div>
                    <p className="abt-desc  text-center">
                        This is where high-fashion clothing is <br/>
                        designed and crafted from the heart by <br />
                        an amazing team of craftsmen and <br />
                        designers who understand what fashion <br />
                        is.
                    </p>
                </div>

            </div>
        </React.Fragment>
    )

}

export default AboutUs
